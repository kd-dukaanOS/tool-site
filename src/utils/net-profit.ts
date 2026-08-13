// src/utils/net-profit.ts
export interface NetProfitInput {
  revenue: number;
  totalExpenses: number;
}

export interface NetProfitResult {
  netProfit: number;
  netMarginPercent: number;
}

export function validateNetProfitInput(input: NetProfitInput): string | null {
  const { revenue, totalExpenses } = input;

  if (!revenue || Number.isNaN(revenue) || revenue <= 0) {
    return "Please enter a valid revenue greater than 0.";
  }
  if (totalExpenses === undefined || Number.isNaN(totalExpenses) || totalExpenses < 0) {
    return "Please enter valid total expenses (0 or more).";
  }

  return null;
}

export function calculateNetProfit(input: NetProfitInput): NetProfitResult {
  const { revenue, totalExpenses } = input;
  const netProfit = revenue - totalExpenses;
  const netMarginPercent = (netProfit / revenue) * 100;

  return { netProfit, netMarginPercent };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);
}

export function copyNetProfitSummary(input: NetProfitInput, result: NetProfitResult): string {
  return `
Net Profit Summary

Revenue:
${formatCurrency(input.revenue)}

Total Expenses:
${formatCurrency(input.totalExpenses)}

Net Profit:
${formatCurrency(result.netProfit)}

Net Profit Margin:
${result.netMarginPercent.toFixed(1)}%
`.trim();
}