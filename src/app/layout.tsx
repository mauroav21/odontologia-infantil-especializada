import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const baloo = Baloo_2({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://odontologiainfantilespecializada.com"),
  title: {
    default: `${siteConfig.name} | ${siteConfig.doctorShort}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "odontopediatra Saltillo",
    "dentista infantil Saltillo",
    "odontología infantil",
    "dentista para niños Coahuila",
    "Dra. Mónica González",
  ],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.doctorShort}`,
    description: siteConfig.description,
    url: "https://odontologiainfantilespecializada.com",
    siteName: siteConfig.name,
    locale: "es_MX",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${baloo.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-cream-50 text-foreground">
        {children}
      </body>
    </html>
  );
}
