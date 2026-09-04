export interface ChurnRateResult {
  customerChurnRate: number;
  revenueChurnRate: number;
  netRevenueChurnRate: number;
  customersLost: number;
  revenueChurned: number;
  netRevenueChurned: number;
  projectedCustomersRemaining: number;
}

export function calculateChurnRate(
  customersStartOfPeriod: number,
  customersLost: number,
  mrrStartOfPeriod: number,
  mrrChurned: number,
  mrrExpansion: number,
  projectionMonths: number
): ChurnRateResult {
  const customerChurnRate = customersStartOfPeriod > 0 ? (customersLost / customersStartOfPeriod) * 100 : 0;
  const revenueChurnRate = mrrStartOfPeriod > 0 ? (mrrChurned / mrrStartOfPeriod) * 100 : 0;
  const netRevenueChurned = Math.max(mrrChurned - mrrExpansion, 0);
  const netRevenueChurnRate = mrrStartOfPeriod > 0 ? (netRevenueChurned / mrrStartOfPeriod) * 100 : 0;

  const retentionRate = 1 - customerChurnRate / 100;
  const projectedCustomersRemaining = customersStartOfPeriod * Math.pow(Math.max(retentionRate, 0), projectionMonths);

  return {
    customerChurnRate,
    revenueChurnRate,
    netRevenueChurnRate,
    customersLost,
    revenueChurned: mrrChurned,
    netRevenueChurned,
    projectedCustomersRemaining,
  };
}

export function validateChurnRateInputs(customersStartOfPeriod: number, mrrStartOfPeriod: number, lang: "en" | "es" = "en"): string | null {
  if (lang === "es") {
    if (customersStartOfPeriod <= 0) return "Los clientes al inicio del período deben ser mayores que cero.";
    if (mrrStartOfPeriod < 0) return "El MRR inicial no puede ser negativo.";
    return null;
  }
  if (customersStartOfPeriod <= 0) return "Customers at start of period must be greater than zero.";
  if (mrrStartOfPeriod < 0) return "Starting MRR cannot be negative.";
  return null;
}