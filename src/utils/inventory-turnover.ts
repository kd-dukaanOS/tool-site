export interface InventoryTurnoverInput {
  cogs: number;
  beginningInventory: number;
  endingInventory: number;
}

export interface InventoryTurnoverResult {
  averageInventory: number;
  turnoverRatio: number;
  daysToSellInventory: number;
}

export function validateInventoryTurnoverInput(i: InventoryTurnoverInput): string | null {
  if (i.cogs <= 0) return "Enter a valid cost of goods sold.";
  if (i.beginningInventory < 0) return "Enter a valid beginning inventory.";
  if (i.endingInventory < 0) return "Enter a valid ending inventory.";
  if (i.beginningInventory + i.endingInventory === 0)
    return "Inventory values cannot both be zero.";
  return null;
}

export function calculateInventoryTurnover(i: InventoryTurnoverInput): InventoryTurnoverResult {
  const averageInventory = (i.beginningInventory + i.endingInventory) / 2;
  const turnoverRatio = i.cogs / averageInventory;
  const daysToSellInventory = 365 / turnoverRatio;

  return {
    averageInventory: Math.round(averageInventory),
    turnoverRatio: Math.round(turnoverRatio * 100) / 100,
    daysToSellInventory: Math.round(daysToSellInventory),
  };
}

import { formatCurrency, type CurrencyCode } from "./currencyselector";

export function copyInventoryTurnoverSummary(
  i: InventoryTurnoverInput,
  r: InventoryTurnoverResult,
  currency: CurrencyCode = "INR"
): string {
  return `
Inventory Turnover Summary

COGS: ${formatCurrency(i.cogs, currency)}
Beginning Inventory: ${formatCurrency(i.beginningInventory, currency)}
Ending Inventory: ${formatCurrency(i.endingInventory, currency)}

Average Inventory: ${formatCurrency(r.averageInventory, currency)}
Turnover Ratio: ${r.turnoverRatio}x
Days to Sell Inventory: ${r.daysToSellInventory} days
`.trim();
}