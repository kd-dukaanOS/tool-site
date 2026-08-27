export interface TFSAResult {
  totalRoomSinceEligible: number;
  availableRoom: number;
  maxAllowedContribution: number;
  excessContribution: number;
  penaltyTax: number;
  projectedBalance: number;
}

// CRA annual TFSA dollar limits by year
const ANNUAL_LIMITS: Record<number, number> = {
  2009: 5000, 2010: 5000, 2011: 5000, 2012: 5000, 2013: 5500, 2014: 5500,
  2015: 10000, 2016: 5500, 2017: 5500, 2018: 5500, 2019: 6000, 2020: 6000,
  2021: 6000, 2022: 6000, 2023: 6500, 2024: 7000, 2025: 7000, 2026: 7000,
};

export function getCumulativeRoomSince(eligibleYear: number, uptoYear: number): number {
  let total = 0;
  for (let year = Math.max(eligibleYear, 2009); year <= uptoYear; year++) {
    total += ANNUAL_LIMITS[year] ?? 7000;
  }
  return total;
}

export function calculateTFSA(
  eligibleYear: number,
  currentYear: number,
  totalContributedToDate: number,
  withdrawalsThisYear: number,
  plannedContribution: number,
  expectedReturn: number,
  yearsToGrow: number
): TFSAResult {
  const totalRoomSinceEligible = getCumulativeRoomSince(eligibleYear, currentYear);
  const availableRoom = Math.max(totalRoomSinceEligible - totalContributedToDate + withdrawalsThisYear, 0);

  const maxAllowedContribution = Math.min(plannedContribution, availableRoom);
  const excessContribution = Math.max(plannedContribution - availableRoom, 0);
  const penaltyTax = excessContribution * 0.01; // 1% per month CRA penalty on excess

  let balance = totalContributedToDate + maxAllowedContribution;
  for (let i = 0; i < yearsToGrow; i++) {
    balance = balance * (1 + expectedReturn / 100);
  }

  return { totalRoomSinceEligible, availableRoom, maxAllowedContribution, excessContribution, penaltyTax, projectedBalance: balance };
}

export function validateTFSAInputs(eligibleYear: number, currentYear: number, plannedContribution: number): string | null {
  if (eligibleYear < 2009 || eligibleYear > currentYear) return "Eligible year must be between 2009 and the current year.";
  if (plannedContribution < 0) return "Planned contribution cannot be negative.";
  return null;
}