import { generateLorem, validateLoremInput, getLoremStats, type LoremType } from "../utils/lorem-ipsum";
import { setValue, copyToClipboard } from "../utils/calculator";

const typeSelect = document.getElementById("loremType") as HTMLSelectElement;
const countInput = document.getElementById("loremCount") as HTMLInputElement;
const startCheckbox = document.getElementById("startWithLorem") as HTMLInputElement;

const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const loremOutput = document.getElementById("loremOutput") as HTMLTextAreaElement;

let lastText = "";

function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function generate() {
  clearError();
  const count = parseInt(countInput.value, 10);
  const err = validateLoremInput(count);
  if (err) { showError(err); return; }

  const type = typeSelect.value as LoremType;
  const text = generateLorem(type, count, startCheckbox.checked);
  loremOutput.value = text;
  lastText = text;

  const stats = getLoremStats(text);
  setValue("wordsResult", stats.words);
  setValue("charsResult", stats.chars);
  setValue("paragraphsResult", stats.paragraphs);

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  countInput.value = "5";
  typeSelect.value = "paragraphs";
  startCheckbox.checked = true;
  loremOutput.value = "";
  clearError();
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastText) return;
  copyToClipboard(lastText);
}

generateBtn?.addEventListener("click", generate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);