import { pickYouMayLike } from "../calculator-pool";

export const medicareTaxCalculatorContent = {
  meta: {
    seoTitle: "Medicare Tax Calculator 2026 - Additional Medicare Tax Calculator",
    metaDescription: "Free Medicare tax calculator for 2026. Find your 1.45% regular Medicare tax plus 0.9% Additional Medicare Tax above IRS income thresholds.",
    canonicalSlug: "/medicare-tax-calculator",
    ogTitle: "Medicare Tax Calculator 2026",
    ogDescription: "Calculate your Medicare tax including the Additional Medicare Tax instantly.",
    twitterTitle: "Free Medicare Tax Calculator",
    twitterDescription: "See your 2026 Medicare tax with no wage cap, plus the 0.9% surtax.",
  },

  hero: {
    text: "The Medicare Tax Calculator finds your regular 1.45% Medicare tax (2.9% if self-employed) on all wages plus the 0.9% Additional Medicare Tax that applies above IRS income thresholds — with no wage cap unlike Social Security tax.",
  },

  about: {
    text: `Medicare tax funds hospital insurance and, unlike Social Security tax, has no wage base cap — it applies to 100% of your wages or self-employment income, no matter how high your earnings.

The standard rate is 1.45% for employees (matched by employers) or 2.9% total for self-employed individuals. Since 2013, an Additional Medicare Tax of 0.9% applies to wages above $200,000 (single/head of household), $250,000 (married filing jointly), or $125,000 (married filing separately).

Unlike the regular Medicare tax, the Additional Medicare Tax is not matched by employers — it's withheld only from the employee's portion once wages cross the threshold, regardless of the employee's actual filing status (employers withhold based on wages alone, not household income).

This can create a mismatch: a married employee earning $220,000 individually has Additional Medicare Tax withheld by their employer (over the $200,000 single threshold), even though the $250,000 MFJ household threshold hasn't been reached — reconciled at tax filing time.`,
  },

  formula: {
    formula: "Regular Medicare Tax = Wages × 1.45% (or 2.9% self-employed); Additional Medicare Tax = (Wages − Threshold) × 0.9%",
    variables: [
      { symbol: "Regular Rate", meaning: "1.45% employee (2.9% self-employed), no wage cap" },
      { symbol: "Additional Medicare Tax", meaning: "0.9% extra on wages above the filing-status threshold" },
      { symbol: "Thresholds (2026)", meaning: "$200,000 single/HOH, $250,000 MFJ, $125,000 MFS — unindexed for inflation" },
    ],
    explanation: "These income thresholds haven't been adjusted for inflation since they were introduced in 2013, meaning more taxpayers cross them each year as wages rise with inflation. Employers must withhold the Additional Medicare Tax once an employee's wages from that employer alone exceed $200,000, regardless of filing status.",
    interpretation: "For example, a self-employed single filer earning $250,000 pays 2.9% Medicare tax on all $250,000 ($7,250), plus 0.9% Additional Medicare Tax on the $50,000 above the $200,000 threshold ($450), for a total of $7,700.",
  },

  steps: [
    "Enter your annual wages or net self-employment income.",
    "Select your filing status to determine your Additional Medicare Tax threshold.",
    "Select whether you're an employee or self-employed.",
    "Click Calculate to see your total Medicare tax breakdown.",
  ],

  examples: [
    { inputs: "Wages: $150,000, Single, Employee", result: "Medicare Tax: $2,175 (1.45%, no additional)", explanation: "Below the $200,000 threshold, only the regular 1.45% rate applies." },
    { inputs: "Wages: $250,000, Single, Employee", result: "Medicare Tax: $3,625 + $450 additional = $4,075", explanation: "Wages above $200,000 trigger the extra 0.9% Additional Medicare Tax on the excess." },
    { inputs: "Net Earnings: $300,000, Self-Employed, MFJ", result: "Medicare Tax: $8,700 + $450 additional = $9,150", explanation: "Self-employed pay 2.9% base rate, with additional tax only on income above the $250,000 MFJ threshold." },
  ],

  practicalUses: [
    "Estimating total FICA tax burden for high-income employees or self-employed workers",
    "Planning quarterly estimated tax payments that include Additional Medicare Tax",
    "Understanding why Medicare tax withholding differs from expected if you changed jobs mid-year",
    "Reconciling Additional Medicare Tax owed vs withheld at tax filing (Form 8959)",
    "Comparing total payroll tax burden between W-2 employment and self-employment",
    "Financial planning for households near the $200k/$250k income thresholds",
  ],

  expertTips: [
    "The Additional Medicare Tax thresholds ($200k/$250k/$125k) are not inflation-indexed, so more taxpayers are affected by it each year as wages grow.",
    "Married couples where each spouse earns under $200,000 but combined income exceeds $250,000 MFJ may owe Additional Medicare Tax at filing time even though no employer withheld it.",
    "File Form 8959 to reconcile actual Additional Medicare Tax owed against what was withheld by employers.",
    "Self-employed individuals should include Additional Medicare Tax in quarterly estimated tax payments to avoid underpayment penalties.",
    "There's no employer match for the 0.9% Additional Medicare Tax, unlike the regular 1.45% rate.",
    "Net investment income above the same thresholds may also trigger a separate 3.8% Net Investment Income Tax (NIIT), calculated independently.",
  ],

  commonMistakes: [
    { mistake: "Assuming Medicare tax has a wage cap like Social Security", fix: "Medicare tax applies to all wages with no cap — only Social Security tax stops at the annual wage base." },
    { mistake: "Not accounting for household income when estimating Additional Medicare Tax", fix: "Employers withhold based on wages from that job alone — married couples should check combined household income against the $250,000 MFJ threshold." },
    { mistake: "Forgetting Additional Medicare Tax in self-employment quarterly payments", fix: "Include the full potential 0.9% surtax in quarterly estimates if self-employment income will exceed the threshold." },
    { mistake: "Confusing Additional Medicare Tax with Net Investment Income Tax", fix: "These are two separate 0.9%/3.8% surtaxes with similar thresholds — wages trigger one, investment income can trigger the other." },
  ],

  faq: [
    { q: "What is the Medicare tax rate for 2026?", a: "The regular Medicare tax rate is 1.45% for employees (2.9% total for self-employed), plus an Additional Medicare Tax of 0.9% above income thresholds." },
    { q: "Is there a wage cap on Medicare tax?", a: "No, unlike Social Security tax, Medicare tax applies to 100% of wages or self-employment income with no annual cap." },
    { q: "What is the Additional Medicare Tax threshold for 2026?", a: "The thresholds are $200,000 for single and head of household filers, $250,000 for married filing jointly, and $125,000 for married filing separately." },
    { q: "Do employers match the Additional Medicare Tax?", a: "No, the 0.9% Additional Medicare Tax is withheld only from the employee's wages and is not matched by the employer." },
    { q: "How much Medicare tax do self-employed people pay?", a: "Self-employed individuals pay 2.9% (combining employee and employer shares) on all net self-employment income, plus 0.9% above the applicable threshold." },
    { q: "Why did my employer withhold Additional Medicare Tax even though my spouse and I file jointly?", a: "Employers must withhold based on wages from that job alone once they exceed $200,000, regardless of your household filing status or combined income." },
    { q: "What is Form 8959?", a: "Form 8959 reconciles the Additional Medicare Tax actually owed based on your full tax return against what was withheld by employers during the year." },
    { q: "Are the Additional Medicare Tax thresholds adjusted for inflation?", a: "No, the $200,000/$250,000/$125,000 thresholds have remained unchanged since 2013 and are not indexed for inflation." },
    { q: "What is the difference between Medicare tax and the Net Investment Income Tax?", a: "Medicare tax and its 0.9% surtax apply to wages and self-employment income, while the separate 3.8% Net Investment Income Tax applies to investment income like dividends, interest, and capital gains." },
    { q: "Can I get a refund of overpaid Additional Medicare Tax?", a: "Yes, if too much was withheld relative to what you actually owe based on your full tax situation, the excess is refunded when you file Form 8959 with your return." },
    { q: "Does Medicare tax fund Medicare Part B premiums?", a: "No, the Medicare payroll tax primarily funds Medicare Part A (hospital insurance); Part B and D are funded differently through premiums and general revenue." },
    { q: "Do self-employed people get a deduction for Medicare tax?", a: "Yes, self-employed individuals can deduct half of their total self-employment tax (Social Security plus Medicare) as an above-the-line income tax deduction." },
    { q: "How is Medicare tax different from Social Security tax?", a: "Medicare tax has no wage cap and includes an additional 0.9% surtax for high earners, while Social Security tax stops entirely once wages exceed the annual wage base." },
    { q: "Does bonus or commission income count toward Medicare tax?", a: "Yes, all forms of wage compensation — including bonuses, commissions, and tips — are subject to Medicare tax with no exceptions." },
  ],

  relatedCalculators: ["Social Security Tax Calculator", "Effective Tax Rate Calculator", "Tax Bracket Calculator", "W-4 Calculator"],

  youMayLike: pickYouMayLike("medicare-tax-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Medicare Tax Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};