// src/data/calculators/es/salary-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const salaryCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Salario CTC — Desglose de Salario Neto en India",
    metaDescription: "Desglosa tu CTC anual en salario base, HRA, PF y asignación especial para calcular tu salario neto mensual y anual. Calculadora gratis para India.",
    canonicalSlug: "/es/finance/salary-calculator",
    ogTitle: "Calculadora de Salario CTC a Salario Neto",
    ogDescription: "Descubre tu salario neto real a partir de tu CTC anual.",
    twitterTitle: "Calculadora de Salario Gratis",
    twitterDescription: "Calcula tu salario neto a partir de tu CTC, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Salario desglosa tu CTC (Costo Total para la Empresa) anual en salario base, HRA, asignación especial, contribuciones de PF e impuesto profesional, para mostrarte exactamente cuánto recibirás como salario neto mensual y anual.",
  },

  about: {
    text: `El CTC (Cost to Company) es el costo total que le representas a tu empleador, pero no es lo mismo que el salario que realmente recibes en tu cuenta bancaria. El CTC incluye componentes como el salario base, HRA (asignación de vivienda), contribución del empleador al PF, y otros beneficios — algunos de los cuales nunca llegan a tu bolsillo directamente.

Esta calculadora toma tu CTC anual y lo desglosa según los porcentajes estándar de la industria: salario base (comúnmente 35-50% del CTC), HRA (comúnmente 40-50% del salario base), contribuciones de PF del empleado y empleador (estándar 12% cada uno), e impuesto profesional mensual (varía según el estado, comúnmente ₹200/mes).

El resultado te muestra tu salario neto mensual y anual real, junto con el desglose completo de cada componente — para que entiendas exactamente a dónde va tu CTC y cuánto realmente recibes en tu cuenta.`,
  },

  formula: {
    formula: "Salario Neto = CTC − PF del Empleador − PF del Empleado − Impuesto Profesional",
    variables: [
      { symbol: "Salario Base", meaning: "CTC × Porcentaje de Base (comúnmente 35-50%)" },
      { symbol: "HRA", meaning: "Salario Base × Porcentaje de HRA (comúnmente 40-50%)" },
      { symbol: "Asignación Especial", meaning: "Salario Bruto − Base − HRA (el resto después de restar componentes fijos)" },
    ],
    explanation: "El salario base se calcula como un porcentaje del CTC, el HRA como un porcentaje del salario base, y el PF del empleador se resta del CTC para obtener el salario bruto. De ese bruto se restan el PF del empleado y el impuesto profesional para llegar al salario neto final.",
    interpretation: "Por ejemplo, con un CTC de ₹1,200,000, 40% de base, 50% de HRA, 12% de PF en ambos lados, y ₹200/mes de impuesto profesional, el salario neto mensual resulta en aproximadamente ₹85,000-90,000, dependiendo de los porcentajes exactos usados.",
  },

  steps: [
    "Ingresa tu CTC anual.",
    "Ajusta el porcentaje de salario base si es diferente al 40% por defecto.",
    "Ajusta el porcentaje de HRA si es diferente al 50% por defecto.",
    "Ajusta los porcentajes de PF del empleado y empleador si son diferentes al 12% estándar.",
    "Ajusta el impuesto profesional mensual según tu estado.",
    "Haz clic en Calcular.",
    "Revisa tu salario neto mensual y anual, junto con el desglose completo de componentes.",
  ],

  examples: [
    { inputs: "CTC: ₹1,200,000, Base: 40%, HRA: 50%, PF: 12%/12%, Impuesto Profesional: ₹200/mes", result: "Salario Neto Mensual: ~₹85,000-90,000", explanation: "Un desglose típico con los porcentajes estándar de la industria." },
    { inputs: "CTC: ₹800,000, Base: 45%, HRA: 40%, PF: 12%/12%, Impuesto Profesional: ₹200/mes", result: "Salario Neto Mensual: ~₹57,000-60,000", explanation: "Un CTC menor con un porcentaje de base ligeramente más alto." },
    { inputs: "CTC: ₹2,000,000, Base: 35%, HRA: 50%, PF: 12%/12%, Impuesto Profesional: ₹200/mes", result: "Salario Neto Mensual: ~₹145,000-150,000", explanation: "Un CTC más alto con un porcentaje de base más conservador, típico de roles senior." },
  ],

  practicalUses: [
    "Entender cuánto salario neto real recibirás al aceptar una oferta de trabajo con un CTC específico",
    "Comparar ofertas de trabajo que usan CTC en vez de salario neto",
    "Verificar tu recibo de nómina contra un desglose estándar esperado",
    "Negociar tu salario entendiendo cómo se distribuyen los componentes del CTC",
    "Planear tu presupuesto mensual conociendo tu salario neto real, no solo el CTC anunciado",
  ],

  expertTips: [
    "Un CTC más alto no siempre significa un salario neto proporcionalmente mayor — revisa siempre el desglose, ya que la contribución del empleador al PF forma parte del CTC pero no llega a tu cuenta directamente.",
    "El HRA puede ofrecer beneficios fiscales si vives en una vivienda alquilada — consulta con un asesor fiscal sobre cómo maximizar esta exención.",
    "El impuesto profesional varía según el estado en India — verifica la tasa exacta aplicable a tu ubicación.",
    "La asignación especial suele ser el componente más flexible del salario y frecuentemente el más gravado, ya que no tiene las mismas exenciones fiscales que HRA o PF.",
    "Al negociar un aumento, pregunta específicamente por el cambio en salario neto, no solo en CTC, ya que la estructura puede cambiar el resultado real.",
  ],

  commonMistakes: [
    { mistake: "Confundir CTC con el salario que realmente recibes", fix: "El CTC incluye la contribución del empleador al PF y otros beneficios que nunca llegan directamente a tu cuenta bancaria." },
    { mistake: "Comparar ofertas de trabajo solo por el número de CTC", fix: "Compara el salario neto estimado, ya que la estructura de componentes (base, HRA, PF) puede variar significativamente entre empleadores con el mismo CTC." },
    { mistake: "Olvidar el impuesto profesional en el cálculo del salario neto", fix: "Aunque es un monto pequeño, el impuesto profesional mensual reduce tu salario neto y varía según el estado." },
    { mistake: "Asumir porcentajes estándar sin verificar tu recibo de nómina real", fix: "Los porcentajes de base, HRA y PF pueden variar entre empleadores — verifica siempre tu estructura salarial real." },
  ],

  faq: [
    { q: "¿Qué es el CTC (Cost to Company)?", a: "Es el costo total anual que le representas a tu empleador, incluyendo tu salario, beneficios, y contribuciones del empleador como el PF — no es lo mismo que tu salario neto en mano." },
    { q: "¿Por qué mi salario neto es menor que mi CTC?", a: "Porque el CTC incluye componentes como la contribución del empleador al PF, que nunca llega directamente a tu cuenta bancaria, además de deducciones como el PF del empleado e impuesto profesional." },
    { q: "¿Qué porcentaje del CTC suele ser el salario base?", a: "Comúnmente entre 35% y 50% del CTC, aunque esto varía según la empresa y la política salarial específica." },
    { q: "¿Qué es el HRA y cómo se calcula?", a: "HRA (House Rent Allowance) es una asignación de vivienda, comúnmente calculada como 40-50% del salario base, que puede ofrecer beneficios fiscales si vives en alquiler." },
    { q: "¿Cuál es la diferencia entre PF del empleado y del empleador?", a: "Ambos son contribuciones al Fondo de Previsión (Provident Fund), generalmente 12% del salario base cada uno; el del empleado se descuenta de tu salario, mientras que el del empleador es un costo adicional para la empresa (parte del CTC)." },
    { q: "¿El PF del empleador se incluye en mi salario bruto?", a: "No, el PF del empleador es parte de tu CTC pero se resta antes de llegar al salario bruto, ya que no es dinero que recibas directamente en tu pago." },
    { q: "¿Qué es el impuesto profesional?", a: "Es un impuesto estatal en India, generalmente un monto fijo mensual (comúnmente alrededor de ₹200), que varía según el estado donde trabajas." },
    { q: "¿Puedo negociar la estructura de mi salario (base, HRA, etc.)?", a: "En algunas empresas sí, especialmente en roles senior; ajustar la estructura puede optimizar tu salario neto y beneficios fiscales según tu situación personal." },
  ],

  relatedCalculators: ["Calculadora de Impuesto sobre la Renta", "Calculadora de HRA", "Calculadora de PF", "Calculadora de Aumento Salarial"],

  youMayLike: pickYouMayLike("salary-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Salario (CTC a Neto)",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};