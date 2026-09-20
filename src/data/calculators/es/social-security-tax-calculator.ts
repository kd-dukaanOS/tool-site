// src/data/calculators/es/social-security-tax-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const socialSecurityTaxCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Impuesto de Seguro Social 2026 — Tope Salarial",
    metaDescription: "Calcula tu impuesto de Seguro Social 2026 usando el tope salarial de $184,500, tanto para empleados (6.2%) como para trabajadores independientes (12.4%).",
    canonicalSlug: "/es/finance/social-security-tax-calculator",
    ogTitle: "Calculadora de Impuesto de Seguro Social",
    ogDescription: "Descubre cuánto pagas de impuesto de Seguro Social y si llegaste al tope salarial.",
    twitterTitle: "Calculadora de Impuesto SS Gratis",
    twitterDescription: "Calcula tu impuesto de Seguro Social 2026, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Impuesto de Seguro Social calcula cuánto pagas del impuesto de Seguro Social (6.2% como empleado o 12.4% como trabajador independiente) usando el tope salarial de 2026, y te indica si tus ingresos ya superaron ese límite.",
  },

  about: {
    text: `El impuesto de Seguro Social (Social Security tax) es una parte del impuesto FICA en Estados Unidos que financia el programa de beneficios de jubilación, discapacidad y sobrevivientes. A diferencia del impuesto sobre la renta, este impuesto tiene un tope salarial anual — una vez que tus ingresos superan ese monto, no se paga más impuesto de Seguro Social sobre el excedente.

Esta calculadora usa el tope salarial oficial de 2026, $184,500, para calcular cuánto impuesto de Seguro Social debes pagar según tu tipo de empleo: los empleados pagan 6.2% (con su empleador igualando esa cantidad), mientras que los trabajadores independientes pagan 12.4% (cubriendo ambas partes, empleado y empleador).

El resultado te muestra tu impuesto de Seguro Social, tus salarios gravables (limitados al tope), cuánto de tu ingreso está por encima del tope (si aplica), y si ya alcanzaste el límite máximo para el año.`,
  },

  formula: {
    formula: "Impuesto de Seguro Social = mín(Salario Anual, $184,500) × Tasa",
    variables: [
      { symbol: "Tasa Empleado", meaning: "6.2% sobre salarios hasta el tope de $184,500" },
      { symbol: "Tasa Trabajador Independiente", meaning: "12.4% sobre ingresos netos hasta el tope de $184,500" },
      { symbol: "Tope Salarial 2026", meaning: "$184,500 — el máximo de ingresos sujetos a este impuesto" },
    ],
    explanation: "Se limita el salario anual (o ingreso neto si eres independiente) al tope de $184,500, y a esa cifra se le aplica la tasa correspondiente según tu tipo de empleo; cualquier ingreso por encima del tope no paga este impuesto adicional.",
    interpretation: "Por ejemplo, con un salario de $150,000 como empleado, el impuesto de Seguro Social es 6.2% × $150,000 = $9,300; con un salario de $200,000, el impuesto se limita a 6.2% × $184,500 = $11,439, ya que el resto está por encima del tope.",
  },

  steps: [
    "Ingresa tu salario anual o ingreso neto (si eres trabajador independiente).",
    "Selecciona tu tipo de empleo: empleado o trabajador independiente.",
    "Haz clic en Calcular.",
    "Revisa tu impuesto de Seguro Social, salarios gravables, y si alcanzaste el tope de 2026.",
  ],

  examples: [
    { inputs: "Salario: $80,000, Tipo: Empleado", result: "Impuesto SS: $4,960", explanation: "Un ingreso por debajo del tope, pagando la tasa completa del 6.2% sobre todo el salario." },
    { inputs: "Salario: $200,000, Tipo: Empleado", result: "Impuesto SS: $11,439 (en el tope)", explanation: "El impuesto se limita al tope de $184,500, sin cobrar sobre los $15,500 restantes." },
    { inputs: "Ingreso Neto: $120,000, Tipo: Trabajador Independiente", result: "Impuesto SS: $14,880", explanation: "Los trabajadores independientes pagan la tasa combinada del 12.4%, cubriendo ambas partes del impuesto." },
  ],

  practicalUses: [
    "Verificar cuánto impuesto de Seguro Social pagarás este año",
    "Saber si tus ingresos ya superaron el tope salarial de 2026",
    "Estimar el impuesto de Seguro Social si eres trabajador independiente",
    "Planear tu presupuesto conociendo cuándo dejará de descontarse este impuesto de tu pago",
    "Comparar la carga fiscal entre ser empleado y ser trabajador independiente",
  ],

  expertTips: [
    "Si trabajas para más de un empleador y tus ingresos combinados superan el tope, es posible que hayas pagado de más — puedes reclamar el exceso como crédito en tu declaración de impuestos.",
    "Los trabajadores independientes pueden deducir la mitad de su impuesto de Seguro Social (la parte equivalente al empleador) en su declaración de impuestos, reduciendo su ingreso gravable.",
    "El tope salarial aumenta cada año según el índice de salarios promedio nacional — verifica la cifra actualizada cada año fiscal.",
    "El Seguro Social tiene un tope, pero el impuesto de Medicare (1.45%) no lo tiene y se aplica a todos tus ingresos sin límite.",
    "Una vez que alcanzas el tope salarial en el año, tu empleador debe dejar de descontarte el impuesto de Seguro Social hasta el siguiente año fiscal.",
  ],

  commonMistakes: [
    { mistake: "Pensar que el impuesto de Seguro Social se aplica sin límite como el impuesto sobre la renta", fix: "El Seguro Social tiene un tope salarial anual ($184,500 en 2026) — los ingresos por encima de ese monto no pagan este impuesto adicional." },
    { mistake: "No notar que ya llegaste al tope y sigues siendo descontado", fix: "Revisa tus recibos de pago cerca de fin de año para confirmar que el descuento se detiene al alcanzar el tope." },
    { mistake: "Confundir la tasa de empleado (6.2%) con la de trabajador independiente (12.4%)", fix: "Los trabajadores independientes pagan el doble porque cubren tanto la parte del empleado como la del empleador." },
    { mistake: "No reclamar el exceso de aporte al tener varios empleos", fix: "Si trabajaste para más de un empleador y superaste el tope combinado, reclama el reembolso en tu declaración de impuestos." },
  ],

  faq: [
    { q: "¿Cuál es la tasa del impuesto de Seguro Social en 2026?", a: "Es 6.2% para empleados (igualado por el empleador) y 12.4% para trabajadores independientes, que cubren ambas partes del impuesto." },
    { q: "¿Cuál es el tope salarial del Seguro Social en 2026?", a: "El tope salarial para 2026 es $184,500; no se paga impuesto de Seguro Social sobre ingresos por encima de esa cifra." },
    { q: "¿Cuánto es el impuesto máximo de Seguro Social que puedo pagar en 2026?", a: "El máximo para un empleado es $11,439 (6.2% de $184,500); para trabajadores independientes el máximo es $22,878 (12.4% de $184,500)." },
    { q: "¿Qué pasa si mi ingreso supera el tope salarial?", a: "Una vez que tus ingresos anuales superan $184,500, no se descuenta más impuesto de Seguro Social sobre el excedente, aunque el impuesto de Medicare sigue aplicando sin límite." },
    { q: "¿Los trabajadores independientes pagan más impuesto de Seguro Social?", a: "Sí, pagan la tasa combinada del 12.4% porque cubren tanto la parte del empleado como la del empleador, aunque pueden deducir la mitad en su declaración de impuestos." },
    { q: "¿Qué pasa si trabajo para dos empleadores en el mismo año?", a: "Cada empleador aplica el tope por separado, así que podrías terminar pagando más del máximo anual entre ambos trabajos, y el exceso se te reembolsa al declarar tus impuestos." },
    { q: "¿El impuesto de Medicare tiene el mismo tope que el Seguro Social?", a: "No, el impuesto de Medicare (1.45%) no tiene tope salarial y se aplica a todos tus ingresos, incluso por encima del tope del Seguro Social." },
    { q: "¿Por qué sube el tope salarial cada año?", a: "El tope se ajusta anualmente según el índice de salarios promedio nacional, por lo que generalmente aumenta cada año conforme suben los salarios en general." },
  ],

  relatedCalculators: ["Calculadora del Seguro Social", "Calculadora de Salario Neto", "Calculadora de Tasa Efectiva de Impuestos", "Calculadora de EITC"],

  youMayLike: pickYouMayLike("social-security-tax-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Impuesto de Seguro Social",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};