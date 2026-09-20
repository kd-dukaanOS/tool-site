export interface RunwayResult {
  staticRunwayMonths: number | null;
  dynamicRunwayMonths: number | null;
  currentNetBurn: number;
  projectedBalanceIn6Months: number;
}

export function calculateRunway(
  currentCashBalance: number,
  monthlyRevenue: number,
  monthlyExpenses: number,
  monthlyRevenueGrowthRate: number,
  monthlyExpenseGrowthRate: number
): RunwayResult {
  const currentNetBurn = monthlyExpenses - monthlyRevenue;
  const staticRunwayMonths = currentNetBurn > 0 ? Math.round((currentCashBalance / currentNetBurn) * 10) / 10 : null;

  let balance = currentCashBalance;
  let revenue = monthlyRevenue;
  let expenses = monthlyExpenses;
  let dynamicRunwayMonths: number | null = null;
  let projectedBalanceIn6Months = currentCashBalance;
  const maxMonths = 120;

  for (let month = 1; month <= maxMonths; month++) {
    balance -= (expenses - revenue);
    revenue *= 1 + monthlyRevenueGrowthRate / 100;
    expenses *= 1 + monthlyExpenseGrowthRate / 100;

    if (month === 6) projectedBalanceIn6Months = balance;
    if (dynamicRunwayMonths === null && balance <= 0) {
      dynamicRunwayMonths = month;
    }
  }

  return { staticRunwayMonths, dynamicRunwayMonths, currentNetBurn, projectedBalanceIn6Months };
}

export function validateRunwayInputs(currentCashBalance: number, monthlyExpenses: number, lang: "en" | "es" = "en"): string | null {
  const msg = lang === "es" ? {
    cash: "El saldo de efectivo actual no puede ser negativo.",
    expenses: "Los gastos mensuales deben ser mayor a cero.",
  } : {
    cash: "Current cash balance cannot be negative.",
    expenses: "Monthly expenses must be greater than zero.",
  };
  if (currentCashBalance < 0) return msg.cash;
  if (monthlyExpenses <= 0) return msg.expenses;
  return null;
}