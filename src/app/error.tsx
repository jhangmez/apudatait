// src/app/error.tsx

"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/layout/logo";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center text-center bg-background">
      <div className="container mx-auto px-4">
        <Logo />
        <h2 className="mt-8 font-titulo text-3xl font-bold">
          ¡Ups! Algo salió mal
        </h2>
        <p className="mt-4 text-muted-foreground">
          Hemos encontrado un error inesperado. Puedes intentar recargar la
          página o volver al inicio.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button onClick={() => reset()} size="lg" className="rounded-full">
            Intentar de nuevo
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/">Volver al Inicio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
