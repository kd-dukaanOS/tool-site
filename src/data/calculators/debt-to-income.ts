import { pickYouMayLike } from "../calculator-pool";

export const debtToIncomeCalculatorContent = {
  meta: {
    seoTitle: "Debt-to-Income Ratio Calculator - DTI Calculator Free 2026",
    metaDescription: "Free DTI calculator. Find your front-end and back-end debt-to-income ratio for mortgage qualification, with instant lender-standard ratings.",
    canonicalSlug: "/debt-to-income-calculator",
    ogTitle: "Debt-to-Income (DTI) Ratio Calculator",
    ogDescription: "Calculate your front-end and back-end DTI ratio for mortgage approval instantly.",
    twitterTitle: "Free DTI Calculator",
    twitterDescription: "Check your debt-to-income ratio for mortgage qualification.",
  },

  hero: {
    text: "The Debt-to-Income (DTI) Ratio Calculator finds both your front-end (housing-only) and back-end (total debt) DTI ratios — the key numbers mortgage lenders use to determine how much home you qualify for.",
  },

  about: {
    text: `Debt-to-income ratio is one of the most important numbers in mortgage qualification, comparing your monthly debt obligations to your gross monthly income to measure how much of your income is already committed.

Lenders calculate two versions: front-end DTI, which only counts housing costs (mortgage, tax, insurance, HOA), and back-end DTI, which adds all other debts — car loans, student loans, credit card minimums, and other recurring payments.

Most conventional lenders prefer a back-end DTI at or below 36%, though many approve loans up to 43-45% with strong credit and cash reserves, while some government-backed loans (FHA) allow even higher.

This calculator also shows how much additional monthly debt you could take on while staying under the 36% and 43% thresholds — useful before shopping for a home or taking on new debt.`,
  },

  formula: {
    formula: "Front-End DTI = Housing Payment ÷ Gross Monthly Income × 100; Back-End DTI = Total Monthly Debt ÷ Gross Monthly Income × 100",
    variables: [
      { symbol: "Front-End DTI", meaning: "Housing costs only (mortgage, tax, insurance, HOA) as a % of gross income" },
      { symbol: "Back-End DTI", meaning: "All monthly debt obligations including housing as a % of gross income" },
      { symbol: "Gross Monthly Income", meaning: "Pre-tax monthly income from all qualifying sources" },
    ],
    explanation: "Lenders use gross (pre-tax) income, not take-home pay, and count only minimum required payments on debts — not full balances. The 28/36 rule is a common lending guideline: front-end DTI under 28% and back-end DTI under 36%.",
    interpretation: "For example, with $6,000 gross monthly income, $1,500 mortgage payment, and $400 in other debt: front-end DTI is 25% (Excellent) and back-end DTI is 31.7% (Excellent), comfortably qualifying under most conventional loan standards.",
  },

  steps: [
    "Enter your gross (pre-tax) monthly income from all sources.",
    "Enter your total monthly housing payment (mortgage, tax, insurance, HOA).",
    "Enter your car loan, student loan, and credit card minimum payments.",
    "Enter any other recurring monthly debt obligations.",
    "Click Calculate to see your front-end and back-end DTI ratios.",
  ],

  examples: [
    { inputs: "Income: $6,000, Housing: $1,500, Other Debt: $400", result: "Front-End: 25%, Back-End: 31.7%", explanation: "Both ratios fall well within conventional lending guidelines." },
    { inputs: "Income: $5,000, Housing: $1,800, Other Debt: $900", result: "Front-End: 36%, Back-End: 54%", explanation: "Back-end DTI above 50% is high risk and would require exceptional compensating factors to qualify." },
    { inputs: "Income: $8,000, Housing: $2,200, Other Debt: $600", result: "Front-End: 27.5%, Back-End: 35%", explanation: "A strong DTI profile that fits within the traditional 28/36 lending rule." },
  ],

  practicalUses: [
    "Checking mortgage qualification eligibility before applying",
    "Determining how much additional debt you can take on while staying loan-eligible",
    "Comparing DTI impact of different home price and down payment scenarios",
    "Understanding why a mortgage application was denied or approved at a certain rate",
    "Planning debt payoff strategy before a home purchase to improve DTI",
    "Evaluating auto loan or personal loan affordability alongside existing housing costs",
  ],

  expertTips: [
    "Lenders use gross income, not net take-home pay, so your DTI will look better than a budget calculated on after-tax income.",
    "Only minimum required payments count toward DTI — paying extra on a loan doesn't lower your DTI calculation.",
    "FHA loans allow back-end DTI up to 50% in some cases with compensating factors like strong credit or cash reserves.",
    "Paying off or consolidating a small debt with a high minimum payment can meaningfully lower back-end DTI before applying for a mortgage.",
    "Student loans in deferment or income-driven repayment still count toward DTI, though lenders may use a different calculated payment.",
    "The 28/36 rule is a guideline, not a hard law — actual approval depends on the full loan program and lender overlays.",
  ],

  commonMistakes: [
    { mistake: "Using net income instead of gross income", fix: "DTI is always calculated on gross (pre-tax) monthly income, not your take-home paycheck." },
    { mistake: "Forgetting to include all recurring debts", fix: "Include car loans, student loans, credit card minimums, and any other monthly debt obligations, not just housing." },
    { mistake: "Confusing front-end and back-end DTI", fix: "Front-end only counts housing costs; back-end counts all debt — lenders evaluate both separately." },
    { mistake: "Assuming a high DTI means automatic denial", fix: "Some loan programs allow DTI up to 50% with strong compensating factors — check specific loan program guidelines." },
  ],

  faq: [
    { q: "What is a good debt-to-income ratio?", a: "A back-end DTI of 36% or lower is generally considered good, with 43% often being the maximum for qualified mortgages." },
    { q: "How do I calculate my DTI ratio?", a: "Divide your total monthly debt payments (including housing) by your gross monthly income, then multiply by 100 to get a percentage." },
    { q: "What is the difference between front-end and back-end DTI?", a: "Front-end DTI counts only housing costs, while back-end DTI includes housing plus all other monthly debt obligations like car loans and credit cards." },
    { q: "What DTI do I need to qualify for a mortgage?", a: "Most conventional lenders prefer back-end DTI at or below 43%, though some programs allow up to 45-50% with strong compensating factors." },
    { q: "Does DTI include rent if I'm buying a new home?", a: "No, current rent is excluded once you're applying for a mortgage — lenders use the new projected housing payment instead." },
    { q: "What counts as debt in a DTI calculation?", a: "Minimum payments on car loans, student loans, credit cards, personal loans, and the proposed or current mortgage payment all count; utilities and groceries do not." },
    { q: "Can I get a mortgage with a 45% DTI?", a: "Yes, some loan programs (especially FHA) allow DTI up to 45-50% with compensating factors like strong credit score or cash reserves." },
    { q: "How can I lower my DTI before buying a home?", a: "Pay down or pay off debts with high minimum payments, avoid new debt before applying, and consider increasing income or waiting to save a larger down payment." },
    { q: "Does DTI affect my mortgage interest rate?", a: "Yes, some lenders offer better pricing tiers for lower DTI borrowers since they represent lower default risk." },
    { q: "What is the 28/36 rule?", a: "It's a common lending guideline suggesting housing costs should be at or below 28% of gross income, and total debt at or below 36%." },
    { q: "Do student loans in deferment count toward DTI?", a: "Yes, most lenders still count a calculated payment for deferred student loans, often using a percentage of the loan balance if no fixed payment exists." },
    { q: "Is DTI the same as credit utilization?", a: "No, DTI compares debt payments to income, while credit utilization compares credit card balances to credit limits — both affect loan approval differently." },
    { q: "What income counts toward DTI calculation?", a: "Lenders typically count gross salary, consistent bonus/commission income, self-employment income (averaged over 2 years), and other verifiable, ongoing income sources." },
    { q: "How much house can I afford based on DTI?", a: "Using the 36% guideline, multiply your gross monthly income by 0.36 and subtract existing debts to estimate your maximum affordable housing payment." },
  ],

  relatedCalculators: ["Mortgage Calculator", "Down Payment Calculator", "Debt Snowball Calculator", "Debt Consolidation Calculator"],

  youMayLike: pickYouMayLike("debt-to-income-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Debt-to-Income Ratio Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};