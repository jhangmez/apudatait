// src/constants/index.ts

export type NavLink = {
  href: string;
  label: string;
  visible: boolean;
  isCTA?: boolean; // Call to Action
};

export const NAV_LINKS: NavLink[] = [
  { href: "#servicios", label: "Servicios", visible: true },
  { href: "#proyectos", label: "Proyectos", visible: true },
  { href: "#nosotros", label: "Nosotros", visible: true },
  {
    href: "#contacto",
    label: "Hablemos",
    visible: true,
    isCTA: true, // Este será nuestro botón destacado
  },
];
