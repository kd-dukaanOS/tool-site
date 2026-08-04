export const percentageCalculatorContent = {
  meta: { seoTitle: "Percentage Calculator - 4 Types of % Calculations", metaDescription: "Calculate percentages, percentage change, and find base values instantly. Free all-in-one percentage calculator.", canonicalSlug: "/percentage-calculator", ogTitle: "Percentage Calculator - All-in-One Tool", ogDescription: "Calculate any type of percentage problem instantly.", twitterTitle: "Free Percentage Calculator", twitterDescription: "Solve any percentage calculation instantly." },
  hero: { text: "The Percentage Calculator solves four common percentage problems: finding X% of a number, what percent one number is of another, percentage increase or decrease, and finding the original base value. Useful for students, shoppers and anyone working with percentages daily." },
  about: { text: `This calculator handles the four most common percentage calculations in one tool: percentage of a number, what percent X is of Y, percentage change between two values, and finding the base when given a part and percentage.

It's useful for calculating discounts, tips, grade percentages, salary raises, and any scenario involving proportional comparison.

Each mode shows a clear expression of the calculation alongside the result for easy understanding.

Limitations: this handles standard percentage math; for compound percentage scenarios (like compound interest), a dedicated calculator is more appropriate.

Use this tool for quick, everyday percentage calculations across multiple formats.` },
  formula: { formula: "X% of Y = (X/100) × Y\nX is what % of Y = (X/Y) × 100\n% Change = ((New−Old)/Old) × 100\nX is Y% of what = X ÷ (Y/100)", variables: [{ symbol: "X, Y", meaning: "The two input values for the selected calculation type" }], explanation: "Each percentage mode uses a different formula depending on which value you're solving for.", interpretation: "For example, 20% of 150 = 30, while 30 is 20% of 150 shows the reverse relationship." },
  steps: ["Select the type of percentage calculation you need.", "Enter the first value.", "Enter the second value.", "Click Calculate to run the tool.", "View the result and full expression.", "Read the insight explaining what the result means."],
  examples: [
    { inputs: "20% of 150", result: "30", explanation: "Standard percent-of calculation." },
    { inputs: "30 is what % of 150", result: "20%", explanation: "Finding what percentage one number represents of another." },
    { inputs: "100 to 120 percentage change", result: "20% increase", explanation: "Calculating percentage increase between two values." },
    { inputs: "30 is 20% of what", result: "150", explanation: "Finding the original base value." },
  ],
  practicalUses: ["Calculating discounts and sale prices", "Finding tip amounts at restaurants", "Computing exam or grade percentages", "Calculating salary raise or pay cut percentages", "Finding percentage change in prices or metrics", "Solving markup and margin percentage problems", "Calculating tax percentages on purchases"],
  expertTips: ["Percentage increase and decrease use the same formula, just with different signs.", "For percentage change, always divide by the original (old) value, not the new one.", "When comparing multiple percentage changes, don't simply add them together.", "Percentage of a percentage isn't the same as adding percentages directly.", "Double-check whether a problem asks for percentage points or percentage change — they differ."],
  commonMistakes: [{ mistake: "Adding percentages directly for sequential changes", fix: "Apply percentage changes sequentially, not by simple addition." }, { mistake: "Confusing percentage points with percentage change", fix: "A change from 10% to 15% is 5 percentage points but a 50% relative increase." }, { mistake: "Dividing by the wrong base value in percent change", fix: "Always use the original/starting value as the denominator for percentage change." }],
  faq: [
    { q: "How do you calculate a percentage of a number?", a: "Multiply the number by the percentage divided by 100. For example, 20% of 150 is (20/100) × 150 = 30." },
    { q: "How do you find what percent one number is of another?", a: "Divide the part by the whole and multiply by 100. For example, 30 is (30/150) × 100 = 20% of 150." },
    { q: "How is percentage increase calculated?", a: "Subtract the old value from the new value, divide by the old value, then multiply by 100 to get percentage change." },
    { q: "What's the difference between percentage and percentage points?", a: "Percentage change measures relative change, while percentage points measure the raw difference between two percentages." },
    { q: "How do I find the original number from a percentage?", a: "Divide the known value by the percentage (as a decimal) to find the original base number." },
    { q: "Can percentage change be negative?", a: "Yes, a negative percentage change indicates a decrease from the original value." },
  ],
  relatedCalculators: ["Discount Calculator", "GST Calculator", "Average Calculator", "CAGR Calculator"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: { h1: "Percentage Calculator", h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"] },
};