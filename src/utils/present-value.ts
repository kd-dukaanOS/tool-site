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

export function validatePresentValueInputs(futureValue: number, years: number, discountRate: number): string | null {
  if (futureValue <= 0) return "Future value must be greater than zero.";
  if (years <= 0) return "Number of years must be greater than zero.";
  if (discountRate < -100) return "Discount rate is invalid.";
  return null;
}