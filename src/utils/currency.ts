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
