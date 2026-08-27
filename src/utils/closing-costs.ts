export interface ClosingCostsResult {
  totalClosingCosts: number;
  lenderFees: number;
  titleFees: number;
  taxesAndRecording: number;
  prepaidsAndEscrow: number;
  discountPoints: number;
  totalCashNeeded: number;
  closingCostPercentOfPrice: number;
}

export function calculateClosingCosts(
  homePrice: number,
  loanAmount: number,
  originationRate: number,
  discountPointsCount: number,
  titleInsuranceRate: number,
  recordingFees: number,
  transferTaxRate: number,
  monthsPrepaidInsurance: number,
  annualInsurance: number,
  monthsPrepaidTax: number,
  annualPropertyTax: number,
  downPayment: number
): ClosingCostsResult {
  const lenderFees = loanAmount * (originationRate / 100);
  const discountPoints = loanAmount * (discountPointsCount / 100);
  const titleFees = homePrice * (titleInsuranceRate / 100);
  const transferTax = homePrice * (transferTaxRate / 100);
  const taxesAndRecording = transferTax + recordingFees;

  const prepaidInsurance = (annualInsurance / 12) * monthsPrepaidInsurance;
  const prepaidTax = (annualPropertyTax / 12) * monthsPrepaidTax;
  const prepaidsAndEscrow = prepaidInsurance + prepaidTax;

  const totalClosingCosts = lenderFees + discountPoints + titleFees + taxesAndRecording + prepaidsAndEscrow;
  const totalCashNeeded = totalClosingCosts + downPayment;
  const closingCostPercentOfPrice = (totalClosingCosts / homePrice) * 100;

  return {
    totalClosingCosts,
    lenderFees,
    titleFees,
    taxesAndRecording,
    prepaidsAndEscrow,
    discountPoints,
    totalCashNeeded,
    closingCostPercentOfPrice,
  };
}

export function validateClosingCostsInputs(homePrice: number, loanAmount: number): string | null {
  if (homePrice <= 0) return "Home price must be greater than zero.";
  if (loanAmount < 0) return "Loan amount cannot be negative.";
  if (loanAmount > homePrice) return "Loan amount cannot exceed home price.";
  return null;
}