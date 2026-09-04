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

export function validateBodyFatInput(i: BodyFatInput, lang: "en" | "es" = "en"): string | null {
  const msg = lang === "es"
    ? { height: "Ingresa una estatura realista.", neck: "Ingresa una medida de cuello válida.", waist: "Ingresa una medida de cintura válida.", hip: "Ingresa una medida de cadera válida.", waistNeck: "La cintura debe ser mayor que el cuello." }
    : { height: "Enter a realistic height.", neck: "Enter a valid neck measurement.", waist: "Enter a valid waist measurement.", hip: "Enter a valid hip measurement.", waistNeck: "Waist measurement must be greater than neck." };
  if (i.heightCm <= 0 || i.heightCm > 250) return msg.height;
  if (i.neckCm <= 0) return msg.neck;
  if (i.waistCm <= 0) return msg.waist;
  if (i.gender === "female" && (!i.hipCm || i.hipCm <= 0)) return msg.hip;
  if (i.waistCm <= i.neckCm) return msg.waistNeck;
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

const CATEGORY_ES: Record<string, string> = {
  "Essential Fat": "Grasa Esencial", "Athletes": "Atlético", "Fitness": "En Forma", "Average": "Promedio", "Obese": "Obesidad",
};

export function copyBodyFatSummary(i: BodyFatInput, r: BodyFatResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de Grasa Corporal

Sexo: ${i.gender === "male" ? "Hombre" : "Mujer"}
Estatura: ${i.heightCm} cm
Cuello: ${i.neckCm} cm
Cintura: ${i.waistCm} cm
${i.hipCm ? `Cadera: ${i.hipCm} cm` : ""}

Grasa Corporal: ${r.bodyFatPercent}%
Categoría: ${CATEGORY_ES[r.category] ?? r.category}
`.trim();
  }
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