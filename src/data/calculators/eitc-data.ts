import { pickYouMayLike } from "../calculator-pool";

export const eitcCalculatorContent = {
  meta: {
    seoTitle: "EITC Calculator 2025-2026 - Earned Income Tax Credit Estimator",
    metaDescription: "Free EITC calculator for 2025 and 2026. Estimate your Earned Income Tax Credit based on income, filing status, and qualifying children using current IRS tables.",
    canonicalSlug: "/eitc-calculator",
    ogTitle: "EITC Calculator - Earned Income Tax Credit Estimator",
    ogDescription: "Instantly estimate your Earned Income Tax Credit for 2025 or 2026.",
    twitterTitle: "Free EITC Calculator 2025-2026",
    twitterDescription: "See how much Earned Income Tax Credit you may qualify for.",
  },

  hero: {
    text: "The EITC Calculator estimates your Earned Income Tax Credit for the 2025 or 2026 tax year based on your earned income, AGI, filing status, and number of qualifying children — using the IRS's current phase-in, plateau, and phase-out formula.",
  },

  about: {
    text: `The Earned Income Tax Credit (EITC) is a refundable federal tax credit for low-to-moderate-income workers, meaning it can reduce your tax bill below zero and be paid out as a refund.

The credit works in three stages: it phases in as a percentage of your earned income, plateaus at a maximum amount once you reach the "earned income amount," then phases out gradually once your income (or AGI, whichever is higher) passes the threshold phaseout amount.

This calculator uses the official IRS Revenue Procedure figures for tax years 2025 and 2026, adjusted for filing status and number of qualifying children (0 to 3+).

Limitations: this tool estimates the federal credit only — it doesn't include state EITC add-ons, doesn't verify full eligibility rules (residency, qualifying child tests, investment income cap), and results should be confirmed using the IRS EITC Assistant or a tax professional.`,
  },

  formula: {
    formula: "EITC = min(Earned Income × Credit Rate, Max Credit) − max(0, Income − Phaseout Threshold) × Phaseout Rate",
    variables: [
      { symbol: "Credit Rate", meaning: "7.65% (no children), 34% (1 child), 40% (2 children), 45% (3+ children)" },
      { symbol: "Max Credit", meaning: "The plateau amount reached once earned income hits the 'earned income amount'" },
      { symbol: "Phaseout Rate", meaning: "Rate at which the credit shrinks once income exceeds the phaseout threshold" },
    ],
    explanation: "The credit rises with earned income until it hits its maximum, stays flat through a plateau range, then falls at a fixed phaseout rate based on whichever is higher: earned income or AGI.",
    interpretation: "For example, a single filer with one child earning $20,000 in 2025 would receive close to the full $4,328 maximum credit, since $20,000 falls within the plateau range before the $23,350 phaseout threshold.",
  },

  steps: [
    "Select the tax year (2025 or 2026).",
    "Choose your filing status (Married Filing Separately is not eligible).",
    "Enter your total earned income (wages, tips, self-employment income).",
    "Enter your Adjusted Gross Income (AGI) if it differs from earned income.",
    "Enter your number of qualifying children (0-3+).",
    "Enter any investment income for the year.",
    "Click Calculate to see your estimated credit and eligibility status.",
  ],

  examples: [
    { inputs: "Single, 2025, 1 child, Earned Income: $20,000, AGI: $20,000", result: "Estimated EITC: ~$4,328", explanation: "Income falls in the plateau range, so the full maximum credit applies." },
    { inputs: "MFJ, 2025, 2 children, Earned Income: $45,000, AGI: $45,000", result: "Estimated EITC: ~$3,850", explanation: "Income is past the phaseout threshold, reducing the credit below the $7,152 maximum." },
    { inputs: "Single, 2025, 0 children, Earned Income: $12,000, AGI: $12,000", result: "Estimated EITC: ~$489", explanation: "Income exceeds the earned income amount for filers with no children, triggering phase-out." },
  ],

  practicalUses: [
    "Estimating your refund before filing your tax return",
    "Checking whether a raise or extra freelance income changes your EITC eligibility",
    "Comparing EITC outcomes between filing statuses",
    "Planning around the investment income cap that can disqualify high-investment-income filers",
    "Understanding how adding a qualifying child changes your credit amount",
    "Estimating year-over-year changes as IRS thresholds adjust for inflation",
  ],

  expertTips: [
    "The EITC is refundable — you can receive it as a refund even if you owe no federal tax.",
    "AGI and earned income are both checked against the limits; the higher of the two is used for phase-out, so investment or unemployment income showing up in AGI can reduce your credit even if earned income is low.",
    "Married Filing Separately filers are ineligible for the EITC in nearly all cases — file jointly if you want to claim it.",
    "The investment income cap ($11,950 for 2025, $12,200 for 2026) includes interest, dividends, capital gains, and rental income — a single large capital gain can disqualify you entirely.",
    "You must file a tax return to claim the EITC, even if your income is below the standard filing threshold.",
    "You can generally claim both the EITC and the Child Tax Credit in the same year if you qualify for each.",
  ],

  commonMistakes: [
    { mistake: "Forgetting to include AGI when it's higher than earned income", fix: "Enter AGI separately — the IRS uses whichever is greater to determine your phase-out reduction." },
    { mistake: "Assuming self-employment income doesn't count", fix: "Self-employment and gig income both count as earned income for EITC purposes." },
    { mistake: "Filing Married Filing Separately and expecting the credit", fix: "MFS filers are disqualified from the EITC in almost all circumstances — use Married Filing Jointly instead." },
    { mistake: "Ignoring the investment income limit", fix: "Check that interest, dividends, and capital gains stay under the annual cap, or the credit drops to zero regardless of earned income." },
    { mistake: "Using outdated income thresholds", fix: "EITC thresholds and maximum credits adjust every year for inflation — always check the current tax year's table." },
  ],

  faq: [
    { q: "What is the Earned Income Tax Credit (EITC)?", a: "It's a refundable federal tax credit for low-to-moderate-income workers that increases with earned income up to a maximum, then phases out as income rises further." },
    { q: "How much is the EITC for 2025?", a: "For the 2025 tax year, the maximum EITC ranges from $649 with no qualifying children up to $8,046 for filers with three or more qualifying children." },
    { q: "How much is the EITC for 2026?", a: "For the 2026 tax year, the maximum EITC ranges from $664 with no qualifying children up to $8,231 for filers with three or more qualifying children." },
    { q: "Who qualifies for the Earned Income Tax Credit?", a: "You need earned income within the eligibility limits, a valid Social Security number, U.S. residency for over half the year, and a filing status other than Married Filing Separately." },
    { q: "Can I get the EITC with no children?", a: "Yes — filers without qualifying children can still claim a smaller EITC if their income and age meet the requirements (generally 25 to 65 years old)." },
    { q: "Does Married Filing Separately qualify for the EITC?", a: "No, in nearly all cases Married Filing Separately filers cannot claim the EITC; Married Filing Jointly is required to claim it while married." },
    { q: "What counts as earned income for the EITC?", a: "Wages, salaries, tips, gig economy income, and self-employment earnings all count; investment income, Social Security, pensions, and unemployment benefits do not." },
    { q: "Is there an investment income limit for the EITC?", a: "Yes — for 2025 your investment income must be $11,950 or less, rising to $12,200 for 2026, or you're disqualified regardless of earned income." },
    { q: "How is the EITC calculated?", a: "The credit phases in as a percentage of earned income up to a maximum, plateaus, then phases out at a fixed rate once income exceeds a threshold, using whichever is higher: earned income or AGI." },
    { q: "Can I claim both the EITC and Child Tax Credit?", a: "Yes, most taxpayers who qualify for both can claim the EITC and the Child Tax Credit in the same tax year, since they are not mutually exclusive." },
    { q: "Do I need to file a tax return to get the EITC?", a: "Yes — you must file a federal tax return, even if your income is below the standard minimum filing threshold, to claim the EITC." },
    { q: "How does the number of qualifying children affect the EITC?", a: "The credit rate and maximum amount increase with each qualifying child, up to three or more children, which carries the highest maximum credit." },
    { q: "What is the EITC phase-out threshold?", a: "It's the income level above which your credit starts shrinking; it varies by filing status and number of qualifying children, and is higher for Married Filing Jointly." },
    { q: "Why did my estimated EITC come out lower than the maximum?", a: "Your income is likely above the phase-out threshold for your filing status and family size, which reduces the credit gradually until it reaches zero at the completed phase-out amount." },
  ],

  relatedCalculators: ["Child Tax Credit Calculator", "Tax Bracket Calculator", "Tax Refund Calculator", "W-4 Calculator"],

  youMayLike: pickYouMayLike("eitc-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "EITC Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};
