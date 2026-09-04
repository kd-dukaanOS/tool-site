import { calculateChurnRate, validateChurnRateInputs } from "../utils/churn-rate";
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
  "customersStartOfPeriod", "customersLost", "mrrStartOfPeriod", "mrrChurned", "mrrExpansion", "projectionMonths",
];

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { afterMonths:(m:number)=>`After ${m} months`, negChurn:"Negative churn (net expansion)", summary:(r:any,pm:number)=>`
Churn Rate Summary

Customer Churn Rate: ${fmtPercent(r.customerChurnRate)}
Revenue Churn Rate: ${fmtPercent(r.revenueChurnRate)}
Net Revenue Churn Rate: ${fmtPercent(r.netRevenueChurnRate)}
Customers Lost: ${r.customersLost}
Revenue Churned: ${fmtCurrency(r.revenueChurned)}
Projected Customers Remaining (${pm} months): ${Math.round(r.projectedCustomersRemaining).toLocaleString()}
`.trim() },
  es: { afterMonths:(m:number)=>`Después de ${m} meses`, negChurn:"Abandono negativo (expansión neta)", summary:(r:any,pm:number)=>`
Resumen de Tasa de Abandono

Tasa de Abandono de Clientes: ${fmtPercent(r.customerChurnRate)}
Tasa de Abandono de Ingresos: ${fmtPercent(r.revenueChurnRate)}
Tasa Neta de Abandono de Ingresos: ${fmtPercent(r.netRevenueChurnRate)}
Clientes Perdidos: ${r.customersLost}
Ingresos Perdidos: ${fmtCurrency(r.revenueChurned)}
Clientes Proyectados Restantes (${pm} meses): ${Math.round(r.projectedCustomersRemaining).toLocaleString()}
`.trim() },
}[lang];

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
function fmtPercent(n: number): string {
  return `${n.toFixed(2)}%`;
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

  const [customersStartOfPeriod, customersLost, mrrStartOfPeriod, mrrChurned, mrrExpansion, projectionMonths] = fieldIds.map(val);

  const validationError = validateChurnRateInputs(customersStartOfPeriod, mrrStartOfPeriod, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateChurnRate(customersStartOfPeriod, customersLost, mrrStartOfPeriod, mrrChurned, mrrExpansion, projectionMonths || 12);

  setValue("customerChurnResult", fmtPercent(result.customerChurnRate));
  setValue("revenueChurnResult", fmtPercent(result.revenueChurnRate));
  setValue("netRevenueChurnResult", fmtPercent(result.netRevenueChurnRate));
  setValue("projectedCustomersResult", Math.round(result.projectedCustomersRemaining).toLocaleString());
  setSubtitle("projectedCustomersResult", t.afterMonths(projectionMonths || 12));
  setSubtitle("netRevenueChurnResult", result.netRevenueChurned <= 0 ? t.negChurn : " ");

  lastSummary = t.summary(result, projectionMonths || 12);

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