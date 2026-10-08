import { Marked } from 'marked';
import markedKatex from 'marked-katex-extension';

const marked = new Marked();
marked.use(markedKatex({ throwOnError: false, nonStandard: true }));

// Runs of 3+ underscores are exercise blanks, not Markdown emphasis.
// Swap them for a span before parsing so "1. ______ ... 2. ______" never pairs up as <em>.
const BLANK = '<span class="blank"></span>';
const prep = (s: string) => s.replace(/_{3,}/g, BLANK);

/** Block Markdown (paragraphs, lists, tables, KaTeX). */
export const renderMd = (s = ''): string => marked.parse(prep(s)) as string;

/** Inline Markdown only (no wrapping <p>). Use for question text, options, table cells. */
export const renderInline = (s = ''): string => marked.parseInline(prep(s)) as string;