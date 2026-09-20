export interface InflationInput {
  amount: number;
  years: number;
  annualRate: number; // %
}

export interface InflationResult {
  futureValueNeeded: number;
  purchasingPowerFuture: number;
  totalInflationPercent: number;
  purchasingPowerLostPercent: number;
}

export function validateInflationInput(input: InflationInput, lang: "en" | "es" = "en"): string | null {

  const { amount, years, annualRate } = input;
  const msg = lang === "es" ? {
    amount: "Por favor ingresa un monto mayor a 0.",
    years: "Por favor ingresa un período de tiempo mayor a 0.",
    rate: "Por favor ingresa una tasa de inflación mayor a 0.",
    realistic: "Por favor ingresa un período realista (menos de 100 años).",
  } : {
    amount: "Please enter an amount greater than 0.",
    years: "Please enter a time period greater than 0.",
    rate: "Please enter an inflation rate greater than 0.",
    realistic: "Please enter a realistic time period (under 100 years).",
  };

  if (!amount || Number.isNaN(amount) || amount <= 0) {
    return msg.amount;
  }

  if (!years || Number.isNaN(years) || years <= 0) {
    return msg.years;
  }

  if (!annualRate || Number.isNaN(annualRate) || annualRate <= 0) {
    return msg.rate;
  }

  if (years > 100) {
    return msg.realistic;
  }

  return null;
}

/**
 * FV = amount * (1 + r)^years   — future ₹ needed to match today's purchasing power
 * PV = amount / (1 + r)^years   — today's ₹ value that "amount" will erode to
 */
export function calculateInflation(input: InflationInput): InflationResult {

  const { amount, years, annualRate } = input;

  const r = annualRate / 100;

  const futureValueNeeded = amount * Math.pow(1 + r, years);
  const purchasingPowerFuture = amount / Math.pow(1 + r, years);

  const totalInflationPercent =
    ((futureValueNeeded - amount) / amount) * 100;

  const purchasingPowerLostPercent =
    ((amount - purchasingPowerFuture) / amount) * 100;

  return {
    futureValueNeeded,
    purchasingPowerFuture,
    totalInflationPercent,
    purchasingPowerLostPercent,
  };
}

import { formatCurrency, type CurrencyCode } from "./currencyselector";

export function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`;
}

export function copyInflationSummary(input: InflationInput, result: InflationResult, currency: CurrencyCode = "INR", lang: "en" | "es" = "en"): string {

  if (lang === "es") {
    return `
Resumen de Impacto de la Inflación

Monto Hoy:
${formatCurrency(input.amount, currency)}

Período de Tiempo:
${input.years} Años

Tasa de Inflación Anual:
${input.annualRate}%

Valor Futuro Necesario (mismo poder adquisitivo):
${formatCurrency(result.futureValueNeeded, currency)}

Poder Adquisitivo Después de ${input.years} Años:
${formatCurrency(result.purchasingPowerFuture, currency)}

Poder Adquisitivo Perdido:
${formatPercent(result.purchasingPowerLostPercent)}
`.trim();
  }

  return `
Inflation Impact Summary

Amount Today:
${formatCurrency(input.amount, currency)}

Time Period:
${input.years} Years

Annual Inflation Rate:
${input.annualRate}%

Future Value Needed (same purchasing power):
${formatCurrency(result.futureValueNeeded, currency)}

Purchasing Power After ${input.years} Years:
${formatCurrency(result.purchasingPowerFuture, currency)}

Purchasing Power Lost:
${formatPercent(result.purchasingPowerLostPercent)}
`.trim();

}
