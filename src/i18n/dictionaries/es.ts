import type { LocaleDictionary } from "./types";

export const es: LocaleDictionary = {
  metadata: {
    title: "HairWow — Prueba de peinados y análisis capilar con IA",
    description:
      "HairWow te permite probar más de 100 peinados, explorar colores infinitos y recibir análisis capilar de grado profesional con rutinas personalizadas en segundos.",
    keywords: [
      "HairWow",
      "peinados con IA",
      "cambio de color",
      "probar peinados",
      "análisis capilar",
      "probar barba",
      "AR selfie",
      "beauty tech",
    ],
  },
  nav: {
    home: "Inicio",
    features: "Funciones",
    pricing: "Precio",
    download: "Descargar",
    blog: {
      label: "Blog",
      href: "https://blog.hairwow.ai",
    },
    language: "Idioma",
    menuLabel: "Menú",
    menuIntro: "Explora HairWow",
    closeMenu: "Cerrar menú",
  },
  hero: {
    badge: "Makeovers con IA",
    title: "Un",
    highlight: "Nuevo Peinado",
    titleSuffix: "en 3 Segundos",
    description:
      "Reinventa tu cabello con IA consciente de cada hebra. Prueba más de 100 peinados y colores ilimitados en segundos, con análisis y cuidados hechos a tu medida.",
    primaryCta: "Prueba gratis",
    secondaryCta: "Ver demo de Hair Health",
    note: "Sin riesgos, sin tinte: solo resultados inmediatos.",
    rating: {
      value: "4.9/5",
      label: "Valoración media tras 80k+ transformaciones",
      caption: "Creadores confían en HairWow para looks listos para redes.",
    },
    bullets: [
      "Cambia cortes, color, fleco y volumen en vivo",
      "Recomendaciones inteligentes según tu rostro",
      "Guarda comparativas HD antes/después",
    ],
    visual: {
      title: "Hair Health AI estudio",
      items: [
        "Índice de textura, porosidad y brillo",
        "Sugerencias inteligentes de color",
        "Coaching 1:1 con estilista IA",
      ],
      pill: "Descargar HairWow",
    },
  },
  sections: {
    why: {
      id: "why",
      title: "Razones para amar HairWow",
      subtitle: "Transformaciones con buena vibra y un toque: la IA cuida cada hebra.",
      items: [
        {
          title: "Prueba en un toque",
          description: "Cambia color y estilo al instante en fotos o cámara en vivo sin curva de aprendizaje.",
        },
        {
          title: "Previsualizaciones ultra reales",
          description: "Las máscaras detectan rizos, capas y baby hairs para resultados listos para usar.",
        },
        {
          title: "Selección personal",
          description: "Análisis de forma de rostro y tono de piel elige lo que más te favorece.",
        },
        {
          title: "Listo para redes",
          description: "Exporta historias antes/después perfectas para TikTok, Instagram y Snapchat.",
        },
      ],
    },
    core: {
      id: "core",
      title: "Experiencias principales",
      subtitle: "De retoques sutiles a cambios radicales, siempre personalizados.",
      cards: [
        {
          title: "Prueba de peinados",
          description: "Pixies, bobs, lobs, capas, ondas, rizos, flequillos y más: más de 100 looks.",
          bullets: [
            "Ajusta largo, volumen y raya en segundos",
            "Compara tus favoritos lado a lado antes de decidir",
            "Perfecciona el color con controles de gradiente y temperatura",
          ],
        },
        {
          title: "Análisis capilar",
          description: "Diagnósticos profesionales sobre textura, porosidad, frizz, densidad, brillo y salud del cuero cabelludo.",
          bullets: [
            "Recibe un Hair Health Score con rutina detallada",
            "Recomendaciones de lavado, tratamiento y protección",
            "Consulta 1:1 con el AI Stylist para color y mantenimiento",
          ],
        },
        {
          title: "Prueba de barba",
          description: "De sombra ligera a barbas completas y bigotes con mapeo natural.",
          bullets: [
            "Controla densidad, largo y tono",
            "Combínalo con tu color de cabello",
            "Guarda estilos para tu barbero o contenido",
          ],
        },
      ],
    },
    assist: {
      id: "assist",
      title: "Herramientas que completan el look",
      subtitle: "Pulir tu makeover es tan fácil como deslizar.",
      items: [
        {
          title: "Eliminar objetos",
          description: "Borra cables, desorden o intrusos para mantener el foco en tu cabello.",
        },
        {
          title: "Probar outfit",
          description: "Visualiza tendencias y cómo combinan siluetas y tonos con tu nuevo estilo.",
        },
        {
          title: "Probar joyería",
          description: "Ensaya aretes, collares y más sin salir del flujo de edición.",
        },
      ],
    },
    smart: {
      id: "smart",
      title: "Inteligente, rápido e inclusivo",
      subtitle: "Previsualizaciones potentes pensadas para cualquier luz, dispositivo y tipo de cabello.",
      bullets: [
        "Controles de color para vibrancia, calidez y degradados",
        "Colecciones de temporada y tendencias virales actualizadas",
        "Previews de baja latencia que brillan incluso en poca luz",
        "Máscaras inclusivas para cabellos lisos, ondulados, rizados y afro",
      ],
    },
    pricing: {
      id: "pricing",
      title: "Elige tu HairWow",
      subtitle: "Empieza gratis y luego elige el plan Premium que se adapte a ti.",
      plans: [
        {
          name: "Gratis",
          price: "US$0",
          period: "/para siempre",
          description: "Prueba todas las funciones cinco veces con exportaciones con marca de agua.",
          cta: "Probar gratis",
          features: [
            "5 créditos totales en todos los try-ons y análisis",
            "Acceso a peinados, barbas y outfits de prueba",
            "Descargas con una marca de agua discreta de HairWow",
          ],
        },
        {
          name: "Premium semanal",
          price: "US$5.99",
          period: "/semana",
          description: "Acceso Premium completo con la flexibilidad de pagar semanalmente.",
          cta: "Elegir semanal",
          popular: true,
          features: [
            "Uso ilimitado de todas las funciones",
            "Experiencia sin anuncios",
            "Exportaciones HD sin marca de agua",
          ],
        },
        {
          name: "Premium anual",
          price: "US$59.90",
          period: "/año",
          description: "Mantén todos los beneficios Premium durante un año y ahorra más.",
          cta: "Elegir anual",
          features: [
            "Uso ilimitado de todas las funciones",
            "Experiencia sin anuncios",
            "Exportaciones HD sin marca de agua",
          ],
        },
      ],
      note: "¿Eres salón o marca? Conversemos sobre alianzas personalizadas.",
    },
    privacy: {
      id: "privacy",
      title: "Tus imágenes, tu decisión",
      description:
        "Tratamos la privacidad como autocuidado. Tú decides qué guardar, compartir o borrar; HairWow nunca publica sin permiso.",
      cta: "Conoce nuestro compromiso",
    },
    reviews: {
      id: "reviews",
      title: "Amado por estilistas y creadores",
      subtitle: "Miles de sesiones cada semana inspiran momentos frente al espejo.",
      quote:
        "HairWow clava el color y el movimiento natural. Mis clientas exploran ideas atrevidas mientras la IA recomienda cuidados que yo misma avalo.",
      author: "Maya Chen",
      role: "Colorista principal, Glow Lab Studio",
    },
  },
  footer: {
    tagline: "HairWow — Glow-ups con IA para cada hebra.",
    rights: "© 2024 HairWow. Todos los derechos reservados.",
    socialsLabel: "Sigue a HairWow",
    supportLabel: "Atención al cliente:",
    supportEmail: "cs@clearcrowds.com",
  },
};

export default es;
