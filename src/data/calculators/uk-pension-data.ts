import { pickYouMayLike } from "../calculator-pool";

export const ukPensionCalculatorContent = {
  meta: {
    seoTitle: "UK Pension Calculator - Project Your Retirement Pot Free",
    metaDescription: "Free UK pension calculator. Project your retirement pot including employer contributions and tax relief. Updated for 2026/27 annual allowance.",
    canonicalSlug: "/uk-pension-calculator",
    ogTitle: "UK Pension Calculator - Project Your Pot",
    ogDescription: "See your projected pension pot including tax relief and employer contributions.",
    twitterTitle: "Free UK Pension Calculator",
    twitterDescription: "Project your UK pension pot in seconds, free.",
  },

  hero: {
    text: "The UK Pension Calculator projects your retirement pot from your current savings, salary, and contribution rates — including employer contributions and the automatic tax relief added to every personal contribution.",
  },

  about: {
    text: `A UK workplace or personal pension grows from three sources: your own contributions, your employer's contributions (if applicable), and government tax relief, which effectively refunds the income tax you paid on money going into the pension.

This calculator applies basic rate tax relief (20%) automatically, meaning every £80 you contribute is topped up to £100 in your pension, then compounds your total annual contributions at your expected return rate each year until retirement.

For the 2026/27 tax year, the pension annual allowance is £60,000 — the maximum that can be paid into your pensions (including tax relief and employer contributions) before triggering a tax charge. Tax relief is available on personal contributions up to 100% of your UK earnings, or £3,600 if greater.

Limitations: this tool assumes basic rate (20%) tax relief only — higher and additional rate taxpayers can claim further relief through Self Assessment — and doesn't model the tapered annual allowance for high earners or State Pension income.`,
  },

  formula: {
    formula: "Potₙ = (Potₙ₋₁ + Employee Contribution + Tax Relief + Employer Contribution) × (1 + Return Rate)",
    variables: [
      { symbol: "Tax Relief", meaning: "Automatic top-up equal to 25% of your net personal contribution (basic rate)" },
      { symbol: "Employer Contribution", meaning: "Your employer's percentage contribution, separate from your annual allowance impact" },
    ],
    explanation: "Each year, your contribution, its tax relief top-up, and your employer's contribution are added to the pot, which then compounds at your assumed return rate, repeated until your target retirement age.",
    interpretation: "For example, a £35,000 salary with 5% employee and 3% employer contributions, starting at age 30 with a £10,000 pot and 6% return, projects to roughly £185,000 by age 65.",
  },

  steps: [
    "Enter your current age and target retirement age.",
    "Enter your current pension pot value.",
    "Enter your annual salary.",
    "Enter your employee and employer contribution percentages.",
    "Enter your expected average annual return.",
    "Click Calculate to run the tool.",
    "Review your projected pot, contributions, employer contributions, and tax relief added.",
  ],

  examples: [
    { inputs: "Age 30→65, Pot: £10,000, Salary: £35,000, Employee: 5%, Employer: 3%, Return: 6%", result: "Projected Pot: ~£185,000", explanation: "A typical auto-enrolment scenario compounding for 35 years." },
    { inputs: "Age 40→68, Pot: £60,000, Salary: £50,000, Employee: 8%, Employer: 5%, Return: 5%", result: "Projected Pot: ~£320,000", explanation: "A mid-career saver with higher contribution rates and a more conservative return." },
    { inputs: "Age 25→67, Pot: £0, Salary: £28,000, Employee: 4%, Employer: 3%, Return: 7%", result: "Projected Pot: ~£210,000", explanation: "Starting early in a career at minimum auto-enrolment rates with a strong return assumption." },
  ],

  practicalUses: [
    "Seeing how much of your pot comes from tax relief and employer contributions versus your own money",
    "Comparing outcomes at different contribution percentages before adjusting payroll deductions",
    "Deciding whether to increase contributions to make full use of employer matching",
    "Estimating whether current savings are on track for a target retirement pot",
    "Understanding the long-term impact of starting or increasing contributions earlier",
    "Checking projected pot size against the pension annual allowance",
  ],

  expertTips: [
    "Always contribute at least enough to get your employer's full matching contribution — it's effectively free money added to your pot.",
    "Higher and additional rate taxpayers can claim extra tax relief beyond the automatic 20% through their Self Assessment tax return.",
    "The State Pension age is rising from 66 to 67 between 2026 and 2028, and private pension access age is rising from 55 to 57 from 2028 — factor this into your retirement age.",
    "The £60,000 annual allowance covers total contributions across all your pensions, including tax relief and employer contributions combined.",
    "Unused annual allowance from the previous three tax years can sometimes be carried forward to increase contributions in a single year.",
    "This projection doesn't include the State Pension, which is a separate, additional source of retirement income for most UK residents.",
  ],

  commonMistakes: [
    { mistake: "Forgetting to include employer contributions in retirement planning", fix: "Employer contributions are a major part of most pension pots — always factor in the full contribution rate, not just your own." },
    { mistake: "Assuming tax relief only applies to basic rate taxpayers", fix: "Higher and additional rate taxpayers get relief too, but must claim the extra amount above 20% through Self Assessment." },
    { mistake: "Exceeding the annual allowance without realising", fix: "Total contributions — yours, tax relief, and your employer's — count toward the £60,000 annual allowance for 2026/27." },
    { mistake: "Confusing State Pension age with private pension access age", fix: "State Pension age is rising to 67 by 2028, while private pensions can generally be accessed from 55, rising to 57 from 2028 — they're different ages." },
    { mistake: "Using an unrealistically high expected return", fix: "Long-term average returns for a diversified pension portfolio are commonly modelled around 5-7% before inflation." },
  ],

  faq: [
    { q: "What is the UK pension annual allowance for 2026/27?", a: "The annual allowance is £60,000 for most people, covering the total of your contributions, tax relief, and employer contributions combined across all your pensions." },
    { q: "How does UK pension tax relief work?", a: "The government tops up personal pension contributions by refunding the income tax you paid on that money — for a basic rate taxpayer, an £80 contribution becomes £100 in your pension." },
    { q: "What age can I access my UK pension?", a: "Private pensions can generally be accessed from age 55, rising to 57 from April 2028, while the State Pension age is rising from 66 to 67 between 2026 and 2028." },
    { q: "How much should I contribute to my pension?", a: "Many advisers suggest contributing at least enough to receive your full employer match, with a common target of around 12-15% of salary combined between employee and employer." },
    { q: "What is auto-enrolment in the UK?", a: "It's a legal requirement for most employers to automatically enrol eligible employees into a workplace pension, with minimum combined contributions of 8% of qualifying earnings." },
    { q: "Can higher rate taxpayers claim extra pension tax relief?", a: "Yes, higher (40%) and additional (45%) rate taxpayers can claim the difference between their tax rate and the automatic 20% relief through Self Assessment." },
    { q: "What happens if I exceed my pension annual allowance?", a: "Contributions above your annual allowance trigger an annual allowance tax charge, effectively removing the tax relief benefit on the excess amount." },
    { q: "Is the UK State Pension age changing?", a: "Yes, it's rising from 66 to 67 in a phased increase between 2026 and 2028, affecting anyone born on or after 6 April 1960." },
    { q: "What is pension carry forward?", a: "It allows you to use unused annual allowance from the previous three tax years, potentially letting you contribute more than £60,000 in a single year without a tax charge." },
    { q: "How much does my employer have to contribute to my pension?", a: "Under UK auto-enrolment rules, employers must contribute at least 3% of qualifying earnings, with employees typically contributing at least 5%, for a combined minimum of 8%." },
    { q: "Can I have multiple pensions in the UK?", a: "Yes, many people accumulate several workplace and personal pensions over their career — the £60,000 annual allowance applies across all of them combined." },
    { q: "What is the lifetime allowance for UK pensions?", a: "The pension lifetime allowance was abolished from April 2024, though a standard lump sum and death benefit allowance of £1,073,100 now limits how much can be taken tax-free." },
    { q: "Should I combine my old pension pots?", a: "Consolidating old workplace pensions can simplify tracking and potentially reduce fees, but it's worth checking for exit fees or valuable guarantees before transferring." },
    { q: "What is salary sacrifice for pensions?", a: "It's an arrangement where you give up part of your salary in exchange for an equivalent employer pension contribution, which can reduce both income tax and National Insurance." },
  ],

  relatedCalculators: ["UK Stamp Duty Calculator", "UK Capital Gains Tax Calculator", "UK Dividend Tax Calculator", "FIRE Calculator"],

  youMayLike: pickYouMayLike("uk-pension-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "UK Pension Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};