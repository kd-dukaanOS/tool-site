export interface CommissionInput {
  salesAmount: number;
  commissionRate: number;
  baseSalary?: number;
}

export interface CommissionResult {
  commissionEarned: number;
  totalEarnings: number;
  effectiveRate: number;
}

export function validateCommissionInput(i: CommissionInput): string | null {
  if (i.salesAmount <= 0) return "Enter a valid sales amount.";
  if (i.commissionRate <= 0 || i.commissionRate > 100) return "Enter a valid commission rate.";
  if (i.baseSalary !== undefined && i.baseSalary < 0) return "Enter a valid base salary.";
  return null;
}

export function calculateCommission(i: CommissionInput): CommissionResult {
  const commissionEarned = (i.salesAmount * i.commissionRate) / 100;
  const baseSalary = i.baseSalary ?? 0;
  const totalEarnings = commissionEarned + baseSalary;
  const effectiveRate = (totalEarnings / i.salesAmount) * 100;

  return {
    commissionEarned: Math.round(commissionEarned),
    totalEarnings: Math.round(totalEarnings),
    effectiveRate: Math.round(effectiveRate * 100) / 100,
  };
}

export function copyCommissionSummary(i: CommissionInput, r: CommissionResult): string {
  return `
Commission Summary

Sales Amount: ₹${i.salesAmount}
Commission Rate: ${i.commissionRate}%
${i.baseSalary ? `Base Salary: ₹${i.baseSalary}` : ""}

Commission Earned: ₹${r.commissionEarned}
Total Earnings: ₹${r.totalEarnings}
Effective Rate: ${r.effectiveRate}%
`.trim();
}