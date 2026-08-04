export interface ProfitMarginInput {
  costPrice: number;
  sellingPrice: number;
}

export interface ProfitMarginResult {
  profit: number;
  profitMarginPercent: number;
  markupPercent: number;
}

export function validateProfitMarginInput(i: ProfitMarginInput): string | null {
  if (i.costPrice <= 0) return "Enter a valid cost price.";
  if (i.sellingPrice <= 0) return "Enter a valid selling price.";
  return null;
}

export function calculateProfitMargin(i: ProfitMarginInput): ProfitMarginResult {
  const profit = i.sellingPrice - i.costPrice;
  const profitMarginPercent = (profit / i.sellingPrice) * 100;
  const markupPercent = (profit / i.costPrice) * 100;

  return {
    profit: Math.round(profit),
    profitMarginPercent: Math.round(profitMarginPercent * 100) / 100,
    markupPercent: Math.round(markupPercent * 100) / 100,
  };
}

export function copyProfitMarginSummary(i: ProfitMarginInput, r: ProfitMarginResult): string {
  return `
Profit Margin Summary

Cost Price: ₹${i.costPrice}
Selling Price: ₹${i.sellingPrice}

Profit: ₹${r.profit}
Profit Margin: ${r.profitMarginPercent}%
Markup: ${r.markupPercent}%
`.trim();
}