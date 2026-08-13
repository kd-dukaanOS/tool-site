export interface TaxBracket {
  min: number;
  max: number | null;
  rate: number;
}

export interface RegionDataset {
  region: string;
  currency: string;
  effectiveDate: string;
  lastReviewed: string;
  source: string;
  needsVerification: boolean;
  assumptions: string[];
}

export interface IncomeTaxConfig extends RegionDataset {
  brackets: TaxBracket[];
  standardDeduction: number;
}

export interface PayrollContribution {
  name: string;
  rate: number;
  wageBase: number | null;
  employeeOrEmployer: "employee" | "employer" | "both";
}