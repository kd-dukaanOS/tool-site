// src/utils/hourly-to-salary.ts
import { formatCurrency } from "./currency";

export interface HourlyToSalaryInput {
  hourlyRate: number;
  hoursPerWeek: number;
  weeksPerYear: number;
}

export interface HourlyToSalaryResult {
  annualSalary: number;
  monthlySalary: number;
  weeklySalary: number;
}

export function validateHourlyToSalaryInput(input: HourlyToSalaryInput, lang: "en" | "es" = "en"): string | null {
  const { hourlyRate, hoursPerWeek, weeksPerYear } = input;
  const msg = lang === "es" ? {
    rate:"Por favor ingresa una tarifa por hora válida mayor a 0.", hours:"Por favor ingresa horas por semana válidas (1–168).", weeks:"Por favor ingresa semanas por año válidas (1–52).",
  } : {
    rate:"Please enter a valid hourly rate greater than 0.", hours:"Please enter valid hours per week (1–168).", weeks:"Please enter valid weeks per year (1–52).",
  };

  if (!hourlyRate || Number.isNaN(hourlyRate) || hourlyRate <= 0) return msg.rate;
  if (!hoursPerWeek || Number.isNaN(hoursPerWeek) || hoursPerWeek <= 0 || hoursPerWeek > 168) return msg.hours;
  if (!weeksPerYear || Number.isNaN(weeksPerYear) || weeksPerYear <= 0 || weeksPerYear > 52) return msg.weeks;

  return null;
}

export function calculateHourlyToSalary(input: HourlyToSalaryInput): HourlyToSalaryResult {
  const { hourlyRate, hoursPerWeek, weeksPerYear } = input;

  const weeklySalary = hourlyRate * hoursPerWeek;
  const annualSalary = weeklySalary * weeksPerYear;
  const monthlySalary = annualSalary / 12;

  return { annualSalary, monthlySalary, weeklySalary };
}



export function copyHourlyToSalarySummary(input: HourlyToSalaryInput, result: HourlyToSalaryResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de Salario por Hora

Tarifa por Hora:
${formatCurrency(input.hourlyRate)}

Horas por Semana:
${input.hoursPerWeek}

Semanas por Año:
${input.weeksPerYear}

Salario Semanal:
${formatCurrency(result.weeklySalary)}

Salario Mensual:
${formatCurrency(result.monthlySalary)}

Salario Anual:
${formatCurrency(result.annualSalary)}
`.trim();
  }
  return `
Hourly to Salary Summary

Hourly Rate:
${formatCurrency(input.hourlyRate)}

Hours per Week:
${input.hoursPerWeek}

Weeks per Year:
${input.weeksPerYear}

Weekly Salary:
${formatCurrency(result.weeklySalary)}

Monthly Salary:
${formatCurrency(result.monthlySalary)}

Annual Salary:
${formatCurrency(result.annualSalary)}
`.trim();
}