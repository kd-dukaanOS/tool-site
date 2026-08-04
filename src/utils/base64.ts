export interface Base64Input {
  text: string;
  mode: "encode" | "decode";
}

export interface Base64Result {
  output: string;
}

export function validateBase64Input(i: Base64Input): string | null {
  if (!i.text) return "Enter text to convert.";
  if (i.mode === "decode") {
    try {
      atob(i.text);
    } catch {
      return "Invalid Base64 string.";
    }
  }
  return null;
}

export function calculateBase64(i: Base64Input): Base64Result {
  if (i.mode === "encode") {
    return { output: btoa(unescape(encodeURIComponent(i.text))) };
  }
  return { output: decodeURIComponent(escape(atob(i.text))) };
}

export function copyBase64Summary(i: Base64Input, r: Base64Result): string {
  return `
Base64 ${i.mode === "encode" ? "Encoded" : "Decoded"}

Input: ${i.text}
Output: ${r.output}
`.trim();
}