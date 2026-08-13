// src/data/calculators/freelancer-rate.ts
export const freelancerRateCalculatorContent = {
  meta: {
    seoTitle: "Freelancer Hourly Rate Calculator - Set Your Rate the Right Way",
    metaDescription: "Calculate the hourly rate you need to charge as a freelancer to hit your income goal, after business expenses and taxes. Free freelance rate calculator.",
    canonicalSlug: "/freelancer-hourly-rate-calculator",
    ogTitle: "Freelancer Hourly Rate Calculator",
    ogDescription: "Instantly calculate the hourly rate you need to charge clients to hit your income goal.",
    twitterTitle: "Free Freelancer Rate Calculator",
    twitterDescription: "Calculate your ideal freelance hourly rate instantly, free and accurate.",
  },

  hero: {
    text: "The Freelancer Hourly Rate Calculator instantly finds the hourly rate you need to charge clients to hit your desired income, after accounting for business expenses, taxes, and realistic billable hours. Use it to price your services correctly instead of guessing. Anyone freelancing, consulting, or considering going independent can use this free tool.",
  },

  about: {
    text: `The Freelancer Hourly Rate Calculator is a free online tool that works backward from your desired annual income to find the hourly rate you actually need to charge clients.

Unlike a simple salary-to-hourly conversion, this tool accounts for the realities of freelancing: not all hours worked are billable (time goes to admin, marketing and finding clients), business expenses reduce take-home income, and self-employment taxes are typically higher than employee payroll taxes.

It's useful for new freelancers setting their first rate, established freelancers checking whether their current rate still meets their goals, and anyone transitioning from salaried employment to independent work.

The calculator distinguishes billable hours from total working hours — a common mistake is pricing based on a full 40-hour week, when realistically only a portion of those hours can be billed to clients.

Limitations: this tool uses the tax rate and expense figures you provide as estimates — actual self-employment tax rules vary by country and income level, and it doesn't account for irregular income timing or client payment delays.

Use this tool to set an informed starting rate, not as a substitute for a full financial or tax plan.`,
  },

  formula: {
    formula: "Hourly Rate = [(Desired Income + Expenses) / (1 − Tax Rate)] / (Billable Hours/Week × Weeks/Year)",
    variables: [
      { symbol: "Desired Income", meaning: "Target annual take-home income" },
      { symbol: "Expenses", meaning: "Annual business costs (software, equipment, insurance)" },
      { symbol: "Tax Rate", meaning: "Estimated income and self-employment tax rate" },
      { symbol: "Billable Hours", meaning: "Hours per week actually billed to clients, not total hours worked" },
    ],
    explanation: "The calculator first adds desired income and expenses to find total revenue needed, then grosses that up for taxes, and finally divides by realistic annual billable hours — not total working hours — to find the true hourly rate required.",
    interpretation: "For example, wanting $60,000 with $5,000 expenses, a 25% tax rate, 25 billable hours/week over 48 weeks requires roughly $72.22/hour — notably higher than a naive salary/2000-hours calculation.",
  },

  steps: [
    "Enter your desired annual take-home income.",
    "Enter your estimated annual business expenses.",
    "Enter your realistic billable hours per week — not total hours worked.",
    "Enter the weeks you'll actually work per year, after time off.",
    "Enter your estimated tax rate (income tax plus self-employment tax where applicable).",
    "Click Calculate to run the tool.",
    "View your required hourly rate, daily rate, and total billable hours.",
    "Copy the summary if you need to save or reference it.",
  ],

  examples: [
    { inputs: "Income: $60,000, Expenses: $5,000, 25 hrs/wk, 48 wks, Tax: 25%", result: "Hourly Rate: ≈$72.22", explanation: "A common starting point for a full-time freelancer with realistic billable hours." },
    { inputs: "Income: $80,000, Expenses: $8,000, 20 hrs/wk, 46 wks, Tax: 28%", result: "Hourly Rate: ≈$133.71", explanation: "Fewer billable hours per week requires a substantially higher rate to hit the same income goal." },
    { inputs: "Income: $40,000, Expenses: $2,000, 30 hrs/wk, 50 wks, Tax: 20%", result: "Hourly Rate: ≈$35.00", explanation: "More billable hours per week allows a lower rate for the same target income." },
    { inputs: "Income: $100,000, Expenses: $10,000, 25 hrs/wk, 44 wks, Tax: 30%", result: "Hourly Rate: ≈$160.75", explanation: "Higher income goals and taxes push the required rate up significantly." },
  ],

  practicalUses: [
    "Setting your first freelance hourly rate from scratch",
    "Checking whether your current rate still meets your income goals",
    "Deciding how to price a project quote based on required hourly rate",
    "Comparing freelance income potential against a salaried job offer",
    "Planning for known upcoming expenses like new equipment",
    "Adjusting your rate after taking on fewer billable hours",
    "Evaluating whether to raise rates for existing clients",
    "Estimating rates before transitioning from full-time employment to freelancing",
  ],

  expertTips: [
    "Billable hours are almost always lower than total hours worked — admin, marketing and client acquisition all take non-billable time.",
    "Self-employment tax is typically higher than employee payroll tax since you cover both employer and employee portions.",
    "Build a buffer into your expense estimate for irregular costs like software renewals or equipment replacement.",
    "Revisit this calculation annually, or whenever your expenses, target income, or realistic billable hours change.",
    "A lower billable-hours estimate isn't pessimistic — it's usually more accurate than assuming a full 40-hour billable week.",
    "Consider client payment delays separately — this calculator assumes income arrives steadily across the year.",
  ],

  commonMistakes: [
    { mistake: "Using total working hours instead of billable hours", fix: "Only count hours actually billed to clients — time spent on admin, marketing and proposals isn't billable." },
    { mistake: "Ignoring self-employment tax when estimating tax rate", fix: "Include both income tax and self-employment tax in your estimated rate, since freelancers typically owe more than salaried employees." },
    { mistake: "Forgetting business expenses in the target income calculation", fix: "Add software, equipment, insurance and other business costs — they must be covered by your rate, not just personal income." },
    { mistake: "Assuming 52 full working weeks with no time off", fix: "Use a realistic weeks-per-year figure that accounts for holidays, sick days, and slow periods." },
    { mistake: "Setting a rate once and never revisiting it", fix: "Recalculate periodically as your expenses, goals, or realistic billable capacity change." },
  ],

  faq: [
    { q: "How do I calculate my freelance hourly rate?", a: "Add your desired annual income to your business expenses, gross that up for taxes, then divide by your realistic annual billable hours (not total hours worked)." },
    { q: "What's the difference between billable hours and total working hours?", a: "Billable hours are time actually charged to clients, while total working hours include unpaid time spent on admin, marketing, and finding new clients." },
    { q: "How many hours per week are typically billable for freelancers?", a: "Many freelancers can only bill 20–30 hours per week even when working full-time, since the rest goes to non-billable business tasks." },
    { q: "Why is my calculated freelance rate higher than my old salary divided by hours?", a: "Freelance rates must cover business expenses, higher self-employment taxes, and non-billable time — all absent from a simple salary-to-hourly conversion." },
    { q: "Should I include software and equipment costs in my rate calculation?", a: "Yes, any recurring business expense should be added to your target income before calculating your required hourly rate." },
    { q: "What tax rate should freelancers use for this calculator?", a: "Use your combined estimated income tax and self-employment tax rate — consult a tax professional for an accurate figure for your situation and country." },
    { q: "How do I raise my freelance rate for existing clients?", a: "Recalculate your target rate, then communicate the increase with advance notice, often tied to contract renewal or a new project." },
    { q: "Is a higher hourly rate always better for freelancers?", a: "Not necessarily — a higher rate with fewer clients willing to pay it may result in lower total income than a competitive rate with steady demand." },
    { q: "How often should I recalculate my freelance rate?", a: "Review it at least annually, or whenever your expenses, income goals, or realistic billable capacity change significantly." },
    { q: "Does this calculator account for client payment delays?", a: "No, it assumes steady income across the year — build a separate cash flow buffer for irregular or delayed client payments." },
  ],

  relatedCalculators: ["Hourly to Salary Calculator", "Salary to Hourly Calculator", "Contractor Rate Calculator", "Total Compensation Calculator", "Pricing Calculator"],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Freelancer Hourly Rate Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};