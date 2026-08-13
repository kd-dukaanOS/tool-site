import type { IncomeTaxConfig, PayrollContribution } from "../types";

// NEEDS_VERIFICATION: confirm current tax year brackets before use
export const usFederalIncomeTax: IncomeTaxConfig = {
  region: "US-Federal",
  currency: "USD",
  effectiveDate: "NEEDS_VERIFICATION",
  lastReviewed: "NEEDS_VERIFICATION",
  source: "NEEDS_VERIFICATION — IRS.gov",
  needsVerification: true,
  standardDeduction: 0, // NEEDS_VERIFICATION
  brackets: [
    { min: 0, max: null, rate: 0 }, // NEEDS_VERIFICATION — placeholder single bracket
  ],
  assumptions: [
    "Single filer, standard deduction, no additional credits",
    "Federal only — state tax handled separately",
  ],
};

export const usPayroll: PayrollContribution[] = [
  { name: "Social Security", rate: 0, wageBase: 0, employeeOrEmployer: "both" }, // NEEDS_VERIFICATION
  { name: "Medicare", rate: 0, wageBase: null, employeeOrEmployer: "both" }, // NEEDS_VERIFICATION
];