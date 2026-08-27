import { pickYouMayLike } from "../calculator-pool";

export const ukDividendTaxCalculatorContent = {
  meta: {
    seoTitle: "UK Dividend Tax Calculator 2026/27 - Free & Instant",
    metaDescription: "Free UK dividend tax calculator for 2026/27. Enter your income and dividends to see tax owed, net dividend income, and effective rate — updated rates.",
    canonicalSlug: "/uk-dividend-tax-calculator",
    ogTitle: "UK Dividend Tax Calculator 2026/27",
    ogDescription: "Calculate your UK dividend tax instantly using current HMRC rates and thresholds.",
    twitterTitle: "Free UK Dividend Tax Calculator",
    twitterDescription: "See your dividend tax, net income, and effective rate in seconds.",
  },

  hero: {
    text: "The UK Dividend Tax Calculator works out how much tax you owe on dividend income by stacking it on top of your other taxable income, applying your Personal Allowance and the £500 dividend allowance, then taxing the remainder at the correct basic, higher, or additional rate for the tax year you choose.",
  },

  about: {
    text: `UK dividend income is taxed separately from wages, but it's still added on top of your other income to work out which tax band it falls into — salary and pensions are taxed first, dividends last.

Every taxpayer gets a £500 dividend allowance (2024/25 onward) taxed at 0%, on top of any unused Personal Allowance. From 6 April 2026, dividend tax rates rose to 10.75% (basic rate), 35.75% (higher rate), and 39.35% (additional rate), up from 8.75%/33.75%/39.35% in prior years.

If your total income exceeds £100,000, your Personal Allowance tapers down by £1 for every £2 earned above that, reaching £0 at £125,140 — this calculator applies that taper automatically when working out how much of your dividend falls into each band.

Limitations: this tool covers standard UK-wide dividend tax rules only. It doesn't account for dividends held in an ISA or pension (which are tax-free), foreign withholding tax, Scottish income tax bands (dividends use UK-wide rates regardless of residence), or director's National Insurance — use it as a planning estimate, not a filed tax return.`,
  },

  formula: {
    formula: "Taxable Dividends = Dividend Income − (Unused Personal Allowance + £500 Allowance); Tax = Σ(band amount × band rate)",
    variables: [
      { symbol: "Personal Allowance", meaning: "£12,570 standard, tapering to £0 between £100,000 and £125,140 total income" },
      { symbol: "Dividend Allowance", meaning: "First £500 of taxable dividend income taxed at 0%, but still occupies its band position" },
      { symbol: "Band Rate", meaning: "10.75% basic, 35.75% higher, 39.35% additional (2026/27)" },
    ],
    explanation: "Other income is taxed first and fills the lower part of the income scale; dividends stack on top, using any leftover Personal Allowance, then the £500 dividend allowance, then the basic/higher/additional rate for whatever band the remaining dividend income lands in.",
    interpretation: "For example, £30,000 salary plus £20,000 dividends in 2026/27 uses the full Personal Allowance on salary, so almost all the dividend is taxable — split between the basic and higher rate bands depending on exactly where £50,270 falls.",
  },

  steps: [
    "Select the tax year you want to calculate for.",
    "Enter your other taxable income (salary, pension, rental income, etc.).",
    "Enter your total dividend income for the year.",
    "Click Calculate to run the tool.",
    "Review your total dividend tax, net dividend income, and effective rate.",
    "Check how much of your allowance (Personal Allowance + dividend allowance) was used.",
  ],

  examples: [
    { inputs: "2026/27, Other Income: £0, Dividends: £15,000", result: "Tax: £270, Net: £14,730, Effective Rate: 1.8%", explanation: "Personal Allowance covers £12,570 and the dividend allowance covers £500, leaving only £1,930 taxable at 10.75%." },
    { inputs: "2026/27, Other Income: £30,000, Dividends: £20,000", result: "Tax: £4,988, Net: £15,012, Effective Rate: 24.9%", explanation: "Salary uses the full Personal Allowance, so dividends split across the basic and higher rate bands." },
    { inputs: "2026/27, Other Income: £110,000, Dividends: £10,000", result: "Tax: £3,479, Net: £6,521, Effective Rate: 34.8%", explanation: "Personal Allowance is tapered here, and both salary and dividends sit in the higher/additional rate territory." },
  ],

  practicalUses: [
    "Estimating tax owed before extracting profit from a limited company as dividends",
    "Comparing salary vs dividend mixes for tax-efficient business owner pay",
    "Planning dividend timing around the £100,000 Personal Allowance taper",
    "Checking whether you'll cross into the higher or additional rate band this year",
    "Budgeting for a Self Assessment tax bill on investment dividend income",
    "Testing how a lower/higher dividend amount changes your effective tax rate",
  ],

  expertTips: [
    "Dividends are always taxed after salary, pension, and rental income — so raising other income can push dividends into a higher band even if the dividend amount stays the same.",
    "The £500 dividend allowance doesn't create extra basic-rate room — it's taxed at 0% but still sits wherever your dividend income falls in the stack.",
    "Holding shares in a Stocks & Shares ISA shields dividend income from this tax entirely, regardless of amount.",
    "Married couples can transfer shares between spouses tax-free, effectively doubling the Personal Allowance and dividend allowance available to a household.",
    "If your income is near £100,000, extra dividends can trigger the Personal Allowance taper, creating an effective marginal rate above the headline band rate.",
    "You must register for Self Assessment if dividend income exceeds £10,000, even if tax is otherwise fully covered by allowances.",
  ],

  commonMistakes: [
    { mistake: "Assuming the £500 dividend allowance is on top of the basic-rate band", fix: "It only means that slice is taxed at 0% — it doesn't extend the basic rate band or change where higher rate starts." },
    { mistake: "Forgetting the Personal Allowance taper above £100,000", fix: "Include all taxable income when checking whether you're above £100,000, since this reduces your Personal Allowance and increases taxable dividends." },
    { mistake: "Using Scottish income tax bands for dividends", fix: "Dividend tax rates and thresholds are UK-wide even for Scottish taxpayers — only earned income uses Scottish bands." },
    { mistake: "Ignoring dividends held inside an ISA or pension", fix: "Only enter dividend income from shares held outside tax-efficient wrappers — ISA and pension dividends are tax-free and shouldn't be included." },
    { mistake: "Not accounting for other income when estimating dividend tax", fix: "Dividends stack on top of salary/pension income, so the same dividend amount can be taxed very differently depending on your other income." },
  ],

  faq: [
    { q: "What is the UK dividend tax rate for 2026/27?", a: "For 2026/27, dividend tax is 10.75% for basic rate taxpayers, 35.75% for higher rate taxpayers, and 39.35% for additional rate taxpayers, after the £500 dividend allowance." },
    { q: "What is the dividend allowance for 2026/27?", a: "The dividend allowance is £500 for 2026/27, the same as 2024/25 and 2025/26 — the first £500 of dividend income each year is tax-free regardless of your income band." },
    { q: "How much dividend income is tax-free in the UK?", a: "If you have no other income, you can typically receive up to £13,070 in dividends tax-free in 2026/27 — £12,570 covered by the Personal Allowance plus £500 by the dividend allowance." },
    { q: "Do I pay tax on dividends if I have no other income?", a: "Only above the combined £13,070 of Personal Allowance and dividend allowance — dividends below that threshold are tax-free if you have no other taxable income." },
    { q: "How is dividend tax calculated in the UK?", a: "Dividends are added on top of your other taxable income; any unused Personal Allowance and the £500 dividend allowance apply first, then the remainder is taxed at 10.75%, 35.75%, or 39.35% depending on which band it falls into." },
    { q: "What is the higher rate dividend tax threshold?", a: "Higher rate dividend tax (35.75% in 2026/27) applies once your total income exceeds £50,270; the additional rate (39.35%) applies above £125,140." },
    { q: "Do dividends count as income for tax purposes?", a: "Yes, dividends count as taxable income and are added to your other income to determine your overall tax band, even though they're taxed at separate dividend rates." },
    { q: "Can I avoid paying tax on dividends?", a: "Legal ways to reduce dividend tax include holding shares in an ISA or pension, using both spouses' allowances, and staying within the £500 dividend allowance and unused Personal Allowance." },
    { q: "Do I need to file a Self Assessment for dividend income?", a: "You must register for Self Assessment if your dividend income exceeds £10,000 in a tax year, or if you owe tax on dividends above your allowances and don't already file a return." },
    { q: "How does the Personal Allowance affect dividend tax?", a: "Any Personal Allowance not used by salary or pension income can be applied against dividends first, before the £500 dividend allowance and the taxable bands kick in." },
    { q: "Are dividends taxed differently in Scotland?", a: "No — Scottish income tax bands only apply to earned income like salary and pensions; dividend tax rates and thresholds are the same UK-wide figures for all UK taxpayers." },
    { q: "What happens to my Personal Allowance if I earn over £100,000?", a: "Your Personal Allowance reduces by £1 for every £2 of total income over £100,000, reaching £0 at £125,140 — this can increase the amount of dividend income that becomes taxable." },
    { q: "How much tax will I pay on £50,000 in dividends?", a: "It depends heavily on your other income — with no other income in 2026/27, roughly £4,000-£5,000 in tax is typical, but this rises significantly if salary or pension income is stacked underneath." },
    { q: "Is dividend income from an ISA taxable?", a: "No — dividends received on shares or funds held inside a Stocks & Shares ISA are completely free of dividend tax, regardless of the amount." },
  ],

  relatedCalculators: ["UK Capital Gains Tax Calculator", "UK Stamp Duty Calculator", "UK Pension Calculator", "UK Student Loan Calculator"],

  youMayLike: pickYouMayLike("uk-dividend-tax-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "UK Dividend Tax Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};