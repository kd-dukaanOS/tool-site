import { formatCurrency } from "./currency";

export interface MarkupInput {
  cost: number;
  markupPercent: number;
}

export interface MarkupResult {
  profit: number;
  salePrice: number;
  marginPercent: number;
}

export function validateMarkupInput(input: MarkupInput, lang: "en" | "es" = "en"): string | null {
  const { cost, markupPercent } = input;

  if (!cost || Number.isNaN(cost) || cost <= 0) {
    return lang === "es" ? "Ingresa un costo válido mayor a 0." : "Please enter a valid cost greater than 0.";
  }

  if (markupPercent === undefined || Number.isNaN(markupPercent) || markupPercent < 0) {
    return lang === "es" ? "Ingresa un porcentaje de margen válido (0 o más)." : "Please enter a valid markup percentage (0 or more).";
  }

  return null;
}

export function calculateMarkup(input: MarkupInput): MarkupResult {
  const { cost, markupPercent } = input;

  const profit = cost * (markupPercent / 100);
  const salePrice = cost + profit;
  const marginPercent = (profit / salePrice) * 100;

  return { profit, salePrice, marginPercent };
}



export function copyMarkupSummary(input: MarkupInput, result: MarkupResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de Margen

Costo:
${formatCurrency(input.cost)}

Margen:
${input.markupPercent}%

Precio de Venta:
${formatCurrency(result.salePrice)}

Ganancia:
${formatCurrency(result.profit)}

Margen Resultante:
${result.marginPercent.toFixed(1)}%
`.trim();
  }
  return `
Markup Summary

Cost:
${formatCurrency(input.cost)}

Markup:
${input.markupPercent}%

Sale Price:
${formatCurrency(result.salePrice)}

Profit:
${formatCurrency(result.profit)}

Resulting Margin:
${result.marginPercent.toFixed(1)}%
`.trim();
}