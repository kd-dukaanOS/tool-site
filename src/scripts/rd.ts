export const rdCalculatorContent = {
  meta: {
    seoTitle: "RD Calculator - Recurring Deposit Maturity Free",
    metaDescription: "Calculate RD maturity value, total deposit and interest earned instantly. Free recurring deposit calculator for monthly savers in India.",
    canonicalSlug: "/rd-calculator",
    ogTitle: "RD Calculator - Recurring Deposit Maturity",
    ogDescription: "Instantly calculate your recurring deposit maturity value and interest earned.",
    twitterTitle: "Free RD Calculator",
    twitterDescription: "Calculate RD maturity value instantly from monthly deposit and interest rate.",
    keywords: ["rd calculator", "recurring deposit calculator", "rd maturity calculator", "rd interest calculator", "monthly deposit calculator"],
  },

  hero: {
    text: "The RD Calculator finds your recurring deposit maturity value, total amount deposited and interest earned. Enter your monthly deposit, interest rate and tenure to get instant results. Useful for anyone planning disciplined monthly savings toward a short or medium-term goal.",
  },

  about: {
    text: `The RD Calculator is a free online tool that computes the maturity value of a Recurring Deposit, where you invest a fixed amount every month and earn compound interest, typically compounded quarterly by banks.

It is useful for planning short to medium-term savings goals, comparing RD returns against other savings instruments like FD or SIP, and building a disciplined monthly saving habit.

The tool also shows effective annual yield, which reflects the compounding benefit over the nominal interest rate advertised by the bank.

Limitations: this uses the standard bank quarterly-compounding RD formula; some banks may compute slightly differently, so actual maturity may vary marginally from the projection.

Use this tool to estimate RD returns before opening an account, and compare across banks for the best effective rate.`,
  },

  formula: {
    formula: "M = P × [(1+i)^n − 1] ÷ [1 − (1+i)^(−1/3)]",
    variables: [
      { symbol: "P", meaning: "Monthly deposit amount" },
      { symbol: "i", meaning: "Quarterly interest rate (annual rate ÷ 400)" },
      { symbol: "n", meaning: "Number of quarters (tenure in months ÷ 3)" },
    ],
    explanation: "This is the standard formula banks use for RD maturity, applying quarterly compounding to monthly deposits, so interest earned in earlier months compounds over more quarters than later deposits.",
    interpretation: "For example, ₹5,000/month at 7% for 24 months matures to approximately ₹1,29,155, of which ₹1,20,000 is your own deposits and the rest is interest earned.",
  },

  steps: [
    "Enter your monthly deposit amount.",
    "Enter the annual interest rate.",
    "Enter the tenure in months.",
    "Click Calculate to run the tool.",
    "View maturity value and total interest earned.",
    "Check total deposited and effective annual yield.",
  ],

  examples: [
    {
      inputs: "₹5,000/month at 7% for 24 months",
      result: "Maturity: ₹1,29,155",
      explanation: "Standard 2-year recurring deposit with quarterly compounding.",
    },
    {
      inputs: "₹2,000/month at 6.5% for 12 months",
      result: "Maturity: ₹24,780",
      explanation: "Short-term 1-year RD suitable for a near-term savings goal.",
    },
    {
      inputs: "₹10,000/month at 7.5% for 60 months",
      result: "Maturity: ₹7,25,414",
      explanation: "Long-term 5-year RD showing the compounding benefit over an extended tenure.",
    },
    {
      inputs: "₹3,000/month at 6.8% for 36 months",
      result: "Maturity: ₹1,15,238",
      explanation: "Medium-term 3-year RD, a common tenure for goals like a vehicle down payment.",
    },
  ],

  practicalUses: [
    "Building a disciplined monthly savings habit",
    "Planning short-term goals like a vacation or gadget purchase",
    "Comparing RD returns against SIP or FD options",
    "Saving for a down payment over a fixed period",
    "Setting aside funds for annual expenses like insurance premiums",
    "Creating an emergency fund through forced monthly savings",
    "Planning for a specific milestone like a wedding or festival expense",
    "Teaching children or beginners the habit of regular saving",
    "Laddering multiple RDs with different tenures for staggered liquidity",
    "Comparing effective yield across banks before opening an account",
  ],

  expertTips: [
    "RD is ideal for disciplined savers who want a fixed monthly commitment with predictable, low-risk returns.",
    "Compare effective yield across banks, not just the nominal advertised rate, since compounding frequency affects actual returns.",
    "Missing an RD installment may incur a penalty — check your bank's specific terms before committing.",
    "RD interest is taxable and subject to TDS above certain thresholds, similar to fixed deposits.",
    "For irregular income, a SIP in mutual funds may offer more flexibility than a rigid RD commitment.",
    "Senior citizens often get a slightly higher RD interest rate — check if this applies to you or a family member.",
    "Consider laddering RDs with different start dates and tenures to have periodic liquidity without breaking a single large deposit.",
    "RD tenure typically ranges from 6 months to 10 years — choose based on your specific savings goal timeline.",
    "Some banks offer flexible RDs allowing variable deposit amounts each month — useful for variable income earners.",
    "Premature RD closure usually results in a lower interest rate and possible penalty — plan tenure carefully upfront.",
  ],

  commonMistakes: [
    { mistake: "Assuming RD compounds monthly like the deposit frequency", fix: "Most banks compound RD interest quarterly, not monthly — this affects the exact maturity value." },
    { mistake: "Missing monthly installments", fix: "Missed installments can incur penalties and reduce final maturity value — set up auto-debit if possible." },
    { mistake: "Ignoring TDS on RD interest", fix: "RD interest is taxable and TDS may apply if it crosses the threshold, similar to FD interest." },
    { mistake: "Choosing too long a tenure for a near-term goal", fix: "Match your RD tenure to your actual goal timeline to avoid premature closure penalties." },
    { mistake: "Comparing only the advertised interest rate across banks", fix: "Compare effective annual yield, which accounts for compounding frequency, for a true comparison." },
    { mistake: "Closing the RD prematurely without checking penalty terms", fix: "Review your bank's premature withdrawal policy, since it often reduces the effective interest rate significantly." },
  ],

  faq: [
    { q: "What is a Recurring Deposit?", a: "An RD is a savings scheme where you deposit a fixed amount every month for a set tenure and earn compound interest, typically compounded quarterly." },
    { q: "How is RD interest calculated?", a: "RD interest uses a quarterly compounding formula applied to the accumulating monthly deposits over the tenure." },
    { q: "What's the difference between RD and FD?", a: "An RD involves fixed monthly deposits over time, while an FD is a one-time lump-sum deposit — both typically earn similar interest rates." },
    { q: "Is RD interest taxable?", a: "Yes, RD interest is added to taxable income, and banks may deduct TDS if annual interest exceeds the prescribed threshold." },
    { q: "What happens if I miss an RD installment?", a: "Most banks charge a small penalty for missed installments, and repeated defaults may lead to account closure — check your bank's specific policy." },
    { q: "What is the minimum and maximum tenure for an RD?", a: "RD tenures typically range from 6 months to 10 years, though specific limits vary by bank." },
    { q: "Can I withdraw my RD before maturity?", a: "Yes, premature withdrawal is usually allowed but typically comes with a reduced interest rate and possible penalty." },
    { q: "Do senior citizens get a higher RD interest rate?", a: "Many banks offer an additional 0.25-0.50% interest rate premium for senior citizen RD accounts." },
    { q: "Can I open multiple RD accounts?", a: "Yes, there's generally no restriction on the number of RD accounts you can hold across or within banks." },
    { q: "Is RD a good option compared to SIP in mutual funds?", a: "RD offers guaranteed, low-risk returns ideal for short-term goals, while SIP in equity mutual funds carries market risk but potentially higher returns over the long term." },
    { q: "What is effective annual yield in an RD?", a: "It's the actual annualized return accounting for the quarterly compounding effect, which is slightly higher than the simple nominal interest rate." },
  ],

  relatedCalculators: ["FD Calculator", "SIP Calculator", "PPF Calculator", "Compound Interest Calculator"],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "RD Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};
