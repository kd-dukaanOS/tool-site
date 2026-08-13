import type { IncomeTaxConfig, PayrollContribution } from "../types";

// 2026 tax year — IRS Revenue Procedure 2025-32 (single filer)
// Source: irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026
// Brackets below are expressed as GROSS income (not taxable income), with the
// $16,100 standard deduction folded in as a 0% band, because this calculator
// applies rates directly to gross income rather than subtracting a deduction first.
export const usFederalIncomeTax: IncomeTaxConfig = {
  region: "US-Federal",
  currency: "USD",
  effectiveDate: "2026-01-01",
  lastReviewed: "2026-08-13",
  source: "IRS Revenue Procedure 2025-32 (irs.gov)",
  needsVerification: false,
  standardDeduction: 16100,
  brackets: [
    { min: 0, max: 16100, rate: 0 },
    { min: 16100, max: 28500, rate: 0.10 },
    { min: 28500, max: 66500, rate: 0.12 },
    { min: 66500, max: 121800, rate: 0.22 },
    { min: 121800, max: 217875, rate: 0.24 },
    { min: 217875, max: 272325, rate: 0.32 },
    { min: 272325, max: 656700, rate: 0.35 },
    { min: 656700, max: null, rate: 0.37 },
  ],
  assumptions: [
    "Single filer, standard deduction, no additional credits",
    "Federal only — state tax handled separately",
  ],
};

export const usPayroll: PayrollContribution[] = [
  { name: "Social Security", rate: 0.062, wageBase: 184500, employeeOrEmployer: "both" },
  { name: "Medicare", rate: 0.0145, wageBase: null, employeeOrEmployer: "both" },
  // Excludes the additional 0.9% Medicare surtax above $200,000 — not modeled yet
];