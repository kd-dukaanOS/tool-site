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

export function validateLengthInput(i: LengthInput): string | null {
  if (i.value === undefined || Number.isNaN(i.value)) return "Enter a valid number.";
  if (!i.fromUnit || !i.toUnit) return "Select both units.";
  if (i.fromUnit === i.toUnit) return "Choose two different units.";
  return null;
}

export function calculateLength(i: LengthInput): LengthResult {
  const baseValue = i.value * LENGTH_UNITS[i.fromUnit];
  const convertedValue = Math.round((baseValue / LENGTH_UNITS[i.toUnit]) * 1e8) / 1e8;
  return { convertedValue };
}

export function copyLengthSummary(i: LengthInput, r: LengthResult): string {
  return `
Length Conversion

${i.value} ${LENGTH_LABELS[i.fromUnit]} = ${r.convertedValue} ${LENGTH_LABELS[i.toUnit]}
`.trim();
}