export interface IRAResult {
  contributionLimit: number;
  maxAllowedContribution: number;
  deductibleAmount: number;
  nondeductibleAmount: number;
  taxSaved: number;
  deductionStatus: "full" | "partial" | "none" | "full-no-coverage";
}

type FilingStatus = "single" | "hoh" | "mfj" | "mfs";
type CoverageStatus = "none" | "self" | "spouse-only";

const CONTRIB_LIMIT: Record<number, { base: number; catchUp: number }> = {
  2025: { base: 7000, catchUp: 1000 },
  2026: { base: 7500, catchUp: 1100 },
};

const PHASEOUT: Record<number, Record<string, [number, number]>> = {
  2025: {
    single: [79000, 89000],
    hoh: [79000, 89000],
    mfj: [126000, 146000],
    mfs: [0, 10000],
    "spouse-only": [236000, 246000],
  },
  2026: {
    single: [81000, 91000],
    hoh: [81000, 91000],
    mfj: [129000, 149000],
    mfs: [0, 10000],
    "spouse-only": [242000, 252000],
  },
};

export function calculateTraditionalIRA(
  magi: number,
  filingStatus: FilingStatus,
  coverage: CoverageStatus,
  age: number,
  contribution: number,
  marginalTaxRate: number,
  taxYear: number
): IRAResult {
  const limits = CONTRIB_LIMIT[taxYear] ?? CONTRIB_LIMIT[2025];
  const contributionLimit = limits.base + (age >= 50 ? limits.catchUp : 0);
  const maxAllowedContribution = Math.min(Math.max(contribution, 0), contributionLimit);

  if (coverage === "none") {
    const deductibleAmount = maxAllowedContribution;
    return {
      contributionLimit,
      maxAllowedContribution,
      deductibleAmount,
      nondeductibleAmount: 0,
      taxSaved: deductibleAmount * (marginalTaxRate / 100),
      deductionStatus: "full-no-coverage",
    };
  }

  const rangeKey = coverage === "spouse-only" ? "spouse-only" : filingStatus;
  const table = PHASEOUT[taxYear] ?? PHASEOUT[2025];
  const [start, end] = table[rangeKey] ?? table.single;

  let deductibleAmount: number;
  let status: IRAResult["deductionStatus"];

  if (magi <= start) {
    deductibleAmount = maxAllowedContribution;
    status = "full";
  } else if (magi >= end) {
    deductibleAmount = 0;
    status = "none";
  } else {
    const reduction = ((magi - start) / (end - start)) * maxAllowedContribution;
    deductibleAmount = Math.max(Math.round((maxAllowedContribution - reduction) / 10) * 10, 200);
    deductibleAmount = Math.min(deductibleAmount, maxAllowedContribution);
    status = "partial";
  }

  const nondeductibleAmount = maxAllowedContribution - deductibleAmount;

  return {
    contributionLimit,
    maxAllowedContribution,
    deductibleAmount,
    nondeductibleAmount,
    taxSaved: deductibleAmount * (marginalTaxRate / 100),
    deductionStatus: status,
  };
}

export function validateIRAInputs(magi: number, contribution: number, age: number): string | null {
  if (magi < 0) return "MAGI cannot be negative.";
  if (contribution <= 0) return "Contribution amount must be greater than zero.";
  if (age < 18 || age > 100) return "Enter a valid age.";
  return null;
}