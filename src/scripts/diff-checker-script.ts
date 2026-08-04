import {
  computeDiff,
  formatDiffHtml,
  validateDiffInput,
  copyDiffSummary,
} from "../utils/diff-checker";

import { setValue, copyToClipboard } from "../utils/calculator";

const input1 = document.getElementById("diffInput1") as HTMLTextAreaElement;
const input2 = document.getElementById("diffInput2") as HTMLTextAreaElement;

const compareBtn = document.getElementById("compareBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const diffOutput = document.getElementById("diffOutput") as HTMLElement;

let lastText1 = "";
let lastText2 = "";
let lastResult: ReturnType<typeof computeDiff> | null = null;

function showError(message: string) {
  errorBox.textContent = message;
  errorBox.hidden = false;
}

function clearError() {
  errorBox.textContent = "";
  errorBox.hidden = true;
}

function compare() {
  clearError();

  const text1 = input1.value;
  const text2 = input2.value;

  const validationError = validateDiffInput(text1, text2);

  if (validationError) {
    showError(validationError);
    return;
  }

  const result = computeDiff(text1, text2);

  setValue("addedResult", result.stats.added);
  setValue("removedResult", result.stats.removed);
  setValue("unchangedResult", result.stats.unchanged);
  setValue("similarityResult", `${result.stats.similarity}%`);

  diffOutput.innerHTML = formatDiffHtml(result);

  lastText1 = text1;
  lastText2 = text2;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetChecker() {
  input1.value = "";
  input2.value = "";
  clearError();

  lastResult = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastResult) return;
  copyToClipboard(copyDiffSummary(lastText1, lastText2, lastResult));
}

compareBtn?.addEventListener("click", compare);
resetBtn?.addEventListener("click", resetChecker);
copyBtn?.addEventListener("click", handleCopy);
