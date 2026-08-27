import { pickYouMayLike } from "../calculator-pool";

export const burnRateCalculatorContent = {
  meta: {
    seoTitle: "Burn Rate Calculator - Free Startup Cash Burn Tool",
    metaDescription: "Free burn rate calculator. Find your gross burn, net burn, and runway in months based on cash balance, revenue, and expenses.",
    canonicalSlug: "/burn-rate-calculator",
    ogTitle: "Burn Rate Calculator - Gross & Net Burn Rate",
    ogDescription: "Calculate your startup's monthly burn rate and runway instantly.",
    twitterTitle: "Free Burn Rate Calculator",
    twitterDescription: "See your burn rate and runway in seconds.",
  },

  hero: {
    text: "The Burn Rate Calculator finds your gross burn rate (total monthly spend) and net burn rate (spend minus revenue), then estimates your runway — how many months your current cash balance will last at that rate.",
  },

  about: {
    text: `Burn rate is how quickly a startup spends its cash reserves each month. Gross burn rate is your total monthly operating expenses; net burn rate subtracts monthly revenue, showing your actual cash depletion rate.

Runway is calculated by dividing your current cash balance by your net burn rate — it tells you how many months you have before running out of cash at the current pace, assuming no new funding or major changes.

Investors and founders track burn rate closely because it directly determines how much runway remains to hit milestones, raise a next round, or reach profitability.

Limitations: this is a snapshot based on a single month's numbers. It doesn't account for revenue growth, seasonal expense spikes, or planned hiring — for multi-month projections, model revenue and expenses separately for each month.`,
  },

  formula: {
    formula: "Gross Burn Rate = Monthly Operating Expenses; Net Burn Rate = Monthly Expenses − Monthly Revenue; Runway = Cash Balance ÷ Net Burn Rate",
    variables: [
      { symbol: "Gross Burn Rate", meaning: "Total monthly cash spent on operations, before revenue" },
      { symbol: "Net Burn Rate", meaning: "Actual monthly cash decline after subtracting revenue" },
      { symbol: "Runway", meaning: "Months remaining before cash reaches zero at the current net burn rate" },
    ],
    explanation: "Net burn rate reflects the real monthly loss in cash; dividing your current cash balance by this figure gives the number of months of runway remaining before you run out of cash.",
    interpretation: "For example, $40,000 in monthly expenses against $15,000 in revenue gives a $25,000 net burn rate — with $300,000 in the bank, that's 12 months of runway.",
  },

  steps: [
    "Enter your current cash balance in the bank.",
    "Enter your average monthly revenue.",
    "Enter your total monthly operating expenses.",
    "Click Calculate to run the tool.",
    "Review your gross burn, net burn, and runway in months.",
  ],

  examples: [
    { inputs: "Cash: $300,000, Revenue: $15,000, Expenses: $40,000", result: "Gross Burn: $40,000, Net Burn: $25,000, Runway: 12 mo", explanation: "A straightforward early-stage startup with 12 months to reach milestones or raise again." },
    { inputs: "Cash: $1,000,000, Revenue: $80,000, Expenses: $120,000", result: "Gross Burn: $120,000, Net Burn: $40,000, Runway: 25 mo", explanation: "Revenue significantly offsets expenses, extending runway well past a typical 12-18 month target." },
    { inputs: "Cash: $150,000, Revenue: $50,000, Expenses: $35,000", result: "Gross Burn: $35,000, Net Burn: -$15,000, Runway: Cash flow positive", explanation: "Revenue exceeds expenses — the business is cash flow positive and not burning its reserves." },
  ],

  practicalUses: [
    "Tracking how many months of runway remain before the next fundraise",
    "Deciding when to start fundraising based on remaining runway",
    "Testing how a hiring plan or expense cut changes your runway",
    "Comparing gross vs net burn to see how much revenue offsets spend",
    "Reporting burn rate and runway to investors or board members",
    "Setting a target burn multiple relative to revenue growth",
  ],

  expertTips: [
    "Most investors want to see at least 12-18 months of runway after a funding round closes.",
    "A rising net burn rate without proportional revenue growth is a red flag worth investigating early.",
    "Track burn rate monthly, not just at fundraising time — small expense creep compounds quickly over a year.",
    "Gross burn matters for cost discipline; net burn matters for actual survival time — track both, not just one.",
    "If your net burn rate is negative (revenue exceeds expenses), you're cash flow positive and not dependent on runway calculations.",
    "Start fundraising conversations when you have 6+ months of runway left — raises typically take 3-6 months to close.",
  ],

  commonMistakes: [
    { mistake: "Confusing gross burn with net burn", fix: "Gross burn ignores revenue entirely; net burn (expenses minus revenue) is the number that actually determines your runway." },
    { mistake: "Assuming expenses stay flat over the runway period", fix: "Factor in planned hiring, price increases, or seasonal costs — a flat-rate runway estimate is often optimistic." },
    { mistake: "Ignoring one-time expenses in the monthly average", fix: "Use a representative recent month or a 3-month average rather than a month with an unusual one-off cost." },
    { mistake: "Waiting until runway is under 3 months to fundraise", fix: "Start fundraising with at least 6 months of runway left, since raises commonly take several months to close." },
    { mistake: "Not recalculating burn rate after revenue changes", fix: "Recheck burn rate and runway monthly — a revenue dip or spike changes your survival timeline immediately." },
  ],

  faq: [
    { q: "What is burn rate?", a: "Burn rate is the rate at which a company spends its cash reserves each month, typically expressed as gross burn (total expenses) or net burn (expenses minus revenue)." },
    { q: "What is the difference between gross burn and net burn?", a: "Gross burn is your total monthly operating expenses; net burn subtracts monthly revenue from expenses, showing the actual monthly decline in your cash balance." },
    { q: "How do I calculate runway from burn rate?", a: "Divide your current cash balance by your net burn rate — for example, $300,000 in cash at a $25,000 net burn rate gives 12 months of runway." },
    { q: "What is a good burn rate for a startup?", a: "There's no universal figure — what matters is whether your runway (typically 12-18+ months) gives enough time to hit key milestones or reach your next fundraise." },
    { q: "What does it mean to be cash flow positive?", a: "A company is cash flow positive when monthly revenue exceeds monthly expenses, meaning net burn rate is negative and cash reserves are growing rather than depleting." },
    { q: "How much runway should a startup have?", a: "Most investors and advisors recommend keeping at least 12-18 months of runway, with fundraising starting once runway drops to around 6 months." },
    { q: "What's the difference between burn rate and runway?", a: "Burn rate measures how fast you're spending cash each month; runway measures how many months your current cash balance will last at that burn rate." },
    { q: "How can a startup reduce its burn rate?", a: "Common approaches include cutting non-essential expenses, delaying hires, renegotiating vendor contracts, and focusing spend on revenue-generating activities." },
    { q: "Is a high burn rate always bad?", a: "Not necessarily — a high burn rate funding rapid, well-validated growth can be reasonable, but it needs to be matched by sufficient runway and a clear path to revenue or profitability." },
    { q: "How often should I track burn rate?", a: "Most startups track burn rate monthly as part of standard financial reporting, since even small expense or revenue shifts can meaningfully change runway." },
    { q: "What is the burn multiple?", a: "Burn multiple is net burn divided by net new revenue added in the period — a lower burn multiple indicates more capital-efficient growth." },
    { q: "Does burn rate include one-time expenses?", a: "It can, but it's often more useful to separate recurring operating expenses from one-time costs to get a cleaner ongoing burn rate figure." },
    { q: "How does revenue growth affect runway?", a: "As revenue grows and narrows the gap with expenses, net burn rate falls, which extends runway even if total spending stays the same." },
    { q: "What happens when a startup runs out of runway?", a: "Without new funding or reaching profitability before runway hits zero, a company typically must cut costs sharply, raise capital urgently, or cease operations." },
  ],

  relatedCalculators: ["Runway Calculator", "Cash Flow Calculator", "MRR Calculator", "Break-Even Calculator"],

  youMayLike: pickYouMayLike("burn-rate-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Burn Rate Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};