export interface CTCResult {
  numQualifyingChildren: number;
  numOtherDependents: number;
  baseCreditQualifying: number;
  baseCreditOtherDependents: number;
  totalBaseCredit: number;
  phaseOutReduction: number;
  finalCredit: number;
  refundableCap: number;
  isPhasingOut: boolean;
  incomeOverThreshold: number;
}

const CTC_PER_CHILD = 2200;
const ODC_PER_DEPENDENT = 500;
const ACTC_MAX_PER_CHILD = 1700;
const PHASE_OUT_RATE_PER_1000 = 50;

const THRESHOLDS: Record<string, number> = {
  single: 200000,
  mfj: 400000,
  hoh: 200000,
  mfs: 200000,
};

export function calculateChildTaxCredit(
  magi: number,
  filingStatus: "single" | "mfj" | "hoh" | "mfs",
  numQualifyingChildren: number,
  numOtherDependents: number
): CTCResult {
  const threshold = THRESHOLDS[filingStatus];
  const baseCreditQualifying = numQualifyingChildren * CTC_PER_CHILD;
  const baseCreditOtherDependents = numOtherDependents * ODC_PER_DEPENDENT;
  const totalBaseCredit = baseCreditQualifying + baseCreditOtherDependents;

  const incomeOverThreshold = Math.max(magi - threshold, 0);
  const phaseOutUnits = Math.ceil(incomeOverThreshold / 1000);
  const phaseOutReduction = Math.min(phaseOutUnits * PHASE_OUT_RATE_PER_1000, totalBaseCredit);

  const finalCredit = Math.max(totalBaseCredit - phaseOutReduction, 0);
  const refundableCap = numQualifyingChildren * ACTC_MAX_PER_CHILD;

  return {
    numQualifyingChildren,
    numOtherDependents,
    baseCreditQualifying,
    baseCreditOtherDependents,
    totalBaseCredit,
    phaseOutReduction,
    finalCredit,
    refundableCap,
    isPhasingOut: incomeOverThreshold > 0,
    incomeOverThreshold,
  };
}

export function validateCTCInputs(magi: number, numQualifyingChildren: number, numOtherDependents: number, lang: "en" | "es" = "en"): string | null {
  if (lang === "es") {
    if (magi < 0) return "El ingreso no puede ser negativo.";
    if (numQualifyingChildren < 0 || numOtherDependents < 0) return "El número de dependientes no puede ser negativo.";
    if (numQualifyingChildren === 0 && numOtherDependents === 0) return "Ingresa al menos un hijo calificado o dependiente.";
    return null;
  }
  if (magi < 0) return "Income cannot be negative.";
  if (numQualifyingChildren < 0 || numOtherDependents < 0) return "Number of dependents cannot be negative.";
  if (numQualifyingChildren === 0 && numOtherDependents === 0) return "Enter at least one qualifying child or dependent.";
  return null;
}