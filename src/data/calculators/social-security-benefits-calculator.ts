import { pickYouMayLike } from "../calculator-pool";

export const socialSecurityBenefitsCalculatorContent = {
  meta: {
    seoTitle: "Social Security Benefits Calculator - Estimate Your Monthly Check",
    metaDescription: "Free Social Security benefits calculator using 2026 bend points. Estimate your PIA and monthly benefit at ages 62, full retirement age, and 70.",
    canonicalSlug: "/social-security-benefits-calculator",
    ogTitle: "Social Security Benefits Calculator",
    ogDescription: "See your estimated Social Security check at 62, full retirement age, and 70.",
    twitterTitle: "Free Social Security Calculator",
    twitterDescription: "Estimate your Social Security benefit and find your break-even claiming age.",
  },

  hero: {
    text: "The Social Security Benefits Calculator estimates your Primary Insurance Amount (PIA) using the 2026 bend-point formula, then projects your monthly benefit at age 62, full retirement age, and 70 — plus the break-even age for delaying your claim.",
  },

  about: {
    text: `Social Security replaces a share of your pre-retirement earnings using a progressive formula: your highest 35 years of wage-indexed earnings become your Average Indexed Monthly Earnings (AIME), which is then run through three brackets to produce your Primary Insurance Amount (PIA).

For workers first eligible in 2026, the formula pays 90% of the first $1,286 of AIME, 32% of AIME between $1,286 and $7,749, and 15% above that — rounded down to the nearest dime.

Your PIA is the benefit you'd receive at full retirement age (FRA). Claiming earlier than FRA permanently reduces your check; delaying past FRA (up to age 70) permanently increases it through delayed retirement credits.

Limitations: this calculator uses your entered AIME directly rather than computing it from a full 35-year earnings history, doesn't apply future COLAs, and assumes exact birth-year FRA tables rather than birth-month precision.`,
  },

  formula: {
    formula: "PIA = 90% × AIME(≤$1,286) + 32% × AIME($1,286–$7,749) + 15% × AIME(>$7,749)",
    variables: [
      { symbol: "AIME", meaning: "Average Indexed Monthly Earnings across your highest 35 working years" },
      { symbol: "PIA", meaning: "Primary Insurance Amount — your benefit at full retirement age" },
      { symbol: "FRA", meaning: "Full Retirement Age — 66–67 depending on birth year" },
    ],
    explanation: "Early claiming reduces PIA by 5/9 of 1% per month for the first 36 months before FRA, then 5/12 of 1% per month beyond that. Delaying past FRA adds 2/3 of 1% per month (8% per year) up to age 70.",
    interpretation: "For example, an AIME of $6,000 produces a PIA of roughly $2,700/month at FRA — about $1,900/month if claimed at 62, or around $3,350/month if delayed to 70.",
  },

  steps: [
    "Enter your birth year to determine your full retirement age (FRA).",
    "Enter your estimated Average Indexed Monthly Earnings (AIME) — check your SSA statement for an estimate.",
    "Enter the age you're planning to claim, between 62 and 70.",
    "Click Calculate to run the tool.",
    "Review your PIA, benefit at your planned claiming age, and the break-even age versus claiming at 62.",
  ],

  examples: [
    { inputs: "Birth Year: 1990, AIME: $5,000, Claiming Age: 67", result: "PIA: ~$2,400, Benefit at 67: ~$2,400", explanation: "Claiming exactly at FRA pays the full PIA with no reduction or credit." },
    { inputs: "Birth Year: 1985, AIME: $8,000, Claiming Age: 62", result: "PIA: ~$3,000, Benefit at 62: ~$2,125", explanation: "Claiming at 62 with a 60-month early reduction cuts the benefit by roughly 30%." },
    { inputs: "Birth Year: 1970, AIME: $3,500, Claiming Age: 70", result: "PIA: ~$1,930, Benefit at 70: ~$2,395", explanation: "Delaying to 70 adds delayed retirement credits, raising the check about 24% above PIA." },
  ],

  practicalUses: [
    "Deciding whether to claim early, at full retirement age, or delay to 70",
    "Comparing lifetime benefit totals across different claiming ages",
    "Planning retirement income alongside 401(k) or IRA withdrawals",
    "Understanding how much a specific AIME translates into a monthly check",
    "Estimating the break-even age where delaying starts paying off",
    "Coordinating spousal claiming strategy around each partner's FRA",
  ],

  expertTips: [
    "Your FRA benefit (PIA) is locked in the year you turn 62, even if you claim later — only COLAs and delayed credits change it after that.",
    "Delaying from FRA to 70 raises your benefit by roughly 8% per year, one of the few guaranteed inflation-protected returns available.",
    "Claiming at 62 instead of FRA typically cuts your check by 25-30%, permanently.",
    "Check your actual AIME on your my Social Security statement (ssa.gov) rather than estimating from current salary alone.",
    "The break-even age is usually in the late 70s to early 80s — health and longevity expectations should weigh heavily in the decision.",
    "If you're married, the higher earner delaying often maximizes the survivor benefit for the lower earner.",
  ],

  commonMistakes: [
    { mistake: "Assuming benefits are based on your current salary alone", fix: "Benefits are based on your highest 35 years of wage-indexed earnings (AIME), not just recent income." },
    { mistake: "Ignoring the permanent nature of early claiming reductions", fix: "A reduction taken at 62 stays in effect for life, aside from COLAs — model your break-even age before deciding." },
    { mistake: "Not accounting for delayed retirement credits", fix: "Every year you wait past FRA up to 70 adds about 8% to your benefit permanently." },
    { mistake: "Using national average AIME instead of your own", fix: "Pull your actual estimated AIME or benefit estimate from your SSA statement for an accurate result." },
    { mistake: "Forgetting FRA depends on birth year", fix: "FRA ranges from 66 to 67 depending on when you were born — this calculator adjusts automatically." },
  ],

  faq: [
    { q: "What is the Social Security bend point formula for 2026?", a: "For workers first eligible in 2026, the formula pays 90% of the first $1,286 of AIME, 32% of AIME between $1,286 and $7,749, and 15% of AIME above $7,749." },
    { q: "How much will I get if I claim Social Security at 62?", a: "Claiming at 62 typically reduces your benefit by about 25-30% below your full retirement age amount, depending on how many months early you claim relative to your FRA." },
    { q: "How much more do I get if I wait until 70 to claim Social Security?", a: "Delaying from full retirement age to 70 adds delayed retirement credits of about 8% per year, increasing your benefit by roughly 24-32% above your PIA." },
    { q: "What is my full retirement age for Social Security?", a: "Full retirement age is 66 for those born 1943-1954, gradually rising to 67 for anyone born in 1960 or later." },
    { q: "What is AIME in Social Security?", a: "Average Indexed Monthly Earnings (AIME) is the average of your highest 35 years of wage-indexed earnings, used as the input to the PIA benefit formula." },
    { q: "What is a Primary Insurance Amount (PIA)?", a: "PIA is the monthly benefit amount you'd receive if you claim Social Security exactly at your full retirement age, before any early or delayed adjustments." },
    { q: "Is it better to take Social Security at 62 or 67?", a: "It depends on your health, other income, and life expectancy — claiming at 67 pays more per month, but claiming at 62 pays out for more years; the break-even age is typically in the late 70s to early 80s." },
    { q: "Does Social Security increase every year with inflation?", a: "Yes — benefits receive an annual cost-of-living adjustment (COLA) based on inflation, applied on top of your PIA and any early or delayed adjustments." },
    { q: "How many years of work do I need for Social Security?", a: "You need 40 work credits, typically earned over at least 10 years of covered employment, to qualify for retirement benefits." },
    { q: "What is the maximum Social Security benefit in 2026?", a: "The maximum monthly benefit depends on your claiming age and requires earning at or above the taxable maximum ($184,500 in 2026) for all 35 computation years." },
    { q: "Can I still work while collecting Social Security?", a: "Yes, but if you're under full retirement age, earnings above the annual limit temporarily withhold part of your benefit; after FRA, there's no earnings limit." },
    { q: "How is the Social Security break-even age calculated?", a: "It's the age at which cumulative benefits from delaying your claim catch up to and surpass cumulative benefits from claiming earlier, based on the monthly benefit difference." },
    { q: "Do spousal benefits use the same bend-point formula?", a: "Spousal benefits are based on up to 50% of the worker's PIA rather than the spouse's own AIME, subject to the spouse's own claiming-age adjustments." },
    { q: "Will Social Security run out before I retire?", a: "The Social Security Trust Fund faces a projected shortfall in the mid-2030s, but even without changes, incoming payroll taxes are projected to cover roughly 80% of scheduled benefits." },
  ],

  relatedCalculators: ["Retirement Income Calculator", "401(k) Calculator", "Roth IRA Calculator", "FIRE Calculator"],

  youMayLike: pickYouMayLike("social-security-benefits-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Social Security Benefits Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};