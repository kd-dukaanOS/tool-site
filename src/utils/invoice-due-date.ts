export interface InvoiceDueDateInput {
  invoiceDate: Date;
  paymentTermsDays: number;
}

export interface InvoiceDueDateResult {
  dueDate: Date;
  daysRemaining: number;
  isOverdue: boolean;
  status: "upcoming" | "due-soon" | "overdue";
}

export function validateInvoiceDueDateInput(i: InvoiceDueDateInput, lang: "en" | "es" = "en"): string | null {
  if (Number.isNaN(i.invoiceDate.getTime())) return lang === "es" ? "Selecciona una fecha de factura válida." : "Please select a valid invoice date.";
  if (i.paymentTermsDays <= 0) return lang === "es" ? "Ingresa un plazo de pago válido (en días)." : "Enter valid payment terms (in days).";
  return null;
}

export function calculateInvoiceDueDate(i: InvoiceDueDateInput): InvoiceDueDateResult {
  const dueDate = new Date(i.invoiceDate);
  dueDate.setDate(dueDate.getDate() + i.paymentTermsDays);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffMs = dueDate.getTime() - today.getTime();
  const daysRemaining = Math.ceil(diffMs / (24 * 60 * 60 * 1000));

  const isOverdue = daysRemaining < 0;

  let status: InvoiceDueDateResult["status"] = "upcoming";
  if (isOverdue) status = "overdue";
  else if (daysRemaining <= 3) status = "due-soon";

  return { dueDate, daysRemaining, isOverdue, status };
}

export function formatDueDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function copyInvoiceDueDateSummary(
  i: InvoiceDueDateInput,
  r: InvoiceDueDateResult,
  lang: "en" | "es" = "en"
): string {
  if (lang === "es") {
    return `
Resumen de Vencimiento de Factura

Fecha de Factura: ${i.invoiceDate.toLocaleDateString("es-ES")}
Plazo de Pago: ${i.paymentTermsDays} días

Fecha de Vencimiento: ${formatDueDate(r.dueDate)}
Estado: ${r.isOverdue ? "Vencida" : `${r.daysRemaining} días restantes`}
`.trim();
  }
  return `
Invoice Due Date Summary

Invoice Date: ${i.invoiceDate.toLocaleDateString("en-US")}
Payment Terms: ${i.paymentTermsDays} days

Due Date: ${formatDueDate(r.dueDate)}
Status: ${r.isOverdue ? "Overdue" : `${r.daysRemaining} days remaining`}
`.trim();
}