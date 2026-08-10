export const jwtDecoderContent = {
  meta: {
    seoTitle: "JWT Decoder - Decode & Verify JSON Web Tokens Online Free",
    metaDescription: "Decode JWT tokens online instantly. View header, payload, expiry status and signing algorithm. Free, secure, client-side JWT decoder — no data leaves your browser.",
    canonicalSlug: "/jwt-decoder",
    ogTitle: "JWT Decoder - Decode JSON Web Tokens Instantly",
    ogDescription: "Paste any JWT to instantly view its header, payload, algorithm and expiry status. 100% client-side and secure.",
    twitterTitle: "Free JWT Decoder Online",
    twitterDescription: "Decode and inspect JWT tokens instantly — header, payload, expiry, algorithm. No signup, no data sent to a server.",
    keywords: ["jwt decoder", "decode jwt online", "json web token decoder", "jwt parser", "jwt expiry checker", "jwt debugger"],
  },
  hero: { text: "The JWT Decoder instantly decodes any JSON Web Token into its header and payload, checks expiry status, and identifies the signing algorithm — all processed locally in your browser for full privacy and security." },
  about: { text: `The JWT Decoder is a free online tool for developers to inspect and debug JSON Web Tokens used in authentication and authorization systems.

It decodes the Base64Url-encoded header and payload sections without verifying the signature, letting you quickly check claims like expiry (exp), issued-at (iat), subject and custom fields.

This tool is essential for debugging API authentication issues, inspecting OAuth and OpenID Connect tokens, and verifying token expiry during development.

Limitations: this tool decodes but does not cryptographically verify the signature — never trust an unverified token in production code.

All decoding happens client-side; your token is never transmitted or stored.` },
  formula: {
    formula: "JWT = base64url(header) + '.' + base64url(payload) + '.' + signature",
    variables: [
      { symbol: "Header", meaning: "Contains the token type and signing algorithm (alg)" },
      { symbol: "Payload", meaning: "Contains claims such as exp, iat, sub and custom data" },
      { symbol: "Signature", meaning: "Verifies the token was not tampered with (not decoded here)" },
    ],
    explanation: "A JWT consists of three Base64Url-encoded segments separated by dots. This tool decodes the first two segments back into readable JSON.",
    interpretation: "For example, a token with exp set to a past Unix timestamp will be flagged as Expired in the results.",
  },
  steps: [
    "Paste your JWT token into the input field.",
    "Click Decode to parse the token.",
    "Review the decoded header and payload.",
    "Check the expiry status and signing algorithm.",
    "Copy the full decode summary using the copy button.",
  ],
  examples: [
    { inputs: "Token with alg: HS256, exp in the past", result: "Status: Expired", explanation: "The exp claim is compared against the current time to determine expiry." },
    { inputs: "Token with no exp claim", result: "Status: Valid, Expires At: N/A", explanation: "Tokens without an exp claim never expire by this check." },
    { inputs: "Token with alg: RS256", result: "Header shows RS256 asymmetric signing algorithm", explanation: "Common for tokens issued by identity providers like Auth0 or Okta." },
    { inputs: "Malformed token with only 2 segments", result: "Error: Invalid JWT format", explanation: "A valid JWT must have exactly 3 dot-separated Base64Url segments." },
  ],
  practicalUses: [
    "Debugging authentication failures in APIs",
    "Inspecting OAuth 2.0 and OpenID Connect tokens",
    "Verifying token expiry during development",
    "Checking custom claims in a JWT payload",
    "Learning how JWT structure works",
    "Validating token format before sending to an API",
    "Reviewing tokens issued by third-party identity providers",
    "Confirming the correct signing algorithm is being used",
  ],
  expertTips: [
    "Never paste production tokens containing sensitive data into third-party tools you don't trust — this tool runs fully client-side.",
    "The alg field in the header shows how the token is signed (e.g. HS256, RS256).",
    "A missing exp claim means the token doesn't expire — flag this as a security concern.",
    "Use the iat claim to check when the token was originally issued.",
    "The sub claim typically identifies the user or entity the token represents.",
    "Check the aud (audience) claim to confirm the token is intended for your API.",
    "Rotate signing secrets periodically and invalidate old tokens for better security hygiene.",
  ],
  commonMistakes: [
    { mistake: "Assuming decoding verifies the signature", fix: "Decoding only reads the payload; signature verification requires the secret or public key." },
    { mistake: "Pasting a token with missing segments", fix: "A valid JWT always has exactly 3 dot-separated parts." },
    { mistake: "Confusing exp with iat", fix: "exp is expiry time, iat is issued-at time — both are Unix timestamps." },
    { mistake: "Storing sensitive data in the payload", fix: "JWT payloads are only Base64-encoded, not encrypted — anyone can decode and read them." },
    { mistake: "Trusting an unverified token in production code", fix: "Always verify the signature server-side using the correct secret or public key before trusting claims." },
  ],
  faq: [
    { q: "What is a JWT?", a: "A JSON Web Token is a compact, URL-safe token format used to securely transmit claims between two parties, commonly for authentication." },
    { q: "Does this tool verify the JWT signature?", a: "No, it only decodes the header and payload. Signature verification requires the secret key or public key and is not performed here." },
    { q: "Is my token sent to a server?", a: "No, decoding happens entirely in your browser using JavaScript — no token data is transmitted anywhere." },
    { q: "Why does my token show as expired?", a: "The exp claim in the payload is a Unix timestamp compared against the current time; if it's in the past, the token is expired." },
    { q: "What does the alg field mean?", a: "It indicates the algorithm used to sign the token, such as HS256 (HMAC) or RS256 (RSA)." },
    { q: "Can I decode any JWT with this tool?", a: "Yes, any standards-compliant JWT with a valid 3-part structure can be decoded." },
    { q: "What if my token has no expiry?", a: "If there's no exp claim, the token is treated as non-expiring and Expires At shows N/A." },
    { q: "Is JWT payload data encrypted?", a: "No, standard JWT payloads are only Base64Url-encoded, not encrypted — never store sensitive secrets directly in the payload." },
    { q: "What's the difference between JWT and session cookies?", a: "JWTs are self-contained and stateless, carrying claims within the token itself, while session cookies typically reference server-side stored session data." },
    { q: "What does the sub claim represent?", a: "The sub (subject) claim typically identifies the user or entity that the token is issued for." },
  ],
  relatedCalculators: ["Hash Generator", "UUID Generator", "Password Generator", "Base64 Encoder", "JSON Formatter", "URL Encoder/Decoder"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "JWT Decoder",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};
