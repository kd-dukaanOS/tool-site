import { calculateDownPayment, validateDownPaymentInputs } from "../utils/down-payment";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

function val(id: string): number {
  return parseFloat((document.getElementById(id) as HTMLInputElement)?.value) || 0;
}

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const fieldIds = [
  "homePrice", "downPaymentPercent", "mortgageRate", "loanTermYears",
  "propertyTaxRate", "annualInsurance", "closingCostPercent", "pmiRate",
];

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { inclClosing:(c:string)=>`Incl. ${c} closing costs`, inclPmi:(p:string)=>`Incl. ${p} PMI/mo`, noPmi:"No PMI required", yes:"Yes", no:"No", summary:(r:any,fmt:(n:number)=>string)=>`
Down Payment Summary

Down Payment: ${fmt(r.downPayment)}
Loan Amount: ${fmt(r.loanAmount)}
Closing Costs: ${fmt(r.closingCosts)}
Cash Needed at Closing: ${fmt(r.cashNeeded)}
Total Monthly Payment: ${fmt(r.totalMonthlyPayment)}
PMI Required: ${r.pmiRequired ? "Yes" : "No"}
`.trim() },
  es: { inclClosing:(c:string)=>`Incl. ${c} en costos de cierre`, inclPmi:(p:string)=>`Incl. ${p} PMI/mes`, noPmi:"No se requiere PMI", yes:"Sí", no:"No", summary:(r:any,fmt:(n:number)=>string)=>`
Resumen de Pago Inicial

Pago Inicial: ${fmt(r.downPayment)}
Monto del Préstamo: ${fmt(r.loanAmount)}
Costos de Cierre: ${fmt(r.closingCosts)}
Efectivo Necesario al Cierre: ${fmt(r.cashNeeded)}
Pago Mensual Total: ${fmt(r.totalMonthlyPayment)}
PMI Requerido: ${r.pmiRequired ? "Sí" : "No"}
`.trim() },
}[lang];

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
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

  const [
    homePrice, downPaymentPercent, mortgageRate, loanTermYears,
    propertyTaxRate, annualInsurance, closingCostPercent, pmiRate,
  ] = fieldIds.map(val);

  const validationError = validateDownPaymentInputs(homePrice, downPaymentPercent, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateDownPayment(
    homePrice, downPaymentPercent, mortgageRate, loanTermYears,
    propertyTaxRate, annualInsurance, closingCostPercent, pmiRate
  );

  setValue("downPaymentResult", fmtCurrency(result.downPayment));
  setValue("loanAmountResult", fmtCurrency(result.loanAmount));
  setValue("cashNeededResult", fmtCurrency(result.cashNeeded));
  setValue("monthlyPaymentResult", fmtCurrency(result.totalMonthlyPayment));
  setSubtitle("cashNeededResult", t.inclClosing(fmtCurrency(result.closingCosts)));
  setSubtitle("monthlyPaymentResult", result.pmiRequired ? t.inclPmi(fmtCurrency(result.monthlyPMI)) : t.noPmi);

  lastSummary = t.summary(result, fmtCurrency);

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  fieldIds.forEach((id) => {
    const el = document.getElementById(id) as HTMLInputElement;
    if (el) el.value = "";
  });
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