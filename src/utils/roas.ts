// src/utils/roas.ts
import { formatCurrency } from "./currency";

export interface RoasInput {
  revenue: number;
  adSpend: number;
}

export interface RoasResult {
  roas: number;
  roasPercent: number;
  profit: number;
}

export function validateRoasInput(input: RoasInput): string | null {
  const { revenue, adSpend } = input;

  if (revenue === undefined || Number.isNaN(revenue) || revenue < 0) {
    return "Please enter a valid revenue (0 or more).";
  }
  if (!adSpend || Number.isNaN(adSpend) || adSpend <= 0) {
    return "Please enter a valid ad spend greater than 0.";
  }

  return null;
}

export function calculateRoas(input: RoasInput): RoasResult {
  const { revenue, adSpend } = input;
  const roas = revenue / adSpend;
  const roasPercent = roas * 100;
  const profit = revenue - adSpend;

  return { roas, roasPercent, profit };
}


export function copyRoasSummary(input: RoasInput, result: RoasResult): string {
  return `
ROAS Summary

Revenue from Ads:
${formatCurrency(input.revenue)}

Ad Spend:
${formatCurrency(input.adSpend)}

ROAS:
${result.roas.toFixed(2)}x

Return:
${result.roasPercent.toFixed(1)}%

Profit:
${formatCurrency(result.profit)}
`.trim();
}