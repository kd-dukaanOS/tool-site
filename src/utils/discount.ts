import { round } from "./calculator";

export type DiscountMode = "percentage" | "flat";

export interface DiscountResult {
  finalPrice: number;
  youSave: number;
  effectivePercent: number;
}

export interface DiscountRow {
  percent: number;
  finalPrice: number;
  youSave: number;
}

const COMPARE_RATES = [10, 20, 30, 40, 50];

export function calculateDiscount(
  originalPrice: number,
  discountValue: number,
  mode: DiscountMode,
  extraPercent = 0
): DiscountResult {

  let priceAfterFirst =
    mode === "percentage"
      ? originalPrice * (1 - discountValue / 100)
      : originalPrice - discountValue;

  priceAfterFirst = Math.max(priceAfterFirst, 0);

  const finalPrice =
    extraPercent > 0
      ? priceAfterFirst * (1 - extraPercent / 100)
      : priceAfterFirst;

  const youSave = originalPrice - finalPrice;
  const effectivePercent = originalPrice === 0 ? 0 : (youSave / originalPrice) * 100;

  return {
    finalPrice: round(finalPrice),
    youSave: round(youSave),
    effectivePercent: round(effectivePercent, 1),
  };
}

export function discountComparison(
  originalPrice: number
): DiscountRow[] {

  return COMPARE_RATES.map((percent) => {
    const finalPrice = round(originalPrice * (1 - percent / 100));
    return { percent, finalPrice, youSave: round(originalPrice - finalPrice) };
  });
}

import { formatCurrency, type CurrencyCode } from "./currencyselector";

export function discountInsight(
  result: DiscountResult,
  originalPrice: number,
  currency: CurrencyCode = "INR"
): string {

  return `You save ${formatCurrency(result.youSave, currency)} — that's ${result.effectivePercent}% off the original ${formatCurrency(originalPrice, currency)} price.`;
}

export function validateDiscountInputs(
  originalPrice: number,
  discountValue: number,
  mode: DiscountMode
): string | null {

  if (!originalPrice || originalPrice <= 0) return "Please enter a valid original price.";
  if (discountValue === undefined || Number.isNaN(discountValue) || discountValue < 0) return "Please enter a valid discount value.";
  if (mode === "percentage" && discountValue > 100) return "Percentage discount cannot exceed 100%.";
  if (mode === "flat" && discountValue > originalPrice) return "Discount cannot exceed the original price.";

  return null;
}

export function copyDiscountSummary(
  originalPrice: number,
  discountValue: number,
  mode: DiscountMode,
  extraPercent: number,
  result: DiscountResult,
  currency: CurrencyCode = "INR"
): string {

  return `
Discount Summary

Original Price: ${formatCurrency(originalPrice, currency)}
Discount: ${mode === "percentage" ? `${discountValue}%` : formatCurrency(discountValue, currency)}${extraPercent ? ` + additional ${extraPercent}%` : ""}

Final Price: ${formatCurrency(result.finalPrice, currency)}
You Save: ${formatCurrency(result.youSave, currency)}
Effective Discount: ${result.effectivePercent}%
`.trim();
}
