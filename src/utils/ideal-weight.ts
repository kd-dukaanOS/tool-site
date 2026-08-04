export interface IdealWeightInput {
  gender: "male" | "female";
  heightCm: number;
}

export interface IdealWeightResult {
  idealWeightKg: number;
  healthyRangeMinKg: number;
  healthyRangeMaxKg: number;
}

export function validateIdealWeightInput(i: IdealWeightInput): string | null {
  if (i.heightCm < 100 || i.heightCm > 250) return "Enter a realistic height (100-250 cm).";
  return null;
}

export function calculateIdealWeight(i: IdealWeightInput): IdealWeightResult {
  const heightInches = i.heightCm / 2.54;
  const inchesOver5Feet = Math.max(0, heightInches - 60);

  const idealWeightKg =
    i.gender === "male"
      ? 50 + 2.3 * inchesOver5Feet
      : 45.5 + 2.3 * inchesOver5Feet;

  const heightM = i.heightCm / 100;
  const healthyRangeMinKg = 18.5 * heightM * heightM;
  const healthyRangeMaxKg = 24.9 * heightM * heightM;

  return {
    idealWeightKg: Math.round(idealWeightKg * 10) / 10,
    healthyRangeMinKg: Math.round(healthyRangeMinKg * 10) / 10,
    healthyRangeMaxKg: Math.round(healthyRangeMaxKg * 10) / 10,
  };
}

export function copyIdealWeightSummary(i: IdealWeightInput, r: IdealWeightResult): string {
  return `
Ideal Weight Summary

Gender: ${i.gender}
Height: ${i.heightCm} cm

Ideal Weight: ${r.idealWeightKg} kg
Healthy Weight Range: ${r.healthyRangeMinKg} kg - ${r.healthyRangeMaxKg} kg
`.trim();
}