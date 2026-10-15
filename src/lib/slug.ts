/** Anchor id for a title or a glossary term. Strips accents ("jāgīr" becomes "jagir"); falls back to the encoded text for non-Latin scripts. */
export const slug = (s: string): string => {
  const plain = String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  const t = plain.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return t || encodeURIComponent(String(s).trim().toLowerCase());
};