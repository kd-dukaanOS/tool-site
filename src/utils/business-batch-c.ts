/* ==========================================================
   ToolSite Business Batch C Utilities
   Shared by:
   - Customer Acquisition Cost Calculator
   - Customer Lifetime Value Calculator
   - Business Valuation Estimator
========================================================== */

export interface CACResult {
  cac: number;
  totalSpend: number;
  costPerLead: number | null;
}

export interface CLVResult {
  avgOrderValue: number;
  purchaseFrequency: number;
  lifespanYears: number;
  grossMarginPercent: number;
  clvGross: number;
  clvNet: number;
}

export interface LTVtoCACResult {
  ratio: number;
  label: string;
  verdict: "poor" | "risky" | "healthy" | "excellent";
}

export type ValuationMethod = "revenue" | "earnings" | "average";

export interface ValuationResult {
  method: ValuationMethod;
  revenueValuation: number;
  earningsValuation: number;
  finalValuation: number;
}

export function calculateCAC(
  marketingCost: number,
  salesCost: number,
  newCustomers: number,
  totalLeads?: number
): CACResult {

  const totalSpend = marketingCost + salesCost;

  const cac = newCustomers > 0
    ? totalSpend / newCustomers
    : 0;

  const costPerLead =
    totalLeads && totalLeads > 0
      ? totalSpend / totalLeads
      : null;

  return { cac, totalSpend, costPerLead };
}

export function calculateCLV(
  avgOrderValue: number,
  purchaseFrequency: number,
  lifespanYears: number,
  grossMarginPercent = 100
): CLVResult {

  const clvGross =
    avgOrderValue * purchaseFrequency * lifespanYears;

  const clvNet =
    clvGross * (grossMarginPercent / 100);

  return {
    avgOrderValue,
    purchaseFrequency,
    lifespanYears,
    grossMarginPercent,
    clvGross,
    clvNet,
  };
}

export function calculateLTVtoCAC(
  clv: number,
  cac: number
): LTVtoCACResult {

  const ratio = cac > 0 ? clv / cac : 0;

  let verdict: LTVtoCACResult["verdict"] = "poor";
  let label = "Below 1:1 — losing money per customer";

  if (ratio >= 5) {
    verdict = "excellent";
    label = "5:1 or higher — very strong unit economics";
  } else if (ratio >= 3) {
    verdict = "healthy";
    label = "3:1 to 5:1 — healthy, sustainable ratio";
  } else if (ratio >= 1) {
    verdict = "risky";
    label = "1:1 to 3:1 — thin margins, room to improve";
  }

  return { ratio, label, verdict };
}

export function calculateValuation(
  annualRevenue: number,
  annualNetProfit: number,
  revenueMultiple: number,
  earningsMultiple: number,
  method: ValuationMethod = "average"
): ValuationResult {

  const revenueValuation = annualRevenue * revenueMultiple;
  const earningsValuation = annualNetProfit * earningsMultiple;

  let finalValuation = revenueValuation;

  if (method === "earnings") {
    finalValuation = earningsValuation;
  } else if (method === "average") {
    finalValuation = (revenueValuation + earningsValuation) / 2;
  }

  return {
    method,
    revenueValuation,
    earningsValuation,
    finalValuation,
  };
}

export function validatePositiveNumber(
  value: number,
  fieldName: string
): string | null {

  if (Number.isNaN(value)) {
    return `Please enter a valid ${fieldName}.`;
  }

  if (value < 0) {
    return `${fieldName} cannot be negative.`;
  }

  return null;
}

export function formatCurrency(value: number): string {

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

export function formatRatio(ratio: number): string {
  return `${ratio.toFixed(2)} : 1`;
}
