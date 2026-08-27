export interface RothIRAResult {
  projectedBalance: number;
  totalContributions: number;
  investmentGrowth: number;
  yearsInvested: number;
}

export function calculateRothIRA(
  currentAge: number,
  retirementAge: number,
  currentBalance: number,
  annualContribution: number,
  expectedReturn: number
): RothIRAResult {
  const yearsInvested = Math.max(retirementAge - currentAge, 0);
  let balance = currentBalance;
  let totalContributions = 0;

  for (let i = 0; i < yearsInvested; i++) {
    balance = balance * (1 + expectedReturn / 100) + annualContribution;
    totalContributions += annualContribution;
  }

  const investmentGrowth = balance - currentBalance - totalContributions;

  return { projectedBalance: balance, totalContributions, investmentGrowth, yearsInvested };
}

export function validateRothIRAInputs(currentAge: number, retirementAge: number, annualContribution: number): string | null {
  if (currentAge <= 0) return "Current age must be greater than zero.";
  if (retirementAge <= currentAge) return "Retirement age must be greater than current age.";
  if (annualContribution > 8600) return "2026 Roth IRA limit is $8,600 (age 50+) or $7,500 (under 50) — adjust your annual contribution.";
  return null;
}