// src/components/layout/logo.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";

export function Logo() {
  const isMobile = useIsMobile();

  return (
    <Link
      href="/"
      className="flex items-center gap-2"
      aria-label="Volver al inicio"
    >
      {/* Ícono del logo */}
      <Image
        src="/apudataIT_logo.webp"
        alt="Logo de ApuDataIT"
        width={40}
        height={40}
        priority // Marcar como prioridad para mejorar el LCP
      />

      {/* El texto solo se renderiza si no es móvil (pantallas >= 768px) */}
      {/* {!isMobile && (
        <span className="font-titulo text-xl font-bold">
          <span className="text-gris">Apu</span>
          <span className="text-dorado">DataIT</span>
        </span>
      )} */}
      <span className="font-titulo text-xl font-bold">
        <span className="text-gris">Apu</span>
        <span className="text-dorado">DataIT</span>
      </span>
    </Link>
  );
}
