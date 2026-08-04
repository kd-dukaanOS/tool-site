export type CaseType =
  | "upper" | "lower" | "title" | "sentence"
  | "camel" | "pascal" | "snake" | "kebab";

export interface CaseConverterInput {
  text: string;
  caseType: CaseType;
}

export interface CaseConverterResult {
  output: string;
}

export function validateCaseConverterInput(i: CaseConverterInput): string | null {
  if (!i.text) return "Enter text to convert.";
  return null;
}

function words(text: string): string[] {
  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/[\s_-]+/)
    .filter(Boolean);
}

export function calculateCaseConverter(i: CaseConverterInput): CaseConverterResult {
  const w = words(i.text);
  let output = "";

  switch (i.caseType) {
    case "upper":
      output = i.text.toUpperCase();
      break;
    case "lower":
      output = i.text.toLowerCase();
      break;
    case "title":
      output = w.map((x) => x[0].toUpperCase() + x.slice(1).toLowerCase()).join(" ");
      break;
    case "sentence":
      output = i.text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
      break;
    case "camel":
      output = w.map((x, idx) => (idx === 0 ? x.toLowerCase() : x[0].toUpperCase() + x.slice(1).toLowerCase())).join("");
      break;
    case "pascal":
      output = w.map((x) => x[0].toUpperCase() + x.slice(1).toLowerCase()).join("");
      break;
    case "snake":
      output = w.map((x) => x.toLowerCase()).join("_");
      break;
    case "kebab":
      output = w.map((x) => x.toLowerCase()).join("-");
      break;
  }

  return { output };
}

export function copyCaseConverterSummary(i: CaseConverterInput, r: CaseConverterResult): string {
  return `
Case Conversion

Input: ${i.text}
Output: ${r.output}
`.trim();
}