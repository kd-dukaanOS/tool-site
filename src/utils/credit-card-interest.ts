export interface CreditCardInterestResult {
  monthsToPayoff: number;
  totalInterest: number;
  totalRepayment: number;
  payoffPossible: boolean;
}

export function calculateCreditCardInterest(
  balance: number,
  apr: number,
  monthlyPayment: number
): CreditCardInterestResult {
  const monthlyRate = apr / 100 / 12;
  let remaining = balance;
  let totalInterest = 0;
  let months = 0;
  const MAX_MONTHS = 1200;

  if (monthlyPayment <= remaining * monthlyRate) {
    return { monthsToPayoff: 0, totalInterest: 0, totalRepayment: 0, payoffPossible: false };
  }

  while (remaining > 0.01 && months < MAX_MONTHS) {
    const interest = remaining * monthlyRate;
    let principal = monthlyPayment - interest;

    if (principal >= remaining) {
      totalInterest += interest;
      remaining = 0;
    } else {
      remaining -= principal;
      totalInterest += interest;
    }
    months++;
  }

  const totalRepayment = balance + totalInterest;

  return { monthsToPayoff: months, totalInterest, totalRepayment, payoffPossible: true };
}

export function validateCreditCardInterestInputs(balance: number, monthlyPayment: number, lang: "en" | "es" = "en"): string | null {
  if (lang === "es") {
    if (balance <= 0) return "El saldo debe ser mayor que cero.";
    if (monthlyPayment <= 0) return "El pago mensual debe ser mayor que cero.";
    return null;
  }
  if (balance <= 0) return "Balance must be greater than zero.";
  if (monthlyPayment <= 0) return "Monthly payment must be greater than zero.";
  return null;
}