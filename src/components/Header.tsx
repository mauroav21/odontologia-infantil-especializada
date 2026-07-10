"use client";

import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import ToothLogo from "@/components/ui/ToothLogo";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#doctora", label: "La Doctora" },
  { href: "#nosotros", label: "Por qué elegirnos" },
  { href: "#preguntas", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-primary-100 bg-cream-50/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2.5">
          <ToothLogo className="h-10 w-10" />
          <span className="font-heading text-lg font-bold leading-tight text-primary-800 sm:text-xl">
            Odontología Infantil
            <span className="block text-sm font-semibold text-accent-500 sm:text-base">
              Especializada
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-[15px] font-semibold text-primary-900/80 transition-colors hover:text-accent-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 font-heading text-sm font-semibold text-primary-800 hover:text-accent-500"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={siteConfig.whatsappHref(siteConfig.defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 font-heading text-sm font-semibold text-white shadow-md shadow-accent-500/30 transition-colors hover:bg-accent-600"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar cita
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-primary-800 lg:hidden"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-primary-100 bg-cream-50 px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 font-heading font-semibold text-primary-900/80"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-3">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border-2 border-primary-600 py-3 font-heading font-semibold text-primary-700"
            >
              <Phone className="h-4 w-4" />
              Llamar ahora
            </a>
            <a
              href={siteConfig.whatsappHref(siteConfig.defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-accent-500 py-3 font-heading font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
