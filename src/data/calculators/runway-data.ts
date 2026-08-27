import { pickYouMayLike } from "../calculator-pool";

export const runwayCalculatorContent = {
  meta: {
    seoTitle: "Runway Calculator - Free Startup Cash Runway Tool",
    metaDescription: "Free runway calculator. Project your startup's cash runway with growth-adjusted forecasting based on revenue and expense trends.",
    canonicalSlug: "/runway-calculator",
    ogTitle: "Runway Calculator - Growth-Adjusted Cash Runway",
    ogDescription: "Project how long your cash will last as revenue and expenses grow.",
    twitterTitle: "Free Runway Calculator",
    twitterDescription: "See your dynamic and static runway estimates instantly.",
  },

  hero: {
    text: "The Runway Calculator projects how many months your cash balance will last, using both a static estimate at your current burn rate and a dynamic month-by-month simulation that accounts for expected revenue and expense growth.",
  },

  about: {
    text: `Runway is the number of months a company can operate before running out of cash at its current spending rate. It's one of the most closely watched numbers by founders and investors alike.

A static runway calculation simply divides current cash by current net burn rate — useful as a quick snapshot, but it assumes revenue and expenses never change.

This calculator also runs a dynamic simulation, growing (or shrinking) revenue and expenses month by month based on the growth rates you enter, giving a more realistic picture of how runway extends if revenue is scaling, or shortens if costs are rising faster than income.

Limitations: growth rates are assumed constant every month, which real businesses rarely follow exactly. Use the dynamic estimate as a directional trend indicator, and revisit it monthly as actual numbers come in.`,
  },

  formula: {
    formula: "Static Runway = Cash Balance ÷ Net Burn Rate; Dynamic Runway = first month where simulated balance ≤ 0, applying monthly growth to revenue and expenses",
    variables: [
      { symbol: "Static Runway", meaning: "Months of cash left assuming today's burn rate never changes" },
      { symbol: "Dynamic Runway", meaning: "Months of cash left simulating monthly revenue and expense growth" },
      { symbol: "Net Burn", meaning: "Monthly expenses minus monthly revenue" },
    ],
    explanation: "Each simulated month, revenue and expenses grow by their respective monthly rates, and the difference is subtracted from the cash balance; the first month the balance reaches zero or below is the dynamic runway.",
    interpretation: "For example, if revenue grows 5% a month while expenses grow only 2%, dynamic runway will typically be longer than static runway since the gap between revenue and expenses is narrowing over time.",
  },

  steps: [
    "Enter your current cash balance.",
    "Enter your current monthly revenue and monthly expenses.",
    "Enter your expected monthly revenue growth rate (%).",
    "Enter your expected monthly expense growth rate (%).",
    "Click Calculate to run the projection.",
    "Compare your static runway (current rate) against your dynamic runway (growth-adjusted).",
  ],

  examples: [
    { inputs: "Cash: $300,000, Revenue: $15,000, Expenses: $40,000, Rev Growth: 5%, Exp Growth: 2%", result: "Static Runway: 12 mo, Dynamic Runway: ~15 mo", explanation: "Revenue growing faster than expenses meaningfully extends runway beyond the static estimate." },
    { inputs: "Cash: $500,000, Revenue: $30,000, Expenses: $60,000, Rev Growth: 1%, Exp Growth: 4%", result: "Static Runway: 16.7 mo, Dynamic Runway: ~13 mo", explanation: "Expenses growing faster than revenue shortens runway compared to the static snapshot." },
    { inputs: "Cash: $150,000, Revenue: $50,000, Expenses: $35,000, Rev Growth: 0%, Exp Growth: 0%", result: "Static Runway: Cash flow positive, Dynamic Runway: 120+ mo", explanation: "Revenue already exceeds expenses, so cash keeps growing rather than depleting." },
  ],

  practicalUses: [
    "Forecasting how runway changes if revenue growth accelerates or slows",
    "Testing the impact of planned hiring on runway before committing",
    "Deciding when to start the next fundraising round based on projected runway",
    "Comparing best-case and worst-case growth scenarios for board reporting",
    "Checking whether current growth trends are enough to reach profitability before cash runs out",
    "Stress-testing runway against rising costs (e.g., inflation, new hires, higher rent)",
  ],

  expertTips: [
    "Run the dynamic projection with conservative growth assumptions — overly optimistic revenue growth inflates runway estimates.",
    "If dynamic runway is much longer than static runway, double-check your growth rate assumptions are realistic and sustained.",
    "Revisit this monthly with actual growth rates rather than projected ones, to catch drift early.",
    "A shrinking gap between dynamic and static runway over time can signal decelerating growth worth investigating.",
    "Use the 6-month projected balance as a checkpoint to compare against actuals and validate your growth assumptions.",
    "Pair this with a burn rate calculator to separate 'how fast am I spending' from 'how long will it last as trends continue'.",
  ],

  commonMistakes: [
    { mistake: "Using unrealistic, compounding growth rates", fix: "Small monthly growth rates compound quickly over a year — sanity check the implied annual growth rate before trusting the dynamic runway." },
    { mistake: "Ignoring expense growth entirely", fix: "Headcount and infrastructure costs often grow alongside revenue — model expense growth, not just revenue growth." },
    { mistake: "Treating dynamic runway as guaranteed", fix: "It's a projection based on assumed constant growth rates, not a certainty — actual results will vary." },
    { mistake: "Only looking at static runway", fix: "Static runway ignores trends entirely — if you're growing or shrinking fast, the dynamic estimate is far more useful." },
    { mistake: "Not updating growth assumptions regularly", fix: "Recalculate with your latest actual growth rates each month rather than relying on stale projections." },
  ],

  faq: [
    { q: "What is runway in a startup?", a: "Runway is the number of months a startup can continue operating before running out of cash, based on its current cash balance and burn rate." },
    { q: "How do you calculate runway?", a: "Divide your current cash balance by your net burn rate (monthly expenses minus monthly revenue) for a static estimate; a dynamic estimate additionally factors in expected revenue and expense growth." },
    { q: "What is the difference between static and dynamic runway?", a: "Static runway assumes today's burn rate stays constant every month; dynamic runway simulates monthly revenue and expense growth to give a more realistic projection." },
    { q: "How much runway should a startup have?", a: "Most advisors recommend maintaining at least 12-18 months of runway, with fundraising typically starting around the 6-month mark." },
    { q: "What happens if my dynamic runway is longer than my static runway?", a: "This usually means revenue is growing faster than expenses, narrowing your burn rate over time and extending how long your cash will last." },
    { q: "Can revenue growth extend my runway indefinitely?", a: "Yes — if revenue growth consistently outpaces expense growth, net burn eventually turns negative and the company becomes cash flow positive." },
    { q: "How accurate are runway projections?", a: "They're only as accurate as the growth rate assumptions used — real businesses rarely grow at a perfectly constant monthly rate, so treat projections as directional." },
    { q: "What is a good monthly revenue growth rate for startups?", a: "Early-stage startups often target 10-20% monthly growth, while more mature companies typically see single-digit monthly growth rates." },
    { q: "Should I include planned hires in my runway calculation?", a: "Yes — factor planned headcount growth into your monthly expense growth rate, since salaries are usually the largest driver of rising costs." },
    { q: "How often should I recalculate my runway?", a: "Recalculate monthly using actual revenue and expense figures rather than relying on outdated growth assumptions." },
    { q: "What's the difference between runway and burn rate?", a: "Burn rate measures how fast you're spending cash each month; runway measures how many months that cash will last at the current or projected burn rate." },
    { q: "Does runway account for future fundraising?", a: "No — runway calculations are based only on your current cash balance and don't assume any future funding rounds." },
    { q: "What should I do when runway drops below 6 months?", a: "Most founders begin fundraising, cut non-essential expenses, or accelerate revenue-generating initiatives once runway falls to around 6 months." },
    { q: "Is negative net burn the same as infinite runway?", a: "Effectively yes — if revenue exceeds expenses, net burn is negative, meaning cash reserves grow rather than deplete, so runway isn't a limiting factor." },
  ],

  relatedCalculators: ["Burn Rate Calculator", "Cash Flow Calculator", "MRR Calculator", "ARR Calculator"],

  youMayLike: pickYouMayLike("runway-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Runway Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};