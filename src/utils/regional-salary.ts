import { caFederalIncomeTax, caCPP, caEI, CPP2_CEILING, CPP2_RATE } from "../data/regions/ca";
import { ontarioIncomeTax } from "../data/regions/ca/provinces/ontario-tax";
import { albertaIncomeTax } from "../data/regions/ca/provinces/alberta-tax";
import { bcIncomeTax } from "../data/regions/ca/provinces/bc-tax";
import { ukIncomeTax, ukNationalInsurance, UK_UPPER_EARNINGS_LIMIT, UK_NI_ADDITIONAL_RATE } from "../data/regions/uk";
import { usFederalIncomeTax, usPayroll, usFederalIncomeTaxByStatus, type USFilingStatus } from "../data/regions/us";
import type { TaxBracket, IncomeTaxConfig } from "../data/regions/types";

export interface TakeHomeResult {
  grossAnnual: number;
  totalDeductions: number;
  netAnnual: number;
  netMonthly: number;
  netBiweekly: number;
  netWeekly: number;
  breakdown: { label: string; amount: number }[];
  effectiveRate: number;
}

export function calculateBracketTax(income: number, brackets: TaxBracket[]): number {
  let tax = 0;
  for (const b of brackets) {
    if (income <= b.min) break;
    const upper = b.max ?? income;
    const taxable = Math.min(income, upper) - b.min;
    if (taxable > 0) tax += taxable * b.rate;
  }
  return tax;
}

const CA_PROVINCES: Record<string, IncomeTaxConfig> = {
  ON: ontarioIncomeTax,
  AB: albertaIncomeTax,
  BC: bcIncomeTax,
};

export function calculateCATakeHome(grossAnnual: number, province: string): TakeHomeResult {
  const provincial = CA_PROVINCES[province] ?? ontarioIncomeTax;

  const federalTax = calculateBracketTax(grossAnnual, caFederalIncomeTax.brackets);
  const provincialTax = calculateBracketTax(grossAnnual, provincial.brackets);
  const cpp = calculateCPPDetailed(grossAnnual).employeeContribution;
  const ei = Math.min(grossAnnual, caEI.wageBase ?? grossAnnual) * caEI.rate;

  const totalDeductions = federalTax + provincialTax + cpp + ei;
  const netAnnual = grossAnnual - totalDeductions;

  return {
    grossAnnual,
    totalDeductions,
    netAnnual,
    netMonthly: netAnnual / 12,
    netBiweekly: netAnnual / 26,
    netWeekly: netAnnual / 52,
    breakdown: [
      { label: "Federal Tax", amount: federalTax },
      { label: `${province} Provincial Tax`, amount: provincialTax },
      { label: "CPP", amount: cpp },
      { label: "EI", amount: ei },
    ],
    effectiveRate: grossAnnual > 0 ? (totalDeductions / grossAnnual) * 100 : 0,
  };
}
export interface CAIncomeTaxResult {
  grossAnnual: number;
  province: string;
  federalTax: number;
  provincialTax: number;
  totalTax: number;
  effectiveRate: number;
  marginalRate: number; // combined federal + provincial marginal rate
  afterTaxIncome: number;
  federalBracketBreakdown: BracketBreakdownItem[];
  provincialBracketBreakdown: BracketBreakdownItem[];
}

