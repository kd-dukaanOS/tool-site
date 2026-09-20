// src/utils/i18n.ts

export interface LocalizedTool {
  slug: string;
  category: string;
  name: string;
  desc: string;
}

/**
 * Registry of tools currently available in Spanish with translated content & widgets.
 */
export const SPANISH_TOOLS: LocalizedTool[] = [
  { slug: "401k-calculator", category: "finance", name: "Calculadora de 401(k)", desc: "Proyección de ahorros para la jubilación con aporte del empleador" },
  { slug: "age-calculator", category: "date-time", name: "Calculadora de Edad", desc: "Calcula tu edad exacta en años, meses y días" },
  { slug: "area-converter", category: "converters", name: "Conversor de Área", desc: "Convierte entre metros cuadrados, pies, acres y hectáreas" },
  { slug: "arr-calculator", category: "finance", name: "Calculadora de ARR", desc: "Ingreso Recurrente Anual y proyección de crecimiento SaaS" },
  { slug: "auto-loan-calculator", category: "finance", name: "Calculadora de Préstamo de Auto", desc: "Calcula tu pago mensual de auto e intereses" },
  { slug: "average-calculator", category: "math-stats", name: "Calculadora de Promedio", desc: "Calcula la media de cualquier conjunto de números" },
  { slug: "base64-tool", category: "converters", name: "Herramienta Base64", desc: "Codifica y decodifica texto en Base64 al instante" },
  { slug: "birthday-calculator", category: "date-time", name: "Calculadora de Cumpleaños", desc: "Cuenta regresiva y días faltantes para tu cumpleaños" },
  { slug: "bmi-calculator", category: "health", name: "Calculadora de IMC", desc: "Índice de Masa Corporal y rango de peso saludable" },
  { slug: "bmr-calculator", category: "health", name: "Calculadora de TMB", desc: "Tasa Metabólica Basal y calorías quemadas en reposo" },
  { slug: "body-fat-calculator", category: "health", name: "Calculadora de Grasa Corporal", desc: "Porcentaje de grasa corporal con método de la Marina" },
  { slug: "bonus-calculator", category: "finance", name: "Calculadora de Bono", desc: "Calcula tu bono bruto y neto después de impuestos" },
  { slug: "break-even-calculator", category: "finance", name: "Calculadora de Punto de Equilibrio", desc: "Unidades e ingresos necesarios para cubrir costos" },
  { slug: "burn-rate-calculator", category: "business", name: "Calculadora de Tasa de Consumo (Burn Rate)", desc: "Calcula el consumo de caja y runway de tu startup" },
  { slug: "business-days-calculator", category: "date-time", name: "Calculadora de Días Hábiles", desc: "Cuenta días laborables excluyendo fines de semana y festivos" },
  { slug: "business-valuation-calculator", category: "finance", name: "Calculadora de Valoración de Negocios", desc: "Estima el valor de tu negocio con múltiplos de ingresos y utilidad" },
  { slug: "cagr-calculator", category: "finance", name: "Calculadora de CAGR", desc: "Tasa de crecimiento anual compuesta de tus inversiones" },
];

export const SPANISH_CATEGORIES = [
  { slug: "finance", name: "Finanzas", description: "Calculadoras para préstamos, ahorros, inversiones y nómina." },
  { slug: "health", name: "Salud", description: "Herramientas de salud, peso ideal, calorías y acondicionamiento físico." },
  { slug: "converters", name: "Conversores", description: "Conversores de unidades, codificación y formatos." },
  { slug: "date-time", name: "Fecha y Hora", description: "Calculadoras de edad, días laborables y fechas." },
  { slug: "business", name: "Negocios", description: "Métricas de crecimiento, tasa de consumo y finanzas de startups." },
  { slug: "math-stats", name: "Matemáticas", description: "Aritmética, porcentajes, promedios y herramientas estadísticas." },
];

export const SPANISH_STATIC_PAGES = [
  "/es/about/",
  "/es/contact/",
  "/es/privacy-policy/",
  "/es/terms/",
  "/es/bookmarks/",
  "/es/tools/",
];

const spanishToolSlugs = new Set(SPANISH_TOOLS.map((t) => t.slug));
const spanishToolPathMap = new Map<string, string>();
for (const t of SPANISH_TOOLS) {
  spanishToolPathMap.set(`/${t.category}/${t.slug}/`, `/es/${t.category}/${t.slug}/`);
  spanishToolPathMap.set(`/${t.category}/${t.slug}`, `/es/${t.category}/${t.slug}/`);
}

/**
 * Check if a tool slug has a Spanish version.
 */
export function hasSpanishTool(slug: string): boolean {
  return spanishToolSlugs.has(slug);
}

/**
 * Find localized tool metadata by slug or English name.
 */
export function findSpanishTool(slugOrName: string): LocalizedTool | undefined {
  const norm = slugOrName.toLowerCase().trim();
  return SPANISH_TOOLS.find((t) => t.slug.toLowerCase() === norm || t.name.toLowerCase() === norm);
}

/**
 * Normalize a pathname for consistent routing checks (always with trailing slash).
 */
export function normalizePath(path: string): string {
  const clean = path.split("?")[0].split("#")[0];
  if (!clean.endsWith("/")) {
    return clean + "/";
  }
  return clean;
}

/**
 * Resolve bidirectional alternate URLs for canonical & hreflang tags.
 */
export function getAlternateUrls(currentPath: string, lang: string = "en"): {
  en?: string;
  es?: string;
  xDefault?: string;
} {
  const path = normalizePath(currentPath);

  // Homepages
  if (path === "/" || path === "/es/") {
    return {
      en: "/",
      es: "/es/",
      xDefault: "/",
    };
  }

  // Static site pages
  const staticPairs: Record<string, string> = {
    "/about/": "/es/about/",
    "/contact/": "/es/contact/",
    "/privacy-policy/": "/es/privacy-policy/",
    "/terms/": "/es/terms/",
    "/bookmarks/": "/es/bookmarks/",
    "/tools/": "/es/tools/",
  };

  for (const [enPath, esPath] of Object.entries(staticPairs)) {
    if (path === enPath || path === esPath) {
      return {
        en: enPath,
        es: esPath,
        xDefault: enPath,
      };
    }
  }

  // Active Category Pages
  for (const cat of SPANISH_CATEGORIES) {
    const enCat = `/${cat.slug}/`;
    const esCat = `/es/${cat.slug}/`;
    if (path === enCat || path === esCat) {
      return {
        en: enCat,
        es: esCat,
        xDefault: enCat,
      };
    }
  }

  // If on a Spanish tool page
  if (path.startsWith("/es/")) {
    const rawEnglish = path.replace(/^\/es/, "");
    // Check if valid Spanish tool
    const foundTool = SPANISH_TOOLS.find(
      (t) => path === `/es/${t.category}/${t.slug}/`
    );
    if (foundTool) {
      const enUrl = `/${foundTool.category}/${foundTool.slug}/`;
      return {
        en: enUrl,
        es: path,
        xDefault: enUrl,
      };
    }
    // Fallback for Spanish page without exact tool match
    return {
      es: path,
    };
  }

  // If on an English page: check if Spanish tool version exists
  const matchingSpanishPath = spanishToolPathMap.get(path);
  if (matchingSpanishPath) {
    return {
      en: path,
      es: matchingSpanishPath,
      xDefault: path,
    };
  }

  // English page with NO Spanish counterpart:
  // MUST NOT emit Spanish hreflang to avoid 404 links!
  return {
    en: path,
    xDefault: path,
  };
}
