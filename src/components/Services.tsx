import {
  ScanLine,
  Sparkles,
  ShieldPlus,
  Paintbrush,
  Crown,
  AlignCenter,
  Move3d,
  Scissors,
  Syringe,
  Ruler,
} from "lucide-react";

const services = [
  {
    icon: ScanLine,
    title: "Radiografías",
    description: "Diagnóstico preciso con la mínima exposición para los más pequeños.",
  },
  {
    icon: Sparkles,
    title: "Profilaxis",
    description: "Limpieza dental profesional para prevenir caries desde temprana edad.",
  },
  {
    icon: ShieldPlus,
    title: "Selladores de fosetas y fisuras",
    description: "Una barrera protectora extra contra la caries en muelas nuevas.",
  },
  {
    icon: Paintbrush,
    title: "Resinas",
    description: "Restauraciones estéticas y funcionales para dientes con caries.",
  },
  {
    icon: Crown,
    title: "Coronas infantiles",
    description: "Protección total para dientes muy dañados o tratados.",
  },
  {
    icon: AlignCenter,
    title: "Ortodoncia",
    description: "Alineación dental para una sonrisa saludable a futuro.",
  },
  {
    icon: Move3d,
    title: "Ortopedia dentofacial",
    description: "Guiamos el crecimiento óseo para prevenir problemas mayores.",
  },
  {
    icon: Scissors,
    title: "Extracciones",
    description: "Procedimientos cuidadosos y con mínima molestia para el niño.",
  },
  {
    icon: Syringe,
    title: "Pulpotomías",
    description: "Tratamiento para salvar dientes con caries profunda.",
  },
  {
    icon: Ruler,
    title: "Mantenedores de espacio",
    description: "Aseguran el espacio correcto para los dientes permanentes.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-heading text-sm font-bold uppercase tracking-wide text-accent-500">
          Nuestros servicios
        </span>
        <h2 className="mt-2 font-heading text-3xl font-extrabold text-primary-900 sm:text-4xl">
          Todo lo que la sonrisa de tu hijo necesita
        </h2>
        <p className="mt-4 font-sans text-lg text-primary-900/70">
          Tratamientos especializados en cada etapa, con equipo moderno e
          instalaciones pensadas para que los niños se sientan seguros.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group rounded-3xl border border-primary-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-100"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-accent-500 group-hover:text-white">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-bold text-primary-900">
              {title}
            </h3>
            <p className="mt-1.5 font-sans text-[15px] leading-relaxed text-primary-900/70">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
