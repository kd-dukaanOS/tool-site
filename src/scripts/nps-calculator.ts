import { calculateNPS, validateNPSInput, copyNPSSummary, type NPSInput } from "../utils/nps";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const currentAgeInput = document.getElementById("currentAge") as HTMLInputElement;
const retirementAgeInput = document.getElementById("retirementAge") as HTMLInputElement;
const contributionInput = document.getElementById("monthlyContribution") as HTMLInputElement;
const returnInput = document.getElementById("expectedReturn") as HTMLInputElement;
const annuityPercentInput = document.getElementById("annuityPercent") as HTMLInputElement;
const annuityRateInput = document.getElementById("annuityRate") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: NPSInput | null = null;

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

  const input: NPSInput = {
    currentAge: Number(currentAgeInput.value),
    retirementAge: Number(retirementAgeInput.value),
    monthlyContribution: Number(contributionInput.value),
    expectedReturn: Number(returnInput.value),
    annuityPercent: Number(annuityPercentInput.value),
    annuityRate: Number(annuityRateInput.value),
  };

  if (
    !input.currentAge ||
    !input.retirementAge ||
    !input.monthlyContribution ||
    !input.expectedReturn ||
    !input.annuityPercent ||
    !input.annuityRate
  ) {
    showError("Please fill all fields.");
    return;
  }

  const err = validateNPSInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateNPS(input);

  setValue("investedResult", `₹${result.totalInvested.toLocaleString("en-IN")}`);
  setValue("growthResult", `₹${result.totalGrowth.toLocaleString("en-IN")}`);
  setValue("corpusResult", `₹${result.maturityCorpus.toLocaleString("en-IN")}`);
  setValue("lumpsumResult", `₹${result.lumpsumWithdrawal.toLocaleString("en-IN")}`);
  setValue("annuityCorpusResult", `₹${result.annuityCorpus.toLocaleString("en-IN")}`);
  setValue("pensionResult", `₹${result.monthlyPension.toLocaleString("en-IN")}`);
  setSubtitle("pensionResult", "per month after retirement");

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  currentAgeInput.value = "";
  retirementAgeInput.value = "";
  contributionInput.value = "";
  returnInput.value = "";
  annuityPercentInput.value = "";
  annuityRateInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateNPS(lastInput);
  copyToClipboard(copyNPSSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);