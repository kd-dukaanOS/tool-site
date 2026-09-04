/* ==========================================================
   ToolSite Compound Interest Utilities
   Shared by:
   - Compound Interest Calculator
========================================================== */

import { formatCurrency } from "./currency";

export interface CompoundInterestInput {
  principal: number;
  annualRate: number; // percent, e.g. 8.5
  years: number;
  frequency: number; // compounding periods per year (1,2,4,12,365)
}

export interface YearlyBreakdown {
  year: number;
  openingBalance: number;
  interestEarned: number;
  closingBalance: number;
}

export interface CompoundInterestResult {
  maturityValue: number;
  totalInterest: number;
  principalInvested: number;
  effectiveAnnualRate: number;
  growthMultiplier: number;
  yearlySchedule: YearlyBreakdown[];
}

const FREQUENCY_LABELS: Record<number, string> = {
  1: "Annually",
  2: "Semi-Annually",
  4: "Quarterly",
  12: "Monthly",
  365: "Daily",
};
const FREQUENCY_LABELS_ES: Record<number, string> = {
  1: "Anual",
  2: "Semestral",
  4: "Trimestral",
  12: "Mensual",
  365: "Diario",
};

export function frequencyLabel(frequency: number, lang: "en" | "es" = "en"): string {
  if (lang === "es") return FREQUENCY_LABELS_ES[frequency] ?? `${frequency}x / año`;
  return FREQUENCY_LABELS[frequency] ?? `${frequency}x / year`;
}

export function validateCompoundInterestInput(
  input: CompoundInterestInput,
  lang: "en" | "es" = "en"
): string | null {

  const { principal, annualRate, years, frequency } = input;

  const isEs = arguments[1] === "es";
  if (!principal || Number.isNaN(principal) || principal <= 0) {
    return isEs ? "Ingresa un monto de capital mayor a 0." : "Please enter a principal amount greater than 0.";
  }

  if (!annualRate || Number.isNaN(annualRate) || annualRate <= 0) {
    return isEs ? "Ingresa una tasa de interés mayor a 0." : "Please enter an interest rate greater than 0.";
  }

  if (!years || Number.isNaN(years) || years <= 0) {
    return isEs ? "Ingresa un período de tiempo mayor a 0." : "Please enter a time period greater than 0.";
  }

  if (!frequency || Number.isNaN(frequency) || frequency <= 0) {
    return isEs ? "Ingresa una frecuencia de capitalización válida." : "Please enter a valid compounding frequency.";
  }

  if (years > 100) {
    return isEs ? "Ingresa un período de tiempo realista (menos de 100 años)." : "Please enter a realistic time period (under 100 years).";
  }

  if (annualRate > 100) {
    return isEs ? "Ingresa una tasa de interés realista (menos de 100%)." : "Please enter a realistic interest rate (under 100%).";
  }

  return null;
}

/**
 * Core formula: A = P (1 + r/n)^(n*t)
 * A = maturity value, P = principal, r = annual rate (decimal),
 * n = compounding frequency per year, t = time in years
 */
export function calculateCompoundInterest(
  input: CompoundInterestInput
): CompoundInterestResult {

  const { principal, annualRate, years, frequency } = input;

  const r = annualRate / 100;

  const maturityValue =
    principal * Math.pow(1 + r / frequency, frequency * years);

  const totalInterest = maturityValue - principal;

  // Effective Annual Rate — the "true" yearly rate once compounding is applied
  const effectiveAnnualRate =
    (Math.pow(1 + r / frequency, frequency) - 1) * 100;

  const growthMultiplier = maturityValue / principal;

  const yearlySchedule = buildYearlySchedule(principal, r, frequency, years);

  return {
    maturityValue,
    totalInterest,
    principalInvested: principal,
    effectiveAnnualRate,
    growthMultiplier,
    yearlySchedule,
  };
}

function buildYearlySchedule(
  principal: number,
  r: number,
  frequency: number,
  years: number
): YearlyBreakdown[] {

  const schedule: YearlyBreakdown[] = [];

  let openingBalance = principal;

  const wholeYears = Math.ceil(years);

  for (let year = 1; year <= wholeYears; year++) {

    // handles a final partial year, e.g. 4.5 years
    const yearsElapsedThisRow = Math.min(year, years) - (year - 1);

    const closingBalance =
      openingBalance *
      Math.pow(1 + r / frequency, frequency * yearsElapsedThisRow);

    const interestEarned = closingBalance - openingBalance;

    schedule.push({
      year,
      openingBalance,
      interestEarned,
      closingBalance,
    });

    openingBalance = closingBalance;
  }

  return schedule;
}


export function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`;
}

export function copyCompoundInterestSummary(
  input: CompoundInterestInput,
  result: CompoundInterestResult,
  lang: "en" | "es" = "en"
): string {

  if (lang === "es") {
    return `
Resumen de Interés Compuesto

Monto del Capital:
${formatCurrency(input.principal)}

Tasa de Interés Anual:
${input.annualRate}%

Período de Tiempo:
${input.years} Años

Frecuencia de Capitalización:
${frequencyLabel(input.frequency, "es")}

Valor de Vencimiento:
${formatCurrency(result.maturityValue)}

Interés Total Ganado:
${formatCurrency(result.totalInterest)}

Tasa Anual Efectiva:
${formatPercent(result.effectiveAnnualRate)}

Multiplicador de Crecimiento:
${result.growthMultiplier.toFixed(2)}x
`.trim();
  }

  return `
Compound Interest Summary

Principal Amount:
${formatCurrency(input.principal)}

Annual Interest Rate:
${input.annualRate}%

Time Period:
${input.years} Years

Compounding Frequency:
${frequencyLabel(input.frequency)}

Maturity Value:
${formatCurrency(result.maturityValue)}

Total Interest Earned:
${formatCurrency(result.totalInterest)}

Effective Annual Rate:
${formatPercent(result.effectiveAnnualRate)}

Growth Multiplier:
${result.growthMultiplier.toFixed(2)}x
`.trim();

}
