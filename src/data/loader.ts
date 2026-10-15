const modules = import.meta.glob('/src/data/**/index.js', { eager: true }) as Record<string, any>;
const files = import.meta.glob('/src/data/**/*.js', { eager: true }) as Record<string, any>;

export interface Chapter { title: string; abs: number; pos?: number; href: string }
export interface Unit { slug: string; label: string | null; chapters: Chapter[] }
export interface Route {
  cls: string; subject: string; book: string;
  kind: 'unit' | 'chapter' | 'page' | 'book';
  path: string; unit: string; chapter: string; page: string;
}

// Fixed page types at chapter root, in sidebar / prev-next order. Solutions follow, then collections.
export const RESERVED = ['textbook', 'exam-notes', 'summary', 'big-questions', 'glossary'];

// Sub-folders of a chapter. URL: {chapter}/{folder}/{name}
export const COLLECTIONS: Record<string, { type: string; label: string }> = {
  animations: { type: 'animation', label: 'Animation' },
  timelines: { type: 'timeline', label: 'Timeline' },
  charts: { type: 'chart', label: 'Chart' },
  maps: { type: 'map', label: 'Map' },
};

// Pages that live at book level. URL: {book}/{name}
export const BOOK_PAGES = ['glossary'];

const numOf = (s: string) => Number(s.replace(/\D/g, '')) || 0;
export const prettify = (slug: string) => slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

// Pages with `meta.status = 'draft'` show in dev only. Missing status = published.
const live = (m: any) => import.meta.env.DEV || m?.meta?.status !== 'draft';

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
    } else if (parts.length === 2 && parts[0].startsWith('unit-')) {
      unit(parts[0]).label = mod.unit?.label ?? null;
    } else if (parts.length === 2 && parts[0].startsWith('chapter-')) {
      const c = mod.chapter;
      unit('').chapters.push({ title: c.title, abs: c.abs, href: `${base}/chapter-${c.abs}` });
    } else if (parts.length === 3) {
      const c = mod.chapter;
      unit(parts[0]).chapters.push({
        title: c.title, abs: c.abs, pos: c.pos,
        href: `${base}/${parts[0]}/chapter-${c.abs}-${c.pos}`,
      });
    }
  }

  const list = [...units.values()]
    .map((u) => ({
      ...u,
      label: u.slug ? (u.label ?? prettify(u.slug)) : null,
      chapters: u.chapters.sort((a, b) => a.abs - b.abs),
    }))
    .sort((a, b) => numOf(a.slug) - numOf(b.slug));

  const g = files[`${prefix}glossary.js`];
  const glossary = g && live(g) ? g : null;

  return { book, units: list, glossary };
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
  return { chapter, pages, collections };
}

export function loadUnit(cls: string, subject: string, book: string, unitSlug: string) {
  return modules[`/src/data/${cls}/${subject}/${book}/${unitSlug}/index.js`]?.unit ?? null;
}

export function allRoutes(): Route[] {
  const out: Route[] = [];
  for (const [p, m] of Object.entries(files)) {
    const [cls, subject, book, ...rest] = p.slice('/src/data/'.length).split('/');
    const file = rest.pop()!;
    const name = file.replace(/\.js$/, '');
    const last = rest[rest.length - 1] ?? '';
    const b = { cls, subject, book };

    // book-level pages
    if (rest.length === 0) {
      if (BOOK_PAGES.includes(name) && live(m)) {
        out.push({ ...b, kind: 'book', path: name, unit: '', chapter: '', page: name });
      }
      continue;
    }

    // /chapter/{collection}/{name}
    if (
      last in COLLECTIONS &&
      rest.length >= 2 && rest.length <= 3 &&
      rest[rest.length - 2].startsWith('chapter-')
    ) {
      if (!live(m)) continue;
      const chapter = rest[rest.length - 2];
      const cpath = rest.slice(0, -1).join('/');
      const unit = rest.length === 3 ? rest[0] : '';
      out.push({ ...b, kind: 'page', path: `${cpath}/${last}/${name}`, unit, chapter, page: `${last}/${name}` });
      continue;
    }

    if (rest.length === 1 && last.startsWith('unit-') && name === 'index') {
      out.push({ ...b, kind: 'unit', path: last, unit: last, chapter: '', page: '' });
    } else if (last.startsWith('chapter-') && rest.length <= 2) {
      const unit = rest.length === 2 ? rest[0] : '';
      const cpath = rest.join('/');
      if (name === 'index') {
        out.push({ ...b, kind: 'chapter', path: cpath, unit, chapter: last, page: '' });
      } else {
        if (!live(m)) continue;
        const path = RESERVED.includes(name) ? `${cpath}/${name}` : `${cpath}/solutions/${name}`;
        out.push({ ...b, kind: 'page', path, unit, chapter: last, page: name });
      }
    }
  }
  return out;
}