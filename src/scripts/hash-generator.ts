import { generateHashes, validateHashInput, copyHashSummary } from "../utils/hash-generator";
import { setValue, copyToClipboard } from "../utils/calculator";

const textInput = document.getElementById("hashText") as HTMLTextAreaElement;
const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");
const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastText = "";
let lastResult: Awaited<ReturnType<typeof generateHashes>> | null = null;

function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

async function generate() {
  clearError();
  const text = textInput.value;
  const err = validateHashInput(text);
  if (err) { showError(err); return; }

  const result = await generateHashes(text);
  setValue("md5Result", result.md5);
  setValue("sha1Result", result.sha1);
  setValue("sha256Result", result.sha256);
  setValue("sha512Result", result.sha512);

  lastText = text;
  lastResult = result;
  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  textInput.value = "";
  clearError();
  lastResult = null;
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastResult) return;
  copyToClipboard(copyHashSummary(lastText, lastResult));
}

generateBtn?.addEventListener("click", generate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);