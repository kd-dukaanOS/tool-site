// src/utils/freelancer-rate.ts
import { formatCurrency } from "./currency";

export interface FreelancerRateInput {
  desiredAnnualIncome: number;
  annualExpenses: number;
  billableHoursPerWeek: number;
  weeksPerYear: number;
  taxRate: number;
}

export interface FreelancerRateResult {
  hourlyRate: number;
  dailyRate: number;
  annualBillableHours: number;
  grossRevenueNeeded: number;
}

export function validateFreelancerRateInput(input: FreelancerRateInput, lang: "en" | "es" = "en"): string | null {
  const { desiredAnnualIncome, billableHoursPerWeek, weeksPerYear, taxRate } = input;

  if (lang === "es") {
    if (!desiredAnnualIncome || Number.isNaN(desiredAnnualIncome) || desiredAnnualIncome <= 0) return "Ingresa un ingreso anual objetivo válido mayor a 0.";
    if (!billableHoursPerWeek || Number.isNaN(billableHoursPerWeek) || billableHoursPerWeek <= 0 || billableHoursPerWeek > 168) return "Ingresa horas facturables válidas por semana (1–168).";
    if (!weeksPerYear || Number.isNaN(weeksPerYear) || weeksPerYear <= 0 || weeksPerYear > 52) return "Ingresa semanas válidas por año (1–52).";
    if (taxRate < 0 || taxRate >= 100 || Number.isNaN(taxRate)) return "Ingresa una tasa de impuesto válida entre 0 y 99.";
    return null;
  }
  if (!desiredAnnualIncome || Number.isNaN(desiredAnnualIncome) || desiredAnnualIncome <= 0) {
    return "Please enter a valid target annual income greater than 0.";
  }
  if (!billableHoursPerWeek || Number.isNaN(billableHoursPerWeek) || billableHoursPerWeek <= 0 || billableHoursPerWeek > 168) {
    return "Please enter valid billable hours per week (1–168).";
  }
  if (!weeksPerYear || Number.isNaN(weeksPerYear) || weeksPerYear <= 0 || weeksPerYear > 52) {
    return "Please enter valid weeks per year (1–52).";
  }
  if (taxRate < 0 || taxRate >= 100 || Number.isNaN(taxRate)) {
    return "Please enter a valid tax rate between 0 and 99.";
  }

  return null;
}

export function calculateFreelancerRate(input: FreelancerRateInput): FreelancerRateResult {
  const { desiredAnnualIncome, annualExpenses, billableHoursPerWeek, weeksPerYear, taxRate } = input;

  const grossRevenueNeeded = (desiredAnnualIncome + annualExpenses) / (1 - taxRate / 100);
  const annualBillableHours = billableHoursPerWeek * weeksPerYear;
  const hourlyRate = grossRevenueNeeded / annualBillableHours;
  const dailyRate = hourlyRate * (billableHoursPerWeek / 5);

  return { hourlyRate, dailyRate, annualBillableHours, grossRevenueNeeded };
}

export function copyFreelancerRateSummary(
  input: FreelancerRateInput,
  result: FreelancerRateResult,
  lang: "en" | "es" = "en"
): string {
  if (lang === "es") {
    return `
Resumen de Tarifa por Hora para Freelancers

Ingreso Anual Objetivo:
${formatCurrency(input.desiredAnnualIncome)}

Gastos Anuales del Negocio:
${formatCurrency(input.annualExpenses)}

Tasa de Impuesto:
${input.taxRate}%

Horas Facturables por Semana:
${input.billableHoursPerWeek}

Semanas por Año:
${input.weeksPerYear}

Tarifa por Hora Requerida:
${formatCurrency(result.hourlyRate)}

Tarifa Diaria Requerida:
${formatCurrency(result.dailyRate)}

Ingreso Bruto Necesario:
${formatCurrency(result.grossRevenueNeeded)}
`.trim();
  }
  return `
Freelancer Hourly Rate Summary

Target Annual Income:
${formatCurrency(input.desiredAnnualIncome)}

Annual Business Expenses:
${formatCurrency(input.annualExpenses)}

Tax Rate:
${input.taxRate}%

Billable Hours per Week:
${input.billableHoursPerWeek}

Weeks per Year:
${input.weeksPerYear}

Required Hourly Rate:
${formatCurrency(result.hourlyRate)}

Required Daily Rate:
${formatCurrency(result.dailyRate)}

Gross Revenue Needed:
${formatCurrency(result.grossRevenueNeeded)}
`.trim();
}