// src/utils/profit-margin.ts
export interface ProfitMarginInput {
  revenue: number;
  cost: number;
}

export interface ProfitMarginResult {
  profit: number;
  marginPercent: number;
}

export function validateProfitMarginInput(input: ProfitMarginInput, lang: "en" | "es" = "en"): string | null {
  const { revenue, cost } = input;
  const msg = lang === "es" ? {
    revenue: "Por favor ingresa un ingreso válido mayor a 0.",
    cost: "Por favor ingresa un costo válido (0 o más).",
    exceeds: "El costo no puede ser mayor que el ingreso.",
  } : {
    revenue: "Please enter a valid revenue greater than 0.",
    cost: "Please enter a valid cost (0 or more).",
    exceeds: "Cost cannot be greater than revenue.",
  };

  if (!revenue || Number.isNaN(revenue) || revenue <= 0) {
    return msg.revenue;
  }
  if (cost === undefined || Number.isNaN(cost) || cost < 0) {
    return msg.cost;
  }
  if (cost > revenue) {
    return msg.exceeds;
  }

  return null;
}

export function calculateProfitMargin(input: ProfitMarginInput): ProfitMarginResult {
  const { revenue, cost } = input;
  const profit = revenue - cost;
  const marginPercent = (profit / revenue) * 100;

  return { profit, marginPercent };
}

import { formatCurrency, type CurrencyCode } from "./currencyselector";

export function copyProfitMarginSummary(input: ProfitMarginInput, result: ProfitMarginResult, currency: CurrencyCode = "INR", lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de Margen de Ganancia

Ingresos:
${formatCurrency(input.revenue, currency)}

Costo:
${formatCurrency(input.cost, currency)}

Ganancia:
${formatCurrency(result.profit, currency)}

Margen de Ganancia:
${result.marginPercent.toFixed(1)}%
`.trim();
  }
  return `
Profit Margin Summary

Revenue:
${formatCurrency(input.revenue, currency)}

Cost:
${formatCurrency(input.cost, currency)}

Profit:
${formatCurrency(result.profit, currency)}

Profit Margin:
${result.marginPercent.toFixed(1)}%
`.trim();
}