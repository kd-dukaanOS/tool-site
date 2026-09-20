export interface WeightInput {
  value: number;
  fromUnit: string;
  toUnit: string;
}

export interface WeightResult {
  convertedValue: number;
}

export const WEIGHT_UNITS: Record<string, number> = {
  mg: 0.000001,
  g: 0.001,
  kg: 1,
  tonne: 1000,
  oz: 0.0283495,
  lb: 0.453592,
};

export const WEIGHT_LABELS: Record<string, string> = {
  mg: "Milligram",
  g: "Gram",
  kg: "Kilogram",
  tonne: "Tonne",
  oz: "Ounce",
  lb: "Pound",
};

export function validateWeightInput(i: WeightInput, lang: "en" | "es" = "en"): string | null {
  const t = lang === "es"
    ? { num:"Ingresa un número válido.", units:"Selecciona ambas unidades.", diff:"Elige dos unidades diferentes." }
    : { num:"Enter a valid number.", units:"Select both units.", diff:"Choose two different units." };
  if (i.value === undefined || Number.isNaN(i.value)) return t.num;
  if (!i.fromUnit || !i.toUnit) return t.units;
  if (i.fromUnit === i.toUnit) return t.diff;
  return null;
}

export function calculateWeight(i: WeightInput): WeightResult {
  const baseValue = i.value * WEIGHT_UNITS[i.fromUnit];
  const convertedValue = Math.round((baseValue / WEIGHT_UNITS[i.toUnit]) * 1e8) / 1e8;
  return { convertedValue };
}

export function copyWeightSummary(i: WeightInput, r: WeightResult): string {
  return `
Weight Conversion

${i.value} ${WEIGHT_LABELS[i.fromUnit]} = ${r.convertedValue} ${WEIGHT_LABELS[i.toUnit]}
`.trim();
}