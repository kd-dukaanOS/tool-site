import { decodeJwt, validateJwtInput, copyJwtSummary } from "../utils/jwt-decoder";
import { setValue, copyToClipboard } from "../utils/calculator";

const tokenInput = document.getElementById("jwtInput") as HTMLTextAreaElement;
const decodeBtn = document.getElementById("decodeBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const headerOutput = document.getElementById("headerOutput") as HTMLElement;
const payloadOutput = document.getElementById("payloadOutput") as HTMLElement;

let lastToken = "";
let lastParts: ReturnType<typeof decodeJwt> | null = null;

function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function decode() {
  clearError();
  const token = tokenInput.value;
  const inputErr = validateJwtInput(token);
  if (inputErr) { showError(inputErr); return; }

  try {
    const parts = decodeJwt(token);

    headerOutput.textContent = JSON.stringify(parts.header, null, 2);
    payloadOutput.textContent = JSON.stringify(parts.payload, null, 2);

    setValue("statusResult", parts.isExpired ? "Expired" : "Valid");
    setValue("issuedResult", parts.issuedAt ?? "N/A");
    setValue("expiresResult", parts.expiresAt ?? "N/A");
    setValue("algResult", (parts.header.alg as string) ?? "N/A");

    lastToken = token;
    lastParts = parts;

    emptyState.hidden = true;
    resultsContainer.hidden = false;
  } catch (e) {
    showError((e as Error).message);
  }
}

function reset() {
  tokenInput.value = "";
  clearError();
  lastParts = null;
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastParts) return;
  copyToClipboard(copyJwtSummary(lastToken, lastParts));
}

decodeBtn?.addEventListener("click", decode);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);