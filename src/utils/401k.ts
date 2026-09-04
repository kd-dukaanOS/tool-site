export interface FourOhOneKResult {
  projectedBalance: number;
  totalEmployeeContributions: number;
  totalEmployerMatch: number;
  totalGrowth: number;
}

export function calculate401k(
  currentAge: number,
  retirementAge: number,
  currentBalance: number,
  annualSalary: number,
  contributionPercent: number,
  employerMatchPercent: number,
  employerMatchLimit: number,
  salaryGrowthRate: number,
  expectedReturn: number
): FourOhOneKResult {
  let balance = currentBalance;
  let salary = annualSalary;
  let totalEmployeeContributions = 0;
  let totalEmployerMatch = 0;

  const years = Math.max(retirementAge - currentAge, 0);

  for (let i = 0; i < years; i++) {
    const employeeContribution = salary * (contributionPercent / 100);
    const matchedPercent = Math.min(contributionPercent, employerMatchLimit);
    const employerContribution = salary * (matchedPercent / 100) * (employerMatchPercent / 100);

    totalEmployeeContributions += employeeContribution;
    totalEmployerMatch += employerContribution;

    balance = balance * (1 + expectedReturn / 100) + employeeContribution + employerContribution;
    salary = salary * (1 + salaryGrowthRate / 100);
  }

  const totalGrowth = balance - currentBalance - totalEmployeeContributions - totalEmployerMatch;

  return { projectedBalance: balance, totalEmployeeContributions, totalEmployerMatch, totalGrowth };
}

export function validate401kInputs(currentAge: number, retirementAge: number, lang: "en" | "es" = "en"): string | null {
  if (lang === "es") {
    if (currentAge <= 0) return "La edad actual debe ser mayor que cero.";
    if (retirementAge <= currentAge) return "La edad de jubilación debe ser mayor que la edad actual.";
    return null;
  }
  if (currentAge <= 0) return "Current age must be greater than zero.";
  if (retirementAge <= currentAge) return "Retirement age must be greater than current age.";
  return null;
}