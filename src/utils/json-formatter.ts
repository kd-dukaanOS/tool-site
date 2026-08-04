export interface JsonStats {
  keys: number;
  depth: number;
  size: number;
}

export function formatJson(input: string, indent = 2): string {
  return JSON.stringify(JSON.parse(input), null, indent);
}

export function minifyJson(input: string): string {
  return JSON.stringify(JSON.parse(input));
}

export function validateJson(input: string): string | null {
  if (!input.trim()) return "Please enter JSON to format.";
  try {
    JSON.parse(input);
    return null;
  } catch (e) {
    return "Invalid JSON: " + (e as Error).message;
  }
}

export function getJsonStats(input: string): JsonStats {
  const parsed = JSON.parse(input);
  let keys = 0;
  let maxDepth = 0;

  function walk(value: unknown, depth: number) {
    maxDepth = Math.max(maxDepth, depth);
    if (value && typeof value === "object") {
      for (const k of Object.keys(value)) {
        keys++;
        walk((value as Record<string, unknown>)[k], depth + 1);
      }
    }
  }

  walk(parsed, 1);

  return {
    keys,
    depth: maxDepth,
    size: new Blob([input]).size,
  };
}

export function copyJsonSummary(formatted: string): string {
  return formatted;
}