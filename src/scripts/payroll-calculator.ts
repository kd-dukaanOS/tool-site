import {
  calculatePayroll,
  validatePayrollInput,
  copyPayrollSummary,
  type PayrollInput,
} from "../utils/payroll";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const basicInput = document.getElementById("basicSalary") as HTMLInputElement;
const hraInput = document.getElementById("hra") as HTMLInputElement;
const allowancesInput = document.getElementById("otherAllowances") as HTMLInputElement;
const pfInput = document.getElementById("pfPercent") as HTMLInputElement;
const ptInput = document.getElementById("professionalTax") as HTMLInputElement;
const otherDeductionsInput = document.getElementById("otherDeductions") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: PayrollInput | null = null;

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

  const input: PayrollInput = {
    basicSalary: Number(basicInput.value),
    hra: Number(hraInput.value) || 0,
    otherAllowances: Number(allowancesInput.value) || 0,
    pfPercent: Number(pfInput.value) || 0,
    professionalTax: Number(ptInput.value) || 0,
    otherDeductions: Number(otherDeductionsInput.value) || 0,
  };

  if (!input.basicSalary) {
    showError("Please enter basic salary.");
    return;
  }

  const err = validatePayrollInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculatePayroll(input);

  setValue("grossSalaryResult", `₹${result.grossSalary.toLocaleString("en-IN")}`);
  setValue("pfDeductionResult", `₹${result.pfDeduction.toLocaleString("en-IN")}`);
  setValue("totalDeductionsResult", `₹${result.totalDeductions.toLocaleString("en-IN")}`);
  setValue("netSalaryResult", `₹${result.netSalary.toLocaleString("en-IN")}`);
  setSubtitle("netSalaryResult", "take-home pay");

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  basicInput.value = "";
  hraInput.value = "";
  allowancesInput.value = "";
  pfInput.value = "";
  ptInput.value = "";
  otherDeductionsInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculatePayroll(lastInput);
  copyToClipboard(copyPayrollSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);