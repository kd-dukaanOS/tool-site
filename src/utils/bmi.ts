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

const CATEGORY_ES: Record<BMIResult["category"], string> = {
  "Underweight": "Bajo peso", "Normal weight": "Peso normal", "Overweight": "Sobrepeso", "Obese": "Obesidad",
};

export function bmiInsight(
  weightKg: number,
  heightCm: number,
  bmi: BMIResult,
  lang: "en" | "es" = "en"
): string {

  const range = healthyWeightRange(heightCm);

  if (lang === "es") {
    if (bmi.category === "Normal weight") {
      return `Estás dentro del rango de peso saludable (${range.min}\u2013${range.max} kg) para tu estatura.`;
    }
    if (bmi.category === "Underweight") {
      const diff = round(range.min - weightKg, 1);
      return `Estás aproximadamente ${diff} kg por debajo del rango saludable. Llegar a ${range.min} kg llevaría tu IMC al rango normal.`;
    }
    const diffEs = round(weightKg - range.max, 1);
    return `Estás aproximadamente ${diffEs} kg por encima del rango saludable. Llegar a ${range.max} kg llevaría tu IMC al rango normal.`;
  }

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
  heightCm: number,
  lang: "en" | "es" = "en"
): string | null {

  const msg = lang === "es"
    ? { weight: "Por favor ingresa un peso válido.", height: "Por favor ingresa una estatura válida.", weightMax: "Por favor ingresa un peso realista.", heightMax: "Por favor ingresa una estatura realista." }
    : { weight: "Please enter a valid weight.", height: "Please enter a valid height.", weightMax: "Please enter a realistic weight.", heightMax: "Please enter a realistic height." };

  if (!weightKg || weightKg <= 0) return msg.weight;
  if (!heightCm || heightCm <= 0) return msg.height;
  if (weightKg > 500) return msg.weightMax;
  if (heightCm > 300) return msg.heightMax;

  return null;
}

export function copyBMISummary(
  weightKg: number,
  heightCm: number,
  bmi: BMIResult,
  lang: "en" | "es" = "en"
): string {

  const range = healthyWeightRange(heightCm);

  if (lang === "es") {
    return `
Resumen de IMC

Peso: ${weightKg} kg
Estatura: ${heightCm} cm

IMC: ${bmi.value}
Categoría: ${CATEGORY_ES[bmi.category]}

Rango de Peso Saludable: ${range.min} - ${range.max} kg
`.trim();
  }

  return `
BMI Summary

Weight: ${weightKg} kg
Height: ${heightCm} cm

BMI: ${bmi.value}
Category: ${bmi.category}

Healthy Weight Range: ${range.min} - ${range.max} kg
`.trim();
}
