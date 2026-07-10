import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Button from "@/components/ui/Button";

export default function Contact() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    siteConfig.address.mapsQuery
  )}&z=16&output=embed`;

  return (
    <section id="contacto" className="bg-primary-50/60 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-bold uppercase tracking-wide text-accent-500">
            Contacto
          </span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-primary-900 sm:text-4xl">
            Agenda la cita de tu hijo hoy mismo
          </h2>
          <p className="mt-4 font-sans text-lg text-primary-900/70">
            Escríbenos por WhatsApp para conocer horarios disponibles, o
            visítanos en nuestro consultorio en Saltillo.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-between gap-8 rounded-3xl bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading font-bold text-primary-900">Dirección</p>
                  <p className="font-sans text-primary-900/70">
                    {siteConfig.address.line1}, {siteConfig.address.line2}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading font-bold text-primary-900">Teléfono</p>
                  <a href={siteConfig.phoneHref} className="font-sans text-primary-900/70 hover:text-accent-500">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading font-bold text-primary-900">WhatsApp</p>
                  <p className="font-sans text-primary-900/70">{siteConfig.whatsappDisplay}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading font-bold text-primary-900">Correo</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-sans text-primary-900/70 hover:text-accent-500"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading font-bold text-primary-900">Horario</p>
                  <p className="font-sans text-primary-900/70">{siteConfig.hours.days}</p>
                  {siteConfig.hours.ranges.map((range) => (
                    <p key={range} className="font-sans text-primary-900/70">
                      {range}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                href={siteConfig.whatsappHref(siteConfig.defaultWhatsappMessage)}
                variant="accent"
                external
                icon={<MessageCircle className="h-5 w-5" />}
                className="w-full"
              >
                Escribir por WhatsApp
              </Button>
              <Button
                href={siteConfig.phoneHref}
                variant="outline"
                icon={<Phone className="h-5 w-5" />}
                className="w-full"
              >
                Llamar
              </Button>
            </div>
          </div>

          <div className="min-h-[320px] overflow-hidden rounded-3xl shadow-sm">
            <iframe
              title="Ubicación de Odontología Infantil Especializada"
              src={mapSrc}
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
