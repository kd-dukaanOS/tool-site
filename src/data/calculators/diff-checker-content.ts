export const diffCheckerContent = {
  meta: {
    seoTitle: "Diff Checker - Compare Two Texts Online for Free",
    metaDescription: "Compare two blocks of text line by line. Free online diff checker highlighting added, removed and unchanged lines with a similarity score.",
    canonicalSlug: "/diff-checker",
    ogTitle: "Diff Checker - Compare Text Differences Online",
    ogDescription: "Instantly compare two texts and see exactly what changed, line by line, with a similarity score.",
    twitterTitle: "Free Diff Checker - Compare Text Online",
    twitterDescription: "Paste two blocks of text and instantly see added, removed and unchanged lines.",
  },

  hero: {
    text: "The Diff Checker compares two blocks of text line by line and highlights exactly what was added, removed or left unchanged. Use it to review edits, compare document versions, check code changes or spot differences between two pieces of content instantly.",
  },

  about: {
    text: `The Diff Checker is a free online tool that compares two blocks of text and shows a line-by-line breakdown of the differences.

It is useful for reviewing document revisions, comparing code snippets, checking changes between two drafts, and verifying that copied content matches the original.

The tool highlights added lines in green, removed lines in red, and leaves unchanged lines as-is, along with an overall similarity percentage.

Limitations: comparison is line-based, not word-based, so a single character change in a long line marks the whole line as different.

Use this tool whenever you need a quick, visual comparison between two versions of text.`,
  },

  formula: {
    formula: "Similarity % = (Unchanged Lines / Total Lines) × 100",
    variables: [
      { symbol: "Added", meaning: "Lines present only in the changed text" },
      { symbol: "Removed", meaning: "Lines present only in the original text" },
      { symbol: "Unchanged", meaning: "Lines identical in both texts" },
    ],
    explanation: "The checker aligns both texts line by line, marking each line as added, removed or unchanged, then calculates the similarity percentage from the unchanged line count.",
    interpretation: "For example, comparing two 20-line paragraphs where 18 lines match gives a 90% similarity score.",
  },

  steps: [
    "Paste the original text into the left field.",
    "Paste the changed text into the right field.",
    "Click Compare to run the tool.",
    "Review lines marked as added, removed or unchanged.",
    "Check the similarity score for an overall comparison.",
    "Copy the diff summary using the copy button.",
  ],

  examples: [
    {
      inputs: "Original: 'Hello world', Changed: 'Hello there world'",
      result: "1 line removed, 1 line added, 0% similarity",
      explanation: "Single-line inputs are compared as whole lines, so any change marks the full line as different.",
    },
    {
      inputs: "Two identical 10-line paragraphs",
      result: "10 unchanged, 100% similarity",
      explanation: "Identical texts produce no added or removed lines.",
    },
    {
      inputs: "5-line list with 1 line reworded",
      result: "4 unchanged, 1 removed, 1 added, 80% similarity",
      explanation: "Only the reworded line is flagged; the rest match exactly.",
    },
    {
      inputs: "Two code blocks with one indentation change",
      result: "That line flagged as removed and added",
      explanation: "Since comparison is line-based, whitespace-only changes still register as a difference.",
    },
  ],

  practicalUses: [
    "Reviewing edits between two document drafts",
    "Comparing code snippets before and after changes",
    "Checking plagiarism or content duplication at a glance",
    "Verifying translation or localization updates",
    "Spotting differences in configuration files",
    "Comparing changelog entries between versions",
    "Reviewing legal or contract text revisions",
    "Checking email or message drafts for accidental edits",
    "Comparing two versions of resume or CV content",
    "Auditing copy-pasted content against a source",
    "Tracking changes in blog post revisions",
    "Verifying data migration output matches expected text",
  ],

  expertTips: [
    "Use consistent line breaks in both texts for a cleaner comparison.",
    "For code, compare one function or block at a time for clarity.",
    "A low similarity score with short texts is normal — check line count first.",
    "Remove trailing whitespace before pasting to avoid false differences.",
    "Use the copy button to save a diff summary for review notes.",
    "For large documents, compare in smaller sections for easier reading.",
    "Watch for invisible characters like tabs vs spaces causing unexpected diffs.",
    "Use this alongside a word counter to sanity-check line count mismatches.",
    "For merge conflict review, compare each conflicting block separately.",
    "Paste plain text, not rich text, to avoid formatting artifacts skewing the diff.",
  ],

  commonMistakes: [
    { mistake: "Pasting text with different line break styles", fix: "Normalize line breaks before comparing." },
    { mistake: "Expecting word-level highlighting", fix: "This tool compares whole lines, not individual words." },
    { mistake: "Comparing very large documents at once", fix: "Split into smaller sections for a clearer diff." },
    { mistake: "Ignoring the similarity score", fix: "Use it as a quick sanity check before reading line details." },
    { mistake: "Pasting rich text with hidden formatting", fix: "Paste as plain text to avoid formatting-related false differences." },
    { mistake: "Assuming tabs and spaces are treated the same", fix: "Whitespace differences count as changes — normalize indentation first." },
  ],

  faq: [
    { q: "How does the diff checker compare text?", a: "It compares both texts line by line, marking each line as added, removed or unchanged based on an exact match." },
    { q: "Does it detect word-level changes?", a: "No, comparison is line-based. A single character change marks the entire line as different." },
    { q: "What does the similarity score mean?", a: "It's the percentage of lines that are identical between the two texts." },
    { q: "Can I compare code with this tool?", a: "Yes, it works for any plain text including code, as long as indentation and formatting are consistent." },
    { q: "Does the tool store my text?", a: "No, the comparison runs entirely in your browser and nothing is uploaded or saved." },
    { q: "Why are both lines shown as different for small edits?", a: "Because the comparison is line-based, any change within a line causes both the old and new line to be shown." },
    { q: "Can I copy the diff result?", a: "Yes, use the copy button to copy a full summary including stats and the line-by-line diff." },
    { q: "Does the tool support comparing large files?", a: "It works best on moderate-sized text; very large documents are easier to review when split into smaller sections." },
    { q: "Can I use this to check plagiarism?", a: "It can highlight matching and differing lines between two texts, but it's not a dedicated plagiarism detection service." },
    { q: "Does whitespace affect the comparison?", a: "Yes, differences in spaces, tabs or trailing whitespace can cause lines to be flagged as changed even if the visible text looks similar." },
    { q: "Is this diff checker free to use?", a: "Yes, it's completely free with no sign-up required." },
  ],

  relatedCalculators: [
    "JSON Formatter",
    "Word Counter",
    "Regex Tester",
    "Markdown Previewer",
    "URL Encoder/Decoder",
    "Slug Generator",
    "Case Converter",
    "Text Reverser",
  ],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Diff Checker",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};
