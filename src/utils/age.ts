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

export function isLeapYear(year: number): boolean {
  return (
    (year % 4 === 0 && year % 100 !== 0) ||
    year % 400 === 0
  );
}

export function weekdayBorn(date: Date): string {
  return WEEK_DAYS[date.getDay()];
}

export function birthstone(date: Date): string {
  return BIRTHSTONES[date.getMonth()];
}

export function chineseZodiac(date: Date): string {
  return CHINESE[(date.getFullYear() - 1900) % 12];
}

export function westernZodiac(date: Date): string {

  const day = date.getDate();
  const month = date.getMonth() + 1;

  if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
    return "Aquarius";

  if ((month === 2 && day >= 19) || (month === 3 && day <= 20))
    return "Pisces";

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
    return "Aries";

  if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
    return "Taurus";

  if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
    return "Gemini";

  if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
    return "Cancer";

  if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
    return "Leo";

  if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
    return "Virgo";

  if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
    return "Libra";

  if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
    return "Scorpio";

  if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
    return "Sagittarius";

  return "Capricorn";
}

export function generation(date: Date): string {

  const year = date.getFullYear();

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
  date: Date
): string | null {

  if (Number.isNaN(date.getTime())) {
    return "Please select a valid date.";
  }

  if (date > new Date()) {
    return "Birth date cannot be in the future.";
  }

  if (date.getFullYear() < 1900) {
    return "Please enter a realistic birth year.";
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
  totalDays: number
): string {

  if (totalDays < 1) {
    return "Today";
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
  age: ExactAge
): string {

  return `${age.years} years, ${age.months} months and ${age.days} days`;
}

export function formatBirthday(
  date: Date
): string {

  return date.toLocaleDateString(
    "en-US",
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
  age: ExactAge
): string {

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