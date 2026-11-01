s=open('src/components/WorldMap.astro', encoding='utf-8').read()
def rep(a,b):
    global s
    assert a in s,a[:80]; s=s.replace(a,b,1)

code=r'''// ----- tracing the highlighted area of a map image -----
function fitAffine(P, T) {
  const M = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], v = [0, 0, 0];
  for (let i = 0; i < P.length; i++) { const r = [P[i][0], P[i][1], 1]; for (let a = 0; a < 3; a++) { v[a] += r[a] * T[i]; for (let b = 0; b < 3; b++) M[a][b] += r[a] * r[b]; } }
  for (let i = 0; i < 3; i++) {
    let p = i; for (let j = i + 1; j < 3; j++) if (Math.abs(M[j][i]) > Math.abs(M[p][i])) p = j;
    [M[i], M[p]] = [M[p], M[i]]; [v[i], v[p]] = [v[p], v[i]]; if (Math.abs(M[i][i]) < 1e-12) return null;
    for (let j = i + 1; j < 3; j++) { const f = M[j][i] / M[i][i]; for (let k = i; k < 3; k++) M[j][k] -= f * M[i][k]; v[j] -= f * v[i]; }
  }
  const x = [0, 0, 0]; for (let i = 2; i >= 0; i--) { let t = v[i]; for (let k = i + 1; k < 3; k++) t -= M[i][k] * x[k]; x[i] = t / M[i][i]; } return x;
}
function mooreTrace(m, W, H, sx, sy) {
  const DX = [-1, -1, 0, 1, 1, 1, 0, -1], DY = [0, -1, -1, -1, 0, 1, 1, 1], at = (x, y) => x >= 0 && y >= 0 && x < W && y < H && m[y * W + x] === 1;
  let cx = sx, cy = sy, bx = sx - 1, by = sy; const out = [[cx, cy]];
  for (let n = 0; n < W * H; n++) {
    let bi = 0; for (let d = 0; d < 8; d++) if (cx + DX[d] === bx && cy + DY[d] === by) { bi = d; break; }
    let moved = false;
    for (let k = 1; k <= 8; k++) { const d = (bi + k) % 8, nx = cx + DX[d], ny = cy + DY[d]; if (at(nx, ny)) { const pd = (d + 7) % 8; bx = cx + DX[pd]; by = cy + DY[pd]; cx = nx; cy = ny; moved = true; break; } }
    if (!moved || (cx === sx && cy === sy)) break;
    out.push([cx, cy]);
  }
  return out;
}
function simplify(pts, tol) {
  if (pts.length < 4) return pts;
  const keep = new Uint8Array(pts.length); keep[0] = keep[pts.length - 1] = 1; const st = [[0, pts.length - 1]];
  while (st.length) {
    const [a, b] = st.pop(); let md = 0, mi = -1; const [x1, y1] = pts[a], [x2, y2] = pts[b], dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1;
    for (let i = a + 1; i < b; i++) { const d = Math.abs(dy * pts[i][0] - dx * pts[i][1] + x2 * y1 - y2 * x1) / L; if (d > md) { md = d; mi = i; } }
    if (md > tol && mi > 0) { keep[mi] = 1; st.push([a, mi], [mi, b]); }
  }
  return pts.filter((_, i) => keep[i]);
}
// Gemini finds reference points and the coloured area; the app places the image on the globe and cuts the colour out.
async function traceWiki(img, subject) {
  const g = (await gem([{ text: `This is a map image. Subject: "${subject}". Use coordinates x (0 to 1000 from the left edge) and y (0 to 1000 from the top edge). 1) List 6 to 10 control points: clearly identifiable real places in the image (coast corners, river mouths, labelled cities), spread far apart, each with its real latitude and longitude and its x,y position in the image. 2) List 1 to 4 seed points: an x,y position well inside each separately coloured highlighted area that belongs to the subject (not legend swatches, not text). Reply ONLY JSON {"controls":[{"name":"","lat":0,"lon":0,"x":0,"y":0}],"seeds":[{"x":0,"y":0}],"note":""}.` }, { inline_data: { mime_type: img.mime, data: img.data } }])).data;
  const C = (g?.controls || []).filter((c) => [c.x, c.y, c.lat, c.lon].every(Number.isFinite) && c.x >= 0 && c.x <= 1000 && c.y >= 0 && c.y <= 1000 && Math.abs(c.lat) <= 85 && Math.abs(c.lon) <= 180);
  if (C.length < 4 || !g?.seeds?.length) throw new Error('Gemini found too few reference points');
  const mer = (l) => Math.log(Math.tan(Math.PI / 4 + (l * Math.PI) / 360)), unm = (y) => ((2 * Math.atan(Math.exp(y)) - Math.PI / 2) * 180) / Math.PI;
  const tryFit = (merc) => {
    let pts = C.slice(), fit = null;
    for (let it = 0; it < 4; it++) {
      const P = pts.map((c) => [c.x / 1000, c.y / 1000]), fx = fitAffine(P, pts.map((c) => c.lon)), fy = fitAffine(P, pts.map((c) => (merc ? mer(c.lat) : c.lat)));
      if (!fx || !fy) return null;
      const res = pts.map((c, i) => { const [u, v] = P[i], y = fy[0] * u + fy[1] * v + fy[2]; return Math.hypot(fx[0] * u + fx[1] * v + fx[2] - c.lon, (merc ? unm(y) : y) - c.lat); });
      fit = { fx, fy, merc, res };
      const sorted = res.slice().sort((a, b) => a - b), med = sorted[Math.floor(sorted.length / 2)], worst = Math.max(...res);
      if (pts.length > 4 && worst > 3 * med + 0.5) pts = pts.filter((_, i) => res[i] !== worst); else break;
    }
    fit.rmse = Math.sqrt(fit.res.reduce((s, r) => s + r * r, 0) / fit.res.length); return fit;
  };
  const f = [tryFit(false), tryFit(true)].filter(Boolean).sort((a, b) => a.rmse - b.rmse)[0];
  const span = Math.max(...C.map((c) => c.lon)) - Math.min(...C.map((c) => c.lon));
  if (!f || f.rmse > Math.max(1.5, span * 0.05)) throw new Error(`could not place the image on the globe (error ${f ? f.rmse.toFixed(1) : '?'}°)`);
  const im = new Image(); im.src = `data:${img.mime};base64,${img.data}`; await im.decode();
  const W = Math.min(im.naturalWidth, 1100), H = Math.round((im.naturalHeight * W) / im.naturalWidth);
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H; const cx = cv.getContext('2d', { willReadFrequently: true }); cx.drawImage(im, 0, 0, W, H);
  const px = cx.getImageData(0, 0, W, H).data, rings = [], clamp = (v, m) => Math.min(m - 1, Math.max(0, v));
  for (const sd of g.seeds.slice(0, 4)) {
    const sx = clamp(Math.round((sd.x / 1000) * W), W), sy = clamp(Math.round((sd.y / 1000) * H), H), cs = [];
    for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) { const o = (clamp(sy + dy, H) * W + clamp(sx + dx, W)) * 4; cs.push([px[o], px[o + 1], px[o + 2]]); }
    const med = [0, 1, 2].map((k) => cs.map((c) => c[k]).sort((a, b) => a - b)[12]);
    if (Math.max(...med) - Math.min(...med) < 25) continue; // grey or white: not a highlight
    const near = (o) => { const dr = px[o] - med[0], dg = px[o + 1] - med[1], db = px[o + 2] - med[2]; return dr * dr + dg * dg + db * db < 1764; };
    const start = sy * W + sx; if (!near(start * 4)) continue;
    const comp = new Uint8Array(W * H), q = [start]; comp[start] = 1;
    for (let h = 0; h < q.length; h++) {
      const p = q[h], x = p % W, y = (p - x) / W;
      for (const [ax, ay] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const nx = x + ax, ny = y + ay; if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue; const np = ny * W + nx; if (!comp[np] && near(np * 4)) { comp[np] = 1; q.push(np); } }
    }
    if (q.length < W * H * 0.0005) continue;
    const first = comp.indexOf(1), edge = simplify(mooreTrace(comp, W, H, first % W, Math.floor(first / W)), 1.5);
    const co = edge.map(([x, y]) => { const u = x / W, v = y / H, yy = f.fy[0] * u + f.fy[1] * v + f.fy[2]; return [+(f.fx[0] * u + f.fx[1] * v + f.fx[2]).toFixed(3), +(f.merc ? unm(yy) : yy).toFixed(3)]; }).filter((p) => Math.abs(p[0]) <= 180 && Math.abs(p[1]) <= 90);
    if (co.length >= 3) { const sn = snap(thin(co, 0.03), true); if (sn.length >= 3) rings.push(sn); }
  }
  if (!rings.length) throw new Error('no coloured area found to trace');
  return { rings, rmse: f.rmse, merc: f.merc, n: C.length };
}

// ----- pipeline -----'''
rep("// ----- pipeline -----",code)

