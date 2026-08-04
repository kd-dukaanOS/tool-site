export const ageCalculatorContent = {
  meta: {
    seoTitle: "Age Calculator - Find Your Exact Age in Years, Months, Days",
    metaDescription: "Calculate your exact age in years, months, days, hours and minutes. Free online age calculator with zodiac sign, birthstone and next birthday countdown.",
    canonicalSlug: "/age-calculator",
    ogTitle: "Age Calculator - Exact Age in Years, Months & Days",
    ogDescription: "Instantly calculate your exact age, next birthday countdown, zodiac sign and more with this free online age calculator.",
    twitterTitle: "Free Age Calculator - Years, Months, Days",
    twitterDescription: "Find your exact age in years, months, days, hours, minutes and seconds. Free, fast and accurate.",
  },

  hero: {
    text: "The Age Calculator instantly finds your exact age in years, months, days, hours, minutes and seconds from your date of birth. Use it to check your precise age for job applications, school admissions, legal documents or just for fun. Anyone who needs an accurate, quick age calculation can use this free tool.",
  },

  about: {
    text: `The Age Calculator is a free online tool that calculates your exact age between two dates. Instead of manually counting years and months, this tool gives you an instant, accurate breakdown down to the day.

It is useful for filling government forms, checking eligibility for jobs, exams or retirement, verifying age requirements for visas and admissions, and planning birthdays.

The calculator also shows bonus details like your zodiac sign, Chinese zodiac animal, birthstone, generation and the day of the week you were born.

Limitations: results depend on accurate input dates, and the tool uses calendar-based calculation (not leap-second precision) for time components like hours and minutes.

Use this tool whenever you need a fast, error-free age calculation instead of doing it by hand.`,
  },

  formula: {
    formula: "Age = Current Date − Date of Birth",
    variables: [
      { symbol: "Years", meaning: "Full years completed since birth" },
      { symbol: "Months", meaning: "Remaining full months after the last birthday" },
      { symbol: "Days", meaning: "Remaining days after the last full month" },
    ],
    explanation: "The calculator subtracts your birth date from today's date, adjusting for varying month lengths and leap years, to give a precise years/months/days breakdown.",
    interpretation: "For example, if you were born on 15 March 2000 and today is 31 July 2026, your exact age is 26 years, 4 months and 16 days.",
  },

  steps: [
    "Enter your date of birth using the date picker.",
    "Optionally change the 'age as of' date if you want your age on a specific date.",
    "Click Calculate to run the tool.",
    "View your exact age in years, months and days.",
    "Scroll down to see total months, weeks, days, hours, minutes and seconds.",
    "Check your zodiac sign, birthstone, generation and weekday born.",
    "See the countdown to your next birthday.",
    "Copy or share your age summary using the copy button.",
  ],

  examples: [
    {
      inputs: "DOB: 15 March 2000, Today: 31 July 2026",
      result: "26 years, 4 months, 16 days",
      explanation: "Standard age calculation between two dates with no leap-year edge case.",
    },
    {
      inputs: "DOB: 29 February 2000, Today: 31 July 2026",
      result: "26 years, 5 months, 2 days",
      explanation: "Leap-year birth date handled correctly by using the nearest valid calendar day.",
    },
    {
      inputs: "DOB: 1 January 1990, Today: 31 July 2026",
      result: "36 years, 6 months, 30 days",
      explanation: "Shows how total months, weeks and days scale for older ages.",
    },
    {
      inputs: "DOB: 10 June 2015, Today: 31 July 2026",
      result: "11 years, 1 month, 21 days",
      explanation: "Useful for checking a child's exact age for school admission cut-offs.",
    },
  ],

  practicalUses: [
    "Checking minimum age eligibility for a job application",
    "Verifying age requirements for a driving license",
    "Confirming school or college admission age cut-offs",
    "Calculating age for visa or passport applications",
    "Finding exact age for pension or retirement eligibility",
    "Planning milestone birthday celebrations",
    "Filling government or legal forms accurately",
    "Checking insurance policy age eligibility",
    "Verifying sports competition age categories",
    "Calculating a pet's age in human years context",
    "Finding the number of days until a birthday",
    "Settling age disputes with an exact calculation",
  ],

  expertTips: [
    "Always double-check the birth year, especially for dates before 1950 which are sometimes mistyped.",
    "Use the 'age as of' date field to calculate age on a future date, like an exam or joining date.",
    "Government forms usually want completed years only, not months and days.",
    "For leap-year birthdays (Feb 29), many official documents treat Feb 28 or Mar 1 as the legal birthday in non-leap years.",
    "Total days is more useful than total months for infant or child age tracking.",
    "Time zones can shift 'today's date' near midnight — recalculate if it matters for legal purposes.",
    "Use total weeks for pregnancy or newborn milestone tracking.",
    "Zodiac and birthstone results are for fun and are not scientifically validated.",
    "Save your age summary using the copy feature for quick reuse in forms.",
    "Cross-check calculated age with your official ID if there's ever a mismatch.",
  ],

  commonMistakes: [
    { mistake: "Entering the wrong date format (DD/MM vs MM/DD)", fix: "Always use the date picker instead of typing manually." },
    { mistake: "Forgetting time zone differences near midnight", fix: "Recalculate on the exact calendar day relevant to your use case." },
    { mistake: "Assuming age changes on the exact birth minute", fix: "Age legally changes at the start of the birthday, not the birth time." },
    { mistake: "Confusing total months with years × 12", fix: "Total months already accounts for partial months correctly." },
    { mistake: "Ignoring leap year birthdays", fix: "The calculator automatically adjusts Feb 29 births for non-leap years." },
    { mistake: "Using age calculators with future birth dates", fix: "Ensure the date of birth is not set in the future." },
    { mistake: "Mixing up 'age' with 'years until an event'", fix: "Use the countdown feature separately from the age breakdown." },
    { mistake: "Not verifying pre-1900 dates", fix: "Very old dates may not be supported — check the valid range." },
  ],

  faq: [
    { q: "How is exact age calculated?", a: "Exact age is calculated by subtracting your date of birth from the current date, giving completed years, months and days, adjusted for varying month lengths and leap years." },
    { q: "What is the age calculator used for?", a: "It's used to instantly find your precise age in years, months and days for forms, eligibility checks, admissions, or general curiosity." },
    { q: "Can I calculate my age on a future or past date?", a: "Yes, most age calculators let you set a custom 'age as of' date instead of only using today's date." },
    { q: "Why does my age in months differ from years × 12?", a: "Because total months accounts for the partial month remaining after your last completed year, not a simple multiplication." },
    { q: "How does the calculator handle leap year birthdays?", a: "If you're born on Feb 29, the calculator adjusts to the nearest valid date (Feb 28 or Mar 1) in non-leap years." },
    { q: "Is the age calculator accurate to the hour?", a: "It estimates hours, minutes and seconds using calendar days, so it's accurate for practical purposes but not for legal timestamp precision." },
    { q: "What's the difference between age and date difference calculators?", a: "An age calculator always measures from a birth date to today (or a chosen date), while a date difference calculator finds the gap between any two arbitrary dates." },
    { q: "Can this calculator find days until my next birthday?", a: "Yes, it shows a countdown with the exact number of days remaining until your next birthday." },
    { q: "Does the tool store my birth date?", a: "No, the calculation happens in your browser and no personal data is saved or sent to a server." },
    { q: "What is my Chinese zodiac sign based on?", a: "It's based on your birth year, cycling through 12 animals in a repeating 12-year pattern." },
    { q: "Why do I get a different zodiac sign than expected?", a: "Western zodiac is based on birth date ranges, while Chinese zodiac is based on birth year — they use different systems." },
    { q: "Can I use this for pet age calculation?", a: "It calculates human calendar age; for pet-to-human age conversion, use a dedicated pet age calculator." },
    { q: "What does 'generation' mean in the results?", a: "It classifies your birth year into a generational cohort like Millennial, Gen Z or Gen Alpha based on commonly used year ranges." },
    { q: "Is there a minimum or maximum birth year supported?", a: "Most calculators support birth years from around 1900 onward for realistic and accurate results." },
    { q: "How accurate is the total days count?", a: "It's exact — calculated directly from the millisecond difference between the two dates, then converted to days." },
  ],

  relatedCalculators: [
    "Date Difference Calculator",
    "Birthday Calculator",
    "BMI Calculator",
    "Pregnancy Due Date Calculator",
    "Retirement Age Calculator",
    "Zodiac Sign Calculator",
    "Countdown Timer",
    "Percentage Calculator",
  ],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Age Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};
