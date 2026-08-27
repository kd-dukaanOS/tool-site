import { pickYouMayLike } from "../calculator-pool";

export const stockProfitCalculatorContent = {
  meta: {
    seoTitle: "Stock Profit Calculator - Gain, Loss & Return Free",
    metaDescription: "Free stock profit calculator. Find your net profit or loss, return percentage, total fees, and break-even price on a stock trade. Instant results.",
    canonicalSlug: "/stock-profit-calculator",
    ogTitle: "Stock Profit Calculator - Calculate Trade Gain or Loss",
    ogDescription: "See your exact profit, loss, and return on any stock trade.",
    twitterTitle: "Free Stock Profit Calculator",
    twitterDescription: "Calculate stock trade profit, loss, and return, free and instant.",
  },

  hero: {
    text: "The Stock Profit Calculator finds your exact net profit or loss on a stock trade, factoring in buy and sell prices, number of shares, and brokerage fees — plus your return percentage and break-even price.",
  },

  about: {
    text: `Calculating stock profit sounds simple — sell price minus buy price — but brokerage fees, commissions, and the number of shares traded all affect your actual take-home gain or loss.

This calculator computes your total cost basis (shares × buy price plus buy-side fees) and total proceeds (shares × sell price minus sell-side fees), then finds your net profit and return percentage.

It also calculates your break-even price — the exact sell price at which you'd cover your original cost plus all fees, with zero net gain or loss.

Limitations: this tool doesn't account for capital gains taxes, wash sale rules, or partial share transactions — check with a tax professional for how a specific trade affects your tax liability.`,
  },

  formula: {
    formula: "Net Profit = (Sell Price × Shares − Sell Fees) − (Buy Price × Shares + Buy Fees)",
    variables: [
      { symbol: "Total Cost", meaning: "Buy price × number of shares, plus any buy-side commissions or fees" },
      { symbol: "Total Proceeds", meaning: "Sell price × number of shares, minus any sell-side commissions or fees" },
      { symbol: "Break-Even Price", meaning: "The sell price needed to exactly cover your total cost and fees" },
    ],
    explanation: "Net profit subtracts your full cost basis, including fees paid to buy, from your net proceeds after fees paid to sell, giving your true dollar gain or loss on the trade.",
    interpretation: "For example, buying 100 shares at $50 ($5,000 + $5 fee) and selling at $58 ($5,800 − $5 fee) yields a net profit of about $790, a roughly 15.8% return.",
  },

  steps: [
    "Enter your buy price per share.",
    "Enter your sell price per share (or expected sell price).",
    "Enter the number of shares traded.",
    "Enter any buy-side and sell-side brokerage fees or commissions.",
    "Click Calculate to run the tool.",
    "Review your net profit, return percentage, and break-even price.",
  ],

  examples: [
    { inputs: "Buy: $50, Sell: $58, Shares: 100, Fees: $5 + $5", result: "Net Profit: ~$790, Return: ~15.8%", explanation: "A straightforward winning trade with small brokerage fees on both sides." },
    { inputs: "Buy: $120, Sell: $105, Shares: 50, Fees: $0 + $0", result: "Net Loss: -$750, Return: -12.5%", explanation: "A losing trade with commission-free brokerage still results in a meaningful percentage loss." },
    { inputs: "Buy: $10, Sell: $10.50, Shares: 1000, Fees: $10 + $10", result: "Net Profit: ~$480, Return: ~4.8%", explanation: "A small per-share gain on a large share count still nets a solid dollar profit after fees." },
  ],

  practicalUses: [
    "Checking exact profit or loss before closing a trade",
    "Comparing net returns across different brokers with different fee structures",
    "Finding the minimum sell price needed to break even on a position",
    "Estimating after-fee returns before deciding whether to hold or sell",
    "Reviewing past trades to understand your actual realized gains and losses",
    "Planning a trade size that accounts for fixed brokerage fees eating into smaller trades",
  ],

  expertTips: [
    "Even with commission-free trading common today, some brokers still charge regulatory or exchange fees — check your statement for the exact fees paid.",
    "Break-even price accounts for fees on both sides of the trade, so it's always slightly higher than your raw buy price.",
    "Percentage return matters more than dollar profit alone when comparing trade efficiency across different position sizes.",
    "Remember that this calculator shows pre-tax profit — short-term capital gains (held under a year) are typically taxed as ordinary income in the U.S.",
    "For frequent traders, small per-share fees can add up significantly over many trades — factor cumulative fees into your strategy.",
    "Always double check whether your reported buy/sell prices include or exclude any partial share or fractional trading adjustments.",
  ],

  commonMistakes: [
    { mistake: "Forgetting to include brokerage fees", fix: "Even small commissions or fees can meaningfully affect your real return, especially on smaller trades — always include them." },
    { mistake: "Confusing gross profit with net profit", fix: "Gross profit ignores fees; net profit subtracts them — use net profit for an accurate picture of your actual gain." },
    { mistake: "Ignoring capital gains tax implications", fix: "This calculator shows pre-tax profit — actual take-home gains will be lower after short- or long-term capital gains tax." },
    { mistake: "Using the wrong break-even price for stop-loss planning", fix: "Break-even price includes fees on both sides, so it's higher than your buy price — use it, not raw buy price, when setting a stop-loss." },
    { mistake: "Not accounting for partial sells", fix: "If you're selling only part of a position, prorate your cost basis and fees to that specific number of shares, not your entire holding." },
  ],

  faq: [
    { q: "How do you calculate stock profit?", a: "Subtract your total cost (buy price times shares, plus buy-side fees) from your total proceeds (sell price times shares, minus sell-side fees) to get net profit." },
    { q: "What is the formula for stock profit or loss?", a: "Net Profit = (Sell Price × Shares − Sell Fees) − (Buy Price × Shares + Buy Fees), which accounts for commissions on both sides of the trade." },
    { q: "What is a break-even price in stock trading?", a: "It's the exact sell price needed to recover your total cost basis and all fees, resulting in zero net profit or loss on the trade." },
    { q: "How do brokerage fees affect stock profit?", a: "Fees are subtracted from your proceeds and added to your cost basis, reducing your net profit compared to a simple sell-minus-buy price calculation." },
    { q: "What's the difference between gross profit and net profit on a stock trade?", a: "Gross profit is simply the price difference times shares, while net profit subtracts all brokerage fees and commissions from both the buy and sell sides." },
    { q: "How is stock return percentage calculated?", a: "Return percentage is your net profit divided by your total cost basis, multiplied by 100, showing your gain or loss relative to what you invested." },
    { q: "Are stock trading profits taxed?", a: "Yes, in the U.S., profits are subject to capital gains tax — short-term gains (held under a year) are taxed as ordinary income, while long-term gains get preferential tax rates." },
    { q: "How do I calculate profit on a partial stock sale?", a: "Prorate your original cost basis and fees to only the number of shares you're selling, then apply the same net profit formula to that portion." },
    { q: "What is short-term versus long-term capital gains tax on stocks?", a: "Short-term gains, from stocks held one year or less, are taxed at ordinary income rates; long-term gains, from stocks held over a year, qualify for lower capital gains tax rates." },
    { q: "How do I find my break-even price after fees?", a: "Add your total buy-side and sell-side fees to your total cost basis, then divide by the number of shares to get the true break-even price per share." },
    { q: "Does commission-free trading mean there are no fees?", a: "Not always — many commission-free brokers still pass through small regulatory or exchange fees, which can still affect your net profit calculation." },
    { q: "How do I calculate profit on multiple stock purchases at different prices?", a: "Use your average cost basis across all purchases (total dollars spent divided by total shares owned) as the buy price in the profit calculation." },
    { q: "What's a good return percentage on a stock trade?", a: "This varies widely by strategy and time horizon — there's no universal benchmark, though many investors compare returns against a broad market index like the S&P 500." },
    { q: "Should I include dividends when calculating stock profit?", a: "For total return, yes — dividends received during your holding period add to your overall gain and should be included alongside price appreciation for a complete picture." },
  ],

  relatedCalculators: ["Dividend Yield Calculator", "Investment Return Calculator", "CAGR Calculator", "Capital Gains Tax Calculator"],

  youMayLike: pickYouMayLike("stock-profit-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Stock Profit Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};