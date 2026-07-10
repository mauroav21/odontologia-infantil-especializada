import { GraduationCap, BadgeCheck, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const credentials = [
  {
    icon: GraduationCap,
    text: siteConfig.specialty,
  },
  {
    icon: BadgeCheck,
    text: siteConfig.credential,
  },
  {
    icon: HeartHandshake,
    text: "Atención exclusiva a bebés, niños, adolescentes y niños con capacidades diferentes",
  },
];

export default function About() {
  return (
    <section id="doctora" className="bg-primary-50/60 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
          <div className="absolute inset-0 rounded-[60%_40%_45%_55%/50%_60%_40%_50%] bg-accent-200/60" />
          <div className="absolute inset-5 rounded-full bg-white shadow-xl" />
          <span className="relative text-8xl sm:text-9xl" role="img" aria-label="Odontopediatra">
            🦸‍♀️
          </span>
        </div>

        <div className="text-center lg:text-left">
          <span className="font-heading text-sm font-bold uppercase tracking-wide text-accent-500">
            Sobre la doctora
          </span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-primary-900 sm:text-4xl">
            {siteConfig.doctor}
          </h2>
          <p className="mt-4 font-sans text-lg leading-relaxed text-primary-900/70">
            Con años dedicados a la odontopediatría, la {siteConfig.doctorShort}
            {" "}combina experiencia clínica con una enorme paciencia y calidez
            para que cada niño viva su cita dental como una experiencia
            positiva, no como algo que temer.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {credentials.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-start gap-3 justify-center lg:justify-start"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-left font-sans font-semibold text-primary-900/80">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
