export const discountCalculatorContent = {
  meta: {
    seoTitle: "Discount Calculator - Find Sale Price & Savings Free",
    metaDescription: "Calculate discounted price, savings and effective discount percentage instantly. Free online discount calculator with stacked discount support.",
    canonicalSlug: "/discount-calculator",
    ogTitle: "Discount Calculator - Find Your Final Price",
    ogDescription: "Instantly calculate final price and savings on any discount or sale, including stacked discounts.",
    twitterTitle: "Free Discount Calculator",
    twitterDescription: "Calculate discounted prices and savings instantly.",
  },

  hero: {
    text: "The Discount Calculator finds the final price and total savings on any percentage or flat discount, including stacked extra discounts. Enter the original price and discount to get an instant result. Useful for shoppers comparing sale prices and verifying advertised deals.",
  },

  about: {
    text: `The Discount Calculator computes the final price after applying a percentage or flat discount, plus an optional additional discount on top.

It's useful for comparing sale prices, verifying advertised discounts, understanding true savings when multiple discounts stack, and budgeting for purchases during sale seasons.

The tool also shows a comparison table across common discount rates for quick reference, along with the effective discount percentage when stacking deals.

Limitations: it doesn't account for taxes applied after discount, which may change the final checkout price, and it assumes discounts apply sequentially rather than on the combined total.

Use this tool whenever you want to verify a sale price or compare deals quickly.`,
  },

  formula: {
    formula: "Final Price = Original Price × (1 − Discount% / 100)",
    variables: [
      { symbol: "Original Price", meaning: "Price before discount" },
      { symbol: "Discount%", meaning: "Percentage or flat amount off" },
      { symbol: "Extra Discount%", meaning: "Additional discount applied on the already reduced price" },
    ],
    explanation: "The calculator subtracts the discount from the original price, then applies any additional stacked discount on the reduced price, not on the original amount.",
    interpretation: "For example, ₹2000 with 20% off becomes ₹1600, saving ₹400.",
  },

  steps: [
    "Enter the original price.",
    "Enter the discount value (percentage or flat amount).",
    "Choose percentage or flat discount mode.",
    "Optionally add an extra stacked discount percentage.",
    "Click Calculate to run the tool.",
    "View final price, amount saved, and effective discount %.",
    "Check the comparison table for other common discount rates.",
  ],

  examples: [
    { inputs: "₹2000, 20% off", result: "Final: ₹1600, Save: ₹400", explanation: "Simple percentage discount." },
    { inputs: "₹1500, ₹300 flat off", result: "Final: ₹1200, Save: ₹300", explanation: "Flat amount discount." },
    { inputs: "₹5000, 30% + extra 10%", result: "Final: ₹3150, Save: ₹1850", explanation: "Stacked discount applied sequentially, not simply added." },
    { inputs: "₹999, 50% off", result: "Final: ₹499.50, Save: ₹499.50", explanation: "Half-price sale scenario showing exact rupee savings." },
  ],

  practicalUses: [
    "Verifying sale prices while shopping online or in-store",
    "Comparing deals across multiple stores or platforms",
    "Calculating stacked coupon and promo code discounts",
    "Budgeting for big purchases during festive sales",
    "Checking bulk order or wholesale discount savings",
    "Estimating final invoice price for clients or customers",
    "Working out reseller or retailer margin after discount",
    "Comparing 'buy more save more' tiered discount offers",
    "Verifying cashback plus discount combined savings",
    "Checking clearance sale final prices before checkout",
    "Calculating employee or loyalty discount pricing",
    "Estimating savings for annual vs monthly subscription discounts",
  ],

  expertTips: [
    "Stacked discounts apply sequentially, not by simple addition — 20%+10% isn't 30% off.",
    "Always check if tax is added before or after discount at checkout.",
    "Compare effective discount % rather than just the advertised number for stacked deals.",
    "Flat discounts benefit more on lower-priced items; percentage discounts scale with price.",
    "Watch for 'up to X% off' wording — actual discount may be much lower for most items.",
    "For bulk purchases, calculate per-unit final price to compare fairly across quantities.",
    "Coupon codes often exclude sale items — verify the discount actually applied at checkout.",
    "Use the comparison table to quickly see how different discount tiers affect the same price.",
    "Round rupee savings to the nearest whole number when comparing deals mentally.",
    "Check return policy before buying heavily discounted or clearance items.",
  ],

  commonMistakes: [
    { mistake: "Adding two percentage discounts directly", fix: "Apply discounts sequentially — 20% then 10% off is not the same as 30% off." },
    { mistake: "Forgetting tax added after discount", fix: "Check whether tax applies to the discounted price or original price at checkout." },
    { mistake: "Confusing flat and percentage discount modes", fix: "Double-check which discount type the store is advertising." },
    { mistake: "Assuming 'up to' discounts apply to all items", fix: "Read the fine print — the maximum discount often applies to select items only." },
    { mistake: "Ignoring shipping costs when comparing deals", fix: "Factor in shipping fees to get the true final cost of a purchase." },
    { mistake: "Miscalculating stacked coupon savings", fix: "Apply the second discount to the already-reduced price, not the original price." },
  ],

  faq: [
    { q: "How do you calculate a discount?", a: "Multiply the original price by the discount percentage, then subtract that amount from the original price to get the final price." },
    { q: "How do stacked discounts work?", a: "Each discount is applied sequentially to the already-reduced price, not added together, so the total savings is less than the sum of the percentages." },
    { q: "What's the difference between flat and percentage discount?", a: "A flat discount subtracts a fixed amount, while a percentage discount reduces the price proportionally based on its value." },
    { q: "Does this calculator include tax?", a: "No, it calculates the discount only; check separately whether tax applies before or after the discount." },
    { q: "What is effective discount percentage?", a: "It's the total percentage saved compared to the original price, especially useful when discounts are stacked." },
    { q: "How do I calculate 20% off a price?", a: "Multiply the original price by 0.20 to get the discount amount, then subtract it from the original price." },
    { q: "Why is 20% off plus 10% off not 30% off?", a: "Because the second discount is applied to the already-reduced price, not the original price, resulting in slightly less than 30% total savings." },
    { q: "Can I calculate a flat rupee discount instead of percentage?", a: "Yes, switch to flat discount mode and enter the fixed amount being subtracted." },
    { q: "How do I find the original price from a discounted price?", a: "Divide the discounted price by (1 − discount% / 100) to reverse-calculate the original price." },
    { q: "What does the comparison table show?", a: "It shows the final price and savings across several common discount percentages for the same original price, for quick reference." },
    { q: "Is this calculator useful for business pricing?", a: "Yes, retailers and resellers can use it to set sale prices or verify margins after applying discounts." },
    { q: "Does the tool store my price data?", a: "No, all calculations happen in your browser and no data is saved or sent anywhere." },
  ],

  relatedCalculators: ["Percentage Calculator", "GST Calculator", "Markup Calculator", "Currency Converter", "Sales Tax Calculator", "Profit Margin Calculator"],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: { h1: "Discount Calculator", h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"] },
};
