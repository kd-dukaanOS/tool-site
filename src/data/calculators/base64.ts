export const base64CalculatorContent = {
  meta: { seoTitle: "Base64 Encoder Decoder - Free Online Tool", metaDescription: "Encode text to Base64 or decode Base64 back to text instantly. Free online Base64 converter.", canonicalSlug: "/base64-encoder-decoder", ogTitle: "Base64 Encoder Decoder", ogDescription: "Instantly encode or decode Base64 text.", twitterTitle: "Free Base64 Encoder Decoder", twitterDescription: "Encode or decode Base64 instantly." },
  hero: { text: "The Base64 Encoder Decoder converts text to Base64 encoding or decodes Base64 strings back to readable text instantly. Switch between encode and decode mode to get instant results. Useful for developers working with data URIs, APIs and file encoding." },
  about: { text: `This tool converts text to Base64 format or decodes Base64 strings back into their original text form, running entirely in your browser.

It's useful for embedding small images as data URIs, encoding credentials for basic HTTP authentication, debugging API payloads, and working with email attachment encoding.

The tool handles Unicode text correctly, so special characters and emoji encode and decode without corruption.

Limitations: it works with text-based Base64; for encoding actual binary files like images, a dedicated file encoder is more appropriate.

Use this tool for quick Base64 encoding or decoding tasks during development.` },
  formula: { formula: "Base64 encodes binary data using 64 printable ASCII characters (A-Z, a-z, 0-9, +, /)", variables: [{ symbol: "Input", meaning: "Original text or Base64 string" }], explanation: "Encoding converts each group of 3 bytes into 4 Base64 characters; decoding reverses this process back to the original bytes.", interpretation: "For example, the text 'Hello' encodes to 'SGVsbG8=' in Base64." },
  steps: ["Select Encode or Decode mode.", "Enter your text or Base64 string.", "Click Calculate to run the tool.", "View the converted output.", "Copy the result using the copy button."],
  examples: [
    { inputs: "Encode: 'Hello World'", result: "SGVsbG8gV29ybGQ=", explanation: "Basic text to Base64 encoding." },
    { inputs: "Decode: 'SGVsbG8gV29ybGQ='", result: "Hello World", explanation: "Basic Base64 to text decoding." },
    { inputs: "Encode: 'user:pass'", result: "dXNlcjpwYXNz", explanation: "Common use case for basic auth headers." },
  ],
  practicalUses: ["Encoding credentials for HTTP Basic Authentication headers", "Embedding small images as data URIs in CSS or HTML", "Debugging JWT tokens or API payloads", "Encoding binary data for safe transmission in text-based formats", "Decoding Base64 content found in emails or config files", "Preparing data for storage in text-only fields"],
  expertTips: ["Base64 encoding increases data size by about 33% compared to the original.", "Base64 is not encryption — it's just an encoding scheme, easily reversible by anyone.", "URLs use a modified Base64 variant (URL-safe) that replaces + and / with - and _.", "Always validate Base64 input before decoding, since malformed strings will cause errors.", "Base64 is commonly used in JWT tokens, data URIs, and email attachments (MIME)."],
  commonMistakes: [{ mistake: "Assuming Base64 provides security or encryption", fix: "Base64 is just encoding, not encryption — never use it to protect sensitive data." }, { mistake: "Using standard Base64 in URLs without adjustment", fix: "Use URL-safe Base64 variants when the encoded string needs to go in a URL." }, { mistake: "Trying to decode invalid or truncated Base64", fix: "Ensure the Base64 string is complete and properly padded with '=' characters before decoding." }],
  faq: [
    { q: "What is Base64 encoding?", a: "Base64 is an encoding scheme that converts binary or text data into a string of 64 printable ASCII characters, commonly used for safely transmitting data in text-based formats." },
    { q: "Is Base64 encryption?", a: "No, Base64 is not encryption — it's simply an encoding format that anyone can decode without a key, so it should never be used to secure sensitive data." },
    { q: "Why does Base64 output end with '=' signs?", a: "The '=' characters are padding added when the input length isn't a multiple of 3 bytes, ensuring proper decoding alignment." },
    { q: "What is Base64 commonly used for?", a: "It's commonly used for embedding images in HTML/CSS, encoding email attachments, JWT tokens, and basic HTTP authentication headers." },
    { q: "Can Base64 encode any type of data?", a: "Yes, Base64 can encode any binary data, including images and files, though this tool is designed for text-based encoding and decoding." },
    { q: "Why does Base64 make data larger?", a: "Base64 encoding increases size by roughly 33% since it represents each 3 bytes of original data using 4 encoded characters." },
  ],
  relatedCalculators: ["JSON Formatter", "Hash Generator", "JWT Decoder", "URL Encoder"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: { h1: "Base64 Encoder Decoder", h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"] },
};