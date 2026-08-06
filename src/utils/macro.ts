import { round } from "./calculator";

export interface MacroInput {
  gender: string;
  age: number;
  heightCm: number;
  weightKg: number;
  activityLevel: string;
  goal: string;
}

export interface MacroResult {
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
}

const ACTIVITY_MULTIPLIERS: Record<string, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

const GOAL_ADJUSTMENT: Record<string, number> = {
  lose: -500,
  maintain: 0,
  gain: 500,
};

export function validateMacroInput(i: MacroInput): string | null {
  if (!i.age || i.age <= 0) return "Enter a valid age.";
  if (!i.heightCm || i.heightCm <= 0) return "Enter a valid height.";
  if (!i.weightKg || i.weightKg <= 0) return "Enter a valid weight.";
  return null;
}

export function calculateMacro(i: MacroInput): MacroResult {
  const bmr =
    i.gender === "male"
      ? 10 * i.weightKg + 6.25 * i.heightCm - 5 * i.age + 5
      : 10 * i.weightKg + 6.25 * i.heightCm - 5 * i.age - 161;

  const tdee = bmr * (ACTIVITY_MULTIPLIERS[i.activityLevel] ?? 1.2);
  const calories = Math.max(1200, tdee + (GOAL_ADJUSTMENT[i.goal] ?? 0));

  const proteinG = round((calories * 0.3) / 4);
  const carbsG = round((calories * 0.4) / 4);
  const fatG = round((calories * 0.3) / 9);

  return { calories: round(calories), proteinG, carbsG, fatG };
}

export function copyMacroSummary(_i: MacroInput, r: MacroResult): string {
  return `
Macro Calculator

Daily Calories: ${r.calories} kcal
Protein: ${r.proteinG} g
Carbs: ${r.carbsG} g
Fat: ${r.fatG} g
`.trim();
}

