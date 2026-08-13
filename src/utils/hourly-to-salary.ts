// src/utils/hourly-to-salary.ts
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

export function validateHourlyToSalaryInput(input: HourlyToSalaryInput): string | null {
  const { hourlyRate, hoursPerWeek, weeksPerYear } = input;

  if (!hourlyRate || Number.isNaN(hourlyRate) || hourlyRate <= 0) {
    return "Please enter a valid hourly rate greater than 0.";
  }
  if (!hoursPerWeek || Number.isNaN(hoursPerWeek) || hoursPerWeek <= 0 || hoursPerWeek > 168) {
    return "Please enter valid hours per week (1–168).";
  }
  if (!weeksPerYear || Number.isNaN(weeksPerYear) || weeksPerYear <= 0 || weeksPerYear > 52) {
    return "Please enter valid weeks per year (1–52).";
  }

  return null;
}

export function calculateHourlyToSalary(input: HourlyToSalaryInput): HourlyToSalaryResult {
  const { hourlyRate, hoursPerWeek, weeksPerYear } = input;

  const weeklySalary = hourlyRate * hoursPerWeek;
  const annualSalary = weeklySalary * weeksPerYear;
  const monthlySalary = annualSalary / 12;

  return { annualSalary, monthlySalary, weeklySalary };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function copyHourlyToSalarySummary(input: HourlyToSalaryInput, result: HourlyToSalaryResult): string {
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