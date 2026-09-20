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

export function validateInventoryTurnoverInput(i: InventoryTurnoverInput, lang: "en" | "es" = "en"): string | null {
  const msg = lang === "es" ? {
    cogs: "Ingresa un costo de bienes vendidos válido.",
    beginning: "Ingresa un inventario inicial válido.",
    ending: "Ingresa un inventario final válido.",
    both: "Los valores de inventario no pueden ser ambos cero.",
  } : {
    cogs: "Enter a valid cost of goods sold.",
    beginning: "Enter a valid beginning inventory.",
    ending: "Enter a valid ending inventory.",
    both: "Inventory values cannot both be zero.",
  };
  if (i.cogs <= 0) return msg.cogs;
  if (i.beginningInventory < 0) return msg.beginning;
  if (i.endingInventory < 0) return msg.ending;
  if (i.beginningInventory + i.endingInventory === 0)
    return msg.both;
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
  currency: CurrencyCode = "INR",
  lang: "en" | "es" = "en"
): string {
  if (lang === "es") {
    return `
Resumen de Rotación de Inventario

COGS: ${formatCurrency(i.cogs, currency)}
Inventario Inicial: ${formatCurrency(i.beginningInventory, currency)}
Inventario Final: ${formatCurrency(i.endingInventory, currency)}

Inventario Promedio: ${formatCurrency(r.averageInventory, currency)}
Ratio de Rotación: ${r.turnoverRatio}x
Días para Vender Inventario: ${r.daysToSellInventory} días
`.trim();
  }
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