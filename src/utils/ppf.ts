export interface PPFInput {
  annualInvestment: number;
  annualRate: number;
  tenureYears: number;
}

export interface YearlyPPFRow {
  year: number;
  openingBalance: number;
  investment: number;
  interestEarned: number;
  closingBalance: number;
}

export interface PPFResult {
  maturityValue: number;
  totalInvested: number;
  totalInterest: number;
  yearlySchedule: YearlyPPFRow[];
}

const MAX_ANNUAL_INVESTMENT = 150000; // current PPF annual cap
const MIN_TENURE = 15; // PPF lock-in

export function validatePPFInput(input: PPFInput, lang: "en" | "es" = "en"): string | null {

  const { annualInvestment, annualRate, tenureYears } = input;

  if (!annualInvestment || Number.isNaN(annualInvestment) || annualInvestment <= 0) {
    return lang === "es" ? "Por favor ingresa una inversión anual mayor a 0." : "Please enter an annual investment greater than 0.";
  }

  if (annualInvestment > MAX_ANNUAL_INVESTMENT) {
    return lang === "es"
      ? `La inversión anual del PPF no puede exceder ₹${MAX_ANNUAL_INVESTMENT.toLocaleString("en-IN")}.`
      : `PPF annual investment cannot exceed ₹${MAX_ANNUAL_INVESTMENT.toLocaleString("en-IN")}.`;
  }

  if (!annualRate || Number.isNaN(annualRate) || annualRate <= 0) {
    return lang === "es" ? "Por favor ingresa una tasa de interés mayor a 0." : "Please enter an interest rate greater than 0.";
  }

  if (!tenureYears || Number.isNaN(tenureYears) || tenureYears < MIN_TENURE) {
    return lang === "es" ? `El plazo del PPF debe ser de al menos ${MIN_TENURE} años.` : `PPF tenure must be at least ${MIN_TENURE} years.`;
  }

  if (tenureYears > 50) {
    return lang === "es" ? "Por favor ingresa un plazo realista (menos de 50 años)." : "Please enter a realistic tenure (under 50 years).";
  }

  return null;
}

/**
 * PPF compounds annually; deposit is treated as made at the start of
 * the year, so each year: closing = (opening + investment) × (1 + r)
 */
export function calculatePPF(input: PPFInput): PPFResult {

  const { annualInvestment, annualRate, tenureYears } = input;

  const r = annualRate / 100;

  const yearlySchedule: YearlyPPFRow[] = [];

  let openingBalance = 0;
  let totalInvested = 0;

  const wholeYears = Math.floor(tenureYears);

  for (let year = 1; year <= wholeYears; year++) {

    const closingBalance = (openingBalance + annualInvestment) * (1 + r);
    const interestEarned = closingBalance - openingBalance - annualInvestment;

    yearlySchedule.push({
      year,
      openingBalance,
      investment: annualInvestment,
      interestEarned,
      closingBalance,
    });

    totalInvested += annualInvestment;
    openingBalance = closingBalance;
  }

  const maturityValue = openingBalance;
  const totalInterest = maturityValue - totalInvested;

  return {
    maturityValue,
    totalInvested,
    totalInterest,
    yearlySchedule,
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function copyPPFSummary(input: PPFInput, result: PPFResult, lang: "en" | "es" = "en"): string {

  if (lang === "es") {
    return `
Resumen de PPF

Inversión Anual:
${formatCurrency(input.annualInvestment)}

Tasa de Interés:
${input.annualRate}%

Plazo:
${input.tenureYears} Años

Valor de Vencimiento:
${formatCurrency(result.maturityValue)}

Total Invertido:
${formatCurrency(result.totalInvested)}

Interés Total Ganado:
${formatCurrency(result.totalInterest)}
`.trim();
  }

  return `
PPF Summary

Annual Investment:
${formatCurrency(input.annualInvestment)}

Interest Rate:
${input.annualRate}%

Tenure:
${input.tenureYears} Years

Maturity Value:
${formatCurrency(result.maturityValue)}

Total Invested:
${formatCurrency(result.totalInvested)}

Total Interest Earned:
${formatCurrency(result.totalInterest)}
`.trim();

}
