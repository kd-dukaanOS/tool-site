export const cacCalculatorContent = {
  meta: {
    seoTitle: "CAC Calculator - Customer Acquisition Cost Calculator (Free)",
    metaDescription: "Calculate Customer Acquisition Cost (CAC) free & instant. Find how much it costs to acquire a customer from marketing and sales spend, by channel or blended.",
    canonicalSlug: "/business/customer-acquisition-cost-calculator",
    ogTitle: "CAC Calculator - Customer Acquisition Cost",
    ogDescription: "Find out exactly how much it costs to acquire a new customer, free and instant.",
    twitterTitle: "Free CAC Calculator - Customer Acquisition Cost",
    twitterDescription: "Calculate customer acquisition cost from your marketing and sales spend in seconds.",
  },

  hero: {
    text: "The Customer Acquisition Cost Calculator shows exactly how much you spend, on average, to win one new customer. Enter your marketing spend, sales spend and number of new customers to get an instant CAC figure you can use to evaluate campaign efficiency, set ad budgets, and benchmark against your Customer Lifetime Value.",
  },

  about: {
    text: `Customer Acquisition Cost (CAC) measures the total sales and marketing spend required to acquire a single new customer over a given period.

It is one of the most important unit-economics metrics for any business that spends money to attract customers, whether through ads, sales teams, content or partnerships.

A low CAC relative to customer value generally signals efficient growth. A high CAC can mean overspending on acquisition, targeting the wrong audience, or a leaky conversion funnel.

Limitations: this calculator uses the inputs you provide for a given period. It does not automatically account for delayed conversions, brand spend that pays off later, or costs outside marketing and sales.`,
  },

  formula: {
    formula: "CAC = (Marketing Cost + Sales Cost) ÷ Number of New Customers",
    variables: [
      { symbol: "Marketing Cost", meaning: "Total spend on marketing for the period" },
      { symbol: "Sales Cost", meaning: "Total spend on the sales team/process for the period" },
      { symbol: "New Customers", meaning: "Number of new customers acquired in that period" },
    ],
    explanation: "CAC divides your total acquisition spend by the number of customers that spend produced, giving an average cost per new customer.",
    interpretation: "For example, if you spent $8,000 on marketing and $2,000 on sales in a month and gained 50 new customers, your CAC is $200 per customer.",
  },

  steps: [
    "Enter total marketing spend for the period.",
    "Enter total sales spend for the period.",
    "Enter the number of new customers acquired.",
    "Optionally enter total leads generated to see cost per lead.",
    "Click Calculate to see your CAC.",
    "Compare CAC against your Customer Lifetime Value for a full picture.",
  ],

  examples: [
    { inputs: "Marketing: $8,000, Sales: $2,000, New Customers: 50", result: "CAC = $200", explanation: "Standard CAC calculation combining marketing and sales spend." },
    { inputs: "Marketing: $15,000, Sales: $0, New Customers: 300", result: "CAC = $50", explanation: "Product-led growth example with no dedicated sales spend." },
    { inputs: "Marketing: $50,000, Sales: $30,000, New Customers: 40", result: "CAC = $2,000", explanation: "High-touch B2B sales example with significant sales cost per deal." },
    { inputs: "Marketing: $3,000, Sales: $500, New Customers: 175", result: "CAC = $20", explanation: "Low-CAC consumer app example driven mostly by organic and referral spend." },
  ],

  practicalUses: [
    "Evaluating whether a marketing channel is profitable",
    "Comparing acquisition efficiency across campaigns",
    "Setting a maximum bid for paid advertising",
    "Justifying marketing or sales budget to stakeholders",
    "Benchmarking CAC against Customer Lifetime Value",
    "Deciding when to scale or pause a channel",
    "Forecasting the budget needed to hit a growth target",
    "Comparing CAC across regions or customer segments",
    "Reporting acquisition efficiency to investors or a board",
    "Pricing referral or affiliate payouts sustainably",
    "Diagnosing why growth is expensive before raising prices or cutting spend",
    "Setting sales rep quotas based on realistic acquisition cost",
  ],

  expertTips: [
    "Always match the time period for spend and new customers — don't mix a monthly spend with a quarterly customer count.",
    "Include all relevant costs: ad spend, tools, salaries, commissions, and agency fees.",
    "Track CAC by channel separately for more actionable insights than a single blended number.",
    "A healthy business generally keeps LTV at least 3x CAC.",
    "Watch CAC trends over time, not just a single snapshot.",
    "Exclude one-time brand campaigns if they distort short-term CAC.",
    "Recalculate CAC whenever pricing, targeting or channels change significantly.",
    "Separate CAC for new-market expansion from your core market — early CAC in a new market is usually much higher.",
    "Pair CAC with payback period (months to recover CAC from gross margin) for a cash-flow view, not just a unit-economics one.",
  ],

  commonMistakes: [
    { mistake: "Only counting ad spend and ignoring sales salaries", fix: "Include all sales and marketing costs tied to acquisition." },
    { mistake: "Mixing time periods for spend and customer counts", fix: "Use the same period for both inputs." },
    { mistake: "Ignoring CAC by channel", fix: "Break down CAC per channel to find your best-performing spend." },
    { mistake: "Comparing CAC without comparing LTV", fix: "Always view CAC alongside Customer Lifetime Value." },
    { mistake: "Using total customers instead of new customers", fix: "CAC should only use newly acquired customers, not the full base." },
    { mistake: "Excluding overhead like marketing software or agency retainers", fix: "Fold recurring tool and agency costs into the marketing spend total for an honest CAC." },
  ],

  faq: [
    { q: "What is Customer Acquisition Cost?", a: "CAC is the average amount a business spends on marketing and sales to acquire one new customer, calculated as total acquisition spend divided by new customers gained." },
    { q: "What is a good CAC?", a: "A good CAC depends on your industry and pricing, but it should be well below your Customer Lifetime Value — a common benchmark is an LTV:CAC ratio of at least 3:1." },
    { q: "Does CAC include sales team salaries?", a: "Yes, a complete CAC calculation should include sales costs like salaries and commissions alongside marketing spend." },
    { q: "How is CAC different from cost per lead?", a: "Cost per lead measures spend per lead generated, while CAC measures spend per customer who actually converts and pays." },
    { q: "Should I calculate CAC by channel?", a: "Yes, calculating CAC separately for each channel (paid ads, organic, referral, sales-led) reveals which channels are most efficient." },
    { q: "How often should I recalculate CAC?", a: "Recalculate CAC whenever spend, pricing or targeting changes meaningfully, and review it at least monthly for active campaigns." },
    { q: "Does this tool store my financial data?", a: "No, all calculations happen locally in your browser and nothing is sent to a server." },
    { q: "What's the difference between CAC and CPA?", a: "CPA (cost per acquisition) is often used interchangeably with CAC, though CPA sometimes refers to a specific conversion event like a signup rather than a paying customer." },
    { q: "How do I lower my CAC?", a: "Improve targeting, raise conversion rates on your funnel, increase referral and organic mix, or renegotiate ad and agency costs — all reduce spend or raise output without changing the other." },
    { q: "What is blended CAC vs paid CAC?", a: "Blended CAC includes all customers (organic, referral, paid) divided by total spend; paid CAC isolates only paid channel spend against customers from paid channels." },
    { q: "Why is my CAC increasing over time?", a: "Rising CAC usually signals market saturation, increased ad competition and auction prices, audience fatigue, or diminishing returns from scaling a channel too fast." },
    { q: "What is CAC payback period?", a: "CAC payback period is the number of months it takes for a customer's gross margin to recover the cost spent acquiring them — commonly targeted under 12 months for SaaS." },
    { q: "Is a high CAC always bad?", a: "Not necessarily — a high CAC can be sustainable if paired with a proportionally higher LTV, such as in enterprise B2B sales with large deal sizes." },
    { q: "How does CAC differ between B2B and B2C businesses?", a: "B2B CAC is typically much higher due to longer sales cycles and sales team involvement, while B2C CAC is usually lower and driven more by ad spend and conversion rate." },
    { q: "Should organic and referral customers count as zero-cost in CAC?", a: "Only if you're calculating channel-specific CAC. For blended CAC, indirect costs like content creation or referral incentives should still be included where they exist." },
  ],

  relatedCalculators: ["Customer Lifetime Value Calculator", "Business Valuation Estimator", "ROI Calculator", "ROAS Calculator", "Profit Margin Calculator", "Break-Even Calculator"],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Customer Acquisition Cost Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};