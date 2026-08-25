// src/utils/loan-amortization.ts

export interface LoanAmortizationInput {
  loanAmount: number;
  interestRate: number; // annual %
  termYears: number;
  extraMonthlyPayment: number;
}

export interface YearlyScheduleRow {
  year: number;
  principalPaid: number;
  interestPaid: number;
  endingBalance: number;
}

export interface LoanAmortizationResult {
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  payoffMonths: number;
  yearlySchedule: YearlyScheduleRow[];
}

export function validateLoanAmortizationInput(input: LoanAmortizationInput): string | null {
  const { loanAmount, interestRate, termYears, extraMonthlyPayment } = input;
  if (!loanAmount || Number.isNaN(loanAmount) || loanAmount <= 0) {
    return "Please enter a valid loan amount greater than 0.";
  }
  if (Number.isNaN(interestRate) || interestRate < 0) {
    return "Please enter a valid interest rate (0 or more).";
  }
  if (!termYears || Number.isNaN(termYears) || termYears <= 0) {
    return "Please enter a valid loan term greater than 0.";
  }
  if (Number.isNaN(extraMonthlyPayment) || extraMonthlyPayment < 0) {
    return "Please enter a valid extra payment amount (0 or more).";
  }
  return null;
}

export function calculateLoanAmortization(input: LoanAmortizationInput): LoanAmortizationResult {
  const { loanAmount, interestRate, termYears, extraMonthlyPayment } = input;

  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = termYears * 12;

  const monthlyPayment = monthlyRate === 0
    ? loanAmount / totalMonths
    : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

  let balance = loanAmount;
  let totalInterest = 0;
  let month = 0;
  const yearlySchedule: YearlyScheduleRow[] = [];
  let yearPrincipal = 0;
  let yearInterest = 0;

  while (balance > 0.01 && month < totalMonths + 1200) {
    month++;
    const interestPortion = balance * monthlyRate;
    let principalPortion = monthlyPayment + extraMonthlyPayment - interestPortion;

    if (principalPortion > balance) principalPortion = balance;

    balance -= principalPortion;
    totalInterest += interestPortion;
    yearPrincipal += principalPortion;
    yearInterest += interestPortion;

    if (month % 12 === 0 || balance <= 0.01) {
      yearlySchedule.push({
        year: Math.ceil(month / 12),
        principalPaid: yearPrincipal,
        interestPaid: yearInterest,
        endingBalance: Math.max(balance, 0),
      });
      yearPrincipal = 0;
      yearInterest = 0;
    }
  }

  const totalPayment = loanAmount + totalInterest;

  return { monthlyPayment, totalInterest, totalPayment, payoffMonths: month, yearlySchedule };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

export function copyLoanAmortizationSummary(input: LoanAmortizationInput, result: LoanAmortizationResult): string {
  const years = Math.floor(result.payoffMonths / 12);
  const months = result.payoffMonths % 12;

  return `
Loan Amortization Summary

Loan Amount:
${formatCurrency(input.loanAmount)}

Interest Rate:
${input.interestRate}%

Loan Term:
${input.termYears} years

Monthly Payment:
${formatCurrency(result.monthlyPayment)}

Total Interest Paid:
${formatCurrency(result.totalInterest)}

Total Payment:
${formatCurrency(result.totalPayment)}

Payoff Time:
${years} years${months > 0 ? `, ${months} months` : ""}
`.trim();
}