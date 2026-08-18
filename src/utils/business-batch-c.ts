// src/utils/business-batch-c.ts
// Shared utils for Customer Acquisition Cost and Customer Lifetime Value calculators

export function validatePositiveNumber(value: number, label: string): string | null {
  if (value === undefined || Number.isNaN(value) || value < 0) {
    return `Please enter a valid ${label} (0 or more).`;
  }
  return null;
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);
}

// --- Customer Acquisition Cost ---

export interface CACResult {
  totalSpend: number;
  cac: number;
  costPerLead: number | null;
}

export function calculateCAC(
  marketingCost: number,
  salesCost: number,
  newCustomers: number,
  totalLeads?: number
): CACResult {
  const totalSpend = marketingCost + salesCost;
  const cac = totalSpend / newCustomers;
  const costPerLead = totalLeads && totalLeads > 0 ? totalSpend / totalLeads : null;

  return { totalSpend, cac, costPerLead };
}

// --- Customer Lifetime Value ---

export interface CLVResult {
  clvGross: number;
  clvNet: number;
}

export function calculateCLV(
  avgOrderValue: number,
  purchaseFrequency: number,
  lifespanYears: number,
  grossMarginPercent: number
): CLVResult {
  const clvGross = avgOrderValue * purchaseFrequency * lifespanYears;
  const clvNet = clvGross * (grossMarginPercent / 100);

  return { clvGross, clvNet };
}