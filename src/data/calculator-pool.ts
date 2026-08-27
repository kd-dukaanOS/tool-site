export interface PoolItem { slug: string; name: string; cluster: string; }

export const calculatorPool: PoolItem[] = [
  // home
  { slug: "mortgage-calculator", name: "Mortgage Calculator", cluster: "home" },
  { slug: "mortgage-affordability-calculator", name: "Mortgage Affordability Calculator", cluster: "home" },
  { slug: "loan-amortization-calculator", name: "Loan Amortization Calculator", cluster: "home" },
  { slug: "auto-loan-calculator", name: "Auto Loan Calculator", cluster: "home" },
  { slug: "mortgage-refinance-calculator", name: "Mortgage Refinance Calculator", cluster: "home" },
  { slug: "mortgage-overpayment-calculator", name: "Mortgage Overpayment Calculator", cluster: "home" },
  { slug: "rent-vs-buy-calculator", name: "Rent vs Buy Calculator", cluster: "home" },
  { slug: "down-payment-calculator", name: "Down Payment Calculator", cluster: "home" },
  { slug: "ltv-calculator", name: "Loan-to-Value Calculator", cluster: "home" },
  { slug: "closing-costs-calculator", name: "Closing Costs Calculator", cluster: "home" },
  { slug: "home-affordability-calculator", name: "Home Affordability Calculator", cluster: "home" },
  // debt
  { slug: "credit-card-payoff-calculator", name: "Credit Card Payoff Calculator", cluster: "debt" },
  { slug: "debt-payoff-calculator", name: "Debt Payoff Calculator", cluster: "debt" },
  { slug: "debt-to-income-calculator", name: "Debt-to-Income Ratio Calculator", cluster: "debt" },
  { slug: "credit-card-interest-calculator", name: "Credit Card Interest Calculator", cluster: "debt" },
  { slug: "debt-snowball-calculator", name: "Debt Snowball Calculator", cluster: "debt" },
  { slug: "debt-avalanche-calculator", name: "Debt Avalanche Calculator", cluster: "debt" },
  { slug: "debt-consolidation-calculator", name: "Debt Consolidation Calculator", cluster: "debt" },
  { slug: "student-loan-calculator", name: "Student Loan Calculator", cluster: "debt" },
  // tax
  { slug: "us-income-tax-calculator", name: "US Income Tax Calculator", cluster: "tax" },
  { slug: "us-federal-tax-calculator", name: "US Federal Tax Calculator", cluster: "tax" },
  { slug: "self-employment-tax-calculator", name: "Self-Employment Tax Calculator", cluster: "tax" },
  { slug: "capital-gains-tax-calculator", name: "Capital Gains Tax Calculator", cluster: "tax" },
  { slug: "us-take-home-pay-calculator", name: "US Take-Home Pay Calculator", cluster: "tax" },
  { slug: "tax-bracket-calculator", name: "Tax Bracket Calculator", cluster: "tax" },
  { slug: "tax-withholding-calculator", name: "Tax Withholding / W-4 Calculator", cluster: "tax" },
  { slug: "tax-refund-calculator", name: "Tax Refund Calculator", cluster: "tax" },
  { slug: "effective-tax-rate-calculator", name: "Effective Tax Rate Calculator", cluster: "tax" },
  { slug: "social-security-tax-calculator", name: "Social Security Tax Calculator", cluster: "tax" },
  { slug: "medicare-tax-calculator", name: "Medicare Tax Calculator", cluster: "tax" },
  { slug: "child-tax-credit-calculator", name: "Child Tax Credit Calculator", cluster: "tax" },
  { slug: "eitc-calculator", name: "EITC Calculator", cluster: "tax" },
  { slug: "quarterly-estimated-tax-calculator", name: "Quarterly Estimated Tax Calculator", cluster: "tax" },
  // invest/retirement
  { slug: "compound-interest-calculator", name: "Compound Interest Calculator", cluster: "invest" },
  { slug: "sip-calculator", name: "SIP Calculator", cluster: "invest" },
  { slug: "retirement-calculator", name: "Retirement Calculator", cluster: "invest" },
  { slug: "401k-calculator", name: "401(k) Calculator", cluster: "invest" },
  { slug: "roth-ira-calculator", name: "Roth IRA Calculator", cluster: "invest" },
  { slug: "traditional-ira-calculator", name: "Traditional IRA Calculator", cluster: "invest" },
  { slug: "retirement-income-calculator", name: "Retirement Income Calculator", cluster: "invest" },
  { slug: "fire-calculator", name: "FIRE Calculator", cluster: "invest" },
  { slug: "coast-fire-calculator", name: "Coast FIRE Calculator", cluster: "invest" },
  { slug: "roth-vs-traditional-ira-calculator", name: "Roth vs Traditional IRA Calculator", cluster: "invest" },
  { slug: "social-security-calculator", name: "Social Security Benefits Calculator", cluster: "invest" },
  { slug: "investment-return-calculator", name: "Investment Return Calculator", cluster: "invest" },
  { slug: "future-value-calculator", name: "Future Value Calculator", cluster: "invest" },
  { slug: "present-value-calculator", name: "Present Value Calculator", cluster: "invest" },
  { slug: "dividend-yield-calculator", name: "Dividend Yield Calculator", cluster: "invest" },
  { slug: "stock-profit-calculator", name: "Stock Profit Calculator", cluster: "invest" },
  { slug: "rrsp-calculator", name: "RRSP Calculator", cluster: "invest" },
  { slug: "tfsa-calculator", name: "TFSA Calculator", cluster: "invest" },
  { slug: "savings-goal-calculator", name: "Savings Goal Calculator", cluster: "invest" },
  { slug: "emergency-fund-calculator", name: "Emergency Fund Calculator", cluster: "invest" },
  // business
  { slug: "break-even-calculator", name: "Break-Even Calculator", cluster: "business" },
  { slug: "profit-margin-calculator", name: "Profit Margin Calculator", cluster: "business" },
  { slug: "net-profit-calculator", name: "Net Profit Calculator", cluster: "business" },
  { slug: "gross-margin-calculator", name: "Gross Margin Calculator", cluster: "business" },
  { slug: "customer-acquisition-cost-calculator", name: "CAC Calculator", cluster: "business" },
  { slug: "customer-lifetime-value-calculator", name: "Customer Lifetime Value Calculator", cluster: "business" },
  { slug: "cash-flow-calculator", name: "Cash Flow Calculator", cluster: "business" },
  { slug: "burn-rate-calculator", name: "Burn Rate Calculator", cluster: "business" },
  { slug: "runway-calculator", name: "Runway Calculator", cluster: "business" },
  { slug: "mrr-calculator", name: "MRR Calculator", cluster: "business" },
  { slug: "arr-calculator", name: "ARR Calculator", cluster: "business" },
  { slug: "churn-rate-calculator", name: "Churn Rate Calculator", cluster: "business" },
  // wealth
  { slug: "net-worth-calculator", name: "Net Worth Calculator", cluster: "wealth" },
  // canada
  { slug: "gst-hst-calculator", name: "GST/HST Calculator", cluster: "canada" },
  { slug: "canada-capital-gains-calculator", name: "Canada Capital Gains Tax Calculator", cluster: "canada" },
  { slug: "canada-retirement-calculator", name: "Canada Retirement Calculator", cluster: "canada" },
  { slug: "rrsp-calculator", name: "RRSP Calculator", cluster: "canada" },
  { slug: "tfsa-calculator", name: "TFSA Calculator", cluster: "canada" },
  // uk
  { slug: "uk-pension-calculator", name: "UK Pension Calculator", cluster: "uk" },
  { slug: "uk-stamp-duty-calculator", name: "UK Stamp Duty Calculator", cluster: "uk" },
  { slug: "uk-student-loan-calculator", name: "UK Student Loan Calculator", cluster: "uk" },
  { slug: "uk-capital-gains-calculator", name: "UK Capital Gains Tax Calculator", cluster: "uk" },
  { slug: "uk-dividend-tax-calculator", name: "UK Dividend Tax Calculator", cluster: "uk" },
];

const REASONS: Record<string, string> = {
  home: "Another piece of your homeownership numbers, worth checking together.",
  debt: "Pairs well if you're also working through debt payoff.",
  tax: "Useful if you're already looking at your tax picture.",
  invest: "Good next step for building out your long-term savings plan.",
  business: "Handy if you're tracking business numbers alongside personal finance.",
  wealth: "See how this connects to your overall financial position.",
  canada: "Rounds out your Canadian tax and retirement planning.",
  uk: "Part of your UK tax and money planning toolkit.",
};
function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function pickYouMayLike(currentSlug: string, count = 4) {
  const current = calculatorPool.find((p) => p.slug === currentSlug);
  const rest = calculatorPool.filter((p) => p.slug !== currentSlug);

  const sameCluster = shuffle(rest.filter((p) => p.cluster === current?.cluster)).slice(0, 2);
  const remaining = shuffle(rest.filter((p) => !sameCluster.includes(p))).slice(0, count - sameCluster.length);

  return [...sameCluster, ...remaining].map((p) => ({
    slug: p.slug,
    name: p.name,
    reason: REASONS[p.cluster],
  }));
}