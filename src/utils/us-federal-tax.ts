// src/utils/us-federal-tax.ts

export type FilingStatus = "single" | "marriedJointly" | "marriedSeparately" | "headOfHousehold";
export type TaxYear = "2025" | "2026";

export interface FederalTaxInput {
  income: number;
  filingStatus: FilingStatus;
  taxYear: TaxYear;
  useStandardDeduction: boolean;
  itemizedDeduction: number;
}

export interface FederalTaxResult {
  taxableIncome: number;
  totalTax: number;
  effectiveRate: number;
  marginalRate: number;
  deductionUsed: number;
  afterTaxIncome: number;
}

export interface Bracket { rate: number; from: number; to: number; }

export const BRACKETS: Record<TaxYear, Record<FilingStatus, Bracket[]>> = {
  "2025": {
    single: [
      { rate: 10, from: 0, to: 11925 }, { rate: 12, from: 11925, to: 48475 },
      { rate: 22, from: 48475, to: 103350 }, { rate: 24, from: 103350, to: 197300 },
      { rate: 32, from: 197300, to: 250525 }, { rate: 35, from: 250525, to: 626350 },
      { rate: 37, from: 626350, to: Infinity },
    ],
    marriedJointly: [
      { rate: 10, from: 0, to: 23850 }, { rate: 12, from: 23850, to: 96950 },
      { rate: 22, from: 96950, to: 206700 }, { rate: 24, from: 206700, to: 394600 },
      { rate: 32, from: 394600, to: 501050 }, { rate: 35, from: 501050, to: 751600 },
      { rate: 37, from: 751600, to: Infinity },
    ],
    headOfHousehold: [
      { rate: 10, from: 0, to: 17000 }, { rate: 12, from: 17000, to: 64850 },
      { rate: 22, from: 64850, to: 103350 }, { rate: 24, from: 103350, to: 197300 },
      { rate: 32, from: 197300, to: 250500 }, { rate: 35, from: 250500, to: 626350 },
      { rate: 37, from: 626350, to: Infinity },
    ],
    marriedSeparately: [
      { rate: 10, from: 0, to: 11925 }, { rate: 12, from: 11925, to: 48475 },
      { rate: 22, from: 48475, to: 103350 }, { rate: 24, from: 103350, to: 197300 },
      { rate: 32, from: 197300, to: 250525 }, { rate: 35, from: 250525, to: 375800 },
      { rate: 37, from: 375800, to: Infinity },
    ],
  },
  "2026": {
    single: [
      { rate: 10, from: 0, to: 12400 }, { rate: 12, from: 12400, to: 50400 },
      { rate: 22, from: 50400, to: 105700 }, { rate: 24, from: 105700, to: 201775 },
      { rate: 32, from: 201775, to: 256225 }, { rate: 35, from: 256225, to: 640600 },
      { rate: 37, from: 640600, to: Infinity },
    ],
    marriedJointly: [
      { rate: 10, from: 0, to: 24800 }, { rate: 12, from: 24800, to: 100800 },
      { rate: 22, from: 100800, to: 211400 }, { rate: 24, from: 211400, to: 403550 },
      { rate: 32, from: 403550, to: 512450 }, { rate: 35, from: 512450, to: 768700 },
      { rate: 37, from: 768700, to: Infinity },
    ],
    headOfHousehold: [
      { rate: 10, from: 0, to: 17700 }, { rate: 12, from: 17700, to: 67450 },
      { rate: 22, from: 67450, to: 105700 }, { rate: 24, from: 105700, to: 201750 },
      { rate: 32, from: 201750, to: 256200 }, { rate: 35, from: 256200, to: 640600 },
      { rate: 37, from: 640600, to: Infinity },
    ],
    marriedSeparately: [
      { rate: 10, from: 0, to: 12400 }, { rate: 12, from: 12400, to: 50400 },
      { rate: 22, from: 50400, to: 105700 }, { rate: 24, from: 105700, to: 201775 },
      { rate: 32, from: 201775, to: 256225 }, { rate: 35, from: 256225, to: 384350 },
      { rate: 37, from: 384350, to: Infinity },
    ],
  },
};

export const STANDARD_DEDUCTION: Record<TaxYear, Record<FilingStatus, number>> = {
  "2025": { single: 15750, marriedJointly: 31500, headOfHousehold: 23625, marriedSeparately: 15750 },
  "2026": { single: 16100, marriedJointly: 32200, headOfHousehold: 24150, marriedSeparately: 16100 },
};

export function getStandardDeduction(taxYear: TaxYear, filingStatus: FilingStatus): number {
  return STANDARD_DEDUCTION[taxYear][filingStatus];
}

export function validateFederalTaxInput(input: FederalTaxInput): string | null {
  const { income, itemizedDeduction, useStandardDeduction } = input;
  if (!income || Number.isNaN(income) || income < 0) {
    return "Please enter a valid annual income of 0 or more.";
  }
  if (!useStandardDeduction && (Number.isNaN(itemizedDeduction) || itemizedDeduction < 0)) {
    return "Please enter a valid itemized deduction amount (0 or more).";
  }
  return null;
}

export function calculateFederalTax(input: FederalTaxInput): FederalTaxResult {
  const { income, filingStatus, taxYear, useStandardDeduction, itemizedDeduction } = input;
  const deductionUsed = useStandardDeduction
    ? getStandardDeduction(taxYear, filingStatus)
    : Math.max(itemizedDeduction, 0);

  const taxableIncome = Math.max(income - deductionUsed, 0);
  const brackets = BRACKETS[taxYear][filingStatus];

  let totalTax = 0;
  let marginalRate = brackets[0].rate;

  for (const bracket of brackets) {
    if (taxableIncome <= bracket.from) break;
    const taxedAmount = Math.min(taxableIncome, bracket.to) - bracket.from;
    totalTax += taxedAmount * (bracket.rate / 100);
    marginalRate = bracket.rate;
  }

  const effectiveRate = income > 0 ? (totalTax / income) * 100 : 0;
  const afterTaxIncome = income - totalTax;

  return { taxableIncome, totalTax, effectiveRate, marginalRate, deductionUsed, afterTaxIncome };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

export function copyFederalTaxSummary(input: FederalTaxInput, result: FederalTaxResult): string {
  const statusLabels: Record<FilingStatus, string> = {
    single: "Single",
    marriedJointly: "Married Filing Jointly",
    marriedSeparately: "Married Filing Separately",
    headOfHousehold: "Head of Household",
  };

  return `
US Federal Tax Summary (Tax Year ${input.taxYear})

Filing Status:
${statusLabels[input.filingStatus]}

Gross Income:
${formatCurrency(input.income)}

Deduction Used:
${formatCurrency(result.deductionUsed)}

Taxable Income:
${formatCurrency(result.taxableIncome)}

Federal Tax Owed:
${formatCurrency(result.totalTax)}

Effective Tax Rate:
${result.effectiveRate.toFixed(1)}%

Marginal Tax Rate:
${result.marginalRate}%

After-Tax Income:
${formatCurrency(result.afterTaxIncome)}
`.trim();
}