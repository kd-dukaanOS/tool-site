export const percentageCalculatorContent = {
  meta: {
    seoTitle: "Percentage Calculator - 4 Types of % Calculations",
    metaDescription: "Calculate percentages, percentage change, and find base values instantly. Free all-in-one percentage calculator for students, shoppers and professionals.",
    canonicalSlug: "/percentage-calculator",
    ogTitle: "Percentage Calculator - All-in-One Tool",
    ogDescription: "Calculate any type of percentage problem instantly, from discounts to grade percentages.",
    twitterTitle: "Free Percentage Calculator",
    twitterDescription: "Solve any percentage calculation instantly — of a number, percent change, or base value.",
    keywords: ["percentage calculator", "percent calculator", "percentage change calculator", "find percentage of a number", "percentage of a number calculator"],
  },

  hero: {
    text: "The Percentage Calculator solves four common percentage problems: finding X% of a number, what percent one number is of another, percentage increase or decrease, and finding the original base value. Useful for students, shoppers and anyone working with percentages daily. Enter your values and get an instant, accurate result.",
  },

  about: {
    text: `This calculator handles the four most common percentage calculations in one tool: percentage of a number, what percent X is of Y, percentage change between two values, and finding the base when given a part and percentage.

It is useful for calculating discounts, tips, grade percentages, salary raises, and any scenario involving proportional comparison.

Each mode shows a clear expression of the calculation alongside the result for easy understanding, so you can see exactly how the answer was derived.

Limitations: this handles standard percentage math; for compound percentage scenarios like compound interest or CAGR, a dedicated calculator is more appropriate.

Use this tool for quick, everyday percentage calculations across multiple formats without needing to remember which formula applies.`,
  },

  formula: {
    formula: "X% of Y = (X/100) × Y\nX is what % of Y = (X/Y) × 100\n% Change = ((New−Old)/Old) × 100\nX is Y% of what = X ÷ (Y/100)",
    variables: [
      { symbol: "X, Y", meaning: "The two input values for the selected calculation type" },
      { symbol: "New, Old", meaning: "The updated and original values used for percentage change calculations" },
    ],
    explanation: "Each percentage mode uses a different formula depending on which value you're solving for — the part, the whole, the percentage, or the base.",
    interpretation: "For example, 20% of 150 = 30, while 30 is 20% of 150 shows the reverse relationship using a different formula.",
  },

  steps: [
    "Select the type of percentage calculation you need.",
    "Enter the first value.",
    "Enter the second value.",
    "Click Calculate to run the tool.",
    "View the result and the full expression used.",
    "Read the insight explaining what the result means in plain language.",
  ],

  examples: [
    {
      inputs: "20% of 150",
      result: "30",
      explanation: "Standard percent-of calculation using (X/100) × Y.",
    },
    {
      inputs: "30 is what % of 150",
      result: "20%",
      explanation: "Finding what percentage one number represents of another using (X/Y) × 100.",
    },
    {
      inputs: "100 to 120 percentage change",
      result: "20% increase",
      explanation: "Calculating percentage increase between two values using the original value as the base.",
    },
    {
      inputs: "30 is 20% of what",
      result: "150",
      explanation: "Finding the original base value by dividing the known part by the percentage.",
    },
  ],

  practicalUses: [
    "Calculating discounts and sale prices while shopping",
    "Finding tip amounts at restaurants",
    "Computing exam or grade percentages",
    "Calculating salary raise or pay cut percentages",
    "Finding percentage change in prices, sales or other metrics",
    "Solving markup and margin percentage problems for a business",
    "Calculating tax percentages on purchases",
    "Working out interest rates on simple savings or loans",
    "Splitting a bill by percentage share among people",
    "Comparing survey or poll results expressed as percentages",
    "Estimating body fat or other health metrics that use percentages",
    "Checking commission or bonus percentages on sales figures",
  ],

  expertTips: [
    "Percentage increase and decrease use the same formula, just with different signs.",
    "For percentage change, always divide by the original (old) value, not the new one.",
    "When comparing multiple percentage changes over time, don't simply add them together — apply them sequentially.",
    "Percentage of a percentage isn't the same as adding percentages directly — multiply the decimals instead.",
    "Double-check whether a problem asks for percentage points or percentage change — they measure different things.",
    "For quick mental math, 10% of any number just moves the decimal point one place left.",
    "When calculating a discount, subtract the percentage amount from the original price, not from the discounted price.",
    "For reverse percentage problems (finding the original value), divide by the decimal form of the percentage, not by 100 directly.",
    "Rounding errors can compound in multi-step percentage problems — keep extra decimal places until the final step.",
    "Percentages over 100% are valid and simply mean the new value is more than double the original.",
  ],

  commonMistakes: [
    { mistake: "Adding percentages directly for sequential changes", fix: "Apply percentage changes sequentially, not by simple addition, since each change is based on a new value." },
    { mistake: "Confusing percentage points with percentage change", fix: "A change from 10% to 15% is 5 percentage points but a 50% relative increase." },
    { mistake: "Dividing by the wrong base value in percent change", fix: "Always use the original/starting value as the denominator for percentage change." },
    { mistake: "Rounding too early in multi-step calculations", fix: "Keep full precision until the final result to avoid compounding rounding errors." },
    { mistake: "Assuming a percentage decrease can exceed 100%", fix: "A value can decrease by at most 100%, which would bring it to zero; check your inputs if you see a result beyond that." },
    { mistake: "Mixing up 'of' and 'is what percent of' problems", fix: "Identify whether you know the percentage and need the part, or know two values and need the percentage, before choosing a formula." },
  ],

  faq: [
    { q: "How do you calculate a percentage of a number?", a: "Multiply the number by the percentage divided by 100. For example, 20% of 150 is (20/100) × 150 = 30." },
    { q: "How do you find what percent one number is of another?", a: "Divide the part by the whole and multiply by 100. For example, 30 is (30/150) × 100 = 20% of 150." },
    { q: "How is percentage increase calculated?", a: "Subtract the old value from the new value, divide by the old value, then multiply by 100 to get percentage change." },
    { q: "What's the difference between percentage and percentage points?", a: "Percentage change measures relative change, while percentage points measure the raw difference between two percentages." },
    { q: "How do I find the original number from a percentage?", a: "Divide the known value by the percentage (as a decimal) to find the original base number." },
    { q: "Can percentage change be negative?", a: "Yes, a negative percentage change indicates a decrease from the original value." },
    { q: "How do I calculate a percentage discount on a price?", a: "Multiply the original price by the discount percentage divided by 100, then subtract that amount from the original price." },
    { q: "How do I calculate percentage increase for a salary raise?", a: "Divide the raise amount by the original salary, then multiply by 100 to get the percentage increase." },
    { q: "What is 100% of a number?", a: "100% of a number is simply the number itself, since 100% represents the whole amount." },
    { q: "How do I convert a percentage to a decimal?", a: "Divide the percentage by 100 — for example, 25% becomes 0.25." },
    { q: "Can a percentage be greater than 100%?", a: "Yes, percentages over 100% are valid and indicate the value is more than the whole or original amount being compared." },
    { q: "How do I calculate percentage difference between two numbers?", a: "Percentage difference typically compares two values without treating either as the 'original', using their average as the base, unlike percentage change which uses the original value." },
    { q: "Why do two different percentage calculators give different results for the same numbers?", a: "This usually happens when one tool calculates percentage change (using the original as base) while another calculates percentage difference (using the average as base) — they answer different questions." },
  ],

  relatedCalculators: ["Discount Calculator", "GST Calculator", "Average Calculator", "CAGR Calculator"],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Percentage Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};