rep("  const rings = flat(), pct =","""  let traced = null;
  if (wk) {
    step('Placing the Wikipedia map on the globe and tracing its coloured area');
    try { traced = await traceWiki(wk.img, c.subject || cmd); cur.trace = { rmse: traced.rmse, areas: traced.rings.length, file: wk.img.name }; step(`Traced ${traced.rings.length} area${traced.rings.length > 1 ? 's' : ''} · placement error about ${traced.rmse.toFixed(2)}°`); }
    catch (e) { step('Map tracing skipped: ' + String(e.message).slice(0, 140)); }
  }
  const rings = flat(), pct =""")
rep("  const f = addFeature({\n    kind: c.kind === 'river'","""  if (traced) addFeature({
    kind: 'area', name: `${c.subject || cmd} (traced from Wikipedia map)`, parent: '', ai: true, conf: traced.rmse < 1 ? 'high' : traced.rmse < 2 ? 'medium' : 'low',
    flags: traced.rmse > 2 ? [`Placement error about ${traced.rmse.toFixed(1)}°, edges are rough`] : [], sources: wk.sources, logId: cur.id,
    note: 'Coloured area cut out of a Wikipedia map image.', method: `Traced from ${wk.img.name} · ${traced.n} reference points · placement error about ${traced.rmse.toFixed(2)}°`,
    coords: traced.rings.slice().sort((a, b) => ringArea(b) - ringArea(a))[0], rings: traced.rings,
  });
  const f = addFeature({
    kind: c.kind === 'river'""")
open('src/components/WorldMap.astro','w',encoding='utf-8').write(s)