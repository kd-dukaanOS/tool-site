// Client-side logic for the JSON Formatter widget.
// Wires up: #jsonInput, #jsonOutput, #formatBtn, #minifyBtn, #resetBtn, #copyBtn,
// #errorBox, #emptyState, #resultsContainer, #keysResult, #depthResult, #sizeResult

function initJsonFormatter() {
  const input = document.getElementById("jsonInput") as HTMLTextAreaElement | null;
  const output = document.getElementById("jsonOutput") as HTMLTextAreaElement | null;
  const formatBtn = document.getElementById("formatBtn");
  const minifyBtn = document.getElementById("minifyBtn");
  const resetBtn = document.getElementById("resetBtn");
  const copyBtn = document.getElementById("copyBtn");
  const errorBox = document.getElementById("errorBox");
  const emptyState = document.getElementById("emptyState");
  const resultsContainer = document.getElementById("resultsContainer");
  const keysResult = document.getElementById("keysResult");
  const depthResult = document.getElementById("depthResult");
  const sizeResult = document.getElementById("sizeResult");

  if (!input || !output) return;

  const lang = (window as any).calcLang === "es" ? "es" : "en";
  const msg = {
    en: { empty: "Please enter some JSON first.", invalid: "Invalid JSON: " },
    es: { empty: "Por favor ingresa JSON primero.", invalid: "JSON inválido: " },
  }[lang];

  function showError(text: string) {
    if (!errorBox) return;
    errorBox.textContent = text;
    errorBox.hidden = false;
    if (resultsContainer) resultsContainer.hidden = true;
    if (emptyState) emptyState.hidden = false;
  }

  function clearError() {
    if (!errorBox) return;
    errorBox.hidden = true;
    errorBox.textContent = "";
  }

  function countKeys(value: unknown): number {
    if (Array.isArray(value)) {
      return value.reduce((sum: number, item) => sum + countKeys(item), 0);
    }
    if (value !== null && typeof value === "object") {
      const obj = value as Record<string, unknown>;
      return Object.keys(obj).reduce(
        (sum, key) => sum + 1 + countKeys(obj[key]),
        0
      );
    }
    return 0;
  }

  function maxDepth(value: unknown): number {
    if (Array.isArray(value)) {
      if (value.length === 0) return 1;
      return 1 + Math.max(...value.map(maxDepth));
    }
    if (value !== null && typeof value === "object") {
      const vals = Object.values(value as Record<string, unknown>);
      if (vals.length === 0) return 1;
      return 1 + Math.max(...vals.map(maxDepth));
    }
    return 0;
  }

  function formatBytes(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  function updateStats(parsed: unknown, serialized: string) {
    if (keysResult) keysResult.textContent = String(countKeys(parsed));
    if (depthResult) depthResult.textContent = String(maxDepth(parsed));
    if (sizeResult) sizeResult.textContent = formatBytes(new TextEncoder().encode(serialized).length);
  }

  function parseInput(): unknown | null {
    const raw = input!.value.trim();
    if (!raw) {
      showError(msg.empty);
      return null;
    }
    try {
      return JSON.parse(raw);
    } catch (e) {
      const errMessage = e instanceof Error ? e.message : String(e);
      showError(msg.invalid + errMessage);
      return null;
    }
  }

  function reveal() {
    clearError();
    if (emptyState) emptyState.hidden = true;
    if (resultsContainer) resultsContainer.hidden = false;
  }

  formatBtn?.addEventListener("click", () => {
    const parsed = parseInput();
    if (parsed === null) return;
    const pretty = JSON.stringify(parsed, null, 2);
    output!.value = pretty;
    updateStats(parsed, pretty);
    reveal();
  });

  minifyBtn?.addEventListener("click", () => {
    const parsed = parseInput();
    if (parsed === null) return;
    const compact = JSON.stringify(parsed);
    output!.value = compact;
    updateStats(parsed, compact);
    reveal();
  });

  resetBtn?.addEventListener("click", () => {
    input!.value = "";
    output!.value = "";
    clearError();
    if (resultsContainer) resultsContainer.hidden = true;
    if (emptyState) emptyState.hidden = false;
  });

  copyBtn?.addEventListener("click", async () => {
    if (!output!.value) return;
    try {
      await navigator.clipboard.writeText(output!.value);
    } catch {
      output!.select();
      document.execCommand("copy");
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initJsonFormatter);
} else {
  initJsonFormatter();
}
