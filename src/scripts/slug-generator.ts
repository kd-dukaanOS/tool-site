import { generateSlug, validateSlugInput, getSlugStats, type SlugOptions } from "../utils/slug-generator";
import { setValue, copyToClipboard } from "../utils/calculator";

const textInput = document.getElementById("slugText") as HTMLTextAreaElement;
const separatorSelect = document.getElementById("slugSeparator") as HTMLSelectElement;
const lowercaseCb = document.getElementById("slugLowercase") as HTMLInputElement;
const stopwordsCb = document.getElementById("slugRemoveStopwords") as HTMLInputElement;
const maxLengthInput = document.getElementById("slugMaxLength") as HTMLInputElement;

const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const slugOutput = document.getElementById("slugOutput") as HTMLInputElement;

let lastSlug = "";

function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function generate() {
  clearError();
  const text = textInput.value;
  const err = validateSlugInput(text);
  if (err) { showError(err); return; }

  const opts: SlugOptions = {
    separator: separatorSelect.value as SlugOptions["separator"],
    lowercase: lowercaseCb.checked,
    removeStopwords: stopwordsCb.checked,
    maxLength: parseInt(maxLengthInput.value, 10) || 0,
  };

  const slug = generateSlug(text, opts);
  slugOutput.value = slug;
  lastSlug = slug;

  const stats = getSlugStats(slug);
  setValue("lengthResult", stats.length);
  setValue("wordsResult", stats.words);

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  textInput.value = "";
  separatorSelect.value = "-";
  lowercaseCb.checked = true;
  stopwordsCb.checked = false;
  maxLengthInput.value = "60";
  slugOutput.value = "";
  clearError();
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastSlug) return;
  copyToClipboard(lastSlug);
}

// live update
textInput?.addEventListener("input", () => { if (!resultsContainer.hidden) generate(); });

generateBtn?.addEventListener("click", generate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);