export interface CommissionInput {
  salesAmount: number;
  commissionRate: number;
  baseSalary?: number;
}

export interface CommissionResult {
  commissionEarned: number;
  totalEarnings: number;
  effectiveRate: number;
}

export function validateCommissionInput(i: CommissionInput): string | null {
  if (i.salesAmount <= 0) return "Enter a valid sales amount.";
  if (i.commissionRate <= 0 || i.commissionRate > 100) return "Enter a valid commission rate.";
  if (i.baseSalary !== undefined && i.baseSalary < 0) return "Enter a valid base salary.";
  return null;
}

export function calculateCommission(i: CommissionInput): CommissionResult {
  const commissionEarned = (i.salesAmount * i.commissionRate) / 100;
  const baseSalary = i.baseSalary ?? 0;
  const totalEarnings = commissionEarned + baseSalary;
  const effectiveRate = (totalEarnings / i.salesAmount) * 100;

  return {
    commissionEarned: Math.round(commissionEarned),
    totalEarnings: Math.round(totalEarnings),
    effectiveRate: Math.round(effectiveRate * 100) / 100,
  };
}

import { formatCurrency, type CurrencyCode } from "./currencyselector";

export function copyCommissionSummary(i: CommissionInput, r: CommissionResult, currency: CurrencyCode = "INR"): string {
  return `
Commission Summary

Sales Amount: ${formatCurrency(i.salesAmount, currency)}
Commission Rate: ${i.commissionRate}%
${i.baseSalary ? `Base Salary: ${formatCurrency(i.baseSalary, currency)}` : ""}

Commission Earned: ${formatCurrency(r.commissionEarned, currency)}
Total Earnings: ${formatCurrency(r.totalEarnings, currency)}
Effective Rate: ${r.effectiveRate}%
`.trim();
}