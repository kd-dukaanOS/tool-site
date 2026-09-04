// src/utils/bonus.ts
import { formatCurrency } from "./currency";

export interface BonusInput {
  annualSalary: number;
  bonusPercent: number;
  taxRate: number;
}

export interface BonusResult {
  bonusAmount: number;
  taxOnBonus: number;
  netBonus: number;
  newTotalCompensation: number;
}

export function validateBonusInput(input: BonusInput, lang: "en" | "es" = "en"): string | null {
  const { annualSalary, bonusPercent, taxRate } = input;

  if (lang === "es") {
    if (!annualSalary || Number.isNaN(annualSalary) || annualSalary <= 0) {
      return "Por favor ingresa un salario anual válido mayor que 0.";
    }
    if (bonusPercent === undefined || Number.isNaN(bonusPercent) || bonusPercent < 0) {
      return "Por favor ingresa un porcentaje de bono válido (0 o más).";
    }
    if (taxRate === undefined || Number.isNaN(taxRate) || taxRate < 0 || taxRate > 100) {
      return "Por favor ingresa una tasa de impuesto válida (0–100%).";
    }
    return null;
  }

  if (!annualSalary || Number.isNaN(annualSalary) || annualSalary <= 0) {
    return "Please enter a valid annual salary greater than 0.";
  }
  if (bonusPercent === undefined || Number.isNaN(bonusPercent) || bonusPercent < 0) {
    return "Please enter a valid bonus percentage (0 or more).";
  }
  if (taxRate === undefined || Number.isNaN(taxRate) || taxRate < 0 || taxRate > 100) {
    return "Please enter a valid tax rate (0–100%).";
  }

  return null;
}

export function calculateBonus(input: BonusInput): BonusResult {
  const { annualSalary, bonusPercent, taxRate } = input;

  const bonusAmount = annualSalary * (bonusPercent / 100);
  const taxOnBonus = bonusAmount * (taxRate / 100);
  const netBonus = bonusAmount - taxOnBonus;
  const newTotalCompensation = annualSalary + bonusAmount;

  return { bonusAmount, taxOnBonus, netBonus, newTotalCompensation };
}



export function copyBonusSummary(input: BonusInput, result: BonusResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de Bono

Salario Anual:
${formatCurrency(input.annualSalary)}

Bono:
${input.bonusPercent}%

Bono (Bruto):
${formatCurrency(result.bonusAmount)}

Impuesto sobre el Bono:
${formatCurrency(result.taxOnBonus)}

Bono Neto (a Recibir):
${formatCurrency(result.netBonus)}

Compensación Total:
${formatCurrency(result.newTotalCompensation)}
`.trim();
  }
  return `
Bonus Summary

Annual Salary:
${formatCurrency(input.annualSalary)}

Bonus:
${input.bonusPercent}%

Bonus Amount (Gross):
${formatCurrency(result.bonusAmount)}

Tax on Bonus:
${formatCurrency(result.taxOnBonus)}

Net Bonus (Take-Home):
${formatCurrency(result.netBonus)}

Total Compensation:
${formatCurrency(result.newTotalCompensation)}
`.trim();
}