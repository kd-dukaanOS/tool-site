import { testRegex, highlightMatches, validateRegexInput, copyRegexSummary } from "../utils/regex-tester";
import { setValue, copyToClipboard } from "../utils/calculator";

const patternInput = document.getElementById("regexPattern") as HTMLInputElement;
const flagsInput = document.getElementById("regexFlags") as HTMLInputElement;
const textInput = document.getElementById("regexText") as HTMLTextAreaElement;

const testBtn = document.getElementById("testBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const highlightedOutput = document.getElementById("highlightedOutput") as HTMLElement;

let lastPattern = "";
let lastFlags = "";
let lastResult: ReturnType<typeof testRegex> | null = null;

function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function run() {
  clearError();
  const pattern = patternInput.value;
  const flags = flagsInput.value;
  const text = textInput.value;

  const inputErr = validateRegexInput(pattern, text);
  if (inputErr) { showError(inputErr); return; }

  const result = testRegex(pattern, flags, text);

  if (!result.isValid) {
    showError(result.error || "Invalid regex pattern.");
    return;
  }

  highlightedOutput.innerHTML = highlightMatches(text, result.matches);

  setValue("matchCountResult", result.matches.length);
  setValue("firstMatchResult", result.matches[0]?.match ?? "—");
  setValue("groupsResult", result.matches[0]?.groups.length ?? 0);

  lastPattern = pattern;
  lastFlags = flags;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  patternInput.value = "";
  flagsInput.value = "g";
  textInput.value = "";
  clearError();
  lastResult = null;
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastResult) return;
  copyToClipboard(copyRegexSummary(lastPattern, lastFlags, lastResult));
}

testBtn?.addEventListener("click", run);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);