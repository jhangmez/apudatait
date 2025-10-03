# 🚀 ApuDataIT - Landing Page Oficial

**Desarrollo de Chatbots con Inteligencia Artificial Generativa**

Este repositorio contiene el código fuente de la landing page oficial para **ApuDataIT**, una empresa especializada en el desarrollo de aplicaciones de chatbot utilizando tecnologías de IA Generativa.

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con una pila de tecnologías moderna y robusta:

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [Shadcn/ui](https://ui.shadcn.com/) (implementado con la configuración de Tailwind)

## ✨ Características Principales

- **Estructura Modular:** Organización de carpetas basada en buenas prácticas de Next.js (`/src/app`, `/src/components/layout`, `/src/components/sections`).
- **Diseño Responsivo (Mobile-First):** Experiencia de usuario optimizada para todos los dispositivos (móviles, tablets y escritorio).
- **Logo e Identidad:** Uso consistente de la paleta de colores corporativa (Rojo: `#c51a1a`, Dorado: `#d4af37`, Gris: `#363636`).
- **SEO Optimizado:** Configuración de Metadata, Open Graph y Twitter Cards en el `layout.tsx` para una mejor visibilidad en buscadores y redes sociales.
- **Experiencia de Usuario:** Implementación de Toast (`sonner`) para notificaciones no intrusivas (ej. al copiar el email de contacto).
- **Manejo de Errores:** Páginas dedicadas para `loading`, `not-found` y `error`.

## ⚙️ Configuración del Proyecto

Sigue estos pasos para tener una copia funcional del proyecto en tu máquina local.

### Prerrequisitos

Asegúrate de tener instalado:

- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/jhangmez/apudatait.git
    cd apudatait
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    # o
    yarn dev
    ```

El proyecto estará disponible en `http://localhost:3000`.

## 📂 Estructura de Carpetas

La estructura sigue un patrón organizado para Next.js con el App Router:

```plaintext
src/
├── app/                  # Rutas y configuración de la aplicación (layout, page)
│   ├── (rutas)
│   ├── globals.css       # Estilos globales y de Tailwind
│   ├── layout.tsx        # Shell de la aplicación (Navbar, Footer, Metadata)
│   └── page.tsx          # Página principal (Home/Landing)
├── components/           # Componentes reutilizables
│   ├── ui/               # Componentes atómicos (Botones, Cards, Inputs, etc.)
│   ├── layout/           # Componentes estructurales (Navbar, Footer, Logo)
│   └── sections/         # Bloques de la landing page (Hero, ContactSection, ProjectsSection)
├── constants/            # Datos estáticos (Enlaces de navegación)
├── data/                 # Archivos de datos (ej: proyectos.json)
├── hooks/                # Hooks personalizados (ej: use-is-mobile)
├── lib/                  # Funciones de utilidad (ej: cn, utils)
└── types/                # Definiciones de TypeScript
```

## 🎨 Personalización (Estilos y Componentes)

### Colores de la Marca (Tailwind Config)

Los colores de la marca están definidos en `tailwind.config.ts`:

| Nombre   | Hexadecimal | Uso                                          |
| :------- | :---------- | :------------------------------------------- |
| `rojizo` | `#c51a1a`   | Color principal/acento (Referencia Perú)     |
| `dorado` | `#d4af37`   | Color secundario/CTA (Llamativo, Tecnología) |
| `gris`   | `#363636`   | Texto Oscuro/Contraste                       |
| `blanco` | `#f5f5f5`   | Fondo Secundario                             |

### Componentes de Navegación

El archivo `src/constants/index.ts` controla los enlaces del `Navbar`:

```typescript
export const NAV_LINKS: NavLink[] = [
  // ...
  {
    href: "#contacto",
    label: "Hablemos",
    visible: true,
    isCTA: true, // ¡Define un botón de CTA!
  },
];
```

## 🤝 Contribuciones

Aceptamos contribuciones de la comunidad. Si encuentras un error o tienes una mejora:

1.  Haz un `fork` del repositorio.
2.  Crea una nueva rama (`git checkout -b feature/nueva-mejora`).
3.  Realiza tus cambios y haz `commit` (`git commit -m 'feat: Añadir nueva sección'`).
4.  Haz `push` a tu rama (`git push origin feature/nueva-mejora`).
5.  Abre un _Pull Request_.
