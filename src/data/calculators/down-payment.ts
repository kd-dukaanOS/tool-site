import { pickYouMayLike } from "../calculator-pool";

export const downPaymentCalculatorContent = {
  meta: {
    seoTitle: "Down Payment Calculator - How Much House Down Payment 2026",
    metaDescription: "Free down payment calculator. Find your required down payment, loan amount, PMI cost, and total cash needed at closing for any home price.",
    canonicalSlug: "/down-payment-calculator",
    ogTitle: "Down Payment Calculator - Plan Your Home Purchase",
    ogDescription: "Calculate down payment, loan amount, PMI, and cash needed at closing instantly.",
    twitterTitle: "Free Down Payment Calculator",
    twitterDescription: "See exactly how much cash you need to buy a home.",
  },

  hero: {
    text: "The Down Payment Calculator shows your required down payment amount, resulting loan amount, whether PMI applies, and the total cash you'll need at closing — based on home price, down payment percentage, and loan terms.",
  },

  about: {
    text: `Your down payment is the single biggest factor in how much cash you need upfront to buy a home, and it directly affects your loan amount, monthly payment, and whether you'll pay private mortgage insurance (PMI).

This calculator takes your home price and desired down payment percentage, then computes the loan amount, monthly principal and interest, property tax, insurance, and PMI if your down payment is below 20%.

It also adds your estimated closing costs to show total cash needed at closing — the real number that matters when budgeting for a home purchase, not just the down payment alone.

Conventional loans typically require PMI below 20% down, while FHA loans have their own mortgage insurance premium (MIP) rules regardless of down payment size — this calculator uses the standard 20% conventional threshold.`,
  },

  formula: {
    formula: "Down Payment = Home Price × Down Payment %; Loan Amount = Home Price − Down Payment; Cash Needed = Down Payment + Closing Costs",
    variables: [
      { symbol: "Down Payment %", meaning: "Percentage of home price paid upfront (commonly 3%, 5%, 10%, or 20%)" },
      { symbol: "LTV Ratio", meaning: "Loan-to-Value = Loan Amount ÷ Home Price × 100" },
      { symbol: "PMI", meaning: "Private Mortgage Insurance, required on conventional loans when down payment is below 20%" },
    ],
    explanation: "The down payment reduces your loan amount dollar-for-dollar, lowering both your monthly principal and interest payment and your loan-to-value ratio. Once your down payment reaches 20%, PMI is no longer required on a conventional loan, which can save $100-$300+ per month depending on loan size.",
    interpretation: "For example, on a $400,000 home, a 5% down payment ($20,000) requires PMI and a $380,000 loan, while a 20% down payment ($80,000) avoids PMI entirely with a $320,000 loan — a $60,000 difference upfront but meaningfully lower monthly costs long-term.",
  },

  steps: [
    "Enter the home price you're considering.",
    "Enter your planned down payment percentage.",
    "Enter the mortgage rate and loan term.",
    "Enter estimated property tax rate and annual insurance.",
    "Enter estimated closing cost percentage (typically 2-5%).",
    "Enter the PMI rate if below 20% down (typically 0.3-1.5%).",
    "Click Calculate to see your down payment, loan amount, and total cash needed.",
  ],

  examples: [
    { inputs: "Home: $400,000, 20% down, 6.5%/30yr", result: "Down Payment: $80,000, No PMI, Loan: $320,000", explanation: "Reaching 20% down avoids PMI entirely, lowering the total monthly payment." },
    { inputs: "Home: $350,000, 5% down, 6.75%/30yr", result: "Down Payment: $17,500, PMI Required, Loan: $332,500", explanation: "A low down payment requires PMI, adding to the monthly cost until 20% equity is reached." },
    { inputs: "Home: $250,000, 10% down, 6%/30yr", result: "Down Payment: $25,000, PMI Required, Loan: $225,000", explanation: "A 10% down payment is common for first-time buyers using conventional loans with PMI." },
  ],

  practicalUses: [
    "Determining how much cash to save before buying a home",
    "Comparing monthly payment impact of different down payment percentages",
    "Deciding whether to wait and save for 20% down to avoid PMI",
    "Budgeting total cash needed including closing costs, not just the down payment",
    "Evaluating first-time buyer programs with lower down payment requirements",
    "Understanding how down payment size affects loan-to-value and approval odds",
  ],

  expertTips: [
    "PMI automatically cancels once your loan balance reaches 78% of the original home value under federal law, even if you didn't request it.",
    "Putting down exactly 20% isn't always optimal — compare the PMI cost against what that extra cash could earn if invested instead.",
    "First-time buyer programs (FHA, conventional 97, USDA, VA) allow down payments as low as 0-3.5%, but often carry their own insurance requirements.",
    "Closing costs are separate from your down payment — budget 2-5% of home price on top of your down payment for cash needed at closing.",
    "A larger down payment reduces your loan-to-value ratio, which can also qualify you for a better mortgage interest rate.",
    "Gift funds from family are commonly allowed toward a down payment, but lenders require documentation (a gift letter) proving it's not a loan.",
  ],

  commonMistakes: [
    { mistake: "Forgetting to budget for closing costs separately", fix: "Add 2-5% of home price on top of your down payment when calculating total cash needed." },
    { mistake: "Assuming 20% down is always required", fix: "Many loan programs allow 3-5% down; 20% only matters for avoiding PMI on conventional loans." },
    { mistake: "Not accounting for PMI in monthly budget", fix: "If putting down less than 20%, include the estimated PMI cost in your monthly payment calculations." },
    { mistake: "Draining all savings for the down payment", fix: "Keep an emergency fund separate from your down payment savings — don't use 100% of your cash reserves." },
  ],

  faq: [
    { q: "How much should a down payment be on a house?", a: "20% is the traditional benchmark to avoid PMI, but many buyers put down 3-10% using conventional or first-time buyer loan programs." },
    { q: "What is the minimum down payment for a conventional loan?", a: "Conventional loans commonly allow as little as 3% down for qualified first-time buyers, though PMI applies below 20%." },
    { q: "Do I need 20% down to avoid PMI?", a: "Yes, on a conventional loan you generally need at least 20% down to avoid private mortgage insurance entirely." },
    { q: "How is PMI calculated?", a: "PMI is typically 0.3% to 1.5% of the loan amount annually, divided into monthly payments, depending on credit score and down payment size." },
    { q: "What down payment is required for an FHA loan?", a: "FHA loans allow as little as 3.5% down for borrowers with a credit score of 580 or higher, but require mortgage insurance premium (MIP) regardless of down payment." },
    { q: "Can I use gift money for a down payment?", a: "Yes, most loan programs allow gifted funds from family for a down payment, but lenders require a signed gift letter and documentation of the funds' source." },
    { q: "How much cash do I need at closing beyond the down payment?", a: "Budget an additional 2-5% of the home price for closing costs on top of your down payment amount." },
    { q: "Does a bigger down payment lower my interest rate?", a: "It can — a lower loan-to-value ratio from a larger down payment often qualifies you for better rate tiers with many lenders." },
    { q: "When does PMI go away?", a: "PMI automatically terminates once your loan balance reaches 78% of the original home value, or you can request cancellation at 80%." },
    { q: "Is it better to put more money down or invest the difference?", a: "It depends on your mortgage rate versus expected investment returns — a lower rate often favors investing extra cash rather than a larger down payment." },
    { q: "What is loan-to-value (LTV) ratio?", a: "LTV is your loan amount divided by the home price, expressed as a percentage — a lower LTV means more equity and less lender risk." },
    { q: "How much down payment do I need for a $300,000 house?", a: "At 20% down, that's $60,000; at 5% down (common for first-time buyers), that's $15,000, plus separate closing costs." },
    { q: "Do down payment assistance programs exist?", a: "Yes, many states and local housing authorities offer grants or low-interest loans to help cover down payment and closing costs for eligible buyers." },
    { q: "Does down payment size affect mortgage approval odds?", a: "A larger down payment lowers lender risk and can improve approval odds, especially for borrowers with a higher debt-to-income ratio." },
  ],

  relatedCalculators: ["Mortgage Calculator", "Rent vs Buy Calculator", "Closing Costs Calculator", "Loan-to-Value Calculator"],

  youMayLike: pickYouMayLike("down-payment-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Down Payment Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};