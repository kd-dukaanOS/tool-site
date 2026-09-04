export interface Base64Input {
  text: string;
  mode: "encode" | "decode";
}

export interface Base64Result {
  output: string;
}

export function validateBase64Input(i: Base64Input, lang: "en" | "es" = "en"): string | null {
  const msg = lang === "es"
    ? { empty: "Ingresa un texto para convertir.", invalid: "Cadena Base64 inválida." }
    : { empty: "Enter text to convert.", invalid: "Invalid Base64 string." };
  if (!i.text) return msg.empty;
  if (i.mode === "decode") {
    try {
      atob(i.text);
    } catch {
      return msg.invalid;
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

export function copyBase64Summary(i: Base64Input, r: Base64Result, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Base64 ${i.mode === "encode" ? "Codificado" : "Decodificado"}

Entrada: ${i.text}
Resultado: ${r.output}
`.trim();
  }
  return `
Base64 ${i.mode === "encode" ? "Encoded" : "Decoded"}

Input: ${i.text}
Output: ${r.output}
`.trim();
}