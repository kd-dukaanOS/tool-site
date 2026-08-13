// src/data/calculators/salary-to-hourly.ts
export const salaryToHourlyCalculatorContent = {
  meta: {
    seoTitle: "Salary to Hourly Calculator - Convert Annual Salary to Hourly Rate",
    metaDescription: "Convert your annual salary into hourly, daily, weekly and monthly pay. Free salary to hourly calculator with formula, examples and common salary breakdowns.",
    canonicalSlug: "/salary-to-hourly-calculator",
    ogTitle: "Salary to Hourly Calculator - Annual Salary to Hourly Rate",
    ogDescription: "Instantly convert your annual salary into an hourly, daily, weekly and monthly rate.",
    twitterTitle: "Free Salary to Hourly Calculator",
    twitterDescription: "Convert annual salary to hourly rate instantly, free and accurate.",
  },

  hero: {
    text: "The Salary to Hourly Calculator instantly converts your annual salary into an hourly, daily, weekly and monthly rate. Use it to compare a salaried offer against hourly work, estimate the value of your time, or check your effective pay rate for overtime and side work. Anyone paid a fixed salary who wants to see their equivalent hourly rate can use this free tool.",
  },

  about: {
    text: `The Salary to Hourly Calculator is a free online tool that breaks down an annual salary into its equivalent hourly, daily, weekly and monthly pay rate.

It's useful for comparing a salaried job offer against hourly or freelance work, understanding the real value of your time, estimating pay for partial days off, and checking whether unpaid overtime is eroding your effective hourly rate.

The calculator lets you adjust hours per week and weeks worked per year, so results reflect your actual schedule rather than a fixed 9-to-5 assumption — important for salaried roles that regularly run longer hours.

Limitations: this tool calculates a gross (pre-tax) rate only — it doesn't account for taxes, benefits, or unpaid overtime hours actually worked beyond your stated schedule.

Use this tool to estimate an equivalent hourly rate for comparison purposes, not as a final payroll or tax figure.`,
  },

  formula: {
    formula: "Hourly Rate = (Annual Salary / Weeks per Year) / Hours per Week",
    variables: [
      { symbol: "Annual Salary", meaning: "Total yearly salary before tax" },
      { symbol: "Hours per Week", meaning: "Actual hours worked each week, including any regular overtime" },
      { symbol: "Weeks per Year", meaning: "Number of weeks actually worked in a year" },
    ],
    explanation: "Annual salary is divided by weeks worked per year to get a weekly rate, then divided by hours worked per week to get the hourly rate. Daily rate assumes a 5-day work week; monthly rate divides annual salary by 12.",
    interpretation: "For example, a $60,000 annual salary at 40 hours/week for 52 weeks equals roughly $28.85/hour — but if you actually work 50 hours/week, your true hourly rate drops to about $23.08.",
  },

  steps: [
    "Enter your annual salary before tax.",
    "Enter the actual hours you work per week, including any regular unpaid overtime.",
    "Enter the number of weeks you work per year (use 52 for no unpaid leave).",
    "Click Calculate to run the tool.",
    "View your equivalent hourly, daily, weekly and monthly rate.",
    "Copy the summary if you need to save or share it.",
  ],

  examples: [
    { inputs: "Salary: $52,000, 40 hrs/week, 52 weeks", result: "Hourly: $25.00, Daily: $200.00, Weekly: $1,000, Monthly: $4,333", explanation: "A standard full-time salary at a typical 40-hour week." },
    { inputs: "Salary: $60,000, 45 hrs/week, 52 weeks", result: "Hourly: $25.64, Daily: $230.77, Weekly: $1,154, Monthly: $5,000", explanation: "A higher salary but with regular 45-hour weeks lowers the true hourly rate versus a 40-hour assumption." },
    { inputs: "Salary: $45,000, 40 hrs/week, 50 weeks", result: "Hourly: $22.50, Daily: $180.00, Weekly: $900, Monthly: $3,750", explanation: "Two weeks of unpaid leave raises the effective weekly and hourly rate versus a full 52-week year." },
    { inputs: "Salary: $90,000, 50 hrs/week, 52 weeks", result: "Hourly: $34.62, Daily: $346.15, Weekly: $1,731, Monthly: $7,500", explanation: "A common scenario for salaried roles that regularly exceed a standard 40-hour week." },
  ],

  practicalUses: [
    "Comparing a salaried job offer against hourly or freelance pay",
    "Estimating the real value of your time, including unpaid overtime",
    "Checking your effective hourly rate if you regularly work extra hours",
    "Deciding whether to negotiate salary or hours in a job offer",
    "Calculating a fair freelance rate based on your previous salary",
    "Estimating pay for partial days taken as unpaid leave",
    "Comparing take-home value across job offers with different expected hours",
    "Understanding how much a raise is worth on an hourly basis",
    "Setting a personal minimum hourly rate for side projects or consulting",
  ],

  expertTips: [
    "If you regularly work more than your stated hours, your true hourly rate is lower than the standard 40-hour calculation.",
    "Use this alongside a benefits valuation when comparing a salaried offer to hourly or contract work.",
    "A higher salary with much longer hours can have a lower effective hourly rate than a lower salary with standard hours.",
    "This is a gross, pre-tax estimate — actual take-home pay per hour will be lower after taxes.",
    "Use your actual average hours over several months, not just a single busy week, for an accurate picture.",
    "When setting a freelance rate, add a premium over your salaried equivalent to cover lost benefits and instability.",
  ],

  commonMistakes: [
    { mistake: "Using a standard 40-hour week when you actually work more", fix: "Enter your real average weekly hours, including regular unpaid overtime, for an accurate hourly rate." },
    { mistake: "Assuming 52 full weeks with no unpaid time off", fix: "Reduce weeks per year to reflect actual unpaid leave or seasonal gaps in work." },
    { mistake: "Comparing this pre-tax hourly rate directly to a freelance quote without markup", fix: "Freelance rates should typically be higher than an equivalent salaried hourly rate to cover benefits, taxes and downtime." },
    { mistake: "Ignoring the value of benefits when comparing to hourly work", fix: "Factor in health insurance, paid leave and other benefits, not just the raw hourly number." },
  ],

  faq: [
    { q: "How do I convert salary to hourly pay?", a: "Divide your annual salary by the number of weeks you work per year to get a weekly rate, then divide that by your hours worked per week." },
    { q: "What is $52,000 a year hourly?", a: "At 40 hours per week for 52 weeks, $52,000 a year equals exactly $25.00 per hour before taxes." },
    { q: "What is $60,000 a year hourly?", a: "At 40 hours per week for 52 weeks, $60,000 a year equals approximately $28.85 per hour before taxes." },
    { q: "How many work hours are there in a year?", a: "A standard full-time work year has 2,080 hours, based on 40 hours per week for 52 weeks." },
    { q: "Does salary include overtime pay?", a: "No, a fixed salary typically doesn't include separate overtime pay, which is why working extra hours lowers your effective hourly rate." },
    { q: "Is this hourly rate before or after tax?", a: "This is a gross, pre-tax hourly rate. Your actual take-home hourly value will be lower after taxes and deductions." },
    { q: "How do I calculate my true hourly rate if I work unpaid overtime?", a: "Enter your actual average hours worked per week, not the contracted hours, to see your true effective hourly rate." },
    { q: "How is daily rate calculated from salary?", a: "Daily rate is estimated by dividing the weekly rate by 5, assuming a standard 5-day work week." },
    { q: "Why does my hourly rate change if I change weeks per year?", a: "Fewer weeks worked per year (due to unpaid leave) concentrates the same annual salary into fewer weeks, raising the weekly and hourly rate." },
    { q: "Should I use this to set my freelance hourly rate?", a: "Use it as a starting benchmark, then add a premium to account for lost benefits, inconsistent work, and self-employment taxes." },
    { q: "What's the difference between salary to hourly and hourly to salary calculators?", a: "This tool converts a known annual salary down to an hourly rate; the reverse calculator converts a known hourly rate up to an annual salary." },
    { q: "How accurate is this calculator for part-time salaried roles?", a: "It's accurate as long as you enter your real average hours per week — part-time salaried roles should use their actual contracted or worked hours, not a full 40." },
  ],

  relatedCalculators: ["Hourly to Salary Calculator", "Overtime Calculator", "Raise Calculator", "Bonus Calculator", "Freelancer Hourly Rate Calculator"],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Salary to Hourly Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};