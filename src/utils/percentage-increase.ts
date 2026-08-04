export interface PercentageIncreaseInput {
  originalValue: number;
  newValue: number;
}

export interface PercentageIncreaseResult {
  increaseAmount: number;
  percentageIncrease: number;
}

export function validatePercentageIncreaseInput(i: PercentageIncreaseInput): string | null {
  if (i.originalValue <= 0) return "Enter a valid original value.";
  if (i.newValue < 0) return "Enter a valid new value.";
  return null;
}

export function calculatePercentageIncrease(i: PercentageIncreaseInput): PercentageIncreaseResult {
  const increaseAmount = i.newValue - i.originalValue;
  const percentageIncrease = (increaseAmount / i.originalValue) * 100;

  return {
    increaseAmount: Math.round(increaseAmount * 100) / 100,
    percentageIncrease: Math.round(percentageIncrease * 100) / 100,
  };
}

export function copyPercentageIncreaseSummary(
  i: PercentageIncreaseInput,
  r: PercentageIncreaseResult
): string {
  return `
Percentage Increase Summary

Original Value: ${i.originalValue}
New Value: ${i.newValue}

Change: ${r.increaseAmount}
Percentage ${r.percentageIncrease >= 0 ? "Increase" : "Decrease"}: ${Math.abs(r.percentageIncrease)}%
`.trim();
}