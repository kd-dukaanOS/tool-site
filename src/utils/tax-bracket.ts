// 2026 IRS marginal tax brackets — verified against IRS Rev. Proc. 2025-32 (Jan 2026)

export interface TaxBracketResult {
  taxableIncome: number;
  totalTax: number;
  marginalRate: number;
  effectiveRate: number;
  bracketBreakdown: { rate: number; from: number; to: number; taxInBracket: number }[];
}

type FilingStatus = "single" | "married" | "headOfHousehold";

const BRACKETS: Record<FilingStatus, { upTo: number; rate: number }[]> = {
  single: [
    { upTo: 12400, rate: 0.10 },
    { upTo: 50400, rate: 0.12 },
    { upTo: 105700, rate: 0.22 },
    { upTo: 201775, rate: 0.24 },
    { upTo: 256225, rate: 0.32 },
    { upTo: 640600, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 },
  ],
  married: [
    { upTo: 24800, rate: 0.10 },
    { upTo: 100800, rate: 0.12 },
    { upTo: 211400, rate: 0.22 },
    { upTo: 403550, rate: 0.24 },
    { upTo: 512450, rate: 0.32 },
    { upTo: 768700, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 },
  ],
  headOfHousehold: [
    { upTo: 17700, rate: 0.10 },
    { upTo: 67450, rate: 0.12 },
    { upTo: 105700, rate: 0.22 },
    { upTo: 201775, rate: 0.24 },
    { upTo: 256200, rate: 0.32 },
    { upTo: 640600, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 },
  ],
};

export function calculateTaxBracket(filingStatus: FilingStatus, taxableIncome: number): TaxBracketResult {
  const table = BRACKETS[filingStatus];
  let remaining = taxableIncome;
  let prevCap = 0;
  let totalTax = 0;
  let marginalRate = table[0].rate;
  const bracketBreakdown: { rate: number; from: number; to: number; taxInBracket: number }[] = [];

  for (const bracket of table) {
    if (remaining <= 0) break;
    const span = Math.min(remaining, bracket.upTo - prevCap);
    const taxInBracket = span * bracket.rate;
    totalTax += taxInBracket;

    if (span > 0) {
      bracketBreakdown.push({ rate: bracket.rate, from: prevCap, to: Math.min(bracket.upTo, taxableIncome), taxInBracket });
      marginalRate = bracket.rate;
    }

    remaining -= span;
    prevCap = bracket.upTo;
  }

  const effectiveRate = taxableIncome > 0 ? (totalTax / taxableIncome) * 100 : 0;

  return { taxableIncome, totalTax, marginalRate: marginalRate * 100, effectiveRate, bracketBreakdown };
}

export function validateTaxBracketInputs(taxableIncome: number): string | null {
  if (taxableIncome <= 0) return "Taxable income must be greater than zero.";
  return null;
}