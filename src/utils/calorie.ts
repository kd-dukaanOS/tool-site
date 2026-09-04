export type ActivityLevel = "sedentary" | "light" | "moderate" | "active" | "veryActive";
export type Goal = "lose" | "maintain" | "gain";

export interface CalorieInput {
  gender: "male" | "female";
  age: number;
  heightCm: number;
  weightKg: number;
  activityLevel: ActivityLevel;
  goal: Goal;
}

export interface CalorieResult {
  bmr: number;
  maintenanceCalories: number;
  targetCalories: number;
}

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

const GOAL_ADJUSTMENT: Record<Goal, number> = {
  lose: -500,
  maintain: 0,
  gain: 500,
};

const GENDER_ES: Record<CalorieInput["gender"], string> = { male: "Hombre", female: "Mujer" };
const ACTIVITY_ES: Record<ActivityLevel, string> = {
  sedentary: "Sedentario", light: "Ligero", moderate: "Moderado", active: "Activo", veryActive: "Muy Activo",
};
const GOAL_ES: Record<Goal, string> = { lose: "Perder Peso", maintain: "Mantener Peso", gain: "Ganar Peso" };
const GOAL_SUBTITLE_ES: Record<Goal, string> = { lose: "para perder peso", maintain: "para mantener peso", gain: "para ganar peso" };

export function validateCalorieInput(i: CalorieInput, lang: "en" | "es" = "en"): string | null {
  if (lang === "es") {
    if (i.age <= 0 || i.age > 120) return "Ingresa una edad realista.";
    if (i.heightCm <= 0 || i.heightCm > 250) return "Ingresa una estatura realista.";
    if (i.weightKg <= 0 || i.weightKg > 300) return "Ingresa un peso realista.";
    return null;
  }
  if (i.age <= 0 || i.age > 120) return "Enter a realistic age.";
  if (i.heightCm <= 0 || i.heightCm > 250) return "Enter a realistic height.";
  if (i.weightKg <= 0 || i.weightKg > 300) return "Enter a realistic weight.";
  return null;
}

export function calculateCalories(i: CalorieInput): CalorieResult {
  const bmr =
    i.gender === "male"
      ? 10 * i.weightKg + 6.25 * i.heightCm - 5 * i.age + 5
      : 10 * i.weightKg + 6.25 * i.heightCm - 5 * i.age - 161;

  const maintenanceCalories = bmr * ACTIVITY_MULTIPLIERS[i.activityLevel];
  const targetCalories = maintenanceCalories + GOAL_ADJUSTMENT[i.goal];

  return {
    bmr: Math.round(bmr),
    maintenanceCalories: Math.round(maintenanceCalories),
    targetCalories: Math.round(targetCalories),
  };
}

export function copyCalorieSummary(i: CalorieInput, r: CalorieResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen del Cálculo de Calorías

Género: ${GENDER_ES[i.gender]}
Edad: ${i.age}
Estatura: ${i.heightCm} cm
Peso: ${i.weightKg} kg
Nivel de Actividad: ${ACTIVITY_ES[i.activityLevel]}
Objetivo: ${GOAL_ES[i.goal]}

TMB: ${r.bmr} cal/día
Calorías de Mantenimiento: ${r.maintenanceCalories} cal/día
Calorías Objetivo: ${r.targetCalories} cal/día
`.trim();
  }
  return `
Calorie Calculation Summary

Gender: ${i.gender}
Age: ${i.age}
Height: ${i.heightCm} cm
Weight: ${i.weightKg} kg
Activity Level: ${i.activityLevel}
Goal: ${i.goal}

BMR: ${r.bmr} cal/day
Maintenance Calories: ${r.maintenanceCalories} cal/day
Target Calories: ${r.targetCalories} cal/day
`.trim();
}