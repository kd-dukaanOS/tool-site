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

export function validateOvertimeInput(input: OvertimeInput, lang: "en" | "es" = "en"): string | null {
  const { hourlyRate, regularHours, overtimeHours, overtimeMultiplier } = input;

  if (!hourlyRate || Number.isNaN(hourlyRate) || hourlyRate <= 0) {
    return lang === "es" ? "Por favor ingresa una tarifa por hora válida mayor a 0." : "Please enter a valid hourly rate greater than 0.";
  }
  if (regularHours === undefined || Number.isNaN(regularHours) || regularHours < 0) {
    return lang === "es" ? "Por favor ingresa horas regulares válidas (0 o más)." : "Please enter valid regular hours (0 or more).";
  }
  if (overtimeHours === undefined || Number.isNaN(overtimeHours) || overtimeHours < 0) {
    return lang === "es" ? "Por favor ingresa horas extra válidas (0 o más)." : "Please enter valid overtime hours (0 or more).";
  }
  if (!overtimeMultiplier || Number.isNaN(overtimeMultiplier) || overtimeMultiplier <= 1) {
    return lang === "es" ? "Por favor ingresa un multiplicador de horas extra válido mayor a 1 (ej. 1.5)." : "Please enter a valid overtime multiplier greater than 1 (e.g. 1.5).";
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

export function copyOvertimeSummary(input: OvertimeInput, result: OvertimeResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de Pago de Horas Extra

Tarifa por Hora:
${formatCurrency(input.hourlyRate)}

Horas Regulares:
${input.regularHours}

Horas Extra:
${input.overtimeHours}

Multiplicador de Horas Extra:
${input.overtimeMultiplier}x

Pago Regular:
${formatCurrency(result.regularPay)}

Pago de Horas Extra:
${formatCurrency(result.overtimePay)}

Pago Total:
${formatCurrency(result.totalPay)}
`.trim();
  }
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