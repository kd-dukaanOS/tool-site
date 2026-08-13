// src/data/calculators/overtime.ts
export const overtimeCalculatorContent = {
  meta: {
    seoTitle: "Overtime Calculator - Calculate Overtime Pay & Time-and-a-Half",
    metaDescription: "Calculate your overtime pay, total paycheck and effective overtime rate. Free overtime calculator supporting time-and-a-half, double time and custom multipliers.",
    canonicalSlug: "/overtime-calculator",
    ogTitle: "Overtime Calculator - Overtime Pay & Total Paycheck",
    ogDescription: "Instantly calculate overtime pay, regular pay and your total paycheck.",
    twitterTitle: "Free Overtime Calculator",
    twitterDescription: "Calculate overtime pay and total earnings instantly, free and accurate.",
  },

  hero: {
    text: "The Overtime Calculator instantly finds your total pay including overtime, using your hourly rate, regular hours, overtime hours and overtime multiplier. Use it to verify your paycheck, plan extra shifts, or estimate earnings before working overtime. Anyone paid hourly with time-and-a-half, double time, or a custom overtime rate can use this free tool.",
  },

  about: {
    text: `The Overtime Calculator is a free online tool that computes your total pay by combining regular hours at your standard rate with overtime hours at a higher multiplier.

It's useful for hourly employees verifying their paycheck is correct, workers deciding whether extra shifts are worth taking, and employers estimating labor costs for overtime-heavy schedules.

The most common overtime multiplier is 1.5x, known as "time-and-a-half," required by law in many places once hours exceed a weekly threshold (commonly 40 hours in the US). Some situations, like holiday work, use 2x ("double time") or other custom multipliers.

The calculator also shows your effective overtime hourly rate, making it easy to see exactly how much more each overtime hour is worth compared to a regular hour.

Limitations: this tool calculates gross pay only — it doesn't account for taxes, deductions, or jurisdiction-specific overtime rules, which vary by country, state and industry.

Use this tool to estimate overtime earnings, not as a substitute for checking your specific employer's or region's overtime regulations.`,
  },

  formula: {
    formula: "Total Pay = (Hourly Rate × Regular Hours) + (Hourly Rate × Multiplier × Overtime Hours)",
    variables: [
      { symbol: "Hourly Rate", meaning: "Your regular pay per hour" },
      { symbol: "Regular Hours", meaning: "Hours worked at the standard rate" },
      { symbol: "Overtime Hours", meaning: "Hours worked beyond the regular threshold" },
      { symbol: "Multiplier", meaning: "Overtime rate multiplier — commonly 1.5x or 2x" },
    ],
    explanation: "Regular pay is your hourly rate times regular hours. Overtime pay applies the multiplier to your hourly rate before multiplying by overtime hours. The two are added together for total pay.",
    interpretation: "For example, a $20/hour rate with 40 regular hours and 5 overtime hours at 1.5x gives $800 regular pay plus $150 overtime pay, for $950 total.",
  },

  steps: [
    "Enter your regular hourly rate.",
    "Enter the number of hours worked at your regular rate.",
    "Enter the number of overtime hours worked.",
    "Enter your overtime multiplier (1.5 for time-and-a-half, 2 for double time, or a custom value).",
    "Click Calculate to run the tool.",
    "View your regular pay, overtime pay, total pay, and effective overtime hourly rate.",
    "Copy the summary if you need to save or share it.",
  ],

  examples: [
    { inputs: "Rate: $20/hr, 40 regular hrs, 5 OT hrs, 1.5x", result: "Regular: $800, OT: $150, Total: $950, OT Rate: $30/hr", explanation: "Standard time-and-a-half overtime on 5 extra hours." },
    { inputs: "Rate: $18/hr, 40 regular hrs, 8 OT hrs, 2x", result: "Regular: $720, OT: $288, Total: $1,008, OT Rate: $36/hr", explanation: "Double-time overtime, common for holiday shifts." },
    { inputs: "Rate: $25/hr, 35 regular hrs, 10 OT hrs, 1.5x", result: "Regular: $875, OT: $375, Total: $1,250, OT Rate: $37.50/hr", explanation: "A shorter regular week with substantial overtime hours." },
    { inputs: "Rate: $15/hr, 40 regular hrs, 2 OT hrs, 1.5x", result: "Regular: $600, OT: $45, Total: $645, OT Rate: $22.50/hr", explanation: "A small amount of overtime added to a standard 40-hour week." },
  ],

  practicalUses: [
    "Verifying your paycheck matches expected overtime pay",
    "Deciding whether taking an extra shift is financially worthwhile",
    "Estimating labor costs for scheduling overtime-heavy shifts",
    "Comparing pay across different overtime multiplier policies",
    "Planning finances around expected overtime earnings",
    "Checking holiday or double-time pay calculations",
    "Negotiating overtime terms in a new job offer",
    "Auditing payroll calculations for hourly staff",
    "Estimating weekly income during a busy or seasonal period",
  ],

  expertTips: [
    "Overtime rules vary significantly by country and even by state — check local labor law for your specific threshold and required multiplier.",
    "In the US, federal law generally requires 1.5x pay for hours worked beyond 40 in a week for non-exempt employees.",
    "Some employers offer double time (2x) for holidays or hours beyond a higher daily threshold — check your specific policy.",
    "Track your effective overtime rate, not just total pay, to judge whether extra shifts are worth your time.",
    "Salaried employees are often exempt from overtime rules — this calculator applies to hourly pay structures.",
    "If overtime becomes regular rather than occasional, it may be worth renegotiating your base hourly rate or salary.",
  ],

  commonMistakes: [
    { mistake: "Assuming overtime is always 1.5x everywhere", fix: "Check your local labor law and employer policy — some situations use 2x or other custom multipliers." },
    { mistake: "Not separating regular and overtime hours correctly", fix: "Only hours beyond your regular threshold (commonly 40/week) should be entered as overtime hours." },
    { mistake: "Forgetting overtime calculations only apply to non-exempt employees", fix: "Salaried, exempt employees typically don't receive overtime pay under standard labor law definitions." },
    { mistake: "Using gross overtime pay as take-home pay", fix: "This is a pre-tax estimate — actual take-home pay will be lower after taxes and deductions." },
  ],

  faq: [
    { q: "How do you calculate overtime pay?", a: "Multiply your hourly rate by your overtime multiplier (commonly 1.5x), then multiply that rate by the number of overtime hours worked." },
    { q: "What is time-and-a-half?", a: "Time-and-a-half means overtime hours are paid at 1.5 times your regular hourly rate, the most common overtime multiplier in many countries." },
    { q: "What is double time?", a: "Double time means overtime hours are paid at 2 times your regular hourly rate, often used for holidays or hours beyond a higher threshold." },
    { q: "After how many hours does overtime start?", a: "This varies by jurisdiction — in the US, federal law generally applies overtime after 40 hours in a week, but some states and countries use different thresholds." },
    { q: "Do salaried employees get overtime pay?", a: "Generally no — most salaried, exempt employees are not eligible for overtime pay, while non-exempt hourly employees typically are, depending on local law." },
    { q: "How do I calculate my effective overtime hourly rate?", a: "Multiply your regular hourly rate by your overtime multiplier — for example, $20/hour at 1.5x gives an effective overtime rate of $30/hour." },
    { q: "Is overtime pay taxed differently than regular pay?", a: "Overtime pay is generally taxed as regular income, though it may push you into a higher withholding bracket for that pay period specifically." },
    { q: "Can overtime multipliers be different for different employers?", a: "Yes, while many follow legal minimums like 1.5x, some employers or union contracts offer higher multipliers as a benefit." },
    { q: "How is overtime calculated for daily versus weekly thresholds?", a: "Some jurisdictions calculate overtime based on hours worked beyond a daily limit (like 8 hours/day), while others use only a weekly total — check your local rules." },
    { q: "Does this calculator account for taxes on overtime pay?", a: "No, this tool calculates gross overtime and total pay before taxes and deductions." },
    { q: "What's the difference between overtime pay and a bonus?", a: "Overtime pay compensates for additional hours worked at a higher rate, while a bonus is a separate, often discretionary payment unrelated to hours worked." },
  ],

  relatedCalculators: ["Hourly to Salary Calculator", "Salary to Hourly Calculator", "Bonus Calculator", "Raise Calculator", "Freelancer Hourly Rate Calculator"],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Overtime Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};