export interface LengthInput {
  value: number;
  fromUnit: string;
  toUnit: string;
}

export interface LengthResult {
  convertedValue: number;
}

export const LENGTH_UNITS: Record<string, number> = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.344,
};

export const LENGTH_LABELS: Record<string, string> = {
  mm: "Millimeter",
  cm: "Centimeter",
  m: "Meter",
  km: "Kilometer",
  in: "Inch",
  ft: "Foot",
  yd: "Yard",
  mi: "Mile",
};

export function validateLengthInput(i: LengthInput, lang: "en" | "es" = "en"): string | null {
  if (i.value === undefined || Number.isNaN(i.value)) return lang === "es" ? "Ingresa un número válido." : "Enter a valid number.";
  if (!i.fromUnit || !i.toUnit) return lang === "es" ? "Selecciona ambas unidades." : "Select both units.";
  if (i.fromUnit === i.toUnit) return lang === "es" ? "Elige dos unidades diferentes." : "Choose two different units.";
  return null;
}

export function calculateLength(i: LengthInput): LengthResult {
  const baseValue = i.value * LENGTH_UNITS[i.fromUnit];
  const convertedValue = Math.round((baseValue / LENGTH_UNITS[i.toUnit]) * 1e8) / 1e8;
  return { convertedValue };
}

export const LENGTH_LABELS_ES: Record<string, string> = {
  mm: "Milímetro", cm: "Centímetro", m: "Metro", km: "Kilómetro", in: "Pulgada", ft: "Pie", yd: "Yarda", mi: "Milla",
};

export function copyLengthSummary(i: LengthInput, r: LengthResult, lang: "en" | "es" = "en"): string {
  const labels = lang === "es" ? LENGTH_LABELS_ES : LENGTH_LABELS;
  const title = lang === "es" ? "Conversión de Longitud" : "Length Conversion";
  return `
${title}

${i.value} ${labels[i.fromUnit]} = ${r.convertedValue} ${labels[i.toUnit]}
`.trim();
}