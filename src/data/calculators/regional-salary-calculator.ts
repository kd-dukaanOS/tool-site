// src/data/tool-content/regional-salary-calculator.ts
export const regionalSalaryCalculatorContent = {
  meta: {
    seoTitle: "Regional Salary Calculator - Convert Hourly to Annual Pay (US, UK, CA)",
    metaDescription: "Convert your pay between hourly, daily, weekly, biweekly, monthly and annual salary in USD, GBP or CAD. Free regional salary calculator for US, UK and Canada.",
    canonicalSlug: "/career/regional-salary-calculator",
    ogTitle: "Regional Salary Calculator - Hourly to Annual Conversion",
    ogDescription: "Instantly convert your pay rate between hourly, weekly, monthly and annual figures in your local currency.",
    twitterTitle: "Free Regional Salary Calculator",
    twitterDescription: "Convert hourly pay to annual salary, or annual salary to hourly, in USD, GBP or CAD.",
  },

  hero: {
    text: "The Regional Salary Calculator converts your pay between hourly, daily, weekly, biweekly, monthly and annual figures in your local currency. Enter either your hourly rate or annual salary along with your typical hours per week to see the full breakdown instantly.",
  },

  about: {
    text: `This calculator converts a pay rate between different time periods — hourly, daily, weekly, biweekly, monthly and annual — using your typical working hours per week and weeks worked per year, displayed in your regional currency.

It's useful for comparing job offers quoted in different formats (e.g. an hourly contract role versus an annual salaried role) across US, UK or Canadian listings, budgeting, or understanding what an advertised salary actually means per hour.

This tool performs a gross pay conversion only. For your actual take-home pay after tax, use the country-specific Take-Home Pay Calculator for the US, UK or Canada.

Limitations: this assumes a consistent number of hours per week and weeks worked per year. It does not account for unpaid overtime, irregular schedules, unpaid leave, or currency exchange rate fluctuations.`,
  },

  formula: {
    formula: "Annual Salary = Hourly Rate × Hours per Week × Weeks per Year",
    variables: [
      { symbol: "Hourly Rate", meaning: "Pay per hour worked, in your selected currency" },
      { symbol: "Hours per Week", meaning: "Typical number of hours worked weekly" },
      { symbol: "Weeks per Year", meaning: "Number of weeks worked per year, usually 52" },
    ],
    explanation: "Annual salary is derived by multiplying the hourly rate by weekly hours and weeks per year. All other periods (daily, weekly, biweekly, monthly) are derived from this same annual figure.",
    interpretation: "For example, $25/hour at 40 hours/week and 52 weeks/year equals an annual salary of $52,000, or roughly $4,333/month.",
  },

  steps: [
    "Choose whether you're entering an hourly rate or an annual salary.",
    "Enter the amount in your local currency.",
    "Enter your typical hours worked per week (default 40).",
    "Enter weeks worked per year if different from 52 (e.g. for unpaid time off).",
    "Click Calculate to see the full pay breakdown.",
    "Copy the summary for comparing job offers.",
  ],

  examples: [
    { inputs: "Hourly: $25, Hours/week: 40, Weeks/year: 52", result: "Annual: $52,000, Monthly: $4,333", explanation: "Standard full-time hourly-to-annual conversion." },
    { inputs: "Annual: £45,000, Hours/week: 40, Weeks/year: 52", result: "Hourly: £21.63, Weekly: £865", explanation: "UK salaried role converted down to an hourly equivalent." },
    { inputs: "Annual: CA$75,000, Hours/week: 40, Weeks/year: 52", result: "Hourly: CA$36.06, Weekly: CA$1,442", explanation: "Canadian salaried role converted to hourly." },
    { inputs: "Hourly: $18, Hours/week: 30, Weeks/year: 50", result: "Annual: $27,000", explanation: "Part-time role with reduced hours and unpaid time off." },
  ],

  practicalUses: [
    "Comparing a job offer quoted hourly against one quoted annually",
    "Comparing job listings across US, UK and Canadian job boards in one view",
    "Understanding your effective hourly rate from a salaried position",
    "Budgeting monthly expenses from an hourly wage",
    "Negotiating pay by converting between formats",
    "Estimating pay for part-time or reduced-hours roles",
    "Freelancers converting a target annual income into an hourly rate",
    "Checking if a raise meaningfully changes your hourly equivalent",
  ],

  expertTips: [
    "Use 52 weeks per year unless you know your role has consistent unpaid time off.",
    "This is gross pay — use a take-home pay calculator for your specific country to see net income after tax.",
    "Overtime pay is not included; add it separately if applicable.",
    "When comparing offers across countries, remember currency shown here does not account for cost of living or exchange rate movement.",
    "Freelancers should build in unpaid admin time when converting a target salary to an hourly rate.",
    "Part-time roles should adjust hours per week rather than assuming a full 40.",
    "Recalculate whenever your hours, rate or schedule changes.",
  ],

  commonMistakes: [
    { mistake: "Assuming 52 working weeks with no unpaid leave", fix: "Adjust weeks per year if you take unpaid time off or work a reduced schedule." },
    { mistake: "Comparing gross hourly to net annual figures", fix: "Keep comparisons consistent — both gross or both net, using a take-home pay calculator for net figures." },
    { mistake: "Ignoring overtime in hourly-to-annual conversions", fix: "Add overtime pay separately; this tool assumes a flat rate for all hours entered." },
    { mistake: "Comparing figures across currencies without converting", fix: "Convert to a single currency at the current exchange rate before comparing offers from different countries." },
    { mistake: "Using average hours instead of typical hours", fix: "Use your standard scheduled hours per week for the most accurate conversion." },
  ],

  faq: [
    { q: "How do I convert an hourly rate to an annual salary?", a: "Multiply your hourly rate by your typical hours worked per week, then by the number of weeks worked per year." },
    { q: "How do I convert an annual salary to an hourly rate?", a: "Divide your annual salary by the total hours worked per year (hours per week × weeks per year)." },
    { q: "What weeks-per-year figure should I use?", a: "Use 52 for a standard full-time year; reduce it if you take significant unpaid leave." },
    { q: "Does this calculator show take-home pay?", a: "No, this shows gross pay conversions only. Use the country-specific Take-Home Pay Calculator for net pay after tax." },
    { q: "Which currencies does this calculator support?", a: "USD, GBP and CAD, so it works for US, UK and Canadian pay figures." },
    { q: "How is monthly salary calculated from annual?", a: "Monthly salary is simply annual salary divided by 12, regardless of how many weeks are in each calendar month." },
    { q: "What's the difference between weekly and biweekly pay?", a: "Biweekly pay is paid every two weeks (26 pay periods a year), while weekly pay is paid every week (52 pay periods a year) — the annual total is the same either way." },
    { q: "Does this include overtime pay?", a: "No, this tool assumes a flat rate for all hours entered; add overtime separately if it applies to your situation." },
    { q: "Can I use this for part-time work?", a: "Yes, enter your actual part-time hours per week instead of the default 40 for an accurate conversion." },
    { q: "How do freelancers use this calculator?", a: "Enter a target annual income and estimated billable hours per week to find the hourly rate needed to reach that goal." },
    { q: "Why is my hourly rate lower than expected when converting from salary?", a: "If actual hours worked exceed the hours entered (e.g. unpaid overtime), the true effective hourly rate will be lower than shown." },
    { q: "Does this tool store my salary information?", a: "No, all calculations run locally in your browser and no data is sent to a server." },
    { q: "How accurate is the daily rate shown?", a: "Daily rate is estimated by dividing weekly pay across a 5-day work week; adjust manually if you work a different number of days." },
    { q: "Should I use gross or net salary when comparing job offers?", a: "Compare net (take-home) pay when possible, since tax treatment differs significantly between the US, UK and Canada." },
  ],

  relatedCalculators: ["US Take-Home Pay Calculator", "UK Take-Home Pay Calculator", "Canada Take-Home Pay Calculator", "Overtime Calculator", "Raise Calculator", "Freelancer Hourly Rate Calculator"],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Regional Salary Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};