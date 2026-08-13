export const eiCalculatorContent = {
  meta: {
    seoTitle: "EI Calculator - Employment Insurance Premium Estimate",
    metaDescription: "Calculate your Employment Insurance (EI) premium from your gross annual income. Free, instant EI calculator with employee and employer breakdown.",
    canonicalSlug: "/finance/ei-calculator",
    ogTitle: "EI Calculator - Employment Insurance Premium",
    ogDescription: "Estimate your EI premium, including employee and employer portions.",
    twitterTitle: "Free EI Calculator",
    twitterDescription: "Calculate your Employment Insurance premium in seconds.",
  },
  hero: {
    text: "Estimate your Employment Insurance (EI) premium from your gross annual income. See insurable earnings and both the employee and employer contribution amounts.",
  },
  about: {
    text: `EI (Employment Insurance) is a mandatory payroll deduction for most Canadian employees that funds temporary income support for job loss, illness or parental leave.

This calculator estimates your EI premium capped at the maximum insurable earnings, and shows both the employee premium and the employer's contribution (employers pay 1.4 times the employee rate).

Limitations: Quebec uses a separate, lower EI rate combined with QPIP (Quebec Parental Insurance Plan), which isn't covered by this tool.`,
  },
  formula: {
    formula: "EI Premium = min(Income, Maximum Insurable Earnings) × EI Rate",
    variables: [
      { symbol: "Maximum Insurable Earnings", meaning: "The annual cap on income subject to EI premiums" },
      { symbol: "EI Rate", meaning: "The employee premium rate applied to insurable earnings" },
      { symbol: "Employer Rate", meaning: "Employers pay 1.4 times the employee premium rate" },
    ],
    explanation: "Insurable earnings are your income capped at the maximum insurable earnings. EI is then calculated on that amount for the employee, with the employer paying 1.4 times that rate.",
    interpretation: "For example, someone earning $55,000 a year has EI calculated on their full income since it's under the annual maximum, with the employer contributing 1.4 times the employee amount.",
  },
  steps: [
    "Enter your gross annual income.",
    "Click Calculate to run the tool.",
    "View your insurable earnings for the year.",
    "Check your employee and employer EI premiums.",
    "See the total combined premium.",
    "Copy your results using the copy button.",
  ],
  examples: [
    { inputs: "Gross: $45,000", result: "Insurable earnings, employee & employer EI premium", explanation: "Standard salaried employee below the maximum insurable earnings." },
    { inputs: "Gross: $75,000", result: "Insurable earnings capped at the annual maximum", explanation: "Higher earner, EI capped once insurable earnings hit the yearly maximum." },
    { inputs: "Gross: $30,000", result: "Lower EI premium on full income", explanation: "Entry-level salary example, fully insurable." },
  ],
  practicalUses: [
    "Understanding how much EI is deducted from your paycheque",
    "Estimating employer payroll costs for a new hire",
    "Checking a pay stub deduction against an independent estimate",
    "Comparing take-home pay across job offers",
    "Budgeting for a parental leave or job transition",
    "Planning for freelance or contract-to-employee transitions",
  ],
  expertTips: [
    "EI premiums stop once your year-to-date insurable earnings hit the annual maximum.",
    "Employers pay 1.4 times the employee EI rate, not a matched amount like CPP.",
    "Self-employed individuals are generally exempt from EI unless they opt in for special benefits.",
    "Quebec residents pay a lower federal EI rate combined with a separate QPIP premium.",
    "Recalculate whenever your salary or the EI rate for the tax year changes.",
    "EI premiums fund benefits like job loss, sickness and parental leave support.",
  ],
  commonMistakes: [
    { mistake: "Assuming employer and employee pay the same EI rate", fix: "Employers pay 1.4 times the employee rate, not a 1:1 match like CPP." },
    { mistake: "Ignoring the annual insurable earnings cap", fix: "EI premiums stop once your earnings reach the yearly maximum insurable earnings." },
    { mistake: "Using the standard rate for Quebec residents", fix: "Quebec has a separate, lower EI rate combined with QPIP — not covered by this tool." },
    { mistake: "Using outdated maximum insurable earnings or rate figures", fix: "Verify the current year's figures before relying on results." },
  ],
  faq: [
    { q: "What is EI?", a: "EI (Employment Insurance) is a mandatory payroll deduction that funds temporary income support for job loss, illness or parental leave." },
    { q: "How is my EI premium calculated?", a: "Your income is capped at the maximum insurable earnings, and the EI rate is applied to that amount." },
    { q: "Does EI apply to my entire salary?", a: "Only up to the annual maximum insurable earnings — income above that cap isn't subject to EI premiums." },
    { q: "Who pays EI, the employee or employer?", a: "Both — employers pay 1.4 times the employee's EI premium." },
    { q: "Do self-employed people pay EI?", a: "Generally no, unless they voluntarily opt in to access special benefits like parental leave." },
    { q: "Is EI the same in Quebec?", a: "No, Quebec has a lower federal EI rate combined with a separate QPIP (Quebec Parental Insurance Plan) premium." },
    { q: "Does this tool store my income information?", a: "No, all calculations run locally in your browser and no data is sent to a server." },
    { q: "Why did my EI deductions stop partway through the year?", a: "Once your year-to-date insurable earnings reach the annual maximum, no further EI is withheld for the rest of the year." },
    { q: "What's the difference between EI and CPP?", a: "EI funds temporary income support for job loss or leave, while CPP funds retirement, disability and survivor benefits." },
    { q: "What benefits does EI fund?", a: "EI funds benefits including regular job-loss benefits, sickness benefits, and maternity/parental leave benefits." },
    { q: "How accurate is this estimate compared to my pay stub?", a: "It should be close for standard employment income outside Quebec, assuming current-year rates are used." },
    { q: "Can I use this to estimate employer payroll costs?", a: "Yes, the employer contribution shown (1.4x the employee premium) reflects the employer's cost per employee." },
  ],
  relatedCalculators: ["CPP Calculator", "Canada Take-Home Pay Calculator", "Salary Calculator", "Payroll Calculator", "US Take-Home Pay Calculator", "National Insurance Calculator"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "EI Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};