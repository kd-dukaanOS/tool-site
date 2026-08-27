export interface SSTaxResult {
  taxableWages: number;
  employeeSSTax: number;
  employerSSTax: number;
  selfEmploymentSSTax: number;
  wagesOverCap: number;
  maxPossibleTax: number;
  isAtCap: boolean;
}

const SS_WAGE_BASE_2026 = 184500;
const SS_RATE = 0.062;
const SS_SE_RATE = 0.124;

export function calculateSocialSecurityTax(
  annualWages: number,
  isSelfEmployed: boolean
): SSTaxResult {
  const taxableWages = Math.min(annualWages, SS_WAGE_BASE_2026);
  const wagesOverCap = Math.max(annualWages - SS_WAGE_BASE_2026, 0);
  const isAtCap = annualWages >= SS_WAGE_BASE_2026;

  const employeeSSTax = isSelfEmployed ? 0 : taxableWages * SS_RATE;
  const employerSSTax = isSelfEmployed ? 0 : taxableWages * SS_RATE;
  const selfEmploymentSSTax = isSelfEmployed ? taxableWages * SS_SE_RATE : 0;

  const maxPossibleTax = SS_WAGE_BASE_2026 * (isSelfEmployed ? SS_SE_RATE : SS_RATE);

  return { taxableWages, employeeSSTax, employerSSTax, selfEmploymentSSTax, wagesOverCap, maxPossibleTax, isAtCap };
}

export function validateSSTaxInputs(annualWages: number): string | null {
  if (annualWages <= 0) return "Annual wages must be greater than zero.";
  return null;
}