export const mortgageAffordabilityContent = {
  meta: {
    seoTitle: "Mortgage Affordability Calculator - How Much House Can I Afford?",
    metaDescription: "Find out how much home you can afford based on your income, debts, and down payment using the standard 28/36 debt-to-income guideline.",
    canonicalSlug: "/finance/mortgage-affordability-calculator",
    ogTitle: "Mortgage Affordability Calculator",
    ogDescription: "See the maximum home price you can afford based on your income and existing debts.",
    twitterTitle: "How Much House Can I Afford?",
    twitterDescription: "Calculate your maximum affordable home price using the 28/36 rule in seconds.",
  },
  hero: {
    text: "Find out how much home you can realistically afford. Enter your income, monthly debts, down payment, and expected interest rate to see your maximum affordable home price.",
  },
  about: {
    text: `This calculator estimates the maximum home price you can afford using the 28/36 rule — a standard guideline most lenders use when evaluating mortgage applications.

The rule has two parts: your total housing payment shouldn't exceed 28% of your gross monthly income (front-end ratio), and your total debt payments — including the new mortgage — shouldn't exceed 36% of your gross monthly income (back-end ratio). Whichever limit is stricter for your situation determines what you can actually afford.

Limitations: this is a general affordability guideline, not a mortgage pre-approval. Actual lending decisions depend on your credit score, employment history, specific lender requirements, and loan program — some lenders allow higher ratios, especially for well-qualified borrowers.`,
  },
  formula: {
    formula: "Max Housing Payment = min(28% of gross income, 36% of gross income − existing debts)",
    variables: [
      { symbol: "Front-End Ratio", meaning: "Housing payment as a percentage of gross monthly income (typically capped at 28%)" },
      { symbol: "Back-End Ratio", meaning: "Housing payment + all other debts as a percentage of gross monthly income (typically capped at 36%)" },
      { symbol: "Max Home Price", meaning: "Maximum affordable loan amount, plus your down payment" },
    ],
    explanation: "Your maximum monthly housing payment is whichever is smaller: 28% of your gross income, or the amount left in your 36% total-debt budget after subtracting your existing monthly debts. That payment amount is then converted into a maximum loan size using standard mortgage math, and your down payment is added on top.",
    interpretation: "For example, someone with high existing debt (car loan, student loans) will often be limited by the 36% back-end rule rather than the 28% front-end rule — meaning paying off debt before house-hunting can meaningfully increase what they can afford.",
  },
  steps: [
    "Enter your annual gross income (before tax).",
    "Enter your total monthly debt payments (car loans, student loans, credit cards, etc.).",
    "Enter your planned down payment.",
    "Enter your expected interest rate and loan term.",
    "Optionally add an estimated monthly property tax + insurance figure for a more accurate result.",
    "Click Calculate to see your maximum affordable home price.",
  ],
  examples: [
    { inputs: "Income: $85,000, Debts: $300/mo, Down Payment: $40,000, Rate: 6.5%, Term: 30yr", result: "Max home price with front-end/back-end breakdown", explanation: "Typical dual-income household example." },
    { inputs: "Income: $60,000, Debts: $800/mo, Down Payment: $20,000, Rate: 6.5%, Term: 30yr", result: "Max home price, likely limited by back-end ratio", explanation: "Higher existing debt load reduces affordability even with steady income." },
    { inputs: "Income: $120,000, Debts: $0/mo, Down Payment: $60,000, Rate: 6.5%, Term: 15yr", result: "Max home price with shorter loan term", explanation: "No debt and a shorter term changes both the ratio used and the monthly payment math." },
  ],
  practicalUses: [
    "Getting a realistic home-shopping budget before touring properties",
    "Understanding whether existing debt is limiting your buying power",
    "Comparing affordability across different loan terms",
    "Deciding whether to pay down debt before applying for a mortgage",
    "Setting expectations before speaking with a lender",
  ],
  expertTips: [
    "If your back-end ratio is the limiting factor, paying down existing debt before house-hunting can increase how much home you can afford.",
    "This tool uses the standard 28/36 guideline — some lenders and loan programs allow higher ratios for well-qualified borrowers.",
    "Adding a realistic property tax and insurance estimate makes your max home price meaningfully more accurate than leaving it blank.",
    "A larger down payment increases your max home price directly, dollar for dollar, on top of your max loan amount.",
    "This is a planning estimate, not a mortgage pre-approval — actual lending decisions involve credit checks and full underwriting.",
  ],
  commonMistakes: [
    { mistake: "Forgetting to include existing debts", fix: "Car loans, student loans, and credit card minimums all count toward your back-end ratio and reduce what you can afford." },
    { mistake: "Ignoring property tax and insurance", fix: "Leaving this blank overstates your affordable home price — even a rough estimate improves accuracy." },
    { mistake: "Assuming the calculator result guarantees loan approval", fix: "This is a guideline estimate, not a pre-approval — actual approval depends on credit, employment history, and lender-specific rules." },
    { mistake: "Not testing different loan terms", fix: "A 15-year term affords less home than a 30-year term at the same monthly payment, due to faster principal paydown." },
  ],
  faq: [
    { q: "What is the 28/36 rule?", a: "It's a standard lending guideline: your housing payment shouldn't exceed 28% of gross monthly income, and your total debts (including housing) shouldn't exceed 36%." },
    { q: "What's the difference between front-end and back-end ratio?", a: "Front-end ratio counts only your housing payment against income. Back-end ratio counts housing plus all other debt payments against income." },
    { q: "Does this guarantee I'll be approved for this loan amount?", a: "No, this is a planning estimate based on a common lending guideline. Actual approval depends on your credit score, employment history, and specific lender requirements." },
    { q: "Why does my existing debt reduce my max home price?", a: "Lenders look at your total monthly debt obligations, not just the mortgage — more existing debt leaves less room in your 36% back-end budget for a new housing payment." },
    { q: "Should I include property tax and insurance?", a: "Yes, if you can estimate it — leaving it blank will overstate your true affordable home price, since it doesn't account for the full monthly cost of owning." },
    { q: "Can lenders allow higher than 28/36?", a: "Yes, some loan programs and lenders allow higher ratios, especially for borrowers with strong credit or larger down payments — this calculator uses the standard baseline guideline." },
    { q: "Does this include a mortgage rate lock-in?", a: "No, this calculator uses the interest rate you enter as an estimate — actual rates depend on market conditions and your credit profile at the time of application." },
    { q: "Does this tool store my financial information?", a: "No, all calculations run locally in your browser and no data is sent to a server." },
  ],
  relatedCalculators: ["Mortgage Calculator", "Debt Payoff Calculator", "Credit Card Payoff Calculator", "Rent vs Buy Calculator", "Home Insurance Calculator", "Property Tax Calculator"],
  youMightAlsoLike: ["Mortgage Calculator", "Debt Payoff Calculator"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Mortgage Affordability Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};