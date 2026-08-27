export interface DownPaymentResult {
  downPayment: number;
  loanAmount: number;
  closingCosts: number;
  cashNeeded: number;
  pmiRequired: boolean;
  monthlyPMI: number;
  monthlyPI: number;
  monthlyTax: number;
  monthlyInsurance: number;
  totalMonthlyPayment: number;
}

function monthlyPayment(principal: number, annualRate: number, termMonths: number): number {
  const r = annualRate / 100 / 12;
  if (r === 0) return principal / termMonths;
  return (principal * r) / (1 - Math.pow(1 + r, -termMonths));
}

export function calculateDownPayment(
  homePrice: number,
  downPaymentPercent: number,
  mortgageRate: number,
  loanTermYears: number,
  propertyTaxRate: number,
  annualInsurance: number,
  closingCostPercent: number,
  pmiRate: number
): DownPaymentResult {
  const downPayment = homePrice * (downPaymentPercent / 100);
  const loanAmount = homePrice - downPayment;
  const closingCosts = homePrice * (closingCostPercent / 100);
  const cashNeeded = downPayment + closingCosts;

  const pmiRequired = downPaymentPercent < 20;
  const monthlyPMI = pmiRequired ? (loanAmount * (pmiRate / 100)) / 12 : 0;

  const monthlyPI = monthlyPayment(loanAmount, mortgageRate, loanTermYears * 12);
  const monthlyTax = (homePrice * (propertyTaxRate / 100)) / 12;
  const monthlyInsurance = annualInsurance / 12;

  const totalMonthlyPayment = monthlyPI + monthlyTax + monthlyInsurance + monthlyPMI;

  return {
    downPayment,
    loanAmount,
    closingCosts,
    cashNeeded,
    pmiRequired,
    monthlyPMI,
    monthlyPI,
    monthlyTax,
    monthlyInsurance,
    totalMonthlyPayment,
  };
}

export function validateDownPaymentInputs(homePrice: number, downPaymentPercent: number): string | null {
  if (homePrice <= 0) return "Home price must be greater than zero.";
  if (downPaymentPercent < 0 || downPaymentPercent > 100) return "Down payment percentage must be between 0 and 100.";
  return null;
}