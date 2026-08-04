export type Base = 2 | 8 | 10 | 16;

export interface BaseResult {
  binary: string;
  octal: string;
  decimal: string;
  hex: string;
}

export function convertBase(value: string, fromBase: Base): BaseResult {
  const decimal = parseInt(value, fromBase);
  if (Number.isNaN(decimal)) throw new Error(`Invalid number for base ${fromBase}.`);

  return {
    binary: decimal.toString(2),
    octal: decimal.toString(8),
    decimal: decimal.toString(10),
    hex: decimal.toString(16).toUpperCase(),
  };
}

const BASE_PATTERNS: Record<Base, RegExp> = {
  2: /^[01]+$/,
  8: /^[0-7]+$/,
  10: /^[0-9]+$/,
  16: /^[0-9A-Fa-f]+$/,
};

export function validateBaseInput(value: string, base: Base): string | null {
  if (!value.trim()) return "Please enter a number to convert.";
  if (!BASE_PATTERNS[base].test(value.trim())) {
    return `Invalid digits for base ${base}.`;
  }
  return null;
}

export function copyBaseSummary(input: string, fromBase: Base, r: BaseResult): string {
  return `Number Base Conversion

Input: ${input} (base ${fromBase})

Binary: ${r.binary}
Octal: ${r.octal}
Decimal: ${r.decimal}
Hexadecimal: ${r.hex}`.trim();
}