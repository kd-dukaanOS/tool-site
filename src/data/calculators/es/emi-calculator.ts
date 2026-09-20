// src/data/calculators/es/emi-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const emiCalculatorContentEs = {
  meta: {
    seoTitle: "Calculadora de Cuota de Préstamo (EMI) — Interés y Amortización",
    metaDescription: "Calcula tu cuota mensual de préstamo (EMI), el interés total y el cronograma de amortización al instante. Calculadora gratis para préstamos de vivienda, auto y personales.",
    canonicalSlug: "/es/finance/emi-calculator",
    ogTitle: "Calculadora de Cuota de Préstamo (EMI)",
    ogDescription: "Calcula al instante tu cuota mensual, interés total y cronograma de pagos.",
    twitterTitle: "Calculadora de Cuota de Préstamo Gratis",
    twitterDescription: "Calcula la cuota mensual de tu préstamo, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Cuota de Préstamo (EMI) encuentra tu cuota mensual fija, el interés total y el desglose completo de pagos para cualquier monto de préstamo, tasa de interés y plazo — esencial antes de solicitar un préstamo de vivienda, auto o personal.",
  },

  about: {
    text: `La Cuota Mensual Fija (EMI, por sus siglas en inglés) es el monto fijo que pagas cada mes por un préstamo, cubriendo tanto el capital como el interés.

Es útil para planear la capacidad de pago antes de tomar un préstamo, comparar ofertas entre distintos bancos, y entender cuánto interés total pagarás durante la vida del préstamo.

Esta herramienta también ofrece un desglose de amortización año por año, y un análisis que muestra cómo pagos mensuales extra pueden reducir el interés y acortar el plazo del préstamo.

Limitaciones: asume una tasa de interés fija durante todo el plazo, así que los préstamos de tasa variable pueden ver cambios en la cuota o el plazo con el tiempo; tampoco incluye comisiones de apertura ni otros cargos únicos.

Usa esta herramienta antes de comprometerte con cualquier préstamo para entender el costo real de endeudarte.`,
  },

  formula: {
    formula: "EMI = [P × R × (1+R)^N] ÷ [(1+R)^N − 1]",
    variables: [
      { symbol: "P", meaning: "Monto principal del préstamo" },
      { symbol: "R", meaning: "Tasa de interés mensual (tasa anual ÷ 12 ÷ 100)" },
      { symbol: "N", meaning: "Número total de cuotas mensuales" },
    ],
    explanation: "La fórmula distribuye el capital y el interés compuesto de manera uniforme a lo largo del plazo del préstamo, generando una cuota mensual fija.",
    interpretation: "Por ejemplo, un préstamo de $20,000 a una tasa del 9% anual durante 20 años da una cuota mensual de aproximadamente $180.",
  },

  steps: [
    "Ingresa el monto del préstamo (capital).",
    "Ingresa la tasa de interés anual.",
    "Ingresa el plazo del préstamo en años.",
    "Haz clic en Calcular.",
    "Revisa tu cuota mensual (EMI).",
    "Revisa el interés total y el pago total durante todo el plazo.",
    "Revisa el cronograma de amortización año por año.",
    "Usa el análisis de prepago para ver el ahorro potencial de interés.",
  ],

  examples: [
    { inputs: "$20,000 al 9% durante 20 años", result: "Cuota Mensual: ~$180", explanation: "Escenario típico de un préstamo de vivienda." },
    { inputs: "$25,000 al 11% durante 5 años", result: "Cuota Mensual: ~$544", explanation: "Escenario típico de un préstamo de auto." },
    { inputs: "$10,000 al 14% durante 3 años", result: "Cuota Mensual: ~$342", explanation: "Escenario típico de un préstamo personal." },
    { inputs: "$50,000 al 8.5% durante 10 años", result: "Cuota Mensual: ~$620", explanation: "Préstamo a plazo medio, con menor interés total frente a un plazo más largo." },
  ],

  practicalUses: [
    "Planear la capacidad de pago antes de tomar un préstamo de vivienda",
    "Comparar la cuota mensual entre distintos bancos o tasas de interés",
    "Entender el costo total de interés durante el plazo del préstamo",
    "Decidir entre un plazo más corto o más largo",
    "Verificar el impacto de un prepago en el ahorro de interés",
    "Presupuestar tus gastos mensuales en torno a una cuota fija",
    "Comparar la opción de préstamo versus arrendamiento (leasing) para un vehículo",
    "Estimar el pago de un préstamo estudiantil antes de inscribirte",
    "Planear el pago de un préstamo de negocio frente al flujo de caja proyectado",
    "Verificar tu capacidad de pago antes de solicitar un préstamo",
  ],

  expertTips: [
    "Un plazo más largo reduce la cuota mensual pero aumenta significativamente el interés total pagado.",
    "Incluso pequeños pagos extra mensuales pueden ahorrar una cantidad considerable de interés — revisa la sección de análisis.",
    "Compara el porcentaje de interés total, no solo el monto de la cuota, entre distintas ofertas de préstamo.",
    "Prepagar temprano en el plazo del préstamo ahorra más interés que prepagar más adelante.",
    "Verifica si existen cargos por prepago o cancelación anticipada antes de hacer pagos extra.",
    "Los préstamos de tasa fija versus variable pueden cambiar tu cuota con el tiempo — aclara esto con tu prestamista.",
    "Usa el cronograma de amortización para ver cuánto de las primeras cuotas va hacia interés versus capital.",
    "Mantén el total de cuotas mensuales por debajo de aproximadamente el 40% de tu ingreso mensual para una capacidad de pago saludable.",
    "Considera las comisiones de apertura y seguros por separado del monto de la cuota.",
    "Refinanciar a una tasa más baja puede valer la pena si la diferencia de tasa supera aproximadamente 1-1.5 puntos porcentuales.",
  ],

  commonMistakes: [
    { mistake: "Enfocarse solo en el monto de la cuota, no en el interés total", fix: "Compara el interés total pagado entre distintas opciones de plazo, no solo la cifra mensual." },
    { mistake: "Elegir el plazo máximo sin verificar el costo total", fix: "Un plazo más largo reduce la cuota, pero puede duplicar o triplicar el interés total pagado." },
    { mistake: "Ignorar comisiones de apertura y otros cargos del préstamo", fix: "Incluye los cargos únicos por separado del cálculo de la cuota mensual." },
    { mistake: "No considerar cambios en tasas de interés variables", fix: "En préstamos de tasa variable, la cuota o el plazo pueden cambiar si las tasas se mueven — planea con un margen." },
    { mistake: "Sobreestimar el ahorro de prepago sin verificar cargos", fix: "Confirma los términos de cancelación anticipada o prepago antes de hacer pagos extra." },
    { mistake: "Tomar el monto máximo de préstamo elegible sin margen", fix: "Pide un préstamo según tu capacidad de pago cómoda, no solo el máximo elegible según el banco." },
  ],

  faq: [
    { q: "¿Qué es la cuota mensual de un préstamo (EMI)?", a: "Es el pago mensual fijo que haces hacia un préstamo, cubriendo tanto el capital como el interés." },
    { q: "¿Cómo se calcula la cuota mensual de un préstamo?", a: "Se calcula usando el monto del préstamo, la tasa de interés mensual y el número de cuotas en una fórmula estándar de amortización." },
    { q: "¿Un plazo más largo reduce la cuota mensual?", a: "Sí, distribuir el préstamo en más meses reduce la cuota mensual, pero aumenta el interés total pagado durante la vida del préstamo." },
    { q: "¿Cuánto de mi cuota va hacia interés al principio?", a: "En los primeros años, una porción mayor de cada cuota va hacia interés, mientras que la porción de capital aumenta gradualmente con el tiempo." },
    { q: "¿El prepago puede reducir mi interés total?", a: "Sí, prepagar reduce el capital pendiente, lo que disminuye el interés futuro y puede acortar el plazo del préstamo." },
    { q: "¿Cuál es la diferencia entre tasa fija y tasa sobre saldo decreciente?", a: "El saldo decreciente calcula el interés solo sobre el capital pendiente cada mes, mientras que la tasa fija cobra interés sobre el monto original completo durante todo el plazo — el saldo decreciente es más común y más económico." },
    { q: "¿Esta calculadora funciona para todo tipo de préstamos?", a: "Sí, funciona para préstamos de vivienda, auto, personales o cualquier préstamo a plazo con tasa fija, usando la misma fórmula estándar de cuota mensual." },
    { q: "¿Qué pasa si no pago una cuota?", a: "No pagar una cuota generalmente genera cargos por mora y puede afectar tu historial crediticio; revisa el contrato de tu préstamo para conocer los términos específicos de penalización." },
    { q: "¿Cómo puedo reducir el monto de mi cuota mensual?", a: "Puedes reducir la cuota eligiendo un plazo más largo, negociando una tasa de interés más baja, o haciendo un pago inicial mayor para reducir el capital." },
    { q: "¿Qué es un cronograma de amortización?", a: "Es un desglose año a año (o mes a mes) que muestra cuánto de cada cuota va hacia capital versus interés durante todo el plazo del préstamo." },
    { q: "¿La cuota mensual es igual todos los meses?", a: "Sí, para préstamos de tasa fija la cuota se mantiene constante durante todo el plazo, aunque la proporción entre capital e interés cambia cada mes." },
    { q: "¿Cómo afecta el pago inicial (enganche) a mi cuota mensual?", a: "Un pago inicial mayor reduce el monto principal del préstamo, lo que baja directamente tanto la cuota mensual como el interés total pagado." },
    { q: "¿Esta calculadora incluye comisiones de apertura del préstamo?", a: "No, las comisiones de apertura, seguros y otros cargos son independientes del cálculo de la cuota y deben sumarse por separado." },
    { q: "¿Puedo calcular la cuota de un préstamo con período de gracia?", a: "Esta calculadora asume una cuota estándar desde el primer mes; para períodos de gracia, el interés normalmente se acumula por separado durante el período de diferimiento." },
  ],

  relatedCalculators: ["Calculadora de Interés Compuesto", "Calculadora de CAGR", "Calculadora de Punto de Equilibrio", "Calculadora de Descuentos"],

  youMayLike: pickYouMayLike("emi-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Cuota de Préstamo (EMI)",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};