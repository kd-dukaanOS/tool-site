// src/data/calculators/bonus.ts
export const bonusCalculatorContent = {
  meta: {
    seoTitle: "Bonus Calculator - Calculate Gross & Net Bonus After Tax",
    metaDescription: "Calculate your gross bonus, tax on bonus, and net take-home bonus amount. Free bonus calculator with formula, examples and bonus tax explained.",
    canonicalSlug: "/bonus-calculator",
    ogTitle: "Bonus Calculator - Gross & Net Bonus After Tax",
    ogDescription: "Instantly calculate your bonus amount, tax withheld, and net take-home bonus.",
    twitterTitle: "Free Bonus Calculator",
    twitterDescription: "Calculate your gross and net bonus instantly, free and accurate.",
  },

  hero: {
    text: "The Bonus Calculator instantly finds your gross bonus, tax withheld, and net take-home bonus amount from your salary and bonus percentage. Use it to estimate what you'll actually receive after tax, plan around an upcoming bonus, or compare bonus offers. Anyone expecting a performance, holiday or signing bonus can use this free tool.",
  },

  about: {
    text: `The Bonus Calculator is a free online tool that computes your gross bonus amount, estimated tax withheld, and net (take-home) bonus from your annual salary, bonus percentage, and an estimated tax rate.

It's useful for employees estimating their actual take-home bonus before it arrives, professionals comparing bonus structures between job offers, and anyone planning finances around an upcoming bonus payout.

Bonuses are often taxed differently than regular salary — many employers use a flat supplemental withholding rate rather than your normal marginal tax rate, which can make the withheld amount look higher than expected on the bonus paycheck itself.

The calculator also shows your new total compensation, combining base salary and gross bonus, useful for comparing overall pay packages.

Limitations: this tool uses a single estimated tax rate you provide — actual bonus withholding rules vary by country, employer payroll practice, and your specific tax situation, and your final tax liability is settled when you file taxes.

Use this tool to estimate your bonus and its approximate take-home value, not as an exact payroll or tax filing calculation.`,
  },

  formula: {
    formula: "Gross Bonus = Salary × (Bonus% / 100); Net Bonus = Gross Bonus − (Gross Bonus × Tax Rate%)",
    variables: [
      { symbol: "Salary", meaning: "Your base annual salary" },
      { symbol: "Bonus%", meaning: "Bonus as a percentage of your salary" },
      { symbol: "Tax Rate%", meaning: "Estimated tax rate applied to the bonus" },
    ],
    explanation: "Gross bonus is calculated as a percentage of your salary. Tax on the bonus is estimated using the rate you provide, then subtracted to get your net (take-home) bonus.",
    interpretation: "For example, a $60,000 salary with a 10% bonus gives a $6,000 gross bonus — at a 22% estimated tax rate, that's $1,320 in tax, leaving a $4,680 net bonus.",
  },

  steps: [
    "Enter your annual salary.",
    "Enter your bonus as a percentage of salary.",
    "Enter an estimated tax rate that applies to your bonus.",
    "Click Calculate to run the tool.",
    "View your gross bonus, tax withheld, net bonus, and total compensation.",
    "Copy the summary if you need to save or share it.",
  ],

  examples: [
    { inputs: "Salary: $60,000, Bonus: 10%, Tax: 22%", result: "Gross: $6,000, Tax: $1,320, Net: $4,680", explanation: "A standard performance bonus taxed at a common supplemental withholding rate." },
    { inputs: "Salary: $90,000, Bonus: 15%, Tax: 24%", result: "Gross: $13,500, Tax: $3,240, Net: $10,260", explanation: "A larger bonus on a higher salary, often pushing withholding into a higher supplemental bracket." },
    { inputs: "Salary: $45,000, Bonus: 5%, Tax: 20%", result: "Gross: $2,250, Tax: $450, Net: $1,800", explanation: "A modest holiday bonus with lighter withholding." },
    { inputs: "Salary: $75,000, Bonus: 20%, Tax: 25%", result: "Gross: $15,000, Tax: $3,750, Net: $11,250", explanation: "A significant year-end bonus, common in sales or leadership roles." },
  ],

  practicalUses: [
    "Estimating your actual take-home amount from an upcoming bonus",
    "Comparing bonus structures between competing job offers",
    "Planning finances or savings around a confirmed bonus payout",
    "Checking whether bonus withholding matches your expected tax rate",
    "Understanding total compensation including base salary and bonus",
    "Budgeting for large purchases timed around bonus season",
    "Comparing performance bonus percentages across roles or companies",
    "Reviewing signing bonus offers during salary negotiation",
  ],

  expertTips: [
    "Bonuses are often withheld at a flat supplemental rate (commonly 22% in the US at the federal level) regardless of your regular tax bracket.",
    "Your actual final tax on a bonus is settled when you file your annual tax return — withholding is just an estimate paid upfront.",
    "If your marginal tax rate is higher than the flat withholding rate, you may owe additional tax when filing.",
    "Ask HR or payroll for your employer's specific bonus withholding method before relying solely on an estimate.",
    "Consider contributing bonus income to a retirement account to reduce the taxable portion, where permitted.",
    "Compare net bonus, not gross bonus, when evaluating competing job offers with different bonus structures.",
  ],

  commonMistakes: [
    { mistake: "Assuming bonus tax rate equals your regular income tax bracket", fix: "Many employers withhold bonuses at a separate flat supplemental rate, which may differ from your marginal tax bracket." },
    { mistake: "Spending the full gross bonus amount before it arrives", fix: "Budget using the estimated net bonus figure, since a meaningful portion goes to tax withholding." },
    { mistake: "Comparing gross bonus offers without considering different tax treatments", fix: "Estimate net bonus for each offer, since withholding practices can differ between employers or bonus types." },
    { mistake: "Forgetting bonus income affects total annual tax liability", fix: "Remember bonus income is reconciled with your other income at tax filing time, which may result in owing or receiving a refund." },
  ],

  faq: [
    { q: "How is a bonus taxed?", a: "Bonuses are often taxed using a separate flat supplemental withholding rate rather than your regular marginal tax rate, though the exact method depends on your country and employer's payroll practice." },
    { q: "Why is my bonus taxed at a higher rate than my salary?", a: "It often isn't taxed at a higher rate overall — many employers simply withhold a flat percentage upfront on bonus pay, which can look higher than your paycheck withholding but reconciles at tax filing time." },
    { q: "How much of my bonus will I actually take home?", a: "This depends on the withholding rate applied — after typical withholding, many people take home roughly 70–80% of their gross bonus, though this varies by tax situation." },
    { q: "Is a bonus considered part of my annual salary?", a: "A bonus adds to your total compensation for the year but is typically reported and often taxed separately from base salary on a paycheck." },
    { q: "Can I reduce the tax on my bonus?", a: "In some cases, contributing bonus income to a pre-tax retirement account can reduce your taxable income for that period — consult a tax professional for your specific situation." },
    { q: "What is a typical bonus percentage?", a: "It varies widely by role and industry — common performance bonuses range from 5–20% of salary, while executive or sales bonuses can be significantly higher." },
    { q: "Is a signing bonus taxed the same way as a performance bonus?", a: "Generally yes, most bonus types are subject to similar supplemental withholding treatment, though specific employer and jurisdiction rules can vary." },
    { q: "Will I owe additional tax on my bonus when I file my return?", a: "Possibly — if your marginal tax rate is higher than the flat withholding rate applied to your bonus, you may owe the difference when filing your annual return." },
    { q: "Does this calculator account for state or local bonus tax?", a: "No, this tool uses a single tax rate you provide as an estimate — enter a combined rate if you want to account for state or local taxes as well." },
    { q: "How is total compensation different from base salary?", a: "Total compensation includes base salary plus bonus, and sometimes other benefits — it gives a fuller picture of overall pay than salary alone." },
  ],

  relatedCalculators: ["Raise Calculator", "Total Compensation Calculator", "Hourly to Salary Calculator", "Overtime Calculator", "Job Offer Comparison Calculator"],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Bonus Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};