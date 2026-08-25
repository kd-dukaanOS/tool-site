// src/data/calculators/quarterly-estimated-tax.ts
export const quarterlyEstimatedTaxCalculatorContent = {
  meta: {
    seoTitle: "Quarterly Estimated Tax Calculator - 2025 & 2026 Free",
    metaDescription: "Calculate your quarterly estimated tax payment combining federal income tax and self-employment tax, using current 2025 and 2026 IRS brackets. Free calculator.",
    canonicalSlug: "/quarterly-estimated-tax-calculator",
    ogTitle: "Quarterly Estimated Tax Calculator - 2025 & 2026",
    ogDescription: "Instantly estimate what to send the IRS each quarter.",
    twitterTitle: "Free Quarterly Estimated Tax Calculator",
    twitterDescription: "Calculate quarterly tax payments for freelance and business income, free and accurate.",
  },

  hero: {
    text: "The Quarterly Estimated Tax Calculator combines federal income tax and self-employment tax on your expected annual income to estimate what to send the IRS each quarter. Built for freelancers, gig workers and small business owners who don't have taxes withheld from a paycheck.",
  },

  about: {
    text: `The Quarterly Estimated Tax Calculator is a free online tool that estimates your total annual federal tax liability — combining income tax and self-employment tax — then divides it into four quarterly payments.

The IRS requires most self-employed individuals and anyone without sufficient withholding to pay estimated tax quarterly, rather than in one lump sum at filing time. Underpaying can trigger a penalty even if the full amount is paid by the filing deadline.

This tool applies the self-employment tax deduction (half of your SE tax) before calculating income tax, then adds SE tax back on top — the same order the IRS uses on Form 1040 and Schedule SE.

Limitations: this covers federal tax only and assumes a simple, even income flow across the year. It does not include state estimated tax, the IRS safe harbor rules based on prior-year tax, or income that varies significantly by quarter (which may call for the annualized income installment method instead).

Use this for planning purposes, not as a substitute for tax software, Form 1040-ES, or a licensed tax professional.`,
  },

  formula: {
    formula: "Total Annual Tax = Federal Income Tax + Self-Employment Tax; Quarterly Payment = Total Annual Tax ÷ 4",
    variables: [
      { symbol: "Federal Income Tax", meaning: "Tax on adjusted gross income (total income minus half of SE tax) after your deduction" },
      { symbol: "Self-Employment Tax", meaning: "12.4% Social Security + 2.9% Medicare on 92.35% of net self-employment earnings" },
    ],
    explanation: "Self-employed income owes two separate federal taxes: ordinary income tax and self-employment tax. The IRS lets you deduct half of your SE tax before calculating income tax, so the two amounts are calculated in sequence, not independently.",
    interpretation: "For example, $80,000 in self-employment income for a single filer in 2026 might owe roughly $11,300 in SE tax and $8,500 in federal income tax, for about $19,800 total — or roughly $4,950 per quarter.",
  },

  steps: [
    "Enter your expected self-employment income for the year.",
    "Enter any other income, such as W-2 wages, if applicable.",
    "Select your filing status and tax year.",
    "Choose Standard or Itemized Deduction.",
    "Click Calculate to see your total annual tax and quarterly payment.",
    "Copy the summary to reference when submitting Form 1040-ES payments.",
  ],

  examples: [
    { inputs: "SE Income: $60,000, Other Income: $0, Single, 2026, Standard Deduction", result: "SE Tax: ~$8,478, Federal Tax: ~$5,570, Total: ~$14,048, Quarterly: ~$3,512", explanation: "A typical solo freelancer estimate combining both federal taxes." },
    { inputs: "SE Income: $40,000, Other Income: $30,000 (spouse W-2), Married Filing Jointly, 2026", result: "Total Annual Tax: ~$10,900, Quarterly: ~$2,725", explanation: "Combining self-employment and W-2 income changes the applicable tax bracket." },
    { inputs: "SE Income: $120,000, Single, 2026, Itemized Deduction: $20,000", result: "Total Annual Tax: ~$29,600, Quarterly: ~$7,400", explanation: "Higher income pushes more of the total into higher brackets, raising both components." },
    { inputs: "SE Income: $15,000, Head of Household, 2025, Standard Deduction", result: "Total Annual Tax: ~$2,119, Quarterly: ~$530", explanation: "At lower income, self-employment tax makes up most of the total owed since income tax is minimal after the standard deduction." },
  ],

  practicalUses: [
    "Setting aside the right amount from each freelance or contract payment",
    "Planning Form 1040-ES quarterly payments as a new business owner",
    "Avoiding IRS underpayment penalties from inconsistent tax set-asides",
    "Comparing tax burden between a full-time freelance year and a mixed W-2/1099 year",
    "Budgeting cash flow for a small business with variable client income",
    "Estimating taxes owed before accepting a large one-time contract",
    "Reviewing whether last quarter's estimated payment was in the right range",
    "Planning for a first year of self-employment after leaving a W-2 job",
    "Comparing tax impact of taking on a side gig alongside full-time W-2 work",
    "Preparing a rough annual tax budget for a solo consultancy or agency",
  ],

  expertTips: [
    "The IRS due dates for quarterly payments are typically mid-April, mid-June, mid-September and mid-January — mark these on your calendar.",
    "The IRS safe harbor rule lets you avoid penalties by paying at least 90% of this year's tax or 100–110% of last year's tax (depending on income) — this calculator doesn't apply safe harbor automatically.",
    "If your income is uneven across the year, consider the IRS annualized income installment method instead of a flat quarterly split.",
    "Setting aside a percentage of every client payment as it arrives is often easier than calculating one lump sum quarterly.",
    "Remember that this estimate is federal only — most states with income tax also require separate quarterly estimated payments.",
    "A significant income increase mid-year should trigger a recalculation before your next quarterly due date, not just at year-end.",
    "Retirement contributions (SEP-IRA, Solo 401(k)) reduce your income tax portion — factor planned contributions into your other income field if relevant.",
    "New businesses often underestimate SE tax since it applies from the very first dollar of net profit, unlike income tax which has a deduction buffer.",
  ],

  commonMistakes: [
    { mistake: "Forgetting self-employment tax applies from the first dollar", fix: "Unlike income tax, SE tax has no deduction buffer — it applies once net self-employment earnings exceed $400 for the year." },
    { mistake: "Paying estimated tax based on income tax alone", fix: "Always include self-employment tax in your quarterly calculation — it's often the larger portion at moderate income levels." },
    { mistake: "Assuming a flat quarterly split fits uneven income", fix: "If income varies significantly by quarter, consider the IRS annualized income installment method for a more accurate split." },
    { mistake: "Ignoring state estimated tax obligations", fix: "This calculator covers federal tax only; check whether your state also requires quarterly estimated payments." },
    { mistake: "Not adjusting after a big mid-year income change", fix: "Recalculate and adjust remaining quarterly payments if a large project or income shift happens partway through the year." },
    { mistake: "Missing the SE tax deduction when estimating income tax separately", fix: "Half of SE tax reduces taxable income for the income tax portion — this calculator applies that automatically." },
    { mistake: "Waiting until year-end to start paying", fix: "Missing early-quarter payments can trigger penalties even if the full amount is paid by the filing deadline." },
  ],

  faq: [
    { q: "Who needs to pay quarterly estimated tax?", a: "Generally anyone expecting to owe $1,000 or more in federal tax for the year without enough withholding, including most self-employed individuals, freelancers and gig workers." },
    { q: "What does this calculator include?", a: "It combines federal income tax and self-employment tax on your expected annual income, then divides the total into four equal quarterly payments." },
    { q: "When are quarterly estimated tax payments due?", a: "Typically mid-April, mid-June, mid-September and mid-January of the following year, though exact dates can shift slightly if they fall on a weekend or holiday." },
    { q: "Does this include state estimated tax?", a: "No, this covers federal tax only — most states with income tax have separate quarterly estimated tax requirements." },
    { q: "What is the safe harbor rule?", a: "It lets you avoid underpayment penalties by paying at least 90% of the current year's tax or 100–110% of last year's tax (depending on income) — not automatically applied by this calculator." },
    { q: "What if my income varies a lot each quarter?", a: "Consider the IRS annualized income installment method (Form 2210, Schedule AI), which adjusts each quarter's required payment to match actual income earned so far." },
    { q: "Does this calculator include the self-employment tax deduction?", a: "Yes, it deducts half of your calculated SE tax before computing federal income tax, matching the IRS's own calculation order." },
    { q: "What income should I enter for 'other income'?", a: "Any W-2 wages or additional taxable income you expect for the year, separate from your self-employment earnings." },
    { q: "What happens if I underpay my estimated taxes?", a: "The IRS may charge an underpayment penalty based on how much was owed and how late each quarterly payment was, even if you pay in full by the filing deadline." },
    { q: "Can I pay more than the calculated quarterly amount?", a: "Yes, paying more than required is allowed and simply results in a larger refund or smaller balance due at filing time." },
    { q: "How do I actually submit a quarterly payment?", a: "Most people use IRS Direct Pay, EFTPS, or mail a check with Form 1040-ES — this calculator estimates the amount, not the payment method." },
    { q: "Does a W-2 job eliminate the need for quarterly payments?", a: "Not necessarily — if your W-2 withholding alone doesn't cover your total tax liability including self-employment income, you may still owe quarterly payments." },
    { q: "Is this calculator accurate for a partial year of self-employment?", a: "It assumes a full year of the income entered; for a partial year, enter your expected income for that period and divide payments accordingly." },
    { q: "Is this a substitute for Form 1040-ES?", a: "No, it's a planning estimate — refer to IRS Form 1040-ES instructions or a tax professional for your official payment calculation." },
  ],

  relatedCalculators: ["Self-Employment Tax Calculator", "US Federal Tax Calculator", "Freelance Rate Calculator", "Net Profit Calculator", "Capital Gains Tax Calculator"],

    youMightAlsoLike: ["Freelancer Hourly Rate Calculator", "Business Valuation Calculator", "Invoice Due Date Calculator"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Quarterly Estimated Tax Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};