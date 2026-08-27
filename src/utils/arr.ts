export interface ARRResult {
  currentARR: number;
  netNewMRR: number;
  netNewARR: number;
  monthlyGrowthRate: number;
  projectedMRR: number;
  projectedARR: number;
  arrGrowthRate: number;
}

export function calculateARR(
  currentMRR: number,
  newBusinessMRR: number,
  expansionMRR: number,
  contractionMRR: number,
  churnedMRR: number,
  projectionMonths: number
): ARRResult {
  const currentARR = currentMRR * 12;
  const netNewMRR = newBusinessMRR + expansionMRR - contractionMRR - churnedMRR;
  const netNewARR = netNewMRR * 12;

  const monthlyGrowthRate = currentMRR > 0 ? netNewMRR / currentMRR : 0;
  const projectedMRR = currentMRR * Math.pow(1 + monthlyGrowthRate, projectionMonths);
  const projectedARR = projectedMRR * 12;

  const arrGrowthRate = currentARR > 0 ? (netNewARR / currentARR) * 100 : 0;

  return { currentARR, netNewMRR, netNewARR, monthlyGrowthRate, projectedMRR, projectedARR, arrGrowthRate };
}

export function validateARRInputs(currentMRR: number, projectionMonths: number): string | null {
  if (currentMRR < 0) return "Current MRR cannot be negative.";
  if (projectionMonths <= 0) return "Projection months must be greater than zero.";
  return null;
}