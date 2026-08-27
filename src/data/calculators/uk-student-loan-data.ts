import { pickYouMayLike } from "../calculator-pool";

export const ukStudentLoanCalculatorContent = {
  meta: {
    seoTitle: "UK Student Loan Repayment Calculator - 2026/27 Free",
    metaDescription: "Free UK student loan repayment calculator for Plan 1, 2, 4, 5 and Postgraduate loans. See your monthly deduction using current 2026/27 thresholds.",
    canonicalSlug: "/uk-student-loan-calculator",
    ogTitle: "UK Student Loan Repayment Calculator",
    ogDescription: "Calculate your monthly student loan repayment by plan type.",
    twitterTitle: "Free UK Student Loan Calculator",
    twitterDescription: "See your student loan repayment in seconds.",
  },

  hero: {
    text: "The UK Student Loan Calculator estimates your monthly and annual student loan repayment based on your salary and loan plan, using the current 2026/27 repayment thresholds and rates.",
  },

  about: {
    text: `UK student loan repayments are income-based, not based on how much you borrowed — you repay a fixed percentage of your income above a threshold that depends on which repayment plan you're on.

This calculator subtracts the relevant threshold from your annual salary, applies the repayment rate to the remainder, and shows both the annual total and the monthly amount typically deducted through payroll.

For 2026/27, thresholds are £26,900 for Plan 1, £29,385 for Plan 2, £32,745 for Plan 4 (Scotland), and £25,000 for Plan 5 — all repaid at 9% above the threshold. Postgraduate loans use a lower £21,000 threshold repaid at 6%.

Limitations: this tool estimates a single repayment based on annual salary — it doesn't account for multiple loan plans repaid simultaneously, self-employment income calculated differently, or loan interest accrual and balance payoff timelines.`,
  },

  formula: {
    formula: "Annual Repayment = (Salary − Threshold) × Repayment Rate",
    variables: [
      { symbol: "Threshold", meaning: "The income level below which no repayment is due, set by your loan plan" },
      { symbol: "Repayment Rate", meaning: "9% for Plan 1/2/4/5, or 6% for Postgraduate loans" },
    ],
    explanation: "Only income above the threshold is used to calculate repayments — income below the threshold isn't repaid against at all, regardless of loan balance.",
    interpretation: "For example, a £35,000 salary on Plan 2 (threshold £29,385) has £5,615 above the threshold, repaid at 9% — about £505 per year, or roughly £42 per month.",
  },

  steps: [
    "Enter your annual salary before tax.",
    "Select your student loan plan (Plan 1, 2, 4, 5, or Postgraduate).",
    "Click Calculate to run the tool.",
    "Review your monthly repayment, annual repayment, threshold, and repayment rate.",
  ],

  examples: [
    { inputs: "Salary: £35,000, Plan: Plan 2", result: "Monthly Repayment: ~£42", explanation: "Income above the £29,385 Plan 2 threshold is repaid at 9%." },
    { inputs: "Salary: £45,000, Plan: Plan 5", result: "Monthly Repayment: ~£150", explanation: "The lower £25,000 Plan 5 threshold means more income falls above the line, at 9%." },
    { inputs: "Salary: £30,000, Plan: Postgraduate", result: "Monthly Repayment: ~£45", explanation: "Postgraduate loans use a lower £21,000 threshold but a reduced 6% repayment rate." },
  ],

  practicalUses: [
    "Estimating take-home pay after student loan deductions before accepting a job offer",
    "Comparing repayment amounts across different plan types",
    "Budgeting monthly expenses around expected payroll deductions",
    "Checking how a pay rise affects monthly student loan repayments",
    "Understanding repayments before switching from employed to self-employed income",
    "Planning finances for borrowers with both undergraduate and postgraduate loans",
  ],

  expertTips: [
    "Which plan you're on depends on when and where you started your course — check your loan plan on your Student Loans Company account if unsure.",
    "Borrowers with both an undergraduate (Plan 1, 2, 4, or 5) and a Postgraduate loan repay both simultaneously, each calculated against its own threshold.",
    "Repayments are automatically deducted through PAYE for employees, or calculated via Self Assessment for the self-employed.",
    "Voluntary overpayments can be made at any time to pay off the loan faster, though this may not be cost-effective given loans write off after a set number of years.",
    "Plan 2 and Postgraduate loans are written off 30 years after the April you first became due to repay.",
    "This calculator estimates gross salary-based repayment — actual payroll deductions may vary slightly with pay frequency and bonuses.",
  ],

  commonMistakes: [
    { mistake: "Using the wrong plan type for the calculation", fix: "Your plan depends on when your course started and where you studied — check your Student Loans Company account to confirm." },
    { mistake: "Forgetting Postgraduate and undergraduate loans are repaid separately", fix: "If you have both loan types, each is calculated against its own threshold and repaid simultaneously, not combined into one calculation." },
    { mistake: "Assuming repayments go toward interest first", fix: "UK repayments are simply a percentage of income above the threshold — they aren't structured like a traditional loan payment schedule." },
    { mistake: "Ignoring that thresholds change each tax year", fix: "Repayment thresholds are updated annually — always check the current year's threshold rather than relying on last year's figure." },
    { mistake: "Assuming the loan behaves like private debt", fix: "UK student loans are written off after a set period regardless of remaining balance, so overpaying isn't always the most cost-effective choice." },
  ],

  faq: [
    { q: "What is the Plan 2 student loan repayment threshold for 2026/27?", a: "The Plan 2 repayment threshold for 2026/27 is £29,385, with repayments calculated at 9% of income above this amount." },
    { q: "How much do I repay on a UK student loan each month?", a: "You repay 9% (or 6% for Postgraduate loans) of your income above your plan's threshold, deducted automatically through payroll if employed." },
    { q: "What is the difference between Plan 1, Plan 2, Plan 4, and Plan 5 student loans?", a: "The plan depends on when and where you started your course — Plan 5 applies to most students starting from academic year 2023/24, while Plan 1, 2, and 4 cover earlier or region-specific loans." },
    { q: "What is the Postgraduate loan repayment threshold?", a: "The Postgraduate loan threshold is £21,000, with repayments calculated at 6% of income above this amount." },
    { q: "Do I repay my student loan if I earn below the threshold?", a: "No, if your income is at or below your plan's threshold, no repayment is due, regardless of your outstanding loan balance." },
    { q: "Can I repay both an undergraduate and Postgraduate loan at the same time?", a: "Yes, if you have both loan types, each is calculated separately against its own threshold and repaid simultaneously." },
    { q: "When are UK student loans written off?", a: "Plan 2 and Postgraduate loans are written off 30 years after the April you first became liable to repay; other plans have different write-off periods." },
    { q: "How is student loan interest calculated?", a: "Interest varies by plan and is generally linked to RPI (inflation), sometimes plus up to 3% depending on income, applied to your outstanding balance." },
    { q: "Does a pay rise increase my student loan repayment?", a: "Yes, since repayments are a percentage of income above the threshold, a higher salary increases both your repayment amount and the proportion of income repaid." },
    { q: "Can self-employed people repay student loans differently?", a: "Yes, self-employed borrowers calculate and pay their student loan repayment through Self Assessment rather than automatic payroll deduction." },
    { q: "What happens to my student loan if I move abroad?", a: "You must still make repayments based on your overseas income, using country-specific thresholds set by the Student Loans Company." },
    { q: "Should I make voluntary overpayments on my student loan?", a: "It depends on your expected lifetime earnings — many borrowers on Plan 2 or 5 never repay the full balance before it's written off, making overpayment less beneficial than for other debts." },
    { q: "What is the Plan 5 student loan threshold?", a: "The Plan 5 threshold is £25,000, fixed until April 2027, after which it will begin rising with RPI." },
    { q: "How do I check which student loan plan I'm on?", a: "You can check your plan type by logging into your account on the Student Loans Company website or checking your loan statement." },
  ],

  relatedCalculators: ["UK Pension Calculator", "UK Stamp Duty Calculator", "UK Dividend Tax Calculator", "Salary Calculator"],

  youMayLike: pickYouMayLike("uk-student-loan-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "UK Student Loan Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};