import { calculateCreditCardInterest, validateCreditCardInterestInputs } from "../utils/credit-card-interest";
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

const fieldIds = ["balance", "apr", "monthlyPayment"];

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { tooLow:"This monthly payment is too low to ever pay off the balance — increase it above the monthly interest charge.", yMo:(y:number,m:number)=>`${y}y ${m}mo`, monthsOnly:(m:number)=>`${m} months`, totalMonths:(m:number)=>`${m} months total`, summary:(bal:string,pay:string,time:string,int:string,rep:string)=>`
Credit Card Interest Summary

Starting Balance: ${bal}
Monthly Payment: ${pay}
Time to Payoff: ${time}
Total Interest: ${int}
Total Repayment: ${rep}
`.trim() },
  es: { tooLow:"Este pago mensual es demasiado bajo para pagar el saldo — auméntalo por encima del cargo de interés mensual.", yMo:(y:number,m:number)=>`${y}a ${m}m`, monthsOnly:(m:number)=>`${m} meses`, totalMonths:(m:number)=>`${m} meses en total`, summary:(bal:string,pay:string,time:string,int:string,rep:string)=>`
Resumen de Interés de Tarjeta de Crédito

Saldo Inicial: ${bal}
Pago Mensual: ${pay}
Tiempo para Pagar: ${time}
Interés Total: ${int}
Pago Total: ${rep}
`.trim() },
}[lang];

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { tooLow:"This monthly payment is too low to ever pay off the balance — increase it above the monthly interest charge.", yMo:(y:number,m:number)=>`${y}y ${m}mo`, monthsOnly:(m:number)=>`${m} months`, totalMonths:(m:number)=>`${m} months total`, summary:(bal:string,pay:string,time:string,int:string,rep:string)=>`
Credit Card Interest Summary

Starting Balance: ${bal}
Monthly Payment: ${pay}
Time to Payoff: ${time}
Total Interest: ${int}
Total Repayment: ${rep}
`.trim() },
  es: { tooLow:"Este pago mensual es demasiado bajo para pagar el saldo — auméntalo por encima del cargo de interés mensual.", yMo:(y:number,m:number)=>`${y}a ${m}m`, monthsOnly:(m:number)=>`${m} meses`, totalMonths:(m:number)=>`${m} meses en total`, summary:(bal:string,pay:string,time:string,int:string,rep:string)=>`
Resumen de Interés de Tarjeta de Crédito

Saldo Inicial: ${bal}
Pago Mensual: ${pay}
Tiempo para Pagar: ${time}
Interés Total: ${int}
Pago Total: ${rep}
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

  const [balance, apr, monthlyPayment] = fieldIds.map(val);

  const validationError = validateCreditCardInterestInputs(balance, monthlyPayment, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateCreditCardInterest(balance, apr, monthlyPayment);

  if (!result.payoffPossible) {
    showError(t.tooLow);
    emptyState.hidden = false;
    resultsContainer.hidden = true;
    return;
  }

  const years = Math.floor(result.monthsToPayoff / 12);
  const months = result.monthsToPayoff % 12;
  const timeLabel = years > 0 ? t.yMo(years, months) : t.monthsOnly(months);

  setValue("timeToPayoffResult", timeLabel);
  setValue("totalInterestResult", fmtCurrency(result.totalInterest));
  setValue("totalRepaymentResult", fmtCurrency(result.totalRepayment));
  setValue("monthlyPaymentResult", fmtCurrency(monthlyPayment));
  setSubtitle("timeToPayoffResult", t.totalMonths(result.monthsToPayoff));

  lastSummary = t.summary(fmtCurrency(balance), fmtCurrency(monthlyPayment), timeLabel, fmtCurrency(result.totalInterest), fmtCurrency(result.totalRepayment));

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