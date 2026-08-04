import { processUrl, validateUrlInput, getUrlStats, copyUrlSummary, type UrlMode } from "../utils/url-encoder-decoder";
import { setValue, copyToClipboard } from "../utils/calculator";

const input = document.getElementById("urlInput") as HTMLTextAreaElement;
const output = document.getElementById("urlOutput") as HTMLTextAreaElement;
const componentCb = document.getElementById("urlComponent") as HTMLInputElement;

const encodeBtn = document.getElementById("encodeBtn");
const decodeBtn = document.getElementById("decodeBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastOutput = "";
let lastMode: UrlMode = "encode";
let lastInput = "";

function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function run(mode: UrlMode) {
  clearError();
  const text = input.value;
  const err = validateUrlInput(text);
  if (err) { showError(err); return; }

  try {
    const result = processUrl(text, mode, componentCb.checked);
    output.value = result;

    const stats = getUrlStats(text, result);
    setValue("inputLengthResult", stats.inputLength);
    setValue("outputLengthResult", stats.outputLength);
    setValue("diffResult", stats.diff > 0 ? `+${stats.diff}` : stats.diff);

    lastOutput = result;
    lastMode = mode;
    lastInput = text;

    emptyState.hidden = true;
    resultsContainer.hidden = false;
  } catch (e) {
    showError("Invalid input for " + mode + ": " + (e as Error).message);
  }
}

function reset() {
  input.value = "";
  output.value = "";
  clearError();
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastOutput) return;
  copyToClipboard(copyUrlSummary(lastInput, lastMode, lastOutput));
}

encodeBtn?.addEventListener("click", () => run("encode"));
decodeBtn?.addEventListener("click", () => run("decode"));
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);