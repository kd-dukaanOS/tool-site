export const rdCalculatorContent = {
  meta: { seoTitle: "RD Calculator - Recurring Deposit Maturity Free", metaDescription: "Calculate RD maturity value, total deposit and interest earned instantly. Free recurring deposit calculator.", canonicalSlug: "/rd-calculator", ogTitle: "RD Calculator - Recurring Deposit Maturity", ogDescription: "Instantly calculate your recurring deposit maturity value.", twitterTitle: "Free RD Calculator", twitterDescription: "Calculate RD maturity value instantly." },
  hero: { text: "The RD Calculator finds your recurring deposit maturity value, total amount deposited and interest earned. Enter your monthly deposit, interest rate and tenure to get instant results. Useful for anyone planning disciplined monthly savings." },
  about: { text: `The RD Calculator computes the maturity value of a Recurring Deposit, where you invest a fixed amount every month and earn compound interest, typically compounded quarterly by banks.

It's useful for planning short to medium-term savings goals, comparing RD returns against other savings instruments, and building a disciplined monthly saving habit.

The tool also shows effective annual yield, which reflects the compounding benefit over the nominal rate.

Limitations: this uses the standard bank quarterly-compounding RD formula; some banks may compute slightly differently, so actual maturity may vary marginally.

Use this tool to estimate RD returns before opening an account.` },
  formula: { formula: "M = P × [(1+i)^n − 1] ÷ [1 − (1+i)^(−1/3)]", variables: [{ symbol: "P", meaning: "Monthly deposit amount" }, { symbol: "i", meaning: "Quarterly interest rate (annual rate ÷ 400)" }, { symbol: "n", meaning: "Number of quarters (tenure in months ÷ 3)" }], explanation: "This is the standard formula banks use for RD maturity, applying quarterly compounding to monthly deposits.", interpretation: "For example, ₹5,000/month at 7% for 24 months matures to approximately ₹1,29,155." },
  steps: ["Enter your monthly deposit amount.", "Enter the annual interest rate.", "Enter the tenure in months.", "Click Calculate to run the tool.", "View maturity value and total interest earned.", "Check total deposited and effective annual yield."],
  examples: [
    { inputs: "₹5,000/month at 7% for 24 months", result: "Maturity: ₹1,29,155", explanation: "Standard 2-year recurring deposit." },
    { inputs: "₹2,000/month at 6.5% for 12 months", result: "Maturity: ₹24,780", explanation: "Short-term 1-year RD." },
    { inputs: "₹10,000/month at 7.5% for 60 months", result: "Maturity: ₹7,25,414", explanation: "Long-term 5-year RD." },
  ],
  practicalUses: ["Building a disciplined monthly savings habit", "Planning short-term goals like a vacation or gadget purchase", "Comparing RD returns against SIP or FD options", "Saving for a down payment over a fixed period", "Setting aside funds for annual expenses like insurance premiums"],
  expertTips: ["RD is ideal for disciplined savers who want fixed monthly commitment.", "Compare effective yield across banks, not just the nominal rate.", "Missing an RD installment may incur a penalty — check your bank's terms.", "RD interest is taxable and subject to TDS above certain thresholds.", "For irregular income, SIP in mutual funds may offer more flexibility than RD."],
  commonMistakes: [{ mistake: "Assuming RD compounds monthly like the deposit frequency", fix: "Most banks compound RD interest quarterly, not monthly — this affects the exact maturity value." }, { mistake: "Missing monthly installments", fix: "Missed installments can incur penalties and reduce final maturity value — set up auto-debit if possible." }, { mistake: "Ignoring TDS on RD interest", fix: "RD interest is taxable and TDS may apply if it crosses the threshold, similar to FD interest." }],
  faq: [
    { q: "What is a Recurring Deposit?", a: "An RD is a savings scheme where you deposit a fixed amount every month for a set tenure and earn compound interest, typically compounded quarterly." },
    { q: "How is RD interest calculated?", a: "RD interest uses a quarterly compounding formula applied to the accumulating monthly deposits over the tenure." },
    { q: "What's the difference between RD and FD?", a: "An RD involves fixed monthly deposits over time, while an FD is a one-time lump-sum deposit — both typically earn similar interest rates." },
    { q: "Is RD interest taxable?", a: "Yes, RD interest is added to taxable income, and banks may deduct TDS if annual interest exceeds the prescribed threshold." },
    { q: "What happens if I miss an RD installment?", a: "Most banks charge a small penalty for missed installments, and repeated defaults may lead to account closure — check your bank's specific policy." },
  ],
  relatedCalculators: ["FD Calculator", "SIP Calculator", "PPF Calculator", "Compound Interest Calculator"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: { h1: "RD Calculator", h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"] },
};