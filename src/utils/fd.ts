export interface FDInput {
  principal: number;
  annualRate: number;
  tenureYears: number;
  compoundingFrequency: number; // times/year, FDs are usually quarterly (4)
}

export interface FDResult {
  maturityValue: number;
  totalInterest: number;
  principalInvested: number;
  effectiveAnnualYield: number;
  estimatedTDS: number;
  netInterestAfterTDS: number;
}

const TDS_THRESHOLD = 40000; // ₹/year, simplified general (non-senior) threshold
const TDS_RATE = 0.10;

export function validateFDInput(input: FDInput): string | null {

  const { principal, annualRate, tenureYears, compoundingFrequency } = input;

  if (!principal || Number.isNaN(principal) || principal <= 0) {
    return "Please enter a deposit amount greater than 0.";
  }

  if (!annualRate || Number.isNaN(annualRate) || annualRate <= 0) {
    return "Please enter an interest rate greater than 0.";
  }

  if (!tenureYears || Number.isNaN(tenureYears) || tenureYears <= 0) {
    return "Please enter a tenure greater than 0.";
  }

  if (!compoundingFrequency || compoundingFrequency <= 0) {
    return "Please enter a valid compounding frequency.";
  }

  if (tenureYears > 20) {
    return "Please enter a realistic tenure (under 20 years).";
  }

  return null;
}

/**
 * A = P (1 + r/n)^(n*t) — same compounding formula banks use for FDs,
 * plus a simplified flat-rate TDS estimate on annualised interest.
 */
export function calculateFD(input: FDInput): FDResult {

  const { principal, annualRate, tenureYears, compoundingFrequency } = input;

  const r = annualRate / 100;
  const n = compoundingFrequency;

  const maturityValue = principal * Math.pow(1 + r / n, n * tenureYears);
  const totalInterest = maturityValue - principal;

  const effectiveAnnualYield = (Math.pow(1 + r / n, n) - 1) * 100;

  const annualisedInterest = totalInterest / tenureYears;

  const estimatedTDS =
    annualisedInterest > TDS_THRESHOLD ? totalInterest * TDS_RATE : 0;

  const netInterestAfterTDS = totalInterest - estimatedTDS;

  return {
    maturityValue,
    totalInterest,
    principalInvested: principal,
    effectiveAnnualYield,
    estimatedTDS,
    netInterestAfterTDS,
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

export function copyFDSummary(input: FDInput, result: FDResult): string {

  return `
Fixed Deposit Summary

Principal:
${formatCurrency(input.principal)}

Interest Rate:
${input.annualRate}%

Tenure:
${input.tenureYears} Years

Maturity Value:
${formatCurrency(result.maturityValue)}

Total Interest Earned:
${formatCurrency(result.totalInterest)}

Estimated TDS:
${formatCurrency(result.estimatedTDS)}

Net Interest After TDS:
${formatCurrency(result.netInterestAfterTDS)}
`.trim();

}
