export interface NetWorthResult {
  totalAssets: number;
  totalLiabilities: number;
  netWorth: number;
  debtToAssetRatio: number;
}

export function calculateNetWorth(
  cash: number,
  investments: number,
  realEstate: number,
  otherAssets: number,
  mortgageDebt: number,
  loanDebt: number,
  creditCardDebt: number,
  otherLiabilities: number
): NetWorthResult {
  const totalAssets = cash + investments + realEstate + otherAssets;
  const totalLiabilities = mortgageDebt + loanDebt + creditCardDebt + otherLiabilities;
  const netWorth = totalAssets - totalLiabilities;
  const debtToAssetRatio = totalAssets > 0 ? (totalLiabilities / totalAssets) * 100 : 0;

  return { totalAssets, totalLiabilities, netWorth, debtToAssetRatio };
}

export function validateNetWorthInputs(totalAssets: number, totalLiabilities: number, lang: "en" | "es" = "en"): string | null {
  if (totalAssets < 0) return lang === "es" ? "Los activos no pueden ser negativos." : "Assets cannot be negative.";
  if (totalLiabilities < 0) return lang === "es" ? "Los pasivos no pueden ser negativos." : "Liabilities cannot be negative.";
  if (totalAssets === 0 && totalLiabilities === 0) return lang === "es" ? "Por favor ingresa al menos un activo o pasivo." : "Please enter at least one asset or liability.";
  return null;
}