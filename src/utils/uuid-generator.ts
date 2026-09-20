export type UuidVersion = "v4" | "nil";

export function generateUuidV4(): string {
  return crypto.randomUUID();
}

export function generateNilUuid(): string {
  return "00000000-0000-0000-0000-000000000000";
}

export function generateUuids(count: number, version: UuidVersion): string[] {
  if (version === "nil") return Array.from({ length: count }, generateNilUuid);
  return Array.from({ length: count }, generateUuidV4);
}

export function validateUuidCount(count: number, lang: "en" | "es" = "en"): string | null {
  const t = lang === "es"
    ? { min:"La cantidad debe ser al menos 1.", max:"El máximo es 1000." }
    : { min:"Count must be at least 1.", max:"Maximum count is 1000." };
  if (!count || count < 1) return t.min;
  if (count > 1000) return t.max;
  return null;
}

export function isValidUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value.trim());
}

export function copyUuidSummary(uuids: string[]): string {
  return uuids.join("\n");
}