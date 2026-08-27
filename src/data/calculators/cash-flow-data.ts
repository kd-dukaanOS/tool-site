import { pickYouMayLike } from "../calculator-pool";

export const cashFlowCalculatorContent = {
  meta: {
    seoTitle: "Cash Flow Calculator - Free Business Cash Flow Tool",
    metaDescription: "Free cash flow calculator. Combine operating, investing, and financing activities to find net cash flow, ending balance, and cash flow margin.",
    canonicalSlug: "/cash-flow-calculator",
    ogTitle: "Cash Flow Calculator - Net Cash Flow & Ending Balance",
    ogDescription: "Calculate your business's net cash flow and projected ending cash balance instantly.",
    twitterTitle: "Free Cash Flow Calculator",
    twitterDescription: "See your net cash flow and ending balance in seconds.",
  },

  hero: {
    text: "The Cash Flow Calculator combines your operating, investing, and financing cash flows to show your net cash flow for the period, your projected ending cash balance, and your operating cash flow margin.",
  },

  about: {
    text: `Cash flow measures the actual money moving in and out of your business, separate from accounting profit — a profitable business can still run out of cash if inflows and outflows are poorly timed.

Cash flow is grouped into three activities: operating (day-to-day revenue and expenses), investing (equipment, asset purchases or sales), and financing (loans, investor funding, debt repayments). Adding all three gives your net cash flow for the period.

This calculator adds your net cash flow to your beginning cash balance to project your ending balance, and — if you provide monthly revenue — calculates your operating cash flow margin, a key efficiency metric investors and lenders look at.

Limitations: this is a simplified single-period snapshot, not a full cash flow statement. It doesn't account for accrual timing differences, non-cash items like depreciation, or multi-month projections — use it for quick estimates, not formal financial statements.`,
  },

  formula: {
    formula: "Operating Cash Flow = Cash Inflows − Cash Outflows; Net Cash Flow = Operating + Investing + Financing; Ending Balance = Beginning Balance + Net Cash Flow",
    variables: [
      { symbol: "Operating Cash Flow", meaning: "Cash generated or used by core business operations" },
      { symbol: "Net Cash Flow", meaning: "Total change in cash across operating, investing, and financing activities" },
      { symbol: "Cash Flow Margin", meaning: "Operating cash flow as a percentage of revenue" },
    ],
    explanation: "Operating inflows and outflows determine core cash generation; investing and financing cash flows are added on top (as positive or negative values) to find the total net change in cash, which is then applied to the beginning balance.",
    interpretation: "For example, $40,000 in operating inflows minus $28,000 in outflows gives $12,000 operating cash flow — a healthy sign if revenue is $45,000, giving a cash flow margin of roughly 27%.",
  },

  steps: [
    "Enter your beginning cash balance for the period.",
    "Enter your total operating cash inflows (revenue collected).",
    "Enter your total operating cash outflows (expenses paid).",
    "Enter your net investing cash flow (negative for purchases, positive for asset sales).",
    "Enter your net financing cash flow (positive for loans/funding received, negative for repayments).",
    "Optionally enter monthly revenue to see your cash flow margin.",
    "Click Calculate to see your net cash flow and ending balance.",
  ],

  examples: [
    { inputs: "Beginning: $50,000, Inflows: $40,000, Outflows: $28,000, Investing: -$5,000, Financing: $10,000, Revenue: $45,000", result: "Operating CF: $12,000, Net CF: $17,000, Ending Balance: $67,000, Margin: 26.7%", explanation: "Positive operating cash flow plus a financing boost pushes ending balance up despite an equipment purchase." },
    { inputs: "Beginning: $20,000, Inflows: $15,000, Outflows: $22,000, Investing: $0, Financing: $0, Revenue: $16,000", result: "Operating CF: -$7,000, Net CF: -$7,000, Ending Balance: $13,000, Margin: -43.8%", explanation: "Outflows exceeding inflows signals a cash burn month worth investigating." },
    { inputs: "Beginning: $100,000, Inflows: $60,000, Outflows: $45,000, Investing: -$20,000, Financing: -$8,000, Revenue: $62,000", result: "Operating CF: $15,000, Net CF: -$13,000, Ending Balance: $87,000, Margin: 24.2%", explanation: "Strong operations are offset by a large equipment purchase and loan repayment, still leaving healthy operating margin." },
  ],

  practicalUses: [
    "Checking whether your business generated or burned cash this month",
    "Projecting your ending cash balance before a major purchase or loan repayment",
    "Comparing operating cash flow margin against industry benchmarks",
    "Spotting early warning signs of a cash crunch before it happens",
    "Preparing simple cash flow figures for a lender or investor conversation",
    "Separating healthy operating performance from one-off financing or investing swings",
  ],

  expertTips: [
    "Operating cash flow is the most important number here — investing and financing activities are often one-off and shouldn't mask a weak core business.",
    "A positive net cash flow driven mainly by financing (loans, investor funding) isn't the same as a business that's cash flow positive on its own.",
    "Track cash flow monthly, not just at year-end — seasonal businesses can look fine annually while nearly running out of cash mid-year.",
    "A cash flow margin above 15-20% is generally considered strong for most small businesses; SaaS companies often target higher.",
    "Negative cash flow isn't automatically bad if it's funding growth (e.g., inventory buildup ahead of a busy season) — context matters.",
    "Keep at least 3-6 months of operating expenses as a cash buffer to absorb a bad month without a crisis.",
  ],

  commonMistakes: [
    { mistake: "Confusing cash flow with profit", fix: "Profit includes non-cash items like depreciation and accrued revenue; cash flow only counts money that actually moved." },
    { mistake: "Ignoring investing and financing activities", fix: "A business can look cash-flow healthy purely because of a loan — always check the operating cash flow line separately." },
    { mistake: "Using annual figures to judge monthly health", fix: "Cash flow problems often show up in specific months — calculate this on a monthly or quarterly basis for early warning." },
    { mistake: "Forgetting to include all outflows", fix: "Include taxes, loan interest, and irregular expenses, not just recurring operating costs, for an accurate picture." },
    { mistake: "Not tracking cash flow margin trend over time", fix: "A single month's margin means little — track it over several periods to spot a real trend." },
  ],

  faq: [
    { q: "What is a cash flow calculator?", a: "A cash flow calculator combines your operating, investing, and financing cash flows to show your net change in cash and projected ending cash balance for a period." },
    { q: "What is the formula for cash flow?", a: "Operating Cash Flow = Cash Inflows minus Cash Outflows; Net Cash Flow = Operating + Investing + Financing cash flows, which is then added to your beginning cash balance." },
    { q: "What's the difference between cash flow and profit?", a: "Profit includes non-cash accounting items like depreciation and revenue not yet collected; cash flow only reflects money that has actually moved in or out of your bank account." },
    { q: "What is a good cash flow margin?", a: "A cash flow margin (operating cash flow ÷ revenue) above 15-20% is generally considered healthy for most small businesses, though benchmarks vary widely by industry." },
    { q: "What are the three types of cash flow?", a: "Operating cash flow (core business activity), investing cash flow (asset purchases or sales), and financing cash flow (loans, investor funding, and repayments) make up total net cash flow." },
    { q: "Can a profitable business have negative cash flow?", a: "Yes — a business can be profitable on paper while running out of cash due to slow customer payments, high inventory, or heavy investment spending." },
    { q: "How do I calculate operating cash flow?", a: "Subtract your operating cash outflows (expenses paid) from your operating cash inflows (revenue collected) during the period." },
    { q: "Why is negative investing cash flow not always bad?", a: "Negative investing cash flow often reflects healthy growth spending, like purchasing equipment or expanding facilities, rather than financial trouble." },
    { q: "How often should I calculate my business cash flow?", a: "Most small businesses benefit from calculating cash flow monthly, since quarterly or annual views can hide short-term cash shortages." },
    { q: "What causes negative cash flow in a small business?", a: "Common causes include slow-paying customers, overstocking inventory, one-time large purchases, seasonal revenue dips, and rapid unfunded growth." },
    { q: "How much cash reserve should a business keep?", a: "A common guideline is 3-6 months of operating expenses as a cash reserve, though businesses with volatile revenue may want more." },
    { q: "Does financing cash flow include loan interest?", a: "Loan interest paid is typically included as an operating outflow, while the loan principal received or repaid is recorded under financing cash flow." },
    { q: "What's the difference between cash flow and cash flow statement?", a: "A cash flow calculator gives a quick single-period estimate, while a full cash flow statement is a formal accounting document required for audited financials." },
    { q: "Is positive cash flow the same as being profitable?", a: "No — positive cash flow just means more cash came in than went out during the period; a business can have positive cash flow while still operating at an accounting loss." },
  ],

  relatedCalculators: ["Burn Rate Calculator", "Runway Calculator", "Break-Even Calculator", "Net Profit Calculator"],

  youMayLike: pickYouMayLike("cash-flow-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Cash Flow Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};