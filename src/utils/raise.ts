// src/utils/raise.ts
import { formatCurrency } from "./currency";

export interface RaiseInput {
  currentSalary: number;
  raisePercent: number;
}

export interface RaiseResult {
  raiseAmount: number;
  newSalary: number;
  monthlyIncrease: number;
}

export function validateRaiseInput(input: RaiseInput): string | null {
  const { currentSalary, raisePercent } = input;

  if (!currentSalary || Number.isNaN(currentSalary) || currentSalary <= 0) {
    return "Please enter a valid current salary greater than 0.";
  }
  if (raisePercent === undefined || Number.isNaN(raisePercent)) {
    return "Please enter a valid raise percentage.";
  }

  return null;
}

export function calculateRaise(input: RaiseInput): RaiseResult {
  const { currentSalary, raisePercent } = input;

  const raiseAmount = currentSalary * (raisePercent / 100);
  const newSalary = currentSalary + raiseAmount;
  const monthlyIncrease = raiseAmount / 12;

  return { raiseAmount, newSalary, monthlyIncrease };
}



export function copyRaiseSummary(input: RaiseInput, result: RaiseResult): string {
  return `
Raise Summary

Current Salary:
${formatCurrency(input.currentSalary)}

Raise:
${input.raisePercent}%

Raise Amount:
${formatCurrency(result.raiseAmount)}

New Salary:
${formatCurrency(result.newSalary)}

Monthly Increase:
${formatCurrency(result.monthlyIncrease)}
`.trim();
}