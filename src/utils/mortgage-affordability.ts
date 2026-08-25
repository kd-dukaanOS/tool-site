export interface AffordabilityResult {
  maxHomePrice: number;
  maxLoanAmount: number;
  maxMonthlyPayment: number; // total housing budget: P&I + taxes/insurance/HOA estimate
  maxPrincipalInterest: number;
  frontEndRatio: number; // % of gross income going to housing
  backEndRatio: number; // % of gross income going to housing + all debts
  limitingFactor: "front-end" | "back-end";
}

// Standard lender guideline: housing payment ≤ 28% of gross income (front-end),
// AND total debt payments ≤ 36% of gross income (back-end). Whichever is
// stricter for this person actually caps what they can afford.
export function calculateMortgageAffordability(
  annualIncome: number,
  monthlyDebts: number,
  downPayment: number,
  annualRatePercent: number,
  loanYears: number,
  monthlyTaxesInsuranceHOA: number = 0,
  frontEndPct: number = 28,
  backEndPct: number = 36
): AffordabilityResult {
  const grossMonthlyIncome = annualIncome / 12;

  const maxFrontEndPayment = grossMonthlyIncome * (frontEndPct / 100);
  const maxBackEndPayment = grossMonthlyIncome * (backEndPct / 100) - monthlyDebts;

  const maxHousingPayment = Math.max(0, Math.min(maxFrontEndPayment, maxBackEndPayment));
  const limitingFactor: "front-end" | "back-end" =
    maxFrontEndPayment <= maxBackEndPayment ? "front-end" : "back-end";

  const maxPrincipalInterest = Math.max(0, maxHousingPayment - monthlyTaxesInsuranceHOA);

  const monthlyRate = annualRatePercent / 100 / 12;
  const numPayments = loanYears * 12;

  let maxLoanAmount = 0;
  if (numPayments > 0) {
    if (monthlyRate === 0) {
      maxLoanAmount = maxPrincipalInterest * numPayments;
    } else {
      const factor = Math.pow(1 + monthlyRate, numPayments);
      maxLoanAmount = (maxPrincipalInterest * (factor - 1)) / (monthlyRate * factor);
    }
  }

  const maxHomePrice = maxLoanAmount + downPayment;

  const frontEndRatio = grossMonthlyIncome > 0 ? (maxHousingPayment / grossMonthlyIncome) * 100 : 0;
  const backEndRatio =
    grossMonthlyIncome > 0 ? ((maxHousingPayment + monthlyDebts) / grossMonthlyIncome) * 100 : 0;

  return {
    maxHomePrice,
    maxLoanAmount,
    maxMonthlyPayment: maxHousingPayment,
    maxPrincipalInterest,
    frontEndRatio,
    backEndRatio,
    limitingFactor,
  };
}

export function validateAffordabilityInputs(
  annualIncome: number,
  monthlyDebts: number,
  downPayment: number,
  annualRatePercent: number,
  loanYears: number
): string | null {
  if ([annualIncome, monthlyDebts, downPayment, annualRatePercent, loanYears].some(Number.isNaN)) {
    return "Please fill in all required fields with valid numbers.";
  }
  if (annualIncome <= 0) return "Annual income must be greater than zero.";
  if (monthlyDebts < 0) return "Monthly debts cannot be negative.";
  if (downPayment < 0) return "Down payment cannot be negative.";
  if (annualRatePercent < 0) return "Interest rate cannot be negative.";
  if (loanYears <= 0) return "Loan term must be greater than zero.";
  if (annualIncome > 1000000000) return "Please enter a realistic income.";
  return null;
}