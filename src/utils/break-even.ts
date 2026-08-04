export interface BreakEvenInput {
  fixedCosts: number;
  variableCostPerUnit: number;
  sellingPricePerUnit: number;
}

export interface BreakEvenResult {
  breakEvenUnits: number;
  breakEvenRevenue: number;
  contributionMargin: number;
  contributionMarginRatio: number;
}

export function validateBreakEvenInput(i: BreakEvenInput): string | null {
  if (i.fixedCosts <= 0) return "Enter valid fixed costs.";
  if (i.variableCostPerUnit < 0) return "Enter a valid variable cost.";
  if (i.sellingPricePerUnit <= 0) return "Enter a valid selling price.";
  if (i.sellingPricePerUnit <= i.variableCostPerUnit)
    return "Selling price must be greater than variable cost.";
  return null;
}

export function calculateBreakEven(i: BreakEvenInput): BreakEvenResult {
  const contributionMargin = i.sellingPricePerUnit - i.variableCostPerUnit;
  const contributionMarginRatio = (contributionMargin / i.sellingPricePerUnit) * 100;

  const breakEvenUnits = Math.ceil(i.fixedCosts / contributionMargin);
  const breakEvenRevenue = breakEvenUnits * i.sellingPricePerUnit;

  return {
    breakEvenUnits,
    breakEvenRevenue: Math.round(breakEvenRevenue),
    contributionMargin: Math.round(contributionMargin * 100) / 100,
    contributionMarginRatio: Math.round(contributionMarginRatio * 100) / 100,
  };
}

export function copyBreakEvenSummary(i: BreakEvenInput, r: BreakEvenResult): string {
  return `
Break Even Analysis

Fixed Costs: ₹${i.fixedCosts}
Variable Cost/Unit: ₹${i.variableCostPerUnit}
Selling Price/Unit: ₹${i.sellingPricePerUnit}

Break Even Units: ${r.breakEvenUnits}
Break Even Revenue: ₹${r.breakEvenRevenue}
Contribution Margin: ₹${r.contributionMargin}/unit
Contribution Margin Ratio: ${r.contributionMarginRatio}%
`.trim();
}