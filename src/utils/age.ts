/* ==========================================================
   ToolSite Age Utilities
   Shared by:
   - Age Calculator
   - Date Difference Calculator
   - Birthday Calculator
========================================================== */

export interface ExactAge {
  years: number;
  months: number;
  days: number;

  totalMonths: number;
  totalWeeks: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
}

export interface BirthdayInfo {
  daysRemaining: number;
  nextBirthday: Date;
  ageOnBirthday: number;
}

const DAY_MS = 24 * 60 * 60 * 1000;

const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WEEK_DAYS_ES = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

const BIRTHSTONES = [
  "Garnet",
  "Amethyst",
  "Aquamarine",
  "Diamond",
  "Emerald",
  "Pearl",
  "Ruby",
  "Peridot",
  "Sapphire",
  "Opal",
  "Topaz",
  "Turquoise",
];

const BIRTHSTONES_ES = [
  "Granate",
  "Amatista",
  "Aguamarina",
  "Diamante",
  "Esmeralda",
  "Perla",
  "Rubí",
  "Peridoto",
  "Zafiro",
  "Ópalo",
  "Topacio",
  "Turquesa",
];

const CHINESE = [
  "Rat",
  "Ox",
  "Tiger",
  "Rabbit",
  "Dragon",
  "Snake",
  "Horse",
  "Goat",
  "Monkey",
  "Rooster",
  "Dog",
  "Pig",
];

const CHINESE_ES = [
  "Rata",
  "Buey",
  "Tigre",
  "Conejo",
  "Dragón",
  "Serpiente",
  "Caballo",
  "Cabra",
  "Mono",
  "Gallo",
  "Perro",
  "Cerdo",
];

export function isLeapYear(year: number): boolean {
  return (
    (year % 4 === 0 && year % 100 !== 0) ||
    year % 400 === 0
  );
}

export function weekdayBorn(date: Date, lang: "en" | "es" = "en"): string {
  return (lang === "es" ? WEEK_DAYS_ES : WEEK_DAYS)[date.getDay()];
}

export function birthstone(date: Date, lang: "en" | "es" = "en"): string {
  return (lang === "es" ? BIRTHSTONES_ES : BIRTHSTONES)[date.getMonth()];
}

export function chineseZodiac(date: Date, lang: "en" | "es" = "en"): string {
  return (lang === "es" ? CHINESE_ES : CHINESE)[(date.getFullYear() - 1900) % 12];
}

const ZODIAC_ES: Record<string, string> = {
  Aquarius: "Acuario", Pisces: "Piscis", Aries: "Aries", Taurus: "Tauro",
  Gemini: "Géminis", Cancer: "Cáncer", Leo: "Leo", Virgo: "Virgo",
  Libra: "Libra", Scorpio: "Escorpio", Sagittarius: "Sagitario", Capricorn: "Capricornio",
};

export function westernZodiac(date: Date, lang: "en" | "es" = "en"): string {

  const day = date.getDate();
  const month = date.getMonth() + 1;

  let sign = "Capricorn";

  if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
    sign = "Aquarius";
  else if ((month === 2 && day >= 19) || (month === 3 && day <= 20))
    sign = "Pisces";
  else if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
    sign = "Aries";
  else if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
    sign = "Taurus";
  else if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
    sign = "Gemini";
  else if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
    sign = "Cancer";
  else if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
    sign = "Leo";
  else if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
    sign = "Virgo";
  else if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
    sign = "Libra";
  else if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
    sign = "Scorpio";
  else if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
    sign = "Sagittarius";

  return lang === "es" ? ZODIAC_ES[sign] : sign;
}

export function generation(date: Date, lang: "en" | "es" = "en"): string {

  const year = date.getFullYear();

  if (lang === "es") {
    if (year >= 2025) return "Generación Beta";
    if (year >= 2013) return "Generación Alfa";
    if (year >= 1997) return "Generación Z";
    if (year >= 1981) return "Millennial";
    if (year >= 1965) return "Generación X";
    if (year >= 1946) return "Baby Boomer";
    if (year >= 1928) return "Generación Silenciosa";
    return "Generación Grandiosa";
  }

  if (year >= 2025) return "Generation Beta";
  if (year >= 2013) return "Generation Alpha";
  if (year >= 1997) return "Generation Z";
  if (year >= 1981) return "Millennial";
  if (year >= 1965) return "Generation X";
  if (year >= 1946) return "Baby Boomer";
  if (year >= 1928) return "Silent Generation";

  return "Greatest Generation";
}

export function calculateExactAge(
  birthDate: Date,
  currentDate = new Date()
): ExactAge {

  let years =
    currentDate.getFullYear() -
    birthDate.getFullYear();

  let months =
    currentDate.getMonth() -
    birthDate.getMonth();

  let days =
    currentDate.getDate() -
    birthDate.getDate();

  if (days < 0) {

    months--;

    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );

    days += previousMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const diff =
    currentDate.getTime() -
    birthDate.getTime();

  const totalDays = Math.floor(diff / DAY_MS);

  return {

    years,
    months,
    days,

    totalMonths:
      years * 12 + months,

    totalWeeks:
      Math.floor(totalDays / 7),

    totalDays,

    totalHours:
      totalDays * 24,

    totalMinutes:
      totalDays * 24 * 60,

    totalSeconds:
      totalDays * 24 * 60 * 60,

  };
}
/* ==========================================================
   Additional Age Utilities
========================================================== */

