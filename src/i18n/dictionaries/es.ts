import type { LocaleDictionary } from "./types";

const es: LocaleDictionary = {
  metadata: {
    title: "EatIt — Escáner y asesor de nutrición con IA",
    description:
      "EatIt analiza al instante cualquier comida o etiqueta para mostrar calorías, nutrientes, alérgenos y aditivos, y ofrece recomendaciones personalizadas basadas en tus objetivos alimentarios.",
    keywords: [
      "EatIt",
      "nutrición",
      "contador de calorías",
      "coach nutricional",
      "IA",
      "alérgenos",
      "diario de comida",
    ],
  },
  nav: {
    home: "Inicio",
    features: "Funciones",
    pricing: "Planes",
    download: "Descargar",
    faq: "Preguntas",
    blog: {
      label: "Blog",
      href: "https://blog.eatit.app",
    },
    language: "Idioma",
    menuLabel: "Menú",
    menuIntro: "Explora EatIt",
    closeMenu: "Cerrar menú",
  },
  auth: {
    login: "Iniciar sesión",
    signup: "Crear cuenta",
  },
  hero: {
    badge: "Asistente nutricional IA",
    title: "Conoce cada bocado",
    highlight: "en un escaneo",
    description:
      "Apunta la cámara hacia tu plato o etiqueta y EatIt revela calorías, macros, aditivos, alérgenos y riesgos de salud en segundos, adaptado a tus reglas alimentarias.",
    primaryCta: "Descargar EatIt",
    secondaryCta: "Ver cómo funciona",
    note: "Registro privado con sincronización cifrada y análisis local.",
    rating: {
      value: "4.9",
      label: "Valoración media de 120 mil personas conscientes",
      caption: "Inteligencia nutricional diseñada para proteger tu privacidad.",
    },
    bullets: [
      "Desglose instantáneo de calorías y macros",
      "Consejos personalizados para cualquier estilo de dieta",
      "Tendencias que celebran tu progreso",
    ],
    visual: {
      title: "Experiencia de escaneo EatIt",
      items: [
        "Detección de aditivos y alérgenos",
        "Balance nutricional diario con recordatorios suaves",
        "Sugerencias y sustituciones del asesor IA",
      ],
      pill: "Escanear con EatIt",
    },
  },
  sections: {
    why: {
      id: "features",
      title: "Por qué EatIt es tu aliado diario",
      subtitle:
        "Cada escaneo aporta claridad: desde calorías hasta ingredientes ocultos, para que comas con confianza.",
      items: [
        {
          title: "Calorías al instante",
          description: "Fotografía tus comidas o menús y obtén calorías, macros y sugerencias de porciones al momento.",
        },
        {
          title: "Radar de alérgenos",
          description: "Alertas inmediatas de alérgenos comunes, restricciones religiosas y aceites de semillas.",
        },
        {
          title: "Consejos según tus metas",
          description: "Define tus objetivos—fitness, halal, bajo en carbohidratos, control de peso—y recibe veredictos personalizados.",
        },
      ],
    },
    core: {
      id: "tracking",
      title: "Información nutricional profunda para todos",
      subtitle: "EatIt conecta tus registros diarios con los objetivos que te importan y guía el siguiente paso.",
      cards: [
        {
          title: "Seguimiento de calorías y macros",
          description: "Entradas automáticas, objetivos dinámicos y recordatorios suaves mantienen tu energía equilibrada.",
          bullets: [
            "Escanea, dicta o añade en segundos",
            "Objetivos calóricos que se adaptan a tu actividad",
            "Informes exportables para entrenadores o nutricionistas",
          ],
        },
        {
          title: "Inteligencia de micronutrientes",
          description:
            "Descubre qué vitaminas, minerales o fibra faltan y recibe ideas para cubrir esos huecos.",
          bullets: [
            "Puntaje semanal de equilibrio nutricional",
            "Sugerencias de comidas generadas por IA",
            "Recetas filtradas por tus reglas alimentarias",
          ],
        },
        {
          title: "Coach nutricional IA",
          description: "Un chat capacitado analiza tus registros, detecta riesgos y celebra tus logros al instante.",
          bullets: [
            "Respuestas con contexto según tu ingesta reciente",
            "Veredictos claros: comer, moderar o sustituir",
            "Referencias a estudios confiables",
          ],
        },
      ],
    },
    assist: {
      id: "assist",
      title: "Soporte que entiende tu estilo de vida",
      subtitle: "EatIt respeta necesidades culturales, médicas y personales para que nadie quede fuera de la conversación.",
      items: [
        {
          title: "Lista de vigilancia de alérgenos",
          description: "Configura alérgenos personales, reglas religiosas o listas negras una sola vez—EatIt no las olvida.",
        },
        {
          title: "Marcadores de riesgo",
          description: "Recibe alertas cuando sodio, azúcar o ultraprocesados superen los límites que tú defines.",
        },
        {
          title: "Amigable con subculturas alimentarias",
          description: "Sin aceites de semilla, longevidad, plant-based halal: EatIt habla tu idioma.",
        },
      ],
    },
    smart: {
      id: "smart",
      title: "Seguro, preciso e inclusivo",
      subtitle:
        "Confiado por innovadores en salud que exigen inteligencia nutricional con privacidad integrada.",
      bullets: [
        "Procesamiento local para mantener las fotos en tu dispositivo",
        "Respaldo cifrado bajo tu control",
        "Base de ingredientes multilingüe",
        "Funciona sin conexión y sincroniza después",
      ],
    },
    download: {
      id: "download",
      badge: "Descarga EatIt",
      title: "Escanea con más inteligencia. Come con confianza.",
      subtitle:
        "Lleva EatIt en tu bolsillo para descifrar platos, etiquetas y menús en segundos.",
      highlights: [
        "Escanea etiquetas, códigos de barras o platos completos al instante",
        "Recomendaciones adaptadas a alergias, metas y dietas culturales",
        "Sincronización cifrada que mantiene privado tu historial",
      ],
      storeLabel: "Obtén EatIt en",
      apple: {
        href: "https://apps.apple.com/app",
        label: "App Store",
      },
      google: {
        href: "https://play.google.com/store/apps",
        label: "Google Play",
      },
    },
    pricing: {
      id: "pricing",
      title: "Planes que impulsan tus objetivos",
      subtitle: "Empieza gratis y amplía cuando necesites más claridad.",
      plans: [
        {
          name: "Gratis",
          price: "€0",
          period: "Para siempre",
          description: "Ideal para probar escaneos diarios y registro básico.",
          cta: "Comenzar gratis",
          features: [
            "30 escaneos inteligentes al mes",
            "Panel diario de calorías y macros",
            "Alertas de los 14 principales alérgenos",
          ],
        },
        {
          name: "Membresía semanal",
          price: "€5.99",
          period: "Por semana",
          description: "Desbloquea escaneos ilimitados y recordatorios IA proactivos.",
          cta: "Elegir plan semanal",
          popular: true,
          features: [
            "Escaneos y desgloses ilimitados",
            "Alertas dinámicas de carencias nutricionales",
            "Coach IA con sugerencias de sustitución",
          ],
        },
        {
          name: "Membresía anual",
          price: "€59.99",
          period: "Por año",
          description: "Ahorra más con analíticas profundas y soporte de concierge.",
          cta: "Elegir plan anual",
          features: [
            "Todo lo incluido en la membresía semanal",
            "Informes anuales detallados y exportables",
            "Revisiones trimestrales con nutricionistas",
          ],
        },
      ],
      note: "Cancela cuando quieras. Cambia de plan según evolucionen tus objetivos.",
    },
    privacy: {
      id: "privacy",
      title: "Tus datos te pertenecen",
      description:
        "Ciframos cada registro, cumplimos con las normativas locales y te damos control total sobre dónde vive tu historial.",
      cta: "https://eatit.app/security",
    },
    reviews: {
      id: "stories",
      title: "Amado por quienes comen con intención",
      subtitle: "Personas reales equilibrando tradición, sabor y salud con EatIt.",
      quote:
        "EatIt me permite respetar la dieta halal de mi familia mientras entreno para un maratón. El coach IA detecta déficits antes de que los sienta.",
      author: "Farah Q.",
      role: "Corredora y creadora de contenido",
      stats: {
        value: "120K+",
        label: "personas registrando comidas más inteligentes",
      },
      items: [
        {
          quote: "Las alertas de alérgenos me dan tranquilidad al comprar snacks para mis hijos.",
          author: "Daniel R.",
          role: "Padre de niños con alergias",
        },
        {
          quote: "EatIt explicó por qué me quedaba sin energía. El balance nutricional me mantiene enfocada.",
          author: "Lina M.",
          role: "Instructora de pilates",
        },
        {
          quote: "Como chef, valoro lo rápido que señala aditivos y aceites de semilla.",
          author: "Marco D.",
          role: "Consultor gastronómico",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "Preguntas frecuentes",
      subtitle: "Todo lo que necesitas saber para empezar con EatIt.",
      items: [
        {
          question: "¿Qué tan precisa es la detección de calorías y macros?",
          answer:
            "EatIt combina visión computacional con una base validada de ingredientes. Cada escaneo muestra un indicador de precisión y puedes ajustar porciones antes de guardar.",
        },
        {
          question: "¿EatIt respeta mis reglas culturales o religiosas?",
          answer:
            "Sí. Configura preferencias como halal, kosher, vegetariano, bajo FODMAP o sin aceites de semilla y EatIt avisará antes de que haya conflicto.",
        },
        {
          question: "¿Qué diferencia al coach nutricional IA?",
          answer:
            "Analiza tu ingesta reciente, metas y actividad. Sugiere cambios, resalta carencias y enlaza a ciencia confiable sin juicios.",
        },
        {
          question: "¿Cómo protege EatIt mis datos?",
          answer:
            "Procesamos en el dispositivo siempre que sea posible y ciframos los datos si activas la sincronización en la nube. Puedes exportar o borrar tus registros cuando quieras.",
        },
      ],
    },
  },
  footer: {
    tagline: "Come con inteligencia gracias a una IA que entiende tu plato.",
    rights: "© 2024 EatIt. Todos los derechos reservados.",
    socialsLabel: "Conecta con EatIt",
    supportLabel: "¿Necesitas ayuda?",
    supportEmail: "hola@eatit.app",
    faqLabel: "Preguntas",
    supportChannels: [
      { type: "email", label: "Soporte por correo", value: "hola@eatit.app" },
      { type: "phone", label: "Línea nutricional", value: "+34 900 123 456" },
      { type: "chat", label: "Chat en vivo", value: "app.eatit.app/support" },
    ],
    socialLinks: [
      { icon: "fa-brands fa-instagram", href: "https://instagram.com/eatitapp", label: "Instagram" },
      { icon: "fa-brands fa-twitter", href: "https://twitter.com/eatitapp", label: "Twitter" },
      { icon: "fa-brands fa-linkedin", href: "https://linkedin.com/company/eatit", label: "LinkedIn" },
    ],
    navGroups: [
      {
        title: "Producto",
        links: [
          { label: "Funciones", href: "#features" },
          { label: "Planes", href: "#pricing" },
          { label: "Seguridad", href: "https://eatit.app/security" },
        ],
      },
      {
        title: "Recursos",
        links: [
          { label: "Blog", href: "https://blog.eatit.app" },
          { label: "Centro de ayuda", href: "https://help.eatit.app" },
          { label: "Sala de prensa", href: "https://press.eatit.app" },
        ],
      },
      {
        title: "Compañía",
        links: [
          { label: "Sobre nosotros", href: "https://eatit.app/about" },
          { label: "Empleo", href: "https://eatit.app/careers" },
          { label: "Contacto", href: "https://eatit.app/contact" },
        ],
      },
    ],
  },
};

export default es;
