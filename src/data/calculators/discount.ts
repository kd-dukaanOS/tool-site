export const discountCalculatorContent = {
  meta: {
    seoTitle: "Discount Calculator - Find Sale Price & Savings Free",
    metaDescription: "Calculate discounted price, savings and effective discount percentage instantly. Free online discount calculator.",
    canonicalSlug: "/discount-calculator",
    ogTitle: "Discount Calculator - Find Your Final Price",
    ogDescription: "Instantly calculate final price and savings on any discount or sale.",
    twitterTitle: "Free Discount Calculator",
    twitterDescription: "Calculate discounted prices and savings instantly.",
  },
  hero: { text: "The Discount Calculator finds the final price and total savings on any percentage or flat discount, including stacked extra discounts. Enter the original price and discount to get an instant result. Useful for shoppers comparing sale prices." },
  about: { text: `The Discount Calculator computes the final price after applying a percentage or flat discount, plus an optional additional discount on top.

It's useful for comparing sale prices, verifying advertised discounts, and understanding true savings when multiple discounts stack.

The tool also shows a comparison table across common discount rates for quick reference.

Limitations: it doesn't account for taxes applied after discount, which may change the final checkout price.

Use this tool whenever you want to verify a sale price or compare deals quickly.` },
  formula: {
    formula: "Final Price = Original Price × (1 − Discount% / 100)",
    variables: [
      { symbol: "Original Price", meaning: "Price before discount" },
      { symbol: "Discount%", meaning: "Percentage or flat amount off" },
    ],
    explanation: "The calculator subtracts the discount from the original price, then applies any additional stacked discount on the reduced price.",
    interpretation: "For example, ₹2000 with 20% off becomes ₹1600, saving ₹400.",
  },
  steps: [
    "Enter the original price.",
    "Enter the discount value (percentage or flat amount).",
    "Choose percentage or flat discount mode.",
    "Optionally add an extra stacked discount percentage.",
    "Click Calculate to run the tool.",
    "View final price, amount saved, and effective discount %.",
  ],
  examples: [
    { inputs: "₹2000, 20% off", result: "Final: ₹1600, Save: ₹400", explanation: "Simple percentage discount." },
    { inputs: "₹1500, ₹300 flat off", result: "Final: ₹1200, Save: ₹300", explanation: "Flat amount discount." },
    { inputs: "₹5000, 30% + extra 10%", result: "Final: ₹3150, Save: ₹1850", explanation: "Stacked discount applied sequentially." },
  ],
  practicalUses: [
    "Verifying sale prices while shopping",
    "Comparing deals across stores",
    "Calculating stacked coupon discounts",
    "Budgeting for big purchases during sales",
    "Checking bulk order discount savings",
    "Estimating final invoice price for clients",
  ],
  expertTips: [
    "Stacked discounts apply sequentially, not by simple addition — 20%+10% isn't 30% off.",
    "Always check if tax is added before or after discount at checkout.",
    "Compare effective discount % rather than just the advertised number for stacked deals.",
    "Flat discounts benefit more on lower-priced items; percentage discounts scale with price.",
    "Watch for 'up to X% off' wording — actual discount may be much lower.",
  ],
  commonMistakes: [
    { mistake: "Adding two percentage discounts directly", fix: "Apply discounts sequentially — 20% then 10% off is not the same as 30% off." },
    { mistake: "Forgetting tax added after discount", fix: "Check whether tax applies to the discounted price or original price at checkout." },
    { mistake: "Confusing flat and percentage discount modes", fix: "Double-check which discount type the store is advertising." },
  ],
  faq: [
    { q: "How do you calculate a discount?", a: "Multiply the original price by the discount percentage, then subtract that amount from the original price to get the final price." },
    { q: "How do stacked discounts work?", a: "Each discount is applied sequentially to the already-reduced price, not added together, so the total savings is less than the sum of the percentages." },
    { q: "What's the difference between flat and percentage discount?", a: "A flat discount subtracts a fixed amount, while a percentage discount reduces the price proportionally based on its value." },
    { q: "Does this calculator include tax?", a: "No, it calculates the discount only; check separately whether tax applies before or after the discount." },
    { q: "What is effective discount percentage?", a: "It's the total percentage saved compared to the original price, especially useful when discounts are stacked." },
  ],
  relatedCalculators: ["Percentage Calculator", "GST Calculator", "Markup Calculator", "Currency Converter"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: { h1: "Discount Calculator", h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"] },
};