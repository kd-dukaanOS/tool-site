export interface PresentValueResult {
  presentValue: number;
  totalFutureValue: number;
  discountAmount: number;
}

export function calculatePresentValue(
  futureValue: number,
  discountRate: number,
  years: number,
  compoundingFrequency: number
): PresentValueResult {
  const totalPeriods = years * compoundingFrequency;
  const periodicRate = discountRate / 100 / compoundingFrequency;

  const presentValue = futureValue / Math.pow(1 + periodicRate, totalPeriods);
  const discountAmount = futureValue - presentValue;

  return { presentValue, totalFutureValue: futureValue, discountAmount };
}

export function validatePresentValueInputs(futureValue: number, years: number, discountRate: number, lang: "en" | "es" = "en"): string | null {
  if (futureValue <= 0) return lang === "es" ? "El valor futuro debe ser mayor a cero." : "Future value must be greater than zero.";
  if (years <= 0) return lang === "es" ? "El número de años debe ser mayor a cero." : "Number of years must be greater than zero.";
  if (discountRate < -100) return lang === "es" ? "La tasa de descuento no es válida." : "Discount rate is invalid.";
  return null;
}