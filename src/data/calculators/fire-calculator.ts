import { pickYouMayLike } from "../calculator-pool";

export const fireCalculatorContent = {
  meta: {
    seoTitle: "FIRE Calculator - Financial Independence Retire Early Free",
    metaDescription: "Free FIRE calculator. Find your FI number, years to financial independence, and FIRE age based on savings, expenses, and the 4% rule.",
    canonicalSlug: "/fire-calculator",
    ogTitle: "FIRE Calculator - When Can You Retire Early?",
    ogDescription: "Calculate your financial independence number and years to FIRE.",
    twitterTitle: "Free FIRE Calculator",
    twitterDescription: "See your FI number and FIRE age instantly.",
  },

  hero: {
    text: "The FIRE Calculator estimates your Financial Independence number using the safe withdrawal rate rule, then projects how many years of saving and investing it will take to reach it based on your current savings, contributions, and real (inflation-adjusted) return.",
  },

  about: {
    text: `FIRE (Financial Independence, Retire Early) means saving and investing enough that your portfolio can safely cover your annual expenses indefinitely, without relying on a paycheck.

Your FI number is calculated as annual expenses divided by your withdrawal rate — commonly the 4% rule (25x expenses), derived from the Trinity Study. A lower withdrawal rate (3-3.5%) is used by many for extra safety in early retirement given a longer time horizon.

This calculator projects your portfolio month by month using your real return (investment return adjusted for inflation), current savings, and annual contribution, to find the year your balance crosses your FI number.

Limitations: this model assumes constant real contributions and returns; it doesn't account for market sequence-of-returns risk, changing expenses, part-time income (Barista FIRE), or taxes on withdrawals — use it as a directional estimate, not a guarantee.`,
  },

  formula: {
    formula: "FI Number = Annual Expenses ÷ Withdrawal Rate; Real Return = (1 + Nominal Return) ÷ (1 + Inflation) − 1",
    variables: [
      { symbol: "FI Number", meaning: "Portfolio size needed to sustain expenses at your chosen withdrawal rate" },
      { symbol: "Real Return", meaning: "Investment return adjusted for inflation, used for realistic long-term projections" },
      { symbol: "Years to FI", meaning: "Time until your projected balance reaches the FI number" },
    ],
    explanation: "Each month your balance compounds at your real monthly return and grows by your monthly contribution; the calculator finds the first month your balance meets or exceeds your FI number.",
    interpretation: "For example, with $60,000 annual expenses and a 4% withdrawal rate, your FI number is $1,500,000 — reaching it faster depends heavily on your savings rate and real investment return.",
  },

  steps: [
    "Enter your current age and current investment savings.",
    "Enter your annual income and annual expenses.",
    "Enter how much you contribute to investments annually.",
    "Enter your expected annual investment return and inflation rate.",
    "Enter your target withdrawal rate (commonly 3.5-4%).",
    "Click Calculate to run the tool.",
    "Review your FI number, years to FI, FIRE age, and savings rate.",
  ],

  examples: [
    { inputs: "Age 30, Savings: $50,000, Income: $90,000, Expenses: $45,000, Contribution: $25,000, Return: 7%, Inflation: 3%, Rate: 4%", result: "FI Number: $1,125,000, ~19 years to FI, FIRE at ~49", explanation: "A high savings rate (~28%) significantly shortens the path to FI." },
    { inputs: "Age 35, Savings: $150,000, Income: $120,000, Expenses: $60,000, Contribution: $40,000, Return: 6%, Inflation: 3%, Rate: 3.5%", result: "FI Number: $1,714,286, ~17 years to FI, FIRE at ~52", explanation: "A lower withdrawal rate raises the FI number but adds safety margin." },
    { inputs: "Age 25, Savings: $5,000, Income: $60,000, Expenses: $40,000, Contribution: $12,000, Return: 7%, Inflation: 3%, Rate: 4%", result: "FI Number: $1,000,000, ~28 years to FI, FIRE at ~53", explanation: "Lower income and contribution extend the timeline noticeably." },
  ],

  practicalUses: [
    "Setting a concrete savings target for early retirement",
    "Testing how increasing your savings rate shortens years to FI",
    "Comparing a 4% vs 3.5% withdrawal rate assumption",
    "Deciding between more aggressive investing vs job income growth",
    "Planning a Coast FIRE or Barista FIRE transition point",
    "Stress-testing your FIRE date against different return assumptions",
  ],

  expertTips: [
    "Savings rate matters more than income — a high earner with high expenses reaches FI slower than a moderate earner who saves 50%+.",
    "Use a conservative real return (4-5%) rather than raw nominal market averages, since inflation erodes purchasing power over decades.",
    "A 3.5% withdrawal rate is increasingly preferred over the classic 4% rule for retirements longer than 30 years.",
    "Recalculate periodically — expenses, income, and market returns change, and your FI number should be revisited annually.",
    "Consider a healthcare and tax buffer beyond the raw FI number if retiring before pension/Social Security age.",
    "Coast FIRE (letting current savings grow untouched to a normal retirement age) can be a useful earlier milestone than full FIRE.",
  ],

  commonMistakes: [
    { mistake: "Using nominal return instead of real return", fix: "Always subtract inflation from your investment return — ignoring it overstates how fast you'll reach FI." },
    { mistake: "Underestimating post-FIRE expenses", fix: "Include healthcare, travel, and inflation-adjusted lifestyle costs, not just current working-year expenses." },
    { mistake: "Assuming a static 4% rule fits every timeline", fix: "Use a lower withdrawal rate (3-3.5%) for retirements expected to last 40+ years." },
    { mistake: "Ignoring savings rate improvements", fix: "Small increases in contribution rate compound significantly over a decade or more — model a few scenarios." },
    { mistake: "Not accounting for sequence-of-returns risk", fix: "This calculator uses average returns; actual early-retirement outcomes vary with market timing, so keep a margin of safety." },
  ],

  faq: [
    { q: "What is the FIRE movement?", a: "FIRE stands for Financial Independence, Retire Early — a strategy of aggressively saving and investing so your portfolio can cover your living expenses without needing employment income." },
    { q: "What is the 4% rule?", a: "The 4% rule, based on the Trinity Study, suggests you can withdraw 4% of your portfolio in year one of retirement, adjusted for inflation each year after, with a low risk of running out of money over 30 years." },
    { q: "How do I calculate my FIRE number?", a: "Divide your expected annual expenses in retirement by your withdrawal rate — for example, $50,000 in annual expenses at a 4% withdrawal rate gives a FIRE number of $1,250,000." },
    { q: "Is the 4% rule still safe in 2026?", a: "Many planners now recommend 3.5% for extra safety, especially for retirements lasting more than 30 years or amid higher valuation and lower expected future returns environments." },
    { q: "What's the difference between FIRE and Coast FIRE?", a: "Full FIRE means you have enough invested to cover expenses now; Coast FIRE means your current savings will grow to your full FIRE number by a normal retirement age without any further contributions." },
    { q: "What's Barista FIRE?", a: "Barista FIRE is a partial FIRE approach where your investments cover most expenses, supplemented by part-time or lower-stress work for the remainder plus benefits like health insurance." },
    { q: "How does savings rate affect my FIRE timeline?", a: "Savings rate is the biggest lever — someone saving 50% of income can typically reach FI in roughly 17 years, while a 10% saver may need 40+ years, regardless of income level." },
    { q: "Should I use nominal or real returns in a FIRE calculator?", a: "Use real (inflation-adjusted) returns for accurate long-term projections, since nominal returns overstate future purchasing power." },
    { q: "What investment return should I assume for FIRE planning?", a: "A common assumption is 6-7% nominal (roughly 4-5% real) based on long-term diversified stock market averages, though conservative planners may use less." },
    { q: "Does this calculator account for taxes?", a: "No — it projects gross portfolio growth and withdrawal capacity; actual after-tax income in retirement depends on account types (Roth, traditional, taxable) and your tax bracket." },
    { q: "What counts as expenses in a FIRE calculation?", a: "Use your expected annual retirement spending, including housing, food, healthcare, insurance, and discretionary spending — not your current working-year expenses if they'll change significantly." },
    { q: "Can I retire early with less than my full FIRE number?", a: "Yes, through approaches like Barista FIRE, Coast FIRE, or geographic arbitrage (lower cost-of-living areas), which reduce the portfolio size needed." },
    { q: "How often should I recalculate my FIRE number?", a: "At least annually, or whenever your income, expenses, or investment returns change meaningfully, since small shifts compound significantly over a multi-decade timeline." },
    { q: "What's a safe withdrawal rate for early retirees?", a: "Early retirees with 40+ year horizons often use 3-3.5% instead of the traditional 4%, since a longer retirement period increases the risk of a 4% withdrawal rate depleting the portfolio." },
  ],

  relatedCalculators: ["Coast FIRE Calculator", "Retirement Income Calculator", "401(k) Calculator", "Roth IRA Calculator"],

  youMayLike: pickYouMayLike("fire-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "FIRE Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};