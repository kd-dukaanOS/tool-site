// src/utils/freelancer-rate.ts
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
  const { desiredAnnualIncome, annualExpenses, billableHoursPerWeek, weeksPerYear, taxRate } = input;

  if (!desiredAnnualIncome || Number.isNaN(desiredAnnualIncome) || desiredAnnualIncome <= 0) {
    return "Please enter a valid desired annual income greater than 0.";
  }
  if (annualExpenses === undefined || Number.isNaN(annualExpenses) || annualExpenses < 0) {
    return "Please enter valid annual business expenses (0 or more).";
  }
  if (!billableHoursPerWeek || Number.isNaN(billableHoursPerWeek) || billableHoursPerWeek <= 0 || billableHoursPerWeek > 168) {
    return "Please enter valid billable hours per week (1–168).";
  }
  if (!weeksPerYear || Number.isNaN(weeksPerYear) || weeksPerYear <= 0 || weeksPerYear > 52) {
    return "Please enter valid weeks per year (1–52).";
  }
  if (taxRate === undefined || Number.isNaN(taxRate) || taxRate < 0 || taxRate >= 100) {
    return "Please enter a valid tax rate (0–99%).";
  }

  return null;
}

export function calculateFreelancerRate(input: FreelancerRateInput): FreelancerRateResult {
  const { desiredAnnualIncome, annualExpenses, billableHoursPerWeek, weeksPerYear, taxRate } = input;

  const totalNeeded = desiredAnnualIncome + annualExpenses;
  const grossRevenueNeeded = totalNeeded / (1 - taxRate / 100);
  const annualBillableHours = billableHoursPerWeek * weeksPerYear;
  const hourlyRate = grossRevenueNeeded / annualBillableHours;
  const dailyRate = hourlyRate * (billableHoursPerWeek / 5);

  return { hourlyRate, dailyRate, annualBillableHours, grossRevenueNeeded };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);
}

export function copyFreelancerRateSummary(input: FreelancerRateInput, result: FreelancerRateResult): string {
  return `
Freelancer Hourly Rate Summary

Desired Annual Income:
${formatCurrency(input.desiredAnnualIncome)}

Annual Business Expenses:
${formatCurrency(input.annualExpenses)}

Billable Hours/Week:
${input.billableHoursPerWeek}

Weeks/Year:
${input.weeksPerYear}

Tax Rate:
${input.taxRate}%

Hourly Rate:
${formatCurrency(result.hourlyRate)}

Daily Rate:
${formatCurrency(result.dailyRate)}

Annual Billable Hours:
${result.annualBillableHours}
`.trim();
}