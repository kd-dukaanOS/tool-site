import { round } from "./calculator";

export type PercentMode =
  | "percentOf"
  | "isWhatPercent"
  | "percentChange"
  | "findBase";

export interface PercentResult {
  result: number;
  positive: boolean;
}

export interface ModeInfo {
  title: string;
  value1Label: string;
  value2Label: string;
  hint: string;
}

export const MODE_INFO: Record<PercentMode, ModeInfo> = {
  percentOf: {
    title: "X% of Y",
    value1Label: "Percentage (%)",
    value2Label: "Number",
    hint: "Find what value X% of Y equals.",
  },
  isWhatPercent: {
    title: "X is what % of Y",
    value1Label: "Part (X)",
    value2Label: "Whole (Y)",
    hint: "Find what percentage X is of Y.",
  },
  percentChange: {
    title: "% Increase / Decrease",
    value1Label: "From Value",
    value2Label: "To Value",
    hint: "Find the percentage change from one value to another.",
  },
  findBase: {
    title: "X is Y% of what?",
    value1Label: "Value (X)",
    value2Label: "Percent (Y%)",
    hint: "Find the original number when X is Y percent of it.",
  },
};

export function calculatePercent(
  mode: PercentMode,
  value1: number,
  value2: number
): PercentResult {

  switch (mode) {

    case "percentOf":
      return { result: round((value1 / 100) * value2), positive: true };

    case "isWhatPercent":
      return { result: round((value1 / value2) * 100), positive: true };

    case "percentChange": {
      const change = ((value2 - value1) / value1) * 100;
      return { result: round(change), positive: change >= 0 };
    }

    case "findBase":
      return { result: round(value1 / (value2 / 100)), positive: true };
  }
}

export function percentExpression(
  mode: PercentMode,
  value1: number,
  value2: number,
  result: PercentResult
): string {

  switch (mode) {
    case "percentOf":
      return `${value1}% of ${value2} = ${result.result}`;
    case "isWhatPercent":
      return `${value1} is ${result.result}% of ${value2}`;
    case "percentChange":
      return `${value1} → ${value2} is a ${Math.abs(result.result)}% ${result.positive ? "increase" : "decrease"}`;
    case "findBase":
      return `${value1} is ${value2}% of ${result.result}`;
  }
}

export function percentInsight(
  mode: PercentMode,
  result: PercentResult
): string {

  if (mode === "percentChange") {
    return result.positive
      ? `This is a rise of ${Math.abs(result.result)}%.`
      : `This is a drop of ${Math.abs(result.result)}%.`;
  }

  if (mode === "isWhatPercent") {
    return `That's ${result.result >= 100 ? "more than the whole" : `${round(100 - result.result, 1)}% short of the whole`}.`;
  }

  return `Result calculated using the "${MODE_INFO[mode].title}" formula.`;
}

export function validatePercentInputs(
  mode: PercentMode,
  value1: number,
  value2: number
): string | null {

  if (Number.isNaN(value1)) return "Please enter a valid first value.";
  if (Number.isNaN(value2)) return "Please enter a valid second value.";

  if ((mode === "isWhatPercent" || mode === "percentChange" || mode === "findBase") && value2 === 0) {
    return "The second value cannot be zero for this calculation.";
  }

  return null;
}

export function copyPercentSummary(
  mode: PercentMode,
  value1: number,
  value2: number,
  result: PercentResult
): string {

  return `
Percentage Calculation

Type: ${MODE_INFO[mode].title}
${MODE_INFO[mode].value1Label}: ${value1}
${MODE_INFO[mode].value2Label}: ${value2}

Result: ${percentExpression(mode, value1, value2, result)}
`.trim();
}
