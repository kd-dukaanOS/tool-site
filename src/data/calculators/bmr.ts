export const bmrCalculatorContent = {
  meta: {
    seoTitle: "BMR Calculator - Find Your Basal Metabolic Rate Free",
    metaDescription: "Calculate your Basal Metabolic Rate (BMR) - the calories your body burns at rest. Free BMR calculator using the Mifflin-St Jeor formula.",
    canonicalSlug: "/bmr-calculator",
    ogTitle: "BMR Calculator - Calculate Calories Burned at Rest",
    ogDescription: "Find out how many calories your body burns at complete rest based on your age, gender, height and weight.",
    twitterTitle: "Free BMR Calculator",
    twitterDescription: "Calculate your Basal Metabolic Rate instantly.",
  },

  hero: {
    text: "The BMR Calculator finds your Basal Metabolic Rate - the number of calories your body burns at complete rest just to keep you alive. Enter your gender, age, height and weight to get an instant estimate. Useful for anyone planning a diet, weight loss or muscle gain program.",
  },

  about: {
    text: `The BMR Calculator estimates the number of calories your body needs daily to maintain basic life functions like breathing, circulation and cell production while at rest.

It's useful as the foundation for building a calorie budget, whether you want to lose weight, maintain, or gain muscle. Combined with your activity level, BMR helps determine your Total Daily Energy Expenditure (TDEE).

The tool uses the Mifflin-St Jeor equation, widely considered one of the most accurate BMR formulas.

Limitations: BMR is an estimate based on population averages and doesn't account for individual metabolic differences, muscle mass precisely, or medical conditions affecting metabolism.

Use this tool as a starting point for calorie planning, then adjust based on real-world results.`,
  },

  formula: {
    formula: "Men: BMR = 10×weight(kg) + 6.25×height(cm) − 5×age + 5\nWomen: BMR = 10×weight(kg) + 6.25×height(cm) − 5×age − 161",
    variables: [
      { symbol: "Weight", meaning: "Body weight in kilograms" },
      { symbol: "Height", meaning: "Height in centimeters" },
      { symbol: "Age", meaning: "Age in years" },
    ],
    explanation: "The Mifflin-St Jeor formula combines weight, height and age with a gender-specific constant to estimate resting calorie burn.",
    interpretation: "For example, a 30-year-old male, 75kg, 178cm has a BMR of about 1731 calories/day at complete rest.",
  },

  steps: [
    "Select your gender.",
    "Enter your age in years.",
    "Enter your height in centimeters.",
    "Enter your weight in kilograms.",
    "Click Calculate to run the tool.",
    "View your BMR in calories per day.",
    "Use this number as the base for a calorie or diet plan.",
  ],

  examples: [
    { inputs: "Male, 30 years, 178cm, 75kg", result: "BMR: 1731 calories/day", explanation: "Standard adult male BMR calculation." },
    { inputs: "Female, 28 years, 162cm, 58kg", result: "BMR: 1310 calories/day", explanation: "Standard adult female BMR calculation." },
    { inputs: "Male, 45 years, 170cm, 90kg", result: "BMR: 1660 calories/day", explanation: "Higher weight increases BMR despite older age reducing it." },
    { inputs: "Female, 22 years, 155cm, 50kg", result: "BMR: 1223 calories/day", explanation: "Younger age and lower weight give a lower resting calorie need." },
  ],

  practicalUses: [
    "Building a calorie deficit plan for weight loss",
    "Calculating a calorie surplus for muscle gain",
    "Setting a baseline before applying an activity multiplier for TDEE",
    "Comparing metabolic rate changes over time as weight changes",
    "Planning meal plans with a dietitian or nutritionist",
    "Understanding minimum calorie intake to avoid excessive restriction",
    "Adjusting diet plans after significant weight loss or gain",
    "Setting realistic fitness and nutrition goals",
  ],

  expertTips: [
    "BMR is not your total calorie need — multiply by an activity factor to get TDEE.",
    "Never eat below your BMR for extended periods; it can slow metabolism and harm health.",
    "Recalculate BMR every few kg of weight change for accuracy.",
    "Muscle burns more calories than fat, so strength training can gradually raise BMR.",
    "Mifflin-St Jeor is generally more accurate than the older Harris-Benedict formula.",
    "Combine BMR with a food tracking app for precise calorie deficit management.",
    "Sleep and stress can affect real-world metabolic rate beyond formula estimates.",
    "Use BMR as a guide, not an exact science — individual variation exists.",
  ],

  commonMistakes: [
    { mistake: "Treating BMR as the total daily calorie need", fix: "Multiply BMR by an activity level factor to get TDEE, your actual daily calorie need." },
    { mistake: "Eating below BMR to lose weight faster", fix: "Eating under BMR long-term can be counterproductive and harmful; aim for a moderate deficit from TDEE instead." },
    { mistake: "Not updating BMR after weight changes", fix: "Recalculate every 5-8kg of weight change for an accurate figure." },
    { mistake: "Ignoring gender differences in the formula", fix: "Always select the correct gender since the constant differs significantly." },
    { mistake: "Confusing BMR with RMR (Resting Metabolic Rate)", fix: "They're similar but RMR is measured under less strict conditions and is usually slightly higher." },
  ],

  faq: [
    { q: "What is BMR?", a: "BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest to maintain basic functions like breathing and circulation." },
    { q: "How is BMR different from TDEE?", a: "BMR is calories burned at rest only, while TDEE (Total Daily Energy Expenditure) adds calories burned through daily activity and exercise on top of BMR." },
    { q: "Which formula does this calculator use?", a: "This calculator uses the Mifflin-St Jeor equation, widely regarded as one of the most accurate BMR formulas for most adults." },
    { q: "Should I eat exactly my BMR calories?", a: "No, eating exactly your BMR ignores daily activity; use your TDEE (BMR × activity factor) to set an appropriate calorie target." },
    { q: "Does muscle mass affect BMR?", a: "Yes, muscle tissue burns more calories at rest than fat tissue, so higher muscle mass generally increases BMR." },
    { q: "How accurate is a BMR calculator?", a: "It provides a good estimate based on population averages, but individual metabolism can vary by 5-10% from the calculated value." },
    { q: "Does age affect BMR?", a: "Yes, BMR typically decreases with age due to gradual loss of muscle mass and hormonal changes." },
    { q: "Can I increase my BMR?", a: "Yes, building muscle through strength training and maintaining adequate protein intake can help increase BMR over time." },
    { q: "Why do men have higher BMR than women on average?", a: "Men generally have more muscle mass and less body fat on average, which raises resting calorie burn." },
    { q: "Is BMR the same as metabolism?", a: "BMR is a major component of metabolism, but total metabolism also includes calories burned through digestion and physical activity." },
    { q: "How do I calculate BMR by hand without a calculator?", a: "Use the Mifflin-St Jeor formula directly: for men, 10×weight(kg) + 6.25×height(cm) − 5×age + 5; for women, subtract 161 instead of adding 5. A calculator just automates this arithmetic." },
    { q: "What activity multiplier should I use to convert BMR to TDEE?", a: "Common multipliers are 1.2 for sedentary, 1.375 for lightly active, 1.55 for moderately active, 1.725 for very active, and 1.9 for extremely active lifestyles." },
    { q: "Why do BMR calculators give slightly different results?", a: "Different calculators may use different formulas — Mifflin-St Jeor, Harris-Benedict, or Katch-McArdle — each weighting weight, height, age, and body fat slightly differently." },
    { q: "Does BMR decrease during weight loss?", a: "Yes, as body weight drops, BMR typically decreases too, since a smaller body requires fewer calories at rest — this is why calorie targets often need periodic recalculation." },
    { q: "What is the Katch-McArdle formula and how does it differ?", a: "Katch-McArdle estimates BMR from lean body mass instead of total weight, making it more accurate for people who know their body fat percentage, especially athletes with more muscle mass." },
  ],

  relatedCalculators: [
    "Calorie Calculator",
    "BMI Calculator",
    "Body Fat Calculator",
    "Ideal Weight Calculator",
    "Macro Calculator",
    "TDEE Calculator",
  ],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "BMR Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};