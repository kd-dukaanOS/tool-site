import { pickYouMayLike } from "../calculator-pool";

export const arrCalculatorContent = {
  meta: {
    seoTitle: "ARR Calculator - Annual Recurring Revenue Free",
    metaDescription: "Free ARR calculator. Find your current Annual Recurring Revenue, net new ARR, growth rate, and a projected ARR for your SaaS business.",
    canonicalSlug: "/arr-calculator",
    ogTitle: "ARR Calculator - Annual Recurring Revenue Estimator",
    ogDescription: "Calculate your SaaS ARR, growth rate, and future projection instantly.",
    twitterTitle: "Free ARR Calculator",
    twitterDescription: "Find your Annual Recurring Revenue and growth rate, free and instant.",
  },
  hero: {
    text: "The ARR Calculator finds your current Annual Recurring Revenue from your MRR, breaks down net new ARR from new business, expansion, contraction, and churn, and projects your ARR forward based on your current growth rate.",
  },
  about: {
    text: `Annual Recurring Revenue (ARR) is the yearly value of your subscription revenue, most commonly calculated as Monthly Recurring Revenue (MRR) multiplied by 12 — the standard top-line growth metric SaaS companies report to investors and boards.

This calculator starts with your current MRR to find current ARR, then factors in new business, expansion (upsells/upgrades), contraction (downgrades), and churned revenue to compute net new ARR — the annualized rate at which your recurring revenue is actually growing or shrinking.

It then projects your ARR forward over a chosen number of months by compounding your current net MRR growth rate, giving a forward-looking estimate rather than just a current snapshot.

Limitations: this tool assumes your net MRR growth rate stays constant going forward — it doesn't model seasonality, one-time revenue, non-recurring services revenue, or planned pricing and packaging changes.`,
  },
  formula: {
    formula: "ARR = MRR × 12; Net New ARR = (New + Expansion − Contraction − Churn) × 12",
    variables: [
      { symbol: "Current MRR", meaning: "Your total Monthly Recurring Revenue right now" },
      { symbol: "Net New MRR", meaning: "New business plus expansion revenue, minus contraction and churned revenue" },
      { symbol: "Monthly Growth Rate", meaning: "Net New MRR divided by Current MRR, used to compound the ARR projection" },
    ],
    explanation: "Current ARR is simply MRR annualized. Net new ARR captures the annualized rate of change, and the projection compounds that monthly growth rate forward to estimate ARR at a future date.",
    interpretation: "For example, $50,000 current MRR with $5,000 net new MRR this month gives a $600,000 current ARR, a 10% monthly growth rate, and a projected ARR of roughly $1.06M after 12 months if that growth rate holds.",
  },
  steps: [
    "Enter your current total MRR.",
    "Enter new business MRR added this month.",
    "Enter expansion MRR from upsells or upgrades.",
    "Enter contraction MRR from downgrades.",
    "Enter churned MRR from cancellations.",
    "Enter the number of months to project forward.",
    "Click Calculate to see your ARR, growth rate, and projection.",
  ],
  examples: [
    { inputs: "MRR: $50,000, New: $6,000, Expansion: $2,000, Contraction: $1,000, Churn: $2,000, 12 months", result: "Current ARR: $600,000, Projected ARR: ~$1.06M", explanation: "A healthy net new MRR of $5,000/month compounds to roughly 76% ARR growth over a year." },
    { inputs: "MRR: $200,000, New: $4,000, Expansion: $1,000, Contraction: $2,000, Churn: $5,000, 12 months", result: "Current ARR: $2.4M, Projected ARR: ~$2.16M", explanation: "Negative net new MRR shrinks the projected ARR despite ongoing new business." },
    { inputs: "MRR: $10,000, New: $3,000, Expansion: $500, Contraction: $200, Churn: $300, 6 months", result: "Current ARR: $120,000, Projected ARR: ~$268,000", explanation: "Early-stage startups often see very high compounding growth rates on a small revenue base." },
  ],
  practicalUses: [
    "Reporting ARR to investors, a board, or leadership team",
    "Tracking whether net new MRR growth is accelerating or decelerating",
    "Projecting where ARR will land by year-end at the current growth rate",
    "Diagnosing whether growth is coming from new business or expansion revenue",
    "Setting realistic ARR growth targets for sales and customer success teams",
    "Comparing your growth rate against SaaS benchmarks for your company stage",
  ],
  expertTips: [
    "ARR is a snapshot metric, not cash actually collected — always reconcile it against your billing and cash flow data.",
    "Net new ARR (not just gross new business) is the number investors care about most, since it accounts for churn and contraction eating into growth.",
    "A common SaaS benchmark is the 'Rule of 40' — growth rate plus profit margin should exceed 40% for a healthy company.",
    "Expansion revenue is often the cheapest source of ARR growth since it doesn't require new customer acquisition costs.",
    "Be cautious projecting ARR forward using a single month's net new MRR — use a trailing 3-month average for a more stable growth rate estimate.",
    "ARR isn't the same as GAAP revenue recognition — investors and auditors treat them differently, so don't substitute one for the other in financial statements.",
  ],
  commonMistakes: [
    { mistake: "Simply multiplying MRR by 12 without adjusting for known churn", fix: "Use net new MRR (including churn and contraction) for a more realistic projection, not just gross MRR times 12." },
    { mistake: "Including one-time or non-recurring revenue in ARR", fix: "ARR should only include recurring subscription revenue — implementation fees, one-time services, and usage spikes don't belong in the metric." },
    { mistake: "Projecting ARR from a single volatile month", fix: "Use an average net new MRR over 3 months to smooth out one-off spikes or dips before projecting forward." },
    { mistake: "Confusing ARR with total contract value (TCV)", fix: "ARR reflects one year of recurring value, while TCV includes the full value of a multi-year contract — don't conflate the two." },
    { mistake: "Ignoring contraction and downgrade revenue", fix: "Only tracking new business and churn misses contraction from downgrades, which can meaningfully offset otherwise strong growth." },
  ],
  faq: [
    { q: "What is ARR in SaaS?", a: "ARR, or Annual Recurring Revenue, is the yearly value of a company's subscription revenue, typically calculated as Monthly Recurring Revenue multiplied by 12." },
    { q: "How do you calculate ARR?", a: "Multiply your current Monthly Recurring Revenue by 12, or sum the annualized value of all active subscription contracts directly if billed annually." },
    { q: "What is the difference between ARR and MRR?", a: "MRR measures recurring revenue on a monthly basis, while ARR is the same recurring revenue expressed as an annual figure, usually MRR multiplied by 12." },
    { q: "What is net new ARR?", a: "Net new ARR is the annualized change in recurring revenue from new business and expansion, minus losses from contraction and churn, over a given period." },
    { q: "What is a good ARR growth rate for a SaaS company?", a: "Benchmarks vary by stage, but many early-stage SaaS companies target 100%+ annual growth, while more mature companies often target 20-40% depending on size and market." },
    { q: "How is ARR different from total revenue?", a: "ARR only includes recurring subscription revenue, while total revenue (GAAP revenue) can also include one-time fees, services revenue, and other non-recurring income." },
    { q: "Why do SaaS companies report ARR instead of total revenue?", a: "ARR gives investors and operators a clearer, forward-looking view of predictable recurring revenue, separate from one-time or lumpy revenue sources." },
    { q: "How does churn affect ARR?", a: "Churned customers reduce MRR, which directly lowers ARR when annualized — high churn can offset even strong new business growth." },
    { q: "What's the difference between ARR and TCV (total contract value)?", a: "ARR reflects one year of recurring revenue value, while TCV includes the entire value of a contract over its full multi-year term." },
    { q: "How do you project future ARR?", a: "Project future ARR by compounding your current net new MRR growth rate forward over the desired number of months, then annualizing the resulting MRR." },
    { q: "What is the Rule of 40 in relation to ARR?", a: "The Rule of 40 states that a healthy SaaS company's ARR growth rate plus profit margin should add up to 40% or more, balancing growth against profitability." },
    { q: "Does ARR include expansion revenue?", a: "Yes, expansion revenue from upsells and upgrades should be included in net new ARR calculations, as it represents real recurring revenue growth from existing customers." },
    { q: "How often should ARR be recalculated?", a: "Most SaaS companies recalculate ARR monthly, alongside MRR, to track growth trends and report accurate figures to investors and leadership." },
    { q: "Is ARR the same as annual revenue in financial statements?", a: "No, ARR is an operating metric based on current run-rate subscription revenue, while GAAP annual revenue reflects revenue actually recognized during the fiscal year, which can differ due to timing and recognition rules." },
  ],
  relatedCalculators: ["MRR Calculator", "Churn Rate Calculator", "Runway Calculator", "Burn Rate Calculator"],
  youMayLike: pickYouMayLike("arr-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "ARR Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};