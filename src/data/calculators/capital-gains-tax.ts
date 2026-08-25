// src/data/calculators/capital-gains-tax.ts
export const capitalGainsTaxCalculatorContent = {
  meta: {
    seoTitle: "Capital Gains Tax Calculator - Short & Long-Term Free",
    metaDescription: "Calculate federal capital gains tax on short-term and long-term gains using current 2025 and 2026 IRS brackets. Free calculator with after-tax gain and effective rate.",
    canonicalSlug: "/capital-gains-tax-calculator",
    ogTitle: "Capital Gains Tax Calculator - Short & Long-Term",
    ogDescription: "Instantly estimate federal capital gains tax and your after-tax gain.",
    twitterTitle: "Free Capital Gains Tax Calculator",
    twitterDescription: "Calculate short-term and long-term capital gains tax instantly, free and accurate.",
  },

  hero: {
    text: "The Capital Gains Tax Calculator estimates federal tax owed on a stock, crypto, real estate or other asset sale. Enter your purchase and sale price, holding period, other income and filing status to see your capital gains tax, effective rate and after-tax gain.",
  },

  about: {
    text: `The Capital Gains Tax Calculator is a free online tool that estimates federal tax owed on the profit from selling an asset, based on how long you held it, your other income, and your filing status.

Short-term gains (assets held one year or less) are taxed as ordinary income at your regular federal tax rates. Long-term gains (held over one year) get preferential rates of 0%, 15% or 20%, depending on your total taxable income.

The tool stacks your capital gain on top of your other taxable income to find exactly which bracket(s) it falls into — the same method the IRS uses — rather than applying a single flat rate to the whole gain.

Limitations: this covers federal capital gains tax only. It does not include state capital gains tax, the 3.8% Net Investment Income Tax for high earners, or special rules for collectibles, small business stock, or depreciation recapture on real estate.

Use this tool for planning purposes, not as a substitute for tax software or a licensed tax professional.`,
  },

  formula: {
    formula: "Gain = Sale Price − Purchase Price; Tax = gain stacked on other taxable income, taxed bracket by bracket at ordinary rates (short-term) or 0%/15%/20% (long-term)",
    variables: [
      { symbol: "Gain", meaning: "Sale price minus purchase price" },
      { symbol: "Other Taxable Income", meaning: "Your income excluding this gain, after deductions" },
      { symbol: "Holding Period", meaning: "Short-term (≤1 year, ordinary rates) or long-term (>1 year, 0/15/20% rates)" },
    ],
    explanation: "The IRS taxes capital gains as if they sit on top of your other income. Your other income fills the lower brackets first, then the gain is taxed starting from wherever that income leaves off — so a large gain can span multiple rate tiers.",
    interpretation: "For example, a single filer with $60,000 other taxable income and a $20,000 long-term gain in 2026 pays 0% on the portion of the gain up to $49,450 total income, then 15% on the rest — not 15% on the entire gain.",
  },

  steps: [
    "Enter the purchase price and sale price of the asset.",
    "Select the holding period — short-term (1 year or less) or long-term (over 1 year).",
    "Enter your other annual income, excluding this gain.",
    "Select your filing status and tax year.",
    "Choose Standard or Itemized Deduction.",
    "Click Calculate to see your capital gains tax, effective rate and after-tax gain.",
  ],

  examples: [
    { inputs: "Buy: $10,000, Sell: $15,000, Long-Term, Other Income: $60,000, Single, 2026", result: "Gain: $5,000, Tax: $750, Effective Rate: 15.0%, After-Tax Gain: $4,250", explanation: "The entire gain falls in the 15% long-term bracket since other taxable income already exceeds the 0% threshold." },
    { inputs: "Buy: $10,000, Sell: $15,000, Short-Term, Other Income: $60,000, Single, 2026", result: "Gain: $5,000, Tax: $1,100, Effective Rate: 22.0%, After-Tax Gain: $3,900", explanation: "Short-term gains are taxed as ordinary income, here entirely within the 22% bracket." },
    { inputs: "Buy: $50,000, Sell: $40,000, Long-Term, Other Income: $80,000, Married Filing Jointly, 2026", result: "Gain: −$10,000, Tax: $0", explanation: "A capital loss generates no tax; losses can typically offset other gains or a limited amount of ordinary income." },
    { inputs: "Buy: $5,000, Sell: $60,000, Long-Term, Other Income: $20,000, Single, 2026", result: "Gain: $55,000, Tax: ~$4,433, Effective Rate: ~8.1%", explanation: "Part of the gain falls in the 0% bracket (income up to $49,450) and the rest in the 15% bracket, blending to a lower effective rate." },
  ],

  practicalUses: [
    "Estimating tax owed before selling stocks, crypto or other investments",
    "Deciding whether to wait for long-term treatment (over 1 year) before selling",
    "Comparing after-tax proceeds across different sale timing scenarios",
    "Planning asset sales around a lower-income year to hit the 0% long-term rate",
    "Estimating quarterly estimated tax payments after a large gain",
    "Comparing short-term vs long-term tax impact on the same trade",
    "Budgeting for taxes owed after selling a rental property or second home",
    "Understanding how a large gain can push other income into a higher bracket",
    "Evaluating whether to harvest losses to offset gains before year-end",
    "Modeling the tax impact of exercising and selling stock options",
    "Explaining stacked bracket taxation to someone new to investing",
  ],

  expertTips: [
    "Holding an asset for just over a year can significantly cut your tax rate — short-term gains are taxed as ordinary income, often at 22%+ instead of 15%.",
    "Capital losses can offset capital gains dollar-for-dollar, and up to $3,000 of net losses can offset ordinary income each year.",
    "This calculator doesn't include the 3.8% Net Investment Income Tax, which applies to high earners with investment income above certain thresholds.",
    "A large gain can push your other income into a higher tax bracket even though the gain itself is taxed at capital gains rates — plan withholding accordingly.",
    "Tax-loss harvesting late in the year can reduce your capital gains tax bill if you have both winning and losing positions.",
    "Gains inside tax-advantaged accounts like a 401(k) or IRA aren't subject to capital gains tax at the time of sale — only on withdrawal (and differently, depending on account type).",
    "Timing a sale into a lower-income year (e.g., after retirement or a job gap) can meaningfully increase how much of your gain falls in the 0% bracket.",
    "State capital gains tax varies widely — some states tax gains as ordinary income, others don't tax them at all.",
    "Real estate sales may qualify for a primary residence exclusion (up to $250,000 single / $500,000 married) that this calculator doesn't model.",
  ],

  commonMistakes: [
    { mistake: "Assuming the entire gain is taxed at one flat rate", fix: "Gains are stacked on your other income and can span multiple brackets, especially for large gains." },
    { mistake: "Confusing short-term and long-term holding periods", fix: "The IRS requires more than one year of ownership for long-term treatment — exactly one year or less is short-term." },
    { mistake: "Forgetting to include other income", fix: "Your capital gains rate depends on your total taxable income, not just the gain itself — always include other income." },
    { mistake: "Ignoring state capital gains tax", fix: "This tool covers federal tax only; check your state's rules separately, as they vary significantly." },
    { mistake: "Not accounting for the Net Investment Income Tax", fix: "High earners may owe an additional 3.8% federal tax on investment income not reflected in this estimate." },
    { mistake: "Treating a loss as taxable", fix: "A negative gain (loss) results in zero capital gains tax, and may even offset other income." },
    { mistake: "Overlooking the primary residence exclusion", fix: "Home sales may qualify for a large exclusion on gain that isn't modeled in this general-purpose calculator." },
  ],

  faq: [
    { q: "What's the difference between short-term and long-term capital gains?", a: "Short-term applies to assets held one year or less and is taxed at ordinary income rates; long-term applies to assets held over one year and is taxed at preferential 0%, 15% or 20% rates." },
    { q: "How is the capital gains tax rate determined?", a: "Your total taxable income, including the gain, determines which bracket(s) the gain falls into — it's stacked on top of your other income, not evaluated in isolation." },
    { q: "What is the 0% long-term capital gains rate threshold?", a: "For 2026, taxable income up to $49,450 (single) or $98,900 (married filing jointly) qualifies for the 0% long-term rate; for 2025 the thresholds are $48,350 and $96,700." },
    { q: "Does this include state capital gains tax?", a: "No, this calculator covers federal capital gains tax only — state tax treatment varies widely and isn't included." },
    { q: "What is the Net Investment Income Tax?", a: "It's an additional 3.8% federal tax on investment income for higher earners above certain income thresholds, not included in this calculator." },
    { q: "Can capital losses reduce my tax bill?", a: "Yes, losses offset gains dollar-for-dollar, and up to $3,000 of net losses per year can offset ordinary income, with any excess carried forward." },
    { q: "Why did my long-term gain span two tax rates?", a: "When a gain is large enough to push your total income across a bracket threshold, part of the gain is taxed at the lower rate and the rest at the higher rate." },
    { q: "Is cryptocurrency taxed the same as stocks?", a: "Yes, the IRS generally treats cryptocurrency as property, so the same short-term and long-term capital gains rules apply." },
    { q: "Does selling my primary home get special treatment?", a: "Often yes — up to $250,000 ($500,000 married filing jointly) of gain on a primary residence can be excluded under IRS rules, which this general calculator doesn't model." },
    { q: "What income should I enter as 'other income'?", a: "Enter your gross income from all other sources (wages, business income, interest, etc.) excluding the capital gain being calculated." },
    { q: "How accurate is this for real estate sales?", a: "It estimates standard capital gains tax but doesn't account for depreciation recapture, closing costs, or the primary residence exclusion." },
    { q: "Are dividends taxed the same as capital gains?", a: "Qualified dividends are taxed at the same 0/15/20% long-term rates; ordinary (non-qualified) dividends are taxed as regular income — this calculator doesn't separately model dividends." },
    { q: "What tax year should I select?", a: "Select the year you sold the asset — 2025 and 2026 have different bracket thresholds under current IRS inflation adjustments." },
    { q: "Is this calculator a substitute for a tax professional?", a: "No, it's built for quick planning estimates; consult tax software or a licensed preparer for a final, filing-ready number." },
  ],

  relatedCalculators: ["US Federal Tax Calculator", "Net Profit Calculator", "Stock Profit Calculator", "Dividend Yield Calculator", "Effective Tax Rate Calculator"],

    youMightAlsoLike: ["CAGR Calculator", "Age Calculator", "QR Code Generator"],
    

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Capital Gains Tax Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};