import { pickYouMayLike } from "../calculator-pool";

export const tfsaCalculatorContent = {
  meta: {
    seoTitle: "TFSA Calculator 2025-2026 - Contribution Room & Growth",
    metaDescription: "Free TFSA calculator for Canada. Find your total and available TFSA contribution room since 2009, plus a projected tax-free growth balance.",
    canonicalSlug: "/tfsa-calculator",
    ogTitle: "TFSA Calculator - Contribution Room & Growth Projection",
    ogDescription: "See your available TFSA room and projected tax-free balance.",
    twitterTitle: "Free TFSA Calculator 2025-2026",
    twitterDescription: "Calculate your TFSA contribution room and growth, free and instant.",
  },
  hero: {
    text: "The TFSA Calculator finds your total and available Tax-Free Savings Account contribution room since 2009 (or the year you turned 18), flags any over-contribution, and projects your tax-free balance growth.",
  },
  about: {
    text: `A Tax-Free Savings Account (TFSA) lets Canadians grow investments completely tax-free — no tax on withdrawals, and unlike an RRSP, withdrawals aren't taxed as income and don't affect government benefits.

Your total contribution room accumulates every year you're 18 or older and a Canadian resident, starting from 2009, regardless of whether you actually contribute. Unused room carries forward indefinitely, and withdrawals add back to your room — but only starting the following calendar year.

This calculator sums the CRA's annual dollar limits since your eligibility year, subtracts what you've already contributed, adds back any withdrawals made, and projects tax-free growth on your planned contribution.

Limitations: this tool estimates room based on standard CRA annual limits — always confirm your exact room via CRA My Account, since it tracks your real contribution and withdrawal history precisely.`,
  },
  formula: {
    formula: "Available Room = Σ(Annual TFSA Limits Since Eligible Year) − Total Contributed + Withdrawals Added Back",
    variables: [
      { symbol: "Annual TFSA Limit", meaning: "$7,000 for both 2025 and 2026, set annually by the CRA" },
      { symbol: "Withdrawals Added Back", meaning: "Amounts withdrawn in prior years, which restore room starting the following year" },
      { symbol: "Penalty Tax", meaning: "1% per month CRA tax on any amount contributed beyond your available room" },
    ],
    explanation: "TFSA room accumulates annually from age 18 (or 2009, whichever is later), and any prior withdrawals free up equivalent room again the following calendar year.",
    interpretation: "For example, someone eligible since 2009 who has never contributed would have $102,000 of cumulative room by 2026, based on the sum of every year's dollar limit.",
  },
  steps: [
    "Enter the year you became eligible (turned 18, no earlier than 2009).",
    "Enter the current tax year.",
    "Enter your total TFSA contributions to date.",
    "Enter any withdrawals made this year (added back next year).",
    "Enter your planned new contribution and expected return.",
    "Click Calculate to see your available room and projected balance.",
  ],
  examples: [
    { inputs: "Eligible: 2009, Year: 2026, Contributed: $50,000, Contribution: $7,000, Return: 6%, 1 year", result: "Available Room: ~$52,000", explanation: "Someone eligible since inception with moderate contributions has significant unused room remaining." },
    { inputs: "Eligible: 2019, Year: 2026, Contributed: $40,000, Contribution: $7,000, Return: 6%, 1 year", result: "Available Room: ~$6,500", explanation: "A newer TFSA holder with fewer eligible years and heavier contributions has less room left." },
    { inputs: "Eligible: 2015, Year: 2026, Contributed: $60,000, Withdrawals: $10,000, Contribution: $15,000", result: "Excess Contribution Flagged", explanation: "The withdrawal only adds back room the following year, so an immediate large re-contribution can trigger a penalty." },
  ],
  practicalUses: [
    "Checking exact available TFSA room before making a large contribution",
    "Avoiding CRA over-contribution penalties on a TFSA",
    "Planning how a withdrawal this year affects room next year",
    "Comparing projected tax-free growth against a taxable investment account",
    "Estimating how much room a newly-eligible young adult has accumulated",
    "Deciding how to split savings between a TFSA and an RRSP",
  ],
  expertTips: [
    "TFSA withdrawals aren't lost forever — they get added back to your contribution room, but only starting the calendar year after the withdrawal.",
    "Because growth inside a TFSA is entirely tax-free, it's often ideal for your highest-growth-potential investments compared to a taxable account.",
    "Non-residents of Canada don't accumulate TFSA room for years spent outside the country, even after turning 18.",
    "Over-contributing, even briefly, triggers a 1% per month penalty tax on the excess amount until it's withdrawn.",
    "Unlike RRSP contributions, TFSA contributions are not tax-deductible — the benefit is entirely on the tax-free growth and withdrawal side.",
    "TFSA withdrawals don't count as income, so they don't affect income-tested benefits like Old Age Security or the GST/HST credit.",
  ],
  commonMistakes: [
    { mistake: "Re-contributing a withdrawal in the same calendar year", fix: "Withdrawn amounts only restore your room starting the following calendar year — re-contributing sooner can trigger a penalty." },
    { mistake: "Assuming room started at age 18 regardless of TFSA's launch", fix: "TFSA room only started accumulating in 2009 — even if you turned 18 earlier, your room begins from 2009 or your 18th birthday year, whichever is later." },
    { mistake: "Forgetting non-resident years don't accumulate room", fix: "Years spent as a non-resident of Canada don't add to your TFSA contribution room, even if you were 18 or older during that time." },
    { mistake: "Confusing TFSA with RRSP tax treatment", fix: "TFSA contributions aren't tax-deductible, unlike RRSP contributions — the tax benefit is entirely on withdrawal, which is always tax-free." },
    { mistake: "Not tracking contributions across multiple TFSA accounts", fix: "Your contribution room applies across all TFSA accounts combined, not per account — track total contributions everywhere." },
  ],
  faq: [
    { q: "What is the TFSA contribution limit for 2025?", a: "The TFSA annual dollar limit for 2025 is $7,000, the same as the 2024 limit." },
    { q: "What is the TFSA contribution limit for 2026?", a: "The TFSA annual dollar limit for 2026 is $7,000, unchanged from the two prior years." },
    { q: "How much total TFSA room do I have if I've never contributed?", a: "If eligible since 2009 and never contributed, your cumulative room by 2026 totals $102,000, based on the sum of every year's dollar limit since inception." },
    { q: "Do TFSA withdrawals restore my contribution room?", a: "Yes, but only starting the calendar year after the withdrawal is made — withdrawing and re-contributing in the same year can trigger a penalty." },
    { q: "What happens if I over-contribute to my TFSA?", a: "The CRA charges a 1% per month penalty tax on the excess amount for every month it remains over-contributed, with no buffer like the RRSP's $2,000 allowance." },
    { q: "Are TFSA contributions tax-deductible?", a: "No, unlike RRSP contributions, TFSA contributions are made with after-tax dollars and provide no tax deduction — the benefit is entirely tax-free growth and withdrawals." },
    { q: "Is TFSA withdrawal income taxed?", a: "No, TFSA withdrawals are completely tax-free and don't need to be reported as income on your tax return." },
    { q: "Can non-residents contribute to a TFSA?", a: "Non-residents can hold a TFSA opened while a resident, but don't accumulate new contribution room during years of non-residency, and contributions made as a non-resident face a 1% monthly penalty tax." },
    { q: "What's the difference between a TFSA and an RRSP?", a: "TFSA contributions aren't tax-deductible but grow and withdraw tax-free, while RRSP contributions are tax-deductible but withdrawals are taxed as income in retirement." },
    { q: "How do I check my exact TFSA contribution room?", a: "Log into CRA My Account online or check your latest Notice of Assessment for your CRA-confirmed TFSA contribution room." },
    { q: "Can I have multiple TFSA accounts?", a: "Yes, but your total contribution room applies across all TFSA accounts combined — contributing to multiple accounts doesn't multiply your available room." },
    { q: "Does TFSA income affect government benefits?", a: "No, TFSA withdrawals and growth don't count as income, so they don't affect income-tested benefits like Old Age Security, GIS, or the GST/HST credit." },
    { q: "When did TFSA contribution room start accumulating?", a: "TFSA room began accumulating in 2009 when the account was introduced, for anyone who was 18 or older and a Canadian resident that year." },
    { q: "Can I contribute to a TFSA and RRSP in the same year?", a: "Yes, contributing to both is common and allowed — they have separate contribution room and can be used together as part of a broader savings strategy." },
  ],
  relatedCalculators: ["RRSP Calculator", "Canada Retirement Calculator", "Canada Capital Gains Tax Calculator", "Compound Interest Calculator"],
  youMayLike: pickYouMayLike("tfsa-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "TFSA Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};