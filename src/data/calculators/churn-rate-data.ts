import { pickYouMayLike } from "../calculator-pool";

export const churnRateCalculatorContent = {
  meta: {
    seoTitle: "Churn Rate Calculator - Customer & Revenue Churn Free",
    metaDescription: "Free churn rate calculator. Find your customer churn rate, revenue churn rate, and net revenue churn rate for your SaaS or subscription business.",
    canonicalSlug: "/churn-rate-calculator",
    ogTitle: "Churn Rate Calculator - SaaS Retention Metrics",
    ogDescription: "Calculate customer and revenue churn rate instantly.",
    twitterTitle: "Free Churn Rate Calculator",
    twitterDescription: "Find your customer and revenue churn rate, free and instant.",
  },
  hero: {
    text: "The Churn Rate Calculator finds your customer churn rate, revenue churn rate, and net revenue churn rate for a given period, plus a projection of how many customers remain if churn stays constant.",
  },
  about: {
    text: `Churn rate measures the percentage of customers or revenue a business loses over a given period — one of the most closely watched health metrics for any subscription or SaaS business.

This calculator computes customer churn rate (customers lost divided by customers at the start of the period) and revenue churn rate (MRR lost divided by starting MRR), plus net revenue churn rate, which offsets churned revenue against expansion revenue from existing customers.

It also projects how many customers would remain after a chosen number of months if the current monthly churn rate held steady, using compounding retention math.

Limitations: this tool assumes a constant churn rate going forward — it doesn't model cohort-based churn curves, seasonality, or the fact that churn rates often change as a customer base matures.`,
  },
  formula: {
    formula: "Customer Churn Rate = (Customers Lost / Customers at Start) × 100; Net Revenue Churn = (MRR Churned − Expansion MRR) / Starting MRR × 100",
    variables: [
      { symbol: "Customer Churn Rate", meaning: "Percentage of customers lost during the period" },
      { symbol: "Revenue Churn Rate", meaning: "Percentage of MRR lost to cancellations and downgrades" },
      { symbol: "Net Revenue Churn Rate", meaning: "Revenue churn rate offset by expansion revenue from existing customers" },
    ],
    explanation: "Customer churn counts logos lost regardless of size, while revenue churn weights losses by dollar value — net revenue churn further nets out expansion, and can even go negative if upsells outpace losses.",
    interpretation: "For example, losing 10 of 200 customers is a 5% customer churn rate, but if those 10 customers were small accounts and larger customers expanded meanwhile, net revenue churn can be much lower or even negative.",
  },
  steps: [
    "Enter the number of customers at the start of the period.",
    "Enter the number of customers lost during the period.",
    "Enter your starting MRR for the period.",
    "Enter MRR lost to cancellations and downgrades.",
    "Enter expansion MRR from existing customers (upsells/upgrades).",
    "Enter the number of months to project customer retention forward.",
    "Click Calculate to see your churn rates and projection.",
  ],
  examples: [
    { inputs: "Customers: 200, Lost: 10, MRR: $100,000, Churned: $6,000, Expansion: $3,000, 12 months", result: "Customer Churn: 5%, Net Revenue Churn: 3%", explanation: "Expansion revenue partially offsets churned revenue, lowering net revenue churn below customer churn." },
    { inputs: "Customers: 500, Lost: 15, MRR: $250,000, Churned: $8,000, Expansion: $12,000, 12 months", result: "Customer Churn: 3%, Net Revenue Churn: 0% (negative churn)", explanation: "Expansion revenue exceeds churned revenue, resulting in net negative revenue churn — a strong retention signal." },
    { inputs: "Customers: 100, Lost: 8, MRR: $50,000, Churned: $5,000, Expansion: $500, 12 months", result: "Customer Churn: 8%, Projected Customers: ~37 after 12 months", explanation: "A high monthly churn rate compounds significantly, leaving fewer than half the original customers after a year." },
  ],
  practicalUses: [
    "Tracking whether retention is improving or worsening month over month",
    "Reporting churn metrics to investors or leadership",
    "Comparing customer churn versus revenue churn to spot which segment is at risk",
    "Projecting customer base decline if churn isn't addressed",
    "Identifying whether expansion revenue is offsetting churn (net negative churn)",
    "Benchmarking your churn rate against SaaS industry standards for your customer segment",
  ],
  expertTips: [
    "Net negative revenue churn — where expansion exceeds churned revenue — is considered a hallmark of a very healthy SaaS business.",
    "Customer churn and revenue churn can diverge significantly if your smallest or largest customers churn disproportionately.",
    "Enterprise SaaS companies often target annual churn under 10%, while SMB-focused products often see 3-7% monthly churn as normal.",
    "Always segment churn by customer cohort, plan tier, or acquisition channel — a blended churn rate can hide serious problems in one segment.",
    "Voluntary churn (customers who actively cancel) and involuntary churn (failed payments) should be tracked separately, since they require different fixes.",
    "A small change in monthly churn compounds dramatically over a year — reducing 5% monthly churn to 3% roughly doubles customer lifetime.",
  ],
  commonMistakes: [
    { mistake: "Only tracking customer churn, not revenue churn", fix: "Revenue churn weights losses by dollar value and often tells a different, more financially relevant story than logo churn alone." },
    { mistake: "Ignoring expansion revenue in the churn calculation", fix: "Net revenue churn nets out expansion from existing customers, which can meaningfully offset losses and even go negative." },
    { mistake: "Using annual churn and monthly churn interchangeably", fix: "Always specify the time period — a 5% monthly churn rate compounds to a much higher annual churn rate, roughly 46% over 12 months." },
    { mistake: "Blending voluntary and involuntary churn without separating them", fix: "Failed payment (involuntary) churn is often fixable with better billing retry logic, while voluntary churn requires product or pricing changes." },
    { mistake: "Comparing your churn rate to the wrong benchmark", fix: "Enterprise, SMB, and consumer subscription businesses have very different normal churn ranges — compare against your specific segment." },
  ],
  faq: [
    { q: "What is churn rate?", a: "Churn rate is the percentage of customers or revenue a business loses over a specific period, commonly measured monthly or annually for subscription businesses." },
    { q: "How do you calculate customer churn rate?", a: "Divide the number of customers lost during the period by the number of customers at the start of the period, then multiply by 100 to get a percentage." },
    { q: "What is a good churn rate for SaaS?", a: "Many SMB-focused SaaS companies see 3-7% monthly churn as typical, while enterprise SaaS companies often target under 1% monthly or under 10% annual churn." },
    { q: "What is the difference between customer churn and revenue churn?", a: "Customer churn counts the number of customers lost regardless of size, while revenue churn measures the dollar value of recurring revenue lost, which can weight differently if larger or smaller accounts churn." },
    { q: "What is net revenue churn?", a: "Net revenue churn is revenue churn offset by expansion revenue from existing customers, and can be negative if expansion (upsells) exceeds losses from cancellations and downgrades." },
    { q: "What is negative churn?", a: "Negative churn happens when expansion revenue from existing customers exceeds revenue lost to churn and contraction, meaning revenue grows even without any new customers." },
    { q: "How do you calculate annual churn rate from monthly churn?", a: "Annual churn isn't simply monthly churn times 12 — it's calculated as 1 minus the compounded monthly retention rate raised to the 12th power, since retention compounds each month." },
    { q: "What's the difference between voluntary and involuntary churn?", a: "Voluntary churn is when customers actively cancel their subscription, while involuntary churn results from failed payments, expired cards, or billing issues." },
    { q: "How does churn rate affect customer lifetime value (LTV)?", a: "Lower churn rates directly increase customer lifetime value, since customers stay longer and generate more total revenue before canceling." },
    { q: "Why is revenue churn often more important than customer churn?", a: "Revenue churn reflects actual dollar impact on the business, while customer churn treats all customers equally regardless of their contract size — revenue churn better tracks financial health." },
    { q: "How can a company reduce churn?", a: "Common strategies include improving onboarding, proactive customer success outreach, addressing product gaps, fixing failed payment retries, and identifying at-risk accounts early through usage data." },
    { q: "What is a churn rate benchmark for different industries?", a: "Benchmarks vary widely — consumer subscription apps may see 5-10%+ monthly churn, while enterprise B2B SaaS often targets under 1% monthly churn due to longer contracts and higher switching costs." },
    { q: "Does churn rate include downgrades?", a: "Revenue churn calculations typically include downgrades (contraction) alongside full cancellations, since both reduce recurring revenue even if the customer remains active." },
    { q: "How is churn rate used in SaaS valuation?", a: "Investors closely examine churn and net revenue retention when valuing SaaS companies, since low churn and negative net churn signal a more durable, compounding revenue base." },
  ],
  relatedCalculators: ["MRR Calculator", "ARR Calculator", "Customer Lifetime Value Calculator", "Customer Acquisition Cost Calculator"],
  youMayLike: pickYouMayLike("churn-rate-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Churn Rate Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};