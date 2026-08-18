// src/data/calculators/freelancer-hourly-rate.ts
export const freelancerHourlyRateCalculatorContent = {
  meta: {
    seoTitle: "Freelancer Hourly Rate Calculator - Set Your Rate Free",
    metaDescription: "Calculate the hourly rate you need to charge as a freelancer free & instant, based on target income, expenses, taxes and billable hours. Free freelance rate calculator.",
    canonicalSlug: "/freelancer-hourly-rate-calculator",
    ogTitle: "Freelancer Hourly Rate Calculator",
    ogDescription: "Instantly calculate the hourly rate you need to charge to hit your income goals as a freelancer.",
    twitterTitle: "Free Freelancer Hourly Rate Calculator",
    twitterDescription: "Calculate your ideal freelance hourly rate instantly, free and accurate.",
  },

  hero: {
    text: "The Freelancer Hourly Rate Calculator instantly finds the hourly rate you need to charge to hit your target income, once you account for taxes, business expenses and non-billable time. Use it to price your services confidently, whether you're just starting out or repricing existing work. Any freelancer, consultant or contractor can use this free tool.",
  },

  about: {
    text: `The Freelancer Hourly Rate Calculator is a free online tool that works backward from a target annual income to find the hourly rate you actually need to charge as a freelancer or independent contractor.

Unlike a simple salary-to-hourly conversion, this tool accounts for the realities of freelance work: not every hour is billable, self-employment taxes are higher than employee taxes, and you cover your own business expenses and benefits.

It's useful for new freelancers setting their first rate, established freelancers repricing their services, and consultants comparing freelance income against a salaried job offer.

The calculator lets you adjust target income, business expenses, tax rate, billable hours per week and weeks worked per year, so the result reflects your real working pattern rather than a generic assumption.

Limitations: this tool provides an estimate based on the inputs you provide — it doesn't account for client-specific pricing power, project-based pricing models, or fluctuating demand.

Use this tool as a starting benchmark for your rate, then adjust for your market, experience level and demand.`,
  },

  formula: {
    formula: "Hourly Rate = (Target Income + Business Expenses) / (1 − Tax Rate) / (Billable Hours per Week × Weeks per Year)",
    variables: [
      { symbol: "Target Income", meaning: "Desired annual take-home income" },
      { symbol: "Business Expenses", meaning: "Annual costs of running the freelance business (software, insurance, equipment)" },
      { symbol: "Tax Rate", meaning: "Estimated effective tax rate including self-employment tax" },
      { symbol: "Billable Hours per Week", meaning: "Hours actually billed to clients, excluding admin, marketing and unpaid work" },
      { symbol: "Weeks per Year", meaning: "Number of weeks actively working and billing clients" },
    ],
    explanation: "The calculator grosses up your target income by business expenses and taxes, then divides by your realistic billable hours to find the rate needed per hour, not per hour worked in general.",
    interpretation: "For example, to take home $60,000 with $5,000 in expenses, a 25% effective tax rate, 25 billable hours/week and 48 weeks/year, you'd need to charge roughly $72/hour.",
  },

  steps: [
    "Enter your target annual take-home income.",
    "Enter your estimated annual business expenses.",
    "Enter your estimated effective tax rate (including self-employment tax).",
    "Enter your realistic billable hours per week — not total working hours.",
    "Enter the number of weeks you plan to actively work per year.",
    "Click Calculate to see your required hourly rate.",
    "Compare the result against market rates for your field and experience level.",
  ],

  examples: [
    { inputs: "Target: $60,000, Expenses: $5,000, Tax: 25%, Billable: 25 hrs/week, 48 weeks", result: "Required Rate: ≈$72/hr", explanation: "A typical solo freelancer accounting for non-billable admin time and self-employment tax." },
    { inputs: "Target: $100,000, Expenses: $10,000, Tax: 30%, Billable: 30 hrs/week, 46 weeks", result: "Required Rate: ≈$114/hr", explanation: "A higher-income consultant with more billable hours but also higher tax burden." },
    { inputs: "Target: $40,000, Expenses: $2,000, Tax: 20%, Billable: 20 hrs/week, 50 weeks", result: "Required Rate: ≈$53/hr", explanation: "A part-time freelancer with fewer billable hours and lower expenses." },
    { inputs: "Target: $80,000, Expenses: $8,000, Tax: 28%, Billable: 20 hrs/week, 48 weeks", result: "Required Rate: ≈$127/hr", explanation: "A specialist charging a premium rate due to fewer billable hours relative to income goal." },
  ],

  practicalUses: [
    "Setting your first hourly rate as a new freelancer",
    "Repricing your services after gaining more experience",
    "Comparing freelance income potential against a salaried job offer",
    "Deciding whether to take on a lower-paying project",
    "Understanding how non-billable time affects your real rate",
    "Planning rate increases to hit a new income goal",
    "Justifying your rate to a client with a clear cost breakdown",
    "Adjusting your rate after a rise in business expenses or taxes",
    "Estimating income potential before quitting a full-time job",
    "Comparing rates needed across different billable-hour assumptions",
    "Budgeting for slow seasons by adjusting weeks worked per year",
    "Setting a minimum rate floor below which a project isn't worth taking",
  ],

  expertTips: [
    "Billable hours are almost always less than total working hours — admin, marketing and proposals eat into your week.",
    "Self-employment tax is typically higher than employee payroll tax — use a realistic effective rate, not just your income tax bracket.",
    "Include software subscriptions, insurance, equipment and a portion of a home office as business expenses.",
    "Revisit your rate at least annually, or whenever expenses, taxes or your target income change.",
    "New freelancers often underestimate non-billable time — track your actual billable hours for a month before finalizing a rate.",
    "Charge a premium over an equivalent salaried hourly rate to cover lost benefits like health insurance and paid leave.",
    "Consider project-based pricing for well-scoped work — it can earn more than strict hourly billing once you're experienced.",
    "Build a buffer into weeks worked per year for holidays, sick time and slow periods, since freelancers don't get paid leave.",
    "Research rates in your specific niche and region — general benchmarks vary widely by industry and experience level.",
  ],

  commonMistakes: [
    { mistake: "Using total working hours instead of realistic billable hours", fix: "Only count hours you can actually bill to clients — admin and marketing time isn't billable." },
    { mistake: "Ignoring self-employment tax", fix: "Use an effective tax rate that includes self-employment tax, not just standard income tax brackets." },
    { mistake: "Forgetting to include business expenses", fix: "Add software, insurance, equipment and other business costs to your target income before calculating the rate." },
    { mistake: "Assuming 52 full billable weeks per year", fix: "Account for holidays, sick time, and slow periods — most freelancers bill far fewer than 52 weeks." },
    { mistake: "Setting a rate once and never revisiting it", fix: "Recalculate your rate periodically as expenses, taxes, or income goals change." },
    { mistake: "Underpricing to win the first few clients", fix: "Set a sustainable rate from the start — raising prices later on existing clients is often harder than starting higher." },
  ],

  faq: [
    { q: "How do I calculate my freelance hourly rate?", a: "Add your target income and business expenses, divide by (1 minus your tax rate), then divide by your total billable hours for the year (billable hours per week × weeks worked)." },
    { q: "What's the difference between billable hours and total working hours?", a: "Billable hours are only the hours you can charge to clients, while total working hours also include admin, marketing, proposals and other unpaid business tasks." },
    { q: "How many hours per week should I count as billable?", a: "Most freelancers realistically bill 20-30 hours per week out of a 40-hour working week, since the rest goes to non-billable business tasks." },
    { q: "Why is my required freelance rate higher than my old salaried hourly rate?", a: "Freelance rates need to cover self-employment tax, business expenses, and lost benefits like paid leave and health insurance, none of which apply to a standard salaried hourly rate." },
    { q: "What tax rate should I use for freelance income?", a: "Use your estimated effective tax rate including self-employment tax, which is often higher than a standard employee's income tax rate — consult a tax professional for an accurate figure." },
    { q: "Should I charge hourly or project-based rates?", a: "Hourly rates are simpler and lower-risk for less predictable work, while project-based rates can be more profitable for well-scoped work once you know how long tasks take." },
    { q: "How often should I raise my freelance rate?", a: "Many freelancers review and adjust their rate annually, or whenever demand, experience level, or expenses change significantly." },
    { q: "What business expenses should I include?", a: "Include software subscriptions, business insurance, equipment, professional development, and a reasonable portion of home office costs." },
    { q: "How do I account for unpaid vacation as a freelancer?", a: "Reduce your 'weeks worked per year' input to reflect any unpaid time off, since freelancers don't receive paid vacation by default." },
    { q: "Is this calculator useful for consultants, not just freelancers?", a: "Yes, the same logic applies to any independent contractor or consultant who needs to convert a target income into a billable rate." },
    { q: "How do I know if my calculated rate is competitive?", a: "Compare it against published rate guides or client budgets for your specific niche, region and experience level — the calculator gives your required rate, not necessarily the market rate." },
    { q: "What if I can't get enough billable hours at my calculated rate?", a: "Consider raising your rate to require fewer billable hours for the same income, or work on filling your pipeline with more clients." },
    { q: "Does this calculator account for client payment delays?", a: "No, it estimates the rate needed based on income and hours only — cash flow timing should be managed separately with invoicing terms and reserves." },
    { q: "How is freelance rate different for part-time freelancers?", a: "Part-time freelancers should lower billable hours per week and weeks per year to reflect their actual availability, which raises the required hourly rate for the same target income." },
    { q: "Should new freelancers charge less than experienced ones?", a: "It's common to start slightly below market rate while building a portfolio, but underpricing significantly can make it harder to raise rates later and may undervalue your work." },
  ],

  relatedCalculators: ["Hourly to Salary Calculator", "Salary to Hourly Calculator", "Net Profit Calculator", "Raise Calculator", "Break-Even Calculator"],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Freelancer Hourly Rate Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};