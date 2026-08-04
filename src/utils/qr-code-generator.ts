export interface QrOptions {
  text: string;
  size: number;
  errorCorrection: "L" | "M" | "Q" | "H";
  fgColor: string;
  bgColor: string;
}

export function buildQrUrl(opts: QrOptions): string {
  const params = new URLSearchParams({
    data: opts.text,
    size: `${opts.size}x${opts.size}`,
    ecc: opts.errorCorrection,
    color: opts.fgColor.replace("#", ""),
    bgcolor: opts.bgColor.replace("#", ""),
  });
  return `https://api.qrserver.com/v1/create-qr-code/?${params.toString()}`;
}

export function validateQrInput(text: string): string | null {
  if (!text.trim()) return "Please enter text or a URL to encode.";
  if (text.length > 2000) return "Text is too long for a reliable QR code.";
  return null;
}

export function getQrStats(text: string) {
  return {
    chars: text.length,
    type: /^https?:\/\//i.test(text) ? "URL" : /^[\w.+-]+@[\w-]+\.[a-z]{2,}$/i.test(text) ? "Email" : "Text",
  };
}