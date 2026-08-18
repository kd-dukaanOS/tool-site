// src/utils/currency.ts
// Two things live here because both are imported from the same path
// across the codebase:
// 1. Shared currency-selector support for generic finance calculators
//    (mortgage, compound interest, discount, EMI-style tools). India-only
//    concepts (PPF, NPS, GST, SIP, RD, FD) stay INR-only on purpose.
// 2. Currency Converter tool logic (live exchange-rate conversion).

// ---------- Shared currency-selector support ----------

export type CurrencyCode = "INR" | "USD" | "GBP" | "CAD" | "EUR" | "AUD" | "JPY" | "SGD" | "AED";

export interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  locale: string;
  label: string;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  INR: { code: "INR", symbol: "₹", locale: "en-IN", label: "₹ INR" },
  USD: { code: "USD", symbol: "$", locale: "en-US", label: "$ USD" },
  GBP: { code: "GBP", symbol: "£", locale: "en-GB", label: "£ GBP" },
  CAD: { code: "CAD", symbol: "C$", locale: "en-CA", label: "C$ CAD" },
  EUR: { code: "EUR", symbol: "€", locale: "de-DE", label: "€ EUR" },
  AUD: { code: "AUD", symbol: "A$", locale: "en-AU", label: "A$ AUD" },
  JPY: { code: "JPY", symbol: "¥", locale: "ja-JP", label: "¥ JPY" },
  SGD: { code: "SGD", symbol: "S$", locale: "en-SG", label: "S$ SGD" },
  AED: { code: "AED", symbol: "AED ", locale: "ar-AE", label: "AED" },
};

const STORAGE_KEY = "toolsite-currency";

export function getSavedCurrency(): CurrencyCode {
  if (typeof localStorage === "undefined") return "INR";
  const saved = localStorage.getItem(STORAGE_KEY) as CurrencyCode | null;
  return saved && CURRENCIES[saved] ? saved : "INR";
}

export function setSavedCurrency(code: CurrencyCode): void {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(STORAGE_KEY, code);
}

// Drop-in replacement for each widget's old hardcoded inr() helper.
// Usage: formatCurrency(1234.5, getSavedCurrency()) -> "$1,234.50" etc.
export function formatCurrency(value: number, code: CurrencyCode = "INR"): string {
  const info = CURRENCIES[code] ?? CURRENCIES.INR;
  return `${info.symbol}${value.toLocaleString(info.locale)}`;
}

// Broadcast so every currency-select on the page updates together and
// widgets can re-render their last result without a full recalculation.
export const CURRENCY_CHANGE_EVENT = "toolsite:currency-change";

export function onCurrencyChange(handler: (code: CurrencyCode) => void): void {
  if (typeof window === "undefined") return;
  window.addEventListener(CURRENCY_CHANGE_EVENT, (e) => {
    handler((e as CustomEvent<CurrencyCode>).detail);
  });
}

export function broadcastCurrencyChange(code: CurrencyCode): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(CURRENCY_CHANGE_EVENT, { detail: code }));
}

// ---------- Currency Converter tool logic ----------

export interface CurrencyInput {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
}

export interface CurrencyResult {
  convertedAmount: number;
  rate: number;
  inverseRate: number;
  fromCurrency: string;
  toCurrency: string;
}

const CODE_REGEX = /^[A-Za-z]{3}$/;

export function validateCurrencyInput(input: CurrencyInput): string | null {
  const { amount, fromCurrency, toCurrency } = input;

  if (!amount || Number.isNaN(amount) || amount <= 0) {
    return "Please enter an amount greater than 0.";
  }

  if (!CODE_REGEX.test(fromCurrency)) {
    return "Enter a valid 3-letter currency code (e.g. USD).";
  }

  if (!CODE_REGEX.test(toCurrency)) {
    return "Enter a valid 3-letter currency code (e.g. INR).";
  }

  if (fromCurrency.toUpperCase() === toCurrency.toUpperCase()) {
    return "Please choose two different currencies.";
  }

  return null;
}

export function convertCurrency(
  amount: number,
  rate: number,
  fromCurrency: string,
  toCurrency: string
): CurrencyResult {
  const convertedAmount = amount * rate;

  return {
    convertedAmount,
    rate,
    inverseRate: 1 / rate,
    fromCurrency: fromCurrency.toUpperCase(),
    toCurrency: toCurrency.toUpperCase(),
  };
}

export function formatAmount(value: number, code: string): string {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: code.toUpperCase(),
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return `${value.toFixed(2)} ${code.toUpperCase()}`;
  }
}

export function copyCurrencySummary(result: CurrencyResult, amount: number): string {
  return `
Currency Conversion

${formatAmount(amount, result.fromCurrency)} = ${formatAmount(result.convertedAmount, result.toCurrency)}

Exchange Rate:
1 ${result.fromCurrency} = ${result.rate.toFixed(4)} ${result.toCurrency}

1 ${result.toCurrency} = ${result.inverseRate.toFixed(4)} ${result.fromCurrency}
`.trim();
}