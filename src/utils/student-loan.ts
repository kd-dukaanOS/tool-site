export interface StudentLoanResult {
  monthlyPayment: number;
  totalPaid: number;
  totalInterest: number;
  payoffMonths: number;
}

export function calculateStudentLoan(
  loanAmount: number,
  interestRate: number,
  loanTermYears: number,
  extraMonthlyPayment: number
): StudentLoanResult {
  const monthlyRate = interestRate / 100 / 12;
  const termMonths = loanTermYears * 12;

  const basePayment =
    monthlyRate === 0
      ? loanAmount / termMonths
      : (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths));

  const monthlyPayment = basePayment + extraMonthlyPayment;

  let balance = loanAmount;
  let totalPaid = 0;
  let months = 0;

  while (balance > 0 && months < 1200) {
    const interest = balance * monthlyRate;
    const principal = Math.min(monthlyPayment - interest, balance);
    balance = Math.max(balance - principal, 0);
    totalPaid += principal + interest;
    months++;
  }

  return {
    monthlyPayment: basePayment,
    totalPaid,
    totalInterest: totalPaid - loanAmount,
    payoffMonths: months,
  };
}

export function validateStudentLoanInputs(loanAmount: number, loanTermYears: number, lang: "en" | "es" = "en"): string | null {
  if (loanAmount <= 0) return lang === "es" ? "El monto del préstamo debe ser mayor a cero." : "Loan amount must be greater than zero.";
  if (loanTermYears <= 0) return lang === "es" ? "El plazo del préstamo debe ser mayor a cero." : "Loan term must be greater than zero.";
  return null;
}