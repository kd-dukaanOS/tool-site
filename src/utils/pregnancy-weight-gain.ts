export interface PregnancyWeightGainInput {
  prePregnancyWeightKg: number;
  heightCm: number;
  currentWeekOfPregnancy: number;
  isTwins: boolean;
}

export interface PregnancyWeightGainResult {
  prePregnancyBMI: number;
  bmiCategory: string;
  recommendedTotalGainMinKg: number;
  recommendedTotalGainMaxKg: number;
  recommendedGainToDateMinKg: number;
  recommendedGainToDateMaxKg: number;
}

export function validatePregnancyWeightGainInput(i: PregnancyWeightGainInput): string | null {
  if (i.prePregnancyWeightKg <= 0) return "Enter a valid pre-pregnancy weight.";
  if (i.heightCm <= 0 || i.heightCm > 250) return "Enter a realistic height.";
  if (i.currentWeekOfPregnancy < 1 || i.currentWeekOfPregnancy > 42)
    return "Enter a valid week of pregnancy (1-42).";
  return null;
}

function getBMICategory(bmi: number): string {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

const SINGLE_RANGES: Record<string, [number, number]> = {
  Underweight: [12.5, 18],
  "Normal weight": [11.5, 16],
  Overweight: [7, 11.5],
  Obese: [5, 9],
};

const TWIN_RANGES: Record<string, [number, number]> = {
  Underweight: [22.7, 28.1], // limited data, using normal-adjacent estimate
  "Normal weight": [16.8, 24.5],
  Overweight: [14.1, 22.7],
  Obese: [11.3, 19.1],
};

export function calculatePregnancyWeightGain(
  i: PregnancyWeightGainInput
): PregnancyWeightGainResult {
  const heightM = i.heightCm / 100;
  const bmi = i.prePregnancyWeightKg / (heightM * heightM);
  const category = getBMICategory(bmi);

  const ranges = i.isTwins ? TWIN_RANGES : SINGLE_RANGES;
  const [minTotal, maxTotal] = ranges[category];

  const progressRatio = Math.min(1, i.currentWeekOfPregnancy / 40);

  return {
    prePregnancyBMI: Math.round(bmi * 10) / 10,
    bmiCategory: category,
    recommendedTotalGainMinKg: minTotal,
    recommendedTotalGainMaxKg: maxTotal,
    recommendedGainToDateMinKg: Math.round(minTotal * progressRatio * 10) / 10,
    recommendedGainToDateMaxKg: Math.round(maxTotal * progressRatio * 10) / 10,
  };
}

export function copyPregnancyWeightGainSummary(
  i: PregnancyWeightGainInput,
  r: PregnancyWeightGainResult
): string {
  return `
Pregnancy Weight Gain Summary

Pre-Pregnancy Weight: ${i.prePregnancyWeightKg} kg
Height: ${i.heightCm} cm
Current Week: ${i.currentWeekOfPregnancy}
${i.isTwins ? "Twin Pregnancy" : "Single Pregnancy"}

Pre-Pregnancy BMI: ${r.prePregnancyBMI} (${r.bmiCategory})
Recommended Total Gain: ${r.recommendedTotalGainMinKg} - ${r.recommendedTotalGainMaxKg} kg
Recommended Gain by Now: ${r.recommendedGainToDateMinKg} - ${r.recommendedGainToDateMaxKg} kg
`.trim();
}