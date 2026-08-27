import { pickYouMayLike } from "../calculator-pool";

export const coastFireCalculatorContent = {
  meta: {
    seoTitle: "Coast FIRE Calculator - Coast FI Number & Age Free",
    metaDescription: "Free Coast FIRE calculator. Find your Coast FI number, whether you've already reached it, and the age your current savings alone will hit full FIRE.",
    canonicalSlug: "/coast-fire-calculator",
    ogTitle: "Coast FIRE Calculator - Can You Stop Saving?",
    ogDescription: "See if your current savings will grow into full FIRE by retirement.",
    twitterTitle: "Free Coast FIRE Calculator",
    twitterDescription: "Find your Coast FI number and Coast FIRE age instantly.",
  },

  about: {
    text: `Coast FIRE is the point where your current investments, left completely untouched, will grow through compound returns alone into a full FIRE number by your target retirement age — meaning you no longer need to keep contributing, only cover current living expenses.

This calculator works backward from your FI number at retirement (annual expenses ÷ withdrawal rate) using your real (inflation-adjusted) return, to find the "Coast FIRE number" you need today. If your current savings already exceed it, you've reached Coast FIRE. If not, it projects the age you will, based on your ongoing contributions.

Limitations: this model assumes a constant real return and doesn't account for market volatility, changing expenses, or part-time/Barista FIRE income during the coast period — treat it as a planning estimate.`,
  },

  formula: {
    formula: "Coast FIRE Number = FI Number ÷ (1 + Real Return)^Years to Retirement",
    variables: [
      { symbol: "FI Number", meaning: "Annual expenses at retirement ÷ withdrawal rate" },
      { symbol: "Real Return", meaning: "Investment return adjusted for inflation" },
      { symbol: "Coast FIRE Number", meaning: "Amount needed today to compound, untouched, into the FI number by retirement age" },
    ],
    explanation: "The FI number is discounted backward from your retirement age to today's dollars using your real return, giving the exact savings level at which continued compounding alone reaches full FIRE.",
    interpretation: "For example, a 30-year-old targeting retirement at 60 with a $1,500,000 FI number and 4.5% real return needs roughly $391,000 invested today to Coast FIRE.",
  },

  steps: [
    "Enter your current age and current investment savings.",
    "Enter your target traditional retirement age.",
    "Enter your expected annual expenses in retirement.",
    "Enter your current annual contribution (used only if Coast FIRE isn't reached yet).",
    "Enter your expected investment return and inflation rate.",
    "Enter your target withdrawal rate (commonly 3.5-4%).",
    "Click Calculate to see your Coast FIRE number, status, and Coast FIRE age.",
  ],

  examples: [
    { inputs: "Age 30, Savings: $150,000, Retire at 60, Expenses: $50,000, Contribution: $10,000, Return: 7%, Inflation: 3%, Rate: 4%", result: "Coast FIRE Number: ~$326,000, Status: Not Yet, Coast FIRE Age: ~38", explanation: "Continued contributions close the gap in roughly 8 years, after which growth alone finishes the job." },
    { inputs: "Age 40, Savings: $450,000, Retire at 60, Expenses: $60,000, Contribution: $15,000, Return: 6.5%, Inflation: 3%, Rate: 4%", result: "Coast FIRE Number: ~$462,000, Status: Nearly Reached", explanation: "Close to the Coast FIRE threshold — a couple more years of contributions gets there." },
    { inputs: "Age 35, Savings: $600,000, Retire at 55, Expenses: $45,000, Contribution: $5,000, Return: 7%, Inflation: 3%, Rate: 3.5%", result: "Status: Reached — Coast FIRE achieved already", explanation: "Current savings already exceed what's needed to compound into full FIRE by the target age." },
  ],

  practicalUses: [
    "Deciding if you can shift to a lower-paying, lower-stress career",
    "Planning when you could stop maxing out retirement contributions",
    "Comparing target retirement ages and their effect on your Coast FIRE number",
    "Understanding how much of your FIRE journey is already 'locked in' by compounding",
    "Evaluating a sabbatical or career break without derailing retirement",
    "Testing how withdrawal rate and return assumptions shift your Coast FIRE age",
  ],

  expertTips: [
    "Coast FIRE doesn't mean you stop working — it means your investments no longer need new contributions, so your income only has to cover current expenses.",
    "A later target retirement age significantly lowers your Coast FIRE number since compounding has more years to work.",
    "Use a conservative real return (4-5%) since Coast FIRE projections span decades and small return differences compound heavily.",
    "Recheck your Coast FIRE status yearly — market swings can temporarily move your current savings above or below the threshold.",
    "Consider healthcare coverage carefully if coasting into a lower-income job, since employer benefits often factor heavily into the decision.",
    "Coast FIRE and Barista FIRE pair well — coasting covers long-term retirement while part-time income covers near-term living costs.",
  ],

  commonMistakes: [
    { mistake: "Using nominal return instead of real return", fix: "Always discount using inflation-adjusted return — nominal returns understate how much you actually need today." },
    { mistake: "Picking an unrealistic target retirement age", fix: "Use a retirement age you're actually confident about; pushing it too far out artificially lowers your Coast FIRE number." },
    { mistake: "Ignoring current expenses while 'coasting'", fix: "Reaching Coast FIRE only removes the need to save for retirement — you still need income to cover today's living costs." },
    { mistake: "Forgetting healthcare and insurance costs when downshifting", fix: "Factor in the loss of employer benefits if switching to lower-income or part-time work during the coast period." },
    { mistake: "Treating Coast FIRE as a one-time calculation", fix: "Recalculate periodically since market returns, expenses, and retirement timelines shift over the years." },
  ],

  faq: [
    { q: "What is Coast FIRE?", a: "Coast FIRE is the point where your current retirement savings, left untouched, will grow through compound investment returns alone into a full FIRE number by your target retirement age." },
    { q: "How is Coast FIRE different from regular FIRE?", a: "Regular FIRE means you already have enough to retire now; Coast FIRE means you have enough invested that continued growth alone gets you there later, without needing more contributions." },
    { q: "How do I calculate my Coast FIRE number?", a: "Take your FI number at retirement (annual expenses ÷ withdrawal rate) and discount it backward to today using your real, inflation-adjusted investment return over your remaining years to retirement." },
    { q: "Can I stop working entirely once I reach Coast FIRE?", a: "No — Coast FIRE means you can stop saving for retirement, but you still need income to cover current living expenses until your traditional retirement age." },
    { q: "What return rate should I use for Coast FIRE calculations?", a: "A common assumption is 6-7% nominal return, adjusted for 2-3% inflation, giving a real return of roughly 4-5% for long-term projections." },
    { q: "Does Coast FIRE work with a lower-paying job?", a: "Yes — that's often the point of Coast FIRE: since retirement savings are already growing on autopilot, your income only needs to cover today's expenses, allowing for lower-stress work." },
    { q: "How does target retirement age affect my Coast FIRE number?", a: "A later retirement age lowers your Coast FIRE number significantly, since your investments have more years to compound before you need the full FIRE amount." },
    { q: "What withdrawal rate should I use for Coast FIRE?", a: "The same withdrawal rate used for standard FIRE planning — commonly 3.5-4% — since it determines your eventual FI number at retirement." },
    { q: "Is Coast FIRE riskier than full FIRE?", a: "It carries market risk since it relies entirely on future compounding rather than a fully-funded portfolio today, so conservative return assumptions are important." },
    { q: "What is Barista FIRE and how does it relate to Coast FIRE?", a: "Barista FIRE is similar but includes part-time income (often with benefits) to cover current expenses while investments coast toward full FIRE, rather than relying on full-time work." },
    { q: "Can market downturns affect my Coast FIRE status?", a: "Yes — a market drop can temporarily push your current savings below your Coast FIRE number, even if your long-term trajectory is still on track." },
    { q: "How often should I recalculate my Coast FIRE number?", a: "Recalculate at least annually or after major life or market changes, since expenses, returns, and time horizons all shift your Coast FIRE threshold." },
    { q: "Does Coast FIRE account for Social Security or pensions?", a: "No — this calculator focuses purely on investment portfolio growth; additional income sources like Social Security would reduce your actual required FI number." },
    { q: "What if I haven't reached Coast FIRE yet?", a: "The calculator shows the age you're projected to reach it based on your current contribution rate — increasing contributions or investment returns can accelerate that timeline." },
  ],

  relatedCalculators: ["FIRE Calculator", "Retirement Income Calculator", "401(k) Calculator", "Roth IRA Calculator"],

  youMayLike: pickYouMayLike("coast-fire-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Coast FIRE Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};