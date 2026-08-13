import type { IncomeTaxConfig, PayrollContribution } from "../types";

// NEEDS_VERIFICATION: confirm current UK tax year bands before use
export const ukIncomeTax: IncomeTaxConfig = {
  region: "UK",
  currency: "GBP",
  effectiveDate: "NEEDS_VERIFICATION",
  lastReviewed: "NEEDS_VERIFICATION",
  source: "NEEDS_VERIFICATION — gov.uk",
  needsVerification: true,
  standardDeduction: 0, // personal allowance — NEEDS_VERIFICATION
  brackets: [
    { min: 0, max: null, rate: 0 }, // NEEDS_VERIFICATION — basic/higher/additional rate bands
  ],
  assumptions: [
    "England/Wales/NI rates — Scotland has separate bands, add scotland-tax.ts if needed",
  ],
};

export const ukNationalInsurance: PayrollContribution = {
  name: "National Insurance (Class 1)",
  rate: 0, // NEEDS_VERIFICATION
  wageBase: 0, // primary threshold — NEEDS_VERIFICATION
  employeeOrEmployer: "both",
};