export const weightCalculatorContent = {
  meta: {
    seoTitle: "Weight Converter - mg, g, kg, oz, lb, tonne",
    metaDescription: "Convert weight units instantly between mg, g, kg, tonne, oz and lb. Free weight converter for cooking, shipping, fitness and science.",
    canonicalSlug: "/weight-converter",
    ogTitle: "Weight Converter - Free Unit Conversion",
    ogDescription: "Instantly convert between metric and imperial weight units.",
    twitterTitle: "Free Weight Converter",
    twitterDescription: "Convert weight units instantly — kg, lb, g, oz and tonnes.",
    keywords: ["weight converter", "kg to lb converter", "grams to ounces converter", "weight unit converter", "pounds to kilograms"],
  },
  hero: { text: "The Weight Converter instantly converts between metric and imperial weight units including milligrams, grams, kilograms, tonnes, ounces and pounds. Enter a value and select units to get an instant result. Useful for cooking, shipping, fitness and science." },
  about: { text: `The Weight Converter is a free online tool that converts a mass value between common metric and imperial weight units.

It is useful for cooking and baking measurement conversion, checking shipping package weights, tracking fitness or body weight goals, and science homework.

The tool converts through a common base unit (kilograms) for accurate results across any unit pair.

Limitations: it uses standard weight definitions; specialized units like troy ounces (used for precious metals) aren't included.

Use this tool whenever you need a quick, accurate weight conversion.` },
  formula: { formula: "Converted Value = Value × (From Unit in kg ÷ To Unit in kg)", variables: [{ symbol: "From/To Unit", meaning: "Each unit's equivalent weight in kilograms" }], explanation: "The calculator converts the input value to kilograms first, then from kilograms to the target unit.", interpretation: "For example, 2 kg = 2 kilograms, which converts to about 4.409 pounds." },
  steps: ["Enter the value you want to convert.", "Select the unit you're converting from.", "Select the unit you're converting to.", "Click Calculate to run the tool.", "View the converted weight instantly."],
  examples: [
    { inputs: "2 kg to pounds", result: "4.409 lb", explanation: "Common body weight conversion." },
    { inputs: "500 g to ounces", result: "17.637 oz", explanation: "Cooking ingredient conversion." },
    { inputs: "150 lb to kg", result: "68.039 kg", explanation: "Imperial to metric body weight conversion." },
    { inputs: "1 tonne to kg", result: "1000 kg", explanation: "Metric tonne to kilogram conversion, useful for shipping or industrial contexts." },
  ],
  practicalUses: ["Converting recipe ingredient weights between metric and imperial", "Checking body weight in a different unit system", "Calculating shipping package weight for international orders", "Science and cooking homework conversions", "Comparing product weights listed in different units", "Gym and fitness tracking across unit systems", "Checking luggage weight limits before international flights", "Converting industrial or bulk material weights", "Comparing nutrition label serving weights across regions", "Estimating vehicle or cargo load weights"],
  expertTips: ["1 kg is approximately 2.205 pounds — useful for quick mental estimates.", "1 ounce equals about 28.35 grams, handy for cooking conversions.", "Shipping companies often use different weight units by region — always verify before quoting.", "For precise baking, weight-based measurement (grams) is more accurate than volume.", "Airlines often have strict luggage weight limits in kg — convert from pounds carefully before packing.", "A metric tonne (1000 kg) differs from a US short ton (about 907 kg) — check which is being referenced.", "Body weight trackers switching between kg and lb should double-check for consistent unit use over time.", "For precious metals like gold, troy ounces (not standard ounces) are the industry standard — verify which applies.", "Round conversions appropriately for context — precise decimals matter for science, less so for casual use.", "When comparing product weights across countries, confirm whether packaging lists net or gross weight."],
  commonMistakes: [{ mistake: "Confusing ounces (weight) with fluid ounces (volume)", fix: "Ounces here measure weight/mass, not liquid volume — use a volume converter for fluid ounces." }, { mistake: "Mixing metric and imperial mid-recipe", fix: "Convert the entire recipe to one system before starting to cook." }, { mistake: "Rounding too early in multi-unit conversions", fix: "Keep full precision until the final displayed result." }, { mistake: "Confusing metric tonne with US short ton", fix: "A metric tonne is 1000 kg while a US short ton is about 907 kg — verify which unit a source is using." }, { mistake: "Using standard ounces for precious metal weight", fix: "Precious metals like gold and silver typically use troy ounces, which are heavier than standard ounces." },{ mistake: "Assuming shipping weight limits are in the same unit worldwide", fix: "Always confirm whether a courier or airline's weight limit is specified in kg or lb for your specific route." }],
  faq: [
    { q: "How do you convert kilograms to pounds?", a: "Multiply the kilogram value by approximately 2.20462 to get pounds." },
    { q: "How many grams are in an ounce?", a: "One ounce equals approximately 28.35 grams." },
    { q: "What's the difference between a tonne and a ton?", a: "A tonne (metric ton) equals 1000 kg, while a US ton (short ton) equals about 907 kg — this calculator uses the metric tonne." },
    { q: "How do I convert pounds to kilograms?", a: "Divide the pound value by approximately 2.20462, or multiply by 0.453592, to get kilograms." },
    { q: "Is this converter accurate for cooking measurements?", a: "Yes, it uses precise standard conversion factors suitable for recipe and ingredient weight conversion." },
    { q: "What is a troy ounce?", a: "A troy ounce is a specialized unit used for precious metals like gold and silver, heavier than a standard (avoirdupois) ounce — this converter uses standard ounces." },
    { q: "How many pounds are in a stone?", a: "One stone, a unit commonly used in the UK for body weight, equals 14 pounds." },
    { q: "Why do airlines specify luggage limits in kg?", a: "Most international airlines use kilograms as the standard unit for luggage weight limits, even for flights departing from countries that use pounds domestically." },
    { q: "How do I convert milligrams to grams?", a: "Divide the milligram value by 1000 to get grams." },
    { q: "Is net weight the same as gross weight?", a: "No, net weight refers to the product alone, while gross weight includes packaging — check which one a listing specifies before comparing products." },
  ],
  relatedCalculators: ["Length Converter", "BMI Calculator", "Ideal Weight Calculator", "Volume Converter"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: { h1: "Weight Converter", h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"] },
};