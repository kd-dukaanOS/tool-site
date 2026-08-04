import { round } from "./calculator";

export type GSTMode = "exclusive" | "inclusive";

export interface GSTResult {
  baseAmount: number;
  gstAmount: number;
  totalAmount: number;
  cgst: number;
  sgst: number;
}

export interface GSTSlabRow {
  rate: number;
  gstAmount: number;
  totalAmount: number;
}

const SLABS = [5, 12, 18, 28];

export function calculateGST(
  amount: number,
  rate: number,
  mode: GSTMode
): GSTResult {

  let baseAmount: number;
  let totalAmount: number;

  if (mode === "inclusive") {
    totalAmount = amount;
    baseAmount = amount / (1 + rate / 100);
  } else {
    baseAmount = amount;
    totalAmount = amount * (1 + rate / 100);
  }

  const gstAmount = totalAmount - baseAmount;

  return {
    baseAmount: round(baseAmount),
    gstAmount: round(gstAmount),
    totalAmount: round(totalAmount),
    cgst: round(gstAmount / 2),
    sgst: round(gstAmount / 2),
  };
}

export function gstSlabComparison(
  amount: number,
  mode: GSTMode
): GSTSlabRow[] {

  return SLABS.map((rate) => {
    const result = calculateGST(amount, rate, mode);
    return { rate, gstAmount: result.gstAmount, totalAmount: result.totalAmount };
  });
}

export function gstInsight(
  rate: number,
  result: GSTResult
): string {

  const idx = SLABS.indexOf(rate);

  if (idx <= 0) {
    return `At ${rate}% GST, you pay ₹${result.gstAmount.toLocaleString("en-IN")} in tax on a base amount of ₹${result.baseAmount.toLocaleString("en-IN")}.`;
  }

  const lowerRate = SLABS[idx - 1];
  const lowerGST = round((result.baseAmount * lowerRate) / 100);
  const diff = round(result.gstAmount - lowerGST);

  return `At ${rate}% GST, you pay ₹${result.gstAmount.toLocaleString("en-IN")} in tax — ₹${diff.toLocaleString("en-IN")} more than at the ${lowerRate}% slab.`;
}

export function validateGSTInputs(
  amount: number,
  rate: number
): string | null {

  if (!amount || amount <= 0) return "Please enter a valid amount.";
  if (rate === undefined || Number.isNaN(rate) || rate < 0) return "Please enter a valid GST rate.";
  if (rate > 100) return "GST rate cannot exceed 100%.";

  return null;
}

export function copyGSTSummary(
  amount: number,
  rate: number,
  mode: GSTMode,
  result: GSTResult
): string {

  return `
GST Summary

Amount Entered: ₹${amount.toLocaleString("en-IN")}
GST Rate: ${rate}%
Mode: ${mode === "inclusive" ? "GST Inclusive" : "GST Exclusive"}

Base Amount: ₹${result.baseAmount.toLocaleString("en-IN")}
GST Amount: ₹${result.gstAmount.toLocaleString("en-IN")}
  CGST: ₹${result.cgst.toLocaleString("en-IN")}
  SGST: ₹${result.sgst.toLocaleString("en-IN")}
Total Amount: ₹${result.totalAmount.toLocaleString("en-IN")}
`.trim();
}
