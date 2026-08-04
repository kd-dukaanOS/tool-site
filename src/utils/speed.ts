export interface SpeedInput {
  value: number;
  fromUnit: string;
  toUnit: string;
}

export interface SpeedResult {
  convertedValue: number;
}

export const SPEED_UNITS: Record<string, number> = {
  mps: 1,
  kmph: 0.277778,
  mph: 0.44704,
  knot: 0.514444,
  fps: 0.3048,
};

export const SPEED_LABELS: Record<string, string> = {
  mps: "m/s",
  kmph: "km/h",
  mph: "mph",
  knot: "Knot",
  fps: "ft/s",
};

export function validateSpeedInput(i: SpeedInput): string | null {
  if (i.value === undefined || Number.isNaN(i.value)) return "Enter a valid number.";
  if (!i.fromUnit || !i.toUnit) return "Select both units.";
  if (i.fromUnit === i.toUnit) return "Choose two different units.";
  return null;
}

export function calculateSpeed(i: SpeedInput): SpeedResult {
  const baseValue = i.value * SPEED_UNITS[i.fromUnit];
  const convertedValue = Math.round((baseValue / SPEED_UNITS[i.toUnit]) * 1e8) / 1e8;
  return { convertedValue };
}

export function copySpeedSummary(i: SpeedInput, r: SpeedResult): string {
  return `
Speed Conversion

${i.value} ${SPEED_LABELS[i.fromUnit]} = ${r.convertedValue} ${SPEED_LABELS[i.toUnit]}
`.trim();
}