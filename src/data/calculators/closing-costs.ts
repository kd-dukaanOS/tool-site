import { pickYouMayLike } from "../calculator-pool";

export const closingCostsCalculatorContent = {
  meta: {
    seoTitle: "Closing Costs Calculator - Estimate Home Buying Fees 2026",
    metaDescription: "Free closing costs calculator. Estimate lender fees, title insurance, prepaids, transfer taxes, and total cash needed to close on a home.",
    canonicalSlug: "/closing-costs-calculator",
    ogTitle: "Closing Costs Calculator - Estimate Your Fees",
    ogDescription: "See your total closing costs and cash needed to close instantly.",
    twitterTitle: "Free Closing Costs Calculator",
    twitterDescription: "Estimate lender fees, title costs, and prepaids for your home purchase.",
  },

  hero: {
    text: "The Closing Costs Calculator estimates lender fees, discount points, title insurance, transfer taxes, recording fees, and prepaid escrow costs — giving you the total cash needed to close on a home beyond the down payment.",
  },

  about: {
    text: `Closing costs are the fees paid at the end of a home purchase to finalize the loan and transfer ownership, typically ranging from 2-5% of the home price — separate from your down payment.

This calculator breaks closing costs into their main categories: lender fees (origination and discount points), title insurance, government transfer taxes and recording fees, and prepaid items like homeowners insurance and property tax that go into escrow at closing.

Adding your down payment on top of these fees gives the true total cash needed to close — the number buyers are most often surprised by when budgeting for a home purchase.

Actual closing costs vary by state, lender, and loan type — use your Loan Estimate document from your lender for the most accurate figures once you're under contract.`,
  },

  formula: {
    formula: "Total Closing Costs = Lender Fees + Discount Points + Title Fees + Transfer Tax + Recording Fees + Prepaids",
    variables: [
      { symbol: "Lender Fees", meaning: "Loan origination fee, typically 0.5-1% of loan amount" },
      { symbol: "Discount Points", meaning: "Optional upfront fee paid to lower the mortgage rate, 1 point = 1% of loan amount" },
      { symbol: "Prepaids", meaning: "Upfront homeowners insurance and property tax deposited into escrow" },
    ],
    explanation: "Closing costs combine one-time transaction fees (lender, title, government) with prepaid amounts that fund your escrow account for future insurance and tax payments. The prepaid portion isn't a true 'cost' — it's money you'd pay anyway, just collected upfront.",
    interpretation: "For example, on a $350,000 home with a $280,000 loan, total closing costs commonly fall between $7,000-$14,000 (2-4%), plus whatever down payment you're making separately.",
  },

  steps: [
    "Enter the home price and loan amount.",
    "Enter your lender's origination fee rate and any discount points you plan to buy.",
    "Enter title insurance rate and recording fees for your area.",
    "Enter your state or local transfer tax rate.",
    "Enter months of insurance and property tax to prepay, plus their annual amounts.",
    "Enter your down payment amount.",
    "Click Calculate to see total closing costs and cash needed.",
  ],

  examples: [
    { inputs: "Home: $350,000, Loan: $280,000, Origination 0.5%, Title 0.5%", result: "Closing Costs: ~$9,500 (2.7%)", explanation: "A typical closing cost breakdown for a conventional purchase loan." },
    { inputs: "Home: $500,000, Loan: $400,000, 1 Discount Point", result: "Closing Costs: ~$16,000 including $4,000 point", explanation: "Buying discount points to lower your rate increases upfront closing costs." },
    { inputs: "Home: $250,000, Loan: $237,500, Minimal fees", result: "Closing Costs: ~$5,500 (2.2%)", explanation: "Lower home prices generally mean lower dollar closing costs at a similar percentage." },
  ],

  practicalUses: [
    "Budgeting total cash needed for a home purchase beyond the down payment",
    "Comparing closing cost estimates across different lenders",
    "Deciding whether buying discount points to lower your rate is worth the upfront cost",
    "Negotiating seller-paid closing cost credits in a purchase offer",
    "Estimating cash-to-close for a mortgage pre-approval conversation",
    "Understanding the difference between one-time fees and prepaid escrow items",
  ],

  expertTips: [
    "Ask sellers for a closing cost credit (commonly 2-3% of price) as part of your purchase offer, especially in a buyer's market.",
    "Shop lender fees separately from title and government fees — lender-controlled fees vary more between companies.",
    "One discount point typically lowers your rate by about 0.25%, but only makes sense if you'll keep the loan long enough to recoup the upfront cost.",
    "Your official Loan Estimate (required by law within 3 days of application) will have far more accurate numbers than any general estimate.",
    "Prepaid items (insurance and tax escrow) aren't extra cost — it's money you'd owe regardless, just collected at closing instead of monthly.",
    "Some states have significantly higher transfer taxes than others — check your local rate rather than assuming a national average.",
  ],

  commonMistakes: [
    { mistake: "Only budgeting for the down payment", fix: "Add 2-5% of home price on top of your down payment for closing costs — many buyers underestimate this significantly." },
    { mistake: "Confusing prepaids with true closing costs", fix: "Prepaid insurance and tax escrow are money you'd pay anyway — separate them from one-time transaction fees when evaluating total cost." },
    { mistake: "Not asking for a seller credit", fix: "In many markets, sellers are willing to cover 1-3% of closing costs — always ask as part of your offer negotiation." },
    { mistake: "Assuming closing costs are the same everywhere", fix: "Transfer taxes and recording fees vary significantly by state and county — use local estimates, not national averages." },
  ],

  faq: [
    { q: "How much are closing costs on a house?", a: "Closing costs typically range from 2-5% of the home's purchase price, covering lender fees, title insurance, taxes, and prepaid escrow items." },
    { q: "Who pays closing costs, buyer or seller?", a: "Buyers typically pay most closing costs, though sellers can agree to cover a negotiated portion as a credit as part of the purchase agreement." },
    { q: "What is included in closing costs?", a: "Closing costs include lender origination fees, discount points, title insurance, appraisal and inspection fees, transfer taxes, recording fees, and prepaid insurance and property tax." },
    { q: "Can closing costs be rolled into the mortgage?", a: "On most conventional purchase loans, closing costs must be paid in cash at closing, though some refinances allow rolling costs into the new loan balance." },
    { q: "What are discount points?", a: "Discount points are an optional upfront fee paid to the lender to reduce your mortgage interest rate, with 1 point typically costing 1% of the loan amount." },
    { q: "Are closing costs tax deductible?", a: "Some closing costs like mortgage interest and property tax prepayments may be deductible if you itemize, but most fees like title insurance and origination charges are not." },
    { q: "How do I lower my closing costs?", a: "Shop multiple lenders, negotiate a seller credit, ask about lender credits in exchange for a slightly higher rate, and compare title insurance providers." },
    { q: "What are prepaid items at closing?", a: "Prepaids are upfront deposits into your escrow account for future homeowners insurance and property tax payments, not a true additional cost." },
    { q: "Do closing costs differ by state?", a: "Yes, transfer taxes, recording fees, and attorney requirements vary significantly by state and even by county, affecting total closing costs." },
    { q: "What is a Loan Estimate?", a: "A Loan Estimate is a standardized document lenders must provide within 3 days of a mortgage application, detailing all estimated closing costs and loan terms." },
    { q: "Can I negotiate closing costs with my lender?", a: "Yes, lender-controlled fees like origination charges and application fees are often negotiable, especially if you have competing offers from other lenders." },
    { q: "What is title insurance and why do I need it?", a: "Title insurance protects the buyer and lender against defects in the property's title history, such as unknown liens or ownership disputes, and is typically required at closing." },
    { q: "How much are transfer taxes?", a: "Transfer taxes vary by state and locality, ranging from none in some states to over 1-2% of the sale price in others." },
    { q: "Is earnest money part of closing costs?", a: "No, earnest money is a separate good-faith deposit made when the offer is accepted, though it's typically credited toward closing costs or the down payment at closing." },
  ],

  relatedCalculators: ["Down Payment Calculator", "Mortgage Calculator", "LTV Calculator", "Rent vs Buy Calculator"],

  youMayLike: pickYouMayLike("closing-costs-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Closing Costs Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};