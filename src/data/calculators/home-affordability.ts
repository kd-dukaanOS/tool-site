// src/data/calculators/home-affordability.ts
export const homeAffordabilityCalculatorContent = {
  meta: {
    seoTitle: "Home Affordability Calculator - How Much House Can I Afford",
    metaDescription: "Calculate the maximum home price you can afford based on income, debts and down payment. Free home affordability calculator using the debt-to-income ratio.",
    canonicalSlug: "/home-affordability-calculator",
    ogTitle: "Home Affordability Calculator",
    ogDescription: "Instantly find the maximum home price you can afford.",
    twitterTitle: "Free Home Affordability Calculator",
    twitterDescription: "Find out how much house you can afford, free and accurate.",
  },

  hero: {
    text: "The Home Affordability Calculator estimates the maximum home price you can afford based on your income, existing debts, down payment and target debt-to-income ratio. See your max home price, max loan amount, and estimated monthly payment.",
  },

  about: {
    text: `The Home Affordability Calculator is a free online tool that estimates how much house you can afford by working backward from your income, debts and a target debt-to-income (DTI) ratio.

Lenders typically cap your total monthly debt payments — including the new mortgage — at 36% to 43% of gross monthly income (the "back-end" DTI ratio), though some loan programs allow more. This tool lets you set your own target ratio to see how it changes your affordability.

The calculator solves for the home price where your total estimated monthly payment (principal, interest, property tax and insurance — "PITI") fits within your allowed monthly budget after accounting for existing debts.

Limitations: this tool doesn't include HOA fees, private mortgage insurance (PMI), a specific lender's underwriting rules, or your credit score's effect on the interest rate you'd actually qualify for. Actual lender pre-approval amounts may differ.`,
  },

  formula: {
    formula: "Max Monthly Payment = (Annual Income ÷ 12 × Max DTI%) − Monthly Debts; Max Home Price solved so PITI fits that budget",
    variables: [
      { symbol: "Max DTI", meaning: "Maximum share of gross monthly income allowed for all debt payments, including housing" },
      { symbol: "PITI", meaning: "Principal, Interest, property Tax and Insurance — the full estimated monthly housing cost" },
      { symbol: "Down Payment", meaning: "Cash paid upfront, reducing the loan amount needed" },
    ],
    explanation: "The calculator first finds your maximum allowed monthly housing payment using your DTI ratio and existing debts, then works backward to find the home price whose principal, interest, tax and insurance would exactly use up that budget.",
    interpretation: "For example, a $90,000 income with $400 in monthly debts and a 36% DTI ratio allows about $2,300 for housing — after accounting for tax and insurance, that might support a home price in the $350,000–$400,000 range depending on the down payment and rate.",
  },

  steps: [
    "Enter your annual income.",
    "Enter your existing monthly debt payments.",
    "Enter your planned down payment.",
    "Enter the expected interest rate and loan term.",
    "Enter your local property tax rate and estimated annual insurance.",
    "Set your target maximum debt-to-income ratio (36% is a common default).",
    "Click Calculate to see your maximum affordable home price and estimated monthly payment.",
  ],

  examples: [
    { inputs: "Income: $90,000, Debts: $400, Down Payment: $40,000, Rate: 6.5%, Term: 30yr, Tax: 1.1%, Insurance: $1,500, DTI: 36%", result: "Max Home Price: ~$385,000, Monthly Payment: ~$2,300", explanation: "A typical dual-income household budget using a standard 36% DTI cap." },
    { inputs: "Income: $60,000, Debts: $0, Down Payment: $20,000, Rate: 6.5%, Term: 30yr, Tax: 1.1%, Insurance: $1,200, DTI: 43%", result: "Max Home Price: ~$300,000, Monthly Payment: ~$1,935", explanation: "A higher 43% DTI ratio (allowed under some loan programs) increases affordability with no existing debt." },
    { inputs: "Income: $120,000, Debts: $800 (car + student loan), Down Payment: $60,000, Rate: 6.5%, Term: 30yr, Tax: 1.1%, Insurance: $1,800, DTI: 36%", result: "Max Home Price: ~$430,000, Monthly Payment: ~$2,800", explanation: "Existing debt payments directly reduce the monthly budget available for a mortgage." },
  ],

  practicalUses: [
    "Getting a realistic home price range before house hunting",
    "Understanding how paying off existing debt could increase affordability",
    "Seeing how a larger down payment raises your max home price",
    "Comparing affordability at different interest rate scenarios",
    "Estimating your budget before meeting with a mortgage lender",
    "Checking how local property tax rates affect what you can afford",
    "Deciding whether to wait and save a larger down payment",
    "Comparing affordability across different loan terms (15 vs 30 years)",
    "Understanding the impact of a stricter or looser DTI ratio",
    "Budgeting for a home purchase alongside other financial goals",
  ],

  expertTips: [
    "Paying down a car loan or credit card before applying can meaningfully raise your affordable home price, since it frees up room in your DTI ratio.",
    "This is an estimate, not a pre-approval — get pre-qualified with an actual lender before house hunting seriously.",
    "A larger down payment does double duty: it reduces your loan amount and often helps you avoid PMI, which this calculator doesn't model.",
    "Property tax rates vary enormously by location — check your specific county or city rate rather than using a national average.",
    "Lenders look at both a 'front-end' ratio (housing only) and a 'back-end' ratio (all debt) — this calculator uses the back-end ratio, which is usually the binding constraint.",
    "A slightly higher interest rate can reduce your max home price more than people expect — always check affordability at a realistic, current rate.",
    "Some loan programs (FHA, VA) allow higher DTI ratios than conventional loans — adjust the Max DTI field to match your expected loan type.",
    "Remember that 'what you can afford' by DTI math and what feels comfortable month-to-month can differ — many buyers prefer to target below the max shown here.",
  ],

  commonMistakes: [
    { mistake: "Ignoring existing monthly debts", fix: "Car payments, student loans and credit card minimums all reduce how much monthly budget is left for a mortgage." },
    { mistake: "Forgetting property tax and insurance in the payment estimate", fix: "PITI (principal, interest, tax, insurance) is always higher than principal and interest alone — this calculator includes all four." },
    { mistake: "Using a national average property tax rate", fix: "Property tax rates vary widely by state and county — use your specific local rate for an accurate estimate." },
    { mistake: "Assuming the maximum affordable price is the right price to pay", fix: "Lender maximums are often higher than what feels comfortable — consider your other financial goals, not just the DTI limit." },
    { mistake: "Not accounting for PMI on a low down payment", fix: "Down payments under 20% often require PMI, an added monthly cost not included in this calculator." },
    { mistake: "Treating this as a mortgage pre-approval", fix: "Actual lender approval also depends on credit score, employment history and specific loan program rules." },
  ],

  faq: [
    { q: "How much house can I afford based on my salary?", a: "A common guideline caps total monthly debt (including a new mortgage) at 36% of gross monthly income, though this varies by lender and loan program — this calculator lets you set your own target ratio." },
    { q: "What is a good debt-to-income ratio for a mortgage?", a: "36% or lower is considered strong for conventional loans, while some programs like FHA allow up to 43-50% depending on other factors." },
    { q: "What does PITI mean?", a: "Principal, Interest, Tax, and Insurance — the four components that typically make up a full monthly mortgage payment." },
    { q: "Does this include private mortgage insurance (PMI)?", a: "No, PMI (typically required with a down payment under 20%) isn't included in this estimate and would increase your actual monthly payment." },
    { q: "Does this include HOA fees?", a: "No, homeowners association fees vary by property and aren't included — factor them in separately if your target home has one." },
    { q: "How does my down payment affect affordability?", a: "A larger down payment reduces the loan amount needed, which lowers your monthly principal and interest payment and can increase your max home price." },
    { q: "Why did lowering my monthly debts increase my max home price?", a: "Because your total monthly debt (including housing) is capped by your DTI ratio — less existing debt leaves more room for a mortgage payment." },
    { q: "What property tax rate should I use?", a: "Use your specific city or county's effective property tax rate; the US average is roughly 1% but rates vary widely, from under 0.5% to over 2%." },
    { q: "Is this the same as a mortgage pre-approval?", a: "No, this is a planning estimate — an actual pre-approval also considers your credit score, employment history and full financial profile." },
    { q: "How does the interest rate affect affordability?", a: "A higher rate increases your monthly principal and interest cost for the same loan amount, which lowers the maximum home price that fits your budget." },
    { q: "What loan term should I use?", a: "30 years is most common and maximizes affordability by lowering the monthly payment; a 15-year term affords less home but builds equity and pays off much faster." },
    { q: "Can I use a higher DTI ratio like 43% or 50%?", a: "Some loan programs allow it, but a higher ratio leaves less monthly cushion for other expenses — use it only if you understand the added financial tightness." },
  ],

  relatedCalculators: ["Mortgage Calculator", "Debt-to-Income Ratio Calculator", "Down Payment Calculator", "Rent vs Buy Calculator", "Loan-to-Value Calculator"],

  youMightAlsoLike: ["Simple Interest Calculator", "Water Intake Calculator", "Regex Tester"],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Home Affordability Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};