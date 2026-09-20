// src/utils/self-employment-tax.ts

export type FilingStatus = "single" | "marriedJointly" | "marriedSeparately" | "headOfHousehold";
export type TaxYear = "2025" | "2026";

export interface SelfEmploymentTaxInput {
  netEarnings: number;
  filingStatus: FilingStatus;
  taxYear: TaxYear;
}

export interface SelfEmploymentTaxResult {
  seTaxableEarnings: number;
  socialSecurityTax: number;
  medicareTax: number;
  additionalMedicareTax: number;
  totalSETax: number;
  deductibleHalf: number;
  effectiveRate: number;
}

const SS_WAGE_BASE: Record<TaxYear, number> = {
  "2025": 176100,
  "2026": 184500,
};

// Fixed by statute, not inflation-adjusted
const ADDITIONAL_MEDICARE_THRESHOLD: Record<FilingStatus, number> = {
  single: 200000,
  headOfHousehold: 200000,
  marriedJointly: 250000,
  marriedSeparately: 125000,
};

const SOCIAL_SECURITY_RATE = 0.124;
const MEDICARE_RATE = 0.029;
const ADDITIONAL_MEDICARE_RATE = 0.009;
const SE_TAXABLE_PORTION = 0.9235;

export function validateSelfEmploymentTaxInput(input: SelfEmploymentTaxInput, lang: "en" | "es" = "en"): string | null {
  const { netEarnings } = input;
  const msg = lang === "es"
    ? "Ingresa ganancias netas por trabajo independiente válidas, mayores a 0."
    : "Please enter valid net self-employment earnings greater than 0.";
  if (!netEarnings || Number.isNaN(netEarnings) || netEarnings <= 0) {
    return msg;
  }
  return null;
}

export function calculateSelfEmploymentTax(input: SelfEmploymentTaxInput): SelfEmploymentTaxResult {
  const { netEarnings, filingStatus, taxYear } = input;

  const seTaxableEarnings = netEarnings * SE_TAXABLE_PORTION;
  const wageBase = SS_WAGE_BASE[taxYear];

  const socialSecurityTax = Math.min(seTaxableEarnings, wageBase) * SOCIAL_SECURITY_RATE;
  const medicareTax = seTaxableEarnings * MEDICARE_RATE;

  const threshold = ADDITIONAL_MEDICARE_THRESHOLD[filingStatus];
  const additionalMedicareTax = Math.max(seTaxableEarnings - threshold, 0) * ADDITIONAL_MEDICARE_RATE;

  const totalSETax = socialSecurityTax + medicareTax + additionalMedicareTax;
  const deductibleHalf = (socialSecurityTax + medicareTax) / 2;
  const effectiveRate = (totalSETax / netEarnings) * 100;

  return { seTaxableEarnings, socialSecurityTax, medicareTax, additionalMedicareTax, totalSETax, deductibleHalf, effectiveRate };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

export function copySelfEmploymentTaxSummary(input: SelfEmploymentTaxInput, result: SelfEmploymentTaxResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de Impuesto por Trabajo Independiente (Año Fiscal ${input.taxYear})

Ingresos Netos por Trabajo Independiente:
${formatCurrency(input.netEarnings)}

Impuesto de Seguro Social (12.4%):
${formatCurrency(result.socialSecurityTax)}

Impuesto de Medicare (2.9%):
${formatCurrency(result.medicareTax)}

Impuesto Adicional de Medicare (0.9%):
${formatCurrency(result.additionalMedicareTax)}

Impuesto Total por Trabajo Independiente:
${formatCurrency(result.totalSETax)}

Mitad Deducible (para el impuesto sobre la renta):
${formatCurrency(result.deductibleHalf)}

Tasa Efectiva:
${result.effectiveRate.toFixed(1)}%
`.trim();
  }
  return `
Self-Employment Tax Summary (Tax Year ${input.taxYear})

Net Self-Employment Earnings:
${formatCurrency(input.netEarnings)}

Social Security Tax (12.4%):
${formatCurrency(result.socialSecurityTax)}

Medicare Tax (2.9%):
${formatCurrency(result.medicareTax)}

Additional Medicare Tax (0.9%):
${formatCurrency(result.additionalMedicareTax)}

Total Self-Employment Tax:
${formatCurrency(result.totalSETax)}

Deductible Half (for income tax):
${formatCurrency(result.deductibleHalf)}

Effective Rate:
${result.effectiveRate.toFixed(1)}%
`.trim();
}