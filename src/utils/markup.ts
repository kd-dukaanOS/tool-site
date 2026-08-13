export interface MarkupInput {
  cost: number;
  markupPercent: number;
}

export interface MarkupResult {
  profit: number;
  salePrice: number;
  marginPercent: number;
}

export function validateMarkupInput(input: MarkupInput): string | null {
  const { cost, markupPercent } = input;

  if (!cost || Number.isNaN(cost) || cost <= 0) {
    return "Please enter a valid cost greater than 0.";
  }

  if (markupPercent === undefined || Number.isNaN(markupPercent) || markupPercent < 0) {
    return "Please enter a valid markup percentage (0 or more).";
  }

  return null;
}

export function calculateMarkup(input: MarkupInput): MarkupResult {
  const { cost, markupPercent } = input;

  const profit = cost * (markupPercent / 100);
  const salePrice = cost + profit;
  const marginPercent = (profit / salePrice) * 100;

  return { profit, salePrice, marginPercent };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);
}

export function copyMarkupSummary(input: MarkupInput, result: MarkupResult): string {
  return `
Markup Summary

Cost:
${formatCurrency(input.cost)}

Markup:
${input.markupPercent}%

Sale Price:
${formatCurrency(result.salePrice)}

Profit:
${formatCurrency(result.profit)}

Resulting Margin:
${result.marginPercent.toFixed(1)}%
`.trim();
}