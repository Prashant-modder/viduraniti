// src/lib/people.ts
// Loader and settings for the People (bio sketch) branch.
// Data lives in src/people/<slug>/index.js. Nothing here touches src/data/loader.ts.
import { slug as slugify } from './slug';

const modules = import.meta.glob('/src/people/*/index.js', { eager: true }) as Record<string, any>;

// Every image under src/people. Eager + ?url gives the final URL string.
// Vite 4 or older: replace `query: '?url', import: 'default'` with `as: 'url'`.
const imageFiles = import.meta.glob('/src/people/**/*.{png,jpg,jpeg,gif,webp,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

/* ------------------------- Settings you can expand ------------------------- */

// key -> label. A person's FIRST category decides their sidebar group;
// all their categories are used by the filter chips on /ncert/people.
export const CATEGORIES: Record<string, string> = {
  'freedom-fighters': 'Freedom Fighters',
  women: 'Women',
  others: 'Others',
};

/* ------------------------------- Types ------------------------------------- */

export interface PSection {
  id: string;
  label: string;
  kind: 'text' | 'timeline' | 'related';
  body?: string;   // Markdown, for kind 'text'
  card?: string;   // optional "Let's remember" text shown under the body
  items?: any[];   // timeline events or related links
}
export interface PersonEntry {
  slug: string;
  meta: any;
  person: any;
  image: string | null;
  sections: PSection[];
}
export interface NavLink { label: string; href: string }
export interface Group {
  key: string;
  label: string;
  people: { slug: string; name: string; years?: string }[];
}

/* ------------------------------- Helpers ----------------------------------- */

// Pages with `meta.status = 'draft'` show in dev only. Missing status = published.
const live = (m: any) => import.meta.env.DEV || m?.meta?.status !== 'draft';
const has = (v: any) => (Array.isArray(v) ? v.length > 0 : !!v);
const text = (v: any): string => (Array.isArray(v) ? v.join('\n\n') : String(v ?? ''));
const pretty = (s: string) => s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

// "portrait.jpg" (next to index.js) -> final URL. Absolute URLs pass through.
function imageOf(slug: string, src?: string): string | null {
  if (!src) return null;
  if (/^(https?:|data:|blob:|\/)/i.test(src)) return src;
  const key = `/src/people/${slug}/${src.trim().replace(/\\/g, '/').replace(/^\.\//, '')}`;
  const hit =
    imageFiles[key] ?? Object.entries(imageFiles).find(([k]) => k.toLowerCase() === key.toLowerCase())?.[1];
  if (!hit && import.meta.env.DEV) console.warn(`[people] image not found: "${src}" for ${slug}`);
  return hit ?? null;
}

/**
 * The sections of one page, in display order. The page and the sidebar both read this list,
 * so a section that has no content is hidden from both.
 */
export function sectionsOf(p: any): PSection[] {
  const out: PSection[] = [];
  const add = (id: string, label: string, v: any, card?: string) => {
    if (has(v)) out.push({ id, label, kind: 'text', body: text(v), card: card || undefined });
  };
  add('overview', 'Overview', p.overview, p.remember);
  add('early-life', 'Early life', p.early);
  add('role-and-contribution', 'Role and contribution', p.contribution);
  if (has(p.timeline)) out.push({ id: 'timeline', label: 'Timeline', kind: 'timeline', items: p.timeline });
  add('legacy', 'Legacy', p.legacy);
  for (const e of p.extra ?? []) if (e?.title) add(e.id ?? slugify(e.title), e.title, e.body);
  if (has(p.related)) out.push({ id: 'related-chapters', label: 'Related chapters', kind: 'related', items: p.related });
  return out;
}

/* ------------------------------- Loaders ----------------------------------- */

export function loadPeople(): PersonEntry[] {
  const list: PersonEntry[] = [];
  for (const [path, m] of Object.entries(modules)) {
    const slug = path.split('/').slice(-2, -1)[0];
    if (!m?.person || !live(m)) continue;
    list.push({
      slug,
      meta: m.meta ?? {},
      person: m.person,
      image: imageOf(slug, m.person.image),
      sections: sectionsOf(m.person),
    });
  }
  return list.sort(
    (a, b) => (a.meta.order ?? 999) - (b.meta.order ?? 999) || a.person.name.localeCompare(b.person.name)
  );
}

/** People grouped for the sidebar by their first category. Empty groups are dropped. */
export function groupedPeople(): Group[] {
  const groups = new Map<string, Group>();
  for (const [key, label] of Object.entries(CATEGORIES)) groups.set(key, { key, label, people: [] });
  for (const e of loadPeople()) {
    const key: string = e.meta.categories?.[0] ?? 'others';
    if (!groups.has(key)) groups.set(key, { key, label: pretty(key), people: [] });
    groups.get(key)!.people.push({ slug: e.slug, name: e.person.name, years: e.person.years });
  }
  return [...groups.values()].filter((g) => g.people.length > 0);
}

/** Previous and next person, in list order. */
export function neighbours(slug: string): { prev: NavLink | null; next: NavLink | null } {
  const all = loadPeople();
  const i = all.findIndex((e) => e.slug === slug);
  const link = (e?: PersonEntry): NavLink | null =>
    e ? { label: e.person.name, href: `/ncert/people/${e.slug}` } : null;
  return { prev: i > 0 ? link(all[i - 1]) : null, next: i >= 0 ? link(all[i + 1]) : null };
}