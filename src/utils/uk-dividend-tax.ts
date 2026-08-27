export interface UkDividendTaxResult {
  totalDividendTax: number;
  netDividendIncome: number;
  effectiveRate: number;
  taxFreeAmount: number;
  taxAtBasic: number;
  taxAtHigher: number;
  taxAtAdditional: number;
}

interface YearRates { dividendAllowance: number; basicRate: number; higherRate: number; additionalRate: number; }

export const UK_DIVIDEND_TAX_YEARS: Record<string, YearRates> = {
  "2024-25": { dividendAllowance: 500, basicRate: 8.75, higherRate: 33.75, additionalRate: 39.35 },
  "2025-26": { dividendAllowance: 500, basicRate: 8.75, higherRate: 33.75, additionalRate: 39.35 },
  "2026-27": { dividendAllowance: 500, basicRate: 10.75, higherRate: 35.75, additionalRate: 39.35 },
};

const STANDARD_PA = 12570;
const BASIC_THRESHOLD = 50270;
const ADDITIONAL_THRESHOLD = 125140;

function taperedPA(totalIncome: number): number {
  if (totalIncome <= 100000) return STANDARD_PA;
  return Math.max(0, STANDARD_PA - (totalIncome - 100000) / 2);
}

export function calculateUkDividendTax(otherIncome: number, dividendIncome: number, taxYear: string): UkDividendTaxResult {
  const rates = UK_DIVIDEND_TAX_YEARS[taxYear] ?? UK_DIVIDEND_TAX_YEARS["2026-27"];
  const totalIncome = otherIncome + dividendIncome;
  const pa = taperedPA(totalIncome);

  const paUsedByOther = Math.min(otherIncome, pa);
  const remainingPA = Math.max(0, pa - paUsedByOther);
  const paUsedByDividends = Math.min(remainingPA, dividendIncome);

  const divAfterPA = Math.max(0, dividendIncome - paUsedByDividends);
  const allowanceUsed = Math.min(rates.dividendAllowance, divAfterPA);
  const taxableDividends = divAfterPA - allowanceUsed;

  const floor = otherIncome + paUsedByDividends + allowanceUsed;

  const basicRemaining = Math.max(0, BASIC_THRESHOLD - floor);
  const inBasic = Math.min(taxableDividends, basicRemaining);
  const afterBasic = taxableDividends - inBasic;

  const higherRemaining = Math.max(0, ADDITIONAL_THRESHOLD - Math.max(floor, BASIC_THRESHOLD));
  const inHigher = Math.min(afterBasic, higherRemaining);
  const inAdditional = afterBasic - inHigher;

  const taxAtBasic = inBasic * (rates.basicRate / 100);
  const taxAtHigher = inHigher * (rates.higherRate / 100);
  const taxAtAdditional = inAdditional * (rates.additionalRate / 100);
  const totalDividendTax = taxAtBasic + taxAtHigher + taxAtAdditional;

  return {
    totalDividendTax,
    netDividendIncome: dividendIncome - totalDividendTax,
    effectiveRate: dividendIncome > 0 ? (totalDividendTax / dividendIncome) * 100 : 0,
    taxFreeAmount: paUsedByDividends + allowanceUsed,
    taxAtBasic, taxAtHigher, taxAtAdditional,
  };
}

export function validateUkDividendTaxInputs(otherIncome: number, dividendIncome: number): string | null {
  if (otherIncome < 0) return "Other income cannot be negative.";
  if (dividendIncome <= 0) return "Enter a dividend income greater than zero.";
  return null;
}