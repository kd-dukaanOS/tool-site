export const cacCalculatorContent = {
  meta: {
    seoTitle: "Customer Acquisition Cost Calculator - Free CAC Calculator",
    metaDescription: "Calculate your Customer Acquisition Cost (CAC) instantly. Free online tool to measure marketing and sales spend against new customers gained.",
    canonicalSlug: "/business/customer-acquisition-cost-calculator",
    ogTitle: "CAC Calculator - Customer Acquisition Cost",
    ogDescription: "Find out exactly how much it costs to acquire a new customer, free and instant.",
    twitterTitle: "Free CAC Calculator",
    twitterDescription: "Calculate customer acquisition cost from your marketing and sales spend in seconds.",
  },

  hero: {
    text: "The Customer Acquisition Cost Calculator shows exactly how much you spend, on average, to win one new customer. Enter your marketing spend, sales spend and number of new customers to get an instant CAC figure you can use to evaluate campaign efficiency and plan budgets.",
  },

  about: {
    text: `Customer Acquisition Cost (CAC) measures the total sales and marketing spend required to acquire a single new customer over a given period.

It is one of the most important unit-economics metrics for any business that spends money to attract customers, whether through ads, sales teams, content or partnerships.

A low CAC relative to customer value generally signals efficient growth. A high CAC can mean overspending on acquisition or targeting the wrong audience.

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
    {
      inputs: "Marketing: $8,000, Sales: $2,000, New Customers: 50",
      result: "CAC = $200",
      explanation: "Standard CAC calculation combining marketing and sales spend.",
    },
    {
      inputs: "Marketing: $15,000, Sales: $0, New Customers: 300",
      result: "CAC = $50",
      explanation: "Product-led growth example with no dedicated sales spend.",
    },
    {
      inputs: "Marketing: $50,000, Sales: $30,000, New Customers: 40",
      result: "CAC = $2,000",
      explanation: "High-touch B2B sales example with significant sales cost per deal.",
    },
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
  ],

  expertTips: [
    "Always match the time period for spend and new customers — don't mix a monthly spend with a quarterly customer count.",
    "Include all relevant costs: ad spend, tools, salaries, commissions, and agency fees.",
    "Track CAC by channel separately for more actionable insights than a single blended number.",
    "A healthy business generally keeps LTV at least 3x CAC.",
    "Watch CAC trends over time, not just a single snapshot.",
    "Exclude one-time brand campaigns if they distort short-term CAC.",
    "Recalculate CAC whenever pricing, targeting or channels change significantly.",
  ],

  commonMistakes: [
    { mistake: "Only counting ad spend and ignoring sales salaries", fix: "Include all sales and marketing costs tied to acquisition." },
    { mistake: "Mixing time periods for spend and customer counts", fix: "Use the same period for both inputs." },
    { mistake: "Ignoring CAC by channel", fix: "Break down CAC per channel to find your best-performing spend." },
    { mistake: "Comparing CAC without comparing LTV", fix: "Always view CAC alongside Customer Lifetime Value." },
    { mistake: "Using total customers instead of new customers", fix: "CAC should only use newly acquired customers, not the full base." },
  ],

  faq: [
    { q: "What is Customer Acquisition Cost?", a: "CAC is the average amount a business spends on marketing and sales to acquire one new customer, calculated as total acquisition spend divided by new customers gained." },
    { q: "What is a good CAC?", a: "A good CAC depends on your industry and pricing, but it should be well below your Customer Lifetime Value — a common benchmark is an LTV:CAC ratio of at least 3:1." },
    { q: "Does CAC include sales team salaries?", a: "Yes, a complete CAC calculation should include sales costs like salaries and commissions alongside marketing spend." },
    { q: "How is CAC different from cost per lead?", a: "Cost per lead measures spend per lead generated, while CAC measures spend per customer who actually converts and pays." },
    { q: "Should I calculate CAC by channel?", a: "Yes, calculating CAC separately for each channel (paid ads, organic, referral, sales-led) reveals which channels are most efficient." },
    { q: "How often should I recalculate CAC?", a: "Recalculate CAC whenever spend, pricing or targeting changes meaningfully, and review it at least monthly for active campaigns." },
    { q: "Does this tool store my financial data?", a: "No, all calculations happen locally in your browser and nothing is sent to a server." },
  ],

  relatedCalculators: [
    "Customer Lifetime Value Calculator",
    "Business Valuation Estimator",
    "ROI Calculator",
    "ROAS Calculator",
    "Profit Margin Calculator",
    "Break-Even Calculator",
  ],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Customer Acquisition Cost Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};
