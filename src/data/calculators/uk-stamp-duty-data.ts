import { pickYouMayLike } from "../calculator-pool";

export const ukStampDutyCalculatorContent = {
  meta: {
    seoTitle: "UK Stamp Duty Calculator (SDLT) - 2026 Rates Free",
    metaDescription: "Free UK Stamp Duty Land Tax calculator. Calculate SDLT for standard, first-time buyer, and additional property purchases using current 2026 rates.",
    canonicalSlug: "/uk-stamp-duty-calculator",
    ogTitle: "UK Stamp Duty Calculator (SDLT)",
    ogDescription: "Calculate your Stamp Duty Land Tax instantly using current rates.",
    twitterTitle: "Free UK Stamp Duty Calculator",
    twitterDescription: "Calculate SDLT on your property purchase in seconds.",
  },

  hero: {
    text: "The UK Stamp Duty Calculator works out the Stamp Duty Land Tax (SDLT) owed on a residential property purchase in England or Northern Ireland, using the current banded rates for standard buyers, first-time buyers, and additional property purchases.",
  },

  about: {
    text: `Stamp Duty Land Tax (SDLT) is a tax paid on the purchase of property or land in England and Northern Ireland, calculated on increasing portions of the purchase price rather than a single flat rate.

This calculator applies the current standard bands: nil up to £125,000, 2% on the portion from £125,001 to £250,000, 5% up to £925,000, 10% up to £1.5 million, and 12% above that. First-time buyers get a more generous nil-rate band up to £300,000, with 5% charged up to £500,000 — above that, standard rates apply to the full price.

Buyers purchasing an additional residential property, such as a second home or buy-to-let, pay a 5% surcharge on top of the standard rates, applied from 31 October 2024.

Limitations: this tool covers England and Northern Ireland only — Scotland uses Land and Buildings Transaction Tax (LBTT) and Wales uses Land Transaction Tax (LTT), both with different rates and bands. It also doesn't include the 2% non-UK resident surcharge or the 17% rate for corporate bodies.`,
  },

  formula: {
    formula: "SDLT = Σ (Portion of price in each band × Band Rate), plus 5% surcharge on additional dwellings",
    variables: [
      { symbol: "Band Rate", meaning: "The percentage rate applied to each portion of the purchase price" },
      { symbol: "Additional Dwelling Surcharge", meaning: "A flat 5% added on top of every band's rate for second homes or buy-to-let purchases" },
    ],
    explanation: "SDLT is charged progressively — only the portion of the price within each band is taxed at that band's rate, similar to how income tax brackets work.",
    interpretation: "For example, a £350,000 standard purchase pays nothing on the first £125,000, 2% on the next £125,000, and 5% on the remaining £100,000, for a total of £7,500.",
  },

  steps: [
    "Enter the property purchase price.",
    "Select your buyer type: standard mover, first-time buyer, or additional property.",
    "Click Calculate to run the tool.",
    "Review your total stamp duty owed, effective rate, and full purchase cost.",
    "Check the band-by-band breakdown to see how the tax was calculated.",
  ],

  examples: [
    { inputs: "Price: £350,000, Buyer Type: Standard", result: "Stamp Duty: £7,500 (2.14% effective rate)", explanation: "A typical home mover purchase taxed progressively across the nil, 2%, and 5% bands." },
    { inputs: "Price: £320,000, Buyer Type: First-Time Buyer", result: "Stamp Duty: £1,000 (0.31% effective rate)", explanation: "First-time buyer relief means only the portion above £300,000 is taxed, at 5%." },
    { inputs: "Price: £500,000, Buyer Type: Additional Property", result: "Stamp Duty: £42,500 (8.50% effective rate)", explanation: "The 5% surcharge is added on top of every standard band for second homes and buy-to-lets." },
  ],

  practicalUses: [
    "Budgeting the total upfront cost of a property purchase, including tax",
    "Comparing the tax difference between buying as a first-time buyer versus a home mover",
    "Estimating the extra cost of purchasing a second home or buy-to-let property",
    "Checking how close a purchase price is to crossing into a higher SDLT band",
    "Planning finances ahead of exchanging contracts on a property",
    "Understanding how much of an offer's cost is tax versus the property price itself",
  ],

  expertTips: [
    "First-time buyer relief only applies if the purchase price is £500,000 or less — above that, standard rates apply to the entire amount, not just the excess.",
    "The 5% additional dwellings surcharge can sometimes be reclaimed if you sell your previous main home within 3 years of buying the new one.",
    "SDLT thresholds are different in Scotland (LBTT) and Wales (LTT) — always confirm which tax applies based on the property's location.",
    "SDLT must generally be paid within 14 days of completion, and your solicitor or conveyancer usually handles filing and payment.",
    "Buying just under a band threshold (e.g. £249,000 instead of £251,000) can meaningfully reduce your effective tax rate.",
    "Non-UK residents pay an additional 2% surcharge on top of all other applicable rates — not included in this calculator.",
  ],

  commonMistakes: [
    { mistake: "Assuming the whole price is taxed at the top band's rate", fix: "SDLT is progressive — only the portion of the price within each band is taxed at that band's rate, not the entire purchase price." },
    { mistake: "Claiming first-time buyer relief above £500,000", fix: "First-time buyer relief only applies for purchases of £500,000 or less; above that, standard rates apply to the full price." },
    { mistake: "Forgetting the additional dwellings surcharge on a second home", fix: "Buying a second home or investment property adds a 5% surcharge on top of standard rates across every band." },
    { mistake: "Using England rates for a Scottish or Welsh property", fix: "Scotland and Wales have their own separate land transaction taxes (LBTT and LTT) with different bands and rates." },
    { mistake: "Missing the SDLT filing and payment deadline", fix: "SDLT returns and payment are generally due within 14 days of completion — late filing can trigger penalties and interest." },
  ],

  faq: [
    { q: "What are the current UK Stamp Duty rates for 2026?", a: "Standard rates are nil up to £125,000, 2% from £125,001 to £250,000, 5% up to £925,000, 10% up to £1.5 million, and 12% above that." },
    { q: "How much stamp duty do first-time buyers pay in the UK?", a: "First-time buyers pay nothing up to £300,000 and 5% on the portion from £300,001 to £500,000; above £500,000, standard rates apply to the full price instead." },
    { q: "What is the additional dwellings stamp duty surcharge?", a: "Buyers purchasing a second home, buy-to-let, or any additional residential property pay a 5% surcharge on top of the standard SDLT rates, effective from 31 October 2024." },
    { q: "Do I pay stamp duty on a property under £125,000?", a: "No, purchases up to £125,000 fall within the nil-rate band and owe no stamp duty under the standard residential rates." },
    { q: "Is stamp duty different in Scotland and Wales?", a: "Yes, Scotland uses Land and Buildings Transaction Tax (LBTT) and Wales uses Land Transaction Tax (LTT), both with different bands and rates from England's SDLT." },
    { q: "How is stamp duty calculated?", a: "SDLT is calculated progressively, applying each band's rate only to the portion of the price that falls within that band, similar to income tax brackets." },
    { q: "Can I get a stamp duty refund?", a: "Yes, if you paid the additional dwellings surcharge on a new main residence and sell your previous main home within 3 years, you can usually claim a refund." },
    { q: "When is stamp duty due after buying a house?", a: "SDLT returns and payment are generally due within 14 days of the completion date, usually handled by your solicitor or conveyancer." },
    { q: "Do non-UK residents pay extra stamp duty?", a: "Yes, non-UK residents pay an additional 2% surcharge on top of all other applicable SDLT rates when buying residential property in England or Northern Ireland." },
    { q: "What counts as a first-time buyer for stamp duty purposes?", a: "You must never have owned a residential property anywhere in the world, and the property must be your only or main residence, to qualify for first-time buyer relief." },
    { q: "Does buying a buy-to-let property cost more in stamp duty?", a: "Yes, buy-to-let purchases are treated as additional dwellings and incur the 5% surcharge on top of standard rates across every band." },
    { q: "Is stamp duty payable on new-build homes?", a: "Yes, SDLT applies to new-build purchases the same way it applies to existing homes, based on the purchase price and buyer type." },
    { q: "What happens if I don't pay stamp duty on time?", a: "Late payment or filing can trigger automatic penalties starting from £100, plus daily interest charges on the unpaid tax." },
    { q: "Do companies pay a different stamp duty rate?", a: "Yes, companies and other non-natural persons buying residential property over £500,000 can face a flat 17% rate, separate from the individual bands." },
  ],

  relatedCalculators: ["UK Pension Calculator", "UK Capital Gains Tax Calculator", "UK Dividend Tax Calculator", "Mortgage Calculator"],

  youMayLike: pickYouMayLike("uk-stamp-duty-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "UK Stamp Duty Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};