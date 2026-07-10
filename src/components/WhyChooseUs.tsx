import { Sparkles, Cpu, ShieldCheck, Sofa, Users } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Personal altamente capacitado",
    description:
      "Un equipo formado especialmente para tratar con calidez a bebés, niños y adolescentes.",
  },
  {
    icon: Cpu,
    title: "Equipo moderno",
    description:
      "Tecnología actualizada para diagnósticos precisos y tratamientos más cómodos.",
  },
  {
    icon: ShieldCheck,
    title: "Resultados garantizados",
    description:
      "Tratamientos con altas normas de calidad, pensados para el bienestar a largo plazo.",
  },
  {
    icon: Sofa,
    title: "Instalaciones cómodas y lúdicas",
    description:
      "Un espacio pensado para que los niños se sientan tranquilos y en confianza.",
  },
  {
    icon: Sparkles,
    title: "Atención a niños con capacidades diferentes",
    description:
      "Cuidado especializado y paciente, adaptado a las necesidades de cada niño.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-heading text-sm font-bold uppercase tracking-wide text-accent-500">
          Por qué elegirnos
        </span>
        <h2 className="mt-2 font-heading text-3xl font-extrabold text-primary-900 sm:text-4xl">
          Niños más sonrientes, familias más tranquilas
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {reasons.map(({ icon: Icon, title, description }, i) => (
          <div
            key={title}
            className={`rounded-3xl p-6 text-center shadow-sm ${
              i % 2 === 0 ? "bg-primary-500 text-white" : "bg-sunny-400 text-primary-900"
            } lg:col-span-1 ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/25">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-bold">{title}</h3>
            <p className="mt-1.5 font-sans text-[15px] leading-relaxed opacity-90">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
