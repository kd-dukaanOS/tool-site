import type { IncomeTaxConfig } from "../../types";

// NEEDS_VERIFICATION — repeat this file per province (alberta-tax.ts, bc-tax.ts...)
export const ontarioIncomeTax: IncomeTaxConfig = {
  region: "CA-ON",
  currency: "CAD",
  effectiveDate: "NEEDS_VERIFICATION",
  lastReviewed: "NEEDS_VERIFICATION",
  source: "NEEDS_VERIFICATION — ontario.ca",
  needsVerification: true,
  standardDeduction: 0,
  brackets: [{ min: 0, max: null, rate: 0 }],
  assumptions: ["Provincial tax only — combine with federal for total"],
};