export interface EffectiveTaxRateResult {
  taxableIncome: number;
  totalTax: number;
  effectiveRate: number;
  marginalRate: number;
  bracketBreakdown: { rate: number; amountTaxed: number; tax: number }[];
  afterTaxIncome: number;
}

const BRACKETS_2026: Record<string, { rate: number; min: number }[]> = {
  single: [
    { rate: 0.10, min: 0 }, { rate: 0.12, min: 12400 }, { rate: 0.22, min: 50400 },
    { rate: 0.24, min: 105700 }, { rate: 0.32, min: 201775 }, { rate: 0.35, min: 256225 },
    { rate: 0.37, min: 640600 },
  ],
  mfj: [
    { rate: 0.10, min: 0 }, { rate: 0.12, min: 24800 }, { rate: 0.22, min: 100800 },
    { rate: 0.24, min: 211400 }, { rate: 0.32, min: 403550 }, { rate: 0.35, min: 512450 },
    { rate: 0.37, min: 768700 },
  ],
  hoh: [
    { rate: 0.10, min: 0 }, { rate: 0.12, min: 17700 }, { rate: 0.22, min: 67450 },
    { rate: 0.24, min: 105700 }, { rate: 0.32, min: 201750 }, { rate: 0.35, min: 256200 },
    { rate: 0.37, min: 640600 },
  ],
};

const STANDARD_DEDUCTION_2026: Record<string, number> = {
  single: 16100, mfj: 32200, hoh: 24150,
};

export function calculateEffectiveTaxRate(
  grossIncome: number,
  filingStatus: "single" | "mfj" | "hoh",
  useStandardDeduction: boolean,
  itemizedDeductions: number
): EffectiveTaxRateResult {
  const deduction = useStandardDeduction ? STANDARD_DEDUCTION_2026[filingStatus] : itemizedDeductions;
  const taxableIncome = Math.max(grossIncome - deduction, 0);

  const brackets = BRACKETS_2026[filingStatus];
  let totalTax = 0;
  let marginalRate = 0.10;
  const bracketBreakdown: { rate: number; amountTaxed: number; tax: number }[] = [];

  for (let i = 0; i < brackets.length; i++) {
    const { rate, min } = brackets[i];
    const nextMin = i + 1 < brackets.length ? brackets[i + 1].min : Infinity;
    if (taxableIncome > min) {
      const amountTaxed = Math.min(taxableIncome, nextMin) - min;
      const tax = amountTaxed * rate;
      totalTax += tax;
      bracketBreakdown.push({ rate, amountTaxed, tax });
      marginalRate = rate;
    }
  }

  const effectiveRate = grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0;
  const afterTaxIncome = grossIncome - totalTax;

  return { taxableIncome, totalTax, effectiveRate, marginalRate: marginalRate * 100, bracketBreakdown, afterTaxIncome };
}

export function validateEffectiveTaxRateInputs(grossIncome: number, lang: "en" | "es" = "en"): string | null {
  if (lang === "es") {
    if (grossIncome <= 0) return "El ingreso bruto debe ser mayor que cero.";
    return null;
  }
  if (grossIncome <= 0) return "Gross income must be greater than zero.";
  return null;
}