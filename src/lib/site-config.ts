const WHATSAPP_DIGITS = "528443585559";

export const siteConfig = {
  name: "Odontología Infantil Especializada",
  doctor: "Dra. Mónica Fabiola González Hernández",
  doctorShort: "Dra. Mónica González",
  specialty: "Odontopediatra",
  credential: "Certificada por el Consejo Nacional de Odontología Infantil",
  tagline: "La sonrisa de un niño es lo más hermoso que puede existir",
  description:
    "Odontología Infantil Especializada en Saltillo, Coahuila. Atención odontológica exclusiva para bebés, niños, adolescentes y niños con capacidades diferentes, a cargo de la Dra. Mónica González, odontopediatra certificada.",
  phoneDisplay: "+52 844 416 7875",
  phoneHref: "tel:+528444167875",
  whatsappDigits: WHATSAPP_DIGITS,
  whatsappDisplay: "+52 844 358 5559",
  whatsappHref: (message: string) =>
    `https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(message)}`,
  email: "info@odontologiainfantilespecializada.com",
  address: {
    line1: "Sierra Mojada No. 2411",
    line2: "Saltillo, Coahuila",
    mapsQuery: "Sierra Mojada 2411, Saltillo, Coahuila",
  },
  social: {
    // TODO: reemplazar con la URL real de la página de Facebook de la clínica.
    facebook: "",
  },
  defaultWhatsappMessage:
    "Hola, me gustaría agendar una cita para mi hijo/a en Odontología Infantil Especializada.",
} as const;
