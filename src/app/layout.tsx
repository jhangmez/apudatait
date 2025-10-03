import type { Metadata } from "next";
import { fontTitulo, fontCuerpo } from "./fonts";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const siteUrl = "https://www.apudatait.com";

export const metadata: Metadata = {
  // Título dinámico y amigable para SEO
  title: {
    default: "ApuDataIT | Chatbots con IA Generativa para Empresas",
    template: "%s | ApuDataIT",
  },
  description:
    "Potencia tu negocio con chatbots inteligentes y soluciones de IA Generativa. En ApuDataIT, desarrollamos asistentes virtuales a medida desde Chiclayo, Perú.",

  keywords: [
    "chatbot",
    "IA Generativa",
    "inteligencia artificial",
    "desarrollo de software",
    "Agent Framework",
    "Azure",
    "automatización",
    "Perú",
    "Chiclayo",
    "ApuDataIT",
  ],

  // Información del autor
  authors: [{ name: "ApuDataIT", url: siteUrl }],
  creator: "ApuDataIT",

  // URL canónica para evitar contenido duplicado
  metadataBase: new URL(siteUrl),

  // Configuración para Open Graph (redes sociales)
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteUrl,
    title: "ApuDataIT | Chatbots con IA Generativa para Empresas",
    description:
      "Transformamos la interacción con tus clientes a través de soluciones de IA personalizadas.",
    siteName: "ApuDataIT",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Logo de ApuDataIT sobre un fondo tecnológico.",
      },
    ],
  },

  // Configuración para Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "ApuDataIT | Chatbots con IA Generativa para Empresas",
    description:
      "Transformamos la interacción con tus clientes a través de soluciones de IA personalizadas.",
    images: [`${siteUrl}/og-image.png`],
  },

  // Íconos y manifiesto
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16.ico",
    apple: "/apple-touch-icon.png",
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
      suppressHydrationWarning
      className={`${fontTitulo.variable} ${fontCuerpo.variable}`}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="ApuDataIT" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon.ico"
          sizes="128x128"
        />
      </head>
      <body
        className={`bg-background text-foreground font-cuerpo selection:bg-[#304bd1] selection:text-primary-foreground antialiased`}
      >
        <noscript>Página realizada por Jhan Gómez P. @jhangmez.</noscript>
        <Toaster />
        <Providers>
          <Navbar />
          <Toaster />
          <main className="pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
