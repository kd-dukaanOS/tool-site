// src/utils/quarterly-estimated-tax.ts
import { calculateFederalTax, getStandardDeduction, type FilingStatus, type TaxYear } from "./us-federal-tax";
import { calculateSelfEmploymentTax } from "./self-employment-tax";

export interface QuarterlyTaxInput {
  selfEmploymentIncome: number;
  otherIncome: number;
  filingStatus: FilingStatus;
  taxYear: TaxYear;
  useStandardDeduction: boolean;
  itemizedDeduction: number;
}

export interface QuarterlyTaxResult {
  seTax: number;
  federalIncomeTax: number;
  totalAnnualTax: number;
  quarterlyPayment: number;
  effectiveRate: number;
  deductionUsed: number;
}

export function validateQuarterlyTaxInput(input: QuarterlyTaxInput, lang: "en" | "es" = "en"): string | null {
  const { selfEmploymentIncome, otherIncome, itemizedDeduction, useStandardDeduction } = input;
  const msg = lang === "es" ? {
    both: "Por favor ingresa ingreso por trabajo independiente, otros ingresos, o ambos.",
    se: "Por favor ingresa un monto válido de ingreso por trabajo independiente (0 o más).",
    other: "Por favor ingresa un monto válido de otros ingresos (0 o más).",
    itemized: "Por favor ingresa un monto válido de deducción detallada (0 o más).",
  } : {
    both: "Please enter self-employment income, other income, or both.",
    se: "Please enter a valid self-employment income amount (0 or more).",
    other: "Please enter a valid other income amount (0 or more).",
    itemized: "Please enter a valid itemized deduction amount (0 or more).",
  };
  if ((!selfEmploymentIncome || selfEmploymentIncome <= 0) && (!otherIncome || otherIncome <= 0)) {
    return msg.both;
  }
  if (Number.isNaN(selfEmploymentIncome) || selfEmploymentIncome < 0) {
    return msg.se;
  }
  if (Number.isNaN(otherIncome) || otherIncome < 0) {
    return msg.other;
  }
  if (!useStandardDeduction && (Number.isNaN(itemizedDeduction) || itemizedDeduction < 0)) {
    return msg.itemized;
  }
  return null;
}

export function calculateQuarterlyTax(input: QuarterlyTaxInput): QuarterlyTaxResult {
  const { selfEmploymentIncome, otherIncome, filingStatus, taxYear, useStandardDeduction, itemizedDeduction } = input;

  const seResult = selfEmploymentIncome > 0
    ? calculateSelfEmploymentTax({ netEarnings: selfEmploymentIncome, filingStatus, taxYear })
    : null;

  const seTax = seResult?.totalSETax ?? 0;
  const seDeductibleHalf = seResult?.deductibleHalf ?? 0;

  const totalGrossIncome = selfEmploymentIncome + otherIncome;
  const adjustedGrossIncome = Math.max(totalGrossIncome - seDeductibleHalf, 0);

  const fedResult = calculateFederalTax({
    income: adjustedGrossIncome,
    filingStatus,
    taxYear,
    useStandardDeduction,
    itemizedDeduction,
  });

  const totalAnnualTax = fedResult.totalTax + seTax;
  const quarterlyPayment = totalAnnualTax / 4;
  const effectiveRate = totalGrossIncome > 0 ? (totalAnnualTax / totalGrossIncome) * 100 : 0;

  const deductionUsed = useStandardDeduction ? getStandardDeduction(taxYear, filingStatus) : itemizedDeduction;

  return {
    seTax,
    federalIncomeTax: fedResult.totalTax,
    totalAnnualTax,
    quarterlyPayment,
    effectiveRate,
    deductionUsed,
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

export function copyQuarterlyTaxSummary(input: QuarterlyTaxInput, result: QuarterlyTaxResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de Impuesto Estimado Trimestral (Año Fiscal ${input.taxYear})

Ingreso por Trabajo Independiente:
${formatCurrency(input.selfEmploymentIncome)}

Otros Ingresos:
${formatCurrency(input.otherIncome)}

Impuesto por Trabajo Independiente:
${formatCurrency(result.seTax)}

Impuesto Federal sobre la Renta:
${formatCurrency(result.federalIncomeTax)}

Impuesto Anual Total:
${formatCurrency(result.totalAnnualTax)}

Pago Trimestral (÷4):
${formatCurrency(result.quarterlyPayment)}

Tasa Efectiva:
${result.effectiveRate.toFixed(1)}%
`.trim();
  }
  return `
Quarterly Estimated Tax Summary (Tax Year ${input.taxYear})

Self-Employment Income:
${formatCurrency(input.selfEmploymentIncome)}

Other Income:
${formatCurrency(input.otherIncome)}

Self-Employment Tax:
${formatCurrency(result.seTax)}

Federal Income Tax:
${formatCurrency(result.federalIncomeTax)}

Total Annual Tax:
${formatCurrency(result.totalAnnualTax)}

Quarterly Payment (÷4):
${formatCurrency(result.quarterlyPayment)}

Effective Rate:
${result.effectiveRate.toFixed(1)}%
`.trim();
}