// src/components/layout/footer.tsx

import { Logo } from "./logo";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const visibleLinks = NAV_LINKS.filter((link) => link.visible && !link.isCTA);

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Columna del Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Especialistas en chatbots con IA Generativa y automatización de
              procesos.
            </p>
          </div>

          {/* Columna de Enlaces */}
          <div>
            <h3 className="font-semibold mb-4 font-titulo">Navegación</h3>
            <ul className="space-y-2">
              {visibleLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-dorado transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna de Redes Sociales */}
          <div>
            <h3 className="font-semibold mb-4 font-titulo">Síguenos</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 hover:text-dorado" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 hover:text-dorado" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Github className="h-6 w-6 hover:text-dorado" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} ApuDataIT. Todos los derechos reservados.
            Chiclayo, Perú.
          </p>
        </div>
      </div>
    </footer>
  );
}