export function calculateAgeOnDate(
  birthDate: Date,
  targetDate: Date
): ExactAge {
  return calculateExactAge(birthDate, targetDate);
}

export function nextBirthday(
  birthDate: Date,
  currentDate = new Date()
): BirthdayInfo {

  const next = new Date(
    currentDate.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  if (next < currentDate) {
    next.setFullYear(next.getFullYear() + 1);
  }

  const daysRemaining = Math.ceil(
    (next.getTime() - currentDate.getTime()) / DAY_MS
  );

  return {
    daysRemaining,
    nextBirthday: next,
    ageOnBirthday:
      next.getFullYear() - birthDate.getFullYear(),
  };
}

export function validateBirthDate(
  date: Date,
  lang: "en" | "es" = "en"
): string | null {

  const msg = lang === "es"
    ? {
        invalid: "Por favor selecciona una fecha válida.",
        future: "La fecha de nacimiento no puede ser futura.",
        year: "Por favor ingresa un año de nacimiento realista.",
      }
    : {
        invalid: "Please select a valid date.",
        future: "Birth date cannot be in the future.",
        year: "Please enter a realistic birth year.",
      };

  if (Number.isNaN(date.getTime())) {
    return msg.invalid;
  }

  if (date > new Date()) {
    return msg.future;
  }

  if (date.getFullYear() < 1900) {
    return msg.year;
  }

  return null;
}

export function parseDateInput(
  value: string
): Date | null {

  if (!value) return null;

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date;
}

export function formatDuration(
  totalDays: number,
  lang: "en" | "es" = "en"
): string {

  if (totalDays < 1) {
    return lang === "es" ? "Hoy" : "Today";
  }

  const years = Math.floor(totalDays / 365);

  const months = Math.floor(
    (totalDays % 365) / 30
  );

  const days =
    totalDays -
    years * 365 -
    months * 30;

  const parts: string[] = [];

  if (lang === "es") {
    if (years) parts.push(`${years} año${years !== 1 ? "s" : ""}`);
    if (months) parts.push(`${months} mes${months !== 1 ? "es" : ""}`);
    if (days) parts.push(`${days} día${days !== 1 ? "s" : ""}`);
    return parts.join(", ");
  }

  if (years)
    parts.push(
      `${years} year${years !== 1 ? "s" : ""}`
    );

  if (months)
    parts.push(
      `${months} month${months !== 1 ? "s" : ""}`
    );

  if (days)
    parts.push(
      `${days} day${days !== 1 ? "s" : ""}`
    );

  return parts.join(", ");
}

export function formatAgeSummary(
  age: ExactAge,
  lang: "en" | "es" = "en"
): string {

  if (lang === "es") {
    return `${age.years} años, ${age.months} meses y ${age.days} días`;
  }

  return `${age.years} years, ${age.months} months and ${age.days} days`;
}

export function formatBirthday(
  date: Date,
  lang: "en" | "es" = "en"
): string {

  return date.toLocaleDateString(
    lang === "es" ? "es-ES" : "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );
}

export function copyAgeSummary(
  birthDate: Date,
  age: ExactAge,
  lang: "en" | "es" = "en"
): string {

  if (lang === "es") {
    return `
Resumen de Edad

Fecha de Nacimiento:
${birthDate.toLocaleDateString("es-ES")}

Edad:
${age.years} Años
${age.months} Meses
${age.days} Días

Total de Meses:
${age.totalMonths}

Total de Semanas:
${age.totalWeeks}

Total de Días:
${age.totalDays}

Total de Horas:
${age.totalHours}

Total de Minutos:
${age.totalMinutes}

Total de Segundos:
${age.totalSeconds}

Zodiaco Occidental:
${westernZodiac(birthDate, "es")}

Zodiaco Chino:
${chineseZodiac(birthDate, "es")}

Piedra del Mes:
${birthstone(birthDate, "es")}

Generación:
${generation(birthDate, "es")}

Día de Nacimiento:
${weekdayBorn(birthDate, "es")}
`.trim();
  }

  return `
Age Summary

Date of Birth:
${birthDate.toLocaleDateString("en-US")}

Age:
${age.years} Years
${age.months} Months
${age.days} Days

Total Months:
${age.totalMonths}

Total Weeks:
${age.totalWeeks}

Total Days:
${age.totalDays}

Total Hours:
${age.totalHours}

Total Minutes:
${age.totalMinutes}

Total Seconds:
${age.totalSeconds}

Western Zodiac:
${westernZodiac(birthDate)}

Chinese Zodiac:
${chineseZodiac(birthDate)}

Birthstone:
${birthstone(birthDate)}

Generation:
${generation(birthDate)}

Weekday Born:
${weekdayBorn(birthDate)}
`.trim();

}

export function ageStatistics(
  birthDate: Date,
  currentDate = new Date()
) {

  const age = calculateExactAge(
    birthDate,
    currentDate
  );

  const birthday = nextBirthday(
    birthDate,
    currentDate
  );

  return {
    age,
    birthday,
    zodiac: westernZodiac(birthDate),
    chinese: chineseZodiac(birthDate),
    birthstone: birthstone(birthDate),
    generation: generation(birthDate),
    weekday: weekdayBorn(birthDate),
    leapYear: isLeapYear(
      birthDate.getFullYear()
    ),
  };
}