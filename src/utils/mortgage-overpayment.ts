export interface MortgageOverpaymentResult {
  standardPayment: number;
  newPayoffMonths: number;
  monthsSaved: number;
  interestSaved: number;
  totalInterestNew: number;
}

function monthlyPayment(principal: number, annualRate: number, termMonths: number): number {
  const r = annualRate / 100 / 12;
  if (r === 0) return principal / termMonths;
  return (principal * r) / (1 - Math.pow(1 + r, -termMonths));
}

export function calculateMortgageOverpayment(
  currentBalance: number,
  interestRate: number,
  remainingTermMonths: number,
  extraMonthlyPayment: number
): MortgageOverpaymentResult {
  const standardPayment = monthlyPayment(currentBalance, interestRate, remainingTermMonths);
  const monthlyRate = interestRate / 100 / 12;
  const totalPayment = standardPayment + extraMonthlyPayment;

  let balance = currentBalance;
  let months = 0;
  let totalInterestNew = 0;
  const MAX_MONTHS = 1200;

  while (balance > 0.01 && months < MAX_MONTHS) {
    const interest = balance * monthlyRate;
    let principal = totalPayment - interest;
    if (principal >= balance) {
      totalInterestNew += interest;
      balance = 0;
    } else {
      balance -= principal;
      totalInterestNew += interest;
    }
    months++;
  }

  const totalInterestOriginal = standardPayment * remainingTermMonths - currentBalance;
  const interestSaved = totalInterestOriginal - totalInterestNew;
  const monthsSaved = remainingTermMonths - months;

  return { standardPayment, newPayoffMonths: months, monthsSaved, interestSaved, totalInterestNew };
}

export function validateMortgageOverpaymentInputs(currentBalance: number, remainingTermMonths: number, lang: "en" | "es" = "en"): string | null {
  if (currentBalance <= 0) return lang === "es" ? "El saldo actual del préstamo debe ser mayor a cero." : "Current loan balance must be greater than zero.";
  if (remainingTermMonths <= 0) return lang === "es" ? "El plazo restante debe ser mayor a cero." : "Remaining term must be greater than zero.";
  return null;
}