export interface MortgageInput {
  homePrice: number;
  downPayment: number;
  loanYears: number;
  annualRate: number;
  propertyTaxAnnual: number; // % of home price
  homeInsuranceAnnual: number; // ₹/year flat
  pmiAnnual: number; // % of loan amount
  hoaMonthly: number; // ₹/month flat
}

export interface MortgageResult {
  loanAmount: number;
  monthlyPrincipalInterest: number;
  monthlyPropertyTax: number;
  monthlyHomeInsurance: number;
  monthlyPMI: number;
  monthlyHOA: number;
  totalMonthlyPayment: number;
  totalInterestPaid: number;
  totalPaidOverLoan: number;
  loanToValuePercent: number;
}

export function validateMortgageInput(input: MortgageInput): string | null {

  const { homePrice, downPayment, loanYears, annualRate } = input;

  if (!homePrice || Number.isNaN(homePrice) || homePrice <= 0) {
    return "Please enter a valid home price.";
  }

  if (downPayment < 0 || downPayment >= homePrice) {
    return "Down payment must be less than the home price.";
  }

  if (!loanYears || Number.isNaN(loanYears) || loanYears <= 0) {
    return "Please enter a valid loan term.";
  }

  if (!annualRate || Number.isNaN(annualRate) || annualRate <= 0) {
    return "Please enter a valid interest rate.";
  }

  return null;
}

/**
 * Standard amortizing loan payment formula:
 * M = L [r(1+r)^n] / [(1+r)^n − 1]
 */
export function calculateMortgage(input: MortgageInput): MortgageResult {

  const {
    homePrice,
    downPayment,
    loanYears,
    annualRate,
    propertyTaxAnnual,
    homeInsuranceAnnual,
    pmiAnnual,
    hoaMonthly,
  } = input;

  const loanAmount = homePrice - downPayment;

  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = loanYears * 12;

  const monthlyPrincipalInterest =
    monthlyRate === 0
      ? loanAmount / totalMonths
      : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const monthlyPropertyTax = (homePrice * (propertyTaxAnnual / 100)) / 12;
  const monthlyHomeInsurance = homeInsuranceAnnual / 12;

  const loanToValuePercent = (loanAmount / homePrice) * 100;

  // PMI typically applies only when LTV is above 80%
  const monthlyPMI =
    loanToValuePercent > 80 ? (loanAmount * (pmiAnnual / 100)) / 12 : 0;

  const totalMonthlyPayment =
    monthlyPrincipalInterest +
    monthlyPropertyTax +
    monthlyHomeInsurance +
    monthlyPMI +
    hoaMonthly;

  const totalPaidOverLoan = monthlyPrincipalInterest * totalMonths;
  const totalInterestPaid = totalPaidOverLoan - loanAmount;

  return {
    loanAmount,
    monthlyPrincipalInterest,
    monthlyPropertyTax,
    monthlyHomeInsurance,
    monthlyPMI,
    monthlyHOA: hoaMonthly,
    totalMonthlyPayment,
    totalInterestPaid,
    totalPaidOverLoan,
    loanToValuePercent,
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function copyMortgageSummary(input: MortgageInput, result: MortgageResult): string {

  return `
Mortgage Summary

Home Price:
${formatCurrency(input.homePrice)}

Down Payment:
${formatCurrency(input.downPayment)}

Loan Amount:
${formatCurrency(result.loanAmount)}

Monthly Principal + Interest:
${formatCurrency(result.monthlyPrincipalInterest)}

Total Monthly Payment:
${formatCurrency(result.totalMonthlyPayment)}

Total Interest Paid:
${formatCurrency(result.totalInterestPaid)}
`.trim();

}
