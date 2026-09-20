import { calculateMortgageAffordability, validateAffordabilityInputs } from "../utils/mortgage-affordability";
import { formatCurrency, setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const incomeInput = document.getElementById("annualIncome") as HTMLInputElement;
const debtsInput = document.getElementById("monthlyDebts") as HTMLInputElement;
const downPaymentInput = document.getElementById("downPayment") as HTMLInputElement;
const rateInput = document.getElementById("annualRate") as HTMLInputElement;
const yearsInput = document.getElementById("loanYears") as HTMLInputElement;
const taxesInsuranceInput = document.getElementById("monthlyTaxesInsurance") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";

let lastSummary = "";

function showError(msg: string) { errorBox.textContent = msg; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function calculate() {
  clearError();

  const annualIncome = parseFloat(incomeInput.value);
  const monthlyDebts = parseFloat(debtsInput.value || "0");
  const downPayment = parseFloat(downPaymentInput.value || "0");
  const annualRate = parseFloat(rateInput.value);
  const loanYears = parseFloat(yearsInput.value);
  const monthlyTaxesInsurance = parseFloat(taxesInsuranceInput.value || "0");

  const err = validateAffordabilityInputs(annualIncome, monthlyDebts, downPayment, annualRate, loanYears, lang);
  if (err) return showError(err);

  const r = calculateMortgageAffordability(
    annualIncome, monthlyDebts, downPayment, annualRate, loanYears, monthlyTaxesInsurance
  );

  setValue("maxHomePriceResult", formatCurrency(r.maxHomePrice));
  setSubtitle("maxHomePriceResult", lang === "es" ? `Limitado por ${r.limitingFactor === "front-end" ? "presupuesto de vivienda" : "carga total de deuda"}` : `Limited by ${r.limitingFactor === "front-end" ? "housing budget" : "total debt load"}`);
  setValue("maxLoanAmountResult", formatCurrency(r.maxLoanAmount));
  setValue("maxMonthlyPaymentResult", formatCurrency(r.maxMonthlyPayment));
  setValue("frontEndRatioResult", `${r.frontEndRatio.toFixed(1)}%`);
  setValue("backEndRatioResult", `${r.backEndRatio.toFixed(1)}%`);

  lastSummary = lang === "es" ?
    `Estimación de Capacidad Hipotecaria\n\n` +
    `Precio Máximo de Vivienda: ${formatCurrency(r.maxHomePrice)}\n` +
    `Monto Máximo del Préstamo: ${formatCurrency(r.maxLoanAmount)}\n` +
    `Pago Máximo de Vivienda Mensual: ${formatCurrency(r.maxMonthlyPayment)}\n` +
    `Ratio Front-End: ${r.frontEndRatio.toFixed(1)}%\n` +
    `Ratio Back-End: ${r.backEndRatio.toFixed(1)}%\n` +
    `Factor Limitante: ${r.limitingFactor === "front-end" ? "Presupuesto de vivienda (regla 28%)" : "Carga total de deuda (regla 36%)"}\n`
    :
    `Mortgage Affordability Estimate\n\n` +
    `Max Home Price: ${formatCurrency(r.maxHomePrice)}\n` +
    `Max Loan Amount: ${formatCurrency(r.maxLoanAmount)}\n` +
    `Max Monthly Housing Payment: ${formatCurrency(r.maxMonthlyPayment)}\n` +
    `Front-End Ratio: ${r.frontEndRatio.toFixed(1)}%\n` +
    `Back-End Ratio: ${r.backEndRatio.toFixed(1)}%\n` +
    `Limiting Factor: ${r.limitingFactor === "front-end" ? "Housing budget (28% rule)" : "Total debt load (36% rule)"}\n`;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  [incomeInput, debtsInput, downPaymentInput, rateInput, yearsInput, taxesInsuranceInput].forEach(el => el.value = "");
  clearError();
  lastSummary = "";
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() { if (lastSummary) copyToClipboard(lastSummary); }

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);