export interface RRSPResult {
  contributionRoom: number;
  maxAllowedContribution: number;
  taxSavings: number;
  excessContribution: number;
  penaltyTax: number;
}

const DOLLAR_LIMIT: Record<number, number> = { 2025: 32490, 2026: 33810 };

export function calculateRRSP(
  previousYearEarnedIncome: number,
  unusedContributionRoom: number,
  plannedContribution: number,
  marginalTaxRate: number,
  taxYear: number
): RRSPResult {
  const dollarLimit = DOLLAR_LIMIT[taxYear] ?? DOLLAR_LIMIT[2025];
  const incomeBasedRoom = previousYearEarnedIncome * 0.18;
  const newRoom = Math.min(incomeBasedRoom, dollarLimit);
  const contributionRoom = newRoom + Math.max(unusedContributionRoom, 0);

  const maxAllowedContribution = Math.min(plannedContribution, contributionRoom);
  const taxSavings = maxAllowedContribution * (marginalTaxRate / 100);

  // CRA allows a $2,000 lifetime over-contribution buffer before penalty tax applies
  const overContribution = Math.max(plannedContribution - contributionRoom, 0);
  const excessContribution = Math.max(overContribution - 2000, 0);
  const penaltyTax = excessContribution * 0.01; // 1% per month CRA penalty

  return { contributionRoom, maxAllowedContribution, taxSavings, excessContribution, penaltyTax };
}

export function validateRRSPInputs(previousYearEarnedIncome: number, plannedContribution: number): string | null {
  if (previousYearEarnedIncome < 0) return "Previous year's earned income cannot be negative.";
  if (plannedContribution <= 0) return "Planned contribution must be greater than zero.";
  return null;
}