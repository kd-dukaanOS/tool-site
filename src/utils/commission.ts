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

export function validateCommissionInput(i: CommissionInput, lang: "en" | "es" = "en"): string | null {
  if (lang === "es") {
    if (i.salesAmount <= 0) return "Ingresa un monto de ventas válido.";
    if (i.commissionRate <= 0 || i.commissionRate > 100) return "Ingresa una tasa de comisión válida.";
    if (i.baseSalary !== undefined && i.baseSalary < 0) return "Ingresa un salario base válido.";
    return null;
  }
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

export function copyCommissionSummary(i: CommissionInput, r: CommissionResult, currency: CurrencyCode = "INR", lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de Comisión

Monto de Ventas: ${formatCurrency(i.salesAmount, currency)}
Tasa de Comisión: ${i.commissionRate}%
${i.baseSalary ? `Salario Base: ${formatCurrency(i.baseSalary, currency)}` : ""}

Comisión Ganada: ${formatCurrency(r.commissionEarned, currency)}
Ganancias Totales: ${formatCurrency(r.totalEarnings, currency)}
Tasa Efectiva: ${r.effectiveRate}%
`.trim();
  }
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