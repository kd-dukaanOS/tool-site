export interface VolumeInput {
  value: number;
  fromUnit: string;
  toUnit: string;
}

export interface VolumeResult {
  convertedValue: number;
}

export const VOLUME_UNITS: Record<string, number> = {
  ml: 0.001,
  l: 1,
  cubicm: 1000,
  gallon: 3.78541,
  quart: 0.946353,
  pint: 0.473176,
  cup: 0.236588,
  floz: 0.0295735,
};

export const VOLUME_LABELS: Record<string, string> = {
  ml: "Milliliter",
  l: "Liter",
  cubicm: "Cubic Meter",
  gallon: "Gallon",
  quart: "Quart",
  pint: "Pint",
  cup: "Cup",
  floz: "Fluid Ounce",
};

export function validateVolumeInput(i: VolumeInput): string | null {
  if (i.value === undefined || Number.isNaN(i.value)) return "Enter a valid number.";
  if (!i.fromUnit || !i.toUnit) return "Select both units.";
  if (i.fromUnit === i.toUnit) return "Choose two different units.";
  return null;
}

export function calculateVolume(i: VolumeInput): VolumeResult {
  const baseValue = i.value * VOLUME_UNITS[i.fromUnit];
  const convertedValue = Math.round((baseValue / VOLUME_UNITS[i.toUnit]) * 1e8) / 1e8;
  return { convertedValue };
}

export function copyVolumeSummary(i: VolumeInput, r: VolumeResult): string {
  return `
Volume Conversion

${i.value} ${VOLUME_LABELS[i.fromUnit]} = ${r.convertedValue} ${VOLUME_LABELS[i.toUnit]}
`.trim();
}