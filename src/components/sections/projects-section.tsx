// src/components/sections/projects-section.tsx

import Link from "next/link";
import Image from "next/image"; // Usar Image de Next.js para optimización
import proyectos from "@/data/proyectos.json";
import { Proyecto } from "@/types/proyectos";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
  const proyectosData: Proyecto[] = proyectos as Proyecto[];

  // Estado cuando no hay proyectos
  if (!proyectosData || proyectosData.length === 0) {
    return (
      <section id="proyectos" className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-titulo font-bold text-3xl md:text-4xl">
            Nuestros Proyectos
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Estamos compilando nuestros casos de éxito más innovadores. ¡Vuelve
            pronto para verlos!
          </p>
          <div className="mt-10 h-72 flex items-center justify-center bg-gray-100 dark:bg-gray-800/50 rounded-lg border-dashed border-2">
            <p className="font-semibold text-muted-foreground text-lg">
              Portafolio en Construcción...
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Estado cuando SÍ hay proyectos
  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-titulo font-bold text-3xl md:text-4xl">
            Nuestros Proyectos Recientes
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Casos de éxito que demuestran nuestra capacidad para entregar
            resultados excepcionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectosData.map((proyecto) => (
            <Link
              href={`/proyectos/${proyecto.url}`}
              key={proyecto.id}
              className="group block"
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl dark:hover:shadow-dorado/10 transition-shadow duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={proyecto.imagen_banner}
                    alt={`Banner del proyecto ${proyecto.nombre}`}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  {proyecto.esNuevo && (
                    <Badge className="absolute top-3 right-3 bg-dorado text-gris font-semibold">
                      NUEVO
                    </Badge>
                  )}
                </div>

                <div className="flex flex-col flex-grow p-6">
                  <CardHeader className="p-0">
                    <CardTitle className="font-titulo font-semibold text-xl">
                      {proyecto.nombre}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-grow p-0 pt-3">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {proyecto.descripcion}
                    </p>
                  </CardContent>

                  <CardFooter className="p-0 pt-4">
                    <span className="text-sm font-medium text-dorado group-hover:underline">
                      Ver detalles &rarr;
                    </span>
                  </CardFooter>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
