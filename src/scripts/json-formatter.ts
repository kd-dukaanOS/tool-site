export const jsonFormatterContent = {
  meta: {
    seoTitle: "JSON Formatter & Validator - Format, Minify JSON Online",
    metaDescription: "Format, minify and validate JSON online for free. Instantly see key count, nesting depth and size.",
    canonicalSlug: "/json-formatter",
    ogTitle: "JSON Formatter & Validator - Format and Minify JSON",
    ogDescription: "Instantly format, minify and validate JSON with key count, depth and size stats.",
    twitterTitle: "Free JSON Formatter & Validator",
    twitterDescription: "Format, minify and validate JSON instantly in your browser.",
  },

  hero: { text: "Format, minify and validate JSON instantly. Paste raw JSON and get a clean, indented output with key count, depth and size stats." },

  about: { text: `The JSON Formatter beautifies messy JSON, minifies it for production, and validates syntax with clear error messages.

It's useful for debugging API responses, cleaning up config files, preparing JSON for production use, and quickly checking whether a JSON payload is valid.

The tool shows key count, nesting depth and byte size alongside the formatted output for quick structural insight.

Limitations: it validates strict JSON syntax only — JSON5, JSONC (with comments) or trailing commas are not supported.

All processing happens locally in your browser — nothing is uploaded to a server.` },

  formula: {
    formula: "Valid JSON = Balanced brackets + quoted keys + no trailing commas",
    variables: [
      { symbol: "Depth", meaning: "Maximum level of nested objects or arrays" },
      { symbol: "Key Count", meaning: "Total number of keys across the entire structure" },
    ],
    explanation: "The formatter parses the input against the JSON specification, then re-serializes it with consistent indentation or removes whitespace for minification.",
    interpretation: "A JSON document with mismatched brackets, unquoted keys, or trailing commas fails validation and returns an error with the exact location.",
  },

  steps: [
    "Paste your JSON into the input field.",
    "Click Format to beautify or Minify to compress.",
    "Review key count, depth and size stats.",
    "Fix any syntax errors shown, if the JSON is invalid.",
    "Copy the output using the copy button.",
  ],

  examples: [
    {
      inputs: `{"name":"John","age":30}`,
      result: `{\n  "name": "John",\n  "age": 30\n}`,
      explanation: "Compact JSON formatted with proper indentation for readability.",
    },
    {
      inputs: `{\n  "name": "John",\n  "age": 30\n}`,
      result: `{"name":"John","age":30}`,
      explanation: "Formatted JSON minified for production use, removing all whitespace.",
    },
    {
      inputs: `{"name": "John",}`,
      result: "Syntax error: trailing comma not allowed",
      explanation: "Strict JSON validation flags trailing commas, which are invalid per the JSON spec.",
    },
  ],

  practicalUses: [
    "Debugging API response payloads",
    "Cleaning up minified JSON for readability",
    "Minifying JSON config files for production deployment",
    "Validating JSON before using it in code",
    "Checking structure depth and key count of large JSON files",
    "Formatting JSON for documentation or sharing with teammates",
    "Converting pretty-printed JSON to compact form for smaller payloads",
    "Spotting syntax errors before deploying a configuration change",
  ],

  expertTips: [
    "Use minified JSON for production APIs to reduce payload size.",
    "Use formatted JSON during development and debugging for readability.",
    "Trailing commas and single quotes are common causes of invalid JSON — check these first.",
    "Large JSON files with deep nesting are easier to review broken into smaller sections.",
    "Key count and depth stats can help spot unexpectedly large or deeply nested payloads.",
    "Always validate JSON before sending it to an API to avoid silent failures.",
  ],

  commonMistakes: [
    { mistake: "Using single quotes instead of double quotes", fix: "JSON requires double quotes around keys and string values — single quotes are invalid." },
    { mistake: "Adding a trailing comma after the last item", fix: "Remove the comma after the final key-value pair or array item." },
    { mistake: "Leaving keys unquoted", fix: "All JSON object keys must be wrapped in double quotes." },
    { mistake: "Assuming comments are allowed", fix: "Standard JSON doesn't support comments — remove them or use JSONC-aware tools separately." },
    { mistake: "Pasting JavaScript objects instead of JSON", fix: "JavaScript object literals allow syntax JSON doesn't, like unquoted keys or trailing commas — convert to strict JSON first." },
  ],

  faq: [
    { q: "Does this validate JSON syntax?", a: "Yes, invalid JSON shows a clear error message with details, including the line and character where the problem occurs." },
    { q: "Is my JSON data sent to a server?", a: "No, formatting happens entirely in your browser using JavaScript. Your data never leaves your device." },
    { q: "What is the difference between formatting and minifying JSON?", a: "Formatting adds indentation and line breaks so JSON is easy to read. Minifying removes all unnecessary whitespace to make the file as small as possible, which is useful for production and APIs." },
    { q: "Can this tool handle large JSON files?", a: "Yes, it can process large JSON documents directly in your browser, though very large files (several MB) may take a moment depending on your device." },
    { q: "Why is my JSON showing a syntax error?", a: "Common causes are trailing commas, missing quotes around keys, single quotes instead of double quotes, or unescaped special characters. The error message will point to the exact location." },
    { q: "Does this tool support JSON5 or JSONC (JSON with comments)?", a: "No, this formatter follows strict JSON syntax as defined by the JSON specification, which does not allow comments or trailing commas." },
    { q: "Can I use this JSON formatter offline?", a: "Once the page has loaded, formatting and validation run locally in your browser, so it works even without an active internet connection." },
    { q: "Is there a limit to how many keys or how much nesting depth this tool supports?", a: "There's no hard-coded limit — performance depends on your browser and device rather than the tool itself." },
    { q: "What is JSON nesting depth?", a: "It's the maximum number of levels an object or array is nested inside another object or array within the document." },
    { q: "Can I convert JSON to a minified single line?", a: "Yes, using the minify option compresses the JSON into a single line with no unnecessary whitespace." },
  ],

  relatedCalculators: ["Diff Checker", "Regex Tester", "URL Encoder/Decoder", "CSV to JSON Converter", "Base64 Encoder/Decoder", "Markdown Previewer"],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "JSON Formatter & Validator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};
