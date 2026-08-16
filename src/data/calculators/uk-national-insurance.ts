export const nationalInsuranceContent = {
  meta: {
    seoTitle: "National Insurance Calculator - UK Class 1 NI Contribution",
    metaDescription: "Calculate your UK National Insurance contribution from your gross annual salary. Free, instant Class 1 NI calculator with employee and employer breakdown.",
    canonicalSlug: "/finance/uk-national-insurance-calculator",
    ogTitle: "National Insurance Calculator - UK Class 1 NI",
    ogDescription: "Estimate your Class 1 National Insurance contribution, including employee and employer portions.",
    twitterTitle: "Free UK National Insurance Calculator",
    twitterDescription: "Calculate your Class 1 National Insurance contribution in seconds.",
  },
  hero: {
    text: "Estimate your UK Class 1 National Insurance contribution from your gross annual salary. See earnings above the threshold and both the employee and employer contribution amounts.",
  },
  about: {
    text: `National Insurance (NI) is a mandatory payroll deduction for most UK employees that funds the State Pension, NHS and other benefits.

This calculator estimates your Class 1 National Insurance contribution on earnings above the primary threshold, and shows the employer's secondary contribution separately.

Limitations: this tool covers standard Class 1 NI only. It doesn't cover reduced NI categories (such as the married women's reduced rate), self-employed Class 2/4 NI, or salary sacrifice arrangements that would lower your NI-able pay.`,
  },
  formula: {
    formula: "NI Contribution = max(0, Income − Primary Threshold) × NI Rate",
    variables: [
      { symbol: "Primary Threshold", meaning: "The annual earnings level above which employee NI applies" },
      { symbol: "NI Rate", meaning: "The employee Class 1 NI rate applied to earnings above the threshold" },
      { symbol: "Secondary Threshold", meaning: "A separate, typically lower threshold used for employer NI" },
    ],
    explanation: "Employee NI is calculated on earnings above the primary threshold. Employer NI is calculated separately, on earnings above the secondary threshold, at the employer rate.",
    interpretation: "For example, someone earning £35,000 a year has NI calculated on the portion of their salary above the primary threshold, with a separate employer contribution calculated above the secondary threshold.",
  },
  steps: [
    "Enter your gross annual salary.",
    "Click Calculate to run the tool.",
    "View your earnings above the primary threshold.",
    "Check your employee National Insurance contribution.",
    "See the employer's secondary contribution.",
    "Copy your results using the copy button.",
  ],
  examples: [
    { inputs: "Gross: £30,000", result: "Earnings above threshold, employee & employer NI", explanation: "Standard salaried employee above the primary threshold." },
    { inputs: "Gross: £55,000", result: "Higher NI contribution on earnings above threshold", explanation: "Higher earner example." },
    { inputs: "Gross: £20,000", result: "Lower NI contribution close to the threshold", explanation: "Entry-level salary example." },
  ],
  practicalUses: [
    "Understanding how much National Insurance is deducted from your pay",
    "Estimating employer payroll costs for a new hire",
    "Checking a payslip deduction against an independent estimate",
    "Comparing take-home pay across job offers",
    "Planning for a salary negotiation",
    "Understanding how NI contributes to State Pension eligibility",
  ],
  expertTips: [
    "The employee and employer thresholds differ — employer NI often starts at a lower earnings level.",
    "NI is usually calculated per pay period, not as a simple annual average — this tool gives an annualised estimate.",
    "Salary sacrifice arrangements (like pension contributions) reduce NI-able pay and aren't included here.",
    "Self-employed individuals pay Class 2 and Class 4 NI under different rules, not covered by this tool.",
    "Some employees qualify for reduced NI categories not covered by this standard-rate estimate.",
    "Recalculate whenever your salary or the NI rates and thresholds for the tax year change.",
  ],
  commonMistakes: [
    { mistake: "Assuming employee and employer NI use the same threshold", fix: "Employer NI typically starts at a lower secondary threshold than employee NI." },
    { mistake: "Ignoring salary sacrifice arrangements", fix: "Pension contributions via salary sacrifice reduce NI-able pay and aren't included in this estimate." },
    { mistake: "Using this for self-employed income", fix: "Self-employed NI (Class 2 and Class 4) follows different rules not covered by this calculator." },
    { mistake: "Using outdated thresholds or rates", fix: "Verify current HMRC figures for the applicable tax year before relying on results." },
  ],
  faq: [
    { q: "What is National Insurance?", a: "National Insurance is a mandatory UK payroll deduction that funds the State Pension, NHS and other state benefits." },
    { q: "How is my NI contribution calculated?", a: "Earnings above the primary threshold are multiplied by the employee NI rate to give your contribution." },
    { q: "Does NI apply to my entire salary?", a: "No, NI only applies to earnings above the primary threshold, not your full gross salary." },
    { q: "Who pays NI, the employee or employer?", a: "Both — employees pay Class 1 primary NI, and employers pay a separate secondary contribution above their own threshold." },
    { q: "Does this cover self-employed National Insurance?", a: "No, self-employed individuals pay Class 2 and Class 4 NI under different rules not covered here." },
    { q: "What are reduced NI categories?", a: "Some employees, such as those with certain historical elections, pay a reduced NI rate — this tool assumes the standard rate." },
    { q: "Does this tool store my salary information?", a: "No, all calculations run locally in your browser and no data is sent to a server." },
    { q: "Does salary sacrifice reduce my NI?", a: "Yes, arrangements like pension salary sacrifice reduce your NI-able pay, but this isn't factored into this basic estimate." },
    { q: "Why is the employer NI threshold different from mine?", a: "Employer (secondary) and employee (primary) NI use separate thresholds set independently by HMRC each tax year." },
    { q: "How does NI relate to my State Pension?", a: "Paying NI (or receiving qualifying credits) for enough years builds up entitlement to the UK State Pension." },
    { q: "Can I use this to compare job offers?", a: "Yes, run the calculator for each offer's gross salary to compare estimated NI deductions." },
    { q: "How accurate is this compared to my payslip?", a: "It should be close for standard Class 1 employment income, though payroll software calculates NI per pay period rather than annually." },
  ],
  relatedCalculators: ["UK Take-Home Pay Calculator", "CPP Calculator", "EI Calculator", "Canada Take-Home Pay Calculator", "US Take-Home Pay Calculator", "Salary Calculator"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "National Insurance Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};