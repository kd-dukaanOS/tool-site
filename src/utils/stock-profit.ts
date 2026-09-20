export interface StockProfitResult {
  totalCost: number;
  totalProceeds: number;
  grossProfit: number;
  netProfit: number;
  totalFees: number;
  returnPercent: number;
  breakEvenPrice: number;
}

export function calculateStockProfit(
  buyPrice: number,
  sellPrice: number,
  numberOfShares: number,
  buyFees: number,
  sellFees: number
): StockProfitResult {
  const totalCost = buyPrice * numberOfShares + buyFees;
  const totalProceeds = sellPrice * numberOfShares - sellFees;
  const grossProfit = (sellPrice - buyPrice) * numberOfShares;
  const totalFees = buyFees + sellFees;
  const netProfit = totalProceeds - totalCost + buyFees; // avoid double counting buyFees
  const returnPercent = totalCost > 0 ? (netProfit / totalCost) * 100 : 0;
  const breakEvenPrice = numberOfShares > 0 ? (totalCost + sellFees) / numberOfShares : 0;

  return { totalCost, totalProceeds, grossProfit, netProfit, totalFees, returnPercent, breakEvenPrice };
}

export function validateStockProfitInputs(buyPrice: number, numberOfShares: number, lang: "en" | "es" = "en"): string | null {
  if (buyPrice <= 0) return lang === "es" ? "El precio de compra debe ser mayor a cero." : "Buy price must be greater than zero.";
  if (numberOfShares <= 0) return lang === "es" ? "El número de acciones debe ser mayor a cero." : "Number of shares must be greater than zero.";
  return null;
}