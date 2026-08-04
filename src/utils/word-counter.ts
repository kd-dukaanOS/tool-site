export interface WordStats {
  words: number;
  characters: number;
  charactersNoSpaces: number;
  sentences: number;
  paragraphs: number;
  readingTimeMin: number;
  speakingTimeMin: number;
  avgWordLength: number;
}

export function analyzeText(text: string): WordStats {
  const trimmed = text.trim();

  const words = trimmed ? trimmed.split(/\s+/).filter(Boolean) : [];
  const wordCount = words.length;

  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;

  const sentences = trimmed
    ? (trimmed.match(/[^.!?]+[.!?]+/g) || (trimmed ? [trimmed] : [])).length
    : 0;

  const paragraphs = trimmed
    ? trimmed.split(/\n{2,}/).filter((p) => p.trim()).length
    : 0;

  const readingTimeMin = Math.ceil(wordCount / 200);
  const speakingTimeMin = Math.ceil(wordCount / 130);

  const avgWordLength =
    wordCount > 0
      ? Math.round((words.join("").length / wordCount) * 10) / 10
      : 0;

  return {
    words: wordCount,
    characters,
    charactersNoSpaces,
    sentences,
    paragraphs,
    readingTimeMin,
    speakingTimeMin,
    avgWordLength,
  };
}

export function getWordFrequency(text: string, topN = 10): { word: string; count: number }[] {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 2);

  const freq: Record<string, number> = {};
  for (const w of words) freq[w] = (freq[w] || 0) + 1;

  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([word, count]) => ({ word, count }));
}

export function validateTextInput(text: string): string | null {
  if (!text.trim()) return "Please enter or paste text to analyze.";
  return null;
}

export function copyWordSummary(stats: WordStats): string {
  return `Word Count Summary

Words: ${stats.words}
Characters: ${stats.characters}
Characters (no spaces): ${stats.charactersNoSpaces}
Sentences: ${stats.sentences}
Paragraphs: ${stats.paragraphs}
Reading Time: ${stats.readingTimeMin} min
Speaking Time: ${stats.speakingTimeMin} min
Avg Word Length: ${stats.avgWordLength}`.trim();
}