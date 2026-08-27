export interface EmergencyFundResult {
  targetAmount: number;
  progressPercent: number;
  remainingAmount: number;
  monthsToGoal: number | null;
}

export function calculateEmergencyFund(
  monthlyExpenses: number,
  currentSavings: number,
  targetMonths: number,
  monthlySavingsCapacity: number
): EmergencyFundResult {
  const targetAmount = monthlyExpenses * targetMonths;
  const progressPercent = targetAmount > 0 ? Math.min((currentSavings / targetAmount) * 100, 100) : 0;
  const remainingAmount = Math.max(targetAmount - currentSavings, 0);
  const monthsToGoal =
    monthlySavingsCapacity > 0 && remainingAmount > 0
      ? Math.ceil(remainingAmount / monthlySavingsCapacity)
      : remainingAmount === 0
      ? 0
      : null;

  return { targetAmount, progressPercent, remainingAmount, monthsToGoal };
}

export function validateEmergencyFundInputs(monthlyExpenses: number, targetMonths: number): string | null {
  if (monthlyExpenses <= 0) return "Monthly expenses must be greater than zero.";
  if (targetMonths <= 0) return "Target months must be greater than zero.";
  return null;
}