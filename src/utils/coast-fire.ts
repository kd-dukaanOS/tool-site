export interface CoastFireResult {
  fiNumberAtRetirement: number;
  coastFireNumber: number;
  isCoastFireReached: boolean;
  yearsToCoastFire: number | null;
  coastFireAge: number | null;
  projectedBalanceAtRetirement: number;
}

export function calculateCoastFire(
  currentAge: number,
  currentSavings: number,
  targetRetirementAge: number,
  annualExpenses: number,
  annualContribution: number,
  expectedReturnRate: number,
  inflationRate: number,
  withdrawalRate: number
): CoastFireResult {
  const realAnnualReturn = (1 + expectedReturnRate / 100) / (1 + inflationRate / 100) - 1;
  const monthlyRealReturn = Math.pow(1 + realAnnualReturn, 1 / 12) - 1;
  const monthlyContribution = annualContribution / 12;
  const yearsToRetirement = Math.max(targetRetirementAge - currentAge, 0);

  const fiNumberAtRetirement = annualExpenses / (withdrawalRate / 100);
  const coastFireNumber = fiNumberAtRetirement / Math.pow(1 + realAnnualReturn, yearsToRetirement);
  const isCoastFireReached = currentSavings >= coastFireNumber;

  const projectedBalanceAtRetirement = currentSavings * Math.pow(1 + realAnnualReturn, yearsToRetirement);

  let yearsToCoastFire: number | null = isCoastFireReached ? 0 : null;
  if (!isCoastFireReached) {
    let balance = currentSavings;
    const maxMonths = yearsToRetirement * 12;
    for (let month = 1; month <= maxMonths; month++) {
      balance = balance * (1 + monthlyRealReturn) + monthlyContribution;
      const remainingYears = yearsToRetirement - month / 12;
      const requiredNow = fiNumberAtRetirement / Math.pow(1 + realAnnualReturn, remainingYears);
      if (balance >= requiredNow) {
        yearsToCoastFire = Math.round((month / 12) * 10) / 10;
        break;
      }
    }
  }

  const coastFireAge = yearsToCoastFire !== null ? Math.round((currentAge + yearsToCoastFire) * 10) / 10 : null;

  return { fiNumberAtRetirement, coastFireNumber, isCoastFireReached, yearsToCoastFire, coastFireAge, projectedBalanceAtRetirement };
}

export function validateCoastFireInputs(currentAge: number, targetRetirementAge: number, annualExpenses: number, withdrawalRate: number, lang: "en" | "es" = "en"): string | null {
  if (lang === "es") {
    if (currentAge <= 0 || currentAge > 100) return "Ingresa una edad actual válida.";
    if (targetRetirementAge <= currentAge) return "La edad objetivo de jubilación debe ser mayor que la edad actual.";
    if (annualExpenses <= 0) return "Los gastos anuales deben ser mayores que cero.";
    if (withdrawalRate <= 0 || withdrawalRate > 20) return "La tasa de retiro debe estar entre 0 y 20%.";
    return null;
  }
  if (currentAge <= 0 || currentAge > 100) return "Enter a valid current age.";
  if (targetRetirementAge <= currentAge) return "Target retirement age must be greater than current age.";
  if (annualExpenses <= 0) return "Annual expenses must be greater than zero.";
  if (withdrawalRate <= 0 || withdrawalRate > 20) return "Withdrawal rate must be between 0 and 20%.";
  return null;
}