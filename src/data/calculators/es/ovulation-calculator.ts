// src/data/calculators/es/ovulation-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const ovulationCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Ovulación 2026 — Ventana Fértil",
    metaDescription: "Calcula tu fecha de ovulación, ventana fértil y próximo período según tu último ciclo. Gratis e instantáneo.",
    canonicalSlug: "/es/health/ovulation-calculator",
    ogTitle: "Calculadora de Ovulación",
    ogDescription: "Descubre tu ventana fértil y fecha de ovulación estimada.",
    twitterTitle: "Calculadora de Ovulación 2026",
    twitterDescription: "Calcula tu ventana fértil al instante.",
  },
  hero: {
    text: "La Calculadora de Ovulación estima tu fecha de ovulación, tu ventana fértil y la fecha de tu próximo período según el primer día de tu último período y la duración promedio de tu ciclo.",
  },
  about: {
    text: `La ovulación suele ocurrir aproximadamente 14 días antes del inicio del siguiente período, independientemente de la duración total del ciclo, ya que la segunda fase del ciclo (lútea) es relativamente constante.

Esta calculadora usa el primer día de tu último período y la duración promedio de tu ciclo para estimar tu fecha de ovulación, tu ventana fértil (los días con mayor probabilidad de embarazo) y la fecha estimada de tu próximo período.

Limitaciones: esta calculadora asume un ciclo regular y no considera irregularidades hormonales, síndrome de ovario poliquístico (SOP), ni otros factores médicos que pueden afectar la ovulación real.`,
  },
  formula: {
    formula: "Fecha de Ovulación = Fecha del Próximo Período − 14 días",
    variables: [
      { symbol: "Ventana Fértil", meaning: "Generalmente los 5 días antes de la ovulación más el día de la ovulación, cuando la probabilidad de embarazo es mayor" },
      { symbol: "Próximo Período", meaning: "Primer día del último período más la duración promedio del ciclo" },
    ],
    explanation: "Se suma la duración del ciclo al primer día del último período para estimar el próximo período, y se resta 14 días a esa fecha para estimar el día de ovulación, ya que la fase lútea (después de la ovulación) dura consistentemente alrededor de 14 días.",
    interpretation: "Por ejemplo, con un último período iniciado el 1 de septiembre y un ciclo de 28 días, el próximo período sería estimado para el 29 de septiembre, y la ovulación alrededor del 15 de septiembre.",
  },
  steps: [
    "Ingresa el primer día de tu último período.",
    "Ingresa la duración promedio de tu ciclo en días (generalmente entre 21 y 35).",
    "Haz clic en Calcular.",
    "Revisa tu fecha de ovulación estimada, tu ventana fértil y la fecha estimada de tu próximo período.",
  ],
  examples: [
    { inputs: "Último Período: 1 de septiembre, Ciclo: 28 días", result: "Ovulación: ~15 de septiembre | Próximo Período: ~29 de septiembre", explanation: "Un ciclo regular de 28 días, la duración promedio más común." },
    { inputs: "Último Período: 5 de agosto, Ciclo: 32 días", result: "Ovulación: ~22 de agosto | Próximo Período: ~6 de septiembre", explanation: "Un ciclo ligeramente más largo que el promedio." },
    { inputs: "Último Período: 10 de julio, Ciclo: 24 días", result: "Ovulación: ~20 de julio | Próximo Período: ~3 de agosto", explanation: "Un ciclo más corto, en el extremo inferior del rango típico." },
  ],
  practicalUses: [
    "Identificar los días con mayor probabilidad de embarazo si estás buscando concebir",
    "Hacer seguimiento de tu ciclo menstrual y patrones de ovulación",
    "Planear con anticipación la fecha estimada de tu próximo período",
    "Complementar el uso de pruebas de ovulación con una estimación calendario",
    "Entender mejor tu ciclo para conversaciones con tu médico o ginecólogo",
  ],
  expertTips: [
    "Combina esta estimación calendario con pruebas de ovulación (LH) o el seguimiento de tu temperatura basal para mayor precisión.",
    "Registra tus ciclos durante varios meses para obtener un promedio más preciso de la duración de tu ciclo personal.",
    "La ventana fértil incluye varios días antes de la ovulación porque el esperma puede sobrevivir hasta 5 días en el cuerpo.",
    "Si tus ciclos son muy irregulares, esta calculadora será menos precisa; considera consultar a un profesional de salud.",
  ],
  commonMistakes: [
    { mistake: "Asumir que la ovulación siempre ocurre el día 14 del ciclo", fix: "La ovulación ocurre aproximadamente 14 días antes del próximo período, no necesariamente el día 14 del ciclo, especialmente en ciclos irregulares." },
    { mistake: "Usar un ciclo promedio impreciso o adivinado", fix: "Registra tus últimos ciclos reales para obtener una duración promedio más precisa antes de usar esta calculadora." },
    { mistake: "Confiar únicamente en el calendario sin otros métodos de confirmación", fix: "Combina esta estimación con pruebas de ovulación o seguimiento de temperatura basal para mayor precisión, especialmente si buscas concebir." },
  ],
  faq: [
    { q: "¿Cómo se calcula la fecha de ovulación?", a: "Se resta 14 días a la fecha estimada de tu próximo período, ya que la fase lútea (después de la ovulación) dura consistentemente alrededor de 14 días." },
    { q: "¿Qué es la ventana fértil?", a: "Es el período de días con mayor probabilidad de embarazo, generalmente los 5 días antes de la ovulación más el día de la ovulación misma." },
    { q: "¿Cuántos días después de mi período soy más fértil?", a: "Depende de la duración de tu ciclo; en un ciclo de 28 días, la ventana fértil suele ocurrir entre los días 10 y 15 aproximadamente." },
    { q: "¿Esta calculadora funciona si mi ciclo es irregular?", a: "Es menos precisa con ciclos irregulares; considera usar pruebas de ovulación o consultar a un profesional de salud para mayor exactitud." },
    { q: "¿Cuál es la duración normal de un ciclo menstrual?", a: "La mayoría de los ciclos duran entre 21 y 35 días, siendo 28 días el promedio más común, aunque varía entre personas." },
    { q: "¿Cuánto tiempo vive el óvulo después de la ovulación?", a: "El óvulo generalmente vive entre 12 y 24 horas después de ser liberado, por lo que la fecundación debe ocurrir en ese período." },
    { q: "¿Cuánto tiempo vive el esperma en el cuerpo?", a: "El esperma puede sobrevivir hasta 5 días en el tracto reproductivo, por lo que las relaciones días antes de la ovulación aún pueden resultar en embarazo." },
    { q: "¿Cómo puedo confirmar mi fecha de ovulación con más precisión?", a: "Puedes usar pruebas de ovulación (que detectan la hormona LH), seguimiento de temperatura basal corporal, o cambios en el moco cervical." },
    { q: "¿La lactancia afecta la ovulación?", a: "Sí, la lactancia puede suprimir la ovulación temporalmente, especialmente en los primeros meses posparto, haciendo esta calculadora menos confiable en ese período." },
    { q: "¿Puedo usar esta calculadora si tengo síndrome de ovario poliquístico (SOP)?", a: "Las personas con SOP suelen tener ciclos irregulares, por lo que esta calculadora será menos precisa; se recomienda consultar a un ginecólogo." },
    { q: "¿Qué significa si mi período llega antes de la fecha estimada?", a: "Es normal cierta variación de un mes a otro; si la diferencia es consistente, actualiza la duración de tu ciclo con datos más recientes." },
  ],
  relatedCalculators: ["Calculadora de Embarazo", "Calculadora de Fecha de Parto", "Calculadora de Edad", "Calculadora de Cuenta Regresiva"],
  youMayLike: pickYouMayLike("ovulation-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Ovulación",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};