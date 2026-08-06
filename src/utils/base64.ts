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
    return { output: btoa(String.fromCharCode(...new TextEncoder().encode(i.text))) };
  }
  return { output: new TextDecoder().decode(Uint8Array.from(atob(i.text), c => c.charCodeAt(0))) };
}

export function copyBase64Summary(i: Base64Input, r: Base64Result): string {
  return `
Base64 ${i.mode === "encode" ? "Encoded" : "Decoded"}

Input: ${i.text}
Output: ${r.output}
`.trim();
}
