import { calculateCoastFire, validateCoastFireInputs } from "../utils/coast-fire";
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
  "currentAge", "currentSavings", "targetRetirementAge", "annualExpenses",
  "annualContribution", "expectedReturnRate", "inflationRate", "withdrawalRate",
];

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { reached:"Reached", notYet:"Not Yet", notYetReached:"Not Yet Reached", beyond:"Beyond timeline", canStop:"You can stop contributing", keepGoing:"Keep contributing", summary:(r:any)=>`
Coast FIRE Summary

Coast FIRE Number: ${fmtCurrency(r.coastFireNumber)}
Status: ${r.isCoastFireReached ? "Reached" : "Not Yet Reached"}
Coast FIRE Age: ${r.coastFireAge ?? "Beyond timeline"}
Projected Balance at Retirement (no more contributions): ${fmtCurrency(r.projectedBalanceAtRetirement)}
`.trim() },
  es: { reached:"Alcanzado", notYet:"Aún No", notYetReached:"Aún No Alcanzado", beyond:"Fuera del plazo", canStop:"Puedes dejar de aportar", keepGoing:"Sigue aportando", summary:(r:any)=>`
Resumen Coast FIRE

Número Coast FIRE: ${fmtCurrency(r.coastFireNumber)}
Estado: ${r.isCoastFireReached ? "Alcanzado" : "Aún No Alcanzado"}
Edad Coast FIRE: ${r.coastFireAge ?? "Fuera del plazo"}
Saldo Proyectado en Jubilación (sin más aportes): ${fmtCurrency(r.projectedBalanceAtRetirement)}
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
    currentAge, currentSavings, targetRetirementAge, annualExpenses,
    annualContribution, expectedReturnRate, inflationRate, withdrawalRate,
  ] = fieldIds.map(val);

  const validationError = validateCoastFireInputs(currentAge, targetRetirementAge, annualExpenses, withdrawalRate, lang);
  if (validationError) { showError(validationError); return; }

  const result = calculateCoastFire(
    currentAge, currentSavings, targetRetirementAge, annualExpenses,
    annualContribution, expectedReturnRate, inflationRate, withdrawalRate
  );

  setValue("coastFireNumberResult", fmtCurrency(result.coastFireNumber));
  setValue("statusResult", result.isCoastFireReached ? t.reached : t.notYet);
  setValue("coastFireAgeResult", result.coastFireAge === null ? t.beyond : `${result.coastFireAge}`);
  setValue("projectedBalanceResult", fmtCurrency(result.projectedBalanceAtRetirement));
  setSubtitle("statusResult", result.isCoastFireReached ? t.canStop : t.keepGoing);

  lastSummary = t.summary(result);

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