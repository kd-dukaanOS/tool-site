export interface Debt {
  name: string;
  balance: number;
  apr: number;
  minPayment: number;
}

export interface DebtPayoffMonth {
  name: string;
  monthPaidOff: number;
}

export interface DebtPayoffResult {
  months: number;
  totalInterest: number;
  totalPaid: number;
  payoffOrder: DebtPayoffMonth[];
}

export type Strategy = "avalanche" | "snowball";

function orderDebts(debts: Debt[], strategy: Strategy): Debt[] {
  const list = [...debts];
  if (strategy === "avalanche") {
    return list.sort((a, b) => b.apr - a.apr);
  }
  return list.sort((a, b) => a.balance - b.balance);
}

const MAX_MONTHS = 600;

export function calculateDebtPayoffPlan(
  debtsInput: Debt[],
  extraMonthlyPayment: number,
  strategy: Strategy
): DebtPayoffResult {
  const debts = orderDebts(
    debtsInput.filter((d) => d.balance > 0),
    strategy
  ).map((d) => ({ ...d }));

  let month = 0;
  let totalInterest = 0;
  let totalPaid = 0;
  const payoffOrder: DebtPayoffMonth[] = [];

  while (debts.some((d) => d.balance > 0.01) && month < MAX_MONTHS) {
    month++;

    let freedUpBudget = extraMonthlyPayment;

    // interest + minimum payment on every active debt
    for (const debt of debts) {
      if (debt.balance <= 0) continue;

      const interest = debt.balance * (debt.apr / 100 / 12);
      totalInterest += interest;

      const payment = Math.min(debt.minPayment, debt.balance + interest);
      let principal = payment - interest;
      if (principal > debt.balance) principal = debt.balance;

      debt.balance -= principal;
      totalPaid += payment;
    }

    // apply extra payment to the first unpaid debt in strategy order
    for (const debt of debts) {
      if (debt.balance <= 0.01 || freedUpBudget <= 0) continue;

      const extraApplied = Math.min(freedUpBudget, debt.balance);
      debt.balance -= extraApplied;
      totalPaid += extraApplied;
      freedUpBudget -= extraApplied;
    }

    for (const debt of debts) {
      if (debt.balance <= 0.01 && !payoffOrder.some((p) => p.name === debt.name)) {
        payoffOrder.push({ name: debt.name, monthPaidOff: month });
      }
    }
  }

  return { months: month, totalInterest, totalPaid, payoffOrder };
}

export function compareStrategies(debts: Debt[], extraMonthlyPayment: number) {
  const avalanche = calculateDebtPayoffPlan(debts, extraMonthlyPayment, "avalanche");
  const snowball = calculateDebtPayoffPlan(debts, extraMonthlyPayment, "snowball");
  return { avalanche, snowball };
}

export function formatMonthsAsYearsMonths(months: number): string {
  if (months >= MAX_MONTHS) return "50+ years";
  const years = Math.floor(months / 12);
  const rem = months % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years !== 1 ? "s" : ""}`);
  if (rem) parts.push(`${rem} mo${rem !== 1 ? "s" : ""}`);
  return parts.join(" ") || "0 mos";
}

export function validateDebts(debts: Debt[], lang: "en" | "es" = "en"): string | null {
  const active = debts.filter((d) => d.balance > 0);
  if (lang === "es") {
    if (active.length === 0) return "Por favor ingresa al menos una deuda con saldo.";
    for (const d of active) {
      if (d.apr < 0) return "La TAE no puede ser negativa.";
      if (!d.minPayment || d.minPayment <= 0) return `Por favor ingresa un pago mínimo para ${d.name}.`;
    }
    return null;
  }
  if (active.length === 0) return "Please enter at least one debt with a balance.";
  for (const d of active) {
    if (d.apr < 0) return "APR cannot be negative.";
    if (!d.minPayment || d.minPayment <= 0) return `Please enter a minimum payment for ${d.name}.`;
  }
  return null;
}