export interface BurnRateResult {
  grossBurnRate: number;
  netBurnRate: number;
  runwayMonths: number | null;
}

export function calculateBurnRate(
  currentCashBalance: number,
  monthlyRevenue: number,
  monthlyOperatingExpenses: number
): BurnRateResult {
  const grossBurnRate = monthlyOperatingExpenses;
  const netBurnRate = monthlyOperatingExpenses - monthlyRevenue;
  const runwayMonths = netBurnRate > 0 ? Math.round((currentCashBalance / netBurnRate) * 10) / 10 : null;

  return { grossBurnRate, netBurnRate, runwayMonths };
}

export function validateBurnRateInputs(currentCashBalance: number, monthlyOperatingExpenses: number, lang: "en" | "es" = "en"): string | null {
  if (lang === "es") {
    if (currentCashBalance < 0) return "El saldo de caja actual no puede ser negativo.";
    if (monthlyOperatingExpenses <= 0) return "Los gastos operativos mensuales deben ser mayores que cero.";
    return null;
  }
  if (currentCashBalance < 0) return "Current cash balance cannot be negative.";
  if (monthlyOperatingExpenses <= 0) return "Monthly operating expenses must be greater than zero.";
  return null;
}