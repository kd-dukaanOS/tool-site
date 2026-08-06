export interface FormulaData {
  formula: string;
  variables: { symbol: string; meaning: string }[];
  explanation?: string;
  interpretation?: string;
}

export interface ExampleData {
  inputs: string;
  result: string;
  explanation?: string;
}

export interface FaqData { q: string; a: string; }
export interface MistakeData { mistake: string; fix: string; }

export interface CalculatorContentData {
  meta?: {
    seoTitle?: string;
    metaDescription?: string;
    canonicalSlug?: string;
    ogTitle?: string;
    ogDescription?: string;
    twitterTitle?: string;
    twitterDescription?: string;
  };
  hero?: { text: string };
  about?: { text: string };
  formula?: FormulaData;
  steps?: string[];
  examples?: ExampleData[];
  practicalUses?: string[];
  expertTips?: string[];
  commonMistakes?: MistakeData[];
  faq?: FaqData[];
  relatedCalculators?: string[];
}
