import { nextBirthday, weekdayBorn, type BirthdayInfo } from "./age";

export interface BirthdayInput {
  birthDate: Date;
}

export interface BirthdayResult {
  info: BirthdayInfo;
  birthdayWeekday: string;
}

export function validateBirthdayInput(i: BirthdayInput): string | null {
  if (Number.isNaN(i.birthDate.getTime())) return "Please select a valid birth date.";
  if (i.birthDate > new Date()) return "Birth date cannot be in the future.";
  return null;
}

export function calculateBirthday(i: BirthdayInput): BirthdayResult {
  const info = nextBirthday(i.birthDate);
  return {
    info,
    birthdayWeekday: weekdayBorn(info.nextBirthday),
  };
}

export function copyBirthdaySummary(i: BirthdayInput, r: BirthdayResult): string {
  return `
Birthday Summary

Date of Birth: ${i.birthDate.toLocaleDateString("en-US")}

Next Birthday: ${r.info.nextBirthday.toLocaleDateString("en-US")}
Days Remaining: ${r.info.daysRemaining}
Turning Age: ${r.info.ageOnBirthday}
Falls On: ${r.birthdayWeekday}
`.trim();
}