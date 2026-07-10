import { MessageCircle, Phone, ShieldCheck, Sparkles, Heart } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Button from "@/components/ui/Button";

const badges = [
  { icon: ShieldCheck, label: "Odontopediatra certificada" },
  { icon: Heart, label: "Atención a niños con capacidades diferentes" },
  { icon: Sparkles, label: "Ambiente lúdico y cómodo" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-cream-50 to-cream-50"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sunny-400/40 blur-2xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-accent-200/50 blur-2xl sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 font-heading text-sm font-semibold text-accent-600 shadow-sm ring-1 ring-accent-100">
            <Sparkles className="h-4 w-4" />
            {siteConfig.doctorShort} · Saltillo, Coahuila
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight text-primary-900 sm:text-5xl lg:text-6xl">
            Sonrisas felices y sanas,{" "}
            <span className="text-accent-500">desde el primer diente</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl font-sans text-lg leading-relaxed text-primary-900/70 lg:mx-0">
            {siteConfig.tagline}. En {siteConfig.name} cuidamos a bebés, niños,
            adolescentes y niños con capacidades diferentes con calidez,
            paciencia y las más altas normas de calidad.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              href={siteConfig.whatsappHref(siteConfig.defaultWhatsappMessage)}
              variant="accent"
              external
              icon={<MessageCircle className="h-5 w-5" />}
            >
              Agendar cita por WhatsApp
            </Button>
            <Button
              href={siteConfig.phoneHref}
              variant="outline"
              icon={<Phone className="h-5 w-5" />}
            >
              Llamar a la clínica
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 font-heading text-sm font-semibold text-primary-800"
              >
                <Icon className="h-5 w-5 text-primary-500" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">
          <div className="absolute inset-0 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-primary-200/70" />
          <div className="absolute inset-6 rounded-[55%_45%_40%_60%/45%_55%_45%_55%] bg-white shadow-xl" />
          <span className="relative text-[9rem] leading-none sm:text-[11rem]" role="img" aria-label="Niño sonriendo">
            🦷
          </span>
          <span className="absolute right-2 top-4 text-4xl sm:right-6 sm:top-8" role="img" aria-label="Estrella">
            ✨
          </span>
          <span className="absolute bottom-6 left-0 text-4xl sm:bottom-10 sm:left-4" role="img" aria-label="Corazón">
            💛
          </span>
        </div>
      </div>
    </section>
  );
}
