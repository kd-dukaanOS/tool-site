export interface SalaryInput {
  annualCTC: number;
  basicPercent: number; // % of CTC
  hraPercent: number; // % of Basic
  employeePFPercent: number; // % of Basic
  employerPFPercent: number; // % of Basic
  professionalTaxMonthly: number; // flat ₹/month
}

export interface SalaryResult {
  annualBasic: number;
  annualHRA: number;
  annualSpecialAllowance: number;
  annualEmployerPF: number;
  annualEmployeePF: number;
  annualProfessionalTax: number;
  annualGross: number;
  annualNetTakeHome: number;
  monthlyGross: number;
  monthlyNetTakeHome: number;
  monthlyBasic: number;
  monthlyHRA: number;
}

export function validateSalaryInput(input: SalaryInput): string | null {

  const { annualCTC, basicPercent, hraPercent, employeePFPercent, employerPFPercent } = input;

  if (!annualCTC || Number.isNaN(annualCTC) || annualCTC <= 0) {
    return "Please enter a valid annual CTC.";
  }

  if (!basicPercent || basicPercent <= 0 || basicPercent > 100) {
    return "Basic salary % must be between 1 and 100.";
  }

  if (hraPercent < 0 || hraPercent > 100) {
    return "HRA % must be between 0 and 100.";
  }

  if (employeePFPercent < 0 || employeePFPercent > 100) {
    return "Employee PF % must be between 0 and 100.";
  }

  if (employerPFPercent < 0 || employerPFPercent > 100) {
    return "Employer PF % must be between 0 and 100.";
  }

  return null;
}

export function calculateSalary(input: SalaryInput): SalaryResult {

  const {
    annualCTC,
    basicPercent,
    hraPercent,
    employeePFPercent,
    employerPFPercent,
    professionalTaxMonthly,
  } = input;

  const annualBasic = annualCTC * (basicPercent / 100);
  const annualHRA = annualBasic * (hraPercent / 100);
  const annualEmployerPF = annualBasic * (employerPFPercent / 100);
  const annualEmployeePF = annualBasic * (employeePFPercent / 100);

  const annualGross = annualCTC - annualEmployerPF;
  const annualSpecialAllowance = Math.max(annualGross - annualBasic - annualHRA, 0);

  const annualProfessionalTax = professionalTaxMonthly * 12;

  const annualNetTakeHome = annualGross - annualEmployeePF - annualProfessionalTax;

  return {
    annualBasic,
    annualHRA,
    annualSpecialAllowance,
    annualEmployerPF,
    annualEmployeePF,
    annualProfessionalTax,
    annualGross,
    annualNetTakeHome,
    monthlyGross: annualGross / 12,
    monthlyNetTakeHome: annualNetTakeHome / 12,
    monthlyBasic: annualBasic / 12,
    monthlyHRA: annualHRA / 12,
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function copySalarySummary(input: SalaryInput, result: SalaryResult): string {

  return `
Salary Breakdown

Annual CTC:
${formatCurrency(input.annualCTC)}

Monthly Gross:
${formatCurrency(result.monthlyGross)}

Monthly Basic:
${formatCurrency(result.monthlyBasic)}

Monthly HRA:
${formatCurrency(result.monthlyHRA)}

Monthly Take Home:
${formatCurrency(result.monthlyNetTakeHome)}

Annual Take Home:
${formatCurrency(result.annualNetTakeHome)}
`.trim();

}
