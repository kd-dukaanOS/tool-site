import { round } from "./calculator";

export interface EMIResult {
  emi: number;
  totalPayment: number;
  totalInterest: number;
  interestPercent: number;
}

export interface ScheduleYear {
  year: number;
  principalPaid: number;
  interestPaid: number;
  balance: number;
}

export function calculateEMI(
  principal: number,
  annualRate: number,
  years: number
): EMIResult {

  const monthlyRate = annualRate / 12 / 100;
  const months = years * 12;

  let emi: number;

  if (monthlyRate === 0) {
    emi = principal / months;
  } else {
    emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
  }

  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;

  return {
    emi: round(emi),
    totalPayment: round(totalPayment),
    totalInterest: round(totalInterest),
    interestPercent: round((totalInterest / totalPayment) * 100, 1),
  };
}

export function amortizationByYear(
  principal: number,
  annualRate: number,
  years: number
): ScheduleYear[] {

  const monthlyRate = annualRate / 12 / 100;
  const emi = calculateEMI(principal, annualRate, years).emi;

  let balance = principal;
  const schedule: ScheduleYear[] = [];

  for (let year = 1; year <= years; year++) {

    let yearPrincipal = 0;
    let yearInterest = 0;

    for (let m = 0; m < 12; m++) {

      if (balance <= 0) break;

      const interestPortion = balance * monthlyRate;
      const principalPortion = Math.min(emi - interestPortion, balance);

      yearInterest += interestPortion;
      yearPrincipal += principalPortion;
      balance -= principalPortion;
    }

    schedule.push({
      year,
      principalPaid: round(yearPrincipal),
      interestPaid: round(yearInterest),
      balance: round(Math.max(balance, 0)),
    });
  }

  return schedule;
}

function simulatePayoff(
  principal: number,
  monthlyRate: number,
  payment: number
) {

  let balance = principal;
  let totalInterest = 0;
  let months = 0;

  while (balance > 0 && months < 1200) {

    const interest = balance * monthlyRate;
    let principalPortion = payment - interest;

    if (principalPortion <= 0) break;
    if (principalPortion > balance) principalPortion = balance;

    balance -= principalPortion;
    totalInterest += interest;
    months++;
  }

  return { totalInterest: round(totalInterest), months };
}

import { formatCurrency, type CurrencyCode } from "./currencyselector";

export function emiInsight(
  principal: number,
  annualRate: number,
  years: number,
  result: EMIResult,
  currency: CurrencyCode = "INR",
  lang: "en" | "es" = "en"
): string {

  const monthlyRate = annualRate / 12 / 100;
  const extra = 1000;

  const withExtra = simulatePayoff(principal, monthlyRate, result.emi + extra);
  const interestSaved = round(result.totalInterest - withExtra.totalInterest);
  const monthsSaved = years * 12 - withExtra.months;

  if (lang === "es") {
    if (interestSaved <= 0 || monthsSaved <= 0) {
      return `Pagas un total de ${formatCurrency(result.totalInterest, currency)} en intereses durante ${years} años.`;
    }
    const yearsSavedEs = round(monthsSaved / 12, 1);
    return `Pagas ${formatCurrency(result.totalInterest, currency)} en intereses. Aumentar tu cuota en ${formatCurrency(extra, currency)}/mes podría ahorrarte aproximadamente ${formatCurrency(interestSaved, currency)} y pagar tu préstamo ${yearsSavedEs} años antes.`;
  }

  if (interestSaved <= 0 || monthsSaved <= 0) {
    return `You pay a total of ${formatCurrency(result.totalInterest, currency)} in interest over ${years} years.`;
  }

  const yearsSaved = round(monthsSaved / 12, 1);

  return `You pay ${formatCurrency(result.totalInterest, currency)} as interest. Increasing your EMI by ${formatCurrency(extra, currency)}/month could save approximately ${formatCurrency(interestSaved, currency)} and pay off your loan ${yearsSaved} years sooner.`;
}

export function validateEMIInputs(
  principal: number,
  rate: number,
  years: number,
  lang: "en" | "es" = "en"
): string | null {

  if (lang === "es") {
    if (!principal || principal <= 0) return "Ingresa un monto de préstamo válido.";
    if (rate === undefined || Number.isNaN(rate) || rate < 0) return "Ingresa una tasa de interés válida.";
    if (!years || years <= 0) return "Ingresa un plazo de préstamo válido.";
    if (years > 50) return "Ingresa un plazo realista (hasta 50 años).";
    return null;
  }

  if (!principal || principal <= 0) return "Please enter a valid loan amount.";
  if (rate === undefined || Number.isNaN(rate) || rate < 0) return "Please enter a valid interest rate.";
  if (!years || years <= 0) return "Please enter a valid loan tenure.";
  if (years > 50) return "Please enter a realistic tenure (up to 50 years).";

  return null;
}

export function copyEMISummary(
  principal: number,
  rate: number,
  years: number,
  result: EMIResult,
  currency: CurrencyCode = "INR",
  lang: "en" | "es" = "en"
): string {

  if (lang === "es") {
    return `
Resumen de Cuota de Préstamo (EMI)

Monto del Préstamo: ${formatCurrency(principal, currency)}
Tasa de Interés: ${rate}%
Plazo: ${years} años

Cuota Mensual: ${formatCurrency(result.emi, currency)}
Interés Total: ${formatCurrency(result.totalInterest, currency)}
Pago Total: ${formatCurrency(result.totalPayment, currency)}
Interés % del Pago: ${result.interestPercent}%
`.trim();
  }

  return `
Loan EMI Summary

Loan Amount: ${formatCurrency(principal, currency)}
Interest Rate: ${rate}%
Tenure: ${years} years

Monthly EMI: ${formatCurrency(result.emi, currency)}
Total Interest: ${formatCurrency(result.totalInterest, currency)}
Total Payment: ${formatCurrency(result.totalPayment, currency)}
Interest % of Payment: ${result.interestPercent}%
`.trim();
}
