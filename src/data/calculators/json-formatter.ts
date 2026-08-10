export const jsonFormatterContent = {
  meta: {
    seoTitle: "JSON Formatter & Validator - Format, Minify JSON Online",
    metaDescription: "Format, minify and validate JSON online for free. Instantly see key count, nesting depth and size.",
    canonicalSlug: "/json-formatter",
  },
  hero: { text: "Format, minify and validate JSON instantly. Paste raw JSON and get a clean, indented output with key count, depth and size stats." },
  about: { text: "The JSON Formatter beautifies messy JSON, minifies it for production, and validates syntax with clear error messages. All processing happens locally in your browser." },
  steps: [
    "Paste your JSON into the input field.",
    "Click Format to beautify or Minify to compress.",
    "Review key count, depth and size stats.",
    "Copy the output using the copy button.",
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
  ],
  relatedCalculators: ["Diff Checker", "Regex Tester", "URL Encoder/Decoder"],
};