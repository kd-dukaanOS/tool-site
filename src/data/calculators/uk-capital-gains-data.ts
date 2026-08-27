import { pickYouMayLike } from "../calculator-pool";

export const ukCapitalGainsCalculatorContent = {
  meta: {
    seoTitle: "UK Capital Gains Tax Calculator - 2026/27 Free",
    metaDescription: "Free UK Capital Gains Tax calculator. Estimate tax owed using the 2026/27 £3,000 annual exemption and 18%/24% rates.",
    canonicalSlug: "/uk-capital-gains-tax-calculator",
    ogTitle: "UK Capital Gains Tax Calculator",
    ogDescription: "Estimate your Capital Gains Tax owed using current 2026/27 rates and allowance.",
    twitterTitle: "Free UK Capital Gains Tax Calculator",
    twitterDescription: "Estimate your CGT bill in seconds.",
  },

  hero: {
    text: "The UK Capital Gains Tax Calculator estimates the tax owed on a capital gain after applying the annual tax-free exemption, splitting the taxable gain across the basic and higher CGT rates based on your other income.",
  },

  about: {
    text: `Capital Gains Tax (CGT) is charged on the profit made when you sell or dispose of an asset that has increased in value, such as shares, a second property, or a business.

Every individual has a tax-free annual exempt amount — £3,000 for the 2026/27 tax year — that reduces the taxable portion of any gain before tax is calculated.

The remaining taxable gain is taxed at 18% for any amount that falls within your unused basic rate income tax band, and 24% for anything above it — these rates apply equally to most assets, including residential property, since the two rates were aligned.

Limitations: this tool doesn't account for Private Residence Relief on your main home, Business Asset Disposal Relief (taxed at a flat 18% for 2026/27), losses from other disposals, or gains on carried interest, which are taxed differently.`,
  },

  formula: {
    formula: "Taxable Gain = Total Gain − £3,000; Tax = (Gain in basic band × 18%) + (Gain above basic band × 24%)",
    variables: [
      { symbol: "Annual Exempt Amount", meaning: "Tax-free allowance for capital gains, £3,000 for 2026/27" },
      { symbol: "Basic Rate Band", meaning: "£37,700 — the income tax band that determines which CGT rate applies" },
    ],
    explanation: "After subtracting the exemption, the taxable gain is stacked on top of your other taxable income — any portion that still fits within the basic rate band is taxed at 18%, and the rest at 24%.",
    interpretation: "For example, with £20,000 of other taxable income and a £12,600 gain, £9,600 is taxable after the exemption; since £29,600 total stays under the £37,700 basic rate band, the whole gain is taxed at 18%, for £1,728 owed.",
  },

  steps: [
    "Enter your total capital gain for the tax year.",
    "Enter your other taxable income (salary, dividends, etc.) for the year.",
    "Enter your Personal Allowance (default £12,570 if left blank).",
    "Click Calculate to run the tool.",
    "Review your taxable gain, tax at each rate, and total tax owed.",
  ],

  examples: [
    { inputs: "Gain: £12,600, Other Income: £20,000, Allowance: £12,570", result: "Total Tax: £1,728 (all at 18%)", explanation: "The combined income and gain stay within the basic rate band, so the full gain is taxed at 18%." },
    { inputs: "Gain: £30,000, Other Income: £50,000, Allowance: £12,570", result: "Total Tax: ~£6,480 (all at 24%)", explanation: "High other income already uses up the basic rate band, pushing the entire taxable gain into the 24% rate." },
    { inputs: "Gain: £8,000, Other Income: £0, Allowance: £12,570", result: "Total Tax: £900 (all at 18%)", explanation: "A modest gain with low other income stays comfortably within the basic rate band." },
  ],

  practicalUses: [
    "Estimating tax owed before selling shares, a second property, or other assets",
    "Deciding whether to spread a large disposal across two tax years to use two annual exemptions",
    "Comparing tax outcomes at different levels of other taxable income",
    "Setting aside funds for a CGT bill ahead of the Self Assessment deadline",
    "Understanding how a bonus or salary increase affects the CGT rate on a planned sale",
    "Getting a quick estimate before consulting an accountant for a significant disposal",
  ],

  expertTips: [
    "Your main home is usually exempt from CGT under Private Residence Relief — this calculator is for other assets like shares, second properties, or business interests.",
    "Married couples and civil partners can transfer assets between themselves tax-free, potentially using both partners' annual exemptions.",
    "Capital losses from other disposals in the same or previous years can offset gains and reduce your taxable amount.",
    "Business Asset Disposal Relief offers a flat 18% rate (from April 2026) on qualifying business sales, up to a £1 million lifetime limit.",
    "CGT on UK residential property must generally be reported and paid within 60 days of completion, separately from your Self Assessment return.",
    "This is an estimate only — actual tax owed depends on your full tax return, reliefs claimed, and any losses carried forward.",
  ],

  commonMistakes: [
    { mistake: "Forgetting the annual exempt amount before calculating tax", fix: "Always subtract the £3,000 annual exemption from your total gain first — only the remainder is taxable." },
    { mistake: "Applying a flat rate instead of splitting across bands", fix: "The taxable gain is split — the portion within your unused basic rate band is taxed at 18%, and the rest at 24%." },
    { mistake: "Applying CGT to a main home sale", fix: "Most main home sales are covered by Private Residence Relief and owe no CGT — this tool is for other asset disposals." },
    { mistake: "Missing the 60-day reporting deadline for UK property", fix: "Gains on UK residential property must generally be reported and paid within 60 days of completion, separate from the annual Self Assessment deadline." },
    { mistake: "Ignoring available capital losses", fix: "Losses from other asset sales in the same or carried-forward years can reduce your taxable gain before tax is calculated." },
  ],

  faq: [
    { q: "What is the Capital Gains Tax annual exempt amount for 2026/27?", a: "The annual exempt amount for 2026/27 is £3,000 per individual — gains up to this amount in a tax year are tax-free." },
    { q: "What are the Capital Gains Tax rates for 2026/27?", a: "Basic rate taxpayers pay 18% and higher/additional rate taxpayers pay 24% on most gains, including residential property, since the rates were aligned in April 2026." },
    { q: "Do I pay Capital Gains Tax when I sell my house?", a: "Generally no, if it's your main residence — Private Residence Relief makes the gain tax-free, though second homes and buy-to-let properties are taxable." },
    { q: "How is Capital Gains Tax calculated?", a: "Your gain is reduced by the £3,000 annual exemption, then the taxable amount is taxed at 18% within your unused basic rate income tax band, or 24% above it." },
    { q: "Can I use capital losses to reduce my CGT bill?", a: "Yes, capital losses from other disposals in the same tax year, or carried forward from previous years, can offset gains before tax is calculated." },
    { q: "What is Business Asset Disposal Relief?", a: "It's a relief offering a flat 18% CGT rate (from April 2026) on qualifying business sales, up to a £1 million lifetime limit, lower than standard rates." },
    { q: "When do I need to report and pay Capital Gains Tax on property?", a: "UK residential property gains must generally be reported and paid within 60 days of completion, separately from your annual Self Assessment tax return." },
    { q: "Do married couples get separate CGT exemptions?", a: "Yes, each spouse or civil partner has their own £3,000 annual exemption, and assets can be transferred between them tax-free to make use of both." },
    { q: "Is Capital Gains Tax different for shares versus property?", a: "No, since April 2024 the main CGT rates for shares and other assets (18%/24%) match the rates for residential property." },
    { q: "How much CGT will I pay on selling shares?", a: "It depends on your other taxable income — gains within your unused basic rate band are taxed at 18%, and anything above at 24%, after the £3,000 exemption." },
    { q: "Do I pay CGT on cryptocurrency in the UK?", a: "Yes, HMRC treats cryptocurrency as a chargeable asset, so disposals like selling or trading it can trigger Capital Gains Tax at the standard 18%/24% rates." },
    { q: "What happens if I gift an asset to someone other than my spouse?", a: "Gifting an asset is treated as a disposal at market value, which can trigger CGT for the giver even though no money changed hands." },
    { q: "Is there a limit to how much I can offset with losses?", a: "No overall cap exists on offsetting losses against gains in the same year, but unused losses must be reported to HMRC to be carried forward." },
    { q: "How is carried interest taxed differently from other capital gains?", a: "Carried interest is taxed at 18% within the basic rate band or 28% above it, higher than standard asset gains, and will be taxed as trading profits from April 2026." },
  ],

  relatedCalculators: ["UK Pension Calculator", "UK Stamp Duty Calculator", "UK Dividend Tax Calculator", "Canada Capital Gains Tax Calculator"],

  youMayLike: pickYouMayLike("uk-capital-gains-tax-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "UK Capital Gains Tax Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};