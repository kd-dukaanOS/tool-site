import { pickYouMayLike } from "../calculator-pool";

export const socialSecurityTaxCalculatorContent = {
  meta: {
    seoTitle: "Social Security Tax Calculator 2026 - FICA OASDI Calculator",
    metaDescription: "Free Social Security tax calculator for 2026. Find your 6.2% employee tax, 12.4% self-employment tax, and wage base cap status instantly.",
    canonicalSlug: "/social-security-tax-calculator",
    ogTitle: "Social Security Tax Calculator 2026",
    ogDescription: "Calculate your Social Security (FICA/OASDI) tax for 2026 instantly.",
    twitterTitle: "Free Social Security Tax Calculator",
    twitterDescription: "See your 2026 Social Security tax and wage base cap status.",
  },

  hero: {
    text: "The Social Security Tax Calculator finds your 6.2% employee tax or 12.4% self-employment tax for 2026, using the official $184,500 wage base cap — showing exactly how much Social Security tax you owe and whether you've hit the annual limit.",
  },

  about: {
    text: `Social Security tax (also called OASDI, part of FICA) funds retirement, disability, and survivor benefits, and is charged at 6.2% on employee wages (matched by a 6.2% employer contribution) up to an annual wage base cap.

For 2026, that wage base cap is $184,500 — up from $176,100 in 2025 — meaning no Social Security tax is owed on wages above this amount, though Medicare tax still applies to all wages with no cap.

Self-employed individuals pay both the employee and employer portions combined as self-employment tax: 12.4% for Social Security (plus 2.9% for Medicare, calculated separately) on net self-employment earnings up to the same wage base cap.

If you work multiple jobs and your combined wages exceed the wage base, you may have overpaid Social Security tax and can claim the excess back as a credit on your tax return.`,
  },

  formula: {
    formula: "Employee SS Tax = min(Wages, $184,500) × 6.2%; Self-Employment SS Tax = min(Net Earnings, $184,500) × 12.4%",
    variables: [
      { symbol: "Wage Base Cap (2026)", meaning: "$184,500 — the maximum earnings subject to Social Security tax" },
      { symbol: "Employee Rate", meaning: "6.2%, withheld from paychecks, matched by employer" },
      { symbol: "Self-Employment Rate", meaning: "12.4%, combining both employee and employer shares" },
    ],
    explanation: "Once your wages for the year reach $184,500, Social Security withholding stops for the rest of the year — this is why high earners sometimes see a paycheck increase in the final months of the year. There's no cap for Medicare tax, which applies to all earnings.",
    interpretation: "For example, someone earning $150,000 in wages pays 6.2% on the full amount ($9,300), while someone earning $250,000 only pays Social Security tax on the first $184,500 ($11,439), with the remaining $65,500 exempt from this specific tax.",
  },

  steps: [
    "Enter your annual wages or net self-employment earnings.",
    "Select whether you're an employee or self-employed.",
    "Click Calculate to see your Social Security tax owed and wage base cap status.",
  ],

  examples: [
    { inputs: "Wages: $80,000, Employee", result: "SS Tax: $4,960 (6.2%)", explanation: "Below the wage base cap, the full 6.2% rate applies to all wages." },
    { inputs: "Wages: $220,000, Employee", result: "SS Tax: $11,439, capped at $184,500 wages", explanation: "Wages above the 2026 cap of $184,500 are exempt from Social Security tax." },
    { inputs: "Net Earnings: $100,000, Self-Employed", result: "SE SS Tax: $12,400 (12.4%)", explanation: "Self-employed individuals pay both employee and employer shares combined." },
  ],

  practicalUses: [
    "Estimating total FICA tax owed alongside income tax for a full paycheck picture",
    "Checking if you've hit the Social Security wage base cap for the year",
    "Calculating self-employment tax obligations for quarterly estimated payments",
    "Determining if multiple employers caused Social Security tax overpayment",
    "Understanding paycheck changes late in the year for high earners near the cap",
    "Planning cash flow for self-employed workers who owe both income and SE tax",
  ],

  expertTips: [
    "If you switch jobs mid-year and combined wages exceed $184,500, you may have overpaid Social Security tax — claim the excess on Schedule 3 of your Form 1040.",
    "Self-employed individuals can deduct half of their self-employment tax as an above-the-line income tax deduction.",
    "The wage base cap increases almost every year with average wage growth — plan for slightly higher required withholding if you're near the cap.",
    "There is no wage base cap for Medicare tax — it applies to 100% of earnings, plus an extra 0.9% above $200,000/$250,000.",
    "S-corp owners can potentially reduce self-employment tax by taking a reasonable salary plus distributions, though this requires careful compliance with IRS reasonable-compensation rules.",
    "Quarterly estimated tax payments for self-employed workers should include the full 15.3% combined SE tax rate, not just income tax.",
  ],

  commonMistakes: [
    { mistake: "Forgetting Social Security tax stops at the wage base cap", fix: "No Social Security tax is owed on wages above $184,500 in 2026 — only Medicare tax continues on all wages." },
    { mistake: "Confusing self-employment tax with just income tax", fix: "Self-employment tax (15.3% combined SS + Medicare) is separate from and in addition to federal income tax." },
    { mistake: "Not claiming excess Social Security tax after multiple employers", fix: "If combined wages from multiple jobs exceed the cap, file for a credit on your tax return for the overpaid amount." },
    { mistake: "Ignoring the self-employment tax deduction", fix: "Half of self-employment tax is deductible from income tax — don't skip this above-the-line deduction." },
  ],

  faq: [
    { q: "What is the Social Security tax rate for 2026?", a: "The Social Security tax rate is 6.2% for employees (matched by employers), or 12.4% total for self-employed individuals." },
    { q: "What is the Social Security wage base for 2026?", a: "The 2026 Social Security wage base is $184,500, up from $176,100 in 2025 — no Social Security tax applies to wages above this amount." },
    { q: "Do I pay Social Security tax on all my income?", a: "No, Social Security tax only applies up to the annual wage base cap ($184,500 for 2026); income above that isn't subject to this specific tax." },
    { q: "What is the maximum Social Security tax for 2026?", a: "The maximum employee Social Security tax for 2026 is $11,439 (6.2% of $184,500), or $22,878 total for self-employed individuals." },
    { q: "Is there a cap on Medicare tax like there is for Social Security?", a: "No, Medicare tax applies to all earnings with no wage cap, unlike Social Security tax which stops at the annual wage base." },
    { q: "How much Social Security tax do self-employed people pay?", a: "Self-employed individuals pay 12.4% Social Security tax (both employee and employer shares) on net self-employment earnings up to the wage base cap." },
    { q: "Can I get back overpaid Social Security tax?", a: "Yes, if you had multiple employers and combined withheld Social Security tax exceeds the annual maximum, claim the excess as a credit on your federal tax return." },
    { q: "Does the Social Security wage base change every year?", a: "Yes, the SSA adjusts the wage base annually based on national average wage growth, typically increasing 3-5% per year." },
    { q: "What is FICA tax?", a: "FICA (Federal Insurance Contributions Act) tax combines Social Security tax (6.2%) and Medicare tax (1.45%) for a total of 7.65% withheld from employee wages." },
    { q: "Do employers pay Social Security tax too?", a: "Yes, employers match the employee's 6.2% Social Security tax contribution, paying an equal amount on top of wages." },
    { q: "Is self-employment tax deductible?", a: "Yes, self-employed individuals can deduct half of their self-employment tax as an above-the-line deduction when calculating income tax." },
    { q: "What income counts toward the Social Security wage base?", a: "Gross wages, salaries, bonuses, and net self-employment earnings all count, but not investment income, rental income, or retirement distributions." },
    { q: "Why did my paycheck increase near the end of the year?", a: "If your year-to-date wages exceed the Social Security wage base cap, withholding for that tax stops for the rest of the year, slightly increasing take-home pay." },
    { q: "How is Social Security tax different from income tax?", a: "Social Security tax is a flat-rate payroll tax funding retirement benefits with a wage cap, while income tax is a progressive tax with no cap funding general government spending." },
  ],

  relatedCalculators: ["Medicare Tax Calculator", "Effective Tax Rate Calculator", "W-4 Calculator", "Tax Refund Calculator"],

  youMayLike: pickYouMayLike("social-security-tax-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Social Security Tax Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};