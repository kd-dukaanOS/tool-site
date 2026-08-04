export type UrlMode = "encode" | "decode";

export function processUrl(text: string, mode: UrlMode, component = true): string {
  if (mode === "encode") {
    return component ? encodeURIComponent(text) : encodeURI(text);
  }
  return component ? decodeURIComponent(text) : decodeURI(text);
}

export function validateUrlInput(text: string): string | null {
  if (!text.trim()) return "Please enter text or a URL.";
  return null;
}

export function getUrlStats(input: string, output: string) {
  return {
    inputLength: input.length,
    outputLength: output.length,
    diff: output.length - input.length,
  };
}

export function copyUrlSummary(input: string, mode: UrlMode, output: string): string {
  return `URL ${mode === "encode" ? "Encode" : "Decode"} Summary

Input:
${input}

Output:
${output}`.trim();
}