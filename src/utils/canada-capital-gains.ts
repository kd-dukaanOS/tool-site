export interface CanadaCapitalGainsResult {
  capitalGain: number;
  taxableCapitalGain: number;
  estimatedTax: number;
  inclusionRate: number;
}

const INCLUSION_RATE = 50; // current enacted rate; proposed 2/3 increase was scrapped

export function calculateCanadaCapitalGains(
  proceedsOfDisposition: number,
  adjustedCostBase: number,
  outlaysAndExpenses: number,
  marginalTaxRate: number
): CanadaCapitalGainsResult {
  const capitalGain = Math.max(proceedsOfDisposition - adjustedCostBase - outlaysAndExpenses, 0);
  const taxableCapitalGain = capitalGain * (INCLUSION_RATE / 100);
  const estimatedTax = taxableCapitalGain * (marginalTaxRate / 100);

  return { capitalGain, taxableCapitalGain, estimatedTax, inclusionRate: INCLUSION_RATE };
}

export function validateCanadaCapitalGainsInputs(
  proceedsOfDisposition: number,
  adjustedCostBase: number,
  marginalTaxRate: number
): string | null {
  if (proceedsOfDisposition <= 0) return "Proceeds of disposition must be greater than zero.";
  if (adjustedCostBase < 0) return "Adjusted cost base cannot be negative.";
  if (marginalTaxRate <= 0 || marginalTaxRate > 55) return "Enter a valid marginal tax rate between 0% and 55%.";
  return null;
}