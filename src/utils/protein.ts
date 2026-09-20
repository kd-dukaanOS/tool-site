import { round } from "./calculator";

export interface ProteinInput {
  weightKg: number;
  goal: string;
}

export interface ProteinResult {
  gramsPerDay: number;
  minGrams: number;
  maxGrams: number;
  calories: number;
}

// g of protein per kg bodyweight, [min, max] by goal
const GOAL_RANGE: Record<string, [number, number]> = {
  sedentary: [0.8, 1.0],
  maintenance: [1.0, 1.4],
  muscleGain: [1.6, 2.2],
  fatLoss: [1.8, 2.4],
  athlete: [2.0, 2.6],
};

export function validateProteinInput(i: ProteinInput, lang: "en" | "es" = "en"): string | null {
  if (!i.weightKg || i.weightKg <= 0) return lang === "es" ? "Ingresa un peso válido." : "Enter a valid weight.";
  if (!i.goal) return lang === "es" ? "Selecciona un objetivo." : "Select a goal.";
  return null;
}

export function calculateProtein(i: ProteinInput): ProteinResult {
  const [min, max] = GOAL_RANGE[i.goal] ?? [1.0, 1.4];
  const minGrams = round(i.weightKg * min);
  const maxGrams = round(i.weightKg * max);
  const gramsPerDay = round((minGrams + maxGrams) / 2);
  return { gramsPerDay, minGrams, maxGrams, calories: round(gramsPerDay * 4) };
}

export function copyProteinSummary(_i: ProteinInput, r: ProteinResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Calculadora de Ingesta de Proteína

Recomendado: ${r.gramsPerDay} g/día
Rango: ${r.minGrams} - ${r.maxGrams} g/día
Calorías de la proteína: ${r.calories} kcal
`.trim();
  }
  return `
Protein Intake Calculator

Recommended: ${r.gramsPerDay} g/day
Range: ${r.minGrams} - ${r.maxGrams} g/day
Calories from protein: ${r.calories} kcal
`.trim();
}

