// Client-side logic for the JWT Decoder widget.
// Wires up: #jwtInput, #decodeBtn, #resetBtn, #copyBtn, #errorBox, #emptyState,
// #resultsContainer, #statusResult, #algResult, #issuedResult, #expiresResult,
// #headerOutput, #payloadOutput

function initJwtDecoder() {
  const input = document.getElementById("jwtInput") as HTMLTextAreaElement | null;
  const decodeBtn = document.getElementById("decodeBtn");
  const resetBtn = document.getElementById("resetBtn");
  const copyBtn = document.getElementById("copyBtn");
  const errorBox = document.getElementById("errorBox");
  const emptyState = document.getElementById("emptyState");
  const resultsContainer = document.getElementById("resultsContainer");
  const statusResult = document.getElementById("statusResult");
  const algResult = document.getElementById("algResult");
  const issuedResult = document.getElementById("issuedResult");
  const expiresResult = document.getElementById("expiresResult");
  const headerOutput = document.getElementById("headerOutput");
  const payloadOutput = document.getElementById("payloadOutput");

  if (!input) return;

  const lang = (window as any).calcLang === "es" ? "es" : "en";
  const msg = {
    en: {
      empty: "Please enter a JWT token first.",
      invalid: "Invalid JWT format: token must have 3 dot-separated segments.",
      decodeFail: "Could not decode token: ",
      expired: "Expired",
      valid: "Valid",
      na: "N/A",
    },
    es: {
      empty: "Por favor ingresa un token JWT primero.",
      invalid: "Formato JWT inválido: el token debe tener 3 segmentos separados por puntos.",
      decodeFail: "No se pudo decodificar el token: ",
      expired: "Expirado",
      valid: "Válido",
      na: "N/D",
    },
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

  // Decode a Base64Url segment into a UTF-8 string.
  function base64UrlDecode(segment: string): string {
    let base64 = segment.replace(/-/g, "+").replace(/_/g, "/");
    while (base64.length % 4 !== 0) base64 += "=";
    const binary = atob(base64);
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    return new TextDecoder("utf-8").decode(bytes);
  }

  function formatTimestamp(unixSeconds: number): string {
    const date = new Date(unixSeconds * 1000);
    return date.toLocaleString(lang === "es" ? "es-ES" : "en-US");
  }

  decodeBtn?.addEventListener("click", () => {
    const raw = input!.value.trim();
    if (!raw) {
      showError(msg.empty);
      return;
    }

    const parts = raw.split(".");
    if (parts.length !== 3) {
      showError(msg.invalid);
      return;
    }

    let header: any;
    let payload: any;
    try {
      header = JSON.parse(base64UrlDecode(parts[0]));
      payload = JSON.parse(base64UrlDecode(parts[1]));
    } catch (e) {
      const errMessage = e instanceof Error ? e.message : String(e);
      showError(msg.decodeFail + errMessage);
      return;
    }

    const now = Math.floor(Date.now() / 1000);
    const hasExp = typeof payload.exp === "number";
    const isExpired = hasExp && payload.exp < now;

    if (statusResult) {
      statusResult.textContent = hasExp ? (isExpired ? msg.expired : msg.valid) : msg.valid;
    }
    if (algResult) algResult.textContent = header.alg ?? msg.na;
    if (issuedResult) {
      issuedResult.textContent = typeof payload.iat === "number" ? formatTimestamp(payload.iat) : msg.na;
    }
    if (expiresResult) {
      expiresResult.textContent = hasExp ? formatTimestamp(payload.exp) : msg.na;
    }
    if (headerOutput) headerOutput.textContent = JSON.stringify(header, null, 2);
    if (payloadOutput) payloadOutput.textContent = JSON.stringify(payload, null, 2);

    clearError();
    if (emptyState) emptyState.hidden = true;
    if (resultsContainer) resultsContainer.hidden = false;
  });

  resetBtn?.addEventListener("click", () => {
    input!.value = "";
    if (headerOutput) headerOutput.textContent = "";
    if (payloadOutput) payloadOutput.textContent = "";
    clearError();
    if (resultsContainer) resultsContainer.hidden = true;
    if (emptyState) emptyState.hidden = false;
  });

  copyBtn?.addEventListener("click", async () => {
    if (!headerOutput?.textContent && !payloadOutput?.textContent) return;
    const summary = [
      "Header:",
      headerOutput?.textContent ?? "",
      "",
      "Payload:",
      payloadOutput?.textContent ?? "",
    ].join("\n");
    try {
      await navigator.clipboard.writeText(summary);
    } catch {
      const temp = document.createElement("textarea");
      temp.value = summary;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initJwtDecoder);
} else {
  initJwtDecoder();
}
