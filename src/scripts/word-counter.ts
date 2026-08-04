import { analyzeText, validateTextInput, copyWordSummary } from "../utils/word-counter";
import { setValue, copyToClipboard } from "../utils/calculator";

const textInput = document.getElementById("wcInput") as HTMLTextAreaElement;

const analyzeBtn = document.getElementById("analyzeBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastStats: ReturnType<typeof analyzeText> | null = null;

function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function analyze() {
  clearError();
  const text = textInput.value;
  const err = validateTextInput(text);
  if (err) { showError(err); return; }

  const stats = analyzeText(text);

  setValue("wordsResult", stats.words);
  setValue("charactersResult", stats.characters);
  setValue("noSpacesResult", stats.charactersNoSpaces);
  setValue("sentencesResult", stats.sentences);
  setValue("paragraphsResult", stats.paragraphs);
  setValue("readingTimeResult", `${stats.readingTimeMin} min`);
  setValue("speakingTimeResult", `${stats.speakingTimeMin} min`);
  setValue("avgWordLengthResult", stats.avgWordLength);

  lastStats = stats;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  textInput.value = "";
  clearError();
  lastStats = null;
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastStats) return;
  copyToClipboard(copyWordSummary(lastStats));
}

// live update
textInput?.addEventListener("input", () => { if (!resultsContainer.hidden) analyze(); });

analyzeBtn?.addEventListener("click", analyze);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);