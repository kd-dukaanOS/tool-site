export interface AutoLoanResult {
  loanAmount: number;
  monthlyPayment: number;
  totalInterest: number;
  totalCost: number;
  salesTaxAmount: number;
}

export function calculateAutoLoan(
  vehiclePrice: number,
  downPayment: number,
  tradeInValue: number,
  salesTaxRate: number,
  apr: number,
  termMonths: number
): AutoLoanResult {
  const taxableAmount = Math.max(vehiclePrice - tradeInValue, 0);
  const salesTaxAmount = taxableAmount * (salesTaxRate / 100);
  const loanAmount = Math.max(vehiclePrice - downPayment - tradeInValue + salesTaxAmount, 0);

  const monthlyRate = apr / 100 / 12;
  const monthlyPayment =
    monthlyRate === 0
      ? loanAmount / termMonths
      : (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths));

  const totalCost = monthlyPayment * termMonths;
  const totalInterest = totalCost - loanAmount;

  return { loanAmount, monthlyPayment, totalInterest, totalCost, salesTaxAmount };
}

export function validateAutoLoanInputs(vehiclePrice: number, termMonths: number, lang: "en" | "es" = "en"): string | null {
  const msg = lang === "es"
    ? { price: "El precio del vehículo debe ser mayor que cero.", term: "El plazo del préstamo debe ser mayor que cero." }
    : { price: "Vehicle price must be greater than zero.", term: "Loan term must be greater than zero." };
  if (vehiclePrice <= 0) return msg.price;
  if (termMonths <= 0) return msg.term;
  return null;
}