import type { IncomeTaxConfig, PayrollContribution } from "../types";

// NEEDS_VERIFICATION: confirm current CRA tax year brackets before use
export const caFederalIncomeTax: IncomeTaxConfig = {
  region: "CA-Federal",
  currency: "CAD",
  effectiveDate: "NEEDS_VERIFICATION",
  lastReviewed: "NEEDS_VERIFICATION",
  source: "NEEDS_VERIFICATION — canada.ca",
  needsVerification: true,
  standardDeduction: 0, // basic personal amount — NEEDS_VERIFICATION
  brackets: [
    { min: 0, max: null, rate: 0 }, // NEEDS_VERIFICATION
  ],
  assumptions: [
    "Federal only — provincial tax handled per-province separately",
  ],
};

export const caCPP: PayrollContribution = {
  name: "CPP",
  rate: 0, // NEEDS_VERIFICATION
  wageBase: 0, // YMPE — NEEDS_VERIFICATION
  employeeOrEmployer: "both",
};

export const caEI: PayrollContribution = {
  name: "EI",
  rate: 0, // NEEDS_VERIFICATION
  wageBase: 0, // NEEDS_VERIFICATION
  employeeOrEmployer: "employee",
};