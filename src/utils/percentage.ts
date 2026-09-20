import { round } from "./calculator";

export type PercentMode =
  | "percentOf"
  | "isWhatPercent"
  | "percentChange"
  | "findBase";

export interface PercentResult {
  result: number;
  positive: boolean;
}

export interface ModeInfo {
  title: string;
  value1Label: string;
  value2Label: string;
  hint: string;
}

export const MODE_INFO: Record<PercentMode, ModeInfo> = {
  percentOf: {
    title: "X% of Y",
    value1Label: "Percentage (%)",
    value2Label: "Number",
    hint: "Find what value X% of Y equals.",
  },
  isWhatPercent: {
    title: "X is what % of Y",
    value1Label: "Part (X)",
    value2Label: "Whole (Y)",
    hint: "Find what percentage X is of Y.",
  },
  percentChange: {
    title: "% Increase / Decrease",
    value1Label: "From Value",
    value2Label: "To Value",
    hint: "Find the percentage change from one value to another.",
  },
  findBase: {
    title: "X is Y% of what?",
    value1Label: "Value (X)",
    value2Label: "Percent (Y%)",
    hint: "Find the original number when X is Y percent of it.",
  },
};

export const MODE_INFO_ES: Record<PercentMode, ModeInfo> = {
  percentOf: {
    title: "X% de Y",
    value1Label: "Porcentaje (%)",
    value2Label: "Número",
    hint: "Encuentra qué valor equivale a X% de Y.",
  },
  isWhatPercent: {
    title: "X es qué % de Y",
    value1Label: "Parte (X)",
    value2Label: "Total (Y)",
    hint: "Encuentra qué porcentaje representa X de Y.",
  },
  percentChange: {
    title: "% Aumento / Disminución",
    value1Label: "Valor Inicial",
    value2Label: "Valor Final",
    hint: "Encuentra el cambio porcentual entre dos valores.",
  },
  findBase: {
    title: "X es Y% de qué?",
    value1Label: "Valor (X)",
    value2Label: "Porcentaje (Y%)",
    hint: "Encuentra el número original cuando X es Y por ciento de él.",
  },
};

export function getModeInfo(mode: PercentMode, lang: "en" | "es" = "en"): ModeInfo {
  return lang === "es" ? MODE_INFO_ES[mode] : MODE_INFO[mode];
}

export function calculatePercent(
  mode: PercentMode,
  value1: number,
  value2: number
): PercentResult {

  switch (mode) {

    case "percentOf":
      return { result: round((value1 / 100) * value2), positive: true };

    case "isWhatPercent":
      return { result: round((value1 / value2) * 100), positive: true };

    case "percentChange": {
      const change = ((value2 - value1) / value1) * 100;
      return { result: round(change), positive: change >= 0 };
    }

    case "findBase":
      return { result: round(value1 / (value2 / 100)), positive: true };
  }
}

export function percentExpression(
  mode: PercentMode,
  value1: number,
  value2: number,
  result: PercentResult,
  lang: "en" | "es" = "en"
): string {

  if (lang === "es") {
    switch (mode) {
      case "percentOf":
        return `${value1}% de ${value2} = ${result.result}`;
      case "isWhatPercent":
        return `${value1} es ${result.result}% de ${value2}`;
      case "percentChange":
        return `${value1} → ${value2} es un ${Math.abs(result.result)}% de ${result.positive ? "aumento" : "disminución"}`;
      case "findBase":
        return `${value1} es ${value2}% de ${result.result}`;
    }
  }

  switch (mode) {
    case "percentOf":
      return `${value1}% of ${value2} = ${result.result}`;
    case "isWhatPercent":
      return `${value1} is ${result.result}% of ${value2}`;
    case "percentChange":
      return `${value1} → ${value2} is a ${Math.abs(result.result)}% ${result.positive ? "increase" : "decrease"}`;
    case "findBase":
      return `${value1} is ${value2}% of ${result.result}`;
  }
}

export function percentInsight(
  mode: PercentMode,
  result: PercentResult,
  lang: "en" | "es" = "en"
): string {

  if (lang === "es") {
    if (mode === "percentChange") {
      return result.positive
        ? `Esto es un aumento del ${Math.abs(result.result)}%.`
        : `Esto es una caída del ${Math.abs(result.result)}%.`;
    }

    if (mode === "isWhatPercent") {
      return `Eso ${result.result >= 100 ? "es más que el total" : `está a ${round(100 - result.result, 1)}% del total`}.`;
    }

    return `Resultado calculado usando la fórmula "${MODE_INFO_ES[mode].title}".`;
  }

  if (mode === "percentChange") {
    return result.positive
      ? `This is a rise of ${Math.abs(result.result)}%.`
      : `This is a drop of ${Math.abs(result.result)}%.`;
  }

  if (mode === "isWhatPercent") {
    return `That's ${result.result >= 100 ? "more than the whole" : `${round(100 - result.result, 1)}% short of the whole`}.`;
  }

  return `Result calculated using the "${MODE_INFO[mode].title}" formula.`;
}

export function validatePercentInputs(
  mode: PercentMode,
  value1: number,
  value2: number,
  lang: "en" | "es" = "en"
): string | null {

  if (Number.isNaN(value1)) return lang === "es" ? "Por favor ingresa un primer valor válido." : "Please enter a valid first value.";
  if (Number.isNaN(value2)) return lang === "es" ? "Por favor ingresa un segundo valor válido." : "Please enter a valid second value.";

  if ((mode === "isWhatPercent" || mode === "percentChange" || mode === "findBase") && value2 === 0) {
    return lang === "es" ? "El segundo valor no puede ser cero para este cálculo." : "The second value cannot be zero for this calculation.";
  }

  return null;
}

export function copyPercentSummary(
  mode: PercentMode,
  value1: number,
  value2: number,
  result: PercentResult,
  lang: "en" | "es" = "en"
): string {

  const info = getModeInfo(mode, lang);

  if (lang === "es") {
    return `
Cálculo de Porcentaje

Tipo: ${info.title}
${info.value1Label}: ${value1}
${info.value2Label}: ${value2}

Resultado: ${percentExpression(mode, value1, value2, result, lang)}
`.trim();
  }

  return `
Percentage Calculation

Type: ${info.title}
${info.value1Label}: ${value1}
${info.value2Label}: ${value2}

Result: ${percentExpression(mode, value1, value2, result, lang)}
`.trim();
}
