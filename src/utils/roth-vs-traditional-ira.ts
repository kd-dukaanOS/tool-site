export interface RothVsTraditionalResult {
  contributionLimit: number;
  rothMaxContribution: number;
  rothEligibility: "full" | "partial" | "none";
  traditionalFV: number;
  rothFV: number;
  betterOption: "roth" | "traditional";
  difference: number;
}

type FilingStatus = "single" | "hoh" | "mfj" | "mfs";

const CONTRIB_LIMIT: Record<number, { base: number; catchUp: number }> = {
  2025: { base: 7000, catchUp: 1000 },
  2026: { base: 7500, catchUp: 1100 },
};

const ROTH_PHASEOUT: Record<number, Record<FilingStatus, [number, number]>> = {
  2025: { single: [150000, 165000], hoh: [150000, 165000], mfj: [236000, 246000], mfs: [0, 10000] },
  2026: { single: [153000, 168000], hoh: [153000, 168000], mfj: [242000, 252000], mfs: [0, 10000] },
};

export function calculateRothVsTraditional(
  magi: number,
  filingStatus: FilingStatus,
  age: number,
  annualContribution: number,
  currentTaxRate: number,
  retirementTaxRate: number,
  annualReturnRate: number,
  yearsToGrow: number,
  taxYear: number
): RothVsTraditionalResult {
  const limits = CONTRIB_LIMIT[taxYear] ?? CONTRIB_LIMIT[2025];
  const contributionLimit = limits.base + (age >= 50 ? limits.catchUp : 0);
  const contribution = Math.min(Math.max(annualContribution, 0), contributionLimit);

  const [start, end] = (ROTH_PHASEOUT[taxYear] ?? ROTH_PHASEOUT[2025])[filingStatus];
  let rothEligibility: RothVsTraditionalResult["rothEligibility"];
  let rothMaxContribution: number;

  if (magi <= start) {
    rothEligibility = "full";
    rothMaxContribution = contribution;
  } else if (magi >= end) {
    rothEligibility = "none";
    rothMaxContribution = 0;
  } else {
    rothEligibility = "partial";
    const reduction = ((magi - start) / (end - start)) * contribution;
    rothMaxContribution = Math.max(Math.round((contribution - reduction) / 10) * 10, 200);
  }

  const growth = Math.pow(1 + annualReturnRate / 100, yearsToGrow);

  // Same pre-tax income X allocated either way, for apples-to-apples comparison
  const traditionalFV = contribution * growth * (1 - retirementTaxRate / 100);
  const rothFV = rothMaxContribution * (1 - currentTaxRate / 100) * growth;

  return {
    contributionLimit,
    rothMaxContribution,
    rothEligibility,
    traditionalFV,
    rothFV,
    betterOption: rothFV >= traditionalFV ? "roth" : "traditional",
    difference: Math.abs(rothFV - traditionalFV),
  };
}

export function validateRothVsTraditionalInputs(magi: number, annualContribution: number, yearsToGrow: number, lang: "en" | "es" = "en"): string | null {
  const msg = lang === "es" ? {
    magi: "El MAGI no puede ser negativo.",
    contrib: "El aporte anual debe ser mayor a cero.",
    years: "Los años para crecer deben ser mayor a cero.",
  } : {
    magi: "MAGI cannot be negative.",
    contrib: "Annual contribution must be greater than zero.",
    years: "Years to grow must be greater than zero.",
  };
  if (magi < 0) return msg.magi;
  if (annualContribution <= 0) return msg.contrib;
  if (yearsToGrow <= 0) return msg.years;
  return null;
}