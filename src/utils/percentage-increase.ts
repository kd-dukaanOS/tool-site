export interface PercentageIncreaseInput {
  originalValue: number;
  newValue: number;
}

export interface PercentageIncreaseResult {
  increaseAmount: number;
  percentageIncrease: number;
}

export function validatePercentageIncreaseInput(i: PercentageIncreaseInput, lang: "en" | "es" = "en"): string | null {
  if (i.originalValue <= 0) return lang === "es" ? "Ingresa un valor original válido." : "Enter a valid original value.";
  if (i.newValue < 0) return lang === "es" ? "Ingresa un nuevo valor válido." : "Enter a valid new value.";
  return null;
}

export function calculatePercentageIncrease(i: PercentageIncreaseInput): PercentageIncreaseResult {
  const increaseAmount = i.newValue - i.originalValue;
  const percentageIncrease = (increaseAmount / i.originalValue) * 100;

  return {
    increaseAmount: Math.round(increaseAmount * 100) / 100,
    percentageIncrease: Math.round(percentageIncrease * 100) / 100,
  };
}

export function copyPercentageIncreaseSummary(
  i: PercentageIncreaseInput,
  r: PercentageIncreaseResult,
  lang: "en" | "es" = "en"
): string {
  if (lang === "es") {
    return `
Resumen de Aumento Porcentual

Valor Original: ${i.originalValue}
Nuevo Valor: ${i.newValue}

Cambio: ${r.increaseAmount}
Porcentaje de ${r.percentageIncrease >= 0 ? "Aumento" : "Disminución"}: ${Math.abs(r.percentageIncrease)}%
`.trim();
  }
  return `
Percentage Increase Summary

Original Value: ${i.originalValue}
New Value: ${i.newValue}

Change: ${r.increaseAmount}
Percentage ${r.percentageIncrease >= 0 ? "Increase" : "Decrease"}: ${Math.abs(r.percentageIncrease)}%
`.trim();
}