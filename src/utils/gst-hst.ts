export interface GstHstResult {
  preTaxAmount: number;
  taxAmount: number;
  totalAmount: number;
  taxRate: number;
}

const PROVINCE_RATES: Record<string, number> = {
  AB: 5, BC: 5, MB: 5, NT: 5, NU: 5, QC: 5, SK: 5, YT: 5,
  ON: 13,
  NS: 14,
  NB: 15, NL: 15, PE: 15,
};

export function calculateGstHst(
  amount: number,
  province: string,
  mode: "add" | "remove"
): GstHstResult {
  const taxRate = PROVINCE_RATES[province] ?? 5;

  if (mode === "add") {
    const preTaxAmount = amount;
    const taxAmount = preTaxAmount * (taxRate / 100);
    const totalAmount = preTaxAmount + taxAmount;
    return { preTaxAmount, taxAmount, totalAmount, taxRate };
  }

  const totalAmount = amount;
  const preTaxAmount = totalAmount / (1 + taxRate / 100);
  const taxAmount = totalAmount - preTaxAmount;
  return { preTaxAmount, taxAmount, totalAmount, taxRate };
}

export function validateGstHstInputs(amount: number, province: string): string | null {
  if (amount <= 0) return "Enter an amount greater than zero.";
  if (!PROVINCE_RATES[province]) return "Select a valid province or territory.";
  return null;
}