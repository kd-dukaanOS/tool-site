import {
  calculateBusinessDays,
  validateBusinessDaysInput,
  copyBusinessDaysSummary,
  type BusinessDaysInput,
} from "../utils/business-days";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { selectDates: "Please select both dates.", workingDays: "working days" },
  es: { selectDates: "Por favor selecciona ambas fechas.", workingDays: "días hábiles" },
}[lang];

const startDateInput = document.getElementById("startDate") as HTMLInputElement;
const endDateInput = document.getElementById("endDate") as HTMLInputElement;
const excludeWeekendsInput = document.getElementById("excludeWeekends") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: BusinessDaysInput | null = null;

function showError(msg: string) {
  errorBox.textContent = msg;
  errorBox.hidden = false;
}

function clearError() {
  errorBox.textContent = "";
  errorBox.hidden = true;
}

function calculate() {
  clearError();

  if (!startDateInput.value || !endDateInput.value) {
    showError(t.selectDates);
    return;
  }

  const input: BusinessDaysInput = {
    startDate: new Date(startDateInput.value),
    endDate: new Date(endDateInput.value),
    excludeWeekends: excludeWeekendsInput.checked,
    holidays: [],
  };

  const err = validateBusinessDaysInput(input, lang);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateBusinessDays(input);

  setValue("businessDaysResult", result.businessDays);
  setValue("totalDaysResult", result.totalDays);
  setValue("weekendDaysResult", result.weekendDays);
  setSubtitle("businessDaysResult", t.workingDays);

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  startDateInput.value = "";
  endDateInput.value = "";
  excludeWeekendsInput.checked = true;
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateBusinessDays(lastInput);
  copyToClipboard(copyBusinessDaysSummary(lastInput, result, lang));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);