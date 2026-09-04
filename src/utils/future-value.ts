export interface FutureValueResult {
  futureValue: number;
  totalContributions: number;
  investmentGrowth: number;
  yearsInvested: number;
}

export function calculateFutureValue(
  presentValue: number,
  monthlyContribution: number,
  annualReturn: number,
  years: number,
  compoundingFrequency: number
): FutureValueResult {
  const totalPeriods = years * compoundingFrequency;
  const periodicRate = annualReturn / 100 / compoundingFrequency;
  const contributionPerPeriod = (monthlyContribution * 12) / compoundingFrequency;

  let balance = presentValue;
  let totalContributions = 0;

  for (let i = 0; i < totalPeriods; i++) {
    balance = balance * (1 + periodicRate) + contributionPerPeriod;
    totalContributions += contributionPerPeriod;
  }

  const investmentGrowth = balance - presentValue - totalContributions;

  return { futureValue: balance, totalContributions, investmentGrowth, yearsInvested: years };
}

export function validateFutureValueInputs(presentValue: number, years: number, annualReturn: number, lang: "en" | "es" = "en"): string | null {
  if (lang === "es") {
    if (presentValue < 0) return "El valor presente no puede ser negativo.";
    if (years <= 0) return "El número de años debe ser mayor que cero.";
    if (annualReturn < -100) return "La tasa de rendimiento anual no es válida.";
    return null;
  }
  if (presentValue < 0) return "Present value cannot be negative.";
  if (years <= 0) return "Number of years must be greater than zero.";
  if (annualReturn < -100) return "Annual return rate is invalid.";
  return null;
}