// src/utils/bonus.ts
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

export function validateBonusInput(input: BonusInput): string | null {
  const { annualSalary, bonusPercent, taxRate } = input;

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

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function copyBonusSummary(input: BonusInput, result: BonusResult): string {
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