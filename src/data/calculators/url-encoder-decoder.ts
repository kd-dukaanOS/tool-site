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

It's useful for developers building query strings, debugging encoded URLs from logs or browser addresses, and safely transmitting special characters like spaces, ampersands and non-ASCII text in URLs.

Choose between component encoding (encodeURIComponent, for individual query parameters) and full URI encoding (encodeURI, for entire URLs), matching JavaScript's native encoding functions.

Limitations: decoding malformed percent-encoded strings will show an error rather than a partial result.

All processing happens locally in your browser.` },
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
  ],
  practicalUses: [
    "Building safe query string parameters for API requests",
    "Debugging encoded URLs from server logs or browser history",
    "Encoding special characters for form submissions",
    "Decoding tracking or redirect URLs to inspect their content",
    "Safely transmitting non-ASCII text (accents, emoji) in URLs",
    "Preparing search queries for use in URL parameters",
  ],
  expertTips: [
    "Use component encoding (encodeURIComponent) for individual query parameter values.",
    "Use full URI encoding (encodeURI) only when encoding an entire URL, to preserve structural characters like :// and &.",
    "Always decode untrusted URLs before displaying them to check for hidden or malicious content.",
    "Spaces should be encoded as %20 in URLs, not the older + notation used in form submissions.",
  ],
  commonMistakes: [
    { mistake: "Encoding an entire URL with encodeURIComponent", fix: "This also encodes :// and other structural characters — use encodeURI instead for full URLs." },
    { mistake: "Trying to decode already-decoded text", fix: "Decoding plain text with no % sequences returns it unchanged; check the input first." },
    { mistake: "Manually replacing spaces with +", fix: "Use proper percent-encoding (%20) for URLs; + is specific to form-encoded data." },
  ],
  faq: [
    { q: "What is percent-encoding?", a: "It's a method of representing unsafe or reserved characters in a URL using a % sign followed by their hexadecimal byte value, as defined in RFC 3986." },
    { q: "What's the difference between encodeURI and encodeURIComponent?", a: "encodeURIComponent encodes nearly all special characters, ideal for individual values, while encodeURI preserves URL structure characters like :, /, ? and & for encoding whole URLs." },
    { q: "Why do I get an error when decoding?", a: "The input likely contains malformed percent-encoding, such as an incomplete %XX sequence." },
    { q: "Is my data sent to a server?", a: "No, all encoding and decoding happens locally in your browser using native JavaScript functions." },
    { q: "Can I encode non-English text?", a: "Yes, Unicode characters are encoded into their UTF-8 percent-encoded byte sequences." },
  ],
  relatedCalculators: ["Slug Generator", "QR Code Generator", "JSON Formatter"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "URL Encoder/Decoder",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};