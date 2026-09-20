export interface SSResult {
  fraYears: number;
  fraMonths: number;
  pia: number;
  benefitAt62: number;
  benefitAtFRA: number;
  benefitAt70: number;
  benefitAtPlanned: number;
  breakEvenAge: number | null;
}

const BEND1 = 1286;
const BEND2 = 7749;

function getFRAInMonths(birthYear: number): number {
  if (birthYear <= 1937) return 65 * 12;
  if (birthYear === 1938) return 65 * 12 + 2;
  if (birthYear === 1939) return 65 * 12 + 4;
  if (birthYear === 1940) return 65 * 12 + 6;
  if (birthYear === 1941) return 65 * 12 + 8;
  if (birthYear === 1942) return 65 * 12 + 10;
  if (birthYear >= 1943 && birthYear <= 1954) return 66 * 12;
  if (birthYear === 1955) return 66 * 12 + 2;
  if (birthYear === 1956) return 66 * 12 + 4;
  if (birthYear === 1957) return 66 * 12 + 6;
  if (birthYear === 1958) return 66 * 12 + 8;
  if (birthYear === 1959) return 66 * 12 + 10;
  return 67 * 12;
}

function roundDownDime(n: number): number {
  return Math.floor(n * 10) / 10;
}

function calculatePIA(aime: number): number {
  let pia: number;
  if (aime <= BEND1) pia = aime * 0.9;
  else if (aime <= BEND2) pia = BEND1 * 0.9 + (aime - BEND1) * 0.32;
  else pia = BEND1 * 0.9 + (BEND2 - BEND1) * 0.32 + (aime - BEND2) * 0.15;
  return roundDownDime(pia);
}

function benefitAtClaimMonths(pia: number, fraMonths: number, claimMonths: number): number {
  const diff = claimMonths - fraMonths;
  if (diff < 0) {
    const early = -diff;
    const first36 = Math.min(early, 36);
    const rest = Math.max(early - 36, 0);
    const reduction = first36 * (5 / 9 / 100) + rest * (5 / 12 / 100);
    return pia * (1 - reduction);
  }
  if (diff > 0) {
    const maxDelayMonths = 70 * 12 - fraMonths;
    const creditMonths = Math.min(diff, maxDelayMonths);
    const credit = creditMonths * (2 / 3 / 100);
    return pia * (1 + credit);
  }
  return pia;
}

function calcBreakEven(benefit62: number, benefitLater: number, laterAge: number): number | null {
  if (benefitLater <= benefit62) return null;
  const age = (benefit62 * 62 - benefitLater * laterAge) / (benefit62 - benefitLater);
  return Math.round(age * 10) / 10;
}

export function calculateSocialSecurity(
  birthYear: number,
  monthlyAIME: number,
  plannedClaimingAge: number
): SSResult {
  const fraMonths = getFRAInMonths(birthYear);
  const pia = calculatePIA(monthlyAIME);

  const benefitAt62 = benefitAtClaimMonths(pia, fraMonths, 62 * 12);
  const benefitAtFRA = pia;
  const benefitAt70 = benefitAtClaimMonths(pia, fraMonths, 70 * 12);
  const benefitAtPlanned = benefitAtClaimMonths(pia, fraMonths, Math.round(plannedClaimingAge * 12));

  const breakEvenAge = calcBreakEven(benefitAt62, benefitAtPlanned, plannedClaimingAge);

  return {
    fraYears: Math.floor(fraMonths / 12),
    fraMonths: fraMonths % 12,
    pia,
    benefitAt62,
    benefitAtFRA,
    benefitAt70,
    benefitAtPlanned,
    breakEvenAge,
  };
}

export function validateSSInputs(birthYear: number, monthlyAIME: number, plannedClaimingAge: number, lang: "en" | "es" = "en"): string | null {
  const msg = lang === "es" ? {
    birthYear: "Ingresa un año de nacimiento válido.",
    aime: "El promedio de ingresos mensuales indexados debe ser mayor a cero.",
    claimingAge: "La edad de reclamo debe estar entre 62 y 70.",
  } : {
    birthYear: "Enter a valid birth year.",
    aime: "Average indexed monthly earnings must be greater than zero.",
    claimingAge: "Claiming age must be between 62 and 70.",
  };
  if (birthYear < 1930 || birthYear > 2010) return msg.birthYear;
  if (monthlyAIME <= 0) return msg.aime;
  if (plannedClaimingAge < 62 || plannedClaimingAge > 70) return msg.claimingAge;
  return null;
}