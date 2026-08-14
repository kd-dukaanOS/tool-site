import type { IncomeTaxConfig, PayrollContribution } from "../types";

// 2026 tax year — CRA-confirmed brackets and Basic Personal Amount (BPA)
// Source: canada.ca / CRA 2026 indexation, verified August 2026
// Brackets are expressed as GROSS income, with the $16,452 BPA folded in as a
// 0% band (a simplified stand-in for the BPA's actual role as a tax credit).
export const caFederalIncomeTax: IncomeTaxConfig = {
  region: "CA-Federal",
  currency: "CAD",
  effectiveDate: "2026-01-01",
  lastReviewed: "2026-08-13",
  source: "Canada Revenue Agency (CRA), 2026 indexation",
  needsVerification: false,
  standardDeduction: 16452, // Basic Personal Amount
  brackets: [
    { min: 0, max: 16452, rate: 0 },
    { min: 16452, max: 74975, rate: 0.14 },
    { min: 74975, max: 133497, rate: 0.205 },
    { min: 133497, max: 197892, rate: 0.26 },
    { min: 197892, max: 274934, rate: 0.29 },
    { min: 274934, max: null, rate: 0.33 },
  ],
  assumptions: [
    "Federal only — provincial tax handled per-province separately",
    "BPA modeled as a 0% band rather than a tax credit — a simplification",
    "BPA claw-back above $181,440 net income is not modeled",
  ],
};

export const caCPP: PayrollContribution = {
  name: "CPP",
  rate: 0.0595, // 2026 employee rate
  wageBase: 74600, // YMPE (Year's Maximum Pensionable Earnings)
  employeeOrEmployer: "both",
};

export const caEI: PayrollContribution = {
  name: "EI",
  rate: 0.0163, // 2026 employee rate
  wageBase: 68900, // Maximum Insurable Earnings
  employeeOrEmployer: "employee",
};

export const CPP2_CEILING = 85000; // YAMPE - second CPP earnings ceiling
export const CPP2_RATE = 0.04; // CPP2 employee/employer rate, on earnings between YMPE and YAMPE