import { calculateCAGR, validateCAGRInput, copyCAGRSummary, type CAGRInput } from "../utils/cagr";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const initialInput = document.getElementById("initialValue") as HTMLInputElement;
const finalInput = document.getElementById("finalValue") as HTMLInputElement;
const yearsInput = document.getElementById("years") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: CAGRInput | null = null;

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

  const input: CAGRInput = {
    initialValue: Number(initialInput.value),
    finalValue: Number(finalInput.value),
    years: Number(yearsInput.value),
  };

  if (!input.initialValue || !input.finalValue || !input.years) {
    showError("Please fill all fields.");
    return;
  }

  const err = validateCAGRInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateCAGR(input);

  setValue("cagrResult", `${result.cagr}%`);
  setValue("absoluteReturnResult", `${result.absoluteReturn}%`);
  setValue("totalGrowthResult", `₹${result.totalGrowth.toLocaleString("en-IN")}`);
  setValue("wealthMultipleResult", `${result.wealthMultiple}x`);
  setSubtitle("wealthMultipleResult", "your money multiplied");

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  initialInput.value = "";
  finalInput.value = "";
  yearsInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateCAGR(lastInput);
  copyToClipboard(copyCAGRSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);