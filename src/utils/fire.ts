export interface FireResult {
  fiNumber: number;
  yearsToFi: number | null;
  fiAge: number | null;
  projectedBalanceIn10Years: number;
  savingsRatePercent: number;
}

export function calculateFire(
  currentAge: number,
  currentSavings: number,
  annualIncome: number,
  annualExpenses: number,
  annualContribution: number,
  expectedReturnRate: number,
  inflationRate: number,
  withdrawalRate: number
): FireResult {
  const realAnnualReturn = (1 + expectedReturnRate / 100) / (1 + inflationRate / 100) - 1;
  const monthlyRealReturn = Math.pow(1 + realAnnualReturn, 1 / 12) - 1;
  const monthlyContribution = annualContribution / 12;
  const fiNumber = annualExpenses / (withdrawalRate / 100);

  let balance = currentSavings;
  let yearsToFi: number | null = null;
  let projectedBalanceIn10Years = currentSavings;
  const maxMonths = 75 * 12;

  for (let month = 1; month <= maxMonths; month++) {
    balance = balance * (1 + monthlyRealReturn) + monthlyContribution;
    if (month === 120) projectedBalanceIn10Years = balance;
    if (yearsToFi === null && balance >= fiNumber) {
      yearsToFi = Math.round((month / 12) * 10) / 10;
    }
  }

  const fiAge = yearsToFi !== null ? Math.round((currentAge + yearsToFi) * 10) / 10 : null;
  const savingsRatePercent = annualIncome > 0 ? (annualContribution / annualIncome) * 100 : 0;

  return { fiNumber, yearsToFi, fiAge, projectedBalanceIn10Years, savingsRatePercent };
}

export function validateFireInputs(currentAge: number, annualExpenses: number, withdrawalRate: number, lang: "en" | "es" = "en"): string | null {
  if (lang === "es") {
    if (currentAge <= 0 || currentAge > 100) return "Ingresa una edad actual válida.";
    if (annualExpenses <= 0) return "Los gastos anuales deben ser mayores que cero.";
    if (withdrawalRate <= 0 || withdrawalRate > 20) return "La tasa de retiro debe estar entre 0 y 20%.";
    return null;
  }
  if (currentAge <= 0 || currentAge > 100) return "Enter a valid current age.";
  if (annualExpenses <= 0) return "Annual expenses must be greater than zero.";
  if (withdrawalRate <= 0 || withdrawalRate > 20) return "Withdrawal rate must be between 0 and 20%.";
  return null;
}