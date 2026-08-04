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

export function validateSalesTaxInput(i: SalesTaxInput): string | null {
  if (i.amount <= 0) return "Enter a valid amount.";
  if (i.taxRate < 0 || i.taxRate > 50) return "Enter a realistic tax rate.";
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

export function copySalesTaxSummary(i: SalesTaxInput, r: SalesTaxResult): string {
  return `
Sales Tax Summary

Amount: ₹${i.amount} (${i.isTaxIncluded ? "tax included" : "tax excluded"})
Tax Rate: ${i.taxRate}%

Net Amount: ₹${r.netAmount}
Tax Amount: ₹${r.taxAmount}
Gross Amount: ₹${r.grossAmount}
`.trim();
}