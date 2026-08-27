export interface EITCResult {
  credit: number;
  eligible: boolean;
  reason: string | null;
  maxCredit: number;
  phaseoutRate: number;
}

type FilingStatus = "single" | "hoh" | "mfj" | "mfs" | "widowed";

interface EITCParams {
  creditRate: number;
  earnedIncomeAmount: number;
  maxCredit: number;
  thresholdPhaseout: number;
  completedPhaseout: number;
}

const INVESTMENT_LIMIT: Record<number, number> = { 2025: 11950, 2026: 12200 };

// IRS Rev. Proc. 2024-40 (2025) / Rev. Proc. 2025 projections (2026)
const TABLE: Record<number, Record<"single" | "mfj", EITCParams[]>> = {
  2025: {
    single: [
      { creditRate: 0.0765, earnedIncomeAmount: 8490, maxCredit: 649, thresholdPhaseout: 10620, completedPhaseout: 19104 },
      { creditRate: 0.34, earnedIncomeAmount: 12730, maxCredit: 4328, thresholdPhaseout: 23350, completedPhaseout: 50434 },
      { creditRate: 0.40, earnedIncomeAmount: 17880, maxCredit: 7152, thresholdPhaseout: 23350, completedPhaseout: 57310 },
      { creditRate: 0.45, earnedIncomeAmount: 17880, maxCredit: 8046, thresholdPhaseout: 23350, completedPhaseout: 61555 },
    ],
    mfj: [
      { creditRate: 0.0765, earnedIncomeAmount: 8490, maxCredit: 649, thresholdPhaseout: 17730, completedPhaseout: 26214 },
      { creditRate: 0.34, earnedIncomeAmount: 12730, maxCredit: 4328, thresholdPhaseout: 30470, completedPhaseout: 57554 },
      { creditRate: 0.40, earnedIncomeAmount: 17880, maxCredit: 7152, thresholdPhaseout: 30470, completedPhaseout: 64430 },
      { creditRate: 0.45, earnedIncomeAmount: 17880, maxCredit: 8046, thresholdPhaseout: 30470, completedPhaseout: 68675 },
    ],
  },
  2026: {
    single: [
      { creditRate: 0.0765, earnedIncomeAmount: 8680, maxCredit: 664, thresholdPhaseout: 10860, completedPhaseout: 19540 },
      { creditRate: 0.34, earnedIncomeAmount: 13020, maxCredit: 4427, thresholdPhaseout: 23890, completedPhaseout: 51593 },
      { creditRate: 0.40, earnedIncomeAmount: 18290, maxCredit: 7316, thresholdPhaseout: 23890, completedPhaseout: 58629 },
      { creditRate: 0.45, earnedIncomeAmount: 18290, maxCredit: 8231, thresholdPhaseout: 23890, completedPhaseout: 62974 },
    ],
    mfj: [
      { creditRate: 0.0765, earnedIncomeAmount: 8680, maxCredit: 664, thresholdPhaseout: 18140, completedPhaseout: 26820 },
      { creditRate: 0.34, earnedIncomeAmount: 13020, maxCredit: 4427, thresholdPhaseout: 31160, completedPhaseout: 58863 },
      { creditRate: 0.40, earnedIncomeAmount: 18290, maxCredit: 7316, thresholdPhaseout: 31160, completedPhaseout: 65899 },
      { creditRate: 0.45, earnedIncomeAmount: 18290, maxCredit: 8231, thresholdPhaseout: 31160, completedPhaseout: 70224 },
    ],
  },
};

export function calculateEITC(
  earnedIncome: number,
  agi: number,
  filingStatus: FilingStatus,
  qualifyingChildren: number,
  investmentIncome: number,
  taxYear: number
): EITCResult {
  if (filingStatus === "mfs") {
    return { credit: 0, eligible: false, reason: "Married Filing Separately is not eligible for the EITC.", maxCredit: 0, phaseoutRate: 0 };
  }

  const invLimit = INVESTMENT_LIMIT[taxYear] ?? INVESTMENT_LIMIT[2025];
  if (investmentIncome > invLimit) {
    return { credit: 0, eligible: false, reason: `Investment income exceeds the $${invLimit.toLocaleString()} limit.`, maxCredit: 0, phaseoutRate: 0 };
  }

  const bucket = filingStatus === "mfj" ? "mfj" : "single";
  const kids = Math.min(Math.max(Math.floor(qualifyingChildren), 0), 3);
  const table = TABLE[taxYear] ?? TABLE[2025];
  const p = table[bucket][kids];

  const relevantIncome = Math.max(earnedIncome, agi);
  if (relevantIncome >= p.completedPhaseout || earnedIncome <= 0) {
    return { credit: 0, eligible: earnedIncome > 0, reason: earnedIncome <= 0 ? "You must have earned income to qualify." : "Income exceeds the eligibility limit for this filing status and family size.", maxCredit: p.maxCredit, phaseoutRate: 0 };
  }

  const phaseoutRate = p.maxCredit / (p.completedPhaseout - p.thresholdPhaseout);
  const phasedIn = Math.min(earnedIncome * p.creditRate, p.maxCredit);
  const reduction = Math.max(0, relevantIncome - p.thresholdPhaseout) * phaseoutRate;
  const credit = Math.max(0, Math.round(phasedIn - reduction));

  return { credit, eligible: credit > 0, reason: credit > 0 ? null : "Calculated credit rounds to $0 at this income level.", maxCredit: p.maxCredit, phaseoutRate };
}

export function validateEITCInputs(earnedIncome: number, agi: number): string | null {
  if (earnedIncome < 0) return "Earned income cannot be negative.";
  if (agi < 0) return "AGI cannot be negative.";
  if (earnedIncome === 0 && agi === 0) return "Enter your earned income to calculate the credit.";
  return null;
}
