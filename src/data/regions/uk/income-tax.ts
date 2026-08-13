import type { IncomeTaxConfig, PayrollContribution } from "../types";

// 2026/27 tax year (6 Apr 2026 – 5 Apr 2027) — England, Wales & Northern Ireland
export const ukIncomeTax: IncomeTaxConfig = {
  region: "UK",
  currency: "GBP",
  effectiveDate: "2026-04-06",
  lastReviewed: "2026-08-13",
  source: "HMRC Income Tax rates and bands, 2026/27",
  needsVerification: false,
  standardDeduction: 12570, // Personal Allowance
  brackets: [
    { min: 0, max: 12570, rate: 0 },
    { min: 12570, max: 50270, rate: 0.20 },
    { min: 50270, max: 125140, rate: 0.40 },
    { min: 125140, max: null, rate: 0.45 },
  ],
  assumptions: [
    "England, Wales and Northern Ireland rates — Scotland uses separate bands",
    "Personal Allowance taper above £100,000 is not modeled",
  ],
};

export const ukNationalInsurance: PayrollContribution = {
  name: "National Insurance",
  rate: 0.08, // Class 1 employee rate, £12,570–£50,270 band
  wageBase: 12570, // Primary Threshold
  employeeOrEmployer: "employee",
};