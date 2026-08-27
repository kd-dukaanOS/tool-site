import { pickYouMayLike } from "../calculator-pool";

export const canadaCapitalGainsCalculatorContent = {
  meta: {
    seoTitle: "Canada Capital Gains Tax Calculator - 2026 Free Estimate",
    metaDescription: "Free Canada capital gains tax calculator. Estimate your taxable capital gain and tax owed using the current 50% inclusion rate. Updated for 2026.",
    canonicalSlug: "/canada-capital-gains-tax-calculator",
    ogTitle: "Canada Capital Gains Tax Calculator",
    ogDescription: "Estimate the tax owed on your capital gain using the current Canadian inclusion rate.",
    twitterTitle: "Free Canada Capital Gains Tax Calculator",
    twitterDescription: "Estimate your capital gains tax in seconds.",
  },

  hero: {
    text: "The Canada Capital Gains Tax Calculator estimates the tax owed on the sale of an investment, property, or other capital asset using the current 50% inclusion rate and your marginal tax rate.",
  },

  about: {
    text: `A capital gain is the profit made when you sell a capital asset — such as stocks, mutual funds, or a secondary property — for more than its adjusted cost base plus any selling expenses.

In Canada, only a portion of a capital gain is taxable. This is called the inclusion rate. The government's proposed increase to a two-thirds inclusion rate on gains above $250,000 was scrapped, so the enacted rate remains one-half (50%) for all individuals regardless of gain size.

This calculator subtracts your adjusted cost base and outlays and expenses (like legal or brokerage fees) from your proceeds of disposition to find the capital gain, applies the 50% inclusion rate, then multiplies by your marginal tax rate to estimate the tax owed.

Limitations: this tool does not account for the Principal Residence Exemption, the Lifetime Capital Gains Exemption for qualified small business shares or farm/fishing property (currently $1.25 million, indexed from 2026), or capital losses that could offset the gain.`,
  },

  formula: {
    formula: "Tax Owed = (Proceeds − ACB − Expenses) × 50% × Marginal Tax Rate",
    variables: [
      { symbol: "ACB", meaning: "Adjusted cost base — what you originally paid for the asset plus improvements" },
      { symbol: "Inclusion Rate", meaning: "The taxable portion of a capital gain, currently 50%" },
    ],
    explanation: "The capital gain is found by subtracting the adjusted cost base and any selling expenses from the sale proceeds. Only half of that gain is added to taxable income, then taxed at your marginal rate.",
    interpretation: "For example, selling an investment for $150,000 with a $90,000 cost base and $2,000 in fees gives a $58,000 gain; at 50% inclusion, $29,000 is taxable, and at a 30% marginal rate that's roughly $8,700 in tax.",
  },

  steps: [
    "Enter the proceeds of disposition (the sale price of the asset).",
    "Enter the adjusted cost base (what you originally paid, plus improvements).",
    "Enter any outlays and expenses, such as legal or brokerage fees.",
    "Enter your marginal tax rate for the year.",
    "Click Calculate to run the tool.",
    "Review your capital gain, taxable portion, and estimated tax owed.",
  ],

  examples: [
    { inputs: "Proceeds: $150,000, ACB: $90,000, Expenses: $2,000, Rate: 30%", result: "Estimated Tax: ~$8,700", explanation: "A moderate gain taxed at a mid-range marginal rate using the 50% inclusion rate." },
    { inputs: "Proceeds: $500,000, ACB: $200,000, Expenses: $10,000, Rate: 45%", result: "Estimated Tax: ~$65,250", explanation: "A larger gain, such as a secondary property sale, at a high marginal tax rate." },
    { inputs: "Proceeds: $50,000, ACB: $48,000, Expenses: $500, Rate: 20%", result: "Estimated Tax: ~$150", explanation: "A small gain results in a modest tax bill even after the inclusion rate is applied." },
  ],

  practicalUses: [
    "Estimating tax owed before selling stocks, mutual funds, or a secondary property",
    "Comparing the after-tax proceeds of selling now versus later",
    "Planning the timing of a disposition around your expected marginal tax rate",
    "Setting aside funds for a tax bill ahead of filing season",
    "Understanding how selling expenses reduce the taxable gain",
    "Getting a quick estimate before consulting an accountant for a large disposition",
  ],

  expertTips: [
    "Your principal residence is generally exempt from capital gains tax — this calculator is for other property and investments, not your primary home.",
    "Capital losses from other investments can offset capital gains in the same year, or be carried back three years or forward indefinitely.",
    "Qualified small business shares and farm or fishing property may qualify for the Lifetime Capital Gains Exemption, currently up to $1.25 million.",
    "Your marginal tax rate — not your average tax rate — is what applies to the taxable portion of a capital gain, since it stacks on top of your other income.",
    "Selling expenses like legal fees, appraisal costs, and brokerage commissions reduce your taxable gain, so keep records of them.",
    "This is an estimate only — actual tax owed depends on your full tax return, other income, and province of residence.",
  ],

  commonMistakes: [
    { mistake: "Assuming the entire capital gain is taxable", fix: "Only 50% of the capital gain is included in taxable income under the current enacted inclusion rate." },
    { mistake: "Forgetting to subtract selling expenses from proceeds", fix: "Legal fees, brokerage commissions, and other outlays reduce the capital gain and should be subtracted from the proceeds." },
    { mistake: "Using average tax rate instead of marginal tax rate", fix: "Capital gains are taxed at your marginal rate since they're added on top of your existing income." },
    { mistake: "Applying capital gains tax to a principal residence sale", fix: "Most principal residence sales are fully exempt under the Principal Residence Exemption — this tool is for other assets." },
    { mistake: "Ignoring available capital losses", fix: "Capital losses from the same year, or carried forward/back, can offset capital gains and reduce the amount owed." },
  ],

  faq: [
    { q: "What is the capital gains inclusion rate in Canada for 2026?", a: "The current enacted inclusion rate is 50% — the proposed increase to two-thirds on gains above $250,000 was cancelled and will not take effect." },
    { q: "How is capital gains tax calculated in Canada?", a: "The gain (proceeds minus adjusted cost base and selling expenses) is multiplied by the 50% inclusion rate, and that taxable portion is taxed at your marginal tax rate." },
    { q: "Do I pay capital gains tax when I sell my house in Canada?", a: "Generally no, if it's your principal residence — the Principal Residence Exemption makes the gain tax-free, though secondary properties like cottages or rental homes are taxable." },
    { q: "What is the adjusted cost base (ACB)?", a: "It's what you paid to acquire the asset, including the purchase price plus any capital improvements or acquisition costs, used to calculate your gain when you sell." },
    { q: "Was the capital gains tax increase in Canada cancelled?", a: "Yes, the proposed increase from a 50% to a two-thirds inclusion rate on gains above $250,000 was scrapped, and the inclusion rate remains at 50%." },
    { q: "Can capital losses reduce my capital gains tax?", a: "Yes, capital losses can offset capital gains in the same tax year, or be carried back three years or forward indefinitely to offset future gains." },
    { q: "What is the Lifetime Capital Gains Exemption?", a: "It allows individuals to shelter up to $1.25 million (indexed starting 2026) in capital gains from the sale of qualified small business shares or farming and fishing property from tax." },
    { q: "How much tax will I pay on selling stocks in Canada?", a: "It depends on your marginal tax rate and province — half of your stock gain is added to your taxable income and taxed at your combined federal and provincial marginal rate." },
    { q: "Is capital gains tax different for corporations in Canada?", a: "Corporations use the same 50% inclusion rate as individuals, but the taxable gain is taxed at corporate tax rates rather than personal marginal rates." },
    { q: "Do I need to report a capital gain if I didn't sell everything?", a: "Yes, a capital gain is triggered whenever you dispose of any portion of a capital property, even a partial sale, and must be reported in that tax year." },
    { q: "How does selling a rental property affect capital gains tax?", a: "Rental properties don't qualify for the Principal Residence Exemption, so the full gain (proceeds minus ACB and expenses) is subject to the 50% inclusion rate." },
    { q: "What happens if I gift or inherit a capital asset in Canada?", a: "Gifting or inheriting property is generally treated as a deemed disposition at fair market value, which can trigger capital gains tax for the person giving or the deceased's estate." },
    { q: "Can I defer capital gains tax in Canada?", a: "Certain strategies, like reinvesting through specific rollover provisions or spreading a gain using a capital gains reserve over up to five years, may defer part of the tax." },
    { q: "Does capital gains tax apply to cryptocurrency in Canada?", a: "Yes, the CRA treats cryptocurrency as a commodity, so selling, trading, or spending it can trigger a capital gain subject to the same 50% inclusion rate." },
  ],

  relatedCalculators: ["Canada Retirement Calculator", "RRSP Calculator", "TFSA Calculator", "GST/HST Calculator"],

  youMayLike: pickYouMayLike("canada-capital-gains-tax-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Canada Capital Gains Tax Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};