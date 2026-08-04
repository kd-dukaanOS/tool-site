export interface AreaInput {
  value: number;
  fromUnit: string;
  toUnit: string;
}

export interface AreaResult {
  convertedValue: number;
}

export const AREA_UNITS: Record<string, number> = {
  sqmm: 0.000001,
  sqcm: 0.0001,
  sqm: 1,
  sqkm: 1000000,
  sqft: 0.092903,
  sqyd: 0.836127,
  acre: 4046.86,
  hectare: 10000,
};

export const AREA_LABELS: Record<string, string> = {
  sqmm: "Sq Millimeter",
  sqcm: "Sq Centimeter",
  sqm: "Sq Meter",
  sqkm: "Sq Kilometer",
  sqft: "Sq Foot",
  sqyd: "Sq Yard",
  acre: "Acre",
  hectare: "Hectare",
};

export function validateAreaInput(i: AreaInput): string | null {
  if (i.value === undefined || Number.isNaN(i.value)) return "Enter a valid number.";
  if (!i.fromUnit || !i.toUnit) return "Select both units.";
  if (i.fromUnit === i.toUnit) return "Choose two different units.";
  return null;
}

export function calculateArea(i: AreaInput): AreaResult {
  const baseValue = i.value * AREA_UNITS[i.fromUnit];
  const convertedValue = Math.round((baseValue / AREA_UNITS[i.toUnit]) * 1e8) / 1e8;
  return { convertedValue };
}

export function copyAreaSummary(i: AreaInput, r: AreaResult): string {
  return `
Area Conversion

${i.value} ${AREA_LABELS[i.fromUnit]} = ${r.convertedValue} ${AREA_LABELS[i.toUnit]}
`.trim();
}