export const caTakeHomePayContent = {
  meta: {
    seoTitle: "Canada Take-Home Pay Calculator - Net Salary After Tax, CPP & EI",
    metaDescription: "Calculate your Canadian take-home pay after federal tax, provincial tax, CPP and EI. Free salary calculator for Ontario, Alberta and BC.",
    canonicalSlug: "/finance/ca-take-home-pay-calculator",
    ogTitle: "Canada Take-Home Pay Calculator",
    ogDescription: "See your net salary after federal tax, provincial tax, CPP and EI deductions.",
    twitterTitle: "Free Canada Salary Calculator",
    twitterDescription: "Calculate your net pay in Canada after tax, CPP and EI in seconds.",
  },
  hero: {
    text: "Estimate your net Canadian salary after federal tax, provincial tax, CPP and EI. Enter your gross annual income and province to see take-home pay broken down by month and pay period.",
  },
  about: {
    text: `This calculator estimates take-home pay for Canadian employees using federal and provincial income tax brackets plus CPP and EI payroll deductions.

It's useful for comparing job offers across provinces, budgeting, and understanding how tax and payroll deductions affect your paycheque.

Limitations: this tool covers Ontario, Alberta and British Columbia only. It does not account for pre-tax deductions like RRSP contributions, which would lower taxable income further, and uses a simplified single-filer assumption.`,
  },
  formula: {
    formula: "Net Pay = Gross Income − (Federal Tax + Provincial Tax + CPP + EI)",
    variables: [
      { symbol: "Federal Tax", meaning: "Tax owed under federal income tax brackets" },
      { symbol: "Provincial Tax", meaning: "Tax owed under your selected province's brackets" },
      { symbol: "CPP", meaning: "Canada Pension Plan contribution, capped at the yearly maximum" },
      { symbol: "EI", meaning: "Employment Insurance premium, capped at the annual maximum" },
    ],
    explanation: "Federal and provincial tax are each calculated progressively across their own brackets. CPP and EI are calculated up to their respective annual caps.",
    interpretation: "For example, someone earning $70,000 a year in Ontario sees deductions for federal tax, Ontario provincial tax, CPP and EI, leaving their net annual and monthly take-home pay.",
  },
  steps: [
    "Enter your gross annual income.",
    "Select your province (Ontario, Alberta or British Columbia).",
    "Click Calculate to run the tool.",
    "View the breakdown of federal tax, provincial tax, CPP and EI.",
    "Check net pay by month and biweekly period.",
    "Copy or share your results using the copy button.",
  ],
  examples: [
    { inputs: "Gross: $60,000, Ontario", result: "Net pay broken down by federal tax, ON tax, CPP and EI", explanation: "Standard salaried employee in Ontario." },
    { inputs: "Gross: $90,000, Alberta", result: "Net pay broken down by federal tax, AB tax, CPP and EI", explanation: "Higher earner in Alberta, no provincial sales tax consideration needed for payroll." },
    { inputs: "Gross: $50,000, British Columbia", result: "Net pay broken down by federal tax, BC tax, CPP and EI", explanation: "Entry-level salary example in BC." },
  ],
  practicalUses: [
    "Comparing job offers across different provinces",
    "Budgeting monthly expenses against real take-home pay",
    "Estimating pay after a raise or promotion",
    "Understanding how CPP and EI affect your paycheque",
    "Planning for a salary negotiation",
    "Checking take-home pay before relocating provinces",
  ],
  expertTips: [
    "Provincial tax rates differ meaningfully between Ontario, Alberta and BC — always select the right one.",
    "CPP contributions stop once you hit the annual maximum pensionable earnings.",
    "EI premiums are capped at the annual maximum insurable earnings.",
    "Pre-tax deductions like RRSP contributions reduce taxable income and are not included here.",
    "Self-employed individuals pay both portions of CPP and are exempt from EI unless opted in.",
    "Recalculate whenever your salary, province, or the tax year changes.",
  ],
  commonMistakes: [
    { mistake: "Selecting the wrong province", fix: "Provincial tax brackets vary significantly — double-check your selection before relying on results." },
    { mistake: "Forgetting CPP and EI both have annual caps", fix: "Contributions stop once the yearly maximums are reached, usually later in the year for high earners." },
    { mistake: "Ignoring RRSP or other pre-tax deductions", fix: "Those reduce taxable income further and are not included in this estimate." },
    { mistake: "Using outdated tax brackets", fix: "Verify brackets are current for the applicable tax year before relying on results." },
  ],
  faq: [
    { q: "How is Canadian take-home pay calculated?", a: "Take-home pay is gross income minus federal tax, provincial tax, CPP and EI, each calculated according to their own brackets and caps." },
    { q: "Which provinces does this calculator support?", a: "This calculator currently supports Ontario, Alberta and British Columbia." },
    { q: "What is CPP?", a: "CPP (Canada Pension Plan) is a mandatory payroll deduction that funds retirement, disability and survivor benefits." },
    { q: "What is EI?", a: "EI (Employment Insurance) is a payroll deduction that funds temporary income support for job loss, illness or parental leave." },
    { q: "Does CPP apply to all income?", a: "No, CPP only applies up to the annual maximum pensionable earnings, above a basic exemption amount." },
    { q: "Does EI have a cap?", a: "Yes, EI premiums are only deducted up to the annual maximum insurable earnings." },
    { q: "Does this include RRSP contributions?", a: "No, pre-tax RRSP contributions are not included and would reduce your taxable income further if made." },
    { q: "Can I use this to compare job offers between provinces?", a: "Yes, run the calculator once per province with the relevant gross salary to compare net pay directly." },
    { q: "Does this tool store my salary information?", a: "No, all calculations run locally in your browser and no data is sent to a server." },
    { q: "What filing status does this assume?", a: "This calculator uses a simplified single-filer estimate without additional credits or deductions." },
    { q: "Why is my CPP deduction lower late in the year?", a: "Once your year-to-date earnings exceed the CPP maximum, no further CPP is withheld for the rest of the year." },
    { q: "Is Quebec supported?", a: "No, Quebec uses a separate provincial tax system and QPP/QPIP instead of CPP/EI, which isn't covered by this tool." },
    { q: "Can this calculator show biweekly pay?", a: "Yes, net pay is also shown broken down by biweekly period alongside monthly and annual figures." },
  ],
  relatedCalculators: ["CPP Calculator", "EI Calculator", "US Take-Home Pay Calculator", "National Insurance Calculator", "Salary Calculator", "Payroll Calculator"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Canada Take-Home Pay Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};