/* ==========================================================
   ToolSite Diff Checker Utilities
========================================================== */

export type DiffLineType = "same" | "added" | "removed";

export interface DiffLine {
  type: DiffLineType;
  text: string;
}

export interface DiffStats {
  added: number;
  removed: number;
  unchanged: number;
  totalLines: number;
  similarity: number;
}

export interface DiffResult {
  lines: DiffLine[];
  stats: DiffStats;
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function computeDiff(text1: string, text2: string): DiffResult {
  const lines1 = text1.split("\n");
  const lines2 = text2.split("\n");

  const maxLines = Math.max(lines1.length, lines2.length);

  const lines: DiffLine[] = [];

  let added = 0;
  let removed = 0;
  let unchanged = 0;

  for (let i = 0; i < maxLines; i++) {
    const l1 = lines1[i] ?? "";
    const l2 = lines2[i] ?? "";

    if (l1 === l2) {
      lines.push({ type: "same", text: l1 });
      unchanged++;
    } else {
      if (l1 !== "" || i < lines1.length) {
        lines.push({ type: "removed", text: l1 });
        removed++;
      }
      if (l2 !== "" || i < lines2.length) {
        lines.push({ type: "added", text: l2 });
        added++;
      }
    }
  }

  const totalLines = Math.max(lines1.length, lines2.length);

  const similarity =
    totalLines === 0
      ? 100
      : Math.round((unchanged / totalLines) * 100);

  return {
    lines,
    stats: { added, removed, unchanged, totalLines, similarity },
  };
}

export function formatDiffHtml(result: DiffResult): string {
  if (result.lines.length === 0) {
    return "No differences found — texts are identical.";
  }

  return result.lines
    .map((line) => {
      const safe = escapeHtml(line.text) || " ";

      if (line.type === "added") {
        return `<span class="diff-added">+ ${safe}</span>`;
      }

      if (line.type === "removed") {
        return `<span class="diff-removed">- ${safe}</span>`;
      }

      return `<span class="diff-same">  ${safe}</span>`;
    })
    .join("\n");
}

export function validateDiffInput(
  text1: string,
  text2: string
): string | null {
  if (!text1.trim() && !text2.trim()) {
    return "Please enter text in at least one field.";
  }
  return null;
}

export function copyDiffSummary(
  _text1: string,
  _text2: string,
  result: DiffResult
): string {
  return `
Diff Summary

Lines Added: ${result.stats.added}
Lines Removed: ${result.stats.removed}
Lines Unchanged: ${result.stats.unchanged}
Similarity: ${result.stats.similarity}%

--- Diff ---
${result.lines
  .map((l) =>
    l.type === "added"
      ? `+ ${l.text}`
      : l.type === "removed"
      ? `- ${l.text}`
      : `  ${l.text}`
  )
  .join("\n")}
`.trim();
}


