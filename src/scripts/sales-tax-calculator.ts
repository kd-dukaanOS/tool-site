import {
  calculateSalesTax,
  validateSalesTaxInput,
  copySalesTaxSummary,
  type SalesTaxInput,
} from "../utils/sales-tax";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";
import { formatCurrency, getSavedCurrency, onCurrencyChange } from "../utils/currency";
const amountInput = document.getElementById("amount") as HTMLInputElement;
const taxRateInput = document.getElementById("taxRate") as HTMLInputElement;
const taxIncludedInput = document.getElementById("isTaxIncluded") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: SalesTaxInput | null = null;

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

  const input: SalesTaxInput = {
    amount: Number(amountInput.value),
    taxRate: Number(taxRateInput.value),
    isTaxIncluded: taxIncludedInput.checked,
  };

  if (!input.amount || input.taxRate === undefined) {
    showError("Please fill all required fields.");
    return;
  }

  const err = validateSalesTaxInput(input);
  if (err) {
    showError(err);
    return;
  }

 const result = calculateSalesTax(input);
  const currency = getSavedCurrency();

  setValue("netAmountResult", formatCurrency(result.netAmount, currency));
  setValue("taxAmountResult", formatCurrency(result.taxAmount, currency));
  setValue("grossAmountResult", formatCurrency(result.grossAmount, currency));
  setSubtitle("grossAmountResult", "final payable amount");

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  amountInput.value = "";
  taxRateInput.value = "";
  taxIncludedInput.checked = false;
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateSalesTax(lastInput);
  copyToClipboard(copySalesTaxSummary(lastInput, result, getSavedCurrency()));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);

onCurrencyChange(() => {
  if (lastInput) calculate();
});