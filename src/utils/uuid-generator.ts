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

export function validateUuidCount(count: number): string | null {
  if (!count || count < 1) return "Count must be at least 1.";
  if (count > 1000) return "Maximum count is 1000.";
  return null;
}

export function isValidUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value.trim());
}

export function copyUuidSummary(uuids: string[]): string {
  return uuids.join("\n");
}