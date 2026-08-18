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

export function validateFreelancerRateInput(input: FreelancerRateInput): string | null {
  const { desiredAnnualIncome, billableHoursPerWeek, weeksPerYear, taxRate } = input;

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
  result: FreelancerRateResult
): string {
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