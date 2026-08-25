// src/data/calculators/self-employment-tax.ts
export const selfEmploymentTaxCalculatorContent = {
  meta: {
    seoTitle: "Self-Employment Tax Calculator - 2025 & 2026 Free",
    metaDescription: "Calculate Social Security and Medicare self-employment tax on your net earnings using current 2025 and 2026 IRS rates. Free SE tax calculator with deductible half.",
    canonicalSlug: "/self-employment-tax-calculator",
    ogTitle: "Self-Employment Tax Calculator - 2025 & 2026",
    ogDescription: "Instantly calculate Social Security and Medicare tax on self-employment income.",
    twitterTitle: "Free Self-Employment Tax Calculator",
    twitterDescription: "Calculate SE tax on freelance or business income instantly, free and accurate.",
  },

  hero: {
    text: "The Self-Employment Tax Calculator finds how much Social Security and Medicare tax you owe on freelance, gig or business income. Enter your net self-employment earnings, filing status and tax year to see your total SE tax, effective rate, and the deductible half you can claim on your income tax return.",
  },

  about: {
    text: `The Self-Employment Tax Calculator is a free online tool that computes the Social Security and Medicare tax owed on self-employment income — the equivalent of the FICA tax that's automatically withheld from a W-2 employee's paycheck.

Self-employed workers pay both the employee and employer share: 12.4% for Social Security (up to the annual wage base) and 2.9% for Medicare (uncapped), applied to 92.35% of net earnings. High earners may also owe an Additional Medicare Tax of 0.9% above a filing-status-specific threshold.

Half of your total SE tax (excluding the Additional Medicare Tax) is deductible as an adjustment to income on your federal return, which this calculator shows separately.

Limitations: this covers federal self-employment tax only. It does not calculate federal or state income tax owed on the same earnings, or account for combined W-2 wages when applying the Social Security wage base or Additional Medicare Tax threshold.

Use this tool to plan quarterly estimated payments, not as a substitute for tax software or a licensed tax professional.`,
  },

  formula: {
    formula: "SE Taxable Earnings = Net Earnings × 92.35%; SE Tax = (min(SE Taxable Earnings, wage base) × 12.4%) + (SE Taxable Earnings × 2.9%) + Additional Medicare Tax",
    variables: [
      { symbol: "Net Earnings", meaning: "Net profit from self-employment, before SE tax" },
      { symbol: "Wage Base", meaning: "Annual Social Security earnings cap — $176,100 (2025) or $184,500 (2026)" },
      { symbol: "Additional Medicare Tax", meaning: "Extra 0.9% on SE taxable earnings above your filing status threshold" },
    ],
    explanation: "The IRS only taxes 92.35% of net self-employment earnings to roughly offset the employer-side deduction a W-2 employer would normally take. Social Security tax stops once earnings hit the annual wage base; Medicare tax never stops.",
    interpretation: "For example, $60,000 in net self-employment earnings in 2026 gives $55,410 in SE taxable earnings, taxed at 12.4% + 2.9% = 15.3%, for roughly $8,478 in total self-employment tax.",
  },

  steps: [
    "Enter your net self-employment earnings for the year.",
    "Select your filing status.",
    "Choose the tax year — 2025 or 2026.",
    "Click Calculate to run the tool.",
    "Review your total SE tax, Social Security and Medicare breakdown, deductible half, and effective rate.",
    "Copy the summary if you need to save or share it.",
  ],

  examples: [
    { inputs: "Net Earnings: $60,000, Single, 2026", result: "Total SE Tax: ~$8,478, Deductible Half: ~$4,239, Effective Rate: 14.1%", explanation: "Below the Social Security wage base, so the full 12.4% + 2.9% applies." },
    { inputs: "Net Earnings: $200,000, Single, 2026", result: "Total SE Tax: ~$28,077, Deductible Half: ~$14,038, Effective Rate: 14.0%", explanation: "Social Security tax caps out at the wage base; Medicare tax continues on all earnings." },
    { inputs: "Net Earnings: $250,000, Single, 2026", result: "Total SE Tax: ~$29,872, Effective Rate: 11.9%", explanation: "Earnings above $200,000 trigger the Additional Medicare Tax of 0.9%, slightly raising the total." },
    { inputs: "Net Earnings: $30,000, Head of Household, 2025", result: "Total SE Tax: ~$4,239, Deductible Half: ~$2,119, Effective Rate: 14.1%", explanation: "A smaller side-business income still owes the full 15.3% combined rate up to the wage base." },
  ],

  practicalUses: [
    "Planning quarterly estimated tax payments for freelance or gig income",
    "Budgeting how much of a freelance invoice actually goes to taxes",
    "Comparing take-home pay between W-2 employment and self-employment",
    "Estimating the deductible half of SE tax for income tax planning",
    "Understanding how crossing the Social Security wage base changes your marginal SE tax rate",
    "Checking whether high self-employment income triggers the Additional Medicare Tax",
    "Setting aside the right percentage of each client payment for taxes",
    "Comparing SE tax burden across different business income levels",
    "Explaining why 1099 income is taxed differently than W-2 income",
    "Reviewing year-end numbers before filing a Schedule SE",
  ],

  expertTips: [
    "A common rule of thumb is to set aside roughly 25–30% of net self-employment income for combined SE tax and income tax — this calculator gives you the SE tax portion precisely.",
    "Only 92.35% of net earnings are subject to SE tax, not the full amount — this offsets what would otherwise be an employer's matching deduction.",
    "Once your combined earnings cross the Social Security wage base, only the 2.9% Medicare portion continues — your effective SE tax rate actually drops slightly at high income.",
    "The deductible half of SE tax reduces your federal taxable income, so remember to apply it before estimating your income tax separately.",
    "If you also have W-2 wages, your employer's withholding counts toward the Social Security wage base — track both to avoid overpaying.",
    "The Additional Medicare Tax threshold is fixed by law and not inflation-adjusted, so more filers cross it over time as incomes rise.",
    "Self-employed retirement contributions (SEP-IRA, Solo 401(k)) don't reduce SE tax, only income tax — SE tax is based on net earnings before those contributions.",
    "Making quarterly estimated payments avoids an underpayment penalty; this calculator's annual total divided by four is a simple starting point.",
    "Married couples filing jointly with two self-employed spouses should calculate SE tax separately for each spouse's net earnings.",
  ],

  commonMistakes: [
    { mistake: "Applying 12.4% and 2.9% to full net earnings", fix: "SE tax applies to 92.35% of net earnings, not the full amount — always apply that reduction first." },
    { mistake: "Forgetting Social Security tax stops at the wage base", fix: "Only the Medicare portion (2.9%) continues on earnings above the annual Social Security wage base." },
    { mistake: "Ignoring the deductible half of SE tax", fix: "Half of your SE tax (excluding the Additional Medicare Tax) is deductible against income tax — don't leave it out of your income tax planning." },
    { mistake: "Confusing SE tax with income tax", fix: "SE tax covers Social Security and Medicare only; you still owe separate federal (and possibly state) income tax on the same earnings." },
    { mistake: "Missing combined W-2 and self-employment income for the wage base", fix: "If you also have wage income, it counts toward the Social Security wage base and Additional Medicare Tax threshold first." },
    { mistake: "Not setting aside enough for quarterly payments", fix: "SE tax plus income tax can total 25–35% or more of net earnings — underpaying leads to penalties at filing time." },
    { mistake: "Assuming retirement contributions reduce SE tax", fix: "SEP-IRA, Solo 401(k) and similar contributions lower income tax, not the SE tax calculated on net earnings." },
  ],

  faq: [
    { q: "What is self-employment tax?", a: "It's the Social Security and Medicare tax self-employed individuals pay, covering both the employee and employer portions that a W-2 job would otherwise split between worker and employer." },
    { q: "What is the self-employment tax rate?", a: "15.3% total: 12.4% for Social Security (up to the annual wage base) and 2.9% for Medicare, applied to 92.35% of net self-employment earnings." },
    { q: "What is the Social Security wage base for 2025 and 2026?", a: "$176,100 for 2025 and $184,500 for 2026 — earnings above this amount aren't subject to the 12.4% Social Security portion, though Medicare tax still applies." },
    { q: "What is the Additional Medicare Tax?", a: "An extra 0.9% Medicare tax on earnings above $200,000 (single/head of household), $250,000 (married filing jointly), or $125,000 (married filing separately)." },
    { q: "Why is only 92.35% of my earnings taxed?", a: "The IRS reduces taxable earnings by 7.65% to roughly mirror the employer-side FICA deduction a traditional employee's company would take before calculating tax." },
    { q: "Can I deduct self-employment tax?", a: "Yes, half of your SE tax (the 12.4% and 2.9% portions, not the Additional Medicare Tax) is deductible as an adjustment to income on your federal tax return." },
    { q: "Does this calculator include income tax?", a: "No, this covers Social Security and Medicare tax only — you'll owe separate federal and possibly state income tax on the same net earnings." },
    { q: "How is self-employment tax different from FICA tax?", a: "They're economically the same tax; W-2 employees split 15.3% with their employer, while self-employed individuals pay the full 15.3% themselves through SE tax." },
    { q: "Do I owe SE tax on a small side hustle?", a: "Generally yes, if net self-employment earnings are $400 or more for the year, you're required to pay self-employment tax." },
    { q: "How often should I pay self-employment tax?", a: "Most self-employed individuals pay it through quarterly estimated tax payments rather than one lump sum at filing time, to avoid underpayment penalties." },
    { q: "Does having a W-2 job change my SE tax?", a: "Yes, W-2 wages count toward the Social Security wage base first, which can reduce or eliminate the 12.4% portion owed on your self-employment earnings." },
    { q: "What is net self-employment earnings?", a: "It's your business or freelance income after deducting ordinary business expenses — the profit figure from Schedule C, not your gross revenue." },
    { q: "Is SE tax the same for every filing status?", a: "The 12.4%/2.9% rates and wage base are the same regardless of filing status; only the Additional Medicare Tax threshold changes based on filing status." },
    { q: "Does retirement account contributions lower my SE tax?", a: "No, contributions to a SEP-IRA, Solo 401(k) or similar plan reduce income tax, not the self-employment tax calculated on your net earnings." },
    { q: "Is this calculator a substitute for Schedule SE?", a: "No, it's designed for quick planning estimates — use IRS Schedule SE or tax software for your official filing calculation." },
  ],

  relatedCalculators: ["US Federal Tax Calculator", "Capital Gains Tax Calculator", "Net Profit Calculator", "Quarterly Estimated Tax Calculator", "Freelance Rate Calculator"],

   youMightAlsoLike: ["Freelancer Hourly Rate Calculator", "Business Days Calculator", "Timezone Calculator"],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Self-Employment Tax Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};