export interface SimpleInterestInput {
  principal: number;
  annualRate: number;
  years: number;
}

export interface SimpleInterestResult {
  totalInterest: number;
  totalAmount: number;
  principalInvested: number;
  monthlyInterest: number;
  dailyInterest: number;
}

export function validateSimpleInterestInput(
  input: SimpleInterestInput
): string | null {

  const { principal, annualRate, years } = input;

  if (!principal || Number.isNaN(principal) || principal <= 0) {
    return "Please enter a principal amount greater than 0.";
  }

  if (!annualRate || Number.isNaN(annualRate) || annualRate <= 0) {
    return "Please enter an interest rate greater than 0.";
  }

  if (!years || Number.isNaN(years) || years <= 0) {
    return "Please enter a time period greater than 0.";
  }

  if (years > 100) {
    return "Please enter a realistic time period (under 100 years).";
  }

  if (annualRate > 100) {
    return "Please enter a realistic interest rate (under 100%).";
  }

  return null;
}

/**
 * SI = (P * r * t) / 100
 */
export function calculateSimpleInterest(
  input: SimpleInterestInput
): SimpleInterestResult {

  const { principal, annualRate, years } = input;

  const totalInterest = (principal * annualRate * years) / 100;
  const totalAmount = principal + totalInterest;

  return {
    totalInterest,
    totalAmount,
    principalInvested: principal,
    monthlyInterest: totalInterest / (years * 12),
    dailyInterest: totalInterest / (years * 365),
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function copySimpleInterestSummary(
  input: SimpleInterestInput,
  result: SimpleInterestResult
): string {

  return `
Simple Interest Summary

Principal Amount:
${formatCurrency(input.principal)}

Annual Interest Rate:
${input.annualRate}%

Time Period:
${input.years} Years

Total Interest:
${formatCurrency(result.totalInterest)}

Total Amount:
${formatCurrency(result.totalAmount)}
`.trim();

}
