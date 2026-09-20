export interface ROIInput {
  investedAmount: number;
  currentValue: number;
  years?: number;
}

export interface ROIResult {
  netProfit: number;
  roiPercent: number;
  annualizedROI: number | null;
}

export function validateROIInput(i: ROIInput, lang: "en" | "es" = "en"): string | null {
  if (i.investedAmount <= 0) return lang === "es" ? "Ingresa un monto invertido válido." : "Enter a valid invested amount.";
  if (i.currentValue <= 0) return lang === "es" ? "Ingresa un valor actual válido." : "Enter a valid current value.";
  return null;
}

export function calculateROI(i: ROIInput): ROIResult {
  const netProfit = i.currentValue - i.investedAmount;
  const roiPercent = (netProfit / i.investedAmount) * 100;

  const annualizedROI =
    i.years && i.years > 0
      ? (Math.pow(i.currentValue / i.investedAmount, 1 / i.years) - 1) * 100
      : null;

  return {
    netProfit: Math.round(netProfit),
    roiPercent: Math.round(roiPercent * 100) / 100,
    annualizedROI: annualizedROI !== null ? Math.round(annualizedROI * 100) / 100 : null,
  };
}

import { formatCurrency, type CurrencyCode } from "./currencyselector";

export function copyROISummary(i: ROIInput, r: ROIResult, currency: CurrencyCode = "INR", lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de Cálculo de ROI

Monto Invertido: ${formatCurrency(i.investedAmount, currency)}
Valor Actual: ${formatCurrency(i.currentValue, currency)}
${i.years ? `Período de Tiempo: ${i.years} años` : ""}

Ganancia Neta: ${formatCurrency(r.netProfit, currency)}
ROI: ${r.roiPercent}%
${r.annualizedROI !== null ? `ROI Anualizado: ${r.annualizedROI}%` : ""}
`.trim();
  }
  return `
ROI Calculation Summary

Invested Amount: ${formatCurrency(i.investedAmount, currency)}
Current Value: ${formatCurrency(i.currentValue, currency)}
${i.years ? `Time Period: ${i.years} years` : ""}

Net Profit: ${formatCurrency(r.netProfit, currency)}
ROI: ${r.roiPercent}%
${r.annualizedROI !== null ? `Annualized ROI: ${r.annualizedROI}%` : ""}
`.trim();
}