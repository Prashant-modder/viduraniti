import fs from 'node:fs';
import { geoTransform, geoPath } from 'd3-geo';
import { topology } from 'topojson-server';
import { presimplify, simplify, quantile } from 'topojson-simplify';
import { feature } from 'topojson-client';

const [cFile, sFile, out = 'public/data/world.json'] = process.argv.slice(2);
const W = 3600, H = 1800;
const proj = geoTransform({ point(x, y) { this.stream.point((x + 180) * 10, (90 - y) * 10); } });
const path = geoPath(proj).digits(1);

const slim = (gj, q) => {
  let t = topology({ f: gj }, 1e5);
  t = presimplify(t);
  t = simplify(t, quantile(t, q));
  return feature(t, t.objects.f).features;
};
const ring = (d) => {
  let best = null;
  for (const part of d.split('M').slice(1)) {
    const n = (part.match(/-?\d+(?:\.\d+)?/g) || []).map(Number);
    let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
    for (let i = 0; i + 1 < n.length; i += 2) { x0 = Math.min(x0, n[i]); x1 = Math.max(x1, n[i]); y0 = Math.min(y0, n[i + 1]); y1 = Math.max(y1, n[i + 1]); }
    const a = (x1 - x0) * (y1 - y0);
    if (!best || a > best.a) best = { a, c: [Math.round((x0 + x1) / 2), Math.round((y0 + y1) / 2)], r: Math.round(x1 - x0) };
  }
  return best || { c: [0, 0], r: 0 };
};
const load = (f) => JSON.parse(fs.readFileSync(f, 'utf8'));

const countries = slim(load(cFile), +process.env.CQ || 0.55)
  .filter((f) => f.properties.NAME !== 'Antarctica')
  .map((f) => {
    const p = f.properties, [[x0, y0], [x1, y1]] = path.bounds(f);
    return {
      id: p.ADM0_A3, n: p.NAME, f: p.FORMAL_EN || p.NAME, a2: p.ISO_A2_EH, a3: p.ISO_A3_EH,
      cont: p.CONTINENT, sub: p.SUBREGION, pop: p.POP_EST, inc: p.INCOME_GRP, eco: p.ECONOMY,
      b: [x0, y0, x1, y1].map((v) => Math.round(v)), d: path(f),
      ...(() => { const r = ring(path(f) || 'M0,0'); return { c: r.c, r: r.r }; })(),
    };
  }).filter((c) => c.d);

const sg = load(sFile);
sg.features = sg.features.filter((f) => f.properties.iso_a2 === 'IN');
const states = slim(sg, +process.env.SQ || 0.35).map((f) => {
  const p = f.properties;
  return {
    id: p.iso_3166_2 || p.adm1_code, n: p.name, type: p.type_en, region: p.region,
    code: p.postal, d: path(f),
    ...(() => { const r = ring(path(f) || 'M0,0'); return { c: r.c, r: r.r }; })(),
  };
}).filter((s) => s.d);

fs.mkdirSync(out.replace(/[^/]+$/, ''), { recursive: true });
fs.writeFileSync(out, JSON.stringify({ w: W, h: H, countries, india: states }));
console.log(out, (fs.statSync(out).size / 1024).toFixed(0) + ' KB', countries.length, 'countries', states.length, 'states');