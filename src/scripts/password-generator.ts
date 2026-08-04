import {
  generatePassword,
  getPasswordStrength,
  estimateCrackTime,
  validatePasswordOptions,
  type PasswordOptions,
} from "../utils/password-generator";

import { setValue, copyToClipboard } from "../utils/calculator";

const lengthInput = document.getElementById("pwLength") as HTMLInputElement;
const uppercaseCb = document.getElementById("pwUppercase") as HTMLInputElement;
const lowercaseCb = document.getElementById("pwLowercase") as HTMLInputElement;
const numbersCb = document.getElementById("pwNumbers") as HTMLInputElement;
const symbolsCb = document.getElementById("pwSymbols") as HTMLInputElement;
const ambiguousCb = document.getElementById("pwExcludeAmbiguous") as HTMLInputElement;

const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const passwordOutput = document.getElementById("passwordOutput") as HTMLInputElement;

let lastPassword = "";

function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function getOptions(): PasswordOptions {
  return {
    length: parseInt(lengthInput.value, 10),
    uppercase: uppercaseCb.checked,
    lowercase: lowercaseCb.checked,
    numbers: numbersCb.checked,
    symbols: symbolsCb.checked,
    excludeAmbiguous: ambiguousCb.checked,
  };
}

function generate() {
  clearError();
  const opts = getOptions();
  const err = validatePasswordOptions(opts);
  if (err) { showError(err); return; }

  const password = generatePassword(opts);
  passwordOutput.value = password;
  lastPassword = password;

  setValue("strengthResult", getPasswordStrength(password));
  setValue("lengthResult", password.length);
  setValue("crackTimeResult", estimateCrackTime(password));

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  lengthInput.value = "16";
  uppercaseCb.checked = true;
  lowercaseCb.checked = true;
  numbersCb.checked = true;
  symbolsCb.checked = true;
  ambiguousCb.checked = false;
  passwordOutput.value = "";
  clearError();
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastPassword) return;
  copyToClipboard(lastPassword);
}

generateBtn?.addEventListener("click", generate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);