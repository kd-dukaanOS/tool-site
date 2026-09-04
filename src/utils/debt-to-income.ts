export interface DTIResult {
  frontEndDTI: number;
  backEndDTI: number;
  totalMonthlyDebt: number;
  frontEndRating: string;
  backEndRating: string;
  maxAdditionalDebtFor36: number;
  maxAdditionalDebtFor43: number;
}

function rateDTI(dti: number, thresholds: [number, string][]): string {
  for (const [max, label] of thresholds) {
    if (dti <= max) return label;
  }
  return thresholds[thresholds.length - 1][1];
}

export function calculateDTI(
  grossMonthlyIncome: number,
  housingPayment: number,
  carLoanPayment: number,
  studentLoanPayment: number,
  creditCardMinPayments: number,
  otherDebtPayments: number,
  lang: "en" | "es" = "en"
): DTIResult {
  const totalMonthlyDebt = housingPayment + carLoanPayment + studentLoanPayment + creditCardMinPayments + otherDebtPayments;
  const nonHousingDebt = carLoanPayment + studentLoanPayment + creditCardMinPayments + otherDebtPayments;

  const frontEndDTI = (housingPayment / grossMonthlyIncome) * 100;
  const backEndDTI = (totalMonthlyDebt / grossMonthlyIncome) * 100;

  const labels = lang === "es"
    ? { excellent:"Excelente", good:"Bueno", borderline:"Límite", highRisk:"Alto Riesgo" }
    : { excellent:"Excellent", good:"Good", borderline:"Borderline", highRisk:"High Risk" };

  const frontEndRating = rateDTI(frontEndDTI, [
    [28, labels.excellent],
    [33, labels.good],
    [40, labels.borderline],
    [Infinity, labels.highRisk],
  ]);

  const backEndRating = rateDTI(backEndDTI, [
    [36, labels.excellent],
    [43, labels.good],
    [50, labels.borderline],
    [Infinity, labels.highRisk],
  ]);

  const maxAdditionalDebtFor36 = Math.max(grossMonthlyIncome * 0.36 - totalMonthlyDebt, 0);
  const maxAdditionalDebtFor43 = Math.max(grossMonthlyIncome * 0.43 - totalMonthlyDebt, 0);

  return {
    frontEndDTI,
    backEndDTI,
    totalMonthlyDebt,
    frontEndRating,
    backEndRating,
    maxAdditionalDebtFor36,
    maxAdditionalDebtFor43,
  };
}

export function validateDTIInputs(grossMonthlyIncome: number, lang: "en" | "es" = "en"): string | null {
  if (lang === "es") {
    if (grossMonthlyIncome <= 0) return "El ingreso mensual bruto debe ser mayor que cero.";
    return null;
  }
  if (grossMonthlyIncome <= 0) return "Gross monthly income must be greater than zero.";
  return null;
}