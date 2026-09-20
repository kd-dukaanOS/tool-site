export interface PressureInput {
  value: number;
  fromUnit: string;
  toUnit: string;
}

export interface PressureResult {
  convertedValue: number;
}

export const PRESSURE_UNITS: Record<string, number> = {
  pascal: 1,
  kpa: 1000,
  bar: 100000,
  atm: 101325,
  psi: 6894.76,
  mmhg: 133.322,
};

export const PRESSURE_LABELS: Record<string, string> = {
  pascal: "Pascal",
  kpa: "Kilopascal",
  bar: "Bar",
  atm: "Atmosphere",
  psi: "PSI",
  mmhg: "mmHg",
};

export const PRESSURE_LABELS_ES: Record<string, string> = {
  pascal: "Pascal",
  kpa: "Kilopascal",
  bar: "Bar",
  atm: "Atmósfera",
  psi: "PSI",
  mmhg: "mmHg",
};

export function getPressureLabel(unit: string, lang: "en" | "es" = "en"): string {
  return lang === "es" ? PRESSURE_LABELS_ES[unit] : PRESSURE_LABELS[unit];
}

export function validatePressureInput(i: PressureInput, lang: "en" | "es" = "en"): string | null {
  if (i.value === undefined || Number.isNaN(i.value)) return lang === "es" ? "Ingresa un número válido." : "Enter a valid number.";
  if (!i.fromUnit || !i.toUnit) return lang === "es" ? "Selecciona ambas unidades." : "Select both units.";
  if (i.fromUnit === i.toUnit) return lang === "es" ? "Elige dos unidades diferentes." : "Choose two different units.";
  return null;
}

export function calculatePressure(i: PressureInput): PressureResult {
  const baseValue = i.value * PRESSURE_UNITS[i.fromUnit];
  const convertedValue = Math.round((baseValue / PRESSURE_UNITS[i.toUnit]) * 1e8) / 1e8;
  return { convertedValue };
}

export function copyPressureSummary(i: PressureInput, r: PressureResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Conversión de Presión

${i.value} ${getPressureLabel(i.fromUnit, "es")} = ${r.convertedValue} ${getPressureLabel(i.toUnit, "es")}
`.trim();
  }
  return `
Pressure Conversion

${i.value} ${PRESSURE_LABELS[i.fromUnit]} = ${r.convertedValue} ${PRESSURE_LABELS[i.toUnit]}
`.trim();
}