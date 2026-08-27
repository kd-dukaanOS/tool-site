export interface CashFlowResult {
  operatingCashFlow: number;
  netCashFlow: number;
  endingCashBalance: number;
  cashFlowMargin: number;
}

export function calculateCashFlow(
  beginningCashBalance: number,
  operatingInflows: number,
  operatingOutflows: number,
  investingCashFlow: number,
  financingCashFlow: number,
  monthlyRevenue: number
): CashFlowResult {
  const operatingCashFlow = operatingInflows - operatingOutflows;
  const netCashFlow = operatingCashFlow + investingCashFlow + financingCashFlow;
  const endingCashBalance = beginningCashBalance + netCashFlow;
  const cashFlowMargin = monthlyRevenue > 0 ? (operatingCashFlow / monthlyRevenue) * 100 : 0;

  return { operatingCashFlow, netCashFlow, endingCashBalance, cashFlowMargin };
}

export function validateCashFlowInputs(operatingInflows: number, operatingOutflows: number): string | null {
  if (operatingInflows < 0) return "Operating cash inflows cannot be negative.";
  if (operatingOutflows < 0) return "Operating cash outflows cannot be negative.";
  return null;
}