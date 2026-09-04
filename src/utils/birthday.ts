import { nextBirthday, weekdayBorn, type BirthdayInfo } from "./age";

export interface BirthdayInput {
  birthDate: Date;
}

export interface BirthdayResult {
  info: BirthdayInfo;
  birthdayWeekday: string;
}

export function validateBirthdayInput(i: BirthdayInput, lang: "en" | "es" = "en"): string | null {
  const msg = lang === "es"
    ? { invalid: "Por favor selecciona una fecha de nacimiento válida.", future: "La fecha de nacimiento no puede ser futura." }
    : { invalid: "Please select a valid birth date.", future: "Birth date cannot be in the future." };
  if (Number.isNaN(i.birthDate.getTime())) return msg.invalid;
  if (i.birthDate > new Date()) return msg.future;
  return null;
}

export function calculateBirthday(i: BirthdayInput, lang: "en" | "es" = "en"): BirthdayResult {
  const info = nextBirthday(i.birthDate);
  return {
    info,
    birthdayWeekday: weekdayBorn(info.nextBirthday, lang),
  };
}

export function copyBirthdaySummary(i: BirthdayInput, r: BirthdayResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de Cumpleaños

Fecha de Nacimiento: ${i.birthDate.toLocaleDateString("es-ES")}

Próximo Cumpleaños: ${r.info.nextBirthday.toLocaleDateString("es-ES")}
Días Restantes: ${r.info.daysRemaining}
Edad que Cumplirás: ${r.info.ageOnBirthday}
Cae En: ${r.birthdayWeekday}
`.trim();
  }
  return `
Birthday Summary

Date of Birth: ${i.birthDate.toLocaleDateString("en-US")}

Next Birthday: ${r.info.nextBirthday.toLocaleDateString("en-US")}
Days Remaining: ${r.info.daysRemaining}
Turning Age: ${r.info.ageOnBirthday}
Falls On: ${r.birthdayWeekday}
`.trim();
}