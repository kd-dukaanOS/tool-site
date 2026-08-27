import { pickYouMayLike } from "../calculator-pool";

export const mrrCalculatorContent = {
  meta: {
    seoTitle: "MRR Calculator - Free Monthly Recurring Revenue Tool",
    metaDescription: "Free MRR calculator for SaaS. Break down new, expansion, churned, and contraction MRR to find net new MRR and projected ARR.",
    canonicalSlug: "/mrr-calculator",
    ogTitle: "MRR Calculator - Monthly Recurring Revenue Breakdown",
    ogDescription: "Calculate your total MRR, net new MRR, and projected ARR instantly.",
    twitterTitle: "Free MRR Calculator",
    twitterDescription: "See your MRR movement and ARR projection in seconds.",
  },

  hero: {
    text: "The MRR Calculator breaks down your Monthly Recurring Revenue movement — new customer MRR, expansion MRR, churned MRR, and contraction MRR — into a net new MRR figure, an updated total MRR, and a projected Annual Recurring Revenue.",
  },

  about: {
    text: `MRR (Monthly Recurring Revenue) is the predictable revenue a subscription business expects each month from active customers, excluding one-time fees or variable usage charges.

MRR movement is typically broken into four components: new MRR (from newly acquired customers), expansion MRR (upgrades or add-ons from existing customers), contraction MRR (downgrades), and churned MRR (cancelled customers). Net new MRR is new plus expansion, minus churned and contraction.

Total MRR at the end of the month equals your starting MRR plus net new MRR. Multiplying MRR by 12 gives a simple projected ARR (Annual Recurring Revenue), a common headline metric for SaaS businesses.

Limitations: this is a single-month snapshot, not a cohort or trend analysis. It doesn't distinguish between annual and monthly billing normalization, discounts, or one-time revenue — for detailed SaaS metrics, pair this with churn rate and cohort retention analysis.`,
  },

  formula: {
    formula: "Net New MRR = New MRR + Expansion MRR − Churned MRR − Contraction MRR; Total MRR = Existing MRR + Net New MRR; ARR = Total MRR × 12",
    variables: [
      { symbol: "Net New MRR", meaning: "The net change in recurring revenue this month across all movement types" },
      { symbol: "Total MRR", meaning: "Your updated Monthly Recurring Revenue after this month's movement" },
      { symbol: "ARR", meaning: "Annualized run-rate of current MRR (Total MRR × 12)" },
    ],
    explanation: "New and expansion MRR add to revenue, while churned and contraction MRR subtract from it; the net result is added to your existing MRR to get the new total, which is then annualized to estimate ARR.",
    interpretation: "For example, $8,000 in new MRR plus $3,000 in expansion, minus $2,000 churned and $1,000 contraction, gives $8,000 net new MRR — added to $50,000 existing MRR for a $58,000 total, or roughly $696,000 ARR.",
  },

  steps: [
    "Enter your existing MRR at the start of the month.",
    "Enter new customer MRR added this month.",
    "Enter expansion MRR from upgrades or add-ons.",
    "Enter churned MRR from cancelled customers.",
    "Enter contraction MRR from downgrades.",
    "Click Calculate to see your net new MRR, total MRR, and projected ARR.",
  ],

  examples: [
    { inputs: "Existing: $50,000, New: $8,000, Expansion: $3,000, Churned: $2,000, Contraction: $1,000", result: "Net New MRR: $8,000, Total MRR: $58,000, ARR: $696,000", explanation: "Healthy growth with new and expansion revenue comfortably outpacing churn and contraction." },
    { inputs: "Existing: $100,000, New: $2,000, Expansion: $1,000, Churned: $6,000, Contraction: $2,000", result: "Net New MRR: -$5,000, Total MRR: $95,000, ARR: $1,140,000", explanation: "Churn exceeding new and expansion revenue signals a retention problem worth investigating." },
    { inputs: "Existing: $20,000, New: $5,000, Expansion: $500, Churned: $500, Contraction: $0", result: "Net New MRR: $5,000, Total MRR: $25,000, ARR: $300,000", explanation: "Early-stage SaaS with strong new customer acquisition and minimal churn." },
  ],

  practicalUses: [
    "Tracking monthly SaaS revenue growth for investor or board updates",
    "Diagnosing whether growth is driven by new customers or expansion revenue",
    "Spotting rising churn or contraction trends early",
    "Projecting ARR for fundraising materials or valuation discussions",
    "Comparing net new MRR month over month to gauge growth momentum",
    "Setting monthly MRR growth targets for sales and customer success teams",
  ],

  expertTips: [
    "Negative net new MRR (churn + contraction exceeding new + expansion) is a critical signal to address immediately, regardless of total MRR size.",
    "Expansion MRR from existing customers is often more capital-efficient to grow than acquiring new customers — track it as its own metric.",
    "ARR = MRR × 12 is a simple run-rate projection, not a contractual guarantee — actual annual revenue depends on retention over the full year.",
    "Track MRR components (new, expansion, churned, contraction) separately every month rather than just the net total, to spot which lever is driving growth.",
    "A high churned MRR relative to total MRR often points to onboarding or product-fit issues worth investigating before pushing harder on acquisition.",
    "Compare net new MRR growth rate month over month, not just the absolute dollar figure, to track whether growth is accelerating or decelerating.",
  ],

  commonMistakes: [
    { mistake: "Including one-time fees or setup charges in MRR", fix: "MRR should only include predictable recurring subscription revenue, not one-time payments or variable usage fees." },
    { mistake: "Ignoring contraction MRR separately from churn", fix: "Downgrades (contraction) and full cancellations (churn) indicate different problems and should be tracked as separate line items." },
    { mistake: "Treating ARR as guaranteed future revenue", fix: "ARR is a run-rate projection based on current MRR — actual revenue depends on retention and growth holding steady over the year." },
    { mistake: "Not normalizing annual contracts into monthly MRR", fix: "Divide annual contract values by 12 before including them in MRR calculations, so all revenue is on a consistent monthly basis." },
    { mistake: "Focusing only on total MRR growth", fix: "Total MRR can grow even while churn worsens if new MRR is high enough — track net new MRR components to see the full picture." },
  ],

  faq: [
    { q: "What is MRR in SaaS?", a: "MRR (Monthly Recurring Revenue) is the predictable, recurring revenue a subscription business generates each month from active customers, excluding one-time fees." },
    { q: "How do you calculate MRR?", a: "Total MRR equals your existing MRR plus net new MRR, where net new MRR is new customer MRR plus expansion MRR, minus churned and contraction MRR." },
    { q: "What is the difference between MRR and ARR?", a: "MRR is monthly recurring revenue, while ARR (Annual Recurring Revenue) is simply MRR multiplied by 12, giving an annualized revenue run-rate." },
    { q: "What is expansion MRR?", a: "Expansion MRR is additional recurring revenue from existing customers upgrading their plan, adding seats, or purchasing add-ons." },
    { q: "What is churned MRR?", a: "Churned MRR is the recurring revenue lost when customers fully cancel their subscription during the month." },
    { q: "What is contraction MRR?", a: "Contraction MRR is the recurring revenue lost when existing customers downgrade to a cheaper plan or remove seats, without fully cancelling." },
    { q: "What is a good MRR growth rate?", a: "Early-stage SaaS companies often target 10-20% month-over-month MRR growth, while more established companies typically see single-digit monthly growth." },
    { q: "How is net new MRR calculated?", a: "Net new MRR equals new customer MRR plus expansion MRR, minus churned MRR and contraction MRR for the period." },
    { q: "Does MRR include annual contracts?", a: "Yes, but annual contract values should be divided by 12 and included as their monthly equivalent to keep MRR figures consistent." },
    { q: "What is negative net new MRR?", a: "Negative net new MRR means churned and contraction MRR exceeded new and expansion MRR for the month, meaning total MRR declined." },
    { q: "How accurate is ARR as a projection?", a: "ARR is a simple run-rate calculation (MRR × 12) and assumes current MRR holds steady for a full year, which rarely happens exactly — treat it as an estimate, not a guarantee." },
    { q: "What's the difference between MRR and total revenue?", a: "MRR only includes predictable recurring subscription revenue; total revenue may also include one-time fees, services, or usage-based charges." },
    { q: "How often should MRR be tracked?", a: "Most SaaS companies track and report MRR monthly, since it's the standard cadence for recurring revenue businesses and investor reporting." },
    { q: "Why is expansion MRR important?", a: "Expansion MRR shows revenue growth from your existing customer base, which is often more cost-efficient than acquiring new customers and signals strong product-market fit." },
  ],

  relatedCalculators: ["ARR Calculator", "Churn Rate Calculator", "Cash Flow Calculator", "Burn Rate Calculator"],

  youMayLike: pickYouMayLike("mrr-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "MRR Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};