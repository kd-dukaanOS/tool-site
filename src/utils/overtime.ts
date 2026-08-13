// src/utils/overtime.ts
export interface OvertimeInput {
  hourlyRate: number;
  regularHours: number;
  overtimeHours: number;
  overtimeMultiplier: number;
}

export interface OvertimeResult {
  regularPay: number;
  overtimePay: number;
  totalPay: number;
  effectiveOvertimeRate: number;
}

export function validateOvertimeInput(input: OvertimeInput): string | null {
  const { hourlyRate, regularHours, overtimeHours, overtimeMultiplier } = input;

  if (!hourlyRate || Number.isNaN(hourlyRate) || hourlyRate <= 0) {
    return "Please enter a valid hourly rate greater than 0.";
  }
  if (regularHours === undefined || Number.isNaN(regularHours) || regularHours < 0) {
    return "Please enter valid regular hours (0 or more).";
  }
  if (overtimeHours === undefined || Number.isNaN(overtimeHours) || overtimeHours < 0) {
    return "Please enter valid overtime hours (0 or more).";
  }
  if (!overtimeMultiplier || Number.isNaN(overtimeMultiplier) || overtimeMultiplier <= 1) {
    return "Please enter a valid overtime multiplier greater than 1 (e.g. 1.5).";
  }

  return null;
}

export function calculateOvertime(input: OvertimeInput): OvertimeResult {
  const { hourlyRate, regularHours, overtimeHours, overtimeMultiplier } = input;

  const effectiveOvertimeRate = hourlyRate * overtimeMultiplier;
  const regularPay = hourlyRate * regularHours;
  const overtimePay = effectiveOvertimeRate * overtimeHours;
  const totalPay = regularPay + overtimePay;

  return { regularPay, overtimePay, totalPay, effectiveOvertimeRate };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);
}

export function copyOvertimeSummary(input: OvertimeInput, result: OvertimeResult): string {
  return `
Overtime Pay Summary

Hourly Rate:
${formatCurrency(input.hourlyRate)}

Regular Hours:
${input.regularHours}

Overtime Hours:
${input.overtimeHours}

Overtime Multiplier:
${input.overtimeMultiplier}x

Regular Pay:
${formatCurrency(result.regularPay)}

Overtime Pay:
${formatCurrency(result.overtimePay)}

Total Pay:
${formatCurrency(result.totalPay)}
`.trim();
}