import { caFederalIncomeTax, caCPP, caEI } from "../data/regions/ca";
import { ontarioIncomeTax } from "../data/regions/ca/provinces/ontario-tax";
import { albertaIncomeTax } from "../data/regions/ca/provinces/alberta-tax";
import { bcIncomeTax } from "../data/regions/ca/provinces/bc-tax";
import { ukIncomeTax, ukNationalInsurance } from "../data/regions/uk";
import { usFederalIncomeTax, usPayroll } from "../data/regions/us";
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
  const cpp = Math.min(grossAnnual, caCPP.wageBase ?? grossAnnual) * caCPP.rate;
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

export function calculateUKTakeHome(grossAnnual: number): TakeHomeResult {
  const incomeTax = calculateBracketTax(grossAnnual, ukIncomeTax.brackets);
  const ni = Math.max(0, grossAnnual - (ukNationalInsurance.wageBase ?? 0)) * ukNationalInsurance.rate;

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
  const employeeContribution = pensionableEarnings * caCPP.rate;
  const employerContribution = employeeContribution; // employer matches employee

  return {
    pensionableEarnings,
    employeeContribution,
    employerContribution,
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

const NI_EMPLOYER_RATE = 0; // NEEDS_VERIFICATION — Class 1 secondary employer rate
const NI_EMPLOYER_THRESHOLD = 0; // NEEDS_VERIFICATION — secondary threshold, differs from employee's

export function calculateNIDetailed(annualIncome: number): NIResult {
  const primaryThreshold = ukNationalInsurance.wageBase ?? 0;
  const earningsAboveThreshold = Math.max(0, annualIncome - primaryThreshold);
  const employeeContribution = earningsAboveThreshold * ukNationalInsurance.rate;

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