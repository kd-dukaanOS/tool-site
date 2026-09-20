import { round } from "./calculator";

export interface SIPResult {
  maturityValue: number;
  investedAmount: number;
  estimatedReturns: number;
  returnPercent: number;
}

export interface SIPYear {
  year: number;
  invested: number;
  value: number;
}

function futureValue(
  monthlyInvestment: number,
  annualReturn: number,
  months: number
): number {

  const r = annualReturn / 12 / 100;

  if (r === 0) return monthlyInvestment * months;

  return monthlyInvestment * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
}

export function calculateSIP(
  monthlyInvestment: number,
  annualReturn: number,
  years: number
): SIPResult {

  const months = years * 12;
  const maturityValue = futureValue(monthlyInvestment, annualReturn, months);
  const investedAmount = monthlyInvestment * months;
  const estimatedReturns = maturityValue - investedAmount;

  return {
    maturityValue: round(maturityValue),
    investedAmount: round(investedAmount),
    estimatedReturns: round(estimatedReturns),
    returnPercent: round((estimatedReturns / investedAmount) * 100, 1),
  };
}

export function sipYearlyGrowth(
  monthlyInvestment: number,
  annualReturn: number,
  years: number
): SIPYear[] {

  const growth: SIPYear[] = [];

  for (let year = 1; year <= years; year++) {
    const months = year * 12;
    growth.push({
      year,
      invested: round(monthlyInvestment * months),
      value: round(futureValue(monthlyInvestment, annualReturn, months)),
    });
  }

  return growth;
}

export function sipInsight(
  monthlyInvestment: number,
  annualReturn: number,
  years: number,
  result: SIPResult,
  lang: "en" | "es" = "en"
): string {

  const extra = 1000;
  const withExtra = calculateSIP(monthlyInvestment + extra, annualReturn, years);
  const gain = round(withExtra.maturityValue - result.maturityValue);

  if (lang === "es") {
    if (gain <= 0) {
      return `Tu inversión de ₹${result.investedAmount.toLocaleString("en-IN")} podría crecer a ₹${result.maturityValue.toLocaleString("en-IN")} en ${years} años.`;
    }
    return `Invertir ₹${extra}/mes más podría aumentar tu valor de vencimiento en aproximadamente ₹${gain.toLocaleString("en-IN")} en ${years} años — el poder del interés compuesto premia a quien empieza temprano.`;
  }

  if (gain <= 0) {
    return `Your investment of ₹${result.investedAmount.toLocaleString("en-IN")} could grow to ₹${result.maturityValue.toLocaleString("en-IN")} in ${years} years.`;
  }

  return `Investing ₹${extra}/month more could grow your maturity value by approximately ₹${gain.toLocaleString("en-IN")} over ${years} years — the power of compounding rewards starting early.`;
}

export function validateSIPInputs(
  monthlyInvestment: number,
  annualReturn: number,
  years: number,
  lang: "en" | "es" = "en"
): string | null {

  const msg = lang === "es" ? {
    monthly: "Ingresa una inversión mensual válida.",
    ret: "Ingresa una tasa de retorno esperada válida.",
    years: "Ingresa un período de inversión válido.",
    yearsMax: "Ingresa un período realista (hasta 50 años).",
  } : {
    monthly: "Please enter a valid monthly investment.",
    ret: "Please enter a valid expected return rate.",
    years: "Please enter a valid investment period.",
    yearsMax: "Please enter a realistic period (up to 50 years).",
  };

  if (!monthlyInvestment || monthlyInvestment <= 0) return msg.monthly;
  if (annualReturn === undefined || Number.isNaN(annualReturn) || annualReturn < 0) return msg.ret;
  if (!years || years <= 0) return msg.years;
  if (years > 50) return msg.yearsMax;

  return null;
}

export function copySIPSummary(
  monthlyInvestment: number,
  annualReturn: number,
  years: number,
  result: SIPResult,
  lang: "en" | "es" = "en"
): string {

  if (lang === "es") {
    return `
Resumen SIP

Inversión Mensual: ₹${monthlyInvestment.toLocaleString("en-IN")}
Retorno Esperado: ${annualReturn}%
Duración: ${years} años

Monto Invertido: ₹${result.investedAmount.toLocaleString("en-IN")}
Retornos Estimados: ₹${result.estimatedReturns.toLocaleString("en-IN")}
Valor de Vencimiento: ₹${result.maturityValue.toLocaleString("en-IN")}
Retorno %: ${result.returnPercent}%
`.trim();
  }

  return `
SIP Summary

Monthly Investment: ₹${monthlyInvestment.toLocaleString("en-IN")}
Expected Return: ${annualReturn}%
Duration: ${years} years

Invested Amount: ₹${result.investedAmount.toLocaleString("en-IN")}
Estimated Returns: ₹${result.estimatedReturns.toLocaleString("en-IN")}
Maturity Value: ₹${result.maturityValue.toLocaleString("en-IN")}
Return %: ${result.returnPercent}%
`.trim();
}
