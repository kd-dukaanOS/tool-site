import { round } from "./calculator";

export interface BMIResult {
  value: number;
  category: "Underweight" | "Normal weight" | "Overweight" | "Obese";
}

export interface HealthyWeightRange {
  min: number;
  max: number;
}

export function calculateBMI(
  weightKg: number,
  heightCm: number
): BMIResult {

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  let category: BMIResult["category"] = "Normal weight";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  return { value: round(bmi, 1), category };
}

export function healthyWeightRange(
  heightCm: number
): HealthyWeightRange {

  const heightM = heightCm / 100;

  return {
    min: round(18.5 * heightM * heightM, 1),
    max: round(24.9 * heightM * heightM, 1),
  };
}

export function bmiInsight(
  weightKg: number,
  heightCm: number,
  bmi: BMIResult
): string {

  const range = healthyWeightRange(heightCm);

  if (bmi.category === "Normal weight") {
    return `You're within the healthy weight range (${range.min}\u2013${range.max} kg) for your height.`;
  }

  if (bmi.category === "Underweight") {
    const diff = round(range.min - weightKg, 1);
    return `You are about ${diff} kg below the healthy range. Reaching ${range.min} kg would bring your BMI into the normal range.`;
  }

  const diff = round(weightKg - range.max, 1);
  return `You are about ${diff} kg above the healthy range. Reaching ${range.max} kg would bring your BMI into the normal range.`;
}

export function validateBMIInputs(
  weightKg: number,
  heightCm: number
): string | null {

  if (!weightKg || weightKg <= 0) return "Please enter a valid weight.";
  if (!heightCm || heightCm <= 0) return "Please enter a valid height.";
  if (weightKg > 500) return "Please enter a realistic weight.";
  if (heightCm > 300) return "Please enter a realistic height.";

  return null;
}

export function copyBMISummary(
  weightKg: number,
  heightCm: number,
  bmi: BMIResult
): string {

  const range = healthyWeightRange(heightCm);

  return `
BMI Summary

Weight: ${weightKg} kg
Height: ${heightCm} cm

BMI: ${bmi.value}
Category: ${bmi.category}

Healthy Weight Range: ${range.min} - ${range.max} kg
`.trim();
}
