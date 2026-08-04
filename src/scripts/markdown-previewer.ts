import { renderMarkdown, validateMarkdownInput, getMarkdownStats } from "../utils/markdown-previewer";
import { setValue, copyToClipboard } from "../utils/calculator";

const input = document.getElementById("markdownInput") as HTMLTextAreaElement;
const preview = document.getElementById("markdownPreview") as HTMLElement;

const renderBtn = document.getElementById("renderBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function render() {
  clearError();
  const md = input.value;
  const err = validateMarkdownInput(md);
  if (err) { showError(err); return; }

  preview.innerHTML = renderMarkdown(md);

  const stats = getMarkdownStats(md);
  setValue("wordsResult", stats.words);
  setValue("headingsResult", stats.headings);
  setValue("linksResult", stats.links);
  setValue("imagesResult", stats.images);

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  input.value = "";
  preview.innerHTML = "";
  clearError();
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!preview.innerHTML) return;
  copyToClipboard(preview.innerHTML);
}

// live preview
input?.addEventListener("input", () => { if (!resultsContainer.hidden) render(); });

renderBtn?.addEventListener("click", render);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);