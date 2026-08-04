export interface SlugOptions {
  separator: "-" | "_";
  lowercase: boolean;
  removeStopwords: boolean;
  maxLength: number;
}

const STOPWORDS = new Set(["a","an","the","and","or","but","of","in","on","at","to","for","with","is","are"]);

export function generateSlug(text: string, opts: SlugOptions): string {
  let words = text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (opts.removeStopwords) {
    words = words.filter((w) => !STOPWORDS.has(w));
  }

  let slug = words.join(opts.separator);

  if (!opts.lowercase) {
    slug = text
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9\s-]/g, "")
      .trim()
      .split(/\s+/)
      .join(opts.separator);
  }

  if (opts.maxLength && slug.length > opts.maxLength) {
    slug = slug.slice(0, opts.maxLength).replace(new RegExp(`\\${opts.separator}+$`), "");
  }

  return slug;
}

export function validateSlugInput(text: string): string | null {
  if (!text.trim()) return "Please enter text to convert into a slug.";
  return null;
}

export function getSlugStats(slug: string) {
  return {
    length: slug.length,
    words: slug.split(/[-_]/).filter(Boolean).length,
  };
}