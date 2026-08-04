export type ActivityLevel = "sedentary" | "light" | "moderate" | "active";

export interface WaterIntakeInput {
  weightKg: number;
  activityLevel: ActivityLevel;
  climateHot: boolean;
}

export interface WaterIntakeResult {
  litersPerDay: number;
  glassesPerDay: number; // 250ml glasses
  mlPerDay: number;
}

const ACTIVITY_ADD_ML: Record<ActivityLevel, number> = {
  sedentary: 0,
  light: 300,
  moderate: 500,
  active: 750,
};

export function validateWaterIntakeInput(i: WaterIntakeInput): string | null {
  if (i.weightKg <= 0 || i.weightKg > 300) return "Enter a realistic weight.";
  return null;
}

export function calculateWaterIntake(i: WaterIntakeInput): WaterIntakeResult {
  const baseMl = i.weightKg * 33;
  const activityMl = ACTIVITY_ADD_ML[i.activityLevel];
  const climateMl = i.climateHot ? 500 : 0;

  const mlPerDay = baseMl + activityMl + climateMl;

  return {
    mlPerDay: Math.round(mlPerDay),
    litersPerDay: Math.round((mlPerDay / 1000) * 100) / 100,
    glassesPerDay: Math.round(mlPerDay / 250),
  };
}

export function copyWaterIntakeSummary(i: WaterIntakeInput, r: WaterIntakeResult): string {
  return `
Water Intake Summary

Weight: ${i.weightKg} kg
Activity Level: ${i.activityLevel}
Hot Climate: ${i.climateHot ? "Yes" : "No"}

Recommended Intake: ${r.litersPerDay} L/day
Equivalent Glasses: ${r.glassesPerDay} glasses (250ml)
`.trim();
}