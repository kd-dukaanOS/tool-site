export interface DividendYieldResult {
  dividendYield: number;
  annualDividendIncome: number;
  monthlyDividendIncome: number;
  yieldOnCost: number | null;
}

export function calculateDividendYield(
  sharePrice: number,
  annualDividendPerShare: number,
  numberOfShares: number,
  purchasePrice: number
): DividendYieldResult {
  const dividendYield = sharePrice > 0 ? (annualDividendPerShare / sharePrice) * 100 : 0;
  const annualDividendIncome = annualDividendPerShare * numberOfShares;
  const monthlyDividendIncome = annualDividendIncome / 12;
  const yieldOnCost = purchasePrice > 0 ? (annualDividendPerShare / purchasePrice) * 100 : null;

  return { dividendYield, annualDividendIncome, monthlyDividendIncome, yieldOnCost };
}

export function validateDividendYieldInputs(sharePrice: number, annualDividendPerShare: number, lang: "en" | "es" = "en"): string | null {
  if (lang === "es") {
    if (sharePrice <= 0) return "El precio de la acción debe ser mayor que cero.";
    if (annualDividendPerShare < 0) return "El dividendo anual por acción no puede ser negativo.";
    return null;
  }
  if (sharePrice <= 0) return "Share price must be greater than zero.";
  if (annualDividendPerShare < 0) return "Annual dividend per share cannot be negative.";
  return null;
}