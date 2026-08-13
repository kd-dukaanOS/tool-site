// src/utils/salary-to-hourly.ts
export interface SalaryToHourlyInput {
  annualSalary: number;
  hoursPerWeek: number;
  weeksPerYear: number;
}

export interface SalaryToHourlyResult {
  hourlyRate: number;
  dailyRate: number;
  weeklyRate: number;
  monthlyRate: number;
}

export function validateSalaryToHourlyInput(input: SalaryToHourlyInput): string | null {
  const { annualSalary, hoursPerWeek, weeksPerYear } = input;

  if (!annualSalary || Number.isNaN(annualSalary) || annualSalary <= 0) {
    return "Please enter a valid annual salary greater than 0.";
  }
  if (!hoursPerWeek || Number.isNaN(hoursPerWeek) || hoursPerWeek <= 0 || hoursPerWeek > 168) {
    return "Please enter valid hours per week (1–168).";
  }
  if (!weeksPerYear || Number.isNaN(weeksPerYear) || weeksPerYear <= 0 || weeksPerYear > 52) {
    return "Please enter valid weeks per year (1–52).";
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

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);
}

export function copySalaryToHourlySummary(input: SalaryToHourlyInput, result: SalaryToHourlyResult): string {
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