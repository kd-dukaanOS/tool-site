export interface TemperatureInput {
  value: number;
  fromUnit: "c" | "f" | "k";
  toUnit: "c" | "f" | "k";
}

export interface TemperatureResult {
  convertedValue: number;
}

export const TEMPERATURE_LABELS: Record<string, string> = {
  c: "Celsius",
  f: "Fahrenheit",
  k: "Kelvin",
};

export const TEMPERATURE_LABELS_ES: Record<string, string> = {
  c: "Celsius",
  f: "Fahrenheit",
  k: "Kelvin",
};

export function getTemperatureLabel(unit: string, lang: "en" | "es" = "en"): string {
  return lang === "es" ? TEMPERATURE_LABELS_ES[unit] : TEMPERATURE_LABELS[unit];
}

export function validateTemperatureInput(i: TemperatureInput, lang: "en" | "es" = "en"): string | null {
  if (i.value === undefined || Number.isNaN(i.value)) return lang === "es" ? "Ingresa un número válido." : "Enter a valid number.";
  if (!i.fromUnit || !i.toUnit) return lang === "es" ? "Selecciona ambas unidades." : "Select both units.";
  if (i.fromUnit === i.toUnit) return lang === "es" ? "Elige dos unidades diferentes." : "Choose two different units.";
  if (i.fromUnit === "k" && i.value < 0) return lang === "es" ? "Kelvin no puede ser negativo." : "Kelvin cannot be negative.";
  return null;
}

export function calculateTemperature(i: TemperatureInput): TemperatureResult {
  let celsius: number;

  if (i.fromUnit === "c") celsius = i.value;
  else if (i.fromUnit === "f") celsius = ((i.value - 32) * 5) / 9;
  else celsius = i.value - 273.15;

  let result: number;
  if (i.toUnit === "c") result = celsius;
  else if (i.toUnit === "f") result = (celsius * 9) / 5 + 32;
  else result = celsius + 273.15;

  return { convertedValue: Math.round(result * 1000) / 1000 };
}

export function copyTemperatureSummary(i: TemperatureInput, r: TemperatureResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Conversión de Temperatura

${i.value}°${getTemperatureLabel(i.fromUnit, "es")[0]} = ${r.convertedValue}°${getTemperatureLabel(i.toUnit, "es")[0]}
`.trim();
  }
  return `
Temperature Conversion

${i.value}°${TEMPERATURE_LABELS[i.fromUnit][0]} = ${r.convertedValue}°${TEMPERATURE_LABELS[i.toUnit][0]}
`.trim();
}