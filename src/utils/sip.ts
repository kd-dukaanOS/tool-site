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
  result: SIPResult
): string {

  const extra = 1000;
  const withExtra = calculateSIP(monthlyInvestment + extra, annualReturn, years);
  const gain = round(withExtra.maturityValue - result.maturityValue);

  if (gain <= 0) {
    return `Your investment of ₹${result.investedAmount.toLocaleString("en-IN")} could grow to ₹${result.maturityValue.toLocaleString("en-IN")} in ${years} years.`;
  }

  return `Investing ₹${extra}/month more could grow your maturity value by approximately ₹${gain.toLocaleString("en-IN")} over ${years} years — the power of compounding rewards starting early.`;
}

export function validateSIPInputs(
  monthlyInvestment: number,
  annualReturn: number,
  years: number
): string | null {

  if (!monthlyInvestment || monthlyInvestment <= 0) return "Please enter a valid monthly investment.";
  if (annualReturn === undefined || Number.isNaN(annualReturn) || annualReturn < 0) return "Please enter a valid expected return rate.";
  if (!years || years <= 0) return "Please enter a valid investment period.";
  if (years > 50) return "Please enter a realistic period (up to 50 years).";

  return null;
}

export function copySIPSummary(
  monthlyInvestment: number,
  annualReturn: number,
  years: number,
  result: SIPResult
): string {

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
