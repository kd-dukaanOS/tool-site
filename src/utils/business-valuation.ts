// src/utils/business-valuation.ts

import { formatCurrency } from "./currency";

export interface BusinessValuationInput {
  annualRevenue: number;
  annualProfit: number;
  revenueMultiple: number;
  earningsMultiple: number;
  valuationMethod: "average" | "revenue" | "earnings";
}

export interface BusinessValuationResult {
  revenueValuation: number;
  earningsValuation: number;
  finalValuation: number;
}

export function validateBusinessValuationInput(input: BusinessValuationInput, lang: "en" | "es" = "en"): string | null {
  const { annualRevenue, annualProfit, revenueMultiple, earningsMultiple, valuationMethod } = input;

  if (lang === "es") {
    if (Number.isNaN(annualRevenue) || Number.isNaN(annualProfit) || Number.isNaN(revenueMultiple) || Number.isNaN(earningsMultiple)) {
      return "Por favor completa todos los campos con números válidos.";
    }
    if (annualRevenue < 0) {
      return "Los ingresos anuales no pueden ser negativos.";
    }
    if (valuationMethod !== "earnings" && revenueMultiple <= 0) {
      return "El múltiplo de ingresos debe ser mayor que 0.";
    }
    if (valuationMethod !== "revenue" && earningsMultiple <= 0) {
      return "El múltiplo de utilidad debe ser mayor que 0.";
    }
    return null;
  }

  if (Number.isNaN(annualRevenue) || Number.isNaN(annualProfit) || Number.isNaN(revenueMultiple) || Number.isNaN(earningsMultiple)) {
    return "Please fill in all fields with valid numbers.";
  }
  if (annualRevenue < 0) {
    return "Annual revenue cannot be negative.";
  }
  if (valuationMethod !== "earnings" && revenueMultiple <= 0) {
    return "Revenue multiple must be greater than 0.";
  }
  if (valuationMethod !== "revenue" && earningsMultiple <= 0) {
    return "Earnings multiple must be greater than 0.";
  }

  return null;
}

export function calculateBusinessValuation(input: BusinessValuationInput): BusinessValuationResult {
  const { annualRevenue, annualProfit, revenueMultiple, earningsMultiple, valuationMethod } = input;

  const revenueValuation = annualRevenue * revenueMultiple;
  const earningsValuation = annualProfit * earningsMultiple;

  let finalValuation: number;
  if (valuationMethod === "revenue") {
    finalValuation = revenueValuation;
  } else if (valuationMethod === "earnings") {
    finalValuation = earningsValuation;
  } else {
    finalValuation = (revenueValuation + earningsValuation) / 2;
  }

  return { revenueValuation, earningsValuation, finalValuation };
}


export function copyBusinessValuationSummary(
  input: BusinessValuationInput,
  result: BusinessValuationResult,
  lang: "en" | "es" = "en"
): string {
  if (lang === "es") {
    const methodLabelEs =
      input.valuationMethod === "revenue"
        ? "Solo método de ingresos"
        : input.valuationMethod === "earnings"
        ? "Solo método de utilidad"
        : "Promedio de ambos métodos";

    return [
      "Estimación de Valoración de Negocio",
      `Ingresos Anuales: ${formatCurrency(input.annualRevenue)}`,
      `Utilidad Neta Anual: ${formatCurrency(input.annualProfit)}`,
      `Múltiplo de Ingresos: ${input.revenueMultiple}x`,
      `Múltiplo de Utilidad: ${input.earningsMultiple}x`,
      `Método: ${methodLabelEs}`,
      "",
      `Valoración por Ingresos: ${formatCurrency(result.revenueValuation)}`,
      `Valoración por Utilidad: ${formatCurrency(result.earningsValuation)}`,
      `Valoración Estimada: ${formatCurrency(result.finalValuation)}`,
    ].join("\n");
  }

  const methodLabel =
    input.valuationMethod === "revenue"
      ? "Revenue method only"
      : input.valuationMethod === "earnings"
      ? "Earnings method only"
      : "Average of both methods";

  return [
    "Business Valuation Estimate",
    `Annual Revenue: ${formatCurrency(input.annualRevenue)}`,
    `Annual Net Profit: ${formatCurrency(input.annualProfit)}`,
    `Revenue Multiple: ${input.revenueMultiple}x`,
    `Earnings Multiple: ${input.earningsMultiple}x`,
    `Method: ${methodLabel}`,
    "",
    `Revenue-Based Valuation: ${formatCurrency(result.revenueValuation)}`,
    `Earnings-Based Valuation: ${formatCurrency(result.earningsValuation)}`,
    `Estimated Valuation: ${formatCurrency(result.finalValuation)}`,
  ].join("\n");
}