/* ==========================================================
   ToolSite Loan Amortization Utilities
   Used by: Loan Amortization Calculator
========================================================== */

export interface AmortizationRow {
  month: number;
  payment: number;
  principalPaid: number;
  interestPaid: number;
  balance: number;
}

export interface YearlySummary {
  year: number;
  principalPaid: number;
  interestPaid: number;
  endingBalance: number;
}

export interface LoanResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  payoffMonths: number;
  schedule: AmortizationRow[];
  yearly: YearlySummary[];
}

export function calculateMonthlyPayment(
  principal: number,
  annualRatePercent: number,
  years: number
): number {
  const r = annualRatePercent / 100 / 12;
  const n = years * 12;

  if (r === 0) return principal / n;

  const factor = Math.pow(1 + r, n);
  return (principal * r * factor) / (factor - 1);
}

export function generateAmortizationSchedule(
  principal: number,
  annualRatePercent: number,
  years: number,
  extraMonthlyPayment = 0
): LoanResult {
  const r = annualRatePercent / 100 / 12;
  const basePayment = calculateMonthlyPayment(principal, annualRatePercent, years);
  const payment = basePayment + extraMonthlyPayment;

  let balance = principal;
  let month = 0;
  let totalInterest = 0;
  let totalPayment = 0;

  const schedule: AmortizationRow[] = [];
  const maxMonths = years * 12 * 2;

  while (balance > 0.01 && month < maxMonths) {
    month++;

    const interestPaid = balance * r;
    let principalPaid = payment - interestPaid;

    if (principalPaid > balance) {
      principalPaid = balance;
    }

    balance -= principalPaid;
    totalInterest += interestPaid;
    totalPayment += principalPaid + interestPaid;

    schedule.push({
      month,
      payment: principalPaid + interestPaid,
      principalPaid,
      interestPaid,
      balance: Math.max(balance, 0),
    });
  }

  return {
    monthlyPayment: payment,
    totalPayment,
    totalInterest,
    payoffMonths: month,
    schedule,
    yearly: yearlyAmortizationSummary(schedule),
  };
}

export function yearlyAmortizationSummary(schedule: AmortizationRow[]): YearlySummary[] {
  const years: YearlySummary[] = [];

  for (let i = 0; i < schedule.length; i += 12) {
    const chunk = schedule.slice(i, i + 12);
    const principalPaid = chunk.reduce((sum, r) => sum + r.principalPaid, 0);
    const interestPaid = chunk.reduce((sum, r) => sum + r.interestPaid, 0);
    const endingBalance = chunk[chunk.length - 1].balance;

    years.push({
      year: years.length + 1,
      principalPaid,
      interestPaid,
      endingBalance,
    });
  }

  return years;
}

export function payoffDate(payoffMonths: number, startDate = new Date()): Date {
  const d = new Date(startDate);
  d.setMonth(d.getMonth() + payoffMonths);
  return d;
}

export function formatPayoffDate(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function interestSavings(
  principal: number,
  annualRatePercent: number,
  years: number,
  extraMonthlyPayment: number
): { interestSaved: number; monthsSaved: number } {
  const base = generateAmortizationSchedule(principal, annualRatePercent, years, 0);
  const withExtra = generateAmortizationSchedule(principal, annualRatePercent, years, extraMonthlyPayment);

  return {
    interestSaved: base.totalInterest - withExtra.totalInterest,
    monthsSaved: base.payoffMonths - withExtra.payoffMonths,
  };
}

export function validateLoanInputs(
  principal: number,
  annualRatePercent: number,
  years: number
): string | null {
  if (!principal || principal <= 0) return "Please enter a valid loan amount.";
  if (annualRatePercent < 0) return "Interest rate cannot be negative.";
  if (!years || years <= 0) return "Please enter a valid loan term.";
  return null;
}
