import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsappHref(siteConfig.defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar cita por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-4 text-white shadow-xl shadow-black/20 transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
      <MessageCircle className="relative h-6 w-6 shrink-0 fill-white" strokeWidth={0} />
      <span className="relative hidden font-heading text-sm font-semibold sm:inline">
        Agenda por WhatsApp
      </span>
    </a>
  );
}
