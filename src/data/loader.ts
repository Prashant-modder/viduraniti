const modules = import.meta.glob('/src/data/**/index.js', { eager: true }) as Record<string, any>;
const files = import.meta.glob('/src/data/**/*.js', { eager: true }) as Record<string, any>;

export interface Chapter { title: string; abs: number; pos?: number; href: string }
export interface Unit { slug: string; label: string | null; chapters: Chapter[] }
export interface Route {
  cls: string; subject: string; book: string;
  kind: 'unit' | 'chapter' | 'page';
  path: string; unit: string; chapter: string; page: string;
}

const RESERVED = ['textbook', 'exam-notes', 'summary'];
const numOf = (s: string) => Number(s.replace(/\D/g, '')) || 0;
export const prettify = (slug: string) => slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

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

  return { book, units: list };
}

export function loadChapter(cls: string, subject: string, book: string, chapterPath: string) {
  const prefix = `/src/data/${cls}/${subject}/${book}/${chapterPath}/`;
  let chapter: any = null;
  const pages: Record<string, any> = {};
  for (const [p, m] of Object.entries(files)) {
    if (!p.startsWith(prefix)) continue;
    const name = p.slice(prefix.length);
    if (name.includes('/')) continue;
    const key = name.replace(/\.js$/, '');
    if (key === 'index') chapter = m.chapter ?? null;
    else pages[key] = m;
  }
  return { chapter, pages };
}

export function loadUnit(cls: string, subject: string, book: string, unitSlug: string) {
  return modules[`/src/data/${cls}/${subject}/${book}/${unitSlug}/index.js`]?.unit ?? null;
}

export function allRoutes(): Route[] {
  const out: Route[] = [];
  for (const p of Object.keys(files)) {
    const [cls, subject, book, ...rest] = p.slice('/src/data/'.length).split('/');
    const file = rest.pop()!;
    const name = file.replace(/\.js$/, '');
    const last = rest[rest.length - 1] ?? '';
    const b = { cls, subject, book };

    if (rest.length === 1 && last.startsWith('unit-') && name === 'index') {
      out.push({ ...b, kind: 'unit', path: last, unit: last, chapter: '', page: '' });
    } else if (last.startsWith('chapter-') && rest.length <= 2) {
      const unit = rest.length === 2 ? rest[0] : '';
      const cpath = rest.join('/');
      if (name === 'index') {
        out.push({ ...b, kind: 'chapter', path: cpath, unit, chapter: last, page: '' });
      } else {
        const path = RESERVED.includes(name) ? `${cpath}/${name}` : `${cpath}/solutions/${name}`;
        out.push({ ...b, kind: 'page', path, unit, chapter: last, page: name });
      }
    }
  }
  return out;
}