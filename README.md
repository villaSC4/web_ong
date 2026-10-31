# ONGD UJ MAYA — Plataforma Web Institucional & Escuela Digital (Tacna, Perú)

Plataforma web multipágina desarrollada en **React 19 + Vite + Tailwind CSS v4 + Framer Motion** para la **Asociación Multidisciplinaria Uj Maya (ONGD UJ MAYA)** y su red juvenil **Lumina Voluntarios**.

## Rutas de la Plataforma (`react-router-dom`)
- `/` — **Inicio:** Visor fotográfico real en Tacna, Las 5 Manos de UJ MAYA, Orientador Interactivo de Ruta y Galería con Lightbox.
- `/nosotros` — **Quiénes Somos:** Carta de Presentación oficial (Presidenta Margarita V. Herrera Bendezú), Línea de Tiempo Interactiva (2015–2026) y Radar de Alianzas.
- `/programa` — **Programa DreamBuilder:** Malla interactiva de 12 cursos, selector *"Yo Quiero..."* y simulador en vivo del **Constructor del Plan de Negocios**.
- `/certificacion` — **Certificación Laboral MTPE:** Simulador de elegibilidad laboral y los 6 estándares autorizados por el Ministerio de Trabajo (Constancia N° `202400293` — *Agencia Quality Work Nikilia E.I.R.L.*).
- `/lumina` — **Lumina Voluntarios:** Convocatoria juvenil en Tacna, calculador de horas certificadas y conexión con las 3 redes oficiales.
- `/sumate` — **Súmate y Contacto:** Simulador de impacto solidario/corporativo y canales oficiales de atención en Tacna.

## Desarrollo Local

```bash
npm install
npm run dev
```

## Compilación para Producción

```bash
npm run build
npm run preview
```

## Despliegue en GitHub y Vercel

Este proyecto ya incluye [`vercel.json`](./vercel.json) configurado con *SPA Rewrites* para que todas las rutas (`/nosotros`, `/programa`, `/certificacion`, `/lumina`, `/sumate`) funcionen directamente al recargar en Vercel.

```bash
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git branch -M main
git push -u origin main
```

