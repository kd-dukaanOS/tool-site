// src/data/tools.js
// One place for all category + tool info. Add a new tool = add one object here.
// Every page (homepage, category pages, tool pages later) reads from this file.

export const categoryIcons = {
  "text-tools": `<path d="M4 6h16M4 12h10M4 18h13"/>`,
  "developer-tools": `<path d="M8 3a3 3 0 00-3 3v3a2 2 0 01-2 2 2 2 0 012 2v3a3 3 0 003 3M16 3a3 3 0 013 3v3a2 2 0 002 2 2 2 0 00-2 2v3a3 3 0 01-3 3"/>`,
  "converters": `<path d="M17 8V6a5 5 0 00-10 0v2M5 8h14l-1 12H6L5 8z"/>`,
  "security-tools": `<path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6l8-4z"/>`,
  "generators-calculators": `<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/>`,
};

export const categories = [
  { slug: "text-tools", name: "Text Tools", description: "Word counting, case conversion, diffing, and other everyday text utilities." },
  { slug: "developer-tools", name: "Developer Tools", description: "JSON, regex, tokens, and data-format helpers for day-to-day dev work." },
  { slug: "converters", name: "Converters", description: "Convert between encodings, timestamps, and color formats." },
  { slug: "security-tools", name: "Security Tools", description: "Generate IDs, passwords, and hashes — all done locally in your browser." },
  { slug: "generators-calculators", name: "Generators & Calculators", description: "Quick generators and calculators for common everyday tasks." },
];

export const tools = [
  // Text Tools
  { slug: "word-counter", category: "text-tools", name: "Word Counter", desc: "Count words & characters" },
  { slug: "case-converter", category: "text-tools", name: "Case Converter", desc: "Convert text case instantly" },
  { slug: "markdown-previewer", category: "text-tools", name: "Markdown Previewer", desc: "Live markdown preview" },
  { slug: "diff-checker", category: "text-tools", name: "Diff Checker", desc: "Compare two blocks of text" },
  { slug: "slug-generator", category: "text-tools", name: "Slug Generator", desc: "Turn text into URL slugs" },

  // Developer Tools
  { slug: "json-formatter", category: "developer-tools", name: "JSON Formatter", desc: "Format & validate JSON" },
  { slug: "regex-tester", category: "developer-tools", name: "Regex Tester", desc: "Test regex patterns live" },
  { slug: "jwt-decoder", category: "developer-tools", name: "JWT Decoder", desc: "Decode JWT tokens" },
  { slug: "csv-json-converter", category: "developer-tools", name: "CSV ↔ JSON Converter", desc: "Convert between CSV and JSON" },
  { slug: "number-base-converter", category: "developer-tools", name: "Number Base Converter", desc: "Convert between number bases" },

  // Converters
  { slug: "base64-tool", category: "converters", name: "Base64 Tool", desc: "Encode / decode Base64" },
  { slug: "url-encoder-decoder", category: "converters", name: "URL Encoder/Decoder", desc: "Encode or decode URLs" },
  { slug: "timestamp-converter", category: "converters", name: "Timestamp Converter", desc: "Convert Unix timestamps" },
  { slug: "color-converter", category: "converters", name: "Color Converter", desc: "Convert HEX, RGB, HSL" },

  // Security Tools
  { slug: "uuid-generator", category: "security-tools", name: "UUID Generator", desc: "Generate unique UUIDs" },
  { slug: "password-generator", category: "security-tools", name: "Password Generator", desc: "Generate strong passwords" },
  { slug: "hash-generator", category: "security-tools", name: "Hash Generator", desc: "Generate MD5, SHA hashes" },

  // Generators & Calculators
  { slug: "qr-code-generator", category: "generators-calculators", name: "QR Code Generator", desc: "Create QR codes instantly" },
  { slug: "lorem-ipsum-generator", category: "generators-calculators", name: "Lorem Ipsum Generator", desc: "Generate placeholder text" },
  { slug: "percentage-calculator", category: "generators-calculators", name: "Percentage Calculator", desc: "Calculate percentages fast" },
];
