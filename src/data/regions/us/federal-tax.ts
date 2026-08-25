import type { IncomeTaxConfig, PayrollContribution } from "../types";

export type USFilingStatus = "single" | "mfj" | "hoh";

// 2026 tax year — Single filers and Married Filing Separately
// Source: IRS Revenue Procedure 2025-32, Section 4.01, Table 1 (irs.gov/pub/irs-drop/rp-25-32.pdf)
// Standard deduction ($16,100) folded in as a 0% band, same method as MFJ/HoH data.
export const usFederalIncomeTax: IncomeTaxConfig = {
  region: "US-Federal-Single",
  currency: "USD",
  effectiveDate: "2026-01-01",
  lastReviewed: "2026-08-25",
  source: "IRS Revenue Procedure 2025-32, Table 1 (irs.gov)",
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
    "Single filers and Married Filing Separately",
    "Federal only — state tax handled separately",
  ],
};

// 2026 payroll (FICA) rates
// Source: SSA 2026 Contribution and Benefit Base (ssa.gov); IRS Additional Medicare Tax guidance.
export const usPayroll: PayrollContribution[] = [
  { name: "Social Security", rate: 0.062, wageBase: 184500, employeeOrEmployer: "employee" },
  { name: "Medicare", rate: 0.0145, wageBase: null, employeeOrEmployer: "employee" },
];

// 2026 tax year — Married Filing Jointly & Surviving Spouses
// Source: IRS Revenue Procedure 2025-32, Section 4.01, Table 1 (irs.gov/pub/irs-drop/rp-25-32.pdf)
// Standard deduction ($32,200) folded in as a 0% band, same method as single-filer data.
export const usFederalIncomeTaxMFJ: IncomeTaxConfig = {
  region: "US-Federal-MFJ",
  currency: "USD",
  effectiveDate: "2026-01-01",
  lastReviewed: "2026-08-24",
  source: "IRS Revenue Procedure 2025-32, Table 1 (irs.gov)",
  needsVerification: false,
  standardDeduction: 32200,
  brackets: [
    { min: 0, max: 32200, rate: 0 },
    { min: 32200, max: 57000, rate: 0.10 },
    { min: 57000, max: 133000, rate: 0.12 },
    { min: 133000, max: 243600, rate: 0.22 },
    { min: 243600, max: 435750, rate: 0.24 },
    { min: 435750, max: 544650, rate: 0.32 },
    { min: 544650, max: 800900, rate: 0.35 },
    { min: 800900, max: null, rate: 0.37 },
  ],
  assumptions: [
    "Married Filing Jointly and Surviving Spouses",
    "Federal only — state tax handled separately",
  ],
};

// 2026 tax year — Head of Household
// Source: IRS Revenue Procedure 2025-32, Section 4.01, Table 2 (irs.gov/pub/irs-drop/rp-25-32.pdf)
// Standard deduction ($24,150) folded in as a 0% band, same method as single-filer data.
export const usFederalIncomeTaxHoH: IncomeTaxConfig = {
  region: "US-Federal-HoH",
  currency: "USD",
  effectiveDate: "2026-01-01",
  lastReviewed: "2026-08-24",
  source: "IRS Revenue Procedure 2025-32, Table 2 (irs.gov)",
  needsVerification: false,
  standardDeduction: 24150,
  brackets: [
    { min: 0, max: 24150, rate: 0 },
    { min: 24150, max: 41850, rate: 0.10 },
    { min: 41850, max: 91600, rate: 0.12 },
    { min: 91600, max: 129850, rate: 0.22 },
    { min: 129850, max: 225900, rate: 0.24 },
    { min: 225900, max: 280350, rate: 0.32 },
    { min: 280350, max: 664750, rate: 0.35 },
    { min: 664750, max: null, rate: 0.37 },
  ],
  assumptions: [
    "Head of Household",
    "Federal only — state tax handled separately",
  ],
};

export const usFederalIncomeTaxByStatus: Record<USFilingStatus, IncomeTaxConfig> = {
  single: usFederalIncomeTax,
  mfj: usFederalIncomeTaxMFJ,
  hoh: usFederalIncomeTaxHoH,
};