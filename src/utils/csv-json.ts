export interface CsvJsonInput {
  text: string;
  mode: "csvToJson" | "jsonToCsv";
}

export interface CsvJsonResult {
  output: string;
}

export function validateCsvJsonInput(i: CsvJsonInput): string | null {
  if (!i.text.trim()) return "Enter data to convert.";
  if (i.mode === "jsonToCsv") {
    try {
      const parsed = JSON.parse(i.text);
      if (!Array.isArray(parsed)) return "JSON must be an array of objects.";
    } catch {
      return "Invalid JSON input.";
    }
  }
  return null;
}

function parseCsvLine(line: string): string[] {
  return line.split(",").map((v) => v.trim().replace(/^"|"$/g, ""));
}

function csvToJson(text: string): string {
  const lines = text.trim().split("\n");
  const headers = parseCsvLine(lines[0]);

  const rows = lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    const obj: Record<string, string> = {};
    headers.forEach((h, idx) => (obj[h] = values[idx] ?? ""));
    return obj;
  });

  return JSON.stringify(rows, null, 2);
}

function jsonToCsv(text: string): string {
  const data = JSON.parse(text) as Record<string, unknown>[];
  if (data.length === 0) return "";

  const headers = Object.keys(data[0]);
  const rows = data.map((row) =>
    headers.map((h) => `"${String(row[h] ?? "").replace(/"/g, '""')}"`).join(",")
  );

  return [headers.join(","), ...rows].join("\n");
}

export function calculateCsvJson(i: CsvJsonInput): CsvJsonResult {
  if (i.mode === "csvToJson") {
    return { output: csvToJson(i.text) };
  }
  return { output: jsonToCsv(i.text) };
}

export function copyCsvJsonSummary(_i: CsvJsonInput, r: CsvJsonResult): string {
  return r.output;
}
