export const debtToIncomeCalculatorContent = {
  meta: {
    seoTitle: "Debt-to-Income Ratio Calculator - Free DTI Calculator",
    metaDescription: "Calculate your debt-to-income ratio instantly. See your front-end and back-end DTI and whether it meets mortgage lending guidelines.",
    canonicalSlug: "/debt-to-income-calculator",
    ogTitle: "Debt-to-Income Ratio Calculator",
    ogDescription: "Find your DTI ratio in seconds and see how it compares to lender guidelines.",
    twitterTitle: "Free DTI Calculator",
    twitterDescription: "Calculate your front-end and back-end debt-to-income ratio instantly.",
  },

  hero: {
    text: "The Debt-to-Income (DTI) Ratio Calculator shows what percentage of your gross monthly income goes toward debt payments. Lenders use this number to decide mortgage, auto loan, and credit approval — this tool gives you both your front-end and back-end ratios instantly.",
  },

  about: {
    text: `Debt-to-income ratio (DTI) compares your total monthly debt payments to your gross monthly income. It's one of the most important numbers lenders check when you apply for a mortgage, auto loan, or major line of credit.

There are two versions: front-end ratio (housing costs only, divided by income) and back-end ratio (all monthly debts — housing, credit cards, car loans, student loans — divided by income). Most conventional mortgage lenders want a back-end ratio at or below 36%, though some programs allow up to 43-50%.

This calculator takes your gross monthly income, expected or current housing payment, and other monthly debt obligations, and instantly returns both ratios along with a plain-language rating of where you stand.

Limitations: this is a general guideline based on common lending standards. Actual approval depends on your specific lender, loan program, credit score, and other factors.`,
  },

  formula: {
    formula: "DTI = (Total Monthly Debt Payments ÷ Gross Monthly Income) × 100",
    variables: [
      { symbol: "Front-End DTI", meaning: "Housing payment only ÷ gross monthly income" },
      { symbol: "Back-End DTI", meaning: "All monthly debts ÷ gross monthly income" },
    ],
    explanation: "Both ratios use gross (pre-tax) monthly income as the denominator. Front-end only counts housing costs; back-end adds every other recurring debt payment.",
    interpretation: "For example, with $6,000 gross monthly income, a $1,500 housing payment, and $500 in other debts, front-end DTI is 25% and back-end DTI is 33% — generally within 'Good' lender guidelines.",
  },

  steps: [
    "Enter your gross monthly income (before tax).",
    "Enter your monthly housing payment (rent or mortgage).",
    "Enter your other monthly debt payments (cards, auto, student loans, etc.).",
    "Click Calculate to run the tool.",
    "View your front-end and back-end DTI ratios.",
    "Check your rating against common lender guidelines.",
    "Copy or share your results using the copy button.",
  ],

  examples: [
    { inputs: "Income: $6,000/mo, Housing: $1,500, Other Debts: $500", result: "Front-end: 25%, Back-end: 33% (Good)", explanation: "Well within typical conventional mortgage guidelines." },
    { inputs: "Income: $4,500/mo, Housing: $1,800, Other Debts: $700", result: "Front-end: 40%, Back-end: 55.6% (High)", explanation: "Exceeds most lenders' maximum threshold." },
    { inputs: "Income: $8,000/mo, Housing: $1,200, Other Debts: $200", result: "Front-end: 15%, Back-end: 17.5% (Excellent)", explanation: "Very low debt load relative to income." },
  ],

  practicalUses: [
    "Checking mortgage pre-approval eligibility before applying",
    "Deciding how much house payment you can safely take on",
    "Seeing how paying off a car loan would improve your DTI",
    "Comparing your DTI against different lender program limits",
    "Budgeting before applying for a personal loan or credit line",
    "Understanding why a loan application was denied",
    "Planning debt payoff priorities to qualify for refinancing",
  ],

  expertTips: [
    "Lenders use gross income (before tax), not take-home pay, for DTI calculations.",
    "Paying off a small recurring debt (like a car loan) often helps DTI more than paying down a large balance a little.",
    "Back-end DTI above 43% disqualifies you from many conventional loan programs, though FHA and other programs allow higher.",
    "Minimum credit card payments count toward DTI, even if you pay the balance in full each month.",
    "DTI doesn't include expenses like groceries, utilities, or insurance unless they're a fixed loan payment.",
    "Improving your DTI before applying for a mortgage is often more effective than trying to boost your credit score alone.",
    "A lower DTI can qualify you for better interest rates, not just approval.",
  ],

  commonMistakes: [
    { mistake: "Using take-home (net) pay instead of gross income", fix: "Always use gross monthly income before taxes and deductions." },
    { mistake: "Forgetting to include minimum credit card payments", fix: "Include the minimum required payment on every revolving debt, even if you pay more." },
    { mistake: "Including non-debt expenses like utilities or groceries", fix: "Only include actual debt obligations — loans, credit cards, and housing." },
    { mistake: "Confusing front-end and back-end ratios", fix: "Front-end is housing only; back-end is all debts combined." },
    { mistake: "Not updating DTI after paying off a loan", fix: "Recalculate DTI whenever a debt is paid off or a new one is added." },
  ],

  faq: [
    { q: "What is a good debt-to-income ratio?", a: "A back-end DTI of 36% or below is generally considered good by most lenders, with 20% or below considered excellent." },
    { q: "What is the maximum DTI for a mortgage?", a: "Conventional loans typically cap back-end DTI at 43-45%, while some FHA and other government-backed programs allow up to 50% in certain cases." },
    { q: "What's the difference between front-end and back-end DTI?", a: "Front-end DTI only counts your housing payment against income, while back-end DTI counts all monthly debt payments, including housing." },
    { q: "Does DTI include rent if I don't own a home yet?", a: "Yes, if you're renting, your rent payment counts as your housing cost in the front-end ratio calculation." },
    { q: "Does DTI affect my credit score?", a: "No, DTI is not part of your credit score calculation, but lenders check it separately alongside your credit score during loan underwriting." },
    { q: "How can I lower my DTI quickly?", a: "Paying off or paying down a small recurring debt, or increasing your income, are the two fastest ways to lower your DTI ratio." },
    { q: "Does DTI use gross or net income?", a: "DTI calculations use gross (pre-tax) monthly income, not your take-home net pay." },
    { q: "Do utility bills count toward DTI?", a: "No, DTI only includes debt obligations like loan and credit payments — not utilities, insurance, or groceries." },
    { q: "Can I get a mortgage with a high DTI?", a: "It's harder but possible, especially with government-backed loan programs, a larger down payment, or compensating factors like strong credit or cash reserves." },
    { q: "How is DTI different from credit utilization?", a: "DTI compares debt payments to income, while credit utilization compares your credit card balances to your credit limits — they're separate metrics lenders check." },
  ],

  relatedCalculators: [
    "Mortgage Affordability Calculator",
    "Loan Amortization Calculator",
    "Debt Payoff Calculator",
    "Credit Card Payoff Calculator",
    "Mortgage Calculator",
  ],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Debt-to-Income Ratio Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};