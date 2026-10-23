// Builds extra real-boundary layers (same 3600x1800 space as world.json):
//   public/data/india-districts.json   Census 2011 districts (datameet/maps)
//   public/data/states.json            first-level divisions of every other country (Natural Earth)
//   public/data/rivers.json            river centre lines (Natural Earth)
// Run: node scripts/build-extra-data.mjs <dists11.geojson> <admin1.geojson> <rivers.geojson>
import fs from 'node:fs';
import { geoTransform, geoPath } from 'd3-geo';
import { topology } from 'topojson-server';
import { presimplify, simplify, quantile } from 'topojson-simplify';
import { feature } from 'topojson-client';

const [dFile, sFile, rFile] = process.argv.slice(2);
const proj = geoTransform({ point(x, y) { this.stream.point((x + 180) * 10, (90 - y) * 10); } });
const path = geoPath(proj).digits(1);
const load = (f) => JSON.parse(fs.readFileSync(f, 'utf8'));
const slim = (gj, q) => {
  let t = topology({ f: gj }, 1e5); t = presimplify(t); t = simplify(t, quantile(t, q));
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
const title = (s) => String(s || '').toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()).replace(/ And /g, ' and ');
const write = (f, o) => { fs.writeFileSync(f, JSON.stringify(o)); console.log(f, (fs.statSync(f).size / 1024).toFixed(0) + ' KB'); };
fs.mkdirSync('public/data', { recursive: true });

// Districts
const dq = +process.env.DQ || 0.12;
const dists = slim(load(dFile), dq).map((f) => {
  const p = f.properties, d = path(f); if (!d) return null;
  const r = ring(d);
  return { n: title(p.DISTRICT), s: p.ST_NM, code: p.censuscode, c: r.c, r: r.r, d };
}).filter(Boolean);
write('public/data/india-districts.json', { source: 'Census 2011 district boundaries (datameet/maps). Districts created after 2011 are not shown.', districts: dists });

// Other countries' states / provinces
const sg = load(sFile);
sg.features = sg.features.filter((f) => f.properties.iso_a2 !== 'IN' && f.properties.name);
const sq = +process.env.SQ || 0.08;
const by = {};
for (const f of slim(sg, sq)) {
  const p = f.properties, d = path(f); if (!d) continue;
  const r = ring(d);
  (by[p.adm0_a3] ||= []).push({ n: p.name, t: p.type_en || '', c: r.c, r: r.r, d });
}
write('public/data/states.json', { source: 'Natural Earth admin-1', byCountry: by });

// Rivers
const rg = load(rFile);
rg.features = rg.features.filter((f) => f.properties.name && f.geometry);
const rivers = slim(rg, +process.env.RQ || 0.3).map((f) => {
  const d = path(f); return d ? { n: f.properties.name, rank: f.properties.scalerank, d } : null;
}).filter(Boolean);
write('public/data/rivers.json', { source: 'Natural Earth rivers', rivers });
