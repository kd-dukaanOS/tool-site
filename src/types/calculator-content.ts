// src/types/calculator-content.ts

export interface FormulaData {
  formula: string;
  variables: { symbol: string; meaning: string }[];
  notes?: string;
}

export interface ExampleData {
  title: string;
  inputs: string; // e.g. "Weight: 70kg, Height: 1.75m"
  result: string; // e.g. "BMI = 22.9"
  explanation: string;
}

export interface FaqData {
  question: string;
  answer: string; // 40–90 words
}

export interface RelatedCalculator {
  title: string;
  href: string;
  icon?: string; // icon name or emoji, optional
}

export interface CalculatorContentData {
  intro?: {
    title: string;
    description: string; // 2–3 sentences
    highlights?: string[];
  };
  formula?: FormulaData;
  steps?: string[]; // 4–8 steps
  examples?: ExampleData[];
  tips?: string[]; // 5–10 tips
  mistakes?: string[];
  faqs?: FaqData[]; // 8–15 faqs
  related?: RelatedCalculator[];
}
