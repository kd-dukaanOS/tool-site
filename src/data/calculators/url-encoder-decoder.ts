export const urlEncoderDecoderContent = {
  meta: {
    seoTitle: "URL Encoder/Decoder - Encode & Decode URLs Online Free",
    metaDescription: "Encode or decode URLs and text online instantly. Free URL encoder/decoder for query strings, special characters and percent-encoding.",
    canonicalSlug: "/url-encoder-decoder",
    ogTitle: "URL Encoder/Decoder - Free Online Tool",
    ogDescription: "Instantly encode or decode URLs and text with percent-encoding, safe for query strings and web transmission.",
    twitterTitle: "Free URL Encoder/Decoder Online",
    twitterDescription: "Encode or decode URLs and special characters instantly — free, fast, no signup.",
    keywords: ["url encoder", "url decoder", "percent encoding", "encode url online", "decode url online", "uri component encoder"],
  },
  hero: { text: "The URL Encoder/Decoder instantly converts text and URLs to and from percent-encoded format, making special characters safe for use in query strings, form data and web addresses." },
  about: { text: `The URL Encoder/Decoder is a free online tool that converts text into percent-encoded (URL-safe) format, or decodes percent-encoded strings back into readable text.

It is useful for developers building query strings, debugging encoded URLs from logs or browser addresses, and safely transmitting special characters like spaces, ampersands and non-ASCII text in URLs.

Choose between component encoding (encodeURIComponent, for individual query parameters) and full URI encoding (encodeURI, for entire URLs), matching JavaScript's native encoding functions.

Limitations: decoding malformed percent-encoded strings will show an error rather than a partial result.

All processing happens locally in your browser — no text is ever sent to a server.` },
  formula: {
    formula: "Encoded = %XX (hex byte) for each unsafe character",
    variables: [
      { symbol: "encodeURIComponent", meaning: "Encodes all characters except A-Z a-z 0-9 - _ . ! ~ * ' ( )" },
      { symbol: "encodeURI", meaning: "Preserves URL structure characters like :/?&= while encoding others" },
    ],
    explanation: "Each unsafe character is replaced with a percent sign followed by its two-digit hexadecimal byte value, following the standard URI encoding specification (RFC 3986).",
    interpretation: "For example, a space character becomes %20, and an ampersand becomes %26 when encoding as a URI component.",
  },
  steps: [
    "Enter the text or URL you want to encode or decode.",
    "Choose component encoding for query parameters, or full URI for complete URLs.",
    "Click Encode or Decode.",
    "Review the output and length comparison.",
    "Copy the result using the copy button.",
  ],
  examples: [
    { inputs: "hello world & more", result: "hello%20world%20%26%20more", explanation: "Spaces and ampersands are percent-encoded for safe use in a URL." },
    { inputs: "%40example.com", result: "@example.com", explanation: "Decoding reverses percent-encoded characters back to their original form." },
    { inputs: "https://example.com/search?q=café", result: "https://example.com/search?q=caf%C3%A9 (encodeURI)", explanation: "Full URI encoding preserves the URL structure while encoding the accented character." },
    { inputs: "price=100%20USD", result: "price=100 USD", explanation: "Decoding a query string parameter back into its readable form." },
  ],
  practicalUses: [
    "Building safe query string parameters for API requests",
    "Debugging encoded URLs from server logs or browser history",
    "Encoding special characters for form submissions",
    "Decoding tracking or redirect URLs to inspect their content",
    "Safely transmitting non-ASCII text (accents, emoji) in URLs",
    "Preparing search queries for use in URL parameters",
    "Encoding file names or paths containing special characters for URLs",
    "Debugging malformed URLs received from third-party integrations",
    "Decoding webhook or callback URLs during API development",
    "Encoding user-generated content safely before embedding in a link",
  ],
  expertTips: [
    "Use component encoding (encodeURIComponent) for individual query parameter values.",
    "Use full URI encoding (encodeURI) only when encoding an entire URL, to preserve structural characters like :// and &.",
    "Always decode untrusted URLs before displaying them to check for hidden or malicious content.",
    "Spaces should be encoded as %20 in URLs, not the older + notation used in form submissions.",
    "Double-encoding (encoding an already-encoded string) is a common bug — check if your input is already encoded first.",
    "When building query strings programmatically, encode each parameter value individually before joining them.",
    "Non-ASCII characters are encoded as their UTF-8 byte sequence, which can result in multiple %XX groups per character.",
    "Use this tool to quickly verify what a suspicious or shortened URL actually decodes to before clicking it.",
    "Keep a consistent encoding approach across your application to avoid inconsistent double-encoding bugs.",
    "The + character in a query string is form-encoding notation for space, not standard percent-encoding — decode accordingly if your source uses it.",
  ],
  commonMistakes: [
    { mistake: "Encoding an entire URL with encodeURIComponent", fix: "This also encodes :// and other structural characters — use encodeURI instead for full URLs." },
    { mistake: "Trying to decode already-decoded text", fix: "Decoding plain text with no % sequences returns it unchanged; check the input first." },
    { mistake: "Manually replacing spaces with +", fix: "Use proper percent-encoding (%20) for URLs; + is specific to form-encoded data." },
    { mistake: "Double-encoding a string that's already encoded", fix: "Check whether the string already contains %XX sequences before encoding it again." },
    { mistake: "Assuming all special characters need manual escaping", fix: "Let the encoder handle character escaping automatically rather than manually inserting % sequences." },
    { mistake: "Not validating decoded output before using it in code", fix: "Treat decoded URL content as untrusted input and validate it before using it in further processing." },
  ],
  faq: [
    { q: "What is percent-encoding?", a: "It's a method of representing unsafe or reserved characters in a URL using a % sign followed by their hexadecimal byte value, as defined in RFC 3986." },
    { q: "What's the difference between encodeURI and encodeURIComponent?", a: "encodeURIComponent encodes nearly all special characters, ideal for individual values, while encodeURI preserves URL structure characters like :, /, ? and & for encoding whole URLs." },
    { q: "Why do I get an error when decoding?", a: "The input likely contains malformed percent-encoding, such as an incomplete %XX sequence." },
    { q: "Is my data sent to a server?", a: "No, all encoding and decoding happens locally in your browser using native JavaScript functions." },
    { q: "Can I encode non-English text?", a: "Yes, Unicode characters are encoded into their UTF-8 percent-encoded byte sequences." },
    { q: "What does double-encoding mean and why is it a problem?", a: "Double-encoding happens when an already percent-encoded string is encoded again, turning % into %25 and corrupting the intended value — always check if input is already encoded first." },
    { q: "Why does + sometimes appear instead of %20 for spaces?", a: "The + character is form-encoding (application/x-www-form-urlencoded) notation for a space, distinct from standard URL percent-encoding which uses %20." },
    { q: "Can this tool decode a full tracking or redirect URL?", a: "Yes, paste the encoded URL and decode it to see the readable destination or parameters it contains." },
    { q: "Are reserved characters like & and = always encoded?", a: "With encodeURIComponent, yes; with encodeURI, they're preserved since they're part of standard URL structure." },
    { q: "Is percent-encoding the same as Base64 encoding?", a: "No, percent-encoding escapes specific unsafe characters for URL safety, while Base64 encodes entire binary data into a text-safe format — they serve different purposes." },
  ],
  relatedCalculators: ["Slug Generator", "QR Code Generator", "JSON Formatter"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "URL Encoder/Decoder",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};