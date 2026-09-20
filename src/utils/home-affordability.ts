// src/utils/home-affordability.ts

export interface HomeAffordabilityInput {
  annualIncome: number;
  monthlyDebts: number;
  downPayment: number;
  interestRate: number; // annual %
  loanTermYears: number;
  propertyTaxRate: number; // annual %, of home value
  annualInsurance: number;
  maxDTI: number; // back-end ratio %, e.g. 36
}

export interface HomeAffordabilityResult {
  maxHomePrice: number;
  maxLoanAmount: number;
  monthlyPI: number;
  monthlyTax: number;
  monthlyInsurance: number;
  totalMonthlyPayment: number;
}

export function validateHomeAffordabilityInput(input: HomeAffordabilityInput, lang: "en" | "es" = "en"): string | null {
  const { annualIncome, monthlyDebts, downPayment, interestRate, loanTermYears, propertyTaxRate, annualInsurance, maxDTI } = input;
  const msg = lang === "es" ? {
    income:"Por favor ingresa un ingreso anual válido mayor a 0.", debts:"Por favor ingresa un monto de deudas mensuales válido (0 o más).", down:"Por favor ingresa un pago inicial válido (0 o más).", rate:"Por favor ingresa una tasa de interés válida (0 o más).", term:"Por favor ingresa un plazo de préstamo válido mayor a 0.", tax:"Por favor ingresa una tasa de impuesto predial válida (0 o más).", ins:"Por favor ingresa un monto de seguro anual válido (0 o más).", dti:"Por favor ingresa una relación deuda-ingreso máxima válida (1–100).",
  } : {
    income:"Please enter a valid annual income greater than 0.", debts:"Please enter a valid monthly debts amount (0 or more).", down:"Please enter a valid down payment (0 or more).", rate:"Please enter a valid interest rate (0 or more).", term:"Please enter a valid loan term greater than 0.", tax:"Please enter a valid property tax rate (0 or more).", ins:"Please enter a valid annual insurance amount (0 or more).", dti:"Please enter a valid maximum debt-to-income ratio (1–100).",
  };

  if (!annualIncome || Number.isNaN(annualIncome) || annualIncome <= 0) return msg.income;
  if (Number.isNaN(monthlyDebts) || monthlyDebts < 0) return msg.debts;
  if (Number.isNaN(downPayment) || downPayment < 0) return msg.down;
  if (Number.isNaN(interestRate) || interestRate < 0) return msg.rate;
  if (!loanTermYears || loanTermYears <= 0) return msg.term;
  if (Number.isNaN(propertyTaxRate) || propertyTaxRate < 0) return msg.tax;
  if (Number.isNaN(annualInsurance) || annualInsurance < 0) return msg.ins;
  if (!maxDTI || maxDTI <= 0 || maxDTI > 100) return msg.dti;
  return null;
}

export function calculateHomeAffordability(input: HomeAffordabilityInput): HomeAffordabilityResult {
  const { annualIncome, monthlyDebts, downPayment, interestRate, loanTermYears, propertyTaxRate, annualInsurance, maxDTI } = input;

  const monthlyIncome = annualIncome / 12;
  const maxMonthlyPayment = Math.max((monthlyIncome * maxDTI) / 100 - monthlyDebts, 0);

  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = loanTermYears * 12;
  const monthlyInsurance = annualInsurance / 12;

  const piFactor = monthlyRate === 0
    ? 1 / totalMonths
    : monthlyRate / (1 - Math.pow(1 + monthlyRate, -totalMonths));

  const taxFactor = propertyTaxRate / 1200;

  // H * piFactor - downPayment * piFactor + H * taxFactor + monthlyInsurance <= maxMonthlyPayment
  const numerator = maxMonthlyPayment - monthlyInsurance + downPayment * piFactor;
  const denominator = piFactor + taxFactor;

  const maxHomePrice = Math.max(denominator > 0 ? numerator / denominator : 0, 0);
  const maxLoanAmount = Math.max(maxHomePrice - downPayment, 0);

  const monthlyPI = maxLoanAmount * piFactor;
  const monthlyTax = maxHomePrice * taxFactor;
  const totalMonthlyPayment = monthlyPI + monthlyTax + monthlyInsurance;

  return { maxHomePrice, maxLoanAmount, monthlyPI, monthlyTax, monthlyInsurance, totalMonthlyPayment };
}

export { formatCurrency } from "./currency";

export function copyHomeAffordabilitySummary(input: HomeAffordabilityInput, result: HomeAffordabilityResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de Asequibilidad de Vivienda

Ingreso Anual:
${formatCurrency(input.annualIncome)}

Deudas Mensuales:
${formatCurrency(input.monthlyDebts)}

Pago Inicial:
${formatCurrency(input.downPayment)}

Precio Máximo de Vivienda:
${formatCurrency(result.maxHomePrice)}

Monto Máximo del Préstamo:
${formatCurrency(result.maxLoanAmount)}

Pago Mensual Estimado (PITI):
${formatCurrency(result.totalMonthlyPayment)}
`.trim();
  }
  return `
Home Affordability Summary

Annual Income:
${formatCurrency(input.annualIncome)}

Monthly Debts:
${formatCurrency(input.monthlyDebts)}

Down Payment:
${formatCurrency(input.downPayment)}

Max Home Price:
${formatCurrency(result.maxHomePrice)}

Max Loan Amount:
${formatCurrency(result.maxLoanAmount)}

Estimated Monthly Payment (PITI):
${formatCurrency(result.totalMonthlyPayment)}
`.trim();
}