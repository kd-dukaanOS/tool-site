export interface PayoffResult {
  months: number;
  totalInterest: number;
  totalPaid: number;
}

export interface PayoffComparison {
  fixed: PayoffResult;
  minimumOnly: PayoffResult;
  interestSaved: number;
  monthsSaved: number;
}

const MAX_MONTHS = 600;

export function calculatePayoffWithFixedPayment(
  balance: number,
  aprPercent: number,
  monthlyPayment: number
): PayoffResult {
  const r = aprPercent / 100 / 12;
  let bal = balance;
  let months = 0;
  let totalInterest = 0;

  while (bal > 0.01 && months < MAX_MONTHS) {
    const interest = bal * r;
    let principal = monthlyPayment - interest;

    if (principal <= 0) {
      // payment doesn't cover interest — never pays off
      return { months: MAX_MONTHS, totalInterest: Infinity, totalPaid: Infinity };
    }

    if (principal > bal) principal = bal;

    bal -= principal;
    totalInterest += interest;
    months++;
  }

  return { months, totalInterest, totalPaid: balance + totalInterest };
}

export function calculatePayoffWithMinPayment(
  balance: number,
  aprPercent: number,
  minPaymentPercent = 2,
  minPaymentFloor = 25
): PayoffResult {
  const r = aprPercent / 100 / 12;
  let bal = balance;
  let months = 0;
  let totalInterest = 0;

  while (bal > 0.01 && months < MAX_MONTHS) {
    const interest = bal * r;
    const minPayment = Math.max(bal * (minPaymentPercent / 100), minPaymentFloor, interest + 1);
    let principal = minPayment - interest;

    if (principal > bal) principal = bal;

    bal -= principal;
    totalInterest += interest;
    months++;
  }

  return { months, totalInterest, totalPaid: balance + totalInterest };
}

export function comparePayoffScenarios(
  balance: number,
  aprPercent: number,
  monthlyPayment: number,
  minPaymentPercent = 2
): PayoffComparison {
  const fixed = calculatePayoffWithFixedPayment(balance, aprPercent, monthlyPayment);
  const minimumOnly = calculatePayoffWithMinPayment(balance, aprPercent, minPaymentPercent);

  return {
    fixed,
    minimumOnly,
    interestSaved: minimumOnly.totalInterest - fixed.totalInterest,
    monthsSaved: minimumOnly.months - fixed.months,
  };
}

export function payoffDateFromMonths(months: number, startDate = new Date()): Date {
  const d = new Date(startDate);
  d.setMonth(d.getMonth() + months);
  return d;
}

export function formatMonthsAsYearsMonths(months: number): string {
  if (months >= MAX_MONTHS) return "50+ years";
  const years = Math.floor(months / 12);
  const rem = months % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years !== 1 ? "s" : ""}`);
  if (rem) parts.push(`${rem} mo${rem !== 1 ? "s" : ""}`);
  return parts.join(" ") || "0 mos";
}

export function validateCreditCardInputs(
  balance: number,
  apr: number,
  monthlyPayment: number
): string | null {
  if (!balance || balance <= 0) return "Please enter a valid card balance.";
  if (apr < 0) return "APR cannot be negative.";
  if (!monthlyPayment || monthlyPayment <= 0) return "Please enter a valid monthly payment.";
  return null;
}