import { pickYouMayLike } from "../calculator-pool";

export const childTaxCreditCalculatorContent = {
  meta: {
    seoTitle: "Child Tax Credit Calculator 2026 - $2,200 Per Child CTC",
    metaDescription: "Free Child Tax Credit calculator for 2026. Find your CTC amount, income phase-out reduction, and refundable Additional Child Tax Credit instantly.",
    canonicalSlug: "/child-tax-credit-calculator",
    ogTitle: "Child Tax Credit Calculator 2026",
    ogDescription: "Calculate your 2026 Child Tax Credit and phase-out reduction instantly.",
    twitterTitle: "Free Child Tax Credit Calculator",
    twitterDescription: "See your 2026 CTC amount, up to $2,200 per child.",
  },

  hero: {
    text: "The Child Tax Credit Calculator finds your 2026 CTC amount — up to $2,200 per qualifying child plus $500 per other dependent — accounting for the income-based phase-out and the refundable Additional Child Tax Credit limit.",
  },

  about: {
    text: `The Child Tax Credit was made permanent at $2,200 per qualifying child under 17 by the One Big Beautiful Bill Act (OBBBA), signed in July 2025, avoiding the scheduled drop back to $1,000 that would have otherwise happened in 2026.

Dependents who don't qualify for the full CTC (such as children 17 or older, or other relatives) may still qualify for the nonrefundable Credit for Other Dependents, worth up to $500 each.

The credit phases out for higher earners: it's reduced by $50 for every $1,000 (or part of $1,000) that your modified AGI exceeds $200,000 (single, head of household, married filing separately) or $400,000 (married filing jointly).

Up to $1,700 per qualifying child is refundable through the Additional Child Tax Credit (ACTC), meaning families can receive this portion as a refund even if they owe no federal income tax, subject to an earned-income-based limit.`,
  },

  formula: {
    formula: "Base Credit = (Qualifying Children × $2,200) + (Other Dependents × $500); Phase-Out = $50 per $1,000 of MAGI over threshold",
    variables: [
      { symbol: "CTC (2026)", meaning: "$2,200 per qualifying child under age 17 with a valid SSN" },
      { symbol: "ODC", meaning: "Credit for Other Dependents, $500 nonrefundable, for dependents who don't qualify for full CTC" },
      { symbol: "ACTC", meaning: "Additional Child Tax Credit, refundable portion up to $1,700 per child" },
    ],
    explanation: "The phase-out reduces your total credit by $50 for every $1,000 your MAGI exceeds the threshold, rounding any partial $1,000 up to the next full increment. The credit reaches zero once the reduction equals your total base credit amount.",
    interpretation: "For example, a married couple with two children and $410,000 MAGI is $10,000 over the $400,000 threshold, triggering a $500 reduction (10 × $50), reducing their $4,400 base credit to $3,900.",
  },

  steps: [
    "Enter your modified adjusted gross income (MAGI).",
    "Select your filing status.",
    "Enter the number of qualifying children under 17.",
    "Enter the number of other dependents (17+, relatives, etc.) if any.",
    "Click Calculate to see your final credit and phase-out reduction.",
  ],

  examples: [
    { inputs: "MAGI: $150,000, MFJ, 2 Qualifying Children", result: "Credit: $4,400 (full amount)", explanation: "Below the $400,000 MFJ threshold, the full credit applies with no phase-out." },
    { inputs: "MAGI: $410,000, MFJ, 2 Qualifying Children", result: "Credit: $3,900 (phased out $500)", explanation: "Income $10,000 over the threshold triggers a $500 reduction." },
    { inputs: "MAGI: $220,000, Single, 1 Qualifying Child + 1 Other Dependent", result: "Credit: $1,700 (phased out $1,000)", explanation: "Being $20,000 over the $200,000 single threshold reduces the $2,700 base credit by $1,000." },
  ],

  practicalUses: [
    "Estimating total tax credits for family tax planning",
    "Checking how a raise or bonus might trigger the CTC phase-out",
    "Comparing tax benefit impact before and after a child turns 17",
    "Planning income timing (bonus deferral, retirement contributions) to stay under phase-out thresholds",
    "Understanding the refundable ACTC limit for lower-income working families",
    "Estimating total household tax credits alongside the Earned Income Tax Credit",
  ],

  expertTips: [
    "The $2,200 CTC amount was made permanent by the OBBBA in 2025 — the previously scheduled drop to $1,000 in 2026 will not happen.",
    "A child must have a valid Social Security number by the tax return due date to qualify for the CTC under current law.",
    "Maxing out a 401(k) or making HSA contributions can lower your MAGI enough to reduce or avoid the phase-out if you're near the threshold.",
    "The Credit for Other Dependents ($500) covers dependents who don't meet the CTC's age or relationship tests, like a 17-year-old or an elderly parent.",
    "Only the Additional Child Tax Credit (refundable portion, up to $1,700/child) can result in a refund — the main CTC can only reduce tax owed to zero.",
    "Divorced or separated parents should confirm who claims the qualifying child for CTC purposes, since only one parent can claim a given child per tax year.",
  ],

  commonMistakes: [
    { mistake: "Assuming the CTC dropped to $1,000 in 2026", fix: "The OBBBA made the $2,200 credit permanent — the pre-2018 $1,000 amount will not return." },
    { mistake: "Forgetting the phase-out rounds up to the next $1,000", fix: "Even $1 over a $1,000 increment triggers the full $50 reduction for that increment — the phase-out isn't perfectly linear." },
    { mistake: "Confusing the nonrefundable CTC with the refundable ACTC", fix: "Only up to $1,700 per child (the Additional Child Tax Credit) can be refunded — the rest only reduces tax owed." },
    { mistake: "Claiming a child without a valid SSN", fix: "Current law requires a Social Security number for both the child and the claiming parent for CTC eligibility." },
  ],

  faq: [
    { q: "How much is the Child Tax Credit for 2026?", a: "The 2026 Child Tax Credit is up to $2,200 per qualifying child under age 17, made permanent by the One Big Beautiful Bill Act." },
    { q: "What is the income limit for the Child Tax Credit?", a: "The credit begins phasing out at $200,000 MAGI for single, head of household, and married filing separately, or $400,000 for married filing jointly." },
    { q: "Is the Child Tax Credit refundable?", a: "Partially — up to $1,700 per child is refundable through the Additional Child Tax Credit; the remaining portion only reduces tax owed to zero." },
    { q: "Did the Child Tax Credit drop to $1,000 in 2026?", a: "No, the One Big Beautiful Bill Act made the $2,200 credit amount permanent, canceling the scheduled reversion to $1,000." },
    { q: "What is the Credit for Other Dependents?", a: "It's a $500 nonrefundable credit for dependents who don't qualify for the full CTC, such as children 17 or older or other qualifying relatives." },
    { q: "How does the Child Tax Credit phase-out work?", a: "The credit is reduced by $50 for every $1,000 (or part of $1,000) that your modified AGI exceeds the applicable threshold, until it reaches zero." },
    { q: "Do I need a Social Security number to claim the Child Tax Credit?", a: "Yes, current law requires both the qualifying child and the claiming taxpayer to have a valid Social Security number." },
    { q: "Can I claim the Child Tax Credit with no income tax owed?", a: "You can still receive up to $1,700 per child as a refund through the Additional Child Tax Credit, even with zero tax liability, subject to earned income rules." },
    { q: "What age cutoff applies to the Child Tax Credit?", a: "The child must be under age 17 at the end of the tax year to qualify for the full $2,200 Child Tax Credit." },
    { q: "How much does the Child Tax Credit reduce for high earners?", a: "For every $1,000 of MAGI above the threshold, the credit reduces by $50 per family, eventually phasing out completely at high income levels." },
    { q: "Can divorced parents both claim the Child Tax Credit for the same child?", a: "No, only one parent can claim a given qualifying child for the CTC in a tax year, typically the custodial parent unless a signed release applies." },
    { q: "Is the Child Tax Credit the same as a tax deduction?", a: "No, a tax credit reduces your tax bill dollar-for-dollar, while a deduction only reduces taxable income — credits are generally more valuable." },
    { q: "What is Schedule 8812?", a: "Schedule 8812 is the IRS form used to calculate and claim both the Child Tax Credit and the refundable Additional Child Tax Credit." },
    { q: "Will the Child Tax Credit increase further after 2026?", a: "Yes, starting in 2026 the credit is indexed for inflation going forward, meaning it may increase in small increments in future years." },
  ],

  relatedCalculators: ["EITC Calculator", "Effective Tax Rate Calculator", "Tax Refund Calculator", "W-4 Calculator"],

  youMayLike: pickYouMayLike("child-tax-credit-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Child Tax Credit Calculator",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};