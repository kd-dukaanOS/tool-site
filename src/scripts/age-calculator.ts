import {
  calculateExactAge,
  nextBirthday,
  validateBirthDate,
  parseDateInput,
  formatBirthday,
  westernZodiac,
  chineseZodiac,
  birthstone,
  generation,
  weekdayBorn,
  copyAgeSummary,
} from "../utils/age";

import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const birthDateInput = document.getElementById("birthDate") as HTMLInputElement;
const targetDateInput = document.getElementById("targetDate") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { needDob: "Please select your date of birth.", days: "days" },
  es: { needDob: "Por favor selecciona tu fecha de nacimiento.", days: "días" },
}[lang];

let lastBirthDate: Date | null = null;
let lastAge: ReturnType<typeof calculateExactAge> | null = null;

function showError(message: string) {
  errorBox.textContent = message;
  errorBox.hidden = false;
}

function clearError() {
  errorBox.textContent = "";
  errorBox.hidden = true;
}

function calculate() {
  clearError();

  const birthDate = parseDateInput(birthDateInput.value);

 if (!birthDate) {
    showError(t.needDob);
    return;
  }

  const validationError = validateBirthDate(birthDate, lang);

  if (validationError) {
    showError(validationError);
    return;
  }

  const targetDate = targetDateInput.value
    ? parseDateInput(targetDateInput.value)
    : new Date();

  const currentDate = targetDate ?? new Date();

  const age = calculateExactAge(birthDate, currentDate);
  const birthday = nextBirthday(birthDate, currentDate);

  setValue("yearsResult", age.years);
  setValue("monthsResult", age.months);
  setValue("daysResult", age.days);
  setValue("weeksResult", age.totalWeeks);
  setValue("hoursResult", age.totalHours);
  setValue("minutesResult", age.totalMinutes);
  setValue("secondsResult", age.totalSeconds);

  setValue("birthdayResult", `${birthday.daysRemaining} ${t.days}`);
  setSubtitle("birthdayResult", formatBirthday(birthday.nextBirthday, lang));

    setValue("weekdayResult", weekdayBorn(birthDate, lang));
  setValue("zodiacResult", westernZodiac(birthDate, lang));
  setValue("chineseResult", chineseZodiac(birthDate, lang));
  setValue("birthstoneResult", birthstone(birthDate, lang));
  setValue("generationResult", generation(birthDate, lang));

  lastBirthDate = birthDate;
  lastAge = age;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  birthDateInput.value = "";
  targetDateInput.value = "";
  clearError();

  lastBirthDate = null;
  lastAge = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastBirthDate || !lastAge) return;
 copyToClipboard(copyAgeSummary(lastBirthDate, lastAge, lang));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);
