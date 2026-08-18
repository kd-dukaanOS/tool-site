// src/data/calculators/hourly-to-salary.ts
export const hourlyToSalaryCalculatorContent = {
  meta: {
    seoTitle: "Hourly to Salary Calculator - Convert Hourly Rate to Annual Salary",
    metaDescription: "Convert your hourly rate into weekly, monthly and annual salary. Free hourly to salary calculator with formula and examples.",
    canonicalSlug: "/hourly-to-salary-calculator",
    ogTitle: "Hourly to Salary Calculator",
    ogDescription: "Instantly convert your hourly wage into weekly, monthly and yearly salary.",
    twitterTitle: "Free Hourly to Salary Calculator",
    twitterDescription: "Convert hourly pay to annual salary instantly, free and accurate.",
  },

  hero: {
    text: "The Hourly to Salary Calculator instantly converts your hourly rate into weekly, monthly and annual salary. Use it to compare a job offer's hourly wage against a salaried position, understand your true annual income, or negotiate pay. Anyone paid hourly and wanting to see their equivalent salary can use this free tool.",
  },

  about: {
    text: `The Hourly to Salary Calculator is a free online tool that converts an hourly wage into equivalent weekly, monthly and annual salary figures.

It's useful for comparing an hourly job offer against a salaried role, understanding your yearly income for budgeting, negotiating pay, or checking whether a rate meets a target annual income.

The calculator lets you adjust hours per week and weeks worked per year, so results reflect part-time schedules, overtime-heavy weeks, or unpaid time off, not just a standard full-time assumption.

Limitations: this tool calculates gross pay only — it doesn't account for taxes, deductions, benefits, or unpaid overtime, and results are pre-tax estimates.

Use this tool to estimate equivalent salary for comparison purposes, not as a final payroll or tax figure.`,
  },

  formula: {
    formula: "Weekly Salary = Hourly Rate × Hours per Week; Annual Salary = Weekly Salary × Weeks per Year",
    variables: [
      { symbol: "Hourly Rate", meaning: "Pay per hour worked" },
      { symbol: "Hours per Week", meaning: "Typical hours worked each week" },
      { symbol: "Weeks per Year", meaning: "Number of weeks actually worked in a year" },
    ],
    explanation: "Weekly salary is hourly rate multiplied by hours worked per week. Annual salary scales that weekly figure by the number of weeks actually worked, accounting for unpaid time off if applicable. Monthly salary divides annual salary by 12.",
    interpretation: "For example, a $25/hour rate at 40 hours/week for 52 weeks gives a $52,000 annual salary, or roughly $4,333/month.",
  },

  steps: [
    "Enter your hourly rate.",
    "Enter your typical hours worked per week.",
    "Enter the number of weeks you work per year (use 52 for full-time with no unpaid leave).",
    "Click Calculate to run the tool.",
    "View your equivalent weekly, monthly and annual salary.",
    "Copy the summary if you need to save or share it.",
  ],

  examples: [
    { inputs: "Rate: $25/hr, 40 hrs/week, 52 weeks", result: "Annual: $52,000, Monthly: $4,333, Weekly: $1,000", explanation: "A standard full-time schedule with no unpaid time off." },
    { inputs: "Rate: $18/hr, 30 hrs/week, 52 weeks", result: "Annual: $28,080, Monthly: $2,340, Weekly: $540", explanation: "A part-time schedule at 30 hours per week." },
    { inputs: "Rate: $40/hr, 40 hrs/week, 50 weeks", result: "Annual: $80,000, Monthly: $6,667, Weekly: $1,600", explanation: "Two weeks of unpaid leave reduces annual salary versus a full 52-week year." },
    { inputs: "Rate: $15/hr, 20 hrs/week, 52 weeks", result: "Annual: $15,600, Monthly: $1,300, Weekly: $300", explanation: "A student or side-job schedule at 20 hours per week." },
  ],

  practicalUses: [
    "Comparing an hourly job offer against a salaried position",
    "Understanding annual income for budgeting or loan applications",
    "Negotiating pay by converting between hourly and salary terms",
    "Checking if a part-time rate meets a target annual income",
    "Estimating income for freelance or contract work billed hourly",
    "Comparing multiple job offers with different pay structures",
    "Planning finances around a new hourly-rate job",
    "Verifying payroll calculations for hourly employees",
    "Setting a target hourly rate needed to reach a specific annual income goal",
    "Comparing your current hourly pay against last year's raise or promotion",
    "Estimating annual income before signing a gig or contract work agreement",
    "Preparing proof-of-income figures for a mortgage or loan application",
  ],

  expertTips: [
    "Use fewer than 52 weeks per year if you expect unpaid leave, seasonal work, or gaps in employment.",
    "Salaried positions often include benefits like paid leave and insurance — factor these in beyond raw salary comparison.",
    "Overtime pay (often 1.5x rate) isn't included here — calculate overtime hours separately if applicable.",
    "This is a gross (pre-tax) estimate — your actual take-home pay will be lower after taxes and deductions.",
    "When comparing offers, always convert to the same time period (annual is usually clearest) before comparing.",
    "Part-time schedules should use actual average hours, not a standard 40-hour assumption.",
    "Recalculate whenever your hourly rate or typical hours change — small rate changes compound significantly over a full year.",
    "If your hours fluctuate week to week, use a multi-week average rather than your busiest or slowest week.",
    "Factor in unpaid holidays or sick days separately from vacation weeks for a more accurate annual estimate.",
  ],

  commonMistakes: [
    { mistake: "Assuming 52 weeks per year for jobs with regular unpaid leave", fix: "Reduce weeks per year to reflect actual unpaid time off, like seasonal work or school breaks." },
    { mistake: "Comparing gross hourly pay directly to a salaried offer with benefits", fix: "Factor in the value of benefits like health insurance and paid leave when comparing total compensation." },
    { mistake: "Forgetting overtime pay is calculated separately", fix: "Add overtime hours and their higher rate using a dedicated overtime calculator." },
    { mistake: "Using inconsistent hours per week across comparisons", fix: "Use the same, realistic average hours per week when comparing multiple job offers." },
    { mistake: "Ignoring irregular or seasonal hours when estimating annual income", fix: "Use an average across the full year, including slow periods, rather than a peak-season week." },
    { mistake: "Treating the annual estimate as guaranteed income", fix: "Hourly income fluctuates with actual hours worked, so treat the result as an estimate, not a fixed salary." },
  ],

  faq: [
    { q: "How do I convert hourly pay to annual salary?", a: "Multiply your hourly rate by hours worked per week, then multiply that weekly figure by the number of weeks worked per year." },
    { q: "What is $25 an hour annually?", a: "At 40 hours per week for 52 weeks, $25 an hour equals approximately $52,000 per year before taxes." },
    { q: "How many hours are in a work year?", a: "A standard full-time work year is 2,080 hours, based on 40 hours per week for 52 weeks." },
    { q: "Does this include overtime pay?", a: "No, this calculator uses your regular hourly rate. Calculate overtime hours separately at their higher rate if applicable." },
    { q: "Is this gross or net salary?", a: "This is a gross (pre-tax) estimate. Actual take-home pay will be lower after taxes and any deductions." },
    { q: "How do I calculate salary for part-time hours?", a: "Enter your actual average hours per week — the calculator scales the annual figure accordingly for any part-time schedule." },
    { q: "What if I don't work all 52 weeks in a year?", a: "Reduce the 'weeks per year' input to reflect unpaid leave, seasonal gaps, or breaks in employment." },
    { q: "How is monthly salary calculated from annual salary?", a: "Annual salary is divided by 12 to estimate an average monthly figure, even though actual monthly pay may vary by pay schedule." },
    { q: "Why do salaried and hourly comparisons need more than just pay rate?", a: "Salaried roles often include paid leave, insurance and other benefits not reflected in a raw hourly-to-salary conversion." },
    { q: "What's a good hourly rate for a $60,000 annual salary?", a: "At 40 hours per week for 52 weeks, $60,000 annually equals approximately $28.85 per hour." },
    { q: "What is $20 an hour annually?", a: "At 40 hours per week for 52 weeks, $20 an hour equals approximately $41,600 per year before taxes." },
    { q: "What is $30 an hour annually?", a: "At 40 hours per week for 52 weeks, $30 an hour equals approximately $62,400 per year before taxes." },
    { q: "How do I calculate weekly pay from an hourly rate?", a: "Multiply your hourly rate by the number of hours you actually worked that week." },
    { q: "Does this calculator account for shift differentials or bonuses?", a: "No, it uses your base hourly rate only — add shift differentials or bonuses separately for a full income picture." },
    { q: "How do I estimate annual income if my hours vary week to week?", a: "Use your average weekly hours over several months rather than a single unusually busy or slow week." },
    { q: "Is hourly-to-salary conversion useful for gig or contract work?", a: "Yes, it's a useful way to compare gig or contract pay against a salaried equivalent, though gig work typically lacks benefits like paid leave." },
    { q: "What's the difference between this and a paycheck calculator?", a: "This tool estimates your gross annual salary equivalent, while a paycheck calculator computes actual take-home pay after taxes and deductions for a specific pay period." },
  ],

  relatedCalculators: ["Salary to Hourly Calculator", "Overtime Calculator", "Raise Calculator", "Bonus Calculator", "Freelancer Hourly Rate Calculator"],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Hourly to Salary Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};