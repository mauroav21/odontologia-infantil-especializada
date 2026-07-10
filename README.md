# Odontología Infantil Especializada — Landing Page

Landing page para **Odontología Infantil Especializada**, consultorio de la
Dra. Mónica Fabiola González Hernández (odontopediatra) en Saltillo, Coahuila.

Construido con [Next.js](https://nextjs.org) (App Router) y
[Tailwind CSS](https://tailwindcss.com), listo para desplegarse en
[Vercel](https://vercel.com).

## Stack

- Next.js 16 (App Router, React 19)
- Tailwind CSS v4
- TypeScript
- [pnpm](https://pnpm.io) como gestor de paquetes
- Iconos: [lucide-react](https://lucide.dev)

## Desarrollo local

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio.

## Configuración del negocio

Todos los datos de contacto (teléfono, WhatsApp, dirección, correo, redes
sociales) viven en un solo lugar: [`src/lib/site-config.ts`](src/lib/site-config.ts).
Edita ese archivo para actualizar la información sin tocar los componentes.

> **Pendiente:** agregar la URL real de Facebook en `siteConfig.social.facebook`.

## Scripts

```bash
pnpm dev      # servidor de desarrollo
pnpm build    # build de producción
pnpm start    # sirve el build de producción
pnpm lint     # linter
```

## Despliegue en Vercel

1. Importa este repositorio en [vercel.com/new](https://vercel.com/new).
2. Vercel detecta Next.js automáticamente (no se requiere configuración
   adicional; usa `pnpm install` y `pnpm build` por el `pnpm-lock.yaml`).
3. Despliega — no requiere variables de entorno.