export function calculateCAIncomeTax(grossAnnual: number, province: string): CAIncomeTaxResult {
  const provincial = CA_PROVINCES[province] ?? ontarioIncomeTax;

  const federalTax = calculateBracketTax(grossAnnual, caFederalIncomeTax.brackets);
  const provincialTax = calculateBracketTax(grossAnnual, provincial.brackets);
  const totalTax = federalTax + provincialTax;

  const federalMarginal = getMarginalRate(grossAnnual, caFederalIncomeTax.brackets);
  const provincialMarginal = getMarginalRate(grossAnnual, provincial.brackets);
  const marginalRate = federalMarginal + provincialMarginal;

  const effectiveRate = grossAnnual > 0 ? (totalTax / grossAnnual) * 100 : 0;

  const buildBreakdown = (brackets: TaxBracket[]): BracketBreakdownItem[] =>
    brackets
      .filter((b) => grossAnnual > b.min)
      .map((b) => {
        const upper = b.max ?? grossAnnual;
        const taxableInBracket = Math.min(grossAnnual, upper) - b.min;
        return { min: b.min, max: b.max, rate: b.rate, taxableInBracket, taxInBracket: taxableInBracket * b.rate };
      });

  return {
    grossAnnual,
    province,
    federalTax,
    provincialTax,
    totalTax,
    effectiveRate,
    marginalRate,
    afterTaxIncome: grossAnnual - totalTax,
    federalBracketBreakdown: buildBreakdown(caFederalIncomeTax.brackets),
    provincialBracketBreakdown: buildBreakdown(provincial.brackets),
  };
}

export function calculateUKNI(annualIncome: number): number {
  const primaryThreshold = ukNationalInsurance.wageBase ?? 0;
  const mainBandEarnings = Math.max(0, Math.min(annualIncome, UK_UPPER_EARNINGS_LIMIT) - primaryThreshold);
  const upperBandEarnings = Math.max(0, annualIncome - UK_UPPER_EARNINGS_LIMIT);
  return mainBandEarnings * ukNationalInsurance.rate + upperBandEarnings * UK_NI_ADDITIONAL_RATE;
}

export function calculateUKTakeHome(grossAnnual: number): TakeHomeResult {
  const incomeTax = calculateBracketTax(grossAnnual, ukIncomeTax.brackets);
  const ni = calculateUKNI(grossAnnual);

  const totalDeductions = incomeTax + ni;
  const netAnnual = grossAnnual - totalDeductions;

  return {
    grossAnnual,
    totalDeductions,
    netAnnual,
    netMonthly: netAnnual / 12,
    netBiweekly: netAnnual / 26,
    netWeekly: netAnnual / 52,
    breakdown: [
      { label: "Income Tax", amount: incomeTax },
      { label: "National Insurance", amount: ni },
    ],
    effectiveRate: grossAnnual > 0 ? (totalDeductions / grossAnnual) * 100 : 0,
  };
}
export interface UKIncomeTaxResult {
  grossAnnual: number;
  personalAllowance: number;
  taxableIncome: number;
  incomeTax: number;
  effectiveRate: number;
  marginalRate: number;
  afterTaxIncome: number;
  bracketBreakdown: BracketBreakdownItem[];
}

export function calculateUKIncomeTax(grossAnnual: number): UKIncomeTaxResult {
  const { brackets, standardDeduction } = ukIncomeTax;

  const taxableIncome = Math.max(0, grossAnnual - standardDeduction);
  const incomeTax = calculateBracketTax(grossAnnual, brackets);
  const marginalRate = getMarginalRate(grossAnnual, brackets);
  const effectiveRate = grossAnnual > 0 ? (incomeTax / grossAnnual) * 100 : 0;

  const bracketBreakdown: BracketBreakdownItem[] = brackets
    .filter((b) => grossAnnual > b.min)
    .map((b) => {
      const upper = b.max ?? grossAnnual;
      const taxableInBracket = Math.min(grossAnnual, upper) - b.min;
      return { min: b.min, max: b.max, rate: b.rate, taxableInBracket, taxInBracket: taxableInBracket * b.rate };
    });

  return {
    grossAnnual,
    personalAllowance: standardDeduction,
    taxableIncome,
    incomeTax,
    effectiveRate,
    marginalRate,
    afterTaxIncome: grossAnnual - incomeTax,
    bracketBreakdown,
  };
}

