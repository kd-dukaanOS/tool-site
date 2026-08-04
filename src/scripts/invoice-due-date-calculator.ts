import {
  calculateInvoiceDueDate,
  validateInvoiceDueDateInput,
  formatDueDate,
  copyInvoiceDueDateSummary,
  type InvoiceDueDateInput,
} from "../utils/invoice-due-date";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const invoiceDateInput = document.getElementById("invoiceDate") as HTMLInputElement;
const termsInput = document.getElementById("paymentTermsDays") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: InvoiceDueDateInput | null = null;

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

  if (!invoiceDateInput.value) {
    showError("Please select an invoice date.");
    return;
  }

  const input: InvoiceDueDateInput = {
    invoiceDate: new Date(invoiceDateInput.value),
    paymentTermsDays: Number(termsInput.value),
  };

  if (!input.paymentTermsDays) {
    showError("Please enter payment terms.");
    return;
  }

  const err = validateInvoiceDueDateInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateInvoiceDueDate(input);

  setValue("dueDateResult", formatDueDate(result.dueDate));

  if (result.isOverdue) {
    setValue("statusResult", "Overdue");
    setSubtitle("statusResult", `${Math.abs(result.daysRemaining)} days past due`);
  } else {
    setValue("statusResult", `${result.daysRemaining} days left`);
    setSubtitle("statusResult", result.status === "due-soon" ? "due soon" : "on track");
  }

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  invoiceDateInput.value = "";
  termsInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateInvoiceDueDate(lastInput);
  copyToClipboard(copyInvoiceDueDateSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);