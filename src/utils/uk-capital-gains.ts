export interface UkCapitalGainsResult {
  totalGain: number;
  taxableGain: number;
  taxAtBasicRate: number;
  taxAtHigherRate: number;
  totalTaxOwed: number;
}

const ANNUAL_EXEMPT_AMOUNT_2026_27 = 3000;
const BASIC_RATE_BAND = 37700;
const BASIC_RATE = 18;
const HIGHER_RATE = 24;

export function calculateUkCapitalGains(
  totalGain: number,
  otherTaxableIncome: number,
  personalAllowance: number
): UkCapitalGainsResult {
  const taxableGain = Math.max(totalGain - ANNUAL_EXEMPT_AMOUNT_2026_27, 0);
  const taxableIncome = Math.max(otherTaxableIncome - personalAllowance, 0);

  const remainingBasicRateBand = Math.max(BASIC_RATE_BAND - taxableIncome, 0);
  const gainAtBasicRate = Math.min(taxableGain, remainingBasicRateBand);
  const gainAtHigherRate = taxableGain - gainAtBasicRate;

  const taxAtBasicRate = gainAtBasicRate * (BASIC_RATE / 100);
  const taxAtHigherRate = gainAtHigherRate * (HIGHER_RATE / 100);
  const totalTaxOwed = taxAtBasicRate + taxAtHigherRate;

  return { totalGain, taxableGain, taxAtBasicRate, taxAtHigherRate, totalTaxOwed };
}

export function validateUkCapitalGainsInputs(totalGain: number): string | null {
  if (totalGain <= 0) return "Enter a total gain greater than zero.";
  return null;
}