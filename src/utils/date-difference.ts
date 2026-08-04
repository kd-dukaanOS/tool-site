import { calculateExactAge, type ExactAge } from "./age";

export interface DateDifferenceInput {
  startDate: Date;
  endDate: Date;
}

export interface DateDifferenceResult {
  diff: ExactAge;
  isNegative: boolean;
}

export function validateDateDifferenceInput(i: DateDifferenceInput): string | null {
  if (Number.isNaN(i.startDate.getTime())) return "Please select a valid start date.";
  if (Number.isNaN(i.endDate.getTime())) return "Please select a valid end date.";
  return null;
}

export function calculateDateDifference(i: DateDifferenceInput): DateDifferenceResult {
  const isNegative = i.endDate < i.startDate;
  const [from, to] = isNegative ? [i.endDate, i.startDate] : [i.startDate, i.endDate];

  return {
    diff: calculateExactAge(from, to),
    isNegative,
  };
}

export function copyDateDifferenceSummary(i: DateDifferenceInput, r: DateDifferenceResult): string {
  return `
Date Difference Summary

Start Date: ${i.startDate.toLocaleDateString("en-US")}
End Date: ${i.endDate.toLocaleDateString("en-US")}

Difference: ${r.diff.years} years, ${r.diff.months} months, ${r.diff.days} days
Total Days: ${r.diff.totalDays}
Total Weeks: ${r.diff.totalWeeks}
`.trim();
}