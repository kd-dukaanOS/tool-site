// src/data/calculators/es/customer-acquisition-cost-calculator.ts
// NOTE: real slug is "customer-acquisition-cost-calculator" (tools_sorted.js), not "customer-acquisition-cost"
import { pickYouMayLike } from "../../calculator-pool";

export const customerAcquisitionCostCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Costo de Adquisición de Clientes (CAC) 2026",
    metaDescription: "Calcula tu Costo de Adquisición de Clientes (CAC) combinando gasto de marketing y ventas. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/customer-acquisition-cost-calculator",
    ogTitle: "Calculadora de CAC",
    ogDescription: "Descubre cuánto te cuesta adquirir cada nuevo cliente.",
    twitterTitle: "Calculadora de CAC 2026",
    twitterDescription: "Calcula tu costo de adquisición de clientes al instante.",
  },
  hero: {
    text: "La Calculadora de Costo de Adquisición de Clientes (CAC) combina tu gasto de marketing y ventas para mostrarte cuánto cuesta adquirir cada nuevo cliente, además del costo por lead.",
  },
  about: {
    text: `El CAC es una de las métricas más importantes para cualquier negocio que invierte en marketing y ventas, ya que mide la eficiencia real de tu inversión para conseguir clientes nuevos.

Esta calculadora suma tu gasto de marketing y de ventas del período, y divide ese total entre el número de clientes nuevos adquiridos para obtener el CAC; si ingresas el total de leads generados, también calcula el costo por lead.

Limitaciones: esta calculadora no compara automáticamente el CAC contra el Valor de Vida del Cliente (LTV); debes evaluar esa relación por separado para saber si tu adquisición es rentable.`,
  },
  formula: {
    formula: "CAC = (Costo de Marketing + Costo de Ventas) / Clientes Nuevos",
    variables: [
      { symbol: "Gasto Total", meaning: "Suma del costo de marketing y el costo de ventas del período" },
      { symbol: "Costo por Lead", meaning: "Gasto total dividido entre el número total de leads generados" },
    ],
    explanation: "Se suma el gasto de marketing y de ventas del período, y se divide entre el número de clientes nuevos adquiridos en ese mismo período para obtener el CAC promedio por cliente.",
    interpretation: "Por ejemplo, con $20,000 de marketing, $10,000 de ventas y 100 clientes nuevos, el CAC es de $300 por cliente adquirido.",
  },
  steps: [
    "Ingresa tu costo de marketing del período.",
    "Ingresa tu costo de ventas del período (opcional).",
    "Ingresa el número de clientes nuevos adquiridos.",
    "Opcionalmente, ingresa el total de leads generados para ver el costo por lead.",
    "Haz clic en Calcular.",
  ],
  examples: [
    { inputs: "Marketing: $20,000, Ventas: $10,000, Clientes Nuevos: 100", result: "CAC: $300", explanation: "Un negocio SaaS de tamaño mediano con inversión combinada en marketing y ventas." },
    { inputs: "Marketing: $5,000, Ventas: $0, Clientes Nuevos: 50, Leads: 500", result: "CAC: $100 | Costo por Lead: $10", explanation: "Un negocio pequeño con solo gasto de marketing y un embudo de leads medible." },
    { inputs: "Marketing: $50,000, Ventas: $30,000, Clientes Nuevos: 200", result: "CAC: $400", explanation: "Una empresa con equipo de ventas activo además de marketing digital." },
  ],
  practicalUses: [
    "Evaluar la eficiencia de tu inversión en marketing y ventas",
    "Comparar el CAC entre distintos canales de adquisición o campañas",
    "Justificar presupuesto de marketing ante inversionistas mostrando el CAC actual",
    "Verificar si el CAC es sostenible comparándolo con el Valor de Vida del Cliente (LTV)",
    "Detectar si el costo por lead está aumentando con el tiempo",
  ],
  expertTips: [
    "Una regla común en SaaS es que el LTV debe ser al menos 3 veces el CAC para que el negocio sea sostenible a largo plazo.",
    "Calcula el CAC por separado para cada canal de marketing (pagado, orgánico, referidos) para identificar dónde inviertes de forma más eficiente.",
    "Incluye siempre el costo del equipo de ventas, no solo el gasto en publicidad, para obtener un CAC realista.",
    "Monitorea el CAC mensualmente para detectar si tus canales de adquisición se están volviendo más caros.",
  ],
  commonMistakes: [
    { mistake: "Calcular el CAC usando solo el gasto en publicidad", fix: "Incluye también los salarios y comisiones del equipo de ventas involucrado en cerrar esos clientes." },
    { mistake: "No comparar el CAC contra el LTV del cliente", fix: "Un CAC bajo no garantiza rentabilidad si el cliente genera poco valor a lo largo del tiempo; compara ambas métricas." },
    { mistake: "Mezclar clientes nuevos con renovaciones o upsells", fix: "El CAC debe calcularse solo sobre clientes completamente nuevos, no sobre expansión de cuentas existentes." },
    { mistake: "Ignorar el costo por lead al evaluar el embudo de marketing", fix: "El costo por lead te ayuda a identificar si el problema está en generar leads o en convertirlos en clientes." },
  ],
  faq: [
    { q: "¿Cómo se calcula el Costo de Adquisición de Clientes (CAC)?", a: "Se suma el gasto total de marketing y ventas del período y se divide entre el número de clientes nuevos adquiridos en ese mismo período." },
    { q: "¿Qué es un buen CAC para mi negocio?", a: "Depende de tu industria y modelo de negocio; generalmente se considera saludable cuando el Valor de Vida del Cliente (LTV) es al menos 3 veces el CAC." },
    { q: "¿Qué diferencia hay entre CAC y costo por lead?", a: "El CAC mide el costo de convertir a un cliente que realiza una compra; el costo por lead mide el costo de generar un contacto potencial, sin garantía de conversión." },
    { q: "¿Debo incluir el salario del equipo de ventas en el CAC?", a: "Sí, el CAC debe incluir todos los costos involucrados en adquirir al cliente, incluyendo marketing y el esfuerzo del equipo de ventas." },
    { q: "¿Cómo puedo reducir mi CAC?", a: "Mejorando la tasa de conversión de tu embudo, optimizando canales de marketing de bajo rendimiento, y aprovechando referidos o marketing orgánico." },
    { q: "¿El CAC incluye clientes que renuevan su suscripción?", a: "No, el CAC se calcula únicamente sobre clientes completamente nuevos adquiridos en el período, no sobre renovaciones." },
    { q: "¿Cómo se relaciona el CAC con el LTV (Valor de Vida del Cliente)?", a: "La relación LTV:CAC muestra si tu negocio es rentable a largo plazo; una relación de 3:1 o mayor generalmente se considera saludable." },
    { q: "¿Por qué mi CAC aumenta con el tiempo?", a: "Puede deberse a mayor competencia en canales pagados, saturación de tu audiencia objetivo, o ineficiencias en tu embudo de conversión." },
    { q: "¿Esta calculadora sirve para negocios pequeños o solo para SaaS?", a: "Sirve para cualquier negocio que invierta en marketing y/o ventas para adquirir clientes, sin importar el tamaño o industria." },
    { q: "¿Debo calcular el CAC mensualmente o anualmente?", a: "El cálculo mensual es más útil para detectar tendencias rápidamente; el anual es útil para reportes generales o comparaciones de largo plazo." },
    { q: "¿Qué pasa si mi CAC es más alto que el valor de vida del cliente?", a: "Significa que estás perdiendo dinero por cada cliente adquirido a largo plazo, y necesitas reducir costos de adquisición o aumentar el valor del cliente." },
  ],
  relatedCalculators: ["Calculadora de LTV (Valor de Vida del Cliente)", "Calculadora de ROAS", "Calculadora de Tasa de Abandono (Churn Rate)", "Calculadora de CAC"],
  youMayLike: pickYouMayLike("customer-acquisition-cost-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Costo de Adquisición de Clientes",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};