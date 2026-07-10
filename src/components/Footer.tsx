import { MapPin, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import ToothLogo from "@/components/ui/ToothLogo";
import FacebookIcon from "@/components/ui/FacebookIcon";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-50">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <ToothLogo className="h-9 w-9" />
              <span className="font-heading text-lg font-bold">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-primary-100/70">
              {siteConfig.tagline}. Atención odontológica especializada para
              bebés, niños y adolescentes en Saltillo, Coahuila.
            </p>
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent-500"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            )}
          </div>

          <div>
            <p className="font-heading font-bold">Enlaces rápidos</p>
            <nav className="mt-3 flex flex-col gap-2 font-sans text-sm text-primary-100/70">
              <a href="#servicios" className="hover:text-white">Servicios</a>
              <a href="#doctora" className="hover:text-white">La Doctora</a>
              <a href="#nosotros" className="hover:text-white">Por qué elegirnos</a>
              <a href="#preguntas" className="hover:text-white">Preguntas frecuentes</a>
              <a href="#contacto" className="hover:text-white">Contacto</a>
            </nav>
          </div>

          <div>
            <p className="font-heading font-bold">Contacto</p>
            <div className="mt-3 flex flex-col gap-3 font-sans text-sm text-primary-100/70">
              <a href={siteConfig.phoneHref} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 shrink-0" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={siteConfig.whatsappHref(siteConfig.defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                {siteConfig.whatsappDisplay}
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {siteConfig.address.line1}, {siteConfig.address.line2}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center font-sans text-xs text-primary-100/60">
          © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.doctorShort}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
