// src/utils/profit-margin.ts
export interface ProfitMarginInput {
  revenue: number;
  cost: number;
}

export interface ProfitMarginResult {
  profit: number;
  marginPercent: number;
}

export function validateProfitMarginInput(input: ProfitMarginInput): string | null {
  const { revenue, cost } = input;

  if (!revenue || Number.isNaN(revenue) || revenue <= 0) {
    return "Please enter a valid revenue greater than 0.";
  }
  if (cost === undefined || Number.isNaN(cost) || cost < 0) {
    return "Please enter a valid cost (0 or more).";
  }
  if (cost > revenue) {
    return "Cost cannot be greater than revenue.";
  }

  return null;
}

export function calculateProfitMargin(input: ProfitMarginInput): ProfitMarginResult {
  const { revenue, cost } = input;
  const profit = revenue - cost;
  const marginPercent = (profit / revenue) * 100;

  return { profit, marginPercent };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);
}

export function copyProfitMarginSummary(input: ProfitMarginInput, result: ProfitMarginResult): string {
  return `
Profit Margin Summary

Revenue:
${formatCurrency(input.revenue)}

Cost:
${formatCurrency(input.cost)}

Profit:
${formatCurrency(result.profit)}

Profit Margin:
${result.marginPercent.toFixed(1)}%
`.trim();
}