export interface MarkdownStats {
  words: number;
  chars: number;
  headings: number;
  links: number;
  images: number;
}

export function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function renderMarkdown(md: string): string {
  let html = escapeHtml(md);

  // code blocks
  html = html.replace(/```([\s\S]*?)```/g, (_, code) => `<pre><code>${code}</code></pre>`);
  // inline code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  // headings
  html = html.replace(/^###### (.*)$/gm, "<h6>$1</h6>");
  html = html.replace(/^##### (.*)$/gm, "<h5>$1</h5>");
  html = html.replace(/^#### (.*)$/gm, "<h4>$1</h4>");
  html = html.replace(/^### (.*)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.*)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.*)$/gm, "<h1>$1</h1>");
  // bold / italic
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
  // images
  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2" />');
  // links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  // blockquote
  html = html.replace(/^> (.*)$/gm, "<blockquote>$1</blockquote>");
  // unordered lists
  html = html.replace(/^\s*-\s+(.*)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`);
  // line breaks -> paragraphs
  html = html
    .split(/\n{2,}/)
    .map((block) => (/^<(h\d|ul|pre|blockquote)/.test(block.trim()) ? block : `<p>${block.replace(/\n/g, "<br/>")}</p>`))
    .join("\n");

  return html;
}

export function validateMarkdownInput(md: string): string | null {
  if (!md.trim()) return "Please enter Markdown text.";
  return null;
}

export function getMarkdownStats(md: string): MarkdownStats {
  return {
    words: md.trim().split(/\s+/).filter(Boolean).length,
    chars: md.length,
    headings: (md.match(/^#{1,6}\s/gm) || []).length,
    links: (md.match(/\[.*?\]\(.*?\)/g) || []).length,
    images: (md.match(/!\[.*?\]\(.*?\)/g) || []).length,
  };
}