export interface LTVResult {
  ltvRatio: number;
  cltvRatio: number | null;
  loanAmount: number;
  equityAmount: number;
  equityPercent: number;
  pmiLikely: boolean;
  maxLoanFor80: number;
  amountToReach80: number;
}

export function calculateLTV(
  homeValue: number,
  loanBalance: number,
  secondLienBalance: number
): LTVResult {
  const ltvRatio = (loanBalance / homeValue) * 100;
  const cltvRatio = secondLienBalance > 0 ? ((loanBalance + secondLienBalance) / homeValue) * 100 : null;

  const equityAmount = homeValue - loanBalance;
  const equityPercent = (equityAmount / homeValue) * 100;

  const pmiLikely = ltvRatio > 80;

  const maxLoanFor80 = homeValue * 0.8;
  const amountToReach80 = Math.max(loanBalance - maxLoanFor80, 0);

  return {
    ltvRatio,
    cltvRatio,
    loanAmount: loanBalance,
    equityAmount,
    equityPercent,
    pmiLikely,
    maxLoanFor80,
    amountToReach80,
  };
}

export function validateLTVInputs(homeValue: number, loanBalance: number): string | null {
  if (homeValue <= 0) return "Home value must be greater than zero.";
  if (loanBalance < 0) return "Loan balance cannot be negative.";
  if (loanBalance > homeValue * 3) return "Loan balance seems unrealistic relative to home value.";
  return null;
}