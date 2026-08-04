export interface RegexMatch {
  match: string;
  index: number;
  groups: string[];
}

export interface RegexResult {
  matches: RegexMatch[];
  isValid: boolean;
  error: string | null;
}

export function testRegex(pattern: string, flags: string, text: string): RegexResult {
  try {
    const re = new RegExp(pattern, flags.includes("g") ? flags : flags + "g");
    const matches: RegexMatch[] = [];
    let m: RegExpExecArray | null;

    while ((m = re.exec(text)) !== null) {
      matches.push({ match: m[0], index: m.index, groups: m.slice(1) });
      if (m[0] === "") re.lastIndex++;
    }

    return { matches, isValid: true, error: null };
  } catch (e) {
    return { matches: [], isValid: false, error: (e as Error).message };
  }
}

export function highlightMatches(text: string, matches: RegexMatch[]): string {
  if (matches.length === 0) return escapeHtml(text);

  let result = "";
  let lastIndex = 0;

  for (const m of matches) {
    result += escapeHtml(text.slice(lastIndex, m.index));
    result += `<mark>${escapeHtml(m.match)}</mark>`;
    lastIndex = m.index + m.match.length;
  }

  result += escapeHtml(text.slice(lastIndex));
  return result;
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function validateRegexInput(pattern: string, text: string): string | null {
  if (!pattern.trim()) return "Please enter a regex pattern.";
  if (!text.trim()) return "Please enter test text.";
  return null;
}

export function copyRegexSummary(pattern: string, flags: string, result: RegexResult): string {
  return `Regex Test Summary

Pattern: /${pattern}/${flags}
Matches Found: ${result.matches.length}

${result.matches.map((m, i) => `${i + 1}. "${m.match}" at index ${m.index}`).join("\n")}`.trim();
}