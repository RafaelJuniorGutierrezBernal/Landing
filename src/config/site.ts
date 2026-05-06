export const siteConfig = {
  // Meta y SEO
  name: "Denti Smile",
  shortName: "DentiSmile",
  slogan: "Tu sonrisa, nuestra pasión.",
  description: "Consultorio odontológico en Barranquilla. Atención profesional, cálida y amigable para toda la familia. Agenda tu cita por WhatsApp.",
  titleSEO: "Denti Smile · Odontología en Barranquilla",
  descriptionSEO: "Tu sonrisa, nuestra pasión. Clínica dental 5 estrellas, ambiente inclusivo en el barrio Metropolitana.",

  // Contacto
  contact: {
    tagline: "Contacto",
    title: "Visítanos o escríbenos",
    description: "Estamos listos para atenderte y resolver todas tus dudas.",
    phoneDisplay: "317 234 9573",
    phoneUrl: "+573172349573",
    whatsappMessage: "Hola, quiero agendar una cita en Denti Smile 😊",
    get whatsappUrl() {
      return `https://wa.me/${this.phoneUrl.replace("+", "")}?text=${encodeURIComponent(this.whatsappMessage)}`;
    },
    address: "Cra. 9f #45b-45, Metropolitana, Barranquilla, Atlántico",
    hoursTitle: "Horario de atención",
    hoursLines: ["Lunes a Sábado", "8:00 a.m. – 7:00 p.m."],
    ctaPrimary: "Escríbenos por WhatsApp",
  },

  // Navbar
  navLinks: [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ],

  // Hero Section
  hero: {
    badge: "Calificación 5 estrellas en Barranquilla",
    titlePart1: "Tu sonrisa,",
    titlePart2: "nuestra pasión.",
    subtitle: "Consultorio odontológico en Barranquilla. Atención profesional, cálida y amigable para toda la familia.",
    ctaPrimary: "Agenda tu cita",
    ctaSecondary: "Ver servicios",
    stats: "+500 pacientes",
    statsText: "confían en nosotros",
    floatingBadge1: { icon: "🦷", title: "Sonrisas felices", subtitle: "Cada día en Denti Smile" },
    floatingBadge2: { icon: "🏳️‍🌈", title: "LGBTQ+ friendly" },
  },

  // Services Section
  services: {
    tagline: "Nuestros servicios",
    title: "Cuidado dental integral",
    description: "Tratamientos modernos y personalizados para cada miembro de tu familia.",
    items: [
      { icon: "🦷", title: "Ortodoncia", desc: "Brackets y alineadores invisibles para alinear tu sonrisa." },
      { icon: "🪥", title: "Limpieza dental", desc: "Profilaxis profesional para una boca sana y fresca." },
      { icon: "🌟", title: "Blanqueamiento", desc: "Devuelve el brillo natural a tus dientes en una sola sesión." },
      { icon: "🔬", title: "Endodoncia", desc: "Tratamiento de conductos sin dolor para salvar tu diente." },
      { icon: "👶", title: "Odontopediatría", desc: "Atención especializada y cariñosa para los más pequeños." },
      { icon: "🦴", title: "Implantes dentales", desc: "Reemplaza piezas perdidas con resultados duraderos y naturales." },
    ],
  },

  // Why Us Section
  whyUs: {
    tagline: "¿Por qué elegirnos?",
    title: "Más que una clínica, una familia",
    items: [
      {
        icon: "⭐",
        title: "Calificación 5 estrellas",
        desc: "Nuestros pacientes nos recomiendan por la calidad y la calidez de nuestro servicio.",
      },
      {
        icon: "🏳️‍🌈",
        title: "Ambiente inclusivo",
        desc: "Espacio amigable y respetuoso para toda la comunidad. Aquí todos sonríen.",
      },
      {
        icon: "📍",
        title: "Ubicados en Barranquilla",
        desc: "Fácil acceso en el barrio Metropolitana. Te esperamos con una sonrisa.",
      },
    ],
  },

  // Testimonial Section
  testimonial: {
    quote: "“Llegué con miedo al odontólogo y me fui sonriendo de oreja a oreja. El equipo de Denti Smile me hizo sentir en casa desde el primer momento. Profesionales, amables y con un trato humano increíble. ¡Totalmente recomendados!”",
    authorInitials: "VM",
    authorName: "Valentina Martínez",
    authorRole: "Paciente · Barranquilla",
  },
  
  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Denti Smile. Todos los derechos reservados.`,
  }
};
