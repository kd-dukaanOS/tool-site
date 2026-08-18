// src/data/calculators/raise.ts
export const raiseCalculatorContent = {
  meta: {
    seoTitle: "Raise Calculator - Salary Increase & New Salary Calculator (Free)",
    metaDescription: "Calculate your new salary and raise amount free & instant from current salary and raise percentage. Includes monthly impact, negotiation and inflation tips.",
    canonicalSlug: "/raise-calculator",
    ogTitle: "Raise Calculator - Salary Increase Calculator",
    ogDescription: "Instantly calculate your new salary and raise amount from a percentage increase.",
    twitterTitle: "Free Raise Calculator - Salary Increase",
    twitterDescription: "Calculate your salary raise and new salary instantly, free and accurate.",
  },

  hero: {
    text: "The Raise Calculator instantly finds your new salary and raise amount from your current salary and a raise percentage. Use it to check an offered raise, plan a negotiation, or see the monthly impact of a pay increase. Anyone expecting or requesting a salary increase can use this free tool.",
  },

  about: {
    text: `The Raise Calculator is a free online tool that computes your new salary and the exact dollar amount of a raise from your current salary and a percentage increase.

It's useful for employees checking whether an offered raise matches what was promised, professionals preparing for a salary negotiation, and anyone wanting to see the real monthly impact of a percentage-based pay increase.

The calculator also breaks the raise down into a monthly increase, making it easier to picture how the raise affects take-home budgeting rather than just an abstract annual percentage.

Limitations: this tool calculates a gross (pre-tax) raise on annual salary — it doesn't account for taxes, benefit changes, or bonus structure adjustments that may accompany a raise.

Use this tool to quickly verify raise math and plan negotiations, not as a substitute for full compensation review including taxes and benefits.`,
  },

  formula: {
    formula: "Raise Amount = Current Salary × (Raise% / 100); New Salary = Current Salary + Raise Amount",
    variables: [
      { symbol: "Current Salary", meaning: "Your salary before the raise" },
      { symbol: "Raise%", meaning: "Percentage increase being applied" },
    ],
    explanation: "The raise amount is calculated as a percentage of your current salary, then added to your current salary to get the new salary. Monthly increase divides the raise amount by 12 to show its monthly budget impact.",
    interpretation: "For example, a $60,000 salary with a 5% raise gives a $3,000 raise amount, a new salary of $63,000, and roughly $250 more per month.",
  },

  steps: [
    "Enter your current annual salary.",
    "Enter the raise percentage you received or are negotiating for.",
    "Click Calculate to run the tool.",
    "View your raise amount, new salary and monthly increase.",
    "Copy the summary if you need to save or share it.",
  ],

  examples: [
    { inputs: "Salary: $60,000, Raise: 5%", result: "Raise: $3,000, New Salary: $63,000, Monthly: $250", explanation: "A typical annual cost-of-living raise." },
    { inputs: "Salary: $45,000, Raise: 10%", result: "Raise: $4,500, New Salary: $49,500, Monthly: $375", explanation: "A stronger merit-based raise reflecting strong performance." },
    { inputs: "Salary: $90,000, Raise: 3%", result: "Raise: $2,700, New Salary: $92,700, Monthly: $225", explanation: "A modest raise on a higher base salary." },
    { inputs: "Salary: $50,000, Raise: 15%", result: "Raise: $7,500, New Salary: $57,500, Monthly: $625", explanation: "A significant raise, often tied to a promotion or role change." },
  ],

  practicalUses: [
    "Verifying an offered raise matches the promised percentage",
    "Preparing target numbers before a salary negotiation",
    "Understanding the monthly budget impact of a raise",
    "Comparing raise offers across different percentages",
    "Planning finances around an upcoming confirmed raise",
    "Checking how a raise compares to inflation or cost-of-living increases",
    "Estimating the compounding effect of multiple annual raises over time",
    "Benchmarking a raise against typical industry percentages",
    "Working out the counter-offer number to propose in a negotiation",
    "Checking if a promotion raise meets typical promotion-raise ranges",
    "Estimating future salary trajectory across several review cycles",
    "Deciding between a higher base raise and a signing/retention bonus offer",
  ],

  expertTips: [
    "Compare your raise percentage to inflation — a raise below inflation is effectively a pay cut in real terms.",
    "When negotiating, ask for a specific dollar amount or percentage, and use this tool to see the exact new salary.",
    "Small percentage differences compound meaningfully over several years of raises — don't underestimate a 1-2% gap.",
    "Check whether bonus targets or benefits also scale with salary when evaluating a raise's true value.",
    "Research typical raise percentages in your industry and role before entering a negotiation.",
    "A raise combined with a promotion often includes other compensation changes beyond base salary — review the full offer.",
    "Time raise conversations around performance reviews or after a major completed project, when leverage is highest.",
    "If a raise is deferred to a future date, calculate its annualized value, not just the eventual dollar amount.",
    "Get any agreed raise confirmed in writing before treating it as final for budgeting purposes.",
  ],

  commonMistakes: [
    { mistake: "Confusing raise percentage with a flat dollar amount", fix: "Clarify whether an offered raise is a percentage of current salary or a fixed dollar figure — they can result in very different amounts." },
    { mistake: "Not comparing the raise against inflation", fix: "Check current inflation rates to see if the raise represents real (after-inflation) income growth." },
    { mistake: "Assuming the raise applies to gross pay equals the same increase in take-home pay", fix: "Remember taxes apply to the higher salary too, so take-home increase will be somewhat less than the gross raise." },
    { mistake: "Overlooking changes to bonus or benefits tied to salary level", fix: "Check if bonus targets, 401(k) matching, or other benefits scale with your new, higher salary." },
    { mistake: "Negotiating without market data", fix: "Research comparable salaries for your role and location before proposing a number so your ask is grounded and credible." },
    { mistake: "Accepting a verbal raise promise without documentation", fix: "Get the new salary and effective date confirmed in writing, such as an updated offer letter or email." },
  ],

  faq: [
    { q: "How do I calculate a salary raise percentage?", a: "Divide the raise amount by your current salary and multiply by 100. For example, a $3,000 raise on a $60,000 salary is a 5% raise." },
    { q: "What is a good raise percentage?", a: "A typical annual raise is often 3–5% for cost-of-living adjustments, while merit-based or promotion raises can range from 5–15% or higher." },
    { q: "How do I calculate my new salary after a raise?", a: "Multiply your current salary by the raise percentage to get the raise amount, then add that to your current salary." },
    { q: "Is a raise calculated on gross or net salary?", a: "Raises are typically calculated on gross (pre-tax) salary. Your net take-home increase will be somewhat smaller after taxes." },
    { q: "How much is a 3% raise worth?", a: "On a $50,000 salary, a 3% raise equals $1,500 more per year, or about $125 more per month before tax." },
    { q: "Should my raise match inflation?", a: "A raise below the current inflation rate means your real purchasing power actually decreases, even though your salary number goes up." },
    { q: "How often should I expect a raise?", a: "This varies by employer and industry, but many companies conduct annual salary reviews, with additional raises tied to promotions or exceptional performance." },
    { q: "What's the difference between a raise and a bonus?", a: "A raise permanently increases your base salary going forward, while a bonus is typically a one-time or periodic payment that doesn't change your base pay." },
    { q: "How do I ask for a specific raise percentage?", a: "Research market rates for your role, document your contributions, and propose a specific percentage or dollar figure backed by that research." },
    { q: "Does a raise affect my tax bracket?", a: "It can push a portion of your income into a higher tax bracket, though typically only the amount above the bracket threshold is taxed at the higher rate." },
    { q: "What raise percentage should I expect with a promotion?", a: "Promotion raises commonly range from 8-15%, reflecting an increase in role scope and responsibility rather than a standard annual adjustment." },
    { q: "Is it normal to negotiate a raise offer?", a: "Yes, raise offers are often a starting point for discussion, especially when backed by market research, performance data, or a competing offer." },
    { q: "How do multiple small raises compare to one large raise over time?", a: "Compounding matters — a series of smaller annual raises can outpace a single larger one-time raise over several years due to each raise building on the last." },
    { q: "What if my raise is a flat dollar amount instead of a percentage?", a: "Divide the dollar amount by your current salary and multiply by 100 to see it as an equivalent percentage for easier comparison." },
    { q: "Can a raise push me into a different benefits tier?", a: "In some companies, salary bands determine eligibility for certain bonus tiers, stock grants, or benefit levels, so a raise can unlock more than just base pay." },
    { q: "How is a raise different from a cost-of-living adjustment (COLA)?", a: "A COLA is specifically meant to offset inflation and maintain purchasing power, while a general raise may also reflect merit, promotion, or market adjustment." },
  ],

  relatedCalculators: ["Bonus Calculator", "Hourly to Salary Calculator", "Salary to Hourly Calculator", "Overtime Calculator", "Total Compensation Calculator"],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Raise Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};