export interface DTIResult {
  frontEndRatio: number;
  backEndRatio: number;
  totalMonthlyDebt: number;
  rating: "Excellent" | "Good" | "Acceptable" | "High";
}

export function calculateDTI(
  grossMonthlyIncome: number,
  housingPayment: number,
  otherMonthlyDebts: number
): DTIResult {
  const totalMonthlyDebt = housingPayment + otherMonthlyDebts;

  const frontEndRatio = (housingPayment / grossMonthlyIncome) * 100;
  const backEndRatio = (totalMonthlyDebt / grossMonthlyIncome) * 100;

  let rating: DTIResult["rating"] = "High";
  if (backEndRatio <= 20) rating = "Excellent";
  else if (backEndRatio <= 36) rating = "Good";
  else if (backEndRatio <= 43) rating = "Acceptable";

  return { frontEndRatio, backEndRatio, totalMonthlyDebt, rating };
}

export function maxAffordableDebt(
  grossMonthlyIncome: number,
  targetBackEndRatio = 36
): number {
  return grossMonthlyIncome * (targetBackEndRatio / 100);
}

export function annualToMonthlyIncome(annualIncome: number): number {
  return annualIncome / 12;
}

export function validateDTIInputs(
  income: number,
  housing: number,
  debts: number
): string | null {
  if (!income || income <= 0) return "Please enter a valid monthly income.";
  if (housing < 0) return "Housing payment cannot be negative.";
  if (debts < 0) return "Debt payments cannot be negative.";
  return null;
}