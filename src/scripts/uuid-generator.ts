import { generateUuids, validateUuidCount, copyUuidSummary, type UuidVersion } from "../utils/uuid-generator";
import { setValue, copyToClipboard } from "../utils/calculator";

const countInput = document.getElementById("uuidCount") as HTMLInputElement;
const versionSelect = document.getElementById("uuidVersion") as HTMLSelectElement;
const uppercaseCb = document.getElementById("uuidUppercase") as HTMLInputElement;
const hyphensCb = document.getElementById("uuidHyphens") as HTMLInputElement;

const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const uuidOutput = document.getElementById("uuidOutput") as HTMLTextAreaElement;

let lastUuids: string[] = [];

function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function format(uuid: string): string {
  let result = uuid;
  if (!hyphensCb.checked) result = result.replace(/-/g, "");
  if (uppercaseCb.checked) result = result.toUpperCase();
  return result;
}

function generate() {
  clearError();
  const count = parseInt(countInput.value, 10);
  const err = validateUuidCount(count);
  if (err) { showError(err); return; }

  const version = versionSelect.value as UuidVersion;
  const uuids = generateUuids(count, version).map(format);

  uuidOutput.value = uuids.join("\n");
  lastUuids = uuids;

  setValue("countResult", uuids.length);
  setValue("versionResult", version === "v4" ? "Version 4 (Random)" : "Nil UUID");
  setValue("lengthResult", uuids[0]?.length ?? 0);

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  countInput.value = "5";
  versionSelect.value = "v4";
  uppercaseCb.checked = false;
  hyphensCb.checked = true;
  uuidOutput.value = "";
  clearError();
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastUuids.length) return;
  copyToClipboard(copyUuidSummary(lastUuids));
}

generateBtn?.addEventListener("click", generate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);