// src/data/calculators/es/ca-take-home-pay.ts
import { pickYouMayLike } from "../../calculator-pool";

export const caTakeHomePayCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Sueldo Neto en Canadá 2026 (CPP, EI, Impuestos)",
    metaDescription: "Calcula tu sueldo neto en Canadá después de impuesto federal, provincial, CPP y EI. Para Ontario, Alberta y Columbia Británica. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/ca-take-home-pay",
    ogTitle: "Calculadora de Sueldo Neto de Canadá",
    ogDescription: "Descubre cuánto dinero recibes realmente después de impuestos, CPP y EI en Canadá.",
    twitterTitle: "Calculadora de Sueldo Neto Canadá 2026",
    twitterDescription: "Calcula tu pago neto anual, mensual y quincenal en Canadá.",
  },

  hero: {
    text: "La Calculadora de Sueldo Neto de Canadá estima cuánto dinero recibes realmente después de descontar el impuesto federal, el impuesto provincial, el CPP y el EI, según tu ingreso bruto y tu provincia.",
  },

  about: {
    text: `En Canadá, tu sueldo bruto se reduce por cuatro deducciones principales: el impuesto federal sobre la renta, el impuesto provincial (que varía según dónde vivas), el CPP (Plan de Pensiones de Canadá) y el EI (Seguro de Empleo).

Esta calculadora aplica los tramos de impuesto federal y provincial vigentes junto con las tasas de CPP y EI para Ontario, Alberta y Columbia Británica, mostrando tu pago neto anual, mensual y quincenal.

Limitaciones: los resultados son estimaciones basadas en tramos fiscales generales; no incluyen créditos fiscales personales, deducciones adicionales, ni contribuciones a RRSP que podrían reducir tu impuesto real.`,
  },

  formula: {
    formula: "Sueldo Neto = Ingreso Bruto − Impuesto Federal − Impuesto Provincial − CPP − EI",
    variables: [
      { symbol: "Impuesto Federal", meaning: "Impuesto calculado aplicando los tramos federales de la CRA sobre tu ingreso bruto" },
      { symbol: "Impuesto Provincial", meaning: "Impuesto calculado según los tramos de tu provincia (Ontario, Alberta o Columbia Británica)" },
      { symbol: "CPP y EI", meaning: "Contribuciones obligatorias al Plan de Pensiones de Canadá y al Seguro de Empleo, con topes anuales" },
    ],
    explanation: "El ingreso bruto anual se somete a los tramos progresivos de impuesto federal y provincial, y se le restan las contribuciones de CPP y EI (hasta sus topes anuales) para obtener el sueldo neto.",
    interpretation: "Por ejemplo, un ingreso bruto de $70,000 en Ontario puede resultar en un sueldo neto aproximado de $53,000-$55,000 anuales, dependiendo de los tramos vigentes del año fiscal.",
  },

  steps: [
    "Ingresa tu ingreso bruto anual en dólares canadienses.",
    "Selecciona tu provincia: Ontario, Alberta o Columbia Británica.",
    "Haz clic en Calcular.",
    "Revisa tu pago neto anual, mensual y quincenal, junto con el total de deducciones.",
  ],

  examples: [
    { inputs: "Ingreso Bruto: $60,000, Provincia: Ontario", result: "Sueldo Neto Anual: ~$47,000", explanation: "Un trabajador de tiempo completo con ingreso promedio en Ontario." },
    { inputs: "Ingreso Bruto: $90,000, Provincia: Alberta", result: "Sueldo Neto Anual: ~$68,000", explanation: "Alberta no tiene impuesto sobre ventas provincial y sus tramos de impuesto sobre la renta son relativamente moderados." },
    { inputs: "Ingreso Bruto: $45,000, Provincia: Columbia Británica", result: "Sueldo Neto Anual: ~$37,500", explanation: "Un ingreso de nivel inicial cae en tramos bajos de impuesto federal y provincial." },
  ],

  practicalUses: [
    "Comparar tu sueldo neto real antes de aceptar una oferta de trabajo en otra provincia",
    "Planear tu presupuesto mensual con base en tu pago neto real, no el bruto",
    "Entender cuánto se destina a CPP y EI cada año",
    "Comparar el impacto fiscal de vivir en Ontario, Alberta o Columbia Británica",
    "Estimar tu pago quincenal para organizar gastos recurrentes",
  ],

  expertTips: [
    "El CPP y el EI tienen un tope máximo de contribución anual — una vez alcanzado, dejan de descontarse de tu sueldo por el resto del año.",
    "Alberta generalmente tiene tramos de impuesto provincial más bajos que Ontario y Columbia Británica para ingresos medios.",
    "Contribuir a un RRSP reduce tu ingreso gravable y puede aumentar tu sueldo neto efectivo si ajustas tus retenciones.",
    "Revisa siempre tu talón de pago real, ya que el empleador puede aplicar créditos fiscales personales que esta calculadora no incluye.",
    "Si tienes múltiples empleos, verifica que no se te esté descontando CPP o EI de más en el año.",
  ],

  commonMistakes: [
    { mistake: "Comparar ofertas de trabajo usando solo el sueldo bruto", fix: "Compara siempre el sueldo neto estimado, ya que la carga fiscal varía significativamente entre provincias." },
    { mistake: "Olvidar que el CPP y el EI tienen un tope anual", fix: "Si tu ingreso es alto, estas contribuciones dejan de descontarse tras alcanzar el máximo anual establecido por la CRA." },
    { mistake: "Asumir que todas las provincias tienen la misma carga fiscal", fix: "Cada provincia tiene sus propios tramos de impuesto; usa la provincia correcta para una estimación precisa." },
    { mistake: "No considerar deducciones personales o créditos fiscales", fix: "Esta calculadora da una estimación general; tu declaración de impuestos real puede variar por créditos y deducciones aplicables." },
  ],

  faq: [
    { q: "¿Cómo se calcula el sueldo neto en Canadá?", a: "Se resta el impuesto federal, el impuesto provincial, el CPP y el EI del ingreso bruto anual para obtener el sueldo neto." },
    { q: "¿Qué es el CPP y cuánto se descuenta?", a: "El CPP (Plan de Pensiones de Canadá) es una contribución obligatoria para tu pensión futura, calculada como un porcentaje del ingreso hasta un tope anual." },
    { q: "¿Qué es el EI en Canadá?", a: "El EI (Seguro de Empleo) es una contribución obligatoria que financia beneficios por desempleo, calculada como un porcentaje del ingreso hasta un tope anual." },
    { q: "¿Cuál provincia tiene menos impuesto sobre la renta: Ontario, Alberta o Columbia Británica?", a: "Alberta generalmente tiene tramos de impuesto provincial más bajos para ingresos medios comparado con Ontario y Columbia Británica." },
    { q: "¿Cuánto es el sueldo neto de $60,000 en Ontario?", a: "Aproximadamente $47,000 anuales después de impuesto federal, provincial, CPP y EI, según los tramos vigentes." },
    { q: "¿El CPP y el EI se descuentan durante todo el año?", a: "No, ambos tienen un tope máximo anual; una vez alcanzado, dejan de descontarse de tu sueldo hasta el siguiente año fiscal." },
    { q: "¿Esta calculadora incluye impuestos municipales?", a: "No, Canadá no tiene impuesto municipal sobre la renta; solo se aplican impuesto federal y provincial." },
    { q: "¿Cómo afecta contribuir a un RRSP a mi sueldo neto?", a: "Las contribuciones a un RRSP reducen tu ingreso gravable, lo que puede disminuir el impuesto retenido y aumentar tu pago neto efectivo." },
    { q: "¿Esta calculadora sirve para trabajadores independientes?", a: "Está diseñada principalmente para empleados asalariados; los trabajadores independientes pagan CPP de forma distinta (ambas partes) y deben calcular impuestos por separado." },
    { q: "¿Qué diferencia hay entre sueldo bruto y sueldo neto?", a: "El sueldo bruto es el total antes de deducciones; el sueldo neto es lo que realmente recibes después de impuestos, CPP y EI." },
    { q: "¿Por qué mi sueldo neto real es distinto al de esta calculadora?", a: "Los resultados son estimaciones; tu empleador puede aplicar créditos fiscales personales, deducciones o beneficios que cambian el monto exacto retenido." },
    { q: "¿Cómo calculo mi pago quincenal a partir del sueldo anual?", a: "Divide tu sueldo neto anual entre 26 (número de períodos quincenales en un año) para obtener el estimado por pago." },
    { q: "¿El impuesto provincial es el mismo en todo Canadá?", a: "No, cada provincia establece sus propios tramos y tasas de impuesto sobre la renta, además del impuesto federal común a todo el país." },
  ],

  relatedCalculators: ["Calculadora de Jubilación de Canadá", "Calculadora de CPP", "Calculadora de EI", "Calculadora de Impuesto sobre la Renta Canadá"],

  youMayLike: pickYouMayLike("ca-take-home-pay"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Sueldo Neto de Canadá",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};