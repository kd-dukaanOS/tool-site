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

export function validateRaiseInput(input: RaiseInput, lang: "en" | "es" = "en"): string | null {
  const { currentSalary, raisePercent } = input;
  const msg = lang === "es" ? {
    salary: "Por favor ingresa un salario actual válido mayor a 0.",
    percent: "Por favor ingresa un porcentaje de aumento válido.",
  } : {
    salary: "Please enter a valid current salary greater than 0.",
    percent: "Please enter a valid raise percentage.",
  };

  if (!currentSalary || Number.isNaN(currentSalary) || currentSalary <= 0) {
    return msg.salary;
  }
  if (raisePercent === undefined || Number.isNaN(raisePercent)) {
    return msg.percent;
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



export function copyRaiseSummary(input: RaiseInput, result: RaiseResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de Aumento Salarial

Salario Actual:
${formatCurrency(input.currentSalary)}

Aumento:
${input.raisePercent}%

Monto del Aumento:
${formatCurrency(result.raiseAmount)}

Nuevo Salario:
${formatCurrency(result.newSalary)}

Incremento Mensual:
${formatCurrency(result.monthlyIncrease)}
`.trim();
  }
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