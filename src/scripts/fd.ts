export const fdCalculatorContent = {
  meta: {
    seoTitle: "FD Calculator - Fixed Deposit Maturity Value Free",
    metaDescription: "Calculate FD maturity value, interest earned and TDS estimate. Free fixed deposit calculator with compounding.",
    canonicalSlug: "/fd-calculator",
    ogTitle: "FD Calculator - Fixed Deposit Maturity Calculator",
    ogDescription: "Instantly calculate your fixed deposit maturity value and interest earned.",
    twitterTitle: "Free FD Calculator",
    twitterDescription: "Calculate fixed deposit maturity value instantly.",
  },

  hero: {
    text: "The FD Calculator finds your fixed deposit maturity value, total interest earned and estimated TDS. Enter principal, interest rate, tenure and compounding frequency to get instant results. Useful for anyone planning to invest in a bank fixed deposit.",
  },

  about: {
    text: `The FD Calculator computes how much your fixed deposit will be worth at maturity, based on principal, interest rate, tenure and compounding frequency.

It's useful for comparing FD offers across banks, planning savings goals, and understanding the net interest you'll actually receive after TDS deduction.

The tool also shows effective annual yield and an estimated TDS deduction based on standard thresholds.

Limitations: actual TDS rules depend on your total interest income across all deposits and your PAN status — this is a simplified estimate, not tax advice.

Use this tool to compare FD schemes and estimate returns before investing.`,
  },

  formula: {
    formula: "A = P × (1 + r/n)^(n×t)",
    variables: [
      { symbol: "P", meaning: "Principal deposit amount" },
      { symbol: "r", meaning: "Annual interest rate (as decimal)" },
      { symbol: "n", meaning: "Compounding frequency per year (FDs are usually quarterly)" },
      { symbol: "t", meaning: "Tenure in years" },
    ],
    explanation: "The formula compounds interest at the given frequency over the deposit tenure to find the maturity value.",
    interpretation: "For example, ₹1,00,000 at 7% for 5 years compounded quarterly grows to about ₹1,41,478.",
  },

  steps: [
    "Enter the principal deposit amount.",
    "Enter the annual interest rate.",
    "Enter the tenure in years.",
    "Select the compounding frequency (usually quarterly for FDs).",
    "Click Calculate to run the tool.",
    "View maturity value, total interest and effective annual yield.",
    "Check the estimated TDS and net interest after TDS.",
  ],

  examples: [
    { inputs: "₹1,00,000 at 7%, 5 years, quarterly", result: "Maturity: ₹1,41,478", explanation: "Standard bank FD scenario." },
    { inputs: "₹5,00,000 at 6.5%, 3 years, quarterly", result: "Maturity: ₹6,07,027", explanation: "Larger deposit, shorter tenure." },
    { inputs: "₹50,000 at 8%, 1 year, quarterly", result: "Maturity: ₹54,120", explanation: "Short-term FD calculation." },
    { inputs: "₹2,00,000 at 7.5%, 10 years, quarterly", result: "Maturity: ₹4,19,145", explanation: "Long-term FD showing the compounding effect over a decade." },
  ],

  practicalUses: [
    "Comparing FD interest rates across banks",
    "Planning a specific savings goal by target date",
    "Estimating post-tax returns from a fixed deposit",
    "Deciding between FD tenure options",
    "Comparing FD returns against other safe investment options",
    "Planning senior citizen FD investments",
    "Working out FD laddering strategy across multiple tenures",
    "Estimating maturity value for tax-saving 5-year FDs",
    "Comparing cumulative vs non-cumulative FD payout options",
    "Planning emergency fund growth in a low-risk instrument",
  ],

  expertTips: [
    "Quarterly compounding (standard for most FDs) yields slightly more than annual compounding at the same rate.",
    "TDS applies only if annual interest exceeds the threshold — check current limits with your bank.",
    "Submit Form 15G/15H if eligible to avoid TDS deduction, subject to your tax situation.",
    "Compare effective annual yield, not just the nominal rate, across different banks.",
    "Breaking an FD early usually incurs a penalty — check terms before investing.",
    "Laddering FDs across different tenures can improve liquidity while maintaining returns.",
    "Senior citizens typically get 0.25-0.5% higher FD rates — check eligibility.",
    "Cumulative FDs compound and pay at maturity; non-cumulative FDs pay interest periodically — choose based on cash flow needs.",
    "Tax-saving FDs have a mandatory 5-year lock-in with no premature withdrawal allowed.",
  ],

  commonMistakes: [
    { mistake: "Ignoring TDS impact on actual returns", fix: "Factor in estimated TDS to know your real net interest, not just gross maturity value." },
    { mistake: "Comparing nominal rates instead of effective yield", fix: "Compare effective annual yield since compounding frequency affects actual returns." },
    { mistake: "Assuming all FDs compound quarterly", fix: "Check your bank's specific compounding frequency — it varies by scheme." },
    { mistake: "Not accounting for premature withdrawal penalty", fix: "Factor in penalty charges if there's a chance you'll need the funds early." },
    { mistake: "Overlooking tax-saving FD lock-in restrictions", fix: "Confirm the 5-year lock-in before choosing a tax-saving FD over a regular one." },
  ],

  faq: [
    { q: "How is FD maturity value calculated?", a: "It's calculated using compound interest based on principal, interest rate, compounding frequency and tenure." },
    { q: "Is FD interest taxable?", a: "Yes, FD interest is added to your taxable income, and banks deduct TDS if annual interest exceeds the prescribed threshold." },
    { q: "What's the difference between FD and RD?", a: "An FD is a one-time lump-sum deposit, while an RD (Recurring Deposit) involves fixed monthly contributions over the tenure." },
    { q: "Does compounding frequency affect FD returns?", a: "Yes, more frequent compounding (like quarterly vs annual) results in slightly higher effective returns at the same nominal rate." },
    { q: "Can I avoid TDS on FD interest?", a: "Yes, if your total income is below the taxable limit, you can submit Form 15G or 15H to your bank to avoid TDS deduction." },
    { q: "What happens if I break my FD early?", a: "Most banks charge a penalty (reduced interest rate) for premature withdrawal, and terms vary by bank and scheme." },
    { q: "Is FD a safe investment?", a: "FDs are considered low-risk since returns are fixed and bank deposits are insured up to a certain limit by deposit insurance schemes." },
    { q: "What is the difference between cumulative and non-cumulative FD?", a: "Cumulative FDs reinvest interest and pay everything at maturity, while non-cumulative FDs pay out interest monthly, quarterly or annually." },
    { q: "Do senior citizens get higher FD rates?", a: "Yes, most banks offer an additional 0.25% to 0.5% interest rate for senior citizen depositors." },
    { q: "What is a tax-saving FD?", a: "It's a fixed deposit with a mandatory 5-year lock-in that qualifies for tax deduction under Section 80C, but interest earned is still taxable." },
  ],

  relatedCalculators: ["SIP Calculator", "Compound Interest Calculator", "CAGR Calculator", "RD Calculator", "NPS Calculator", "EMI Calculator"],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: { h1: "FD Calculator", h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"] },
};
