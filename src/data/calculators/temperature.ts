export const temperatureCalculatorContent = {
  meta: { seoTitle: "Temperature Converter - Celsius, Fahrenheit, Kelvin", metaDescription: "Convert temperature instantly between Celsius, Fahrenheit and Kelvin. Free temperature converter.", canonicalSlug: "/temperature-converter", ogTitle: "Temperature Converter - Free Unit Conversion", ogDescription: "Instantly convert between Celsius, Fahrenheit and Kelvin.", twitterTitle: "Free Temperature Converter", twitterDescription: "Convert temperature units instantly." },
  hero: { text: "The Temperature Converter instantly converts between Celsius, Fahrenheit and Kelvin using accurate formula-based conversion. Enter a value and select units to get an instant result. Useful for weather checks, cooking, science and international travel." },
  about: { text: `The Temperature Converter converts a temperature value between Celsius, Fahrenheit and Kelvin using proper conversion formulas rather than a simple multiplier.

It's useful for checking weather forecasts in a different unit, following international recipes, science and physics homework, and understanding oven temperatures across regions.

Unlike most unit categories, temperature scales have different zero points, so the tool uses dedicated formulas for each conversion pair.

Limitations: Kelvin cannot be negative since it starts at absolute zero — the calculator validates against this.

Use this tool whenever you need to convert temperature between scales accurately.` },
  formula: { formula: "F = C × 9/5 + 32\nK = C + 273.15\nC = (F − 32) × 5/9", variables: [{ symbol: "C", meaning: "Temperature in Celsius" }, { symbol: "F", meaning: "Temperature in Fahrenheit" }, { symbol: "K", meaning: "Temperature in Kelvin" }], explanation: "The calculator first converts any input to Celsius as an intermediate step, then converts from Celsius to the target scale.", interpretation: "For example, 100°F converts to about 37.78°C, close to normal human body temperature." },
  steps: ["Enter the temperature value.", "Select the unit you're converting from.", "Select the unit you're converting to.", "Click Calculate to run the tool.", "View the converted temperature instantly."],
  examples: [
    { inputs: "100°F to Celsius", result: "37.78°C", explanation: "Common Fahrenheit to Celsius conversion." },
    { inputs: "0°C to Fahrenheit", result: "32°F", explanation: "Freezing point of water conversion." },
    { inputs: "300K to Celsius", result: "26.85°C", explanation: "Kelvin to Celsius scientific conversion." },
  ],
  practicalUses: ["Checking weather forecasts in a familiar unit while traveling", "Converting oven temperatures for international recipes", "Physics and chemistry homework involving Kelvin", "Understanding body temperature readings across unit systems", "Converting industrial or lab temperature readings"],
  expertTips: ["Water freezes at 0°C, 32°F and 273.15K — useful reference points to remember.", "Water boils at 100°C, 212°F and 373.15K at standard atmospheric pressure.", "Kelvin is commonly used in science since it has no negative values.", "US recipes and weather typically use Fahrenheit; most other countries use Celsius."],
  commonMistakes: [{ mistake: "Treating temperature like a simple ratio conversion", fix: "Always use the proper formula since temperature scales have different zero points." }, { mistake: "Entering negative Kelvin values", fix: "Kelvin starts at absolute zero and cannot go below 0." }, { mistake: "Confusing Celsius and Fahrenheit for everyday temperatures", fix: "Remember 0°C = 32°F and each 5°C step equals 9°F for quick mental conversion." }],
  faq: [
    { q: "How do you convert Celsius to Fahrenheit?", a: "Multiply the Celsius value by 9/5, then add 32 to get Fahrenheit." },
    { q: "How do you convert Fahrenheit to Celsius?", a: "Subtract 32 from the Fahrenheit value, then multiply by 5/9 to get Celsius." },
    { q: "What is 0 Kelvin equal to in Celsius?", a: "0 Kelvin equals -273.15°C, known as absolute zero, the theoretical lowest possible temperature." },
    { q: "Why does Kelvin have no negative values?", a: "Kelvin is an absolute temperature scale starting at absolute zero, the point where molecular motion theoretically stops, so it cannot go below zero." },
    { q: "Which countries use Fahrenheit vs Celsius?", a: "The United States primarily uses Fahrenheit for everyday temperature, while most other countries worldwide use Celsius." },
  ],
  relatedCalculators: ["Weight Converter", "Length Converter", "BMI Calculator", "Water Intake Calculator"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: { h1: "Temperature Converter", h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"] },
};