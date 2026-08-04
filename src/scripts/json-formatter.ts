import { formatJson, minifyJson, validateJson, getJsonStats, copyJsonSummary } from "../utils/json-formatter";
import { setValue, copyToClipboard } from "../utils/calculator";

const input = document.getElementById("jsonInput") as HTMLTextAreaElement;
const output = document.getElementById("jsonOutput") as HTMLTextAreaElement;

const formatBtn = document.getElementById("formatBtn");
const minifyBtn = document.getElementById("minifyBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastOutput = "";

function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function run(mode: "format" | "minify") {
  clearError();
  const err = validateJson(input.value);
  if (err) { showError(err); output.value = ""; return; }

  const result = mode === "format" ? formatJson(input.value) : minifyJson(input.value);
  output.value = result;
  lastOutput = result;

  const stats = getJsonStats(input.value);
  setValue("keysResult", stats.keys);
  setValue("depthResult", stats.depth);
  setValue("sizeResult", `${stats.size} B`);

  emptyState.hidden = true;
  resultsContainer.hidden = false;
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
  copyToClipboard(copyJsonSummary(lastOutput));
}

formatBtn?.addEventListener("click", () => run("format"));
minifyBtn?.addEventListener("click", () => run("minify"));
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);