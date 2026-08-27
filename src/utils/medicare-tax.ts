export interface MedicareTaxResult {
  regularMedicareTax: number;
  additionalMedicareTax: number;
  totalMedicareTax: number;
  employerMedicareTax: number;
  additionalMedicareThreshold: number;
  wagesOverThreshold: number;
  isSelfEmployed: boolean;
}

const MEDICARE_RATE = 0.0145;
const MEDICARE_SE_RATE = 0.029;
const ADDITIONAL_MEDICARE_RATE = 0.009;

const ADDITIONAL_THRESHOLDS: Record<string, number> = {
  single: 200000,
  mfj: 250000,
  mfs: 125000,
  hoh: 200000,
};

export function calculateMedicareTax(
  annualWages: number,
  filingStatus: "single" | "mfj" | "mfs" | "hoh",
  isSelfEmployed: boolean
): MedicareTaxResult {
  const threshold = ADDITIONAL_THRESHOLDS[filingStatus];
  const baseRate = isSelfEmployed ? MEDICARE_SE_RATE : MEDICARE_RATE;

  const regularMedicareTax = annualWages * baseRate;
  const wagesOverThreshold = Math.max(annualWages - threshold, 0);
  const additionalMedicareTax = wagesOverThreshold * ADDITIONAL_MEDICARE_RATE;
  const totalMedicareTax = regularMedicareTax + additionalMedicareTax;
  const employerMedicareTax = isSelfEmployed ? 0 : annualWages * MEDICARE_RATE;

  return {
    regularMedicareTax,
    additionalMedicareTax,
    totalMedicareTax,
    employerMedicareTax,
    additionalMedicareThreshold: threshold,
    wagesOverThreshold,
    isSelfEmployed,
  };
}

export function validateMedicareTaxInputs(annualWages: number): string | null {
  if (annualWages <= 0) return "Annual wages must be greater than zero.";
  return null;
}