export interface PasswordOptions {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  excludeAmbiguous: boolean;
}

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMS = "0123456789";
const SYMS = "!@#$%^&*()_+-=[]{}|;:,.<>?";
const AMBIGUOUS = "Il1O0";

export function generatePassword(opts: PasswordOptions): string {
  let charset = "";
  if (opts.uppercase) charset += UPPER;
  if (opts.lowercase) charset += LOWER;
  if (opts.numbers) charset += NUMS;
  if (opts.symbols) charset += SYMS;

  if (opts.excludeAmbiguous) {
    charset = charset
      .split("")
      .filter((c) => !AMBIGUOUS.includes(c))
      .join("");
  }

  if (!charset) throw new Error("Select at least one character type.");

  const array = new Uint32Array(opts.length);
  crypto.getRandomValues(array);

  return Array.from(array, (n) => charset[n % charset.length]).join("");
}

export type PasswordStrength = "Weak" | "Fair" | "Strong" | "Very Strong";

export function getPasswordStrength(password: string): PasswordStrength {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return "Weak";
  if (score <= 3) return "Fair";
  if (score <= 5) return "Strong";
  return "Very Strong";
}

export function estimateCrackTime(password: string): string {
  const charsetSize =
    (/[a-z]/.test(password) ? 26 : 0) +
    (/[A-Z]/.test(password) ? 26 : 0) +
    (/[0-9]/.test(password) ? 10 : 0) +
    (/[^A-Za-z0-9]/.test(password) ? 32 : 0);

  const combinations = Math.pow(charsetSize || 1, password.length);
  const guessesPerSecond = 1e10;
  const seconds = combinations / guessesPerSecond;

  if (seconds < 1) return "Instantly";
  if (seconds < 60) return `${Math.round(seconds)} seconds`;
  if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
  if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
  if (seconds < 31536000000) return `${Math.round(seconds / 31536000)} years`;
  return "Centuries";
}

export function validatePasswordOptions(opts: PasswordOptions): string | null {
  if (opts.length < 4 || opts.length > 128) return "Length must be between 4 and 128.";
  if (!opts.uppercase && !opts.lowercase && !opts.numbers && !opts.symbols) {
    return "Select at least one character type.";
  }
  return null;
}