export interface MortgageRefinanceResult {
  oldPayment: number;
  newPayment: number;
  monthlySavings: number;
  breakEvenMonths: number | null;
  lifetimeInterestSavings: number;
}

function monthlyPayment(principal: number, annualRate: number, termMonths: number): number {
  const r = annualRate / 100 / 12;
  if (r === 0) return principal / termMonths;
  return (principal * r) / (1 - Math.pow(1 + r, -termMonths));
}

export function calculateMortgageRefinance(
  currentBalance: number,
  currentRate: number,
  currentTermRemainingMonths: number,
  newRate: number,
  newTermMonths: number,
  closingCosts: number
): MortgageRefinanceResult {
  const oldPayment = monthlyPayment(currentBalance, currentRate, currentTermRemainingMonths);
  const newPayment = monthlyPayment(currentBalance, newRate, newTermMonths);
  const monthlySavings = oldPayment - newPayment;

  const breakEvenMonths = monthlySavings > 0 ? Math.ceil(closingCosts / monthlySavings) : null;

  const totalOldInterest = oldPayment * currentTermRemainingMonths - currentBalance;
  const totalNewInterest = newPayment * newTermMonths - currentBalance + closingCosts;
  const lifetimeInterestSavings = totalOldInterest - totalNewInterest;

  return { oldPayment, newPayment, monthlySavings, breakEvenMonths, lifetimeInterestSavings };
}

export function validateMortgageRefinanceInputs(currentBalance: number, currentTermRemainingMonths: number, newTermMonths: number, lang: "en" | "es" = "en"): string | null {
  if (currentBalance <= 0) return lang === "es" ? "El saldo actual del préstamo debe ser mayor a cero." : "Current loan balance must be greater than zero.";
  if (currentTermRemainingMonths <= 0) return lang === "es" ? "El plazo restante debe ser mayor a cero." : "Remaining term must be greater than zero.";
  if (newTermMonths <= 0) return lang === "es" ? "El nuevo plazo del préstamo debe ser mayor a cero." : "New loan term must be greater than zero.";
  return null;
}