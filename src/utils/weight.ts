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

export function validateWeightInput(i: WeightInput): string | null {
  if (i.value === undefined || Number.isNaN(i.value)) return "Enter a valid number.";
  if (!i.fromUnit || !i.toUnit) return "Select both units.";
  if (i.fromUnit === i.toUnit) return "Choose two different units.";
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