import type { IncomeTaxConfig } from "../../types";

export const bcIncomeTax: IncomeTaxConfig = {
  region: "CA-BC",
  currency: "CAD",
  effectiveDate: "NEEDS_VERIFICATION",
  lastReviewed: "NEEDS_VERIFICATION",
  source: "NEEDS_VERIFICATION — gov.bc.ca",
  needsVerification: true,
  standardDeduction: 0,
  brackets: [{ min: 0, max: null, rate: 0 }],
  assumptions: ["Provincial tax only — combine with federal for total"],
};