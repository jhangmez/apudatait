// src/app/loading.tsx

import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/apudataIT_logo.webp"
          alt="Cargando ApuDataIT"
          width={80}
          height={80}
          className="animate-pulse"
        />
        <p className="text-muted-foreground font-semibold">Cargando...</p>
      </div>
    </div>
  );
}
