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

const lang = (window as any).calcLang === "es" ? "es" : "en";

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
    showError(lang === "es" ? "Por favor selecciona una fecha de factura." : "Please select an invoice date.");
    return;
  }

  const input: InvoiceDueDateInput = {
    invoiceDate: new Date(invoiceDateInput.value),
    paymentTermsDays: Number(termsInput.value),
  };

  if (!input.paymentTermsDays) {
    showError(lang === "es" ? "Por favor ingresa el plazo de pago." : "Please enter payment terms.");
    return;
  }

  const err = validateInvoiceDueDateInput(input, lang);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateInvoiceDueDate(input);

  setValue("dueDateResult", formatDueDate(result.dueDate));

  if (result.isOverdue) {
    setValue("statusResult", lang === "es" ? "Vencida" : "Overdue");
    setSubtitle("statusResult", lang === "es" ? `${Math.abs(result.daysRemaining)} días de retraso` : `${Math.abs(result.daysRemaining)} days past due`);
  } else {
    setValue("statusResult", lang === "es" ? `${result.daysRemaining} días restantes` : `${result.daysRemaining} days left`);
    setSubtitle("statusResult", result.status === "due-soon" ? (lang === "es" ? "vence pronto" : "due soon") : (lang === "es" ? "en curso" : "on track"));
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
  copyToClipboard(copyInvoiceDueDateSummary(lastInput, result, lang));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);