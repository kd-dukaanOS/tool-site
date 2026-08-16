export const cppCalculatorContent = {
  meta: {
    seoTitle: "CPP Calculator - Canada Pension Plan Contribution Estimate",
    metaDescription: "Calculate your Canada Pension Plan (CPP) contribution from your gross annual income. Free, instant CPP calculator with employee and employer breakdown.",
    canonicalSlug: "/finance/cpp-calculator",
    ogTitle: "CPP Calculator - Canada Pension Plan Contribution",
    ogDescription: "Estimate your CPP contribution, including employee and employer portions.",
    twitterTitle: "Free CPP Calculator",
    twitterDescription: "Calculate your Canada Pension Plan contribution in seconds.",
  },
  hero: {
    text: "Estimate your Canada Pension Plan (CPP) contribution from your gross annual income. See pensionable earnings and both the employee and employer contribution amounts.",
  },
  about: {
    text: `CPP (Canada Pension Plan) is a mandatory payroll deduction for most Canadian employees that funds retirement, disability and survivor benefits.

This calculator estimates your CPP contribution after the basic exemption, capped at the yearly maximum pensionable earnings, and shows both the employee and employer portions (employers match the employee contribution).

Limitations: this estimate excludes CPP2 (the additional second-tier contribution introduced for higher earners) and assumes standard employment — self-employed individuals pay both portions themselves under different rules.`,
  },
  formula: {
    formula: "CPP Contribution = (min(Income, YMPE) − Basic Exemption) × CPP Rate",
    variables: [
      { symbol: "YMPE", meaning: "Year's Maximum Pensionable Earnings — the annual cap on pensionable income" },
      { symbol: "Basic Exemption", meaning: "A fixed annual amount excluded before CPP applies" },
      { symbol: "CPP Rate", meaning: "The employee contribution rate applied to pensionable earnings" },
    ],
    explanation: "Pensionable earnings are your income capped at the YMPE, minus the basic exemption. CPP is then calculated on that amount, with the employer matching the employee's contribution.",
    interpretation: "For example, someone earning $65,000 a year has CPP calculated on their pensionable earnings after the exemption, with equal employee and employer contributions.",
  },
  steps: [
    "Enter your gross annual income.",
    "Click Calculate to run the tool.",
    "View your pensionable earnings after the basic exemption.",
    "Check your employee and employer CPP contributions.",
    "See the total combined contribution.",
    "Copy your results using the copy button.",
  ],
  examples: [
    { inputs: "Gross: $50,000", result: "Pensionable earnings, employee & employer CPP contribution", explanation: "Standard salaried employee below the YMPE." },
    { inputs: "Gross: $80,000", result: "Pensionable earnings capped at YMPE", explanation: "Higher earner, CPP capped once pensionable earnings hit the yearly maximum." },
    { inputs: "Gross: $35,000", result: "Lower pensionable earnings after exemption", explanation: "Entry-level salary example showing the effect of the basic exemption." },
  ],
  practicalUses: [
    "Understanding how much CPP is deducted from your paycheque",
    "Estimating employer payroll costs for a new hire",
    "Planning retirement contributions and expected benefits",
    "Comparing take-home pay across job offers",
    "Checking a pay stub deduction against an independent estimate",
    "Budgeting for freelance or contract-to-employee transitions",
  ],
  expertTips: [
    "CPP contributions stop once your year-to-date pensionable earnings hit the annual maximum.",
    "The basic exemption is applied once per year, not per pay period, though payroll systems typically prorate it.",
    "Employers match your CPP contribution dollar-for-dollar.",
    "This estimate excludes CPP2, an additional contribution tier for earnings above the YMPE.",
    "Self-employed individuals pay both the employee and employer portions themselves.",
    "Recalculate whenever your salary or the CPP rate for the tax year changes.",
  ],
  commonMistakes: [
    { mistake: "Forgetting the basic exemption", fix: "CPP only applies to earnings above the basic exemption amount, not your full income." },
    { mistake: "Assuming CPP applies to all income with no cap", fix: "Contributions stop once pensionable earnings reach the yearly maximum (YMPE)." },
    { mistake: "Ignoring CPP2 for higher earners", fix: "This tool doesn't include the additional CPP2 tier — treat results as a base estimate." },
    { mistake: "Using outdated YMPE or rate figures", fix: "Verify the current year's YMPE and contribution rate before relying on results." },
  ],
  faq: [
    { q: "What is CPP?", a: "CPP (Canada Pension Plan) is a mandatory payroll deduction that funds retirement, disability and survivor benefits for most Canadian workers." },
    { q: "How is my CPP contribution calculated?", a: "Your income is capped at the yearly maximum pensionable earnings, the basic exemption is subtracted, and the CPP rate is applied to the result." },
    { q: "Does CPP apply to my entire salary?", a: "No, CPP only applies to earnings between the basic exemption and the yearly maximum pensionable earnings." },
    { q: "Who pays CPP, the employee or employer?", a: "Both — employers match the employee's CPP contribution dollar-for-dollar." },
    { q: "What is CPP2?", a: "CPP2 is an additional CPP contribution tier on earnings above the YMPE up to a second, higher ceiling, not included in this estimate." },
    { q: "Do self-employed people pay CPP?", a: "Yes, but self-employed individuals pay both the employee and employer portions themselves." },
    { q: "Does this tool store my income information?", a: "No, all calculations run locally in your browser and no data is sent to a server." },
    { q: "Why did my CPP deductions stop partway through the year?", a: "Once your year-to-date pensionable earnings reach the annual maximum, no further CPP is withheld for the rest of the year." },
    { q: "Is CPP the same across all provinces?", a: "Yes, except Quebec, which has its own separate plan called QPP (Quebec Pension Plan)." },
    { q: "What's the difference between CPP and EI?", a: "CPP funds retirement and disability benefits, while EI funds temporary income support for job loss, illness or parental leave." },
    { q: "Does this calculator account for the basic exemption correctly?", a: "Yes, the basic exemption is subtracted from your capped income before the CPP rate is applied." },
    { q: "How accurate is this estimate compared to my pay stub?", a: "It should be close for standard employment income, but payroll systems may prorate the exemption differently per pay period." },
  ],
  relatedCalculators: ["EI Calculator", "Canada Take-Home Pay Calculator", "Salary Calculator", "Payroll Calculator", "US Take-Home Pay Calculator", "National Insurance Calculator"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "CPP Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};