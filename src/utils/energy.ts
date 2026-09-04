export interface EnergyInput {
  value: number;
  fromUnit: string;
  toUnit: string;
}

export interface EnergyResult {
  convertedValue: number;
}

export const ENERGY_UNITS: Record<string, number> = {
  joule: 1,
  kj: 1000,
  cal: 4.184,
  kcal: 4184,
  wh: 3600,
  kwh: 3600000,
  btu: 1055.06,
};

export const ENERGY_LABELS: Record<string, string> = {
  joule: "Joule",
  kj: "Kilojoule",
  cal: "Calorie",
  kcal: "Kilocalorie",
  wh: "Watt-hour",
  kwh: "Kilowatt-hour",
  btu: "BTU",
};

export const ENERGY_LABELS_ES: Record<string, string> = {
  joule: "Julio",
  kj: "Kilojulio",
  cal: "Caloría",
  kcal: "Kilocaloría",
  wh: "Vatio-hora",
  kwh: "Kilovatio-hora",
  btu: "BTU",
};

export function validateEnergyInput(i: EnergyInput, lang: "en" | "es" = "en"): string | null {
  if (lang === "es") {
    if (i.value === undefined || Number.isNaN(i.value)) return "Ingresa un número válido.";
    if (!i.fromUnit || !i.toUnit) return "Selecciona ambas unidades.";
    if (i.fromUnit === i.toUnit) return "Elige dos unidades diferentes.";
    return null;
  }
  if (i.value === undefined || Number.isNaN(i.value)) return "Enter a valid number.";
  if (!i.fromUnit || !i.toUnit) return "Select both units.";
  if (i.fromUnit === i.toUnit) return "Choose two different units.";
  return null;
}

export function calculateEnergy(i: EnergyInput): EnergyResult {
  const baseValue = i.value * ENERGY_UNITS[i.fromUnit];
  const convertedValue = Math.round((baseValue / ENERGY_UNITS[i.toUnit]) * 1e8) / 1e8;
  return { convertedValue };
}

export function copyEnergySummary(i: EnergyInput, r: EnergyResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Conversión de Energía

${i.value} ${ENERGY_LABELS_ES[i.fromUnit]} = ${r.convertedValue} ${ENERGY_LABELS_ES[i.toUnit]}
`.trim();
  }
  return `
Energy Conversion

${i.value} ${ENERGY_LABELS[i.fromUnit]} = ${r.convertedValue} ${ENERGY_LABELS[i.toUnit]}
`.trim();
}