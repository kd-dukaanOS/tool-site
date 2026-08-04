export interface ROIInput {
  investedAmount: number;
  currentValue: number;
  years?: number;
}

export interface ROIResult {
  netProfit: number;
  roiPercent: number;
  annualizedROI: number | null;
}

export function validateROIInput(i: ROIInput): string | null {
  if (i.investedAmount <= 0) return "Enter a valid invested amount.";
  if (i.currentValue <= 0) return "Enter a valid current value.";
  return null;
}

export function calculateROI(i: ROIInput): ROIResult {
  const netProfit = i.currentValue - i.investedAmount;
  const roiPercent = (netProfit / i.investedAmount) * 100;

  const annualizedROI =
    i.years && i.years > 0
      ? (Math.pow(i.currentValue / i.investedAmount, 1 / i.years) - 1) * 100
      : null;

  return {
    netProfit: Math.round(netProfit),
    roiPercent: Math.round(roiPercent * 100) / 100,
    annualizedROI: annualizedROI !== null ? Math.round(annualizedROI * 100) / 100 : null,
  };
}

export function copyROISummary(i: ROIInput, r: ROIResult): string {
  return `
ROI Calculation Summary

Invested Amount: ₹${i.investedAmount}
Current Value: ₹${i.currentValue}
${i.years ? `Time Period: ${i.years} years` : ""}

Net Profit: ₹${r.netProfit}
ROI: ${r.roiPercent}%
${r.annualizedROI !== null ? `Annualized ROI: ${r.annualizedROI}%` : ""}
`.trim();
}