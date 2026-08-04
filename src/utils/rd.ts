export interface RDInput {
  monthlyDeposit: number;
  annualRate: number;
  tenureMonths: number;
}

export interface RDResult {
  maturityValue: number;
  totalDeposited: number;
  totalInterest: number;
  effectiveYield: number;
}

export function validateRDInput(input: RDInput): string | null {

  const { monthlyDeposit, annualRate, tenureMonths } = input;

  if (!monthlyDeposit || Number.isNaN(monthlyDeposit) || monthlyDeposit <= 0) {
    return "Please enter a monthly deposit amount greater than 0.";
  }

  if (!annualRate || Number.isNaN(annualRate) || annualRate <= 0) {
    return "Please enter an interest rate greater than 0.";
  }

  if (!tenureMonths || Number.isNaN(tenureMonths) || tenureMonths <= 0) {
    return "Please enter a tenure greater than 0.";
  }

  if (tenureMonths > 240) {
    return "Please enter a realistic tenure (under 240 months).";
  }

  return null;
}

/**
 * Standard bank RD formula (quarterly compounding on monthly deposits):
 * M = P × [(1+i)^n − 1] / (1 − (1+i)^(−1/3))
 * where i = annualRate/400 (quarterly rate), n = tenureMonths/3 (quarters)
 */
export function calculateRD(input: RDInput): RDResult {

  const { monthlyDeposit, annualRate, tenureMonths } = input;

  const i = annualRate / 400;
  const n = tenureMonths / 3;

  const maturityValue =
    monthlyDeposit *
    ((Math.pow(1 + i, n) - 1) / (1 - Math.pow(1 + i, -1 / 3)));

  const totalDeposited = monthlyDeposit * tenureMonths;
  const totalInterest = maturityValue - totalDeposited;

  const years = tenureMonths / 12;
  const effectiveYield =
    (Math.pow(maturityValue / totalDeposited, 1 / years) - 1) * 100;

  return {
    maturityValue,
    totalDeposited,
    totalInterest,
    effectiveYield,
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

export function copyRDSummary(input: RDInput, result: RDResult): string {

  return `
Recurring Deposit Summary

Monthly Deposit:
${formatCurrency(input.monthlyDeposit)}

Interest Rate:
${input.annualRate}%

Tenure:
${input.tenureMonths} Months

Maturity Value:
${formatCurrency(result.maturityValue)}

Total Deposited:
${formatCurrency(result.totalDeposited)}

Total Interest Earned:
${formatCurrency(result.totalInterest)}
`.trim();

}
