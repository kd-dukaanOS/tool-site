export interface BMRInput {
  gender: "male" | "female";
  age: number;
  heightCm: number;
  weightKg: number;
}

export interface BMRResult {
  bmr: number;
  bmrRounded25: number;
}

export function validateBMRInput(i: BMRInput): string | null {
  if (i.age <= 0 || i.age > 120) return "Enter a realistic age.";
  if (i.heightCm <= 0 || i.heightCm > 250) return "Enter a realistic height.";
  if (i.weightKg <= 0 || i.weightKg > 300) return "Enter a realistic weight.";
  return null;
}

export function calculateBMR(i: BMRInput): BMRResult {
  const bmr =
    i.gender === "male"
      ? 10 * i.weightKg + 6.25 * i.heightCm - 5 * i.age + 5
      : 10 * i.weightKg + 6.25 * i.heightCm - 5 * i.age - 161;

  return {
    bmr: Math.round(bmr),
    bmrRounded25: Math.round(bmr / 25) * 25,
  };
}

export function copyBMRSummary(i: BMRInput, r: BMRResult): string {
  return `
BMR Summary

Gender: ${i.gender}
Age: ${i.age}
Height: ${i.heightCm} cm
Weight: ${i.weightKg} kg

BMR: ${r.bmr} calories/day at complete rest
`.trim();
}