export interface DebtInput {
  name: string;
  balance: number;
  minPayment: number;
  interestRate: number;
}

export interface DebtConsolidationResult {
  currentTotalBalance: number;
  currentMonthlyPayment: number;
  currentTotalInterest: number;
  currentPayoffMonths: number;
  consolidatedMonthlyPayment: number;
  consolidatedTotalInterest: number;
  consolidatedPayoffMonths: number;
  interestSaved: number;
  isConsolidationBetter: boolean;
}

function simulateCurrentDebts(debts: DebtInput[]): { totalInterest: number; payoffMonths: number } {
  const balances = debts.map((d) => d.balance);
  let month = 0;
  let totalInterest = 0;

  while (balances.some((b) => b > 0) && month < 1200) {
    month++;
    for (let i = 0; i < debts.length; i++) {
      if (balances[i] <= 0) continue;
      const monthlyRate = debts[i].interestRate / 100 / 12;
      const interest = balances[i] * monthlyRate;
      totalInterest += interest;
      balances[i] += interest;
      const applied = Math.min(debts[i].minPayment, balances[i]);
      balances[i] -= applied;
    }
  }

  return { totalInterest, payoffMonths: month };
}

export function calculateDebtConsolidation(
  debts: DebtInput[],
  consolidationRate: number,
  consolidationTermMonths: number
): DebtConsolidationResult {
  const currentTotalBalance = debts.reduce((sum, d) => sum + d.balance, 0);
  const currentMonthlyPayment = debts.reduce((sum, d) => sum + d.minPayment, 0);
  const current = simulateCurrentDebts(debts);

  const monthlyRate = consolidationRate / 100 / 12;
  const consolidatedMonthlyPayment =
    monthlyRate === 0
      ? currentTotalBalance / consolidationTermMonths
      : (currentTotalBalance * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -consolidationTermMonths));

  const consolidatedTotalPaid = consolidatedMonthlyPayment * consolidationTermMonths;
  const consolidatedTotalInterest = consolidatedTotalPaid - currentTotalBalance;

  const interestSaved = current.totalInterest - consolidatedTotalInterest;

  return {
    currentTotalBalance,
    currentMonthlyPayment,
    currentTotalInterest: current.totalInterest,
    currentPayoffMonths: current.payoffMonths,
    consolidatedMonthlyPayment,
    consolidatedTotalInterest,
    consolidatedPayoffMonths: consolidationTermMonths,
    interestSaved,
    isConsolidationBetter: interestSaved > 0,
  };
}

export function validateDebtConsolidationInputs(debts: DebtInput[], consolidationTermMonths: number): string | null {
  if (debts.length === 0) return "Add at least one debt.";
  if (debts.some((d) => d.balance <= 0)) return "Each debt balance must be greater than zero.";
  if (debts.some((d) => d.minPayment <= 0)) return "Each debt must have a minimum payment greater than zero.";
  if (consolidationTermMonths <= 0) return "Consolidation loan term must be greater than zero.";
  return null;
}