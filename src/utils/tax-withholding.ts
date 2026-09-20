// src/utils/tax-withholding.ts
// NOTE: 2025 IRS Pub 15-T Percentage Method brackets used below — mark NEEDS_VERIFICATION, confirm against latest Pub 15-T before publishing.

export interface WithholdingResult {
  annualGrossIncome: number;
  adjustedAnnualWage: number;
  annualTaxWithheld: number;
  perPeriodWithholding: number;
  effectiveWithholdingRate: number;
}

type FilingStatus = "single" | "married" | "headOfHousehold";
type PayFrequency = "weekly" | "biweekly" | "semimonthly" | "monthly" | "annual";

const PERIODS_PER_YEAR: Record<PayFrequency, number> = {
  weekly: 52,
  biweekly: 26,
  semimonthly: 24,
  monthly: 12,
  annual: 1,
};

// 2025 Standard Withholding Rate Schedules (Step 2 checkbox NOT checked) — NEEDS_VERIFICATION
const BRACKETS: Record<FilingStatus, { upTo: number; base: number; rate: number; over: number }[]> = {
  single: [
    { upTo: 6000, base: 0, rate: 0, over: 0 },
    { upTo: 17600, base: 0, rate: 0.10, over: 6000 },
    { upTo: 53375, base: 1160, rate: 0.12, over: 17600 },
    { upTo: 106175, base: 5453, rate: 0.22, over: 53375 },
    { upTo: 197950, base: 17049, rate: 0.24, over: 106175 },
    { upTo: 249450, base: 39075, rate: 0.32, over: 197950 },
    { upTo: 615350, base: 55555, rate: 0.35, over: 249450 },
    { upTo: Infinity, base: 183647.5, rate: 0.37, over: 615350 },
  ],
  married: [
    { upTo: 17100, base: 0, rate: 0, over: 0 },
    { upTo: 40350, base: 0, rate: 0.10, over: 17100 },
    { upTo: 111750, base: 2325, rate: 0.12, over: 40350 },
    { upTo: 217350, base: 10893, rate: 0.22, over: 111750 },
    { upTo: 400900, base: 34125, rate: 0.24, over: 217350 },
    { upTo: 503750, base: 78177, rate: 0.32, over: 400900 },
    { upTo: 747500, base: 111089, rate: 0.35, over: 503750 },
    { upTo: Infinity, base: 196201.5, rate: 0.37, over: 747500 },
  ],
  headOfHousehold: [
    { upTo: 12100, base: 0, rate: 0, over: 0 },
    { upTo: 24900, base: 0, rate: 0.10, over: 12100 },
    { upTo: 62650, base: 1280, rate: 0.12, over: 24900 },
    { upTo: 94100, base: 5810, rate: 0.22, over: 62650 },
    { upTo: 185600, base: 12729, rate: 0.24, over: 94100 },
    { upTo: 237100, base: 34689, rate: 0.32, over: 185600 },
    { upTo: 602600, base: 51169, rate: 0.35, over: 237100 },
    { upTo: Infinity, base: 179044, rate: 0.37, over: 602600 },
  ],
};

function taxFromBracket(status: FilingStatus, amount: number): number {
  const table = BRACKETS[status];
  const bracket = table.find((b) => amount <= b.upTo) ?? table[table.length - 1];
  return bracket.base + (amount - bracket.over) * bracket.rate;
}

export function calculateTaxWithholding(
  filingStatus: FilingStatus,
  payFrequency: PayFrequency,
  grossPayPerPeriod: number,
  multipleJobsOrSpouseWorks: boolean,
  dependentsAmountAnnual: number,
  otherIncomeAnnual: number,
  deductionsAnnual: number,
  extraWithholdingPerPeriod: number
): WithholdingResult {
  const periods = PERIODS_PER_YEAR[payFrequency];
  const annualGrossIncome = grossPayPerPeriod * periods;

  let adjustedAnnualWage = annualGrossIncome + otherIncomeAnnual - deductionsAnnual;
  if (multipleJobsOrSpouseWorks) adjustedAnnualWage *= 1; // Step 2 checkbox not modeled separately; user should use IRS estimator for precise multi-job splits
  adjustedAnnualWage = Math.max(adjustedAnnualWage, 0);

  let annualTaxWithheld = taxFromBracket(filingStatus, adjustedAnnualWage) - dependentsAmountAnnual;
  annualTaxWithheld = Math.max(annualTaxWithheld, 0);

  const perPeriodWithholding = annualTaxWithheld / periods + extraWithholdingPerPeriod;
  const effectiveWithholdingRate = annualGrossIncome > 0 ? (annualTaxWithheld / annualGrossIncome) * 100 : 0;

  return {
    annualGrossIncome,
    adjustedAnnualWage,
    annualTaxWithheld,
    perPeriodWithholding,
    effectiveWithholdingRate,
  };
}

export function validateWithholdingInputs(grossPayPerPeriod: number, lang: "en" | "es" = "en"): string | null {
  if (grossPayPerPeriod <= 0) return lang === "es" ? "El pago bruto por período debe ser mayor a cero." : "Gross pay per period must be greater than zero.";
  return null;
}