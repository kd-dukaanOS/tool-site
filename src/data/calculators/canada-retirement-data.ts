import { pickYouMayLike } from "../calculator-pool";

export const canadaRetirementCalculatorContent = {
  meta: {
    seoTitle: "Canada Retirement Calculator - RRSP + TFSA Projection Free",
    metaDescription: "Free Canada retirement calculator combining RRSP and TFSA growth. Project your total retirement balance using 2026 contribution limits.",
    canonicalSlug: "/canada-retirement-calculator",
    ogTitle: "Canada Retirement Calculator - RRSP + TFSA",
    ogDescription: "See your projected retirement balance combining RRSP and TFSA growth.",
    twitterTitle: "Free Canada Retirement Calculator",
    twitterDescription: "Project your combined RRSP and TFSA retirement balance, free.",
  },

  hero: {
    text: "The Canada Retirement Calculator projects your combined RRSP and TFSA balance at retirement, using your current savings, annual contributions, and expected return, split out so you can see each account's growth separately.",
  },

  about: {
    text: `Canadians typically build retirement savings using two registered accounts: the RRSP (Registered Retirement Savings Plan), which grows tax-deferred and is taxed on withdrawal, and the TFSA (Tax-Free Savings Account), which grows and withdraws completely tax-free.

This calculator compounds both accounts separately at your expected return rate, applying your annual contributions each year until retirement, then combines them into a total projected balance.

For 2026, the TFSA annual contribution limit is $7,000, with total lifetime room reaching $109,000 for anyone who was a Canadian resident and at least 18 in 2009. The RRSP limit for 2026 is $33,810, generally capped at 18% of prior-year earned income.

Limitations: this tool assumes a constant contribution and fixed average return — it doesn't model RRSP tax deductions and refunds, CPP/OAS government benefits, or year-to-year contribution room changes.`,
  },

  formula: {
    formula: "Balanceₙ = (Balanceₙ₋₁ + Annual Contribution) × (1 + Return Rate), calculated separately for RRSP and TFSA",
    variables: [
      { symbol: "Annual RRSP Contribution", meaning: "Yearly RRSP contribution, capped at the 2026 limit of $33,810" },
      { symbol: "Annual TFSA Contribution", meaning: "Yearly TFSA contribution, capped at the 2026 limit of $7,000" },
    ],
    explanation: "Each account compounds independently each year — the contribution is added and the total grows at your assumed return rate — then both projected balances are summed for your total retirement savings.",
    interpretation: "For example, starting with $20,000 combined at age 30, contributing $10,000/year split between RRSP and TFSA at a 7% return until age 65 projects to roughly $1.6 million combined.",
  },

  steps: [
    "Enter your current age and target retirement age.",
    "Enter your current RRSP and TFSA balances.",
    "Enter your planned annual RRSP contribution (2026 limit: $33,810).",
    "Enter your planned annual TFSA contribution (2026 limit: $7,000).",
    "Enter your expected average annual return.",
    "Click Calculate to run the tool.",
    "Review your projected RRSP balance, TFSA balance, and combined total.",
  ],

  examples: [
    { inputs: "Age 30→65, RRSP: $10,000, TFSA: $10,000, Contributions: $8,000 RRSP + $7,000 TFSA/yr, Return: 7%", result: "Total Balance: ~$1,600,000", explanation: "Maxing both accounts from age 30 compounds significantly over 35 years." },
    { inputs: "Age 45→65, RRSP: $80,000, TFSA: $40,000, Contributions: $10,000 RRSP + $5,000 TFSA/yr, Return: 6%", result: "Total Balance: ~$820,000", explanation: "A mid-career start with solid existing balances and steady contributions." },
    { inputs: "Age 25→60, RRSP: $0, TFSA: $0, Contributions: $5,000 RRSP + $7,000 TFSA/yr, Return: 8%", result: "Total Balance: ~$2,100,000", explanation: "Starting early in a career with a strong return assumption shows the value of long time horizons." },
  ],

  practicalUses: [
    "Seeing how RRSP and TFSA balances grow separately toward retirement",
    "Deciding how to split contributions between RRSP and TFSA",
    "Comparing projected outcomes at different contribution levels",
    "Checking whether current savings are on track for a retirement target",
    "Estimating combined tax-deferred and tax-free retirement income sources",
    "Planning contribution increases as income grows over a career",
  ],

  expertTips: [
    "RRSP contributions reduce taxable income now, so they're often prioritized in higher-income years, while TFSA is flexible for any income level.",
    "Unused TFSA and RRSP contribution room carries forward indefinitely, so missed years can be made up later.",
    "This projection doesn't include CPP or OAS government benefits, which typically supplement RRSP and TFSA savings in retirement.",
    "Withdrawing from an RRSP in retirement is taxed as income, while TFSA withdrawals are completely tax-free — plan withdrawal order accordingly.",
    "A financial advisor can help decide the optimal RRSP-to-TFSA contribution split based on your current and expected future tax bracket.",
    "Avoid overly optimistic return assumptions — 6-8% average annual returns are a commonly used long-term benchmark.",
  ],

  commonMistakes: [
    { mistake: "Contributing more than the annual TFSA or RRSP limit", fix: "Stay within the 2026 limits of $7,000 for TFSA and $33,810 for RRSP to avoid CRA over-contribution penalties." },
    { mistake: "Treating RRSP and TFSA withdrawals the same in retirement", fix: "RRSP withdrawals are taxed as income, while TFSA withdrawals are tax-free — factor this into retirement income planning." },
    { mistake: "Ignoring RRSP contribution room based on earned income", fix: "RRSP room is generally 18% of prior-year earned income up to the annual limit, not a flat amount for everyone." },
    { mistake: "Forgetting CPP and OAS in overall retirement planning", fix: "This calculator only projects RRSP and TFSA growth — government benefits are a separate, additional income source." },
    { mistake: "Not carrying forward unused contribution room", fix: "Both RRSP and TFSA unused room accumulates and carries forward, so past years' missed contributions aren't lost." },
  ],

  faq: [
    { q: "What is the TFSA contribution limit for 2026?", a: "The 2026 TFSA annual contribution limit is $7,000, with total lifetime room reaching $109,000 for anyone who was a Canadian resident and at least 18 years old since 2009." },
    { q: "What is the RRSP contribution limit for 2026?", a: "The 2026 RRSP limit is $33,810, generally calculated as 18% of your prior year's earned income, up to that annual maximum." },
    { q: "Should I contribute to an RRSP or a TFSA first?", a: "It often depends on your current tax bracket — RRSPs benefit higher earners more through the tax deduction, while TFSAs offer flexibility and are valuable at any income level." },
    { q: "Can I have both an RRSP and a TFSA in Canada?", a: "Yes, most Canadians use both accounts together, since they have separate contribution limits and serve different tax purposes." },
    { q: "Is RRSP withdrawal taxed in retirement?", a: "Yes, RRSP withdrawals are taxed as regular income in the year they're withdrawn, since contributions were tax-deductible when made." },
    { q: "Is TFSA withdrawal taxed in retirement?", a: "No, TFSA withdrawals are completely tax-free at any time, since contributions were made with after-tax dollars." },
    { q: "What happens to unused RRSP or TFSA contribution room?", a: "Unused contribution room in both accounts carries forward indefinitely, so you can catch up in future years." },
    { q: "How much do I need saved to retire comfortably in Canada?", a: "It varies widely by lifestyle and location, but many planners suggest aiming for 25-30 times your expected annual retirement expenses across all accounts." },
    { q: "Does this calculator include CPP and OAS?", a: "No, this tool projects only RRSP and TFSA growth — CPP and OAS are separate government benefits that typically supplement these savings." },
    { q: "What is a good expected return rate to use for retirement planning?", a: "Many planners use a long-term average of 6-8% annually for a diversified equity-heavy portfolio, adjusted lower for more conservative allocations." },
    { q: "Can I withdraw from my RRSP before retirement?", a: "Yes, but withdrawals are taxed as income and subject to withholding tax, except under specific programs like the Home Buyers' Plan or Lifelong Learning Plan." },
    { q: "What is the RRSP contribution deadline?", a: "Contributions must generally be made by March 1st (or the following business day) to count toward the previous tax year." },
    { q: "Do RRSP contributions reduce my taxes?", a: "Yes, RRSP contributions are deducted from your taxable income, which can reduce the tax you owe or increase your refund in the contribution year." },
    { q: "At what age must I convert my RRSP to a RRIF?", a: "RRSPs must be converted to a Registered Retirement Income Fund (RRIF) or otherwise collapsed by December 31st of the year you turn 71." },
  ],

  relatedCalculators: ["RRSP Calculator", "TFSA Calculator", "Canada Capital Gains Tax Calculator", "FIRE Calculator"],

  youMayLike: pickYouMayLike("canada-retirement-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Canada Retirement Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};