// 2026 IRS tax brackets & standard deductions — verified against IRS Rev. Proc. 2025-32

export interface TaxRefundResult {
  taxableIncome: number;
  taxLiability: number;
  totalPayments: number;
  refundOrOwed: number;
  isRefund: boolean;
  effectiveTaxRate: number;
}

type FilingStatus = "single" | "married" | "headOfHousehold";

const STANDARD_DEDUCTION: Record<FilingStatus, number> = {
  single: 16100,
  married: 32200,
  headOfHousehold: 24150,
};

const BRACKETS: Record<FilingStatus, { upTo: number; base: number; rate: number; over: number }[]> = {
  single: [
    { upTo: 12400, base: 0, rate: 0.10, over: 0 },
    { upTo: 50400, base: 1240, rate: 0.12, over: 12400 },
    { upTo: 105700, base: 5800, rate: 0.22, over: 50400 },
    { upTo: 201775, base: 17966, rate: 0.24, over: 105700 },
    { upTo: 256225, base: 41024, rate: 0.32, over: 201775 },
    { upTo: 640600, base: 58448, rate: 0.35, over: 256225 },
    { upTo: Infinity, base: 192979.25, rate: 0.37, over: 640600 },
  ],
  married: [
    { upTo: 24800, base: 0, rate: 0.10, over: 0 },
    { upTo: 100800, base: 2480, rate: 0.12, over: 24800 },
    { upTo: 211400, base: 11600, rate: 0.22, over: 100800 },
    { upTo: 403550, base: 35932, rate: 0.24, over: 211400 },
    { upTo: 512450, base: 82048, rate: 0.32, over: 403550 },
    { upTo: 768700, base: 116896, rate: 0.35, over: 512450 },
    { upTo: Infinity, base: 206583.5, rate: 0.37, over: 768700 },
  ],
  headOfHousehold: [
    { upTo: 17700, base: 0, rate: 0.10, over: 0 },
    { upTo: 67450, base: 1770, rate: 0.12, over: 17700 },
    { upTo: 105700, base: 7740, rate: 0.22, over: 67450 },
    { upTo: 201775, base: 16155, rate: 0.24, over: 105700 },
    { upTo: 256200, base: 39213, rate: 0.32, over: 201775 },
    { upTo: 640600, base: 56629, rate: 0.35, over: 256200 },
    { upTo: Infinity, base: 191169, rate: 0.37, over: 640600 },
  ],
};

function taxFromBracket(status: FilingStatus, amount: number): number {
  const table = BRACKETS[status];
  const bracket = table.find((b) => amount <= b.upTo) ?? table[table.length - 1];
  return bracket.base + (amount - bracket.over) * bracket.rate;
}

export function calculateTaxRefund(
  filingStatus: FilingStatus,
  annualGrossIncome: number,
  otherIncome: number,
  adjustments: number,
  itemizedDeductions: number,
  taxCreditsAnnual: number,
  federalTaxWithheldAnnual: number,
  estimatedPaymentsAnnual: number
): TaxRefundResult {
  const deduction = Math.max(STANDARD_DEDUCTION[filingStatus], itemizedDeductions);
  const taxableIncome = Math.max(annualGrossIncome + otherIncome - adjustments - deduction, 0);

  let taxLiability = taxFromBracket(filingStatus, taxableIncome) - taxCreditsAnnual;
  taxLiability = Math.max(taxLiability, 0);

  const totalPayments = federalTaxWithheldAnnual + estimatedPaymentsAnnual;
  const refundOrOwed = totalPayments - taxLiability;
  const effectiveTaxRate = annualGrossIncome > 0 ? (taxLiability / annualGrossIncome) * 100 : 0;

  return {
    taxableIncome,
    taxLiability,
    totalPayments,
    refundOrOwed: Math.abs(refundOrOwed),
    isRefund: refundOrOwed >= 0,
    effectiveTaxRate,
  };
}

export function validateTaxRefundInputs(annualGrossIncome: number): string | null {
  if (annualGrossIncome <= 0) return "Annual gross income must be greater than zero.";
  return null;
}