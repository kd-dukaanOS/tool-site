import { pickYouMayLike } from "../calculator-pool";

export const mortgageRefinanceCalculatorContent = {
  meta: {
    seoTitle: "Mortgage Refinance Calculator - Break-Even & Savings Free",
    metaDescription: "Free mortgage refinance calculator. Compare your current and new loan to see monthly savings, break-even point, and lifetime interest savings.",
    canonicalSlug: "/mortgage-refinance-calculator",
    ogTitle: "Mortgage Refinance Calculator - Savings & Break-Even",
    ogDescription: "Instantly see if refinancing your mortgage is worth it.",
    twitterTitle: "Free Mortgage Refinance Calculator",
    twitterDescription: "Calculate your refinance savings and break-even point instantly.",
  },

  hero: {
    text: "The Mortgage Refinance Calculator compares your current loan against a new refinanced loan to show your monthly savings, break-even point on closing costs, and total interest saved over the life of the loan.",
  },

  about: {
    text: `Refinancing replaces your existing mortgage with a new one, usually to get a lower rate, a different term, or both. But it isn't automatically worth it — closing costs need to be recouped through monthly savings before refinancing actually pays off.

This calculator compares the payment on your remaining current loan against a new loan at a different rate and term, then divides your closing costs by the monthly savings to find your break-even point in months — the point where refinancing starts actually saving you money.

Most experts consider a break-even point of two to three years reasonable if you plan to stay in the home long-term; if you expect to move or refinance again before then, the upfront costs may not be worth it.

Limitations: this tool assumes a straight rate/term refinance with no cash-out and doesn't account for changes in property tax, insurance escrow, or points paid to buy down the rate.`,
  },

  formula: {
    formula: "Break-Even (months) = Closing Costs ÷ Monthly Savings",
    variables: [
      { symbol: "Closing Costs", meaning: "Total upfront cost of refinancing" },
      { symbol: "Monthly Savings", meaning: "Old monthly payment − new monthly payment" },
    ],
    explanation: "Both loans use a standard amortization formula to find monthly payments; the difference between them is the monthly savings, and dividing closing costs by that savings gives the number of months needed to recoup the refinance cost.",
    interpretation: "For example, refinancing a $300,000 balance from 6.5% to 5.5% might save $214/month; with $3,500 in closing costs, the break-even point is about 16 months.",
  },

  steps: [
    "Enter your current loan balance and interest rate.",
    "Enter the number of months remaining on your current loan.",
    "Enter the new interest rate you're offered.",
    "Enter the new loan term in months.",
    "Enter the estimated closing costs for the refinance.",
    "Click Calculate to run the tool.",
    "View your monthly savings, new payment, break-even point, and lifetime interest savings.",
  ],

  examples: [
    { inputs: "Balance: $300,000, Current: 6.5%/300mo, New: 5.5%/360mo, Costs: $4,000", result: "Monthly Savings: ~$214, Break-Even: ~19 months", explanation: "A typical rate-and-term refinance with a modest closing cost." },
    { inputs: "Balance: $180,000, Current: 7.25%/240mo, New: 6.0%/240mo, Costs: $3,000", result: "Monthly Savings: ~$135, Break-Even: ~23 months", explanation: "Keeping the same remaining term while lowering the rate." },
    { inputs: "Balance: $420,000, Current: 6.75%/336mo, New: 6.5%/360mo, Costs: $6,500", result: "Monthly Savings: ~$95, Break-Even: ~68 months", explanation: "A small rate drop with a longer break-even, worth reconsidering if planning to move sooner." },
  ],

  practicalUses: [
    "Deciding whether a refinance offer is actually worth the closing costs",
    "Comparing multiple lender offers side by side using break-even point",
    "Checking if a rate-and-term refinance saves more than a no-closing-cost option long term",
    "Estimating how much total interest a refinance could save over the loan's life",
    "Timing a refinance decision around how long you plan to stay in the home",
    "Evaluating whether resetting to a new 30-year term erases the benefit of a lower rate",
  ],

  expertTips: [
    "If your break-even point is longer than how long you plan to stay in the home, refinancing may not pay off.",
    "Resetting to a new 30-year term can lower your monthly payment but increase total interest paid — ask lenders about a custom term matching your remaining years instead.",
    "A no-closing-cost refinance has a break-even point of zero but usually comes with a higher rate — compare total cost over your expected time in the home.",
    "Shop rates from three to five lenders within a two-week window to minimize the impact on your credit score from multiple inquiries.",
    "A general rule of thumb is that a 0.75% rate drop on a 30-year loan is often needed to break even within three years, though this varies by loan size and costs.",
  ],

  commonMistakes: [
    { mistake: "Only comparing the new monthly payment, not total cost", fix: "Factor in closing costs and compare total interest paid over the full loan term, not just the monthly number." },
    { mistake: "Refinancing into a new 30-year term without realizing it resets the clock", fix: "Consider a custom term matching your remaining years if minimizing total interest is the goal." },
    { mistake: "Refinancing for a small rate drop that doesn't cover closing costs", fix: "Calculate the break-even point before committing — a 0.25% drop often isn't enough to justify thousands in closing costs." },
    { mistake: "Ignoring how long you plan to stay in the home", fix: "If you might move or refinance again before the break-even point, the upfront cost may not pay off." },
    { mistake: "Assuming rolling closing costs into the loan is free", fix: "Rolling in costs increases your loan balance and the interest paid on it for the life of the loan." },
  ],

  faq: [
    { q: "What is the break-even point on a mortgage refinance?", a: "It's the point at which your monthly savings from the new loan equal the total closing costs paid to refinance — after that point, you're saving money." },
    { q: "How do I calculate my refinance break-even point?", a: "Divide your total closing costs by your monthly savings; for example, $3,500 in costs with $214 in monthly savings gives a break-even of about 16 months." },
    { q: "What is a good break-even period for refinancing?", a: "Most experts consider two to three years reasonable if you plan to stay in the home long-term; shorter is better if you might move or refinance again sooner." },
    { q: "When does it make sense to refinance my mortgage?", a: "It generally makes sense when the new rate is meaningfully lower than your current rate, the break-even point fits your timeline in the home, and it aligns with goals like a shorter term or lower payment." },
    { q: "How much does it cost to refinance a mortgage?", a: "Closing costs commonly run 2-5% of the loan amount, covering appraisal, underwriting, title, and origination fees, though this varies by lender and loan size." },
    { q: "Does refinancing hurt my credit score?", a: "A hard credit inquiry can cause a small, temporary dip; applying with multiple lenders within a short window (typically 14-45 days) is usually counted as a single inquiry for scoring purposes." },
    { q: "Is a no-closing-cost refinance worth it?", a: "It can be, especially if you're unsure how long you'll stay in the home, but it usually comes with a higher interest rate — compare total cost over your expected timeline against paying closing costs upfront." },
    { q: "How much do interest rates need to drop to make refinancing worth it?", a: "A common benchmark is around a 0.75% rate drop for 30-year loans to break even within a few years, though smaller drops can still be worthwhile for larger loan balances or 15-year terms." },
    { q: "Can I refinance if I have little home equity?", a: "It's possible depending on loan type, but many conventional refinances require at least some equity, and lower equity may mean higher rates or mortgage insurance requirements." },
    { q: "What documents do I need to refinance my mortgage?", a: "Typically proof of income (pay stubs, tax returns), proof of assets, current mortgage statements, and documentation of your home's value." },
    { q: "Does refinancing reset my loan term?", a: "Yes, unless you specifically choose a custom or shorter term — refinancing into a new 30-year loan restarts amortization even if you'd already paid down several years of your original mortgage." },
    { q: "Should I buy points when refinancing?", a: "Buying points lowers your rate in exchange for a higher upfront cost, which extends your break-even point — it's usually only worth it if you plan to stay in the home well beyond that point." },
    { q: "What's the difference between rate-and-term and cash-out refinancing?", a: "A rate-and-term refinance changes only your rate or term without changing your loan balance, while a cash-out refinance increases your balance to access home equity as cash." },
    { q: "How soon after buying a home can I refinance?", a: "It varies by loan type and lender, but many conventional loans allow refinancing after six months, while some government-backed loans have longer seasoning requirements." },
  ],

  relatedCalculators: ["Mortgage Calculator", "Mortgage Overpayment Calculator", "Loan-to-Value Calculator", "Closing Costs Calculator"],

  youMayLike: pickYouMayLike("mortgage-refinance-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Mortgage Refinance Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};