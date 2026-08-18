import {
  calculateVAT,
  validateVATInput,
  copyVATSummary,
  type VATInput,
} from "../utils/vat";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";
import { formatCurrency, getSavedCurrency, onCurrencyChange } from "../utils/currency";

const amountInput = document.getElementById("amount") as HTMLInputElement;
const vatRateInput = document.getElementById("vatRate") as HTMLInputElement;
const vatIncludedInput = document.getElementById("isVatIncluded") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: VATInput | null = null;

function showError(msg: string) {
  errorBox.textContent = msg;
  errorBox.hidden = false;
}

function clearError() {
  errorBox.textContent = "";
  errorBox.hidden = true;
}

function calculate() {
  clearError();

  const input: VATInput = {
    amount: Number(amountInput.value),
    vatRate: Number(vatRateInput.value),
    isVatIncluded: vatIncludedInput.checked,
  };

  if (!input.amount || input.vatRate === undefined) {
    showError("Please fill all required fields.");
    return;
  }

  const err = validateVATInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateVAT(input);
  const currency = getSavedCurrency();

  setValue("netAmountResult", formatCurrency(result.netAmount, currency));
  setValue("vatAmountResult", formatCurrency(result.vatAmount, currency));
  setValue("grossAmountResult", formatCurrency(result.grossAmount, currency));
  setSubtitle("grossAmountResult", "final payable amount");

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  amountInput.value = "";
  vatRateInput.value = "";
  vatIncludedInput.checked = false;
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateVAT(lastInput);
  copyToClipboard(copyVATSummary(lastInput, result, getSavedCurrency()));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);

onCurrencyChange(() => {
  if (lastInput) calculate();
});