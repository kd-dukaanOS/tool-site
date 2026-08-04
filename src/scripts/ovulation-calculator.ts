import {
  calculateOvulation,
  validateOvulationInput,
  copyOvulationSummary,
  type OvulationInput,
} from "../utils/ovulation";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const lastPeriodInput = document.getElementById("lastPeriodDate") as HTMLInputElement;
const cycleLengthInput = document.getElementById("cycleLength") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: OvulationInput | null = null;

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

  if (!lastPeriodInput.value) {
    showError("Please select your last period date.");
    return;
  }

  const input: OvulationInput = {
    lastPeriodDate: new Date(lastPeriodInput.value),
    cycleLength: Number(cycleLengthInput.value) || 28,
  };

  const err = validateOvulationInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateOvulation(input);

  setValue("ovulationDateResult", result.ovulationDate.toLocaleDateString("en-US"));
  setValue(
    "fertileWindowResult",
    `${result.fertileWindowStart.toLocaleDateString("en-US")} - ${result.fertileWindowEnd.toLocaleDateString("en-US")}`
  );
  setValue("nextPeriodResult", result.nextPeriodDate.toLocaleDateString("en-US"));
  setSubtitle("ovulationDateResult", "estimated");

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  lastPeriodInput.value = "";
  cycleLengthInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateOvulation(lastInput);
  copyToClipboard(copyOvulationSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);