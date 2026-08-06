export interface ColorConverterInput {
  color: string; // hex like #ff0000, or "r,g,b"
  inputFormat: "hex" | "rgb";
}

export interface ColorConverterResult {
  hex: string;
  rgb: string;
  hsl: string;
}

export function validateColorConverterInput(i: ColorConverterInput): string | null {
  if (!i.color) return "Enter a color value.";
  if (i.inputFormat === "hex" && !/^#?[0-9A-Fa-f]{6}$/.test(i.color)) return "Enter a valid 6-digit hex color.";
  if (i.inputFormat === "rgb" && !/^\d{1,3},\s*\d{1,3},\s*\d{1,3}$/.test(i.color)) return "Enter valid RGB as r,g,b.";
  return null;
}

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  return [
    parseInt(clean.slice(0, 2), 16),
    parseInt(clean.slice(2, 4), 16),
    parseInt(clean.slice(4, 6), 16),
  ];
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

export function calculateColorConverter(i: ColorConverterInput): ColorConverterResult {
  let r: number, g: number, b: number;

  if (i.inputFormat === "hex") {
    [r, g, b] = hexToRgb(i.color);
  } else {
    [r, g, b] = i.color.split(",").map((v) => parseInt(v.trim(), 10));
  }

  const hex = rgbToHex(r, g, b);
  const [h, s, l] = rgbToHsl(r, g, b);

  return {
    hex,
    rgb: `rgb(${r}, ${g}, ${b})`,
    hsl: `hsl(${h}, ${s}%, ${l}%)`,
  };
}

export function copyColorConverterSummary(_i: ColorConverterInput, r: ColorConverterResult): string {
  return `
Color Conversion

HEX: ${r.hex}
RGB: ${r.rgb}
HSL: ${r.hsl}
`.trim();
}
