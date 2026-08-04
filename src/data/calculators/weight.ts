export const weightCalculatorContent = {
  meta: { seoTitle: "Weight Converter - mg, g, kg, oz, lb, tonne", metaDescription: "Convert weight units instantly between mg, g, kg, tonne, oz and lb. Free weight converter.", canonicalSlug: "/weight-converter", ogTitle: "Weight Converter - Free Unit Conversion", ogDescription: "Instantly convert between metric and imperial weight units.", twitterTitle: "Free Weight Converter", twitterDescription: "Convert weight units instantly." },
  hero: { text: "The Weight Converter instantly converts between metric and imperial weight units including milligrams, grams, kilograms, tonnes, ounces and pounds. Enter a value and select units to get an instant result. Useful for cooking, shipping, fitness and science." },
  about: { text: `The Weight Converter converts a mass value between common metric and imperial weight units.

It's useful for cooking and baking measurement conversion, checking shipping package weights, tracking fitness or body weight goals, and science homework.

The tool converts through a common base unit (kilograms) for accurate results across any unit pair.

Limitations: it uses standard weight definitions; specialized units like troy ounces (used for precious metals) aren't included.

Use this tool whenever you need a quick, accurate weight conversion.` },
  formula: { formula: "Converted Value = Value × (From Unit in kg ÷ To Unit in kg)", variables: [{ symbol: "From/To Unit", meaning: "Each unit's equivalent weight in kilograms" }], explanation: "The calculator converts the input value to kilograms first, then from kilograms to the target unit.", interpretation: "For example, 2 kg = 2 kilograms, which converts to about 4.409 pounds." },
  steps: ["Enter the value you want to convert.", "Select the unit you're converting from.", "Select the unit you're converting to.", "Click Calculate to run the tool.", "View the converted weight instantly."],
  examples: [
    { inputs: "2 kg to pounds", result: "4.409 lb", explanation: "Common body weight conversion." },
    { inputs: "500 g to ounces", result: "17.637 oz", explanation: "Cooking ingredient conversion." },
    { inputs: "150 lb to kg", result: "68.039 kg", explanation: "Imperial to metric body weight conversion." },
  ],
  practicalUses: ["Converting recipe ingredient weights between metric and imperial", "Checking body weight in a different unit system", "Calculating shipping package weight for international orders", "Science and cooking homework conversions", "Comparing product weights listed in different units", "Gym and fitness tracking across unit systems"],
  expertTips: ["1 kg is approximately 2.205 pounds — useful for quick mental estimates.", "1 ounce equals about 28.35 grams, handy for cooking conversions.", "Shipping companies often use different weight units by region — always verify before quoting.", "For precise baking, weight-based measurement (grams) is more accurate than volume."],
  commonMistakes: [{ mistake: "Confusing ounces (weight) with fluid ounces (volume)", fix: "Ounces here measure weight/mass, not liquid volume — use a volume converter for fluid ounces." }, { mistake: "Mixing metric and imperial mid-recipe", fix: "Convert the entire recipe to one system before starting to cook." }, { mistake: "Rounding too early in multi-unit conversions", fix: "Keep full precision until the final displayed result." }],
  faq: [
    { q: "How do you convert kilograms to pounds?", a: "Multiply the kilogram value by approximately 2.20462 to get pounds." },
    { q: "How many grams are in an ounce?", a: "One ounce equals approximately 28.35 grams." },
    { q: "What's the difference between a tonne and a ton?", a: "A tonne (metric ton) equals 1000 kg, while a US ton (short ton) equals about 907 kg — this calculator uses the metric tonne." },
    { q: "How do I convert pounds to kilograms?", a: "Divide the pound value by approximately 2.20462, or multiply by 0.453592, to get kilograms." },
    { q: "Is this converter accurate for cooking measurements?", a: "Yes, it uses precise standard conversion factors suitable for recipe and ingredient weight conversion." },
  ],
  relatedCalculators: ["Length Converter", "BMI Calculator", "Ideal Weight Calculator", "Volume Converter"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: { h1: "Weight Converter", h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"] },
};