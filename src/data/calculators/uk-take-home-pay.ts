export const ukTakeHomePayContent = {
  meta: {
    seoTitle: "UK Take-Home Pay Calculator - Salary After Tax & National Insurance",
    metaDescription: "Calculate your UK take-home pay after Income Tax and National Insurance. Free salary calculator with monthly, weekly and annual breakdown.",
    canonicalSlug: "/finance/uk-take-home-pay-calculator",
    ogTitle: "UK Take-Home Pay Calculator",
    ogDescription: "See your net salary after Income Tax and National Insurance deductions.",
    twitterTitle: "Free UK Salary Calculator",
    twitterDescription: "Calculate your net pay in the UK after Income Tax and NI in seconds.",
  },
  hero: {
    text: "Estimate your net UK salary after Income Tax and National Insurance. Enter your gross annual income to see take-home pay broken down by month, week and year.",
  },
  about: {
    text: `This calculator estimates UK take-home pay by applying Income Tax bands and Class 1 National Insurance contributions to your gross annual salary.

It's useful for comparing job offers, budgeting, and understanding how much of your salary reaches your bank account after statutory deductions.

Limitations: this tool provides estimates only, uses England/Wales/Northern Ireland rates, and does not include pension contributions, student loan repayments, or tax code adjustments. Scotland has separate Income Tax bands not covered here.`,
  },
  formula: {
    formula: "Net Pay = Gross Income − (Income Tax + National Insurance)",
    variables: [
      { symbol: "Income Tax", meaning: "Tax owed under UK Income Tax bands after the personal allowance" },
      { symbol: "National Insurance", meaning: "Class 1 NI contribution above the primary threshold" },
    ],
    explanation: "Income Tax is calculated progressively across tax bands after applying the personal allowance. National Insurance is calculated on earnings above the primary threshold at the applicable rate.",
    interpretation: "For example, someone earning £40,000 a year sees deductions for Income Tax and National Insurance, leaving their net annual and monthly take-home pay.",
  },
  steps: [
    "Enter your gross annual salary.",
    "Click Calculate to see your net pay.",
    "View the breakdown of Income Tax and National Insurance.",
    "Check net pay by month and week.",
  ],
  examples: [
    { inputs: "Gross: £30,000", result: "Net pay broken down by Income Tax and NI", explanation: "Standard entry to mid-level salary example." },
    { inputs: "Gross: £55,000", result: "Net pay broken down by Income Tax and NI", explanation: "Higher-rate taxpayer example." },
    { inputs: "Gross: £20,000", result: "Net pay broken down by Income Tax and NI", explanation: "Lower income example near the personal allowance threshold." },
  ],
  practicalUses: [
    "Comparing job offers with different gross salaries",
    "Budgeting monthly expenses against real take-home pay",
    "Estimating pay after a raise or promotion",
    "Understanding how National Insurance affects your paycheck",
    "Planning for a salary negotiation",
    "Checking net pay before accepting a new role",
  ],
  expertTips: [
    "The personal allowance reduces taxable income before tax bands apply.",
    "National Insurance is only charged above the primary threshold, not on your full salary.",
    "This tool does not include pension auto-enrolment deductions, which would reduce taxable pay further if made via salary sacrifice.",
    "Scotland uses separate Income Tax bands — this calculator uses England/Wales/NI rates.",
    "Student loan repayments are not included and would further reduce take-home pay if applicable.",
    "Recalculate whenever your salary or the tax year changes.",
  ],
  commonMistakes: [
    { mistake: "Assuming this applies to Scottish taxpayers", fix: "Scotland has separate Income Tax bands — results here use England/Wales/NI rates only." },
    { mistake: "Forgetting pension or student loan deductions", fix: "Add those separately — this tool covers Income Tax and NI only." },
    { mistake: "Using outdated tax bands", fix: "Verify Income Tax and NI thresholds are current for the applicable tax year." },
    { mistake: "Confusing gross and net salary in job offer comparisons", fix: "Always compare offers using net take-home pay, not gross figures." },
  ],
  faq: [
    { q: "How is UK take-home pay calculated?", a: "Take-home pay is gross salary minus Income Tax, calculated across tax bands after the personal allowance, and National Insurance above the primary threshold." },
    { q: "What is the personal allowance?", a: "The personal allowance is the amount of income you can earn before paying Income Tax, subject to income-based tapering at higher earnings." },
    { q: "What is National Insurance?", a: "National Insurance is a mandatory contribution that funds state benefits and pensions, deducted from earnings above a set threshold." },
    { q: "Does this calculator apply to Scotland?", a: "No, Scotland has separate Income Tax bands; this calculator uses England, Wales and Northern Ireland rates." },
    { q: "Does this include pension contributions?", a: "No, workplace pension contributions are not included and would reduce taxable income further if deducted via salary sacrifice." },
    { q: "Does this include student loan repayments?", a: "No, student loan repayments are calculated separately based on your specific repayment plan and are not included here." },
    { q: "Is this calculator accurate for self-employed income?", a: "No, self-employed individuals pay Income Tax and Class 2/4 National Insurance under different rules not covered by this tool." },
    { q: "Why is my National Insurance lower than expected?", a: "NI is only charged on earnings above the primary threshold, not your entire salary, which can make it lower than a flat percentage would suggest." },
    { q: "Can I use this to compare job offers?", a: "Yes, run the calculator for each offer's gross salary to compare net take-home pay directly." },
    { q: "Does this tool store my salary information?", a: "No, all calculations run locally in your browser and no data is sent to a server." },
    { q: "How accurate are the tax bands used?", a: "Band data should be verified against current HMRC figures for the applicable tax year; treat results as estimates." },
    { q: "What tax year does this use?", a: "The calculator uses the most recently reviewed tax year data — check the data source note for the effective date." },
    { q: "Does bonus income get taxed the same way?", a: "Employers often apply different withholding to bonuses; this tool is intended for regular annual salary estimates." },
    { q: "Can this calculator show weekly pay?", a: "Yes, net pay is also shown broken down by week alongside monthly and annual figures." },
  ],
  relatedCalculators: ["UK Salary Calculator", "National Insurance Calculator", "Income Tax Calculator", "Pension Calculator", "VAT Calculator", "Mortgage Calculator"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "UK Take-Home Pay Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};