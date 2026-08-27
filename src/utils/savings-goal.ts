export interface SavingsGoalResult {
  requiredMonthlySavings: number;
  totalContributions: number;
  interestEarned: number;
  alreadyOnTrack: boolean;
}

export function calculateSavingsGoal(
  targetAmount: number,
  currentSavings: number,
  timeframeMonths: number,
  annualInterestRate: number
): SavingsGoalResult {
  const monthlyRate = annualInterestRate / 100 / 12;
  const futureValueOfCurrent =
    monthlyRate === 0
      ? currentSavings
      : currentSavings * Math.pow(1 + monthlyRate, timeframeMonths);

  if (futureValueOfCurrent >= targetAmount) {
    return { requiredMonthlySavings: 0, totalContributions: 0, interestEarned: futureValueOfCurrent - currentSavings, alreadyOnTrack: true };
  }

  const remaining = targetAmount - futureValueOfCurrent;

  const requiredMonthlySavings =
    monthlyRate === 0
      ? remaining / timeframeMonths
      : (remaining * monthlyRate) / (Math.pow(1 + monthlyRate, timeframeMonths) - 1);

  const totalContributions = requiredMonthlySavings * timeframeMonths;
  const interestEarned = targetAmount - currentSavings - totalContributions;

  return { requiredMonthlySavings, totalContributions, interestEarned, alreadyOnTrack: false };
}

export function validateSavingsGoalInputs(targetAmount: number, timeframeMonths: number): string | null {
  if (targetAmount <= 0) return "Target amount must be greater than zero.";
  if (timeframeMonths <= 0) return "Timeframe must be greater than zero.";
  return null;
}