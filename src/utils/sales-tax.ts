import { formatCurrency, getSavedCurrency, type CurrencyCode } from "./currency";


export interface SalesTaxInput {
  amount: number;
  taxRate: number;
  isTaxIncluded: boolean;
}

export interface SalesTaxResult {
  taxAmount: number;
  netAmount: number;
  grossAmount: number;
}

export function validateSalesTaxInput(i: SalesTaxInput, lang: "en" | "es" = "en"): string | null {
  if (i.amount <= 0) return lang === "es" ? "Ingresa un monto válido." : "Enter a valid amount.";
  if (i.taxRate < 0 || i.taxRate > 50) return lang === "es" ? "Ingresa una tasa de impuesto realista." : "Enter a realistic tax rate.";
  return null;
}

export function calculateSalesTax(i: SalesTaxInput): SalesTaxResult {
  if (i.isTaxIncluded) {
    const netAmount = i.amount / (1 + i.taxRate / 100);
    const taxAmount = i.amount - netAmount;

    return {
      taxAmount: Math.round(taxAmount * 100) / 100,
      netAmount: Math.round(netAmount * 100) / 100,
      grossAmount: Math.round(i.amount * 100) / 100,
    };
  }

  const taxAmount = (i.amount * i.taxRate) / 100;
  const grossAmount = i.amount + taxAmount;

  return {
    taxAmount: Math.round(taxAmount * 100) / 100,
    netAmount: Math.round(i.amount * 100) / 100,
    grossAmount: Math.round(grossAmount * 100) / 100,
  };
}

export function copySalesTaxSummary(
  i: SalesTaxInput,
  r: SalesTaxResult,
  currency: CurrencyCode = getSavedCurrency(),
  lang: "en" | "es" = "en"
): string {
  if (lang === "es") {
    return `
Resumen de Impuesto de Venta

Monto: ${formatCurrency(i.amount, currency)} (${i.isTaxIncluded ? "impuesto incluido" : "impuesto excluido"})
Tasa de Impuesto: ${i.taxRate}%

Monto Neto: ${formatCurrency(r.netAmount, currency)}
Monto del Impuesto: ${formatCurrency(r.taxAmount, currency)}
Monto Bruto: ${formatCurrency(r.grossAmount, currency)}
`.trim();
  }
  return `
Sales Tax Summary

Amount: ${formatCurrency(i.amount, currency)} (${i.isTaxIncluded ? "tax included" : "tax excluded"})
Tax Rate: ${i.taxRate}%

Net Amount: ${formatCurrency(r.netAmount, currency)}
Tax Amount: ${formatCurrency(r.taxAmount, currency)}
Gross Amount: ${formatCurrency(r.grossAmount, currency)}
`.trim();
}