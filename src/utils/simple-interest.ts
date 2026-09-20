export interface SimpleInterestInput {
  principal: number;
  annualRate: number;
  years: number;
}

export interface SimpleInterestResult {
  totalInterest: number;
  totalAmount: number;
  principalInvested: number;
  monthlyInterest: number;
  dailyInterest: number;
}

export function validateSimpleInterestInput(
  input: SimpleInterestInput,
  lang: "en" | "es" = "en"
): string | null {

  const { principal, annualRate, years } = input;
  const msg = lang === "es" ? {
    principal: "Ingresa un monto principal mayor a 0.",
    rate: "Ingresa una tasa de interés mayor a 0.",
    years: "Ingresa un plazo mayor a 0.",
    yearsMax: "Ingresa un plazo realista (menos de 100 años).",
    rateMax: "Ingresa una tasa de interés realista (menos de 100%).",
  } : {
    principal: "Please enter a principal amount greater than 0.",
    rate: "Please enter an interest rate greater than 0.",
    years: "Please enter a time period greater than 0.",
    yearsMax: "Please enter a realistic time period (under 100 years).",
    rateMax: "Please enter a realistic interest rate (under 100%).",
  };

  if (!principal || Number.isNaN(principal) || principal <= 0) {
    return msg.principal;
  }

  if (!annualRate || Number.isNaN(annualRate) || annualRate <= 0) {
    return msg.rate;
  }

  if (!years || Number.isNaN(years) || years <= 0) {
    return msg.years;
  }

  if (years > 100) {
    return msg.yearsMax;
  }

  if (annualRate > 100) {
    return msg.rateMax;
  }

  return null;
}

/**
 * SI = (P * r * t) / 100
 */
export function calculateSimpleInterest(
  input: SimpleInterestInput
): SimpleInterestResult {

  const { principal, annualRate, years } = input;

  const totalInterest = (principal * annualRate * years) / 100;
  const totalAmount = principal + totalInterest;

  return {
    totalInterest,
    totalAmount,
    principalInvested: principal,
    monthlyInterest: totalInterest / (years * 12),
    dailyInterest: totalInterest / (years * 365),
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function copySimpleInterestSummary(
  input: SimpleInterestInput,
  result: SimpleInterestResult,
  lang: "en" | "es" = "en"
): string {

  if (lang === "es") {
    return `
Resumen de Interés Simple

Monto Principal:
${formatCurrency(input.principal)}

Tasa de Interés Anual:
${input.annualRate}%

Plazo:
${input.years} Años

Interés Total:
${formatCurrency(result.totalInterest)}

Monto Total:
${formatCurrency(result.totalAmount)}
`.trim();
  }

  return `
Simple Interest Summary

Principal Amount:
${formatCurrency(input.principal)}

Annual Interest Rate:
${input.annualRate}%

Time Period:
${input.years} Years

Total Interest:
${formatCurrency(result.totalInterest)}

Total Amount:
${formatCurrency(result.totalAmount)}
`.trim();

}
