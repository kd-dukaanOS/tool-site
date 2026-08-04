export interface PayrollInput {
  basicSalary: number;
  hra: number;
  otherAllowances: number;
  pfPercent: number;
  professionalTax: number;
  otherDeductions: number;
}

export interface PayrollResult {
  grossSalary: number;
  pfDeduction: number;
  totalDeductions: number;
  netSalary: number;
}

export function validatePayrollInput(i: PayrollInput): string | null {
  if (i.basicSalary <= 0) return "Enter a valid basic salary.";
  if (i.hra < 0) return "Enter a valid HRA.";
  if (i.otherAllowances < 0) return "Enter valid other allowances.";
  if (i.pfPercent < 0 || i.pfPercent > 100) return "Enter a valid PF percentage.";
  if (i.professionalTax < 0) return "Enter a valid professional tax.";
  if (i.otherDeductions < 0) return "Enter valid other deductions.";
  return null;
}

export function calculatePayroll(i: PayrollInput): PayrollResult {
  const grossSalary = i.basicSalary + i.hra + i.otherAllowances;
  const pfDeduction = (i.basicSalary * i.pfPercent) / 100;
  const totalDeductions = pfDeduction + i.professionalTax + i.otherDeductions;
  const netSalary = grossSalary - totalDeductions;

  return {
    grossSalary: Math.round(grossSalary),
    pfDeduction: Math.round(pfDeduction),
    totalDeductions: Math.round(totalDeductions),
    netSalary: Math.round(netSalary),
  };
}

export function copyPayrollSummary(i: PayrollInput, r: PayrollResult): string {
  return `
Payroll Summary

Basic Salary: ₹${i.basicSalary}
HRA: ₹${i.hra}
Other Allowances: ₹${i.otherAllowances}

Gross Salary: ₹${r.grossSalary}

PF Deduction: ₹${r.pfDeduction}
Professional Tax: ₹${i.professionalTax}
Other Deductions: ₹${i.otherDeductions}
Total Deductions: ₹${r.totalDeductions}

Net Salary: ₹${r.netSalary}
`.trim();
}