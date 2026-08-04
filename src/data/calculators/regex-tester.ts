export const regexTesterContent = {
  meta: {
    seoTitle: "Regex Tester - Test Regular Expressions Online Free",
    metaDescription: "Test and debug regular expressions online with live match highlighting, flags support and capture group detection. Free JavaScript regex tester.",
    canonicalSlug: "/regex-tester",
    ogTitle: "Regex Tester - Test Regular Expressions Online",
    ogDescription: "Test JavaScript regex patterns against sample text instantly with live highlighting and capture groups.",
    twitterTitle: "Free Regex Tester Online",
    twitterDescription: "Test and debug regular expressions with live match highlighting — free, instant, no signup.",
    keywords: ["regex tester", "regular expression tester", "test regex online", "javascript regex tester", "regex debugger"],
  },
  hero: { text: "The Regex Tester lets you test JavaScript regular expressions against sample text instantly, with live match highlighting, flag support and capture group detection — ideal for debugging and learning regex." },
  about: { text: `The Regex Tester is a free online tool for writing, testing and debugging regular expressions using standard JavaScript regex syntax.

It's useful for validating input patterns like emails and phone numbers, extracting data from text, debugging complex regex logic, and learning how regex flags and capture groups work.

Enter a pattern, optional flags (g, i, m, s), and test text — matches are highlighted directly in the text, with a summary of match count and capture groups.

Limitations: this tool uses the JavaScript regex engine; syntax may differ slightly from PCRE, Python or other regex flavors.

All processing happens locally in your browser.` },
  formula: {
    formula: "new RegExp(pattern, flags).exec(text)",
    variables: [
      { symbol: "Pattern", meaning: "The regular expression syntax to match against" },
      { symbol: "Flags", meaning: "Modifiers like g (global), i (case-insensitive), m (multiline), s (dotall)" },
      { symbol: "Capture Groups", meaning: "Parenthesized sub-patterns () that extract matched sub-strings" },
    ],
    explanation: "The tester compiles your pattern and flags into a JavaScript RegExp object, then runs it against the test text, collecting all matches and their capture groups.",
    interpretation: "For example, the pattern \\d+ with the g flag matches every sequence of digits in the text, highlighting each occurrence.",
  },
  steps: [
    "Enter your regex pattern.",
    "Set flags (e.g. g for global, i for case-insensitive).",
    "Paste the text you want to test against.",
    "Click Test to run the pattern.",
    "Review highlighted matches and capture group counts.",
    "Copy the match summary using the copy button.",
  ],
  examples: [
    { inputs: "Pattern: \\b\\w+@\\w+\\.\\w+\\b, Text: contact us at hi@example.com", result: "1 match: hi@example.com", explanation: "A basic email-matching pattern extracting a single email address." },
    { inputs: "Pattern: \\d{3}-\\d{4}, Flags: g, Text: Call 555-1234 or 555-5678", result: "2 matches: 555-1234, 555-5678", explanation: "The global flag finds all occurrences instead of just the first." },
  ],
  practicalUses: [
    "Validating email, phone number or URL input formats",
    "Extracting structured data from unstructured text",
    "Debugging regex used in form validation",
    "Learning regex syntax with instant visual feedback",
    "Testing search-and-replace patterns before using them in code",
    "Cleaning and parsing log files or CSV data",
  ],
  expertTips: [
    "Use the g flag to find all matches instead of just the first.",
    "Use the i flag for case-insensitive matching.",
    "Wrap parts of your pattern in parentheses to capture sub-matches as groups.",
    "Test edge cases (empty strings, special characters) to catch pattern bugs early.",
    "Use non-capturing groups (?:...) when you don't need the group's value.",
  ],
  commonMistakes: [
    { mistake: "Forgetting to escape special characters", fix: "Escape characters like . ( ) [ ] with a backslash when matching them literally." },
    { mistake: "Not using the g flag for multiple matches", fix: "Without g, only the first match is found." },
    { mistake: "Overly greedy patterns matching too much text", fix: "Use non-greedy quantifiers like *? or +? to limit matches." },
  ],
  faq: [
    { q: "What regex flavor does this tool use?", a: "It uses the native JavaScript regex engine (ECMAScript), so syntax may differ slightly from PCRE or Python regex." },
    { q: "What do the flags g, i, m, s mean?", a: "g finds all matches, i ignores case, m treats ^ and $ as line boundaries, and s allows . to match newlines." },
    { q: "How do I see capture groups?", a: "Capture groups from parenthesized sub-patterns are counted and shown in the results after testing." },
    { q: "Is my text sent to a server?", a: "No, all regex testing happens locally in your browser." },
    { q: "Why does my pattern show an error?", a: "The pattern likely has invalid regex syntax, such as an unclosed bracket or group — check the error message for details." },
  ],
  relatedCalculators: ["Diff Checker", "URL Encoder/Decoder", "Slug Generator"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Regex Tester",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};