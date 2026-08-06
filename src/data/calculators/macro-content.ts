export const macroCalculatorContent = {
  meta: {
    seoTitle: "Macro Calculator - Daily Protein, Carbs & Fat Targets",
    metaDescription:
      "Calculate your daily macros (protein, carbs, fat) based on your calorie needs, activity level and goal. Free macro split calculator for weight loss, maintenance and muscle gain.",
    canonicalSlug: "/macro-calculator",
    ogTitle: "Macro Calculator - Protein, Carbs & Fat Split",
    ogDescription:
      "Find your ideal daily macronutrient breakdown for weight loss, maintenance or muscle gain using your age, gender, height, weight and activity level.",
    twitterTitle: "Free Macro Calculator",
    twitterDescription: "Calculate your daily protein, carbs and fat targets instantly.",
  },

  hero: {
    text:
      "The Macro Calculator estimates your ideal daily protein, carbohydrate and fat intake based on your calorie needs, activity level and fitness goal. It turns your total calories into practical gram targets for each macronutrient.",
  },

  about: {
    text: `The Macro Calculator builds on your Total Daily Energy Expenditure (TDEE) to break your daily calories into protein, carbohydrates and fat. Instead of just tracking total calories, macro tracking helps you balance nutrient intake for better body composition, energy and performance.

This calculator is useful for anyone following a structured nutrition plan, tracking meals in an app, or working toward a specific goal such as fat loss, muscle gain or general health. Gym-goers, athletes and anyone on a flexible dieting (IIFYM) plan can use it to set daily targets.

The default split (30% protein, 40% carbs, 30% fat) is a balanced starting point suitable for most goals. Actual optimal ratios can vary based on individual metabolism, training style and preference, so use this as a practical starting guideline rather than a fixed medical prescription.`,
  },

  formula: {
    formula: "Protein (g) = Calories × 0.30 ÷ 4, Carbs (g) = Calories × 0.40 ÷ 4, Fat (g) = Calories × 0.30 ÷ 9",
    variables: [
      { symbol: "Calories", meaning: "Your daily calorie target, adjusted for activity level and goal (TDEE ± deficit/surplus)." },
      { symbol: "4", meaning: "Calories per gram of protein or carbohydrate." },
      { symbol: "9", meaning: "Calories per gram of fat." },
    ],
    explanation:
      "The calculator first estimates your daily calorie needs using your BMR and activity level, then splits those calories into protein, carbs and fat using standard gram-to-calorie conversions.",
    interpretation:
      "The resulting gram targets show how much protein, carbs and fat to eat daily to hit your total calorie and macro goals.",
  },

  steps: [
    "Choose your gender.",
    "Enter your age.",
    "Enter your height.",
    "Enter your current weight.",
    "Select your daily activity level.",
    "Choose your goal (lose, maintain or gain weight).",
    "Click Calculate to see your daily calories and macro split.",
  ],

  examples: [
    {
      inputs: "Male, Age 28, Height 178 cm, Weight 80 kg, Moderately Active, Maintain",
      result: "~2,750 kcal — Protein 206 g, Carbs 275 g, Fat 92 g",
      explanation: "A balanced 30/40/30 split for maintaining current weight with moderate activity.",
    },
    {
      inputs: "Female, Age 25, Height 165 cm, Weight 60 kg, Active, Lose Weight",
      result: "~1,950 kcal — Protein 146 g, Carbs 195 g, Fat 65 g",
      explanation: "A 500-calorie deficit applied for gradual, sustainable fat loss.",
    },
    {
      inputs: "Male, Age 32, Height 182 cm, Weight 85 kg, Very Active, Gain Weight",
      result: "~3,400 kcal — Protein 255 g, Carbs 340 g, Fat 113 g",
      explanation: "A calorie surplus with high protein to support muscle gain during training.",
    },
  ],

  practicalUses: [
    "Flexible dieting (IIFYM) meal planning.",
    "Structuring a fat loss nutrition plan.",
    "Setting muscle gain calorie and protein targets.",
    "Balancing macros for endurance or strength training.",
    "Meal prepping with specific gram targets.",
    "Tracking macros in apps like MyFitnessPal or Cronometer.",
    "Working with a coach or dietitian on nutrition goals.",
    "Adjusting nutrition around training cycles.",
  ],

  expertTips: [
    "Prioritize hitting your protein target daily to preserve muscle, especially in a calorie deficit.",
    "Carbs and fat can be adjusted based on personal preference as long as total calories and protein stay consistent.",
    "Spread protein intake across 3–4 meals for better absorption and muscle protein synthesis.",
    "Recalculate your macros every 4–6 weeks or after a significant weight change.",
    "Choose whole, minimally processed foods to hit macros while also getting enough fiber and micronutrients.",
    "Don't fear dietary fat — it supports hormone production and should rarely go below 20% of calories.",
    "Use a food scale for the first few weeks to build an accurate sense of portion sizes.",
  ],

  commonMistakes: [
    { mistake: "Only tracking calories and ignoring macro split.", fix: "Track protein, carbs and fat separately for better body composition results." },
    { mistake: "Setting protein too low.", fix: "Use at least 1.6–2.2 g/kg bodyweight for muscle preservation or growth." },
    { mistake: "Using a generic macro split for every goal.", fix: "Adjust the split based on whether you're cutting, maintaining or bulking." },
    { mistake: "Not adjusting macros as weight changes.", fix: "Recalculate every few weeks since calorie needs shift as your weight changes." },
    { mistake: "Ignoring fiber and micronutrients while hitting macros.", fix: "Choose nutrient-dense whole foods, not just anything that fits the numbers." },
    { mistake: "Expecting exact precision every day.", fix: "Aim for consistency within 5–10 g of your targets rather than perfection." },
  ],

  faq: [
    { q: "What are macros?", a: "Macros (macronutrients) are protein, carbohydrates and fat — the three nutrients that provide calories and make up your total daily food intake." },
    { q: "How is my macro split calculated?", a: "This calculator estimates your daily calories using BMR and activity level, then applies a 30% protein, 40% carbs, 30% fat split by default." },
    { q: "Can I change the macro ratio?", a: "Yes. The 30/40/30 split is a balanced starting point, but ratios can be adjusted based on your goals, training style and personal preference." },
    { q: "How much protein do I need for muscle gain?", a: "Most research supports 1.6–2.2 g of protein per kg of bodyweight daily for muscle growth when combined with resistance training." },
    { q: "Is it bad to eat low fat?", a: "Very low fat intake can affect hormone production. Most people should aim for at least 20% of daily calories from fat." },
    { q: "Do carbs make you gain fat?", a: "No. Fat gain occurs from a sustained calorie surplus, regardless of macro source. Carbs are an important energy source, especially for active individuals." },
    { q: "What is IIFYM?", a: "IIFYM stands for 'If It Fits Your Macros,' a flexible dieting approach where you can eat any food as long as it fits your daily macro targets." },
    { q: "How often should I recalculate my macros?", a: "Recalculate every 4–6 weeks, or sooner if your weight, activity level or goal changes significantly." },
    { q: "Should macros differ on training vs rest days?", a: "Some people benefit from higher carbs on training days and slightly lower carbs on rest days, though it's not required for most goals." },
    { q: "Can this calculator help with weight loss?", a: "Yes. Selecting 'Lose Weight' applies a calorie deficit while keeping protein high to support fat loss while preserving muscle." },
  ],

  relatedCalculators: [
    "Calorie Calculator",
    "BMR Calculator",
    "Protein Calculator",
    "BMI Calculator",
    "Body Fat Calculator",
    "Ideal Weight Calculator",
    "TDEE Calculator",
  ],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Macro Calculator",
    h2: ["About", "Formula", "How to Calculate", "Examples", "Practical Uses", "Expert Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};
