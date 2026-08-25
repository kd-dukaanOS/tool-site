export const caIncomeTaxContent = {
  meta: {
    seoTitle: "Canada Income Tax Calculator - Federal & Provincial Tax by Province",
    metaDescription: "Calculate your estimated Canadian federal and provincial income tax for Ontario, Alberta, or BC. See your combined marginal and effective tax rate.",
    canonicalSlug: "/finance/ca-income-tax-calculator",
    ogTitle: "Canada Income Tax Calculator",
    ogDescription: "See your estimated federal and provincial income tax, effective rate, and combined marginal rate.",
    twitterTitle: "Free Canada Income Tax Calculator",
    twitterDescription: "Calculate your federal + provincial income tax for Ontario, Alberta, or BC in seconds.",
  },
  hero: {
    text: "Estimate your combined federal and provincial income tax in Canada. Enter your gross annual income and select your province to see your total tax, effective rate, and marginal rate.",
  },
  about: {
    text: `This calculator estimates federal and provincial income tax owed using current CRA and provincial tax brackets.

Canada taxes income at two levels: federal and provincial. Both are progressive, so your combined marginal rate — the rate on your next dollar earned — is the sum of your federal marginal rate and your provincial marginal rate at that income level.

Limitations: this tool covers Ontario, Alberta and British Columbia only. It does not include CPP or EI (use the Canada Take-Home Pay Calculator for a full paycheque breakdown), and it does not model RRSP contributions, tax credits beyond the basic personal amount, or Quebec's separate tax system.`,
  },
  formula: {
    formula: "Total Tax = Federal Tax + Provincial Tax (each calculated on its own brackets)",
    variables: [
      { symbol: "Federal Tax", meaning: "Tax owed under CRA federal income tax brackets" },
      { symbol: "Provincial Tax", meaning: "Tax owed under your selected province's brackets" },
      { symbol: "Combined Marginal Rate", meaning: "Federal marginal rate + provincial marginal rate at your income level" },
    ],
    explanation: "Federal and provincial tax are each calculated progressively and independently, then added together. Your combined marginal rate is the sum of both rates on your last dollar earned.",
    interpretation: "For example, someone earning $80,000 in Ontario pays federal tax on the full progressive scale, plus Ontario provincial tax on its own separate progressive scale — the two combine into one total tax bill.",
  },
  steps: [
    "Enter your gross annual income.",
    "Select your province (Ontario, Alberta, or British Columbia).",
    "Click Calculate to see your estimated federal and provincial tax.",
    "Compare your combined marginal rate to your effective rate.",
    "Recalculate for a different province to compare take-home impact before relocating.",
  ],
  examples: [
    { inputs: "Gross: $60,000, Ontario", result: "Federal + provincial tax, effective and marginal rate", explanation: "Standard salaried employee in Ontario." },
    { inputs: "Gross: $90,000, Alberta", result: "Federal + provincial tax, effective and marginal rate", explanation: "Higher earner in Alberta, which has no provincial sales tax but does have income tax." },
    { inputs: "Gross: $50,000, British Columbia", result: "Federal + provincial tax, effective and marginal rate", explanation: "Entry-level salary example in BC." },
  ],
  practicalUses: [
    "Comparing take-home impact of job offers across provinces",
    "Estimating tax owed before filing season",
    "Understanding how much of a raise you'll actually keep",
    "Planning a move between Ontario, Alberta, and BC",
    "Getting a tax baseline before adding CPP and EI",
  ],
  expertTips: [
    "Your combined marginal rate is federal + provincial — check the breakdown to see both pieces separately.",
    "This tool doesn't include CPP or EI — use the Canada Take-Home Pay Calculator for full paycheque math.",
    "RRSP contributions reduce taxable income and are not included here.",
    "Alberta has no provincial sales tax, but it does have provincial income tax — don't confuse the two.",
    "Quebec uses a separate tax system entirely and isn't covered by this tool.",
  ],
  commonMistakes: [
    { mistake: "Selecting the wrong province", fix: "Provincial tax brackets vary significantly — double-check your selection before relying on results." },
    { mistake: "Assuming this includes CPP and EI", fix: "This tool covers income tax only — use the Canada Take-Home Pay Calculator for a full deduction breakdown." },
    { mistake: "Confusing Alberta's lack of sales tax with lower income tax", fix: "Alberta has no PST, but its income tax brackets are separate and still apply." },
    { mistake: "Using this for Quebec", fix: "Quebec has its own distinct provincial tax system not covered by this calculator." },
  ],
  faq: [
    { q: "How is Canadian income tax calculated?", a: "Federal and provincial tax are each calculated progressively using their own separate brackets, then added together for your total tax owed." },
    { q: "Which provinces does this calculator support?", a: "This calculator currently supports Ontario, Alberta, and British Columbia." },
    { q: "What is a combined marginal rate?", a: "It's your federal marginal rate plus your provincial marginal rate at your current income — the total rate on your next dollar earned." },
    { q: "Does this include CPP or EI?", a: "No, this calculator covers income tax only. Use the Canada Take-Home Pay Calculator for CPP and EI included." },
    { q: "Is Quebec supported?", a: "No, Quebec uses a separate provincial tax system not covered by this tool." },
    { q: "Does this include RRSP contributions?", a: "No, pre-tax RRSP contributions are not included and would reduce your taxable income further if made." },
    { q: "Does this tool store my income information?", a: "No, all calculations run locally in your browser and no data is sent to a server." },
    { q: "How current are the tax brackets used?", a: "Bracket data is sourced from CRA guidance and should be verified against current figures for the applicable tax year." },
  ],
  relatedCalculators: ["Canada Take-Home Pay Calculator", "CPP Calculator", "EI Calculator", "US Income Tax Calculator", "RRSP Calculator", "TFSA Calculator"],
  youMightAlsoLike: ["CPP Calculator", "EI Calculator", "Canada Take-Home Pay Calculator"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Canada Income Tax Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};