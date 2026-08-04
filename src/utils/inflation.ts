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

export function validateInflationInput(input: InflationInput): string | null {

  const { amount, years, annualRate } = input;

  if (!amount || Number.isNaN(amount) || amount <= 0) {
    return "Please enter an amount greater than 0.";
  }

  if (!years || Number.isNaN(years) || years <= 0) {
    return "Please enter a time period greater than 0.";
  }

  if (!annualRate || Number.isNaN(annualRate) || annualRate <= 0) {
    return "Please enter an inflation rate greater than 0.";
  }

  if (years > 100) {
    return "Please enter a realistic time period (under 100 years).";
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

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`;
}

export function copyInflationSummary(input: InflationInput, result: InflationResult): string {

  return `
Inflation Impact Summary

Amount Today:
${formatCurrency(input.amount)}

Time Period:
${input.years} Years

Annual Inflation Rate:
${input.annualRate}%

Future Value Needed (same purchasing power):
${formatCurrency(result.futureValueNeeded)}

Purchasing Power After ${input.years} Years:
${formatCurrency(result.purchasingPowerFuture)}

Purchasing Power Lost:
${formatPercent(result.purchasingPowerLostPercent)}
`.trim();

}
