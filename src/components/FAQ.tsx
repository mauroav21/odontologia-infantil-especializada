"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const faqs = [
  {
    question: "¿A qué edad debe ser la primera visita al odontopediatra?",
    answer:
      "Se recomienda que la primera visita sea alrededor del primer año de vida o cuando aparezcan los primeros dientes. Entre más pronto se revise, más fácil es prevenir problemas y crear hábitos positivos.",
  },
  {
    question: "¿Qué es la odontopediatría y en qué se diferencia de un dentista general?",
    answer:
      "Es la especialidad dental enfocada en bebés, niños y adolescentes. El odontopediatra recibe formación adicional en manejo de conducta, crecimiento bucal infantil y en tratar a niños con capacidades diferentes.",
  },
  {
    question: "¿Atienden a niños con capacidades diferentes?",
    answer:
      "Sí, la atención a niños con capacidades diferentes es parte central de nuestros servicios, con un trato paciente y adaptado a las necesidades de cada niño.",
  },
  {
    question: "¿Cómo puedo preparar a mi hijo para su primera cita?",
    answer:
      "Habla de la visita con naturalidad y sin miedo, evita palabras como \"dolor\" o \"inyección\", y permite que el equipo explique cada paso con su propio lenguaje amigable para niños.",
  },
  {
    question: "¿Cómo agendo una cita?",
    answer:
      "Lo más rápido es escribirnos por WhatsApp y con gusto te ayudamos a encontrar un horario. También puedes llamarnos directamente a la clínica.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="preguntas" className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-heading text-sm font-bold uppercase tracking-wide text-accent-500">
          Preguntas frecuentes
        </span>
        <h2 className="mt-2 font-heading text-3xl font-extrabold text-primary-900 sm:text-4xl">
          Resolvemos tus dudas
        </h2>
      </div>

      <div className="mt-10 flex flex-col gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-primary-100 bg-white"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-heading font-bold text-primary-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-accent-500 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <p className="px-5 pb-5 font-sans leading-relaxed text-primary-900/70">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex flex-col items-center gap-3 rounded-3xl bg-primary-50 p-8 text-center">
        <p className="font-heading text-lg font-bold text-primary-900">
          ¿Tienes otra pregunta?
        </p>
        <a
          href={siteConfig.whatsappHref(
            "Hola, tengo una pregunta sobre la atención dental para mi hijo/a."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 font-heading font-semibold text-white shadow-md shadow-accent-500/30 transition-colors hover:bg-accent-600"
        >
          <MessageCircle className="h-5 w-5" />
          Pregúntanos por WhatsApp
        </a>
      </div>
    </section>
  );
}
