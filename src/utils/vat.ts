import { formatCurrency, getSavedCurrency, type CurrencyCode } from "./currency";
export interface VATInput {
  amount: number;
  vatRate: number;
  isVatIncluded: boolean;
}

export interface VATResult {
  vatAmount: number;
  netAmount: number;
  grossAmount: number;
}

export function validateVATInput(i: VATInput): string | null {
  if (i.amount <= 0) return "Enter a valid amount.";
  if (i.vatRate < 0 || i.vatRate > 50) return "Enter a realistic VAT rate.";
  return null;
}

export function calculateVAT(i: VATInput): VATResult {
  if (i.isVatIncluded) {
    const netAmount = i.amount / (1 + i.vatRate / 100);
    const vatAmount = i.amount - netAmount;

    return {
      vatAmount: Math.round(vatAmount * 100) / 100,
      netAmount: Math.round(netAmount * 100) / 100,
      grossAmount: Math.round(i.amount * 100) / 100,
    };
  }

  const vatAmount = (i.amount * i.vatRate) / 100;
  const grossAmount = i.amount + vatAmount;

  return {
    vatAmount: Math.round(vatAmount * 100) / 100,
    netAmount: Math.round(i.amount * 100) / 100,
    grossAmount: Math.round(grossAmount * 100) / 100,
  };
}

export function copyVATSummary(
  i: VATInput,
  r: VATResult,
  currency: CurrencyCode = getSavedCurrency()
): string {
  return `
VAT Summary

Amount: ${formatCurrency(i.amount, currency)} (${i.isVatIncluded ? "VAT included" : "VAT excluded"})
VAT Rate: ${i.vatRate}%

Net Amount: ${formatCurrency(r.netAmount, currency)}
VAT Amount: ${formatCurrency(r.vatAmount, currency)}
Gross Amount: ${formatCurrency(r.grossAmount, currency)}
`.trim();
}