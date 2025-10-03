// src/app/not-found.tsx

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/layout/logo";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center bg-background">
      <div className="container mx-auto px-4">
        <Logo />
        <h2 className="mt-8 font-titulo text-3xl font-bold">
          Página No Encontrada
        </h2>
        <p className="mt-4 text-muted-foreground">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="bg-dorado hover:bg-dorado/90 text-gris rounded-full"
          >
            <Link href="/">Volver al Inicio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
