// src/utils/salary-to-hourly.ts
import { formatCurrency } from "./currency";

export interface SalaryToHourlyInput {  annualSalary: number;
  hoursPerWeek: number;
  weeksPerYear: number;
}

export interface SalaryToHourlyResult {
  hourlyRate: number;
  dailyRate: number;
  weeklyRate: number;
  monthlyRate: number;
}

export function validateSalaryToHourlyInput(input: SalaryToHourlyInput, lang: "en" | "es" = "en"): string | null {
  const { annualSalary, hoursPerWeek, weeksPerYear } = input;
  const msg = lang === "es" ? {
    salary: "Por favor ingresa un salario anual válido mayor a 0.",
    hours: "Por favor ingresa horas por semana válidas (1–168).",
    weeks: "Por favor ingresa semanas por año válidas (1–52).",
  } : {
    salary: "Please enter a valid annual salary greater than 0.",
    hours: "Please enter valid hours per week (1–168).",
    weeks: "Please enter valid weeks per year (1–52).",
  };

  if (!annualSalary || Number.isNaN(annualSalary) || annualSalary <= 0) {
    return msg.salary;
  }
  if (!hoursPerWeek || Number.isNaN(hoursPerWeek) || hoursPerWeek <= 0 || hoursPerWeek > 168) {
    return msg.hours;
  }
  if (!weeksPerYear || Number.isNaN(weeksPerYear) || weeksPerYear <= 0 || weeksPerYear > 52) {
    return msg.weeks;
  }

  return null;
}

export function calculateSalaryToHourly(input: SalaryToHourlyInput): SalaryToHourlyResult {
  const { annualSalary, hoursPerWeek, weeksPerYear } = input;

  const weeklyRate = annualSalary / weeksPerYear;
  const hourlyRate = weeklyRate / hoursPerWeek;
  const dailyRate = hourlyRate * (hoursPerWeek / 5);
  const monthlyRate = annualSalary / 12;

  return { hourlyRate, dailyRate, weeklyRate, monthlyRate };
}



export function copySalaryToHourlySummary(input: SalaryToHourlyInput, result: SalaryToHourlyResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de Salario a Hora

Salario Anual:
${formatCurrency(input.annualSalary)}

Horas por Semana:
${input.hoursPerWeek}

Semanas por Año:
${input.weeksPerYear}

Tarifa por Hora:
${formatCurrency(result.hourlyRate)}

Tarifa Diaria:
${formatCurrency(result.dailyRate)}

Tarifa Semanal:
${formatCurrency(result.weeklyRate)}

Tarifa Mensual:
${formatCurrency(result.monthlyRate)}
`.trim();
  }
  return `
Salary to Hourly Summary

Annual Salary:
${formatCurrency(input.annualSalary)}

Hours per Week:
${input.hoursPerWeek}

Weeks per Year:
${input.weeksPerYear}

Hourly Rate:
${formatCurrency(result.hourlyRate)}

Daily Rate:
${formatCurrency(result.dailyRate)}

Weekly Rate:
${formatCurrency(result.weeklyRate)}

Monthly Rate:
${formatCurrency(result.monthlyRate)}
`.trim();
}