import md5lib from "crypto-js/md5";

export interface HashResult {
  md5: string;
  sha1: string;
  sha256: string;
  sha512: string;
}

async function digest(algo: string, text: string): Promise<string> {
  const buf = await crypto.subtle.digest(algo, new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// MD5 not supported by SubtleCrypto — using crypto-js as a fallback
function md5(str: string): string {
  return md5lib(str).toString();
}

export async function generateHashes(text: string): Promise<HashResult> {
  const [sha1, sha256, sha512] = await Promise.all([
    digest("SHA-1", text),
    digest("SHA-256", text),
    digest("SHA-512", text),
  ]);
  return { md5: md5(text), sha1, sha256, sha512 };
}

export function validateHashInput(text: string): string | null {
  if (!text.trim()) return "Please enter text to hash.";
  return null;
}

export function copyHashSummary(text: string, r: HashResult): string {
  return `Hash Summary\n\nInput:\n${text}\n\nMD5:\n${r.md5}\n\nSHA-1:\n${r.sha1}\n\nSHA-256:\n${r.sha256}\n\nSHA-512:\n${r.sha512}`.trim();
}
