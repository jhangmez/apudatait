// src/components/sections/hero-section.tsx

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="py-28 md:py-36 text-center bg-gray-50 dark:bg-gris/10"
    >
      <div className="container mx-auto px-4">
        <h1 className="font-titulo font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight">
          <span className="text-gris">Creamos Chatbots con</span> <br />
          <span className="text-dorado">
            Inteligencia Artificial Generativa
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Transformamos la interacción con tus clientes a través de soluciones
          de IA personalizadas, utilizando tecnologías como Agent Framework y
          desarrollos a medida.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-dorado hover:bg-dorado/90 text-gris rounded-full px-8"
          >
            <Link href="#contacto">Inicia tu Proyecto</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8"
          >
            <Link href="#proyectos">Ver Proyectos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
