const WORDS = [
  "lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit","sed","do",
  "eiusmod","tempor","incididunt","ut","labore","et","dolore","magna","aliqua","enim",
  "ad","minim","veniam","quis","nostrud","exercitation","ullamco","laboris","nisi","aliquip",
  "ex","ea","commodo","consequat","duis","aute","irure","in","reprehenderit","voluptate",
  "velit","esse","cillum","fugiat","nulla","pariatur","excepteur","sint","occaecat","cupidatat",
  "non","proident","sunt","culpa","qui","officia","deserunt","mollit","anim","id","est","laborum",
];

export type LoremType = "paragraphs" | "sentences" | "words";

function randWord(): string {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function makeSentence(minWords = 6, maxWords = 14): string {
  const len = minWords + Math.floor(Math.random() * (maxWords - minWords));
  const words = Array.from({ length: len }, randWord);
  return capitalize(words.join(" ")) + ".";
}

function makeParagraph(sentenceCount = 5): string {
  return Array.from({ length: sentenceCount }, () => makeSentence()).join(" ");
}

export function generateLorem(type: LoremType, count: number, startWithLorem = true): string {
  let result = "";

  if (type === "words") {
    const words = Array.from({ length: count }, randWord);
    if (startWithLorem) { words[0] = "lorem"; if (words[1]) words[1] = "ipsum"; }
    result = capitalize(words.join(" ")) + ".";
  } else if (type === "sentences") {
    const sentences = Array.from({ length: count }, () => makeSentence());
    if (startWithLorem) sentences[0] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    result = sentences.join(" ");
  } else {
    const paragraphs = Array.from({ length: count }, () => makeParagraph());
    if (startWithLorem) {
      paragraphs[0] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " + paragraphs[0];
    }
    result = paragraphs.join("\n\n");
  }

  return result;
}

export function validateLoremInput(count: number): string | null {
  if (!count || count < 1) return "Please enter a count of at least 1.";
  if (count > 500) return "Maximum count is 500.";
  return null;
}

export function getLoremStats(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const chars = text.length;
  const paragraphs = text.split(/\n\n+/).filter(Boolean).length;
  return { words, chars, paragraphs };
}