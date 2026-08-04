import {
  parseTimestampInput,
  buildTimestampResult,
  validateTimestampInput,
  copyTimestampSummary,
} from "../utils/timestamp-converter";

import { setValue, copyToClipboard } from "../utils/calculator";

const timestampInput = document.getElementById("timestampInput") as HTMLInputElement;

const convertBtn = document.getElementById("convertBtn");
const nowBtn = document.getElementById("nowBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput = "";
let lastResult: ReturnType<typeof buildTimestampResult> | null = null;

function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function convert() {
  clearError();
  const value = timestampInput.value;
  const err = validateTimestampInput(value);
  if (err) { showError(err); return; }

  const date = parseTimestampInput(value);
  if (!date) { showError("Could not parse timestamp or date."); return; }

  const result = buildTimestampResult(date);

  setValue("unixSecondsResult", result.unixSeconds);
  setValue("unixMillisResult", result.unixMillis);
  setValue("isoResult", result.iso);
  setValue("utcResult", result.utc);
  setValue("localResult", result.local);
  setValue("relativeResult", result.relative);

  lastInput = value;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function useNow() {
  timestampInput.value = String(Math.floor(Date.now() / 1000));
  convert();
}

function reset() {
  timestampInput.value = "";
  clearError();
  lastResult = null;
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastResult) return;
  copyToClipboard(copyTimestampSummary(lastInput, lastResult));
}

convertBtn?.addEventListener("click", convert);
nowBtn?.addEventListener("click", useNow);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);