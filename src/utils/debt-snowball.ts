export interface DebtInput {
  name: string;
  balance: number;
  minPayment: number;
  interestRate: number;
}

export interface DebtPayoffEntry {
  name: string;
  monthsToPayoff: number;
  totalInterestPaid: number;
}

export interface DebtSnowballResult {
  payoffOrder: DebtPayoffEntry[];
  totalMonths: number;
  totalInterestPaid: number;
  totalPaid: number;
}

export function calculateDebtSnowball(debts: DebtInput[], extraMonthlyPayment: number): DebtSnowballResult {
  const sorted = [...debts].sort((a, b) => a.balance - b.balance);
  const balances = sorted.map((d) => d.balance);
  const payoffMonths: number[] = new Array(sorted.length).fill(0);
  const interestPaid: number[] = new Array(sorted.length).fill(0);

  let month = 0;
  let freedUpPayment = extraMonthlyPayment;
  const remainingIdx = sorted.map((_, i) => i);

  while (remainingIdx.some((i) => balances[i] > 0) && month < 1200) {
    month++;
    let availableExtra = freedUpPayment;

    for (const i of remainingIdx) {
      if (balances[i] <= 0) continue;
      const monthlyRate = sorted[i].interestRate / 100 / 12;
      const interest = balances[i] * monthlyRate;
      interestPaid[i] += interest;
      balances[i] += interest;

      let payment = sorted[i].minPayment;
      if (i === remainingIdx.find((idx) => balances[idx] > 0)) {
        payment += availableExtra;
        availableExtra = 0;
      }

      const applied = Math.min(payment, balances[i]);
      balances[i] -= applied;

      if (balances[i] <= 0 && payoffMonths[i] === 0) {
        payoffMonths[i] = month;
        freedUpPayment += sorted[i].minPayment;
      }
    }
  }

  const payoffOrder: DebtPayoffEntry[] = sorted.map((d, i) => ({
    name: d.name,
    monthsToPayoff: payoffMonths[i] || month,
    totalInterestPaid: interestPaid[i],
  }));

  const totalInterestPaid = interestPaid.reduce((sum, v) => sum + v, 0);
  const totalBalance = debts.reduce((sum, d) => sum + d.balance, 0);

  return {
    payoffOrder,
    totalMonths: month,
    totalInterestPaid,
    totalPaid: totalBalance + totalInterestPaid,
  };
}

export function validateDebtSnowballInputs(debts: DebtInput[]): string | null {
  if (debts.length === 0) return "Add at least one debt.";
  if (debts.some((d) => d.balance <= 0)) return "Each debt balance must be greater than zero.";
  if (debts.some((d) => d.minPayment <= 0)) return "Each debt must have a minimum payment greater than zero.";
  return null;
}