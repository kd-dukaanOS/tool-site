// src/utils/capital-gains-tax.ts
import { BRACKETS, STANDARD_DEDUCTION, type FilingStatus, type TaxYear, type Bracket } from "./us-federal-tax";

export type HoldingPeriod = "short" | "long";

export interface CapitalGainsInput {
  purchasePrice: number;
  salePrice: number;
  otherIncome: number;
  filingStatus: FilingStatus;
  taxYear: TaxYear;
  holdingPeriod: HoldingPeriod;
  useStandardDeduction: boolean;
  itemizedDeduction: number;
}

export interface CapitalGainsResult {
  gain: number;
  otherTaxableIncome: number;
  capitalGainsTax: number;
  effectiveRateOnGain: number;
  afterTaxGain: number;
  deductionUsed: number;
}

const LTCG_BRACKETS: Record<TaxYear, Record<FilingStatus, Bracket[]>> = {
  "2025": {
    single: [
      { rate: 0, from: 0, to: 48350 }, { rate: 15, from: 48350, to: 533400 }, { rate: 20, from: 533400, to: Infinity },
    ],
    marriedJointly: [
      { rate: 0, from: 0, to: 96700 }, { rate: 15, from: 96700, to: 600050 }, { rate: 20, from: 600050, to: Infinity },
    ],
    marriedSeparately: [
      { rate: 0, from: 0, to: 48350 }, { rate: 15, from: 48350, to: 300000 }, { rate: 20, from: 300000, to: Infinity },
    ],
    headOfHousehold: [
      { rate: 0, from: 0, to: 64750 }, { rate: 15, from: 64750, to: 566700 }, { rate: 20, from: 566700, to: Infinity },
    ],
  },
  "2026": {
    single: [
      { rate: 0, from: 0, to: 49450 }, { rate: 15, from: 49450, to: 545500 }, { rate: 20, from: 545500, to: Infinity },
    ],
    marriedJointly: [
      { rate: 0, from: 0, to: 98900 }, { rate: 15, from: 98900, to: 613700 }, { rate: 20, from: 613700, to: Infinity },
    ],
    marriedSeparately: [
      { rate: 0, from: 0, to: 49450 }, { rate: 15, from: 49450, to: 306850 }, { rate: 20, from: 306850, to: Infinity },
    ],
    headOfHousehold: [
      { rate: 0, from: 0, to: 66200 }, { rate: 15, from: 66200, to: 579600 }, { rate: 20, from: 579600, to: Infinity },
    ],
  },
};

function stackedTax(base: number, amount: number, brackets: Bracket[]): number {
  if (amount <= 0) return 0;
  const top = base + amount;
  let tax = 0;
  for (const b of brackets) {
    const overlapFrom = Math.max(base, b.from);
    const overlapTo = Math.min(top, b.to);
    if (overlapTo > overlapFrom) tax += (overlapTo - overlapFrom) * (b.rate / 100);
  }
  return tax;
}

export function validateCapitalGainsInput(input: CapitalGainsInput, lang: "en" | "es" = "en"): string | null {
  const { purchasePrice, salePrice, otherIncome, itemizedDeduction, useStandardDeduction } = input;
  if (lang === "es") {
    if (Number.isNaN(purchasePrice) || purchasePrice < 0) return "Ingresa un precio de compra válido (0 o más).";
    if (Number.isNaN(salePrice) || salePrice < 0) return "Ingresa un precio de venta válido (0 o más).";
    if (Number.isNaN(otherIncome) || otherIncome < 0) return "Ingresa un monto válido de otros ingresos (0 o más).";
    if (!useStandardDeduction && (Number.isNaN(itemizedDeduction) || itemizedDeduction < 0)) return "Ingresa un monto válido de deducción detallada (0 o más).";
    return null;
  }
  if (Number.isNaN(purchasePrice) || purchasePrice < 0) {
    return "Please enter a valid purchase price of 0 or more.";
  }
  if (Number.isNaN(salePrice) || salePrice < 0) {
    return "Please enter a valid sale price of 0 or more.";
  }
  if (Number.isNaN(otherIncome) || otherIncome < 0) {
    return "Please enter a valid other income amount (0 or more).";
  }
  if (!useStandardDeduction && (Number.isNaN(itemizedDeduction) || itemizedDeduction < 0)) {
    return "Please enter a valid itemized deduction amount (0 or more).";
  }
  return null;
}

export function calculateCapitalGains(input: CapitalGainsInput): CapitalGainsResult {
  const { purchasePrice, salePrice, otherIncome, filingStatus, taxYear, holdingPeriod, useStandardDeduction, itemizedDeduction } = input;

  const deductionUsed = useStandardDeduction
    ? STANDARD_DEDUCTION[taxYear][filingStatus]
    : Math.max(itemizedDeduction, 0);

  const otherTaxableIncome = Math.max(otherIncome - deductionUsed, 0);
  const gain = salePrice - purchasePrice;

  const brackets = holdingPeriod === "long" ? LTCG_BRACKETS[taxYear][filingStatus] : BRACKETS[taxYear][filingStatus];
  const capitalGainsTax = gain > 0 ? stackedTax(otherTaxableIncome, gain, brackets) : 0;

  const effectiveRateOnGain = gain > 0 ? (capitalGainsTax / gain) * 100 : 0;
  const afterTaxGain = gain - capitalGainsTax;

  return { gain, otherTaxableIncome, capitalGainsTax, effectiveRateOnGain, afterTaxGain, deductionUsed };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

export function copyCapitalGainsSummary(input: CapitalGainsInput, result: CapitalGainsResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de Impuesto sobre Ganancias de Capital (Año Fiscal ${input.taxYear})

Período de Tenencia:
${input.holdingPeriod === "long" ? "Largo Plazo (más de 1 año)" : "Corto Plazo (1 año o menos)"}

Precio de Compra:
${formatCurrency(input.purchasePrice)}

Precio de Venta:
${formatCurrency(input.salePrice)}

Ganancia de Capital:
${formatCurrency(result.gain)}

Impuesto sobre Ganancias de Capital:
${formatCurrency(result.capitalGainsTax)}

Tasa Efectiva sobre la Ganancia:
${result.effectiveRateOnGain.toFixed(1)}%

Ganancia Después de Impuestos:
${formatCurrency(result.afterTaxGain)}
`.trim();
  }
  return `
Capital Gains Tax Summary (Tax Year ${input.taxYear})

Holding Period:
${input.holdingPeriod === "long" ? "Long-Term (over 1 year)" : "Short-Term (1 year or less)"}

Purchase Price:
${formatCurrency(input.purchasePrice)}

Sale Price:
${formatCurrency(input.salePrice)}

Capital Gain:
${formatCurrency(result.gain)}

Capital Gains Tax:
${formatCurrency(result.capitalGainsTax)}

Effective Rate on Gain:
${result.effectiveRateOnGain.toFixed(1)}%

After-Tax Gain:
${formatCurrency(result.afterTaxGain)}
`.trim();
}