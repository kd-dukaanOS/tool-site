import { calculateEIDetailed, validateIncome, formatCurrency } from "../utils/regional-salary";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const incomeInput = document.getElementById("grossIncome") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { deducted:"deducted from your pay", header:"EI Premium Summary", gross:"Gross Income", insurable:"Insurable Earnings", employee:"Employee Premium", employer:"Employer Premium", total:"Total Premium" },
  es: { deducted:"deducido de tu pago", header:"Resumen de Prima de EI", gross:"Ingreso Bruto", insurable:"Ingresos Asegurables", employee:"Prima del Empleado", employer:"Prima del Empleador", total:"Prima Total" },
}[lang];

let lastSummary = "";

function showError(msg: string) { errorBox.textContent = msg; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function calculate() {
  clearError();
  const grossIncome = parseFloat(incomeInput.value);

  const err = validateIncome(grossIncome, lang);
  if (err) return showError(err);

  const r = calculateEIDetailed(grossIncome);

  setValue("insurableResult", formatCurrency(r.insurableEarnings, "CAD"));
  setValue("employeeResult", formatCurrency(r.employeeContribution, "CAD"));
  setValue("employerResult", formatCurrency(r.employerContribution, "CAD"));
  setValue("totalResult", formatCurrency(r.totalContribution, "CAD"));
  setSubtitle("employeeResult", t.deducted);

  lastSummary = `${t.header}\n\n${t.gross}: ${formatCurrency(grossIncome, "CAD")}\n` +
    `${t.insurable}: ${formatCurrency(r.insurableEarnings, "CAD")}\n` +
    `${t.employee}: ${formatCurrency(r.employeeContribution, "CAD")}\n` +
    `${t.employer}: ${formatCurrency(r.employerContribution, "CAD")}\n` +
    `${t.total}: ${formatCurrency(r.totalContribution, "CAD")}\n`;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  incomeInput.value = "";
  clearError();
  lastSummary = "";
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() { if (lastSummary) copyToClipboard(lastSummary); }

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);