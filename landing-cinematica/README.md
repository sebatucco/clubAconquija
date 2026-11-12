# Landing cinematográfica — Aconquija Club de Vuelo

Versión nueva de la landing, en un solo `index.html` (sin build).

- **Stack:** HTML + CSS + GSAP 3.12.5 (ScrollTrigger) + Lenis 1.1.13 por CDN. Fuentes: Outfit + Instrument Serif.
- **Idea central:** la página es el vuelo. Un altímetro fijo sube a medida que bajás por la página y marca el "variómetro" según la velocidad de scroll; al final "aterriza".
- **Secciones:** hero · el vuelo en 3 tiempos (sección fija con scroll) · el club · experiencias (tarjetas que se apilan) · galería horizontal · Loma Bola · reservas por WhatsApp.

## Ver en local
```bash
cd landing-cinematica
npx serve .   # o: python3 -m http.server
```

## Pendiente antes de publicar
- Reemplazar el número de WhatsApp (`WA` en el script y los `wa.me/5493814000000`) por el real.
- Confirmar las cuentas de Instagram y Facebook.
- Cambiar las fotos de muestra por fotos reales del club.
