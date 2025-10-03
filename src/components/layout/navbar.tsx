// src/components/layout/navbar.tsx

"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"; // Importa el botón

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const visibleLinks = NAV_LINKS.filter((link) => link.visible);

  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Logo />

        {/* Links para Desktop (md y superior) */}
        <div className="hidden md:flex items-center gap-6">
          {visibleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                link.isCTA
                  ? "hidden" // Ocultamos el CTA como texto plano
                  : "hover:text-dorado"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Botón CTA */}
          <Button
            asChild
            className="bg-dorado hover:bg-dorado/90 text-gris rounded-full"
          >
            <Link href="#contacto">Hablemos</Link>
          </Button>
        </div>

        {/* Botón de Menú para Móvil (sm) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Abrir menú">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Panel de Menú Móvil */}
      <div
        className={cn(
          "md:hidden fixed top-0 left-0 w-full h-screen bg-background transform transition-transform duration-300 ease-in-out z-50",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="container mx-auto flex flex-col h-full p-4">
          <div className="flex justify-between items-center mb-8">
            <Logo />
            <button onClick={toggleMenu} aria-label="Cerrar menú">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 mt-10">
            {visibleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-2xl font-medium transition-colors",
                  !link.isCTA && "hover:text-dorado"
                )}
                onClick={toggleMenu}
              >
                {link.isCTA ? (
                  <Button
                    size="lg"
                    className="bg-dorado hover:bg-dorado/90 text-gris rounded-full px-8"
                  >
                    {link.label}
                  </Button>
                ) : (
                  link.label
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
