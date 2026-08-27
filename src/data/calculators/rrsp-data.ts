import { pickYouMayLike } from "../calculator-pool";

export const rrspCalculatorContent = {
  meta: {
    seoTitle: "RRSP Calculator 2025-2026 - Contribution Room & Tax Savings",
    metaDescription: "Free RRSP calculator for Canada. Find your contribution room, tax savings, and over-contribution penalty using current CRA limits for 2025 and 2026.",
    canonicalSlug: "/rrsp-calculator",
    ogTitle: "RRSP Calculator - Contribution Room & Tax Savings",
    ogDescription: "See your RRSP contribution room and estimated tax savings.",
    twitterTitle: "Free RRSP Calculator 2025-2026",
    twitterDescription: "Calculate your RRSP contribution room and tax refund, free and instant.",
  },
  hero: {
    text: "The RRSP Calculator finds your available contribution room for 2025 or 2026, based on your prior year's earned income and any unused room, then estimates your tax savings and flags any over-contribution penalty.",
  },
  about: {
    text: `A Registered Retirement Savings Plan (RRSP) is a tax-advantaged Canadian account: contributions reduce your taxable income in the year they're made, and investments grow tax-deferred until withdrawal in retirement.

Your annual contribution room is the lesser of 18% of your previous year's earned income or the CRA's annual dollar limit ($32,490 for 2025, $33,810 for 2026), plus any unused room carried forward from prior years.

This calculator combines your new room with your carried-forward room to find your total available contribution, estimates the tax refund from your marginal rate, and flags the CRA's 1%-per-month penalty tax on contributions that exceed your room by more than the $2,000 lifetime buffer.

Limitations: this tool doesn't account for pension adjustments (PA) from an employer pension plan, which reduce RRSP room, or province-specific marginal tax rates — check your Notice of Assessment for your exact CRA-confirmed room.`,
  },
  formula: {
    formula: "Contribution Room = min(18% × Prior Year Earned Income, Annual Dollar Limit) + Unused Room",
    variables: [
      { symbol: "Annual Dollar Limit", meaning: "$32,490 for 2025, $33,810 for 2026, set annually by the CRA" },
      { symbol: "Unused Room", meaning: "Contribution room carried forward from previous years that hasn't been used" },
      { symbol: "Penalty Tax", meaning: "1% per month CRA tax on contributions exceeding room by more than a $2,000 lifetime buffer" },
    ],
    explanation: "Each year's new room is capped at whichever is lower: 18% of your earned income or the fixed annual dollar limit, then added to any room you didn't use in prior years.",
    interpretation: "For example, someone earning $80,000 in 2025 generates $14,400 of new 2026 room (18% of $80,000, under the $33,810 cap), which stacks with any unused room from earlier years.",
  },
  steps: [
    "Select the tax year (2025 or 2026).",
    "Enter your previous year's earned income.",
    "Enter your unused RRSP contribution room from your CRA Notice of Assessment.",
    "Enter your planned RRSP contribution for the year.",
    "Enter your marginal tax rate to estimate savings.",
    "Click Calculate to see your available room and tax savings.",
  ],
  examples: [
    { inputs: "2025, Prior Income: $80,000, Unused Room: $5,000, Contribution: $10,000, Rate: 30%", result: "Room: $19,400, Tax Savings: ~$3,000", explanation: "Combining new and carried-forward room comfortably covers the planned contribution." },
    { inputs: "2026, Prior Income: $200,000, Unused Room: $0, Contribution: $35,000, Rate: 43%", result: "Excess Contribution Flagged", explanation: "High income hits the annual dollar limit cap, and the contribution exceeds available room plus the $2,000 buffer." },
    { inputs: "2025, Prior Income: $45,000, Unused Room: $12,000, Contribution: $8,000, Rate: 20%", result: "Room: $20,100, Tax Savings: ~$1,600", explanation: "A lower income earner with solid carried-forward room has ample space for the contribution." },
  ],
  practicalUses: [
    "Checking how much RRSP room you have before making a contribution",
    "Estimating your tax refund from an RRSP contribution before filing",
    "Avoiding CRA over-contribution penalties by checking room in advance",
    "Deciding how to split contributions between an RRSP and a TFSA",
    "Planning contributions around a bonus or raise that changes your income",
    "Tracking how carried-forward room accumulates over multiple years",
  ],
  expertTips: [
    "RRSP contributions are most tax-efficient in your highest-income years — the deduction is worth more at a higher marginal tax rate.",
    "You have until 60 days after year-end (typically March 1 or 2) to make a contribution that counts toward the previous tax year.",
    "The CRA gives a $2,000 lifetime over-contribution buffer before the 1%-per-month penalty tax kicks in — but that buffer isn't a deduction, just a penalty exemption.",
    "Unused RRSP room carries forward indefinitely, so contributions can be timed strategically for higher-income years.",
    "If your employer offers a pension plan, your RRSP room is reduced by a pension adjustment (PA) — check your T4 slip for the exact figure.",
    "Consider a spousal RRSP if you and your spouse are in different tax brackets, to help balance retirement income and tax later.",
  ],
  commonMistakes: [
    { mistake: "Assuming this year's contribution creates this year's deduction only", fix: "You can carry forward unused deductions and claim them in a future, higher-income year, even if the contribution was made earlier." },
    { mistake: "Ignoring the pension adjustment from a workplace pension", fix: "If you belong to an employer pension plan, your RRSP room is reduced by a pension adjustment reported on your T4 — factor this in." },
    { mistake: "Over-contributing beyond the $2,000 buffer", fix: "Contributions exceeding your room by more than $2,000 trigger a 1% per month CRA penalty tax until withdrawn or absorbed by new room." },
    { mistake: "Missing the 60-day contribution deadline", fix: "To count toward the previous tax year, contributions must be made within 60 days after year-end (typically March 1 or 2)." },
    { mistake: "Using last year's dollar limit", fix: "The CRA's annual RRSP dollar limit increases most years — always confirm the current year's limit before estimating room." },
  ],
  faq: [
    { q: "What is the RRSP contribution limit for 2025?", a: "For 2025, the RRSP dollar limit is $32,490, though your actual room is the lesser of that amount or 18% of your 2024 earned income, plus any unused room." },
    { q: "What is the RRSP contribution limit for 2026?", a: "For 2026, the RRSP dollar limit is $33,810, though your actual room is the lesser of that amount or 18% of your 2025 earned income, plus any unused room." },
    { q: "How is RRSP contribution room calculated?", a: "It's the lesser of 18% of your previous year's earned income or the CRA's annual dollar limit, plus any unused contribution room carried forward from prior years." },
    { q: "How do I find my exact RRSP contribution room?", a: "Check your latest CRA Notice of Assessment, log into CRA My Account online, or call the CRA directly for your confirmed contribution room." },
    { q: "What happens if I over-contribute to my RRSP?", a: "The CRA allows a $2,000 lifetime buffer before penalties apply; contributions exceeding that buffer are subject to a 1% per month penalty tax until corrected." },
    { q: "What is the RRSP contribution deadline?", a: "To count toward the previous tax year, contributions must be made within 60 days after year-end, which typically falls on March 1st or 2nd." },
    { q: "How much tax will I save by contributing to my RRSP?", a: "Your tax savings roughly equal your contribution amount multiplied by your marginal tax rate, since RRSP contributions are deducted from taxable income." },
    { q: "Can I carry forward unused RRSP room?", a: "Yes, unused RRSP contribution room carries forward indefinitely and can be used in any future year, making it flexible for timing higher-income years." },
    { q: "What is a pension adjustment and how does it affect my RRSP room?", a: "A pension adjustment reduces your RRSP room to account for benefits accrued in an employer-sponsored pension plan, and is reported on your T4 slip." },
    { q: "Should I contribute to an RRSP or a TFSA?", a: "RRSPs are often better for high-income years due to the tax deduction, while TFSAs suit lower-income years or short-term savings since withdrawals are tax-free and don't restore contribution room until the following year." },
    { q: "What is a spousal RRSP?", a: "It's an RRSP where one spouse contributes and gets the tax deduction, but the other spouse owns the account, often used to balance retirement income between spouses in different tax brackets." },
    { q: "Can I withdraw from my RRSP before retirement?", a: "Yes, but withdrawals are generally taxable as income and subject to withholding tax, except under special programs like the Home Buyers' Plan or Lifelong Learning Plan." },
    { q: "What is the RRSP Home Buyers' Plan?", a: "It lets first-time home buyers withdraw up to $60,000 from their RRSP tax-free to buy a home, provided the funds are repaid to the RRSP over 15 years." },
    { q: "Does an RRSP contribution reduce my taxable income dollar for dollar?", a: "Yes, RRSP contributions are deducted directly from your taxable income, meaning the tax savings depend on your marginal tax rate at the time of contribution." },
  ],
  relatedCalculators: ["TFSA Calculator", "Canada Retirement Calculator", "CPP Calculator", "Canada Capital Gains Tax Calculator"],
  youMayLike: pickYouMayLike("rrsp-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "RRSP Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};