export interface BodyFatInput {
  gender: "male" | "female";
  heightCm: number;
  neckCm: number;
  waistCm: number;
  hipCm?: number; // required for female
}

export interface BodyFatResult {
  bodyFatPercent: number;
  category: string;
}

export function validateBodyFatInput(i: BodyFatInput): string | null {
  if (i.heightCm <= 0 || i.heightCm > 250) return "Enter a realistic height.";
  if (i.neckCm <= 0) return "Enter a valid neck measurement.";
  if (i.waistCm <= 0) return "Enter a valid waist measurement.";
  if (i.gender === "female" && (!i.hipCm || i.hipCm <= 0))
    return "Enter a valid hip measurement.";
  if (i.waistCm <= i.neckCm) return "Waist measurement must be greater than neck.";
  return null;
}

function categorize(gender: "male" | "female", bf: number): string {
  if (gender === "male") {
    if (bf < 6) return "Essential Fat";
    if (bf < 14) return "Athletes";
    if (bf < 18) return "Fitness";
    if (bf < 25) return "Average";
    return "Obese";
  }
  if (bf < 14) return "Essential Fat";
  if (bf < 21) return "Athletes";
  if (bf < 25) return "Fitness";
  if (bf < 32) return "Average";
  return "Obese";
}

export function calculateBodyFat(i: BodyFatInput): BodyFatResult {
  let bodyFatPercent: number;

  if (i.gender === "male") {
    bodyFatPercent =
      495 /
        (1.0324 -
          0.19077 * Math.log10(i.waistCm - i.neckCm) +
          0.15456 * Math.log10(i.heightCm)) -
      450;
  } else {
    bodyFatPercent =
      495 /
        (1.29579 -
          0.35004 * Math.log10(i.waistCm + (i.hipCm ?? 0) - i.neckCm) +
          0.221 * Math.log10(i.heightCm)) -
      450;
  }

  return {
    bodyFatPercent: Math.round(bodyFatPercent * 100) / 100,
    category: categorize(i.gender, bodyFatPercent),
  };
}

export function copyBodyFatSummary(i: BodyFatInput, r: BodyFatResult): string {
  return `
Body Fat Summary

Gender: ${i.gender}
Height: ${i.heightCm} cm
Neck: ${i.neckCm} cm
Waist: ${i.waistCm} cm
${i.hipCm ? `Hip: ${i.hipCm} cm` : ""}

Body Fat: ${r.bodyFatPercent}%
Category: ${r.category}
`.trim();
}