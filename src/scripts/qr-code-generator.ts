import { buildQrUrl, validateQrInput, getQrStats, type QrOptions } from "../utils/qr-code-generator";
import { setValue } from "../utils/calculator";

const textInput = document.getElementById("qrText") as HTMLTextAreaElement;
const sizeInput = document.getElementById("qrSize") as HTMLInputElement;
const eccSelect = document.getElementById("qrEcc") as HTMLSelectElement;
const fgColor = document.getElementById("qrFgColor") as HTMLInputElement;
const bgColor = document.getElementById("qrBgColor") as HTMLInputElement;

const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const downloadBtn = document.getElementById("downloadBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const qrImage = document.getElementById("qrImage") as HTMLImageElement;

let lastUrl = "";

function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function generate() {
  clearError();
  const text = textInput.value;
  const err = validateQrInput(text);
  if (err) { showError(err); return; }

  const opts: QrOptions = {
    text,
    size: parseInt(sizeInput.value, 10) || 300,
    errorCorrection: eccSelect.value as QrOptions["errorCorrection"],
    fgColor: fgColor.value,
    bgColor: bgColor.value,
  };

  const url = buildQrUrl(opts);
  qrImage.src = url;
  lastUrl = url;

  const stats = getQrStats(text);
  setValue("charsResult", stats.chars);
  setValue("typeResult", stats.type);
  setValue("sizeResult", `${opts.size}×${opts.size}`);

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  textInput.value = "";
  sizeInput.value = "300";
  eccSelect.value = "M";
  fgColor.value = "#000000";
  bgColor.value = "#ffffff";
  qrImage.src = "";
  clearError();
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleDownload() {
  if (!lastUrl) return;
  const a = document.createElement("a");
  a.href = lastUrl;
  a.download = "qrcode.png";
  a.target = "_blank";
  a.click();
}

generateBtn?.addEventListener("click", generate);
resetBtn?.addEventListener("click", reset);
downloadBtn?.addEventListener("click", handleDownload);