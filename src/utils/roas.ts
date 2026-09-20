// src/utils/roas.ts
import { formatCurrency } from "./currency";

export interface RoasInput {
  revenue: number;
  adSpend: number;
}

export interface RoasResult {
  roas: number;
  roasPercent: number;
  profit: number;
}

export function validateRoasInput(input: RoasInput, lang: "en" | "es" = "en"): string | null {
  const { revenue, adSpend } = input;
  const msg = lang === "es" ? {
    revenue: "Por favor ingresa un ingreso válido (0 o más).",
    adSpend: "Por favor ingresa un gasto publicitario válido mayor a 0.",
  } : {
    revenue: "Please enter a valid revenue (0 or more).",
    adSpend: "Please enter a valid ad spend greater than 0.",
  };

  if (revenue === undefined || Number.isNaN(revenue) || revenue < 0) {
    return msg.revenue;
  }
  if (!adSpend || Number.isNaN(adSpend) || adSpend <= 0) {
    return msg.adSpend;
  }

  return null;
}

export function calculateRoas(input: RoasInput): RoasResult {
  const { revenue, adSpend } = input;
  const roas = revenue / adSpend;
  const roasPercent = roas * 100;
  const profit = revenue - adSpend;

  return { roas, roasPercent, profit };
}


export function copyRoasSummary(input: RoasInput, result: RoasResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de ROAS

Ingresos por Anuncios:
${formatCurrency(input.revenue)}

Gasto Publicitario:
${formatCurrency(input.adSpend)}

ROAS:
${result.roas.toFixed(2)}x

Retorno:
${result.roasPercent.toFixed(1)}%

Ganancia:
${formatCurrency(result.profit)}
`.trim();
  }
  return `
ROAS Summary

Revenue from Ads:
${formatCurrency(input.revenue)}

Ad Spend:
${formatCurrency(input.adSpend)}

ROAS:
${result.roas.toFixed(2)}x

Return:
${result.roasPercent.toFixed(1)}%

Profit:
${formatCurrency(result.profit)}
`.trim();
}