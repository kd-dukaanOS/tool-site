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

export function validatePPFInput(input: PPFInput): string | null {

  const { annualInvestment, annualRate, tenureYears } = input;

  if (!annualInvestment || Number.isNaN(annualInvestment) || annualInvestment <= 0) {
    return "Please enter an annual investment greater than 0.";
  }

  if (annualInvestment > MAX_ANNUAL_INVESTMENT) {
    return `PPF annual investment cannot exceed ₹${MAX_ANNUAL_INVESTMENT.toLocaleString("en-IN")}.`;
  }

  if (!annualRate || Number.isNaN(annualRate) || annualRate <= 0) {
    return "Please enter an interest rate greater than 0.";
  }

  if (!tenureYears || Number.isNaN(tenureYears) || tenureYears < MIN_TENURE) {
    return `PPF tenure must be at least ${MIN_TENURE} years.`;
  }

  if (tenureYears > 50) {
    return "Please enter a realistic tenure (under 50 years).";
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

export function copyPPFSummary(input: PPFInput, result: PPFResult): string {

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
