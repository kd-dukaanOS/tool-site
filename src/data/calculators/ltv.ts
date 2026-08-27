import { pickYouMayLike } from "../calculator-pool";

export const ltvCalculatorContent = {
  meta: {
    seoTitle: "LTV Calculator - Loan-to-Value Ratio Calculator Free 2026",
    metaDescription: "Free loan-to-value (LTV) calculator. Find your LTV ratio, combined LTV, home equity, and PMI status instantly for refinancing or home equity loans.",
    canonicalSlug: "/ltv-calculator",
    ogTitle: "LTV Calculator - Loan-to-Value Ratio",
    ogDescription: "Calculate your loan-to-value ratio and home equity in seconds.",
    twitterTitle: "Free LTV Calculator",
    twitterDescription: "Check your loan-to-value ratio and PMI status instantly.",
  },

  hero: {
    text: "The LTV Calculator finds your loan-to-value ratio, combined LTV (with a second lien), home equity amount, and whether PMI applies — key numbers lenders use for refinancing, HELOC, and home equity loan approval.",
  },

  about: {
    text: `Loan-to-value (LTV) ratio is one of the most important numbers in mortgage lending — it's the percentage of your home's value that's still financed through a loan, and it directly affects your interest rate, PMI requirement, and refinance or HELOC eligibility.

This calculator divides your current loan balance by your home's current market value to find your LTV ratio, and if you have a second mortgage or HELOC, calculates your combined loan-to-value (CLTV) as well.

Lenders commonly use 80% LTV as the key threshold — below it, PMI usually isn't required on a conventional loan, and you typically qualify for the best refinance and home equity loan rates.

Use current market value, not your original purchase price, for the most accurate LTV — home values change with local market conditions and appreciation over time.`,
  },

  formula: {
    formula: "LTV = (Loan Balance ÷ Home Value) × 100; CLTV = (First Lien + Second Lien) ÷ Home Value × 100",
    variables: [
      { symbol: "LTV", meaning: "Loan-to-Value ratio — the portion of home value still financed" },
      { symbol: "CLTV", meaning: "Combined Loan-to-Value — includes a second mortgage or HELOC balance" },
      { symbol: "Equity", meaning: "Home Value − Loan Balance, the portion of the home you truly own" },
    ],
    explanation: "A lower LTV means more equity and less lender risk, which typically unlocks better refinance rates, HELOC eligibility, and removal of PMI. Most lenders cap standard home equity products at 80-85% CLTV.",
    interpretation: "For example, a $400,000 home with a $280,000 loan balance has a 70% LTV — well below the 80% PMI threshold and eligible for most refinance and home equity products.",
  },

  steps: [
    "Enter your home's current market value (not original purchase price).",
    "Enter your current first mortgage loan balance.",
    "Enter any second mortgage or HELOC balance, if applicable (or leave as 0).",
    "Click Calculate to see your LTV, CLTV, and equity.",
  ],

  examples: [
    { inputs: "Home Value: $400,000, Loan: $280,000", result: "LTV: 70%, Equity: $120,000", explanation: "Below 80% LTV, typically eligible for refinancing without PMI." },
    { inputs: "Home Value: $350,000, Loan: $315,000", result: "LTV: 90%, PMI Likely", explanation: "Above 80% LTV, PMI is commonly required until equity increases." },
    { inputs: "Home Value: $500,000, Loan: $300,000, 2nd Lien: $50,000", result: "LTV: 60%, CLTV: 70%", explanation: "Combined LTV accounts for both the first mortgage and a HELOC or second loan." },
  ],

  practicalUses: [
    "Checking eligibility for a mortgage refinance",
    "Determining if PMI can be removed from a conventional loan",
    "Estimating how much you can borrow through a HELOC or home equity loan",
    "Tracking home equity growth over time as you pay down the mortgage",
    "Comparing LTV before and after a cash-out refinance",
    "Understanding lender risk tiers before applying for a new loan product",
  ],

  expertTips: [
    "Most lenders require 80% LTV or lower to avoid PMI on a conventional refinance.",
    "HELOCs and home equity loans typically cap combined LTV (CLTV) at 80-85%, so factor in your first mortgage balance too.",
    "Get a professional appraisal rather than estimating home value — lenders use appraised value, not your own estimate, for LTV calculations.",
    "A cash-out refinance increases your LTV since you're borrowing against equity — check the new LTV before committing.",
    "Rising home values naturally lower your LTV over time even without extra mortgage payments, due to appreciation.",
    "Some loan programs (VA, USDA) allow LTV above 100% in certain cases — this calculator uses standard conventional thresholds.",
  ],

  commonMistakes: [
    { mistake: "Using original purchase price instead of current value", fix: "LTV should be based on current market value or a recent appraisal, not what you originally paid." },
    { mistake: "Forgetting to include a second lien in CLTV", fix: "If you have a HELOC or second mortgage, combined LTV (CLTV) matters more than first-lien LTV alone for equity borrowing." },
    { mistake: "Assuming PMI removal is automatic below 80%", fix: "While PMI legally terminates at 78% LTV, reaching 80% may require you to formally request cancellation from your lender." },
    { mistake: "Ignoring LTV impact on interest rates", fix: "Even without PMI, lenders often price loans in LTV tiers — a lower LTV can mean a better rate, not just no PMI." },
  ],

  faq: [
    { q: "What is a good loan-to-value ratio?", a: "80% or lower is generally considered good, since it avoids PMI on conventional loans and qualifies for better refinance and equity loan terms." },
    { q: "How do I calculate my LTV ratio?", a: "Divide your current loan balance by your home's current market value, then multiply by 100 to get a percentage." },
    { q: "What is the difference between LTV and CLTV?", a: "LTV considers only your first mortgage, while CLTV (combined loan-to-value) includes any second mortgage or HELOC balance against the home's value." },
    { q: "What LTV do I need to remove PMI?", a: "PMI can typically be canceled once you reach 80% LTV by request, and it automatically terminates at 78% LTV under federal law." },
    { q: "What is the maximum LTV for a HELOC?", a: "Most lenders cap combined LTV (CLTV) at 80-85% for a HELOC, meaning your first mortgage plus the new HELOC can't exceed that threshold." },
    { q: "Does LTV affect my mortgage interest rate?", a: "Yes, lenders often use LTV tiers to price loans — a lower LTV (more equity) typically qualifies for a better interest rate." },
    { q: "How does a cash-out refinance affect LTV?", a: "A cash-out refinance increases your loan balance and therefore your LTV, since you're borrowing against your existing equity." },
    { q: "What LTV is needed to refinance without PMI?", a: "Most lenders require 80% LTV or lower to refinance a conventional loan without adding PMI." },
    { q: "How is home equity related to LTV?", a: "Home equity is the inverse of LTV — if your LTV is 70%, you have 30% equity in the home relative to its current value." },
    { q: "Can LTV be over 100%?", a: "Yes, this is called being 'underwater' or having negative equity, where the loan balance exceeds the home's current market value." },
    { q: "What LTV do lenders require for a HELOC approval?", a: "Most lenders want combined LTV under 80-85% after the new HELOC is added, though some allow higher for well-qualified borrowers." },
    { q: "Should I use appraised value or my own estimate for LTV?", a: "Lenders always use a professional appraisal or automated valuation model, not homeowner estimates, so use recent comparable sales for the most accurate self-check." },
    { q: "How does paying down my mortgage affect LTV?", a: "Each principal payment lowers your loan balance and therefore your LTV, gradually increasing your equity percentage over the loan term." },
    { q: "Why do lenders care about LTV?", a: "A lower LTV means more borrower equity at stake, which reduces the lender's risk of loss if the borrower defaults." },
  ],

  relatedCalculators: ["Down Payment Calculator", "Mortgage Refinance Calculator", "Home Equity Loan Calculator", "Mortgage Calculator"],

  youMayLike: pickYouMayLike("ltv-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "LTV Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};