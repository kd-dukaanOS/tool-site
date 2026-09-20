// src/data/calculators/es/uk-national-insurance-calculator.ts
// NOTE: slug per i18n file is "uk-national-insurance-calculator" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const ukNationalInsuranceCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Seguro Nacional (National Insurance) UK 2026",
    metaDescription: "Calcula tu contribución de Seguro Nacional Clase 1 en el Reino Unido, empleado y empleador. Gratis.",
    canonicalSlug: "/es/finance/uk-national-insurance-calculator",
    ogTitle: "Calculadora de Seguro Nacional (UK)",
    ogDescription: "Calcula tu contribución de National Insurance en el Reino Unido al instante.",
    twitterTitle: "Calculadora de National Insurance UK",
    twitterDescription: "Calcula tu contribución de Seguro Nacional del Reino Unido.",
  },
  hero: {
    text: "La Calculadora de Seguro Nacional (National Insurance) estima tu contribución Clase 1 en el Reino Unido a partir de tu salario bruto anual, mostrando la parte del empleado y del empleador por separado.",
  },
  about: {
    text: `El National Insurance (Seguro Nacional) es una contribución obligatoria en el Reino Unido que financia beneficios estatales como la pensión, el subsidio por desempleo y el Servicio Nacional de Salud (NHS), pagada tanto por empleados como por empleadores.

Esta calculadora recibe tu salario bruto anual en libras esterlinas (GBP) y calcula tu contribución Clase 1 de Seguro Nacional sobre los ingresos que superan el umbral primario, mostrando por separado la porción que paga el empleado y la que paga el empleador.

Limitaciones: esta calculadora no cubre categorías reducidas de National Insurance (como algunas viudas o ciertos trabajadores por cuenta propia); verifica siempre las cifras actuales publicadas por HMRC para tu situación específica.`,
  },
  formula: {
    formula: "Contribución NI = (Salario − Umbral Primario) × Tasa Aplicable",
    variables: [
      { symbol: "Umbral Primario", meaning: "Nivel de ingresos anuales a partir del cual comienza a aplicarse el Seguro Nacional del empleado" },
      { symbol: "Contribución del Empleador", meaning: "Porción adicional que paga el empleador, calculada sobre un umbral y tasa distintos a los del empleado" },
    ],
    explanation: "Se calcula la porción del salario que supera el umbral primario correspondiente al empleado, y se le aplica la tasa de National Insurance vigente; de forma separada, se calcula la contribución del empleador sobre su propio umbral y tasa establecidos por HMRC.",
    interpretation: "Por ejemplo, con un salario que supera el umbral primario en £10,000, la contribución del empleado se calcula aplicando la tasa vigente sobre ese exceso, mientras el empleador paga su propia contribución adicional.",
  },
  steps: [
    "Ingresa tu salario bruto anual en libras esterlinas (GBP).",
    "Haz clic en Calcular.",
    "Revisa tus ingresos sobre el umbral, la contribución del empleado, del empleador y el total.",
  ],
  examples: [
    { inputs: "Salario Bruto: £35,000", result: "Contribución del empleado calculada sobre el exceso del umbral primario", explanation: "Un salario típico de clase media en el Reino Unido." },
    { inputs: "Salario Bruto: £12,000", result: "Contribución mínima o nula si está bajo el umbral", explanation: "Salarios bajo el umbral primario pueden no generar contribución de National Insurance del empleado." },
    { inputs: "Salario Bruto: £60,000", result: "Contribución de empleado y empleador significativamente mayor", explanation: "A mayor salario, mayor es la base sujeta a la contribución de Seguro Nacional." },
  ],
  practicalUses: [
    "Estimar cuánto se deducirá de tu salario neto por National Insurance",
    "Comparar el costo total de contratación (salario + NI del empleador) para un empleador en el Reino Unido",
    "Planear tu presupuesto personal considerando las deducciones obligatorias de tu salario",
    "Verificar si las deducciones de tu nómina coinciden con lo esperado según tu salario bruto",
    "Entender la diferencia entre lo que aporta el empleado y lo que aporta el empleador",
  ],
  expertTips: [
    "El National Insurance del empleado se deduce automáticamente de tu nómina (PAYE); no necesitas pagarlo por separado si eres empleado tradicional.",
    "El empleador paga su propia contribución de National Insurance además del salario bruto, lo cual representa un costo adicional para el negocio, no una deducción del empleado.",
    "Existen categorías reducidas de National Insurance para ciertos grupos (como algunas viudas o personas cerca de la edad de jubilación); esta calculadora no las cubre.",
    "Los umbrales y tasas de National Insurance se actualizan anualmente por HMRC; verifica siempre las cifras vigentes para el año fiscal correspondiente.",
  ],
  commonMistakes: [
    { mistake: "Confundir la contribución del empleado con la del empleador", fix: "Son dos cálculos separados: el empleado paga sobre su propio umbral, y el empleador paga adicionalmente sobre el suyo, sin descontarse del salario del empleado." },
    { mistake: "Asumir que todos los trabajadores pagan la misma tasa de National Insurance", fix: "Existen distintas categorías de National Insurance con tasas diferentes; esta calculadora asume la categoría estándar Clase 1." },
    { mistake: "No verificar los umbrales vigentes del año fiscal actual", fix: "Los umbrales y tasas cambian cada año fiscal; confirma siempre las cifras actuales de HMRC antes de tomar decisiones financieras importantes." },
    { mistake: "Ignorar el National Insurance al calcular el costo total de un empleado para el negocio", fix: "Los empleadores deben considerar su propia contribución de NI como parte del costo total de nómina, no solo el salario bruto." },
  ],
  faq: [
    { q: "¿Qué es el National Insurance (Seguro Nacional) en el Reino Unido?", a: "Es una contribución obligatoria que financia beneficios estatales como la pensión, el subsidio por desempleo y el NHS, pagada tanto por empleados como por empleadores en el Reino Unido." },
    { q: "¿Cómo se calcula el National Insurance de un empleado?", a: "Se aplica la tasa vigente de National Insurance Clase 1 sobre la porción del salario que supera el umbral primario establecido por HMRC." },
    { q: "¿Cuál es la diferencia entre la contribución del empleado y del empleador?", a: "El empleado paga su contribución deducida directamente de su salario; el empleador paga una contribución adicional separada, que representa un costo extra para el negocio, no una deducción del salario del empleado." },
    { q: "¿Todos los trabajadores pagan National Insurance?", a: "No, existen umbrales mínimos de ingresos bajo los cuales no se requiere contribución, además de categorías reducidas para grupos específicos como ciertos jubilados o viudas." },
    { q: "¿El National Insurance es lo mismo que el impuesto sobre la renta (Income Tax)?", a: "No, son contribuciones separadas: el Income Tax financia el gasto público general, mientras que el National Insurance financia específicamente beneficios como la pensión estatal y el NHS." },
    { q: "¿Qué es el 'Class 1 National Insurance'?", a: "Es la categoría de National Insurance que aplica a empleados y empleadores en un empleo tradicional (PAYE), la más común entre trabajadores asalariados en el Reino Unido." },
    { q: "¿Los trabajadores independientes pagan el mismo National Insurance que los empleados?", a: "No, los trabajadores autónomos generalmente pagan categorías distintas (Class 2 o Class 4), con tasas y umbrales diferentes a los de Class 1 para empleados." },
    { q: "¿Por qué mi empleador paga National Insurance si ya me lo descuenta a mí?", a: "Son dos contribuciones separadas: la tuya se descuenta de tu salario bruto, mientras que la del empleador es un costo adicional que paga la empresa, sin afectar tu salario neto." },
    { q: "¿Cómo afecta el National Insurance a mi pensión estatal futura?", a: "Tus contribuciones de National Insurance a lo largo de tu vida laboral determinan tu elegibilidad y el monto de tu pensión estatal al momento de jubilarte." },
    { q: "¿Qué pasa si mi salario está por debajo del umbral primario?", a: "Si tu salario está por debajo del umbral primario, es posible que no debas pagar contribución de National Insurance del empleado, aunque igual podrías acumular créditos si tu ingreso supera el umbral de calificación." },
    { q: "¿Los umbrales de National Insurance cambian cada año?", a: "Sí, HMRC actualiza los umbrales y tasas de National Insurance generalmente cada año fiscal (que inicia en abril en el Reino Unido)." },
    { q: "¿Puedo reducir mi contribución de National Insurance?", a: "Algunas circunstancias específicas (como ciertas exenciones para jubilados que trabajan o categorías reducidas) pueden reducir la contribución, pero para la mayoría de empleados estándar la tasa es fija." },
    { q: "¿Esta calculadora aplica para trabajadores fuera del Reino Unido?", a: "No, el National Insurance es un sistema específico del Reino Unido; otros países tienen sus propios sistemas de seguridad social con reglas y tasas distintas." },
    { q: "¿Dónde puedo verificar las tasas oficiales actuales de National Insurance?", a: "Las tasas y umbrales oficiales se publican en el sitio web de HMRC (Her Majesty's Revenue and Customs), y se recomienda verificarlas directamente para el año fiscal vigente." },
  ],
  relatedCalculators: ["Calculadora de Impuesto sobre la Renta (UK)", "Calculadora de Salario Neto (UK)", "Calculadora de Pensión Estatal", "Calculadora de PAYE"],
  youMayLike: pickYouMayLike("uk-national-insurance-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Seguro Nacional (National Insurance)",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};