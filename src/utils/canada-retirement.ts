export interface CanadaRetirementResult {
  rrspBalance: number;
  tfsaBalance: number;
  totalBalance: number;
  totalContributions: number;
  totalGrowth: number;
  yearsToRetirement: number;
}

const TFSA_ANNUAL_LIMIT_2026 = 7000;
const RRSP_ANNUAL_LIMIT_2026 = 33810;

export function calculateCanadaRetirement(
  currentAge: number,
  retirementAge: number,
  currentRrspBalance: number,
  currentTfsaBalance: number,
  annualRrspContribution: number,
  annualTfsaContribution: number,
  expectedReturn: number
): CanadaRetirementResult {
  const yearsToRetirement = Math.max(retirementAge - currentAge, 0);

  const cappedRrsp = Math.min(annualRrspContribution, RRSP_ANNUAL_LIMIT_2026);
  const cappedTfsa = Math.min(annualTfsaContribution, TFSA_ANNUAL_LIMIT_2026);

  let rrspBalance = currentRrspBalance;
  let tfsaBalance = currentTfsaBalance;
  let totalContributions = 0;

  for (let i = 0; i < yearsToRetirement; i++) {
    rrspBalance = rrspBalance * (1 + expectedReturn / 100) + cappedRrsp;
    tfsaBalance = tfsaBalance * (1 + expectedReturn / 100) + cappedTfsa;
    totalContributions += cappedRrsp + cappedTfsa;
  }

  const totalBalance = rrspBalance + tfsaBalance;
  const totalGrowth = totalBalance - currentRrspBalance - currentTfsaBalance - totalContributions;

  return { rrspBalance, tfsaBalance, totalBalance, totalContributions, totalGrowth, yearsToRetirement };
}

export function validateCanadaRetirementInputs(
  currentAge: number,
  retirementAge: number,
  annualRrspContribution: number,
  annualTfsaContribution: number
): string | null {
  if (currentAge <= 0) return "Current age must be greater than zero.";
  if (retirementAge <= currentAge) return "Retirement age must be greater than current age.";
  if (annualRrspContribution > RRSP_ANNUAL_LIMIT_2026) return `2026 RRSP limit is $${RRSP_ANNUAL_LIMIT_2026.toLocaleString()} — adjust your annual RRSP contribution.`;
  if (annualTfsaContribution > TFSA_ANNUAL_LIMIT_2026) return `2026 TFSA limit is $${TFSA_ANNUAL_LIMIT_2026.toLocaleString()} — adjust your annual TFSA contribution.`;
  return null;
}