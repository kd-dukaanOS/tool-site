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

  hero: {
    text: "The Regex Tester lets you test JavaScript regular expressions against sample text instantly, with live match highlighting, flag support and capture group detection — ideal for debugging and learning regex.",
  },

  about: {
    text: `The Regex Tester is a free online tool for writing, testing and debugging regular expressions using standard JavaScript regex syntax.

It is useful for validating input patterns like emails and phone numbers, extracting data from text, debugging complex regex logic, and learning how regex flags and capture groups work.

Enter a pattern, optional flags (g, i, m, s), and test text — matches are highlighted directly in the text, with a summary of match count and capture groups.

Limitations: this tool uses the JavaScript regex engine; syntax may differ slightly from PCRE, Python or other regex flavors.

All processing happens locally in your browser — no text or pattern is ever sent to a server.`,
  },

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
    {
      inputs: "Pattern: \\b\\w+@\\w+\\.\\w+\\b, Text: contact us at hi@example.com",
      result: "1 match: hi@example.com",
      explanation: "A basic email-matching pattern extracting a single email address.",
    },
    {
      inputs: "Pattern: \\d{3}-\\d{4}, Flags: g, Text: Call 555-1234 or 555-5678",
      result: "2 matches: 555-1234, 555-5678",
      explanation: "The global flag finds all occurrences instead of just the first.",
    },
    {
      inputs: "Pattern: (\\w+)@(\\w+)\\.com, Text: reach me at team@company.com",
      result: "1 match with 2 capture groups: 'team' and 'company'",
      explanation: "Parenthesized groups extract the username and domain separately from a matched email.",
    },
    {
      inputs: "Pattern: ^\\d+, Flags: m, Text: line 1: 100\\nline 2: 200",
      result: "0 matches (pattern doesn't align with line starts in this example)",
      explanation: "Shows how the m flag changes what ^ and $ anchor to when working with multiline text.",
    },
  ],

  practicalUses: [
    "Validating email, phone number or URL input formats",
    "Extracting structured data from unstructured text",
    "Debugging regex used in form validation",
    "Learning regex syntax with instant visual feedback",
    "Testing search-and-replace patterns before using them in code",
    "Cleaning and parsing log files or CSV data",
    "Building and verifying input masks for forms",
    "Testing password complexity validation patterns",
    "Extracting hashtags, mentions or URLs from social media text",
    "Verifying patterns used in server-side routing or URL matching",
  ],

  expertTips: [
    "Use the g flag to find all matches instead of just the first.",
    "Use the i flag for case-insensitive matching.",
    "Wrap parts of your pattern in parentheses to capture sub-matches as groups.",
    "Test edge cases (empty strings, special characters) to catch pattern bugs early.",
    "Use non-capturing groups (?:...) when you don't need the group's value.",
    "Anchor your pattern with ^ and $ when you need to match the entire string, not just part of it.",
    "Use character classes like [a-zA-Z0-9] instead of listing individual characters for cleaner patterns.",
    "Break complex patterns into smaller pieces and test each part separately before combining them.",
    "Named capture groups (?<name>...) make complex patterns more readable when extracting multiple values.",
    "Keep a personal library of commonly used patterns (email, URL, phone) to reuse across projects.",
  ],

  commonMistakes: [
    { mistake: "Forgetting to escape special characters", fix: "Escape characters like . ( ) [ ] with a backslash when matching them literally." },
    { mistake: "Not using the g flag for multiple matches", fix: "Without g, only the first match is found." },
    { mistake: "Overly greedy patterns matching too much text", fix: "Use non-greedy quantifiers like *? or +? to limit matches." },
    { mistake: "Assuming regex syntax is identical across all languages", fix: "JavaScript regex has some differences from PCRE, Python and other flavors — verify syntax compatibility if reusing a pattern elsewhere." },
    { mistake: "Writing an overly complex single pattern for a multi-step problem", fix: "Break the problem into multiple simpler patterns or processing steps rather than one dense regex." },
    { mistake: "Not testing against edge cases like empty strings or unusual formatting", fix: "Include a range of test inputs, including malformed ones, to confirm the pattern behaves as expected." },
  ],

  faq: [
    { q: "What regex flavor does this tool use?", a: "It uses the native JavaScript regex engine (ECMAScript), so syntax may differ slightly from PCRE or Python regex." },
    { q: "What do the flags g, i, m, s mean?", a: "g finds all matches, i ignores case, m treats ^ and $ as line boundaries, and s allows . to match newlines." },
    { q: "How do I see capture groups?", a: "Capture groups from parenthesized sub-patterns are counted and shown in the results after testing." },
    { q: "Is my text sent to a server?", a: "No, all regex testing happens locally in your browser." },
    { q: "Why does my pattern show an error?", a: "The pattern likely has invalid regex syntax, such as an unclosed bracket or group — check the error message for details." },
    { q: "What's the difference between .* and .+?", a: ".* matches zero or more of any character, while .+ requires at least one. Use .* when the match can be empty, .+ when it can't." },
    { q: "How do I match a literal dot or special character?", a: "Escape it with a backslash. For example, \\. matches a literal period instead of 'any character', which is what an unescaped . means." },
    { q: "Why is my regex matching more text than expected?", a: "This is usually greedy matching — quantifiers like * and + grab as much as possible by default. Add a ? after them (*? or +?) to make them lazy and match as little as possible instead." },
    { q: "What is a non-capturing group?", a: "Written as (?:...), it groups part of a pattern for logic like alternation without creating a numbered capture group in the results — useful when you need grouping but not the matched value." },
    { q: "How do I test regex for email or phone validation?", a: "Paste your pattern and some sample emails or phone numbers into the text field, then check the highlighted matches to confirm valid formats are caught and invalid ones aren't." },
    { q: "Can this tool test multiline text?", a: "Yes — paste multiline text into the test field and use the m flag if you want ^ and $ to match the start and end of each line rather than the whole string." },
    { q: "What is a named capture group?", a: "Written as (?<name>...), it lets you label a capture group so you can reference the matched value by name instead of by position number." },
    { q: "Why doesn't my ^ or $ anchor work as expected?", a: "Without the m flag, ^ and $ match only the very start and end of the entire string, not each line — add the m flag if you need per-line anchoring." },
  ],

  relatedCalculators: ["Diff Checker", "URL Encoder/Decoder", "Slug Generator"],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Regex Tester",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};