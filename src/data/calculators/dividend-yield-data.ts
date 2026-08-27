import { pickYouMayLike } from "../calculator-pool";

export const dividendYieldCalculatorContent = {
  meta: {
    seoTitle: "Dividend Yield Calculator - Stock Income Estimator Free",
    metaDescription: "Free dividend yield calculator. Find a stock's dividend yield, your annual and monthly dividend income, and yield on cost. Instant results.",
    canonicalSlug: "/dividend-yield-calculator",
    ogTitle: "Dividend Yield Calculator - Estimate Your Dividend Income",
    ogDescription: "Calculate dividend yield and projected income from your stock holdings.",
    twitterTitle: "Free Dividend Yield Calculator",
    twitterDescription: "Find your dividend yield and income, free and instant.",
  },

  hero: {
    text: "The Dividend Yield Calculator finds a stock's dividend yield from its current price and annual dividend per share, then projects your annual and monthly dividend income and yield on cost based on your original purchase price.",
  },

  about: {
    text: `Dividend yield measures how much a company pays out in dividends each year relative to its share price, expressed as a percentage — a key metric for income-focused investors.

This calculator divides the annual dividend per share by the current share price to find the yield, then multiplies by your number of shares to estimate your actual dividend income.

It also calculates "yield on cost" — your dividend yield based on what you originally paid, rather than the current price — which is useful for tracking how your income has grown relative to your original investment.

Limitations: this tool assumes a constant, known dividend amount — it doesn't predict future dividend increases or cuts, account for dividend taxes, or factor in stock price changes over time.`,
  },

  formula: {
    formula: "Dividend Yield = (Annual Dividend per Share / Current Share Price) × 100",
    variables: [
      { symbol: "Annual Dividend per Share", meaning: "Total dividends paid per share over the past 12 months" },
      { symbol: "Current Share Price", meaning: "The stock's current market price" },
      { symbol: "Yield on Cost", meaning: "Annual dividend per share divided by your original purchase price" },
    ],
    explanation: "The yield expresses dividend income as a percentage of the share price, letting you compare income potential across different stocks regardless of their price levels.",
    interpretation: "For example, a stock trading at $50 that pays $2.00 per share annually has a 4% dividend yield — owning 100 shares would generate $200 per year in dividend income.",
  },

  steps: [
    "Enter the stock's current share price.",
    "Enter the annual dividend paid per share.",
    "Enter the number of shares you own or plan to buy.",
    "Optionally enter your original purchase price to see yield on cost.",
    "Click Calculate to run the tool.",
    "Review your dividend yield, annual income, and yield on cost.",
  ],

  examples: [
    { inputs: "Share Price: $50, Dividend: $2.00/share, Shares: 100", result: "Dividend Yield: 4.00%, Annual Income: $200", explanation: "A standard dividend yield calculation for a mid-cap income stock." },
    { inputs: "Share Price: $150, Dividend: $6.00/share, Shares: 50, Purchase Price: $90", result: "Yield: 4.00%, Yield on Cost: 6.67%", explanation: "Yield on cost is notably higher than current yield when the stock has appreciated since purchase." },
    { inputs: "Share Price: $25, Dividend: $1.50/share, Shares: 500", result: "Dividend Yield: 6.00%, Annual Income: $750", explanation: "A higher-yield stock generates more income per dollar invested, though often with more risk." },
  ],

  practicalUses: [
    "Comparing income potential across different dividend-paying stocks",
    "Estimating passive income from a current or planned portfolio",
    "Tracking how your yield on cost has grown as a company raises its dividend",
    "Screening stocks for a dividend growth or income investing strategy",
    "Projecting monthly income for retirement or supplemental cash flow planning",
    "Checking whether a stock's yield looks unusually high, which can sometimes signal risk",
  ],

  expertTips: [
    "A dividend yield that looks unusually high compared to peers can sometimes signal financial trouble or an unsustainable payout — always check the payout ratio too.",
    "Yield on cost naturally rises over time for stocks with a growing dividend, even if the current yield based on market price stays flat.",
    "Dividend yield alone doesn't capture total return — a low-yield growth stock can still outperform a high-yield stock through price appreciation.",
    "Qualified dividends are typically taxed at lower capital gains rates in the U.S., while non-qualified dividends are taxed as ordinary income — check your specific holdings.",
    "Reinvesting dividends (DRIP) compounds your share count over time, which this calculator doesn't model — it shows a snapshot based on current shares held.",
    "Compare a stock's dividend yield against its 5-year average yield to see whether it's currently cheap or expensive relative to its own history.",
  ],

  commonMistakes: [
    { mistake: "Chasing the highest yield without checking sustainability", fix: "Check the payout ratio and free cash flow coverage — an unsustainably high yield often precedes a dividend cut." },
    { mistake: "Confusing dividend yield with yield on cost", fix: "Dividend yield uses the current share price; yield on cost uses your original purchase price — they diverge as the stock price changes." },
    { mistake: "Ignoring dividend taxes when estimating income", fix: "Dividend income is typically taxable — factor in your tax rate when estimating actual spendable income from dividends." },
    { mistake: "Assuming the dividend will never change", fix: "Companies can raise, cut, or suspend dividends — use recent, verified dividend data rather than outdated figures." },
    { mistake: "Overlooking total return in favor of yield alone", fix: "A stock's total return includes both dividends and price appreciation — a low-yield stock can still be the better overall investment." },
  ],

  faq: [
    { q: "What is dividend yield?", a: "Dividend yield is the annual dividend per share divided by the current share price, expressed as a percentage, showing how much income a stock generates relative to its price." },
    { q: "How do you calculate dividend yield?", a: "Divide the annual dividend paid per share by the current share price, then multiply by 100 to express the result as a percentage." },
    { q: "What is a good dividend yield?", a: "Many income investors consider a yield between 2% and 6% reasonable, though this varies by sector — yields far above that range can sometimes signal higher risk." },
    { q: "What is yield on cost?", a: "Yield on cost is the annual dividend per share divided by your original purchase price rather than the current price, showing your effective income return based on what you actually paid." },
    { q: "How much dividend income will I earn from 100 shares?", a: "Multiply the annual dividend per share by 100 — for example, a $2.00 per share dividend on 100 shares generates $200 in annual dividend income." },
    { q: "Why is dividend yield inversely related to share price?", a: "Since yield is dividend divided by price, a rising share price (with a flat dividend) lowers the yield, while a falling share price raises the yield." },
    { q: "Are dividend yields guaranteed?", a: "No, dividend yields are based on the most recent payout and current price, but companies can change, reduce, or eliminate dividends at any time based on financial performance." },
    { q: "What's the difference between dividend yield and dividend growth rate?", a: "Dividend yield measures current income relative to price, while dividend growth rate measures how much a company's dividend payment has increased over time." },
    { q: "How are dividends taxed?", a: "In the U.S., qualified dividends are typically taxed at long-term capital gains rates, while non-qualified (ordinary) dividends are taxed as regular income — rates vary by holding period and account type." },
    { q: "Is a high dividend yield always good?", a: "Not necessarily — an unusually high yield can result from a falling stock price and may signal the market expects a dividend cut, so it's worth investigating further." },
    { q: "What is dividend reinvestment (DRIP)?", a: "DRIP automatically uses dividend payments to purchase additional shares instead of paying out cash, compounding your share count and future dividend income over time." },
    { q: "How often are dividends typically paid?", a: "Most U.S. companies pay dividends quarterly, though some pay monthly, semi-annually, or annually depending on the company and market." },
    { q: "Can dividend yield help me build passive income?", a: "Yes, many investors build dividend portfolios specifically to generate regular passive income, using yield and payout consistency as key selection criteria." },
    { q: "What's the difference between dividend yield and total return?", a: "Dividend yield only measures income from dividends, while total return includes both dividend income and any capital gains or losses from share price changes." },
  ],

  relatedCalculators: ["Stock Profit Calculator", "Investment Return Calculator", "CAGR Calculator", "Compound Interest Calculator"],

  youMayLike: pickYouMayLike("dividend-yield-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Dividend Yield Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};