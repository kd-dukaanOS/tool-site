export const clvCalculatorContent = {
  meta: {
    seoTitle: "Customer Lifetime Value Calculator - Free CLV Calculator",
    metaDescription: "Calculate Customer Lifetime Value (CLV) from average order value, purchase frequency and customer lifespan. Free, instant, browser-based.",
    canonicalSlug: "/business/customer-lifetime-value-calculator",
    ogTitle: "CLV Calculator - Customer Lifetime Value",
    ogDescription: "Estimate how much revenue and profit a typical customer generates over their lifetime with your business.",
    twitterTitle: "Free Customer Lifetime Value Calculator",
    twitterDescription: "Calculate CLV instantly from order value, purchase frequency and customer lifespan.",
  },

  hero: {
    text: "The Customer Lifetime Value Calculator estimates the total revenue and profit a typical customer generates over their entire relationship with your business. Enter average order value, purchase frequency and expected customer lifespan for an instant CLV figure.",
  },

  about: {
    text: `Customer Lifetime Value (CLV, also written LTV) estimates the total value a customer brings to a business over the time they remain a customer, not just their first purchase.

It helps businesses decide how much they can afford to spend acquiring a customer, prioritize retention efforts, and compare customer segments.

This calculator uses the standard historical/predictive formula based on average order value, purchase frequency and customer lifespan, with an optional gross margin adjustment to estimate net (profit-based) CLV.

Limitations: CLV is an estimate based on averages. Actual customer behavior varies, and this tool does not account for discount rates or churn curves used in more advanced models.`,
  },

  formula: {
    formula: "CLV = Average Order Value × Purchase Frequency × Customer Lifespan",
    variables: [
      { symbol: "Average Order Value", meaning: "Average amount spent per purchase" },
      { symbol: "Purchase Frequency", meaning: "Average number of purchases per year" },
      { symbol: "Customer Lifespan", meaning: "Average number of years a customer stays active" },
    ],
    explanation: "Multiplying average order value by purchase frequency gives annual customer value; multiplying by lifespan projects that value across the full relationship. Applying gross margin converts revenue-based CLV into profit-based CLV.",
    interpretation: "For example, a customer who spends $60 per order, orders 4 times a year, and stays a customer for 3 years has a gross CLV of $720.",
  },

  steps: [
    "Enter the average order value.",
    "Enter average purchase frequency per year.",
    "Enter expected customer lifespan in years.",
    "Optionally enter gross margin percentage for a profit-based CLV.",
    "Click Calculate to see gross and net CLV.",
    "Compare CLV against your Customer Acquisition Cost.",
  ],

  examples: [
    {
      inputs: "Order Value: $60, Frequency: 4/year, Lifespan: 3 years",
      result: "Gross CLV = $720",
      explanation: "Standard CLV calculation for a repeat-purchase retail customer.",
    },
    {
      inputs: "Order Value: $200, Frequency: 1/year, Lifespan: 5 years, Margin: 40%",
      result: "Gross CLV = $1,000, Net CLV = $400",
      explanation: "Low-frequency, high-value subscription-style customer with margin applied.",
    },
    {
      inputs: "Order Value: $25, Frequency: 12/year, Lifespan: 2 years",
      result: "Gross CLV = $600",
      explanation: "High-frequency, low-value customer such as a monthly subscription box.",
    },
  ],

  practicalUses: [
    "Setting a maximum acceptable Customer Acquisition Cost",
    "Prioritizing retention programs for high-value segments",
    "Comparing profitability of different customer types",
    "Justifying loyalty or referral program investment",
    "Forecasting long-term revenue from a marketing cohort",
    "Segmenting customers by projected value",
    "Supporting investor or board conversations about unit economics",
  ],

  expertTips: [
    "Use net (margin-adjusted) CLV, not gross, when comparing directly against CAC.",
    "Recalculate CLV separately for different customer segments or acquisition channels.",
    "Lifespan estimates improve with historical churn data — use actual cohort data where available.",
    "A rising CLV over time usually signals improving retention or increasing order value.",
    "Combine CLV with CAC to calculate the LTV:CAC ratio, a key health metric.",
    "Be conservative with lifespan assumptions for new or unproven businesses.",
  ],

  commonMistakes: [
    { mistake: "Using gross CLV to compare directly against CAC", fix: "Apply gross margin to get net CLV before comparing to CAC." },
    { mistake: "Overestimating customer lifespan", fix: "Base lifespan on actual churn data where possible, not optimism." },
    { mistake: "Ignoring purchase frequency changes over time", fix: "Use an average that reflects the full customer relationship, not just early behavior." },
    { mistake: "Applying CLV uniformly across all segments", fix: "Calculate CLV separately for meaningfully different customer groups." },
  ],

  faq: [
    { q: "What is Customer Lifetime Value?", a: "CLV estimates the total revenue or profit a business can expect from a single customer over their entire relationship with the company." },
    { q: "What is a good CLV?", a: "A good CLV is one that comfortably exceeds your Customer Acquisition Cost, commonly by a ratio of 3:1 or higher." },
    { q: "What's the difference between gross and net CLV?", a: "Gross CLV is based on revenue only, while net CLV applies your gross margin percentage to estimate actual profit generated per customer." },
    { q: "How do I estimate customer lifespan?", a: "Use historical churn or retention data if available; otherwise estimate conservatively based on industry norms for your business type." },
    { q: "How does CLV relate to CAC?", a: "Comparing CLV to CAC (the LTV:CAC ratio) shows whether your acquisition spend is sustainable — a low ratio means you're spending too much to acquire customers relative to their value." },
    { q: "Is CLV the same as LTV?", a: "Yes, Customer Lifetime Value (CLV) and Lifetime Value (LTV) refer to the same metric and are used interchangeably." },
    { q: "Does this tool store my business data?", a: "No, all calculations run locally in your browser and nothing is uploaded or saved." },
  ],

  relatedCalculators: [
    "Customer Acquisition Cost Calculator",
    "Business Valuation Estimator",
    "ROI Calculator",
    "Profit Margin Calculator",
    "Gross Margin Calculator",
    "Break-Even Calculator",
  ],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Customer Lifetime Value Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};
