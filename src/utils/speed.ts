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

export const SPEED_LABELS_ES: Record<string, string> = {
  mps: "m/s",
  kmph: "km/h",
  mph: "mph",
  knot: "Nudo",
  fps: "pies/s",
};

export function getSpeedLabel(unit: string, lang: "en" | "es" = "en"): string {
  return lang === "es" ? SPEED_LABELS_ES[unit] : SPEED_LABELS[unit];
}

export function validateSpeedInput(i: SpeedInput, lang: "en" | "es" = "en"): string | null {
  if (i.value === undefined || Number.isNaN(i.value)) return lang === "es" ? "Ingresa un número válido." : "Enter a valid number.";
  if (!i.fromUnit || !i.toUnit) return lang === "es" ? "Selecciona ambas unidades." : "Select both units.";
  if (i.fromUnit === i.toUnit) return lang === "es" ? "Elige dos unidades diferentes." : "Choose two different units.";
  return null;
}

export function calculateSpeed(i: SpeedInput): SpeedResult {
  const baseValue = i.value * SPEED_UNITS[i.fromUnit];
  const convertedValue = Math.round((baseValue / SPEED_UNITS[i.toUnit]) * 1e8) / 1e8;
  return { convertedValue };
}

export function copySpeedSummary(i: SpeedInput, r: SpeedResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Conversión de Velocidad

${i.value} ${getSpeedLabel(i.fromUnit, "es")} = ${r.convertedValue} ${getSpeedLabel(i.toUnit, "es")}
`.trim();
  }
  return `
Speed Conversion

${i.value} ${SPEED_LABELS[i.fromUnit]} = ${r.convertedValue} ${SPEED_LABELS[i.toUnit]}
`.trim();
}