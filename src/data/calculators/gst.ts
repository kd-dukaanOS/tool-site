export const gstCalculatorContent = {
  meta: {
    seoTitle: "GST Calculator - Calculate GST Inclusive & Exclusive Free",
    metaDescription: "Calculate GST amount, CGST, SGST and total price instantly. Free GST calculator for inclusive and exclusive modes.",
    canonicalSlug: "/gst-calculator",
    ogTitle: "GST Calculator - Calculate GST Amount Instantly",
    ogDescription: "Find GST amount, CGST, SGST and total price for any amount and tax slab.",
    twitterTitle: "Free GST Calculator",
    twitterDescription: "Calculate GST amount and total price instantly.",
  },
  hero: { text: "The GST Calculator finds the GST amount, CGST, SGST and total price for any base amount and tax rate. Switch between GST-inclusive and GST-exclusive modes to instantly see the breakdown. Useful for business owners, freelancers and shoppers in India." },
  about: { text: `The GST Calculator computes Goods and Services Tax on a given amount, splitting it into CGST and SGST, and shows the final total price.

It's useful for invoicing, checking whether a listed price already includes GST, comparing tax across GST slabs, and everyday business bookkeeping.

The tool supports both GST-exclusive (add tax to base price) and GST-inclusive (extract tax from total price) modes.

Limitations: this calculates standard CGST/SGST split for intra-state transactions; inter-state IGST calculation works the same total but isn't split into CGST/SGST.

Use this tool for quick invoice checks and GST slab comparisons.` },
  formula: {
    formula: "Exclusive: Total = Base × (1 + GST%/100)\nInclusive: Base = Total ÷ (1 + GST%/100)",
    variables: [
      { symbol: "Base", meaning: "Price before GST" },
      { symbol: "GST%", meaning: "Applicable GST rate (5%, 12%, 18%, 28%)" },
      { symbol: "Total", meaning: "Final price including GST" },
    ],
    explanation: "In exclusive mode, GST is added on top of the base price. In inclusive mode, GST is extracted from a total that already includes tax.",
    interpretation: "For example, ₹1000 at 18% GST (exclusive) becomes ₹1180 total, with ₹90 each as CGST and SGST.",
  },
  steps: [
    "Enter the amount.",
    "Enter or select the GST rate.",
    "Choose GST-exclusive or GST-inclusive mode.",
    "Click Calculate to run the tool.",
    "View base amount, GST amount, CGST, SGST and total.",
    "Compare GST across different slabs if needed.",
  ],
  examples: [
    { inputs: "₹1000, 18% GST, exclusive", result: "Total: ₹1180, GST: ₹180 (CGST ₹90 + SGST ₹90)", explanation: "Standard exclusive GST calculation." },
    { inputs: "₹1180, 18% GST, inclusive", result: "Base: ₹1000, GST: ₹180", explanation: "Extracting GST from a tax-inclusive price." },
    { inputs: "₹5000, 5% GST, exclusive", result: "Total: ₹5250, GST: ₹250", explanation: "Lower GST slab calculation for essential goods." },
  ],
  practicalUses: [
    "Creating GST-compliant invoices",
    "Checking whether a quoted price includes GST",
    "Comparing tax impact across different GST slabs",
    "Calculating input tax credit eligibility amounts",
    "Budgeting purchase costs including tax",
    "Verifying vendor bills for correct GST application",
    "Filing accurate GST returns",
  ],
  expertTips: [
    "Always confirm whether a quoted price is GST-inclusive or exclusive before finalizing a deal.",
    "CGST and SGST apply for intra-state transactions; inter-state transactions use IGST instead.",
    "Check current GST slab rates for your product/service category, as they can change.",
    "Keep GST calculations documented for accurate return filing.",
    "Use GST-inclusive mode when working backward from an MRP that already includes tax.",
    "Different product categories fall under different slabs — verify before invoicing.",
  ],
  commonMistakes: [
    { mistake: "Confusing GST-inclusive and exclusive modes", fix: "Check whether the price you have already includes GST before choosing the mode." },
    { mistake: "Applying the wrong GST slab", fix: "Verify the correct GST rate for your specific product or service category." },
    { mistake: "Forgetting CGST/SGST split for intra-state invoices", fix: "GST is typically split equally into CGST and SGST for transactions within the same state." },
    { mistake: "Mixing up IGST with CGST+SGST", fix: "Inter-state transactions use IGST as a single tax, not split into CGST and SGST." },
  ],
  faq: [
    { q: "How do I calculate GST on an amount?", a: "Multiply the base amount by the GST rate percentage to get the GST amount, then add it to the base for the total price." },
    { q: "What's the difference between GST inclusive and exclusive?", a: "Exclusive means GST is added on top of the base price, while inclusive means the given amount already contains GST and needs to be extracted." },
    { q: "What is CGST and SGST?", a: "CGST (Central GST) and SGST (State GST) are the two equal halves of GST charged on transactions within the same state." },
    { q: "What are the current GST slabs in India?", a: "Common GST slabs are 5%, 12%, 18% and 28%, though the applicable rate depends on the specific product or service category." },
    { q: "How do I extract GST from a total price?", a: "Divide the total price by (1 + GST rate/100) to find the base price, then subtract that from the total to get the GST amount." },
    { q: "What is IGST?", a: "IGST (Integrated GST) applies to inter-state transactions and combines what would otherwise be split as CGST and SGST." },
    { q: "Is GST the same across all states in India?", a: "Yes, GST rates are uniform nationwide for the same product or service category, unlike the earlier VAT system." },
  ],
  relatedCalculators: ["Discount Calculator", "Percentage Calculator", "Break Even Calculator", "Currency Converter"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: { h1: "GST Calculator", h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"] },
};