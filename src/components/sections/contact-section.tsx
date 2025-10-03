// src/components/sections/contact-section.tsx

"use client"; // Necesario para usar hooks (useState) y APIs del navegador

import * as React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"; // Importa el toast
import { Copy, Check } from "lucide-react"; // Iconos para feedback visual

const EMAIL_ADDRESS = "sales@apudatait.com";

export function ContactSection() {
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);

      // Muestra la notificación de éxito
      toast.success("Correo copiado exitosamente");

      // Cambia el ícono a 'Check' por 3 segundos
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (error) {
      toast.error("No se pudo copiar el correo.");
      console.error("Error al copiar al portapapeles:", error);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50 dark:bg-gris/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-titulo font-bold text-3xl md:text-4xl">
          ¿Listo para Innovar?
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
          Hablemos sobre cómo un chatbot inteligente puede potenciar tu negocio.
          Estamos aquí para ayudarte a construir el futuro.
        </p>

        <Button
          onClick={handleCopyEmail} // El evento onClick llama a nuestra función
          size="lg"
          className="mt-8 bg-dorado hover:bg-dorado/90 text-gris rounded-full px-8 transition-all duration-300"
        >
          {isCopied ? (
            <Check className="mr-2 h-5 w-5" />
          ) : (
            <Copy className="mr-2 h-5 w-5" />
          )}
          {isCopied ? "¡Copiado!" : "Copiar Email de Ventas"}
        </Button>
      </div>
    </section>
  );
}
