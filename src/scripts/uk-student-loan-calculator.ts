import { calculateUkStudentLoan, validateUkStudentLoanInputs } from "../utils/uk-student-loan";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

function val(id: string): number {
  return parseFloat((document.getElementById(id) as HTMLInputElement)?.value) || 0;
}

function sel(id: string): string {
  return (document.getElementById(id) as HTMLSelectElement)?.value || "plan2";
}

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });
}

function showError(message: string) {
  errorBox.textContent = message;
  errorBox.hidden = false;
}

function clearError() {
  errorBox.textContent = "";
  errorBox.hidden = true;
}

function calculate() {
  clearError();

  const annualSalary = val("annualSalary");
  const plan = sel("plan");

  const validationError = validateUkStudentLoanInputs(annualSalary, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateUkStudentLoan(annualSalary, plan);

  setValue("monthlyRepaymentResult", fmtCurrency(result.monthlyRepayment));
  setValue("annualRepaymentResult", fmtCurrency(result.annualRepayment));
  setValue("thresholdResult", fmtCurrency(result.threshold));
  setValue("repaymentRateResult", `${result.repaymentRate}%`);
  setSubtitle("monthlyRepaymentResult", lang === "es" ? "Deducido vía nómina" : "Deducted via payroll");

  lastSummary = lang === "es" ? `
Resumen de Pago de Préstamo Estudiantil del Reino Unido

Plan: ${plan}
Salario Anual: ${fmtCurrency(annualSalary)}
Umbral de Pago: ${fmtCurrency(result.threshold)}
Tasa de Pago: ${result.repaymentRate}%
Pago Mensual: ${fmtCurrency(result.monthlyRepayment)}
Pago Anual: ${fmtCurrency(result.annualRepayment)}
`.trim() : `
UK Student Loan Repayment Summary

Plan: ${plan}
Annual Salary: ${fmtCurrency(annualSalary)}
Repayment Threshold: ${fmtCurrency(result.threshold)}
Repayment Rate: ${result.repaymentRate}%
Monthly Repayment: ${fmtCurrency(result.monthlyRepayment)}
Annual Repayment: ${fmtCurrency(result.annualRepayment)}
`.trim();

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  const salaryEl = document.getElementById("annualSalary") as HTMLInputElement;
  if (salaryEl) salaryEl.value = "";
  clearError();
  lastSummary = "";
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastSummary) return;
  copyToClipboard(lastSummary);
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);