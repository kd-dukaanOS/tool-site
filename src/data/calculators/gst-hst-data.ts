import { pickYouMayLike } from "../calculator-pool";

export const gstHstCalculatorContent = {
  meta: {
    seoTitle: "GST/HST Calculator Canada - Add or Remove Tax Free",
    metaDescription: "Free GST/HST calculator for all Canadian provinces. Add or remove GST/HST from any amount instantly. Updated for 2026 provincial tax rates.",
    canonicalSlug: "/gst-hst-calculator",
    ogTitle: "GST/HST Calculator - Canada Sales Tax",
    ogDescription: "Calculate GST/HST for any province, forward or reverse, in seconds.",
    twitterTitle: "Free GST/HST Calculator",
    twitterDescription: "Add or remove Canadian sales tax instantly by province.",
  },

  hero: {
    text: "The GST/HST Calculator adds or removes Canadian sales tax from any amount based on your province or territory, showing the pre-tax amount, the tax charged, and the total in one step.",
  },

  about: {
    text: `GST (Goods and Services Tax) is a federal 5% tax applied across Canada, while HST (Harmonized Sales Tax) combines the federal GST with a provincial portion into a single rate in five provinces.

This calculator applies the correct current rate for the selected province — 5% GST in Alberta, British Columbia, Manitoba, the territories, Quebec, and Saskatchewan; 13% HST in Ontario; 14% HST in Nova Scotia; and 15% HST in New Brunswick, Newfoundland and Labrador, and Prince Edward Island.

It works in both directions: "Add tax" calculates the tax and total from a pre-tax price, while "Remove tax" works backward from a tax-included total to find the original price and the tax portion.

Limitations: this tool does not calculate Quebec's separate QST, provincial PST in non-harmonized provinces, or exemptions and zero-rated items such as basic groceries and prescription drugs.`,
  },

  formula: {
    formula: "Tax = Pre-Tax Amount × (Rate ÷ 100); Total = Pre-Tax Amount + Tax",
    variables: [
      { symbol: "Pre-Tax Amount", meaning: "The price before GST/HST is applied" },
      { symbol: "Rate", meaning: "The GST or HST percentage for the selected province" },
    ],
    explanation: "To add tax, the rate is applied directly to the pre-tax amount. To remove tax from a total, the total is divided by 1 plus the rate to isolate the original pre-tax amount.",
    interpretation: "For example, a $100 sale in Ontario at 13% HST adds $13.00 in tax for a $113.00 total; reversing a $113.00 Ontario total returns the same $100.00 pre-tax amount.",
  },

  steps: [
    "Enter the dollar amount you want to calculate tax on.",
    "Select the province or territory of supply.",
    "Choose whether to add tax to the amount or remove tax from a total.",
    "Click Calculate to run the tool.",
    "Review the pre-tax amount, tax amount, total amount, and applied rate.",
  ],

  examples: [
    { inputs: "Amount: $100, Province: Ontario, Mode: Add tax", result: "Total: $113.00 (Tax: $13.00)", explanation: "Ontario applies a single 13% HST rate directly to the pre-tax amount." },
    { inputs: "Amount: $115, Province: Nova Scotia, Mode: Remove tax", result: "Pre-Tax: $100.88 (Tax: $14.12)", explanation: "Working backward from a 14% HST-included total isolates the original price." },
    { inputs: "Amount: $250, Province: Alberta, Mode: Add tax", result: "Total: $262.50 (Tax: $12.50)", explanation: "Alberta only charges the 5% federal GST, with no provincial portion added." },
  ],

  practicalUses: [
    "Quoting tax-included prices to customers in different provinces",
    "Reverse-calculating the pre-tax price from a receipt or invoice total",
    "Comparing after-tax costs of a purchase across provinces before buying",
    "Preparing invoices for cross-province sales with the correct rate",
    "Checking whether a receipt charged the correct GST/HST rate",
    "Budgeting the true out-of-pocket cost of a purchase before checkout",
  ],

  expertTips: [
    "The rate that applies is based on the customer's province of delivery, not the seller's location, for most goods and services.",
    "Businesses under $30,000 in annual revenue are not required to register for or charge GST/HST, so confirm registration status when in doubt.",
    "Quebec charges 5% GST plus a separate 9.975% QST rather than a single harmonized rate — don't use this tool for QST.",
    "Keep receipts showing the tax breakdown separately, since input tax credits require the GST/HST amount to be clearly stated.",
    "Some goods, like basic groceries and prescription drugs, are zero-rated and shouldn't have tax added at all.",
    "Provincial HST rates can change — always confirm the current rate before quoting large invoices.",
  ],

  commonMistakes: [
    { mistake: "Using the seller's province instead of the customer's", fix: "Charge tax based on the place of supply, which is generally where the customer receives the goods or services." },
    { mistake: "Applying HST in a GST-only province", fix: "Only Ontario, Nova Scotia, New Brunswick, Newfoundland and Labrador, and PEI use HST — the rest use 5% GST, sometimes with a separate PST." },
    { mistake: "Confusing 'remove tax' with simply subtracting the percentage", fix: "To remove tax from a total, divide by (1 + rate), don't just multiply the total by the rate and subtract it." },
    { mistake: "Treating Quebec's QST as part of GST/HST", fix: "Quebec's 9.975% QST is calculated and remitted separately from the 5% federal GST." },
    { mistake: "Charging tax on zero-rated or exempt items", fix: "Basic groceries, most medical services, and prescription drugs are zero-rated or exempt — no GST/HST applies." },
  ],

  faq: [
    { q: "What is the GST/HST rate in Canada for 2026?", a: "GST is 5% in Alberta, British Columbia, Manitoba, Northwest Territories, Nunavut, Quebec, Saskatchewan, and Yukon. HST is 13% in Ontario, 14% in Nova Scotia, and 15% in New Brunswick, Newfoundland and Labrador, and Prince Edward Island." },
    { q: "What is the difference between GST and HST?", a: "GST is the federal 5% Goods and Services Tax applied everywhere in Canada, while HST is a combined federal and provincial tax charged in provinces that have harmonized their sales tax with the GST, so no separate provincial sales tax is added." },
    { q: "How do I calculate GST/HST from a total price?", a: "Divide the tax-included price by 1 plus the tax rate (e.g. divide by 1.13 for 13% HST) to get the pre-tax price, then subtract that from the total to find the tax amount." },
    { q: "How do I calculate GST/HST on a price before tax?", a: "Multiply the pre-tax price by the applicable GST or HST rate for the province of supply, then add that amount to the original price to get the total." },
    { q: "Which provinces charge HST instead of GST?", a: "Ontario, Nova Scotia, New Brunswick, Newfoundland and Labrador, and Prince Edward Island charge HST; the rest of Canada charges 5% GST plus, in some provinces, a separate PST." },
    { q: "Do I charge GST/HST based on my business location or the customer's location?", a: "GST/HST is charged based on the place of supply, which is generally the customer's location for goods and services delivered within Canada, not the seller's location." },
    { q: "What items are exempt from GST/HST?", a: "Basic groceries, most prescription drugs, many medical devices, and most healthcare and educational services are zero-rated or exempt from GST/HST." },
    { q: "Do small businesses have to charge GST/HST?", a: "Only if the business is registered for GST/HST, which is mandatory once worldwide taxable revenue exceeds $30,000 over four consecutive calendar quarters; below that, registration is optional." },
    { q: "What is the GST/HST quick method?", a: "It's a simplified accounting option for eligible small businesses that lets them remit a fixed percentage of GST/HST-included sales instead of tracking input tax credits on every purchase." },
    { q: "How do I claim input tax credits (ITCs) for GST/HST?", a: "Registered businesses can claim ITCs to recover the GST/HST paid on business purchases and expenses by reporting them on their GST/HST return, provided proper invoices are kept." },
    { q: "What is reverse HST calculation?", a: "It means starting from a tax-included total and working backward to find the pre-tax amount and the tax portion, which is useful for receipts that only show the final price." },
    { q: "Is HST charged on used goods sold privately?", a: "Generally no — private individual sales of used goods, like a used car sold person-to-person, are not subject to GST/HST unless the seller is a registered business." },
    { q: "How often do I need to file a GST/HST return?", a: "Filing frequency (monthly, quarterly, or annually) is assigned by the CRA based on annual taxable revenue, though businesses can request a more frequent filing period." },
    { q: "Does Quebec use GST/HST or a separate system?", a: "Quebec charges the 5% federal GST plus its own 9.975% Quebec Sales Tax (QST), administered provincially rather than harmonized into a single HST rate." },
  ],

  relatedCalculators: ["Canada Capital Gains Tax Calculator", "Canada Retirement Calculator", "RRSP Calculator", "TFSA Calculator"],

  youMayLike: pickYouMayLike("gst-hst-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "GST/HST Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};