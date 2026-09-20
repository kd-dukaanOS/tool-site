export interface UkStudentLoanResult {
  annualRepayment: number;
  monthlyRepayment: number;
  incomeAboveThreshold: number;
  repaymentRate: number;
  threshold: number;
}

const PLAN_CONFIG: Record<string, { threshold: number; rate: number }> = {
  plan1: { threshold: 26900, rate: 9 },
  plan2: { threshold: 29385, rate: 9 },
  plan4: { threshold: 32745, rate: 9 },
  plan5: { threshold: 25000, rate: 9 },
  postgrad: { threshold: 21000, rate: 6 },
};

export function calculateUkStudentLoan(annualSalary: number, plan: string): UkStudentLoanResult {
  const config = PLAN_CONFIG[plan] ?? PLAN_CONFIG.plan2;
  const incomeAboveThreshold = Math.max(annualSalary - config.threshold, 0);
  const annualRepayment = incomeAboveThreshold * (config.rate / 100);
  const monthlyRepayment = annualRepayment / 12;

  return {
    annualRepayment,
    monthlyRepayment,
    incomeAboveThreshold,
    repaymentRate: config.rate,
    threshold: config.threshold,
  };
}

export function validateUkStudentLoanInputs(annualSalary: number, lang: "en" | "es" = "en"): string | null {
  if (annualSalary <= 0) return lang === "es" ? "Ingresa un salario anual mayor a cero." : "Enter an annual salary greater than zero.";
  return null;
}