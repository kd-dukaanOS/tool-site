export const loremIpsumContent = {
  meta: {
    seoTitle: "Lorem Ipsum Generator - Free Placeholder Text Generator",
    metaDescription: "Generate Lorem Ipsum placeholder text online free. Create paragraphs, sentences or words instantly for designs, mockups and web layouts.",
    canonicalSlug: "/lorem-ipsum-generator",
    ogTitle: "Lorem Ipsum Generator - Placeholder Text Online",
    ogDescription: "Instantly generate Lorem Ipsum placeholder text in paragraphs, sentences or words for your next design or mockup.",
    twitterTitle: "Free Lorem Ipsum Generator",
    twitterDescription: "Generate classic Lorem Ipsum placeholder text in seconds — paragraphs, sentences or words.",
    keywords: ["lorem ipsum generator", "placeholder text generator", "dummy text generator", "filler text", "lorem ipsum online"],
  },
  hero: { text: "The Lorem Ipsum Generator instantly creates classic placeholder text in paragraphs, sentences or words — perfect for filling designs, wireframes and content layouts before real copy is ready." },
  about: { text: `The Lorem Ipsum Generator is a free online tool that produces standard Lorem Ipsum dummy text, the industry-standard placeholder used since the 1500s in publishing and design.

It's useful for web designers mocking up layouts, developers testing typography and spacing, and content teams building templates before final copy is written.

Choose to generate by paragraphs, sentences or word count, and optionally start with the classic "Lorem ipsum dolor sit amet..." opening line.

Limitations: this is randomized pseudo-Latin text with no real meaning — it should never be used as final content.

Use this tool whenever you need quick, realistic-looking filler text for a design or prototype.` },
  steps: [
    "Choose to generate paragraphs, sentences or words.",
    "Enter the count you need.",
    "Toggle whether to start with the classic Lorem ipsum line.",
    "Click Generate to create the text.",
    "Copy the output using the copy button.",
  ],
  examples: [
    { inputs: "3 paragraphs, start with Lorem ipsum", result: "3 paragraphs of placeholder text beginning with the classic opening line", explanation: "Standard use case for filling a content block in a mockup." },
    { inputs: "50 words", result: "A single block of 50 randomized Latin-style words", explanation: "Useful for testing short text fields like card descriptions." },
    { inputs: "10 sentences", result: "10 randomized Lorem Ipsum sentences", explanation: "Useful for testing a medium-length text block like a product description." },
    { inputs: "1 paragraph, no classic opening", result: "A fully randomized paragraph without the standard opening line", explanation: "Gives more natural-looking variety for repeated mockup blocks." },
  ],
  practicalUses: [
    "Filling design mockups and wireframes with realistic text",
    "Testing typography, line spacing and font rendering",
    "Populating CMS templates before final copy is ready",
    "Testing responsive layouts with variable text length",
    "Creating placeholder content for client presentations",
    "Stress-testing text truncation and overflow handling",
    "Demonstrating layout structure to stakeholders before content is finalized",
    "Testing multi-language layout compatibility alongside real content samples",
  ],
  expertTips: [
    "Use word count for short UI elements like buttons or labels.",
    "Use paragraph count for full page layout testing.",
    "Disable the classic opening line for more randomized, natural-looking blocks.",
    "Combine with a word counter to match expected final content length.",
    "Generate varying paragraph lengths to simulate real-world content unevenness.",
    "Always swap placeholder text for real content before final review or launch.",
  ],
  commonMistakes: [
    { mistake: "Shipping Lorem Ipsum to production", fix: "Always replace placeholder text with real content before launch." },
    { mistake: "Using too little text to test layout", fix: "Generate enough paragraphs to properly test wrapping and overflow." },
    { mistake: "Assuming Lorem Ipsum has real meaning", fix: "It's intentionally meaningless pseudo-Latin text meant only to mimic natural language distribution." },
  ],
  faq: [
    { q: "What is Lorem Ipsum?", a: "Lorem Ipsum is scrambled, meaningless Latin-derived text traditionally used as placeholder content in publishing, design and web development since the 1500s." },
    { q: "Why use Lorem Ipsum instead of real text?", a: "It has a natural-looking distribution of letters and word lengths, so it doesn't distract from evaluating layout and typography." },
    { q: "Can I generate a specific number of words?", a: "Yes, select 'Words' as the type and enter your desired count." },
    { q: "Is the generated text random each time?", a: "Yes, each generation produces a new randomized combination of Lorem Ipsum words and sentences." },
    { q: "Can I copy the output directly?", a: "Yes, use the copy button to copy the generated text to your clipboard." },
    { q: "Where does Lorem Ipsum text originally come from?", a: "It's derived from a scrambled passage of Cicero's classical Latin text 'De Finibus Bonorum et Malorum', dating back to 45 BC." },
    { q: "Should I use Lorem Ipsum for SEO testing?", a: "No, since it has no real meaning, it shouldn't be used for SEO or content testing — only for visual layout and design purposes." },
  ],
  relatedCalculators: ["Word Counter", "Slug Generator", "Markdown Previewer", "Case Converter", "Diff Checker", "Text Reverser"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Lorem Ipsum Generator",
    h2: ["About", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};
