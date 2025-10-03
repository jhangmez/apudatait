// src/types/proyectos.ts

export interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  imagen_banner: string;
  url: string;
  esNuevo?: boolean;
}
