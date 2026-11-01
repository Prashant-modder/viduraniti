const modules = import.meta.glob('/src/data/**/index.js', { eager: true }) as Record<string, any>;
const files = import.meta.glob('/src/data/**/*.js', { eager: true }) as Record<string, any>;

// Every image under src/data. Eager + ?url gives the final URL string (hashed in production), not the bytes.
// Vite 4 or older: replace `query: '?url', import: 'default'` with `as: 'url'`.
const imageFiles = import.meta.glob('/src/data/**/*.{png,jpg,jpeg,gif,webp,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

export interface Chapter { title: string; abs: number; pos?: number; href: string; cover?: string }
export interface Unit { slug: string; label: string | null; chapters: Chapter[] }
export interface Route {
  cls: string; subject: string; book: string;
  kind: 'unit' | 'chapter' | 'page' | 'book';
  path: string; unit: string; chapter: string; page: string;
}

// Fixed page types at chapter root, in sidebar / prev-next order. Solutions follow, then collections.
export const RESERVED = ['textbook', 'exam-notes', 'summary', 'big-questions', 'glossary'];

// Chapter sub-folders. URL: {chapter}/{folder}/{name}
export const COLLECTIONS: Record<string, { type: string; label: string }> = {
  animations: { type: 'animation', label: 'Animation' },
  timelines: { type: 'timeline', label: 'Timeline' },
  charts: { type: 'chart', label: 'Chart' },
  maps: { type: 'map', label: 'Map' },
};

// Chapter groups. Folder name starts with one of these: unit-1, theme-a, project-2, section-b.
const GROUP = /^(unit|theme|project|section)-/;

// Sort key: digits if present (unit-3 -> 3), else trailing letter (theme-c -> 3).
const orderOf = (s: string) => {
  const d = s.replace(/\D/g, '');
  if (d) return Number(d);
  const m = s.match(/-([a-z])$/i);
  return m ? m[1].toLowerCase().charCodeAt(0) - 96 : 0;
};
export const prettify = (slug: string) => slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

// Pages with `meta.status = 'draft'` show in dev only. Missing status = published.
const live = (m: any) => import.meta.env.DEV || m?.meta?.status !== 'draft';

/* ───────────────────────────── Images ─────────────────────────────
 * Put images next to the page files (or in any sub-folder, e.g. images/):
 *   chapter-1-1/image.png          -> 'image.png'
 *   chapter-1-1/images/river.png   -> 'images/river.png'
 * Pages refer to them by that relative name; resolveImage() turns it into a URL.
 */

// Path inside the folder -> URL, e.g. { 'image.png': '/assets/image-3f2a.png' }
export type ImageMap = Record<string, string>;

const IMG_EXT = /\.(png|jpe?g|gif|webp|avif|svg)$/i;

// Keys that resolveContent() treats as image references.
const IMAGE_KEYS = ['image', 'img', 'src', 'cover', 'banner', 'icon'];

// File names (no extension) used as the chapter cover, first match wins.
const COVER_NAMES = ['cover', 'image'];

/** All images under `prefix` (must end with '/'), keyed by their path relative to it. */
export function imagesIn(prefix: string): ImageMap {
  const out: ImageMap = {};
  for (const [p, url] of Object.entries(imageFiles)) {
    if (p.startsWith(prefix)) out[p.slice(prefix.length)] = url;
  }
  return out;
}

const cleanSrc = (s: string) => s.trim().replace(/\\/g, '/').replace(/^\.\//, '');

/**
 * Relative name -> URL. Absolute URLs (http, data:, blob:, /public paths) pass through untouched.
 * Matching is case-insensitive as a fallback, so a Windows-only casing slip does not break the Linux build.
 */
export function resolveImage(images: ImageMap, src?: string | null): string | null {
  if (!src) return null;
  if (/^(https?:|data:|blob:|\/)/i.test(src)) return src;
  const key = cleanSrc(src);
  const hit =
    images[key] ?? Object.entries(images).find(([k]) => k.toLowerCase() === key.toLowerCase())?.[1];
  if (!hit && import.meta.env.DEV) console.warn(`[loader] image not found: "${src}"`);
  return hit ?? null;
}

// Cover = a top-level cover.* (or image.*) file in the chapter folder.
function coverOf(images: ImageMap): string | undefined {
  const keys = Object.keys(images).filter((f) => !f.includes('/'));
  for (const name of COVER_NAMES) {
    const k = keys.find((f) => f.replace(/\.[^.]+$/, '').toLowerCase() === name);
    if (k) return images[k];
  }
  return undefined;
}

/* ───────────────────────────── Boxes ─────────────────────────────
 * Colour themes, matched by eye to the NCERT book. Tweak the hex values freely.
 */

export type BoxStyle = 'solid' | 'dashed';
export interface BoxTheme { bg: string; border: string; accent: string; text: string }

export const BOX_THEMES: Record<string, BoxTheme> = {
  yellow:     { bg: '#FFEFC2', border: '#F0D27C', accent: '#B5533C', text: '#2B2B2B' },
  terracotta: { bg: '#F8E3DC', border: '#C0614A', accent: '#C0614A', text: '#2B2B2B' },
  red:        { bg: '#FDE4E0', border: '#E8604F', accent: '#D6402F', text: '#2B2B2B' },
  orange:     { bg: '#FFE6C7', border: '#F5922F', accent: '#D9730D', text: '#2B2B2B' },
  green:      { bg: '#DCEFCF', border: '#4DAA57', accent: '#2E8B3E', text: '#2B2B2B' },
  teal:       { bg: '#DDF2F3', border: '#2BA3B5', accent: '#1B7F8F', text: '#2B2B2B' },
  blue:       { bg: '#CDE9F9', border: '#2B8FD6', accent: '#1F6FB5', text: '#2B2B2B' },
  purple:     { bg: '#EBDDF2', border: '#9B59B6', accent: '#7D3C98', text: '#2B2B2B' },
  pink:       { bg: '#FBDDE5', border: '#E8508A', accent: '#C2306B', text: '#2B2B2B' },
  gray:       { bg: '#F1F3F5', border: '#ADB5BD', accent: '#495057', text: '#2B2B2B' },
};

// Ready-made box kinds: a default colour, border style and (optional) title.
export const BOX_KINDS: Record<string, { color: string; style: BoxStyle; label?: string }> = {
  vocab:       { color: 'yellow', style: 'solid' },                     // margin glossary beside a passage
  remember:    { color: 'teal',   style: 'dashed', label: 'Remember' }, // grammar reminder
  'word-bank': { color: 'red',    style: 'dashed' },                    // words to pick from in an exercise
  activity:    { color: 'green',  style: 'dashed' },                    // listening / matching tasks
  advice:      { color: 'pink',   style: 'solid' },                     // phrase banks (asking / giving advice)
  panel:       { color: 'blue',   style: 'solid' },                     // big writing or observation panel
  explore:     { color: 'orange', style: 'solid' },
  note:        { color: 'gray',   style: 'solid' },
};

// Heading colour per section page (page file name without .js).
export const SECTION_COLORS: Record<string, string> = {
  'before-we-read': 'green',
  'discover-to-interest': 'yellow',
  textbook: 'terracotta',
  'let-us-discuss': 'purple',
  'let-us-think-and-reflect': 'red',
  'let-us-learn': 'teal',
  'let-us-listen': 'green',
  'let-us-speak': 'pink',
  'let-us-write': 'blue',
  'let-us-explore': 'orange',
  'exam-notes': 'gray',
  summary: 'gray',
};
export const sectionTheme = (page: string): BoxTheme => BOX_THEMES[SECTION_COLORS[page] ?? 'gray'] ?? BOX_THEMES.gray;

export interface BoxInput {
  type?: 'box';
  kind?: string;                 // key of BOX_KINDS
  color?: string;                // key of BOX_THEMES, overrides the kind's colour
  style?: BoxStyle;              // overrides the kind's border style
  bg?: string; border?: string; accent?: string; text?: string; // per-box colour overrides (any CSS colour)
  title?: string;
  image?: string;                // relative name from the chapter folder, e.g. 'image.png'
  imageAlt?: string;
  imagePosition?: 'top' | 'bottom' | 'left' | 'right';
  [extra: string]: any;          // body, items, terms, ... whatever the box renders
}
export interface ResolvedBox extends BoxInput {
  theme: BoxTheme;
  style: BoxStyle;
  title?: string;
  imageUrl: string | null;
  imagePosition: 'top' | 'bottom' | 'left' | 'right';
}

/** Fills in theme, border style and image URL for one box. */
export function resolveBox(box: BoxInput, images: ImageMap = {}): ResolvedBox {
  const kind = BOX_KINDS[box.kind ?? ''];
  const base = BOX_THEMES[box.color ?? kind?.color ?? 'gray'] ?? BOX_THEMES.gray;
  return {
    ...box,
    theme: {
      bg: box.bg ?? base.bg,
      border: box.border ?? base.border,
      accent: box.accent ?? base.accent,
      text: box.text ?? base.text,
    },
    style: box.style ?? kind?.style ?? 'solid',
    title: box.title ?? kind?.label,
    imageUrl: resolveImage(images, box.image),
    imagePosition: box.imagePosition ?? 'top',
  };
}

/**
 * Walks any page data and resolves it for rendering:
 *  - `{ type: 'box', ... }` objects become ResolvedBox (theme, style, imageUrl).
 *  - Any string under image / img / src / cover / banner / icon that ends in an image extension
 *    is swapped for its URL (this also covers `{ type: 'image', src, alt, caption }` blocks).
 * Returns a copy; the original module data is not touched.
 */
export function resolveContent<T>(node: T, images: ImageMap): T {
  if (Array.isArray(node)) return node.map((n) => resolveContent(n, images)) as unknown as T;
  if (!node || typeof node !== 'object') return node;

  const src = node as Record<string, any>;
  const isBox = src.type === 'box';
  const out: Record<string, any> = {};
  for (const [k, v] of Object.entries(src)) {
    if (!isBox && IMAGE_KEYS.includes(k) && typeof v === 'string' && IMG_EXT.test(v)) {
      out[k] = resolveImage(images, v) ?? v;
    } else {
      out[k] = resolveContent(v, images);
    }
  }
  return (isBox ? resolveBox(out, images) : out) as T;
}

/* ───────────────────────── Content shapes ─────────────────────────
 * What the chapter page files export (types + one list, no runtime cost).
 *   page    : export const meta = { title, order, tags, status }
 *   section : export const sections = [{ roman, instruction, boxes?, items }]
 *   item    : { n, type, question, answer, ... }  or  { n, parts: [{ label, question, answer }] }
 * An answer is a string or an array of lines (markdown: **bold**, *italic*, "- " bullets).
 * `pending: true` marks a question whose answer key is still missing.
 */
export const ITEM_TYPES = [
  'short',      // one-line / short answer, also true-false
  'long',       // paragraph answer
  'fill',       // single blank
  'blanks',     // passage with several blanks (`passage`, answer = array)
  'mcq',        // `options` + answer
  'match',      // `left` + `right` columns (also used for the two-column table)
  'activity',   // discussion, drawing, role-play, project - sample answer
  'crossword',  // `grid`, `entries`, `given`
] as const;
export type ItemType = (typeof ITEM_TYPES)[number];
export type Answer = string | string[];

export interface PageMeta {
  title: string; order?: number; tags?: string[]; status?: 'draft' | 'published';
}

export interface CrosswordEntry {
  n: number; dir: 'across' | 'down';
  row: number; col: number;            // 1-based start cell
  answer: string; clue: string;
}

export interface Part {
  label: string;                       // 'i', 'ii', '1' ...
  type?: ItemType;
  question: string;
  options?: string[];
  answer?: Answer;
  pending?: boolean;
  [extra: string]: any;
}

export interface Item {
  n: number;
  type?: ItemType;
  question?: string;
  passage?: string;                    // extract or cloze text the question refers to
  options?: string[];
  left?: string[]; right?: string[];   // match / table
  grid?: { rows: number; cols: number };            // crossword
  given?: [number, number][];                       // crossword: cells printed in the book
  entries?: CrosswordEntry[];                       // crossword
  image?: string;
  boxes?: BoxInput[];
  parts?: Part[];
  answer?: Answer;
  pending?: boolean;
  [extra: string]: any;
}

export interface Section {
  roman: string;
  instruction: string;
  image?: string;
  boxes?: BoxInput[];
  items: Item[];
}

/**
 * Dev check for "no question missed": per page with `sections`, how many questions it holds
 * (an item with `parts` counts once per part) and which ones are still `pending`.
 *   const { pages } = loadChapter(...); console.table(chapterStats(pages));
 */
export function chapterStats(pages: Record<string, any>) {
  const out: Record<string, { questions: number; pending: string[] }> = {};
  for (const [name, m] of Object.entries(pages)) {
    const sections: Section[] = m?.sections ?? [];
    if (!sections.length) continue;
    let questions = 0;
    const pending: string[] = [];
    for (const s of sections) {
      for (const it of s.items) {
        const list: { id: string; pending?: boolean }[] = it.parts?.length
          ? it.parts.map((p) => ({ id: `${s.roman}.${it.n}(${p.label})`, pending: p.pending }))
          : [{ id: `${s.roman}.${it.n}`, pending: it.pending }];
        for (const q of list) {
          questions++;
          if (q.pending) pending.push(q.id);
        }
      }
    }
    out[name] = { questions, pending };
  }
  return out;
}

export function solutionKeys(pages: Record<string, any>): string[] {
  return Object.keys(pages)
    .filter((n) => !RESERVED.includes(n))
    .sort(
      (a, b) =>
        (pages[a].meta?.order ?? 999) - (pages[b].meta?.order ?? 999) || a.localeCompare(b)
    );
}

export function loadBook(cls: string, subject: string, bookSlug: string) {
  const prefix = `/src/data/${cls}/${subject}/${bookSlug}/`;
  const base = `/ncert/class-${cls}/subject:${subject}/${bookSlug}`;
  const units = new Map<string, Unit>();
  let book: any = null;

  const unit = (slug: string): Unit => {
    if (!units.has(slug)) units.set(slug, { slug, label: null, chapters: [] });
    return units.get(slug)!;
  };

  for (const [path, mod] of Object.entries(modules)) {
    if (!path.startsWith(prefix)) continue;
    const parts = path.slice(prefix.length).split('/');

    if (parts.length === 1) {
      book = mod.book ?? null;
    } else if (parts.length === 2 && GROUP.test(parts[0])) {
      unit(parts[0]).label = mod.unit?.label ?? null;
    } else if (parts.length === 2 && parts[0].startsWith('chapter-')) {
      const c = mod.chapter;
      unit('').chapters.push({
        title: c.title, abs: c.abs, href: `${base}/${parts[0]}`,
        cover: coverOf(imagesIn(`${prefix}${parts[0]}/`)),
      });
    } else if (parts.length === 3) {
      const c = mod.chapter;
      unit(parts[0]).chapters.push({
        title: c.title, abs: c.abs, pos: c.pos,
        href: `${base}/${parts[0]}/${parts[1]}`,
        cover: coverOf(imagesIn(`${prefix}${parts[0]}/${parts[1]}/`)),
      });
    }
  }

  const list = [...units.values()]
    .map((u) => ({
      ...u,
      label: u.slug ? (u.label ?? prettify(u.slug)) : null,
      chapters: u.chapters.sort((a, b) => a.abs - b.abs),
    }))
    .sort((a, b) => orderOf(a.slug) - orderOf(b.slug));

  // Book glossary: every chapter's glossary.js merged, first definition of a term wins.
  const seen = new Map<string, any>();
  for (const u of list) {
    for (const c of u.chapters) {
      const cpath = c.href.slice(base.length + 1);
      const m = files[`${prefix}${cpath}/glossary.js`];
      if (!m || !live(m)) continue;
      const code = c.href.split('/').pop()!.replace('chapter-', '').toUpperCase();
      for (const t of m.terms ?? []) {
        const k = String(t.term).toLowerCase();
        if (!seen.has(k)) {
          seen.set(k, { ...t, chapter: { label: `Ch ${code} · ${c.title}`, href: `${c.href}/glossary` } });
        }
      }
    }
  }

  return { book, units: list, bookTerms: [...seen.values()] };
}

export function loadChapter(cls: string, subject: string, book: string, chapterPath: string) {
  const prefix = `/src/data/${cls}/${subject}/${book}/${chapterPath}/`;
  let chapter: any = null;
  const pages: Record<string, any> = {};
  const collections: Record<string, Record<string, any>> = {};
  for (const k of Object.keys(COLLECTIONS)) collections[k] = {};

  for (const [p, m] of Object.entries(files)) {
    if (!p.startsWith(prefix)) continue;
    const name = p.slice(prefix.length).replace(/\.js$/, '');

    if (name === 'index') { chapter = m.chapter ?? null; continue; }

    const slash = name.indexOf('/');
    if (slash > 0) {
      const coll = name.slice(0, slash);
      const key = name.slice(slash + 1);
      if (coll in COLLECTIONS && !key.includes('/') && live(m)) collections[coll][key] = m;
      continue;
    }

    if (live(m)) pages[name] = m;
  }

  // Images in this chapter folder (sub-folders included), keyed by relative path.
  const images = imagesIn(prefix);

  return { chapter, pages, collections, images, cover: coverOf(images) };
}

export function loadUnit(cls: string, subject: string, book: string, unitSlug: string) {
  return modules[`/src/data/${cls}/${subject}/${book}/${unitSlug}/index.js`]?.unit ?? null;
}

export function allRoutes(): Route[] {
  const out: Route[] = [];
  const glossaryBooks = new Map<string, { cls: string; subject: string; book: string }>();

  for (const [p, m] of Object.entries(files)) {
    const [cls, subject, book, ...rest] = p.slice('/src/data/'.length).split('/');
    const file = rest.pop()!;
    const name = file.replace(/\.js$/, '');
    const last = rest[rest.length - 1] ?? '';
    const b = { cls, subject, book };

    // /chapter/{collection}/{name}
    if (last in COLLECTIONS && rest.length >= 2 && rest.length <= 3 && rest[rest.length - 2].startsWith('chapter-')) {
      if (!live(m)) continue;
      const chapter = rest[rest.length - 2];
      const cpath = rest.slice(0, -1).join('/');
      const unit = rest.length === 3 ? rest[0] : '';
      out.push({ ...b, kind: 'page', path: `${cpath}/${last}/${name}`, unit, chapter, page: `${last}/${name}` });
      continue;
    }

    if (rest.length === 1 && GROUP.test(last) && name === 'index') {
      out.push({ ...b, kind: 'unit', path: last, unit: last, chapter: '', page: '' });
    } else if (last.startsWith('chapter-') && rest.length <= 2) {
      const unit = rest.length === 2 ? rest[0] : '';
      const cpath = rest.join('/');
      if (name === 'index') {
        out.push({ ...b, kind: 'chapter', path: cpath, unit, chapter: last, page: '' });
      } else {
        if (!live(m)) continue;
        if (name === 'glossary') glossaryBooks.set(`${cls}/${subject}/${book}`, b);
        const path = RESERVED.includes(name) ? `${cpath}/${name}` : `${cpath}/solutions/${name}`;
        out.push({ ...b, kind: 'page', path, unit, chapter: last, page: name });
      }
    }
  }

  // Book-level glossary, one per book that has any chapter glossary.
  for (const b of glossaryBooks.values()) {
    out.push({ ...b, kind: 'book', path: 'glossary', unit: '', chapter: '', page: 'glossary' });
  }
  return out;
}