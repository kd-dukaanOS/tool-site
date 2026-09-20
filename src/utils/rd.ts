export interface RDInput {
  monthlyDeposit: number;
  annualRate: number;
  tenureMonths: number;
}

export interface RDResult {
  maturityValue: number;
  totalDeposited: number;
  totalInterest: number;
  effectiveYield: number;
}

export function validateRDInput(input: RDInput, lang: "en" | "es" = "en"): string | null {

  const { monthlyDeposit, annualRate, tenureMonths } = input;
  const msg = lang === "es" ? {
    deposit: "Por favor ingresa un depósito mensual mayor a 0.",
    rate: "Por favor ingresa una tasa de interés mayor a 0.",
    tenure: "Por favor ingresa un plazo mayor a 0.",
    realistic: "Por favor ingresa un plazo realista (menos de 240 meses).",
  } : {
    deposit: "Please enter a monthly deposit amount greater than 0.",
    rate: "Please enter an interest rate greater than 0.",
    tenure: "Please enter a tenure greater than 0.",
    realistic: "Please enter a realistic tenure (under 240 months).",
  };

  if (!monthlyDeposit || Number.isNaN(monthlyDeposit) || monthlyDeposit <= 0) {
    return msg.deposit;
  }

  if (!annualRate || Number.isNaN(annualRate) || annualRate <= 0) {
    return msg.rate;
  }

  if (!tenureMonths || Number.isNaN(tenureMonths) || tenureMonths <= 0) {
    return msg.tenure;
  }

  if (tenureMonths > 240) {
    return msg.realistic;
  }

  return null;
}

/**
 * Standard bank RD formula (quarterly compounding on monthly deposits):
 * M = P × [(1+i)^n − 1] / (1 − (1+i)^(−1/3))
 * where i = annualRate/400 (quarterly rate), n = tenureMonths/3 (quarters)
 */
export function calculateRD(input: RDInput): RDResult {

  const { monthlyDeposit, annualRate, tenureMonths } = input;

  const i = annualRate / 400;
  const n = tenureMonths / 3;

  const maturityValue =
    monthlyDeposit *
    ((Math.pow(1 + i, n) - 1) / (1 - Math.pow(1 + i, -1 / 3)));

  const totalDeposited = monthlyDeposit * tenureMonths;
  const totalInterest = maturityValue - totalDeposited;

  const years = tenureMonths / 12;
  const effectiveYield =
    (Math.pow(maturityValue / totalDeposited, 1 / years) - 1) * 100;

  return {
    maturityValue,
    totalDeposited,
    totalInterest,
    effectiveYield,
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`;
}

export function copyRDSummary(input: RDInput, result: RDResult, lang: "en" | "es" = "en"): string {

  if (lang === "es") {
    return `
Resumen de Depósito Recurrente

Depósito Mensual:
${formatCurrency(input.monthlyDeposit)}

Tasa de Interés:
${input.annualRate}%

Plazo:
${input.tenureMonths} Meses

Valor de Vencimiento:
${formatCurrency(result.maturityValue)}

Total Depositado:
${formatCurrency(result.totalDeposited)}

Interés Total Ganado:
${formatCurrency(result.totalInterest)}
`.trim();
  }

  return `
Recurring Deposit Summary

Monthly Deposit:
${formatCurrency(input.monthlyDeposit)}

Interest Rate:
${input.annualRate}%

Tenure:
${input.tenureMonths} Months

Maturity Value:
${formatCurrency(result.maturityValue)}

Total Deposited:
${formatCurrency(result.totalDeposited)}

Total Interest Earned:
${formatCurrency(result.totalInterest)}
`.trim();

}
