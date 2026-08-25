export interface RetirementResult {
  projectedSavings: number;
  totalContributions: number;
  totalGrowth: number;
  yearsToRetirement: number;
  monthlyRetirementIncome: number;
}

export function calculateRetirementProjection(
  currentAge: number,
  retirementAge: number,
  currentSavings: number,
  monthlyContribution: number,
  annualReturnPercent: number
): RetirementResult {
  const years = retirementAge - currentAge;
  const months = years * 12;
  const r = annualReturnPercent / 100 / 12;

  const fvCurrent = currentSavings * Math.pow(1 + r, months);

  const fvContributions =
    r === 0
      ? monthlyContribution * months
      : monthlyContribution * ((Math.pow(1 + r, months) - 1) / r);

  const projectedSavings = fvCurrent + fvContributions;
  const totalContributions = currentSavings + monthlyContribution * months;
  const totalGrowth = projectedSavings - totalContributions;

  // 4% safe withdrawal rule, expressed monthly
  const monthlyRetirementIncome = (projectedSavings * 0.04) / 12;

  return {
    projectedSavings,
    totalContributions,
    totalGrowth,
    yearsToRetirement: years,
    monthlyRetirementIncome,
  };
}

export function validateRetirementInputs(
  currentAge: number,
  retirementAge: number,
  monthlyContribution: number
): string | null {
  if (!currentAge || currentAge <= 0) return "Please enter a valid current age.";
  if (!retirementAge || retirementAge <= currentAge) return "Retirement age must be greater than current age.";
  if (monthlyContribution < 0) return "Monthly contribution cannot be negative.";
  return null;
}