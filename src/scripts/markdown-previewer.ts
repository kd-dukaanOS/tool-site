export const markdownPreviewerContent = {
  meta: {
    seoTitle: "Markdown Previewer - Live Markdown to HTML Editor Online",
    metaDescription: "Preview Markdown as rendered HTML in real time. Free online Markdown editor with live preview, word count and heading/link/image stats.",
    canonicalSlug: "/markdown-previewer",
    ogTitle: "Markdown Previewer - Live Markdown Editor",
    ogDescription: "Write Markdown and see the rendered HTML preview instantly, with word count and content stats.",
    twitterTitle: "Free Markdown Previewer Online",
    twitterDescription: "Live Markdown to HTML preview with word, heading, link and image counts.",
    keywords: ["markdown previewer", "markdown editor online", "markdown to html", "live markdown preview", "md viewer"],
  },
  hero: { text: "The Markdown Previewer renders your Markdown into live HTML as you type, with instant word count, heading, link and image stats — perfect for writing README files, blog drafts and documentation." },
  about: { text: `The Markdown Previewer is a free online tool that converts Markdown syntax into rendered HTML in real time.

It supports headings, bold and italic text, links, images, inline and block code, blockquotes and unordered lists — the core Markdown syntax used across GitHub, documentation sites and static site generators.

It's useful for writing README files, previewing blog posts before publishing, drafting documentation, and learning Markdown syntax with instant visual feedback.

Limitations: this is a lightweight renderer covering common Markdown syntax; it does not support tables, footnotes or extended GFM syntax.

All rendering happens locally in your browser — nothing is uploaded to a server.` },
  steps: [
    "Type or paste Markdown into the editor.",
    "Click Render or just keep typing for live preview.",
    "Review the rendered HTML output on the right.",
    "Check word, heading, link and image counts.",
    "Copy the rendered HTML using the copy button.",
  ],
  examples: [
    { inputs: "# Hello\\n\\nThis is **bold** and *italic* text.", result: "Renders an H1 heading followed by a paragraph with bold and italic text", explanation: "Basic heading and inline formatting syntax." },
    { inputs: "[Visit site](https://example.com)", result: "Renders a clickable hyperlink", explanation: "Standard Markdown link syntax." },
    { inputs: "- Item one\\n- Item two\\n- Item three", result: "Renders an unordered bullet list", explanation: "Common syntax for README feature lists." },
    { inputs: "```\\nconst x = 1;\\n```", result: "Renders a formatted code block", explanation: "Triple backticks create a block-level code section." },
  ],
  practicalUses: [
    "Previewing README.md files before pushing to GitHub",
    "Drafting blog posts in Markdown before publishing",
    "Writing technical documentation with live feedback",
    "Learning Markdown syntax for the first time",
    "Converting simple Markdown notes to HTML for emails or web pages",
    "Reviewing formatted content before pasting into a CMS",
    "Checking heading structure before publishing long-form content",
    "Quickly previewing formatted release notes or changelogs",
  ],
  expertTips: [
    "Use double line breaks to start a new paragraph in Markdown.",
    "Wrap code blocks in triple backticks for multi-line code formatting.",
    "Use the copy button to grab the rendered HTML for use elsewhere.",
    "Check the link and image counts to catch missing references before publishing.",
    "Use heading levels consistently (H1 once, then H2/H3) for clean document structure.",
    "Preview before committing README changes to catch broken formatting early.",
  ],
  commonMistakes: [
    { mistake: "Forgetting a blank line between paragraphs", fix: "Markdown requires a blank line to separate paragraphs." },
    { mistake: "Using single asterisks for bold", fix: "Use double asterisks (**bold**) for bold; single (*italic*) is for italics." },
    { mistake: "Expecting table support", fix: "This previewer supports core Markdown only, not GFM tables." },
    { mistake: "Nesting lists without proper indentation", fix: "Indent nested list items consistently with 2 or 4 spaces for correct rendering." },
  ],
  faq: [
    { q: "What Markdown syntax is supported?", a: "Headings, bold, italic, links, images, inline and block code, blockquotes and unordered lists." },
    { q: "Does it support Markdown tables?", a: "No, this is a lightweight renderer focused on core Markdown syntax; tables and extended GFM features aren't supported." },
    { q: "Is my Markdown content saved anywhere?", a: "No, rendering happens entirely in your browser and nothing is sent to a server." },
    { q: "Can I copy the rendered HTML?", a: "Yes, use the copy button to copy the generated HTML to your clipboard." },
    { q: "Does the preview update automatically?", a: "Yes, once you've rendered once, the preview updates live as you type." },
    { q: "Can I preview GitHub README files here?", a: "Yes, for core Markdown syntax it renders similarly to GitHub, though extended GFM elements like tables aren't supported." },
    { q: "Does this tool support ordered lists?", a: "Support focuses on core Markdown elements; check the current editor for numbered list support alongside unordered lists." },
  ],
  relatedCalculators: ["Word Counter", "Lorem Ipsum Generator", "Diff Checker", "JSON Formatter", "Slug Generator", "Case Converter"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Markdown Previewer",
    h2: ["About", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};
