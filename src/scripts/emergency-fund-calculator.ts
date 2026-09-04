import { calculateEmergencyFund, validateEmergencyFundInputs } from "../utils/emergency-fund";
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

const fieldIds = ["monthlyExpenses", "currentSavings", "targetMonths", "monthlySavingsCapacity"];

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { dash:"—", goalReached:"Goal reached", months:(m:number)=>`${m} months`, na:"N/A", monthsOf:(m:number)=>`${m} months of expenses`, summary:(r:any,tm:number,fmt:(n:number)=>string)=>`
Emergency Fund Summary

Target Amount (${tm} months): ${fmt(r.targetAmount)}
Current Progress: ${r.progressPercent.toFixed(0)}%
Remaining to Save: ${fmt(r.remainingAmount)}
Time to Reach Goal: ${r.monthsToGoal === null ? "N/A" : r.monthsToGoal === 0 ? "Goal reached" : `${r.monthsToGoal} months`}
`.trim() },
  es: { dash:"—", goalReached:"Meta alcanzada", months:(m:number)=>`${m} meses`, na:"N/D", monthsOf:(m:number)=>`${m} meses de gastos`, summary:(r:any,tm:number,fmt:(n:number)=>string)=>`
Resumen de Fondo de Emergencia

Monto Objetivo (${tm} meses): ${fmt(r.targetAmount)}
Progreso Actual: ${r.progressPercent.toFixed(0)}%
Restante por Ahorrar: ${fmt(r.remainingAmount)}
Tiempo para Alcanzar la Meta: ${r.monthsToGoal === null ? "N/D" : r.monthsToGoal === 0 ? "Meta alcanzada" : `${r.monthsToGoal} meses`}
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

  const [monthlyExpenses, currentSavings, targetMonths, monthlySavingsCapacity] = fieldIds.map(val);

  const validationError = validateEmergencyFundInputs(monthlyExpenses, targetMonths, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateEmergencyFund(monthlyExpenses, currentSavings, targetMonths, monthlySavingsCapacity);

  setValue("targetAmountResult", fmtCurrency(result.targetAmount));
  setValue("progressResult", `${result.progressPercent.toFixed(0)}%`);
  setValue("remainingResult", fmtCurrency(result.remainingAmount));
  setValue(
    "monthsToGoalResult",
    result.monthsToGoal === null ? t.dash : result.monthsToGoal === 0 ? t.goalReached : t.months(result.monthsToGoal)
  );
  setSubtitle("targetAmountResult", t.monthsOf(targetMonths));

  lastSummary = t.summary(result, targetMonths, fmtCurrency);

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