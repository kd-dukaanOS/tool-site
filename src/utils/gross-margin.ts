// src/utils/gross-margin.ts
export interface GrossMarginInput {
  revenue: number;
  cogs: number;
}

export interface GrossMarginResult {
  grossProfit: number;
  grossMarginPercent: number;
}

export function validateGrossMarginInput(input: GrossMarginInput): string | null {
  const { revenue, cogs } = input;

  if (!revenue || Number.isNaN(revenue) || revenue <= 0) {
    return "Please enter a valid revenue greater than 0.";
  }
  if (cogs === undefined || Number.isNaN(cogs) || cogs < 0) {
    return "Please enter a valid cost of goods sold (0 or more).";
  }
  if (cogs > revenue) {
    return "Cost of goods sold cannot be greater than revenue.";
  }

  return null;
}

export function calculateGrossMargin(input: GrossMarginInput): GrossMarginResult {
  const { revenue, cogs } = input;
  const grossProfit = revenue - cogs;
  const grossMarginPercent = (grossProfit / revenue) * 100;

  return { grossProfit, grossMarginPercent };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);
}

export function copyGrossMarginSummary(input: GrossMarginInput, result: GrossMarginResult): string {
  return `
Gross Margin Summary

Revenue:
${formatCurrency(input.revenue)}

Cost of Goods Sold:
${formatCurrency(input.cogs)}

Gross Profit:
${formatCurrency(result.grossProfit)}

Gross Margin:
${result.grossMarginPercent.toFixed(1)}%
`.trim();
}