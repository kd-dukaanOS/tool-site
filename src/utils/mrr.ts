export interface MrrResult {
  totalMrr: number;
  newMrr: number;
  expansionMrr: number;
  churnedMrr: number;
  contractionMrr: number;
  netNewMrr: number;
  arr: number;
}

export function calculateMrr(
  existingMrr: number,
  newCustomerMrr: number,
  expansionMrr: number,
  churnedMrr: number,
  contractionMrr: number
): MrrResult {
  const netNewMrr = newCustomerMrr + expansionMrr - churnedMrr - contractionMrr;
  const totalMrr = existingMrr + netNewMrr;
  const arr = totalMrr * 12;

  return {
    totalMrr,
    newMrr: newCustomerMrr,
    expansionMrr,
    churnedMrr,
    contractionMrr,
    netNewMrr,
    arr,
  };
}

export function validateMrrInputs(existingMrr: number): string | null {
  if (existingMrr < 0) return "Existing MRR cannot be negative.";
  return null;
}