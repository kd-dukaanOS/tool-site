export interface PrimeInput {
  number: number;
}

export interface PrimeResult {
  isPrime: boolean;
  factors: number[];
  nearestPrimeBelow: number | null;
  nearestPrimeAbove: number;
}

export function validatePrimeInput(i: PrimeInput): string | null {
  if (!Number.isInteger(i.number)) return "Enter a whole number.";
  if (i.number < 1) return "Enter a positive whole number.";
  return null;
}

function isPrimeNumber(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let d = 3; d * d <= n; d += 2) {
    if (n % d === 0) return false;
  }
  return true;
}

function getFactors(n: number): number[] {
  const factors: number[] = [];
  for (let d = 1; d <= n; d++) {
    if (n % d === 0) factors.push(d);
  }
  return factors;
}

export function calculatePrime(i: PrimeInput): PrimeResult {
  const n = i.number;
  const isPrime = isPrimeNumber(n);
  const factors = isPrime ? [1, n] : getFactors(n);

  let below: number | null = null;
  for (let x = n - 1; x >= 2; x--) {
    if (isPrimeNumber(x)) {
      below = x;
      break;
    }
  }

  let above = n + 1;
  while (!isPrimeNumber(above)) above++;

  return { isPrime, factors, nearestPrimeBelow: below, nearestPrimeAbove: above };
}

export function copyPrimeSummary(i: PrimeInput, r: PrimeResult): string {
  return `
Prime Number Check

Number: ${i.number}

Is Prime: ${r.isPrime ? "Yes" : "No"}
Factors: ${r.factors.join(", ")}
Nearest Prime Below: ${r.nearestPrimeBelow ?? "None"}
Nearest Prime Above: ${r.nearestPrimeAbove}
`.trim();
}