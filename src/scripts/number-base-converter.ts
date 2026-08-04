import { convertBase, validateBaseInput, copyBaseSummary, type Base } from "../utils/number-base-converter";
import { setValue, copyToClipboard } from "../utils/calculator";

const valueInput = document.getElementById("baseValue") as HTMLInputElement;
const baseSelect = document.getElementById("fromBase") as HTMLSelectElement;

const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput = "";
let lastBase: Base = 10;
let lastResult: ReturnType<typeof convertBase> | null = null;

function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function convert() {
  clearError();
  const value = valueInput.value.trim();
  const base = parseInt(baseSelect.value, 10) as Base;

  const err = validateBaseInput(value, base);
  if (err) { showError(err); return; }

  try {
    const result = convertBase(value, base);

    setValue("binaryResult", result.binary);
    setValue("octalResult", result.octal);
    setValue("decimalResult", result.decimal);
    setValue("hexResult", result.hex);

    lastInput = value;
    lastBase = base;
    lastResult = result;

    emptyState.hidden = true;
    resultsContainer.hidden = false;
  } catch (e) {
    showError((e as Error).message);
  }
}

function reset() {
  valueInput.value = "";
  baseSelect.value = "10";
  clearError();
  lastResult = null;
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastResult) return;
  copyToClipboard(copyBaseSummary(lastInput, lastBase, lastResult));
}

convertBtn?.addEventListener("click", convert);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);