export function calculateUSTakeHome(grossAnnual: number): TakeHomeResult {
  const federalTax = calculateBracketTax(grossAnnual, usFederalIncomeTax.brackets);
  const ss = usPayroll[0];
  const medicare = usPayroll[1];

  const socialSecurity = Math.min(grossAnnual, ss.wageBase ?? grossAnnual) * ss.rate;
  const medicareTax = grossAnnual * medicare.rate;

  const totalDeductions = federalTax + socialSecurity + medicareTax;
  const netAnnual = grossAnnual - totalDeductions;

  return {
    grossAnnual,
    totalDeductions,
    netAnnual,
    netMonthly: netAnnual / 12,
    netBiweekly: netAnnual / 26,
    netWeekly: netAnnual / 52,
    breakdown: [
      { label: "Federal Tax", amount: federalTax },
      { label: "Social Security", amount: socialSecurity },
      { label: "Medicare", amount: medicareTax },
    ],
    effectiveRate: grossAnnual > 0 ? (totalDeductions / grossAnnual) * 100 : 0,
  };
}

export interface BracketBreakdownItem {
  min: number;
  max: number | null;
  rate: number;
  taxableInBracket: number;
  taxInBracket: number;
}

export interface IncomeTaxResult {
  grossAnnual: number;
  standardDeduction: number;
  taxableIncome: number;
  federalTax: number;
  effectiveRate: number;
  marginalRate: number;
  afterTaxIncome: number;
  bracketBreakdown: BracketBreakdownItem[];
}

export function getMarginalRate(income: number, brackets: TaxBracket[]): number {
  let rate = 0;
  for (const b of brackets) {
    if (income > b.min) rate = b.rate;
    else break;
  }
  return rate;
}

export function calculateUSIncomeTax(grossAnnual: number): IncomeTaxResult {
  const { brackets, standardDeduction } = usFederalIncomeTax;

  const taxableIncome = Math.max(0, grossAnnual - standardDeduction);
  const federalTax = calculateBracketTax(grossAnnual, brackets);
  const marginalRate = getMarginalRate(grossAnnual, brackets);
  const effectiveRate = grossAnnual > 0 ? (federalTax / grossAnnual) * 100 : 0;

  const bracketBreakdown: BracketBreakdownItem[] = brackets
    .filter((b) => grossAnnual > b.min)
    .map((b) => {
      const upper = b.max ?? grossAnnual;
      const taxableInBracket = Math.min(grossAnnual, upper) - b.min;
      return {
        min: b.min,
        max: b.max,
        rate: b.rate,
        taxableInBracket,
        taxInBracket: taxableInBracket * b.rate,
      };
    });

  return {
    grossAnnual,
    standardDeduction,
    taxableIncome,
    federalTax,
    effectiveRate,
    marginalRate,
    afterTaxIncome: grossAnnual - federalTax,
    bracketBreakdown,
  };
}
export interface USFederalTaxResult {
  grossAnnual: number;
  filingStatus: USFilingStatus;
  standardDeduction: number;
  taxableIncome: number;
  federalTax: number;
  effectiveRate: number;
  marginalRate: number;
  afterTaxIncome: number;
  bracketBreakdown: BracketBreakdownItem[];
}

export function calculateUSFederalTax(grossAnnual: number, filingStatus: USFilingStatus): USFederalTaxResult {
  const config = usFederalIncomeTaxByStatus[filingStatus];
  const { brackets, standardDeduction } = config;

  const taxableIncome = Math.max(0, grossAnnual - standardDeduction);
  const federalTax = calculateBracketTax(grossAnnual, brackets);
  const marginalRate = getMarginalRate(grossAnnual, brackets);
  const effectiveRate = grossAnnual > 0 ? (federalTax / grossAnnual) * 100 : 0;

  const bracketBreakdown: BracketBreakdownItem[] = brackets
    .filter((b) => grossAnnual > b.min)
    .map((b) => {
      const upper = b.max ?? grossAnnual;
      const taxableInBracket = Math.min(grossAnnual, upper) - b.min;
      return { min: b.min, max: b.max, rate: b.rate, taxableInBracket, taxInBracket: taxableInBracket * b.rate };
    });

  return {
    grossAnnual,
    filingStatus,
    standardDeduction,
    taxableIncome,
    federalTax,
    effectiveRate,
    marginalRate,
    afterTaxIncome: grossAnnual - federalTax,
    bracketBreakdown,
  };
}

export function formatCurrency(value: number, currency: "CAD" | "GBP" | "USD" = "USD"): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(value);
}

export function validateIncome(value: number): string | null {
  if (Number.isNaN(value)) return "Please enter a valid annual income.";
  if (value < 0) return "Income cannot be negative.";
  if (value > 100000000) return "Please enter a realistic income.";
  return null;
}
const CPP_BASIC_EXEMPTION = 3500; // NEEDS_VERIFICATION — standard CPP annual exemption

export interface CPPResult {
  pensionableEarnings: number;
  employeeContribution: number;
  employerContribution: number;
  cpp2Contribution: number;
  totalContribution: number;
}

export interface EIResult {
  insurableEarnings: number;
  employeeContribution: number;
  employerContribution: number;
  totalContribution: number;
}

export function calculateCPPDetailed(annualIncome: number): CPPResult {
  const cap = caCPP.wageBase ?? annualIncome;
  const pensionableEarnings = Math.max(0, Math.min(annualIncome, cap) - CPP_BASIC_EXEMPTION);
  const baseContribution = pensionableEarnings * caCPP.rate;

  const cpp2Earnings = Math.max(0, Math.min(annualIncome, CPP2_CEILING) - cap);
  const cpp2Contribution = cpp2Earnings * CPP2_RATE;

  const employeeContribution = baseContribution + cpp2Contribution;
  const employerContribution = employeeContribution; // employer matches employee, including CPP2

  return {
    pensionableEarnings,
    employeeContribution,
    employerContribution,
    cpp2Contribution,
    totalContribution: employeeContribution + employerContribution,
  };
}

export function calculateEIDetailed(annualIncome: number): EIResult {
  const cap = caEI.wageBase ?? annualIncome;
  const insurableEarnings = Math.min(annualIncome, cap);
  const employeeContribution = insurableEarnings * caEI.rate;
  const employerContribution = employeeContribution * 1.4; // employer pays 1.4x employee rate

  return {
    insurableEarnings,
    employeeContribution,
    employerContribution,
    totalContribution: employeeContribution + employerContribution,
  };
}
export interface NIResult {
  earningsAboveThreshold: number;
  employeeContribution: number;
  employerContribution: number;
  totalContribution: number;
}

// Source: National Insurance Contributions (Secondary Class 1 Contributions) Act 2025
// (legislation.gov.uk), confirmed against HMRC "Rates and Thresholds for Employers
// 2026 to 2027" (published 30 Jan 2026, updated 7 Apr 2026). Verified August 2026.
const NI_EMPLOYER_RATE = 0.15; // Class 1 secondary employer rate, 2026/27
const NI_EMPLOYER_THRESHOLD = 5000; // Secondary Threshold (annual), 2026/27

export function calculateNIDetailed(annualIncome: number): NIResult {
  const primaryThreshold = ukNationalInsurance.wageBase ?? 0;
  const earningsAboveThreshold = Math.max(0, annualIncome - primaryThreshold);
  const employeeContribution = calculateUKNI(annualIncome);

  const employerEarnings = Math.max(0, annualIncome - NI_EMPLOYER_THRESHOLD);
  const employerContribution = employerEarnings * NI_EMPLOYER_RATE;

  return {
    earningsAboveThreshold,
    employeeContribution,
    employerContribution,
    totalContribution: employeeContribution + employerContribution,
  };
}
export interface SalaryConversion {
  hourly: number;
  daily: number;
  weekly: number;
  biweekly: number;
  monthly: number;
  annual: number;
}

export function convertSalary(
  amount: number,
  period: "hourly" | "annual",
  hoursPerWeek = 40,
  weeksPerYear = 52
): SalaryConversion {
  const annual = period === "hourly" ? amount * hoursPerWeek * weeksPerYear : amount;
  const hourly = period === "annual" ? amount / (hoursPerWeek * weeksPerYear) : amount;

  return {
    hourly,
    daily: hourly * (hoursPerWeek / 5),
    weekly: hourly * hoursPerWeek,
    biweekly: (hourly * hoursPerWeek) * 2,
    monthly: annual / 12,
    annual,
  };
}