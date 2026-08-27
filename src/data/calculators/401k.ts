import { pickYouMayLike } from "../calculator-pool";

export const fourOhOneKCalculatorContent = {
  meta: {
    seoTitle: "401(k) Calculator - Retirement Savings Projection Free",
    metaDescription: "Free 401(k) calculator with employer match. Project your retirement balance from your salary, contribution rate, match, and expected return. Updated for 2026 IRS limits.",
    canonicalSlug: "/401k-calculator",
    ogTitle: "401(k) Calculator - Project Your Retirement Balance",
    ogDescription: "See your projected 401(k) balance at retirement with employer match and compound growth.",
    twitterTitle: "Free 401(k) Calculator",
    twitterDescription: "Project your 401(k) balance at retirement, free and instant.",
  },

  hero: {
    text: "The 401(k) Calculator projects your retirement account balance from your current savings, salary, contribution rate, employer match, and expected investment return — so you can see today whether you're on track and how much the match is really worth.",
  },

  about: {
    text: `A 401(k) is an employer-sponsored retirement plan that lets you contribute a percentage of each paycheck before tax, often with an employer match added on top. This calculator projects your account balance at retirement by compounding your contributions, your employer's match, and investment growth year over year.

It also shows the three pieces separately: what you put in, what your employer adds for free, and what compound growth contributes — because the growth portion is usually the largest driver of a long-term balance, not the contributions themselves.

For 2026, the IRS employee contribution limit is $24,500 (under age 50), $32,500 for ages 50 and older, and $35,750 for ages 60–63 under SECURE 2.0's enhanced catch-up. The combined employee + employer limit is $72,000 ($80,000 at 50+, $83,250 at 60–63).

Limitations: this calculator assumes a constant contribution rate and fixed average return — it doesn't model market volatility, contribution limit caps, vesting schedules, fees, or taxes at withdrawal.`,
  },

  formula: {
    formula: "Balanceₙ = (Balanceₙ₋₁ + Employee Contribution + Employer Match) × (1 + Return Rate)",
    variables: [
      { symbol: "Employee Contribution", meaning: "Annual salary × your contribution %" },
      { symbol: "Employer Match", meaning: "Salary × min(your %, match limit %) × employer match %" },
      { symbol: "Return Rate", meaning: "Expected annual investment return" },
    ],
    explanation: "Each year, your contribution and employer match are added to the balance, salary grows by your expected raise rate, and the whole balance compounds at your assumed return — repeated until retirement age.",
    interpretation: "For example, starting at $25,000 with a $75,000 salary, 8% contribution, 50% match up to 6%, 3% salary growth and 7% return over 30 years projects to roughly $850,000, with growth making up the majority of that total.",
  },

  steps: [
    "Enter your current age and target retirement age.",
    "Enter your current 401(k) balance.",
    "Enter your annual salary.",
    "Enter your contribution rate as a percentage of salary.",
    "Enter your employer's match percentage and the salary percentage it's capped at.",
    "Enter expected annual salary growth and investment return.",
    "Click Calculate to run the tool.",
    "Review your projected balance, contributions, match, and growth.",
  ],

  examples: [
    { inputs: "Age 30→65, Balance: $25,000, Salary: $75,000, Contribution: 8%, Match: 50% up to 6%, Growth: 3%, Return: 7%", result: "Projected Balance: ~$850,000", explanation: "A typical mid-career saver contributing above the match threshold." },
    { inputs: "Age 25→65, Balance: $0, Salary: $55,000, Contribution: 6%, Match: 100% up to 3%, Growth: 3%, Return: 7%", result: "Projected Balance: ~$540,000", explanation: "Starting early with a modest contribution still compounds significantly over 40 years." },
    { inputs: "Age 45→65, Balance: $150,000, Salary: $100,000, Contribution: 12%, Match: 50% up to 6%, Growth: 2%, Return: 6%", result: "Projected Balance: ~$680,000", explanation: "A later start with a higher contribution rate to catch up." },
  ],

  practicalUses: [
    "Checking whether current contributions are on track for retirement",
    "Seeing exactly how much free money the employer match adds over time",
    "Comparing outcomes at different contribution rates before adjusting payroll elections",
    "Planning a retirement age based on a target balance",
    "Understanding how much of the final balance comes from growth versus contributions",
    "Testing the impact of a raise or bonus on long-term projections",
    "Reviewing progress annually alongside a broader retirement plan",
  ],

  expertTips: [
    "Always contribute at least enough to get the full employer match — it's an immediate 50-100% return before any market growth.",
    "Small increases in contribution rate compound significantly over decades; even 1-2% more can add tens of thousands by retirement.",
    "Starting earlier matters more than contributing more later — time in the market is the biggest lever in this formula.",
    "Review your contribution rate every time you get a raise; increasing it alongside income keeps your savings rate steady.",
    "The 2026 catch-up limits ($8,000 at 50+, $11,250 at 60-63) are worth using if you're behind on savings later in your career.",
    "This projection doesn't account for market volatility — treat the result as a long-term average, not a guarantee.",
  ],

  commonMistakes: [
    { mistake: "Contributing less than the employer match threshold", fix: "Contribute at least up to the match limit — anything less forfeits free employer money permanently." },
    { mistake: "Assuming contributions alone build the balance", fix: "Compound growth is usually the largest component over a long career — check the growth figure in your results." },
    { mistake: "Ignoring the 2026 IRS contribution limits", fix: "Keep contribution rates within the $24,500 (under 50), $32,500 (50+), or $35,750 (60-63) annual limits." },
    { mistake: "Using an unrealistically high expected return", fix: "Long-term stock market averages are commonly modeled around 6-8% before inflation; avoid inflating projections with overly optimistic rates." },
    { mistake: "Not adjusting the balance for a career change or job switch", fix: "Update your current balance and salary whenever you change jobs to keep projections accurate." },
  ],

  faq: [
    { q: "What is a 401(k) and how does it work?", a: "A 401(k) is an employer-sponsored retirement plan that lets you contribute a percentage of each paycheck, often pre-tax, which your employer may partially match, and the funds grow tax-deferred until withdrawal." },
    { q: "How much should I contribute to my 401(k)?", a: "Most advisors suggest contributing at least enough to get the full employer match, then working toward 10-15% of income including that match as your career progresses." },
    { q: "What is a 401(k) employer match?", a: "It's extra money your employer adds to your account based on your own contributions, commonly structured as 50% of what you contribute up to 6% of your salary." },
    { q: "What is the 401(k) contribution limit for 2026?", a: "The IRS employee limit is $24,500 for under age 50, $32,500 for ages 50 and older, and $35,750 for ages 60-63 under the SECURE 2.0 enhanced catch-up." },
    { q: "What's the difference between a Roth 401(k) and a traditional 401(k)?", a: "Traditional 401(k) contributions are pre-tax and reduce taxable income now, with withdrawals taxed in retirement; Roth 401(k) contributions are after-tax, with qualified withdrawals tax-free in retirement." },
    { q: "What happens to my 401(k) when I leave my job?", a: "You can typically leave it with your former employer's plan, roll it into your new employer's 401(k), roll it into an IRA, or cash it out, though cashing out before 59½ usually triggers taxes and a penalty." },
    { q: "Can I withdraw money from my 401(k) early?", a: "Yes, but withdrawals before age 59½ generally trigger ordinary income tax plus a 10% early withdrawal penalty, with limited exceptions like hardship or certain medical costs." },
    { q: "What is 401(k) vesting?", a: "Vesting determines how much of your employer's contributions you actually own; your own contributions are always 100% yours, but employer match may vest gradually over a set number of years." },
    { q: "Can I have more than one 401(k)?", a: "Yes, especially after changing jobs, but your total annual contribution across all plans is still limited to the IRS elective deferral cap." },
    { q: "Is a 401(k) pre-tax or after-tax?", a: "A traditional 401(k) uses pre-tax contributions; a Roth 401(k), where offered, uses after-tax contributions — many plans let you choose or split between both." },
    { q: "What happens if I don't contribute enough to get the full match?", a: "You permanently forfeit the unmatched portion of your employer's contribution — it isn't retroactively added later, so it's effectively lost income." },
    { q: "At what age can I withdraw from a 401(k) without penalty?", a: "Generally 59½, though the 'Rule of 55' can allow penalty-free withdrawals starting at 55 if you leave that specific employer in or after the year you turn 55." },
    { q: "What are required minimum distributions (RMDs)?", a: "RMDs are mandatory annual withdrawals from traditional 401(k) accounts starting at age 73, calculated using IRS life expectancy tables; missing one can trigger a significant penalty." },
    { q: "How is my 401(k) taxed when I retire?", a: "Traditional 401(k) withdrawals are taxed as ordinary income in the year taken; Roth 401(k) qualified withdrawals, including growth, are tax-free since contributions were already taxed." },
  ],

  relatedCalculators: ["Retirement Calculator", "Roth IRA Calculator", "Traditional IRA Calculator", "Retirement Income Calculator"],

  youMayLike: pickYouMayLike("401k-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "401(k) Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};