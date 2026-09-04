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

export function validateBMRInput(i: BMRInput, lang: "en" | "es" = "en"): string | null {
  const msg = lang === "es"
    ? { age: "Ingresa una edad realista.", height: "Ingresa una estatura realista.", weight: "Ingresa un peso realista." }
    : { age: "Enter a realistic age.", height: "Enter a realistic height.", weight: "Enter a realistic weight." };
  if (i.age <= 0 || i.age > 120) return msg.age;
  if (i.heightCm <= 0 || i.heightCm > 250) return msg.height;
  if (i.weightKg <= 0 || i.weightKg > 300) return msg.weight;
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

export function copyBMRSummary(i: BMRInput, r: BMRResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de TMB

Sexo: ${i.gender === "male" ? "Hombre" : "Mujer"}
Edad: ${i.age}
Estatura: ${i.heightCm} cm
Peso: ${i.weightKg} kg

TMB: ${r.bmr} calorías/día en reposo total
`.trim();
  }
  return `
BMR Summary

Gender: ${i.gender}
Age: ${i.age}
Height: ${i.heightCm} cm
Weight: ${i.weightKg} kg

BMR: ${r.bmr} calories/day at complete rest
`.trim();
}