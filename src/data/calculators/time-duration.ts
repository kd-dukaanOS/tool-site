export const timeDurationCalculatorContent = {
  meta: { seoTitle: "Time Duration Calculator - Hours Between Times Free", metaDescription: "Calculate the duration between two times in hours and minutes instantly. Free time duration calculator.", canonicalSlug: "/time-duration-calculator", ogTitle: "Time Duration Calculator", ogDescription: "Instantly find the duration between two times.", twitterTitle: "Free Time Duration Calculator", twitterDescription: "Calculate time duration instantly." },
  hero: { text: "The Time Duration Calculator finds the exact duration between a start and end time in hours and minutes, even across midnight. Enter both times to get an instant result. Useful for timesheets, shift work and event planning." },
  about: { text: `The Time Duration Calculator computes the elapsed time between a start and end time, correctly handling cases where the end time crosses into the next day.

It's useful for calculating work shift hours, meeting durations, cooking or workout timing, and any scenario needing precise time span calculation.

The tool shows the result in hours and minutes plus total minutes, and flags when the duration crosses midnight.

Limitations: it calculates duration within a single 24-hour cycle; for multi-day spans, use a date difference calculator instead.

Use this tool for quick time span calculations within a day.` },
  formula: { formula: "Duration = End Time − Start Time (add 24h if end < start)", variables: [{ symbol: "Start Time", meaning: "Time in HH:MM format" }, { symbol: "End Time", meaning: "Time in HH:MM format" }], explanation: "The calculator converts both times to minutes since midnight and subtracts; if the result is negative, it adds 24 hours to account for crossing midnight.", interpretation: "For example, 22:00 to 06:00 crosses midnight and gives a duration of 8 hours." },
  steps: ["Enter the start time.", "Enter the end time.", "Click Calculate to run the tool.", "View the duration in hours and minutes.", "Check if the duration crosses midnight."],
  examples: [
    { inputs: "09:00 to 17:30", result: "8h 30m", explanation: "Standard workday duration." },
    { inputs: "22:00 to 06:00", result: "8h 0m (crosses midnight)", explanation: "Night shift duration spanning midnight." },
    { inputs: "13:15 to 13:45", result: "0h 30m", explanation: "Short duration within the same hour." },
  ],
  practicalUses: ["Calculating work shift hours", "Tracking meeting or call durations", "Timing workouts or cooking sessions", "Calculating overnight shift hours for payroll", "Planning event schedules with precise timing"],
  expertTips: ["For night shifts crossing midnight, the calculator automatically adds 24 hours to get the correct duration.", "Use 24-hour format (HH:MM) for unambiguous time entry.", "For multi-day spans, use a date difference calculator instead.", "Double-check AM/PM conversion if your source data uses 12-hour format."],
  commonMistakes: [{ mistake: "Entering 12-hour format without AM/PM conversion", fix: "Convert to 24-hour format before entering, or ensure your input matches HH:MM 24-hour style." }, { mistake: "Not accounting for midnight crossover", fix: "The tool handles this automatically, but always verify the 'crosses midnight' flag for accuracy." }, { mistake: "Using this for multi-day spans", fix: "For durations beyond 24 hours, use a date difference calculator instead." }],
  faq: [
    { q: "How do you calculate time duration between two times?", a: "Convert both times to minutes since midnight, subtract the start from the end, and if negative, add 24 hours to account for crossing midnight." },
    { q: "Can this calculator handle overnight shifts?", a: "Yes, if the end time is earlier than the start time, it automatically calculates the duration as crossing into the next day." },
    { q: "What format should I use for entering times?", a: "Use 24-hour HH:MM format (like 14:30 for 2:30 PM) for unambiguous results." },
    { q: "Can I calculate duration across multiple days?", a: "No, this tool is designed for single-day time spans; use a date difference calculator for multi-day durations." },
    { q: "How is total minutes useful?", a: "Total minutes gives a single number useful for payroll systems or further calculations beyond the hours/minutes format." },
  ],
  relatedCalculators: ["Date Difference Calculator", "Timezone Calculator", "Business Days Calculator", "Age Calculator"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: { h1: "Time Duration Calculator", h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"] },
};