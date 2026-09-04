import { calculateFire, validateFireInputs } from "../utils/fire";
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
  "currentAge", "currentSavings", "annualIncome", "annualExpenses",
  "annualContribution", "expectedReturnRate", "inflationRate", "withdrawalRate",
];

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { beyond75:"Beyond 75 yrs", yrs:(y:number)=>`${y} yrs`, na:"N/A", atRate:(r:number)=>`At ${r}% withdrawal rate`, summary:(r:any,fmt:(n:number)=>string)=>`
FIRE Summary

FI Number: ${fmt(r.fiNumber)}
Years to FI: ${r.yearsToFi === null ? "Beyond 75 yrs" : r.yearsToFi}
FI Age: ${r.fiAge ?? "N/A"}
Savings Rate: ${r.savingsRatePercent.toFixed(1)}%
`.trim() },
  es: { beyond75:"Más de 75 años", yrs:(y:number)=>`${y} años`, na:"N/D", atRate:(r:number)=>`A una tasa de retiro del ${r}%`, summary:(r:any,fmt:(n:number)=>string)=>`
Resumen FIRE

Número FI: ${fmt(r.fiNumber)}
Años para FI: ${r.yearsToFi === null ? "Más de 75 años" : r.yearsToFi}
Edad FIRE: ${r.fiAge ?? "N/D"}
Tasa de Ahorro: ${r.savingsRatePercent.toFixed(1)}%
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
    currentAge, currentSavings, annualIncome, annualExpenses,
    annualContribution, expectedReturnRate, inflationRate, withdrawalRate,
  ] = fieldIds.map(val);

  const validationError = validateFireInputs(currentAge, annualExpenses, withdrawalRate, lang);
  if (validationError) { showError(validationError); return; }

  const result = calculateFire(
    currentAge, currentSavings, annualIncome, annualExpenses,
    annualContribution, expectedReturnRate, inflationRate, withdrawalRate
  );

  setValue("fiNumberResult", fmtCurrency(result.fiNumber));
  setValue("yearsToFiResult", result.yearsToFi === null ? t.beyond75 : t.yrs(result.yearsToFi));
  setValue("fiAgeResult", result.fiAge === null ? t.na : `${result.fiAge}`);
  setValue("savingsRateResult", `${result.savingsRatePercent.toFixed(1)}%`);
  setSubtitle("fiNumberResult", t.atRate(val("withdrawalRate")));

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