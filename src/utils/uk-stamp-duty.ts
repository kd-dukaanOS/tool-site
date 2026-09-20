export interface UkStampDutyResult {
  stampDutyOwed: number;
  effectiveRate: number;
  breakdown: { band: string; rate: number; taxForBand: number }[];
}

const STANDARD_BANDS = [
  { upTo: 125000, rate: 0 },
  { upTo: 250000, rate: 2 },
  { upTo: 925000, rate: 5 },
  { upTo: 1500000, rate: 10 },
  { upTo: Infinity, rate: 12 },
];

const FIRST_TIME_BUYER_BANDS = [
  { upTo: 300000, rate: 0 },
  { upTo: 500000, rate: 5 },
];

const ADDITIONAL_DWELLING_SURCHARGE = 5;

export function calculateUkStampDuty(
  purchasePrice: number,
  buyerType: "standard" | "first-time" | "additional"
): UkStampDutyResult {
  let bands = STANDARD_BANDS;

  if (buyerType === "first-time" && purchasePrice <= 500000) {
    bands = FIRST_TIME_BUYER_BANDS;
  }

  const breakdown: { band: string; rate: number; taxForBand: number }[] = [];
  let stampDutyOwed = 0;
  let lowerBound = 0;

  for (const band of bands) {
    if (purchasePrice <= lowerBound) break;
    const upperBound = Math.min(purchasePrice, band.upTo);
    const taxableInBand = upperBound - lowerBound;
    const effectiveRate = buyerType === "additional" ? band.rate + ADDITIONAL_DWELLING_SURCHARGE : band.rate;
    const taxForBand = taxableInBand * (effectiveRate / 100);

    stampDutyOwed += taxForBand;
    breakdown.push({
      band: `£${lowerBound.toLocaleString()} - £${band.upTo === Infinity ? "∞" : band.upTo.toLocaleString()}`,
      rate: effectiveRate,
      taxForBand,
    });

    lowerBound = band.upTo;
  }

  const effectiveRate = purchasePrice > 0 ? (stampDutyOwed / purchasePrice) * 100 : 0;

  return { stampDutyOwed, effectiveRate, breakdown };
}

export function validateUkStampDutyInputs(purchasePrice: number, lang: "en" | "es" = "en"): string | null {
  if (purchasePrice <= 0) return lang === "es" ? "Ingresa un precio de compra mayor a cero." : "Enter a purchase price greater than zero.";
  return null;
}