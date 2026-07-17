# Hay Algo Más

Landing evangelística interactiva construida con React + Vite + Tailwind CSS.

## Instalación

```bash
npm install
npm run dev
```

## Configuración rápida (sin tocar componentes)

- **Versículo**: `src/data/verse.js`
- **Historia / bloques narrativos**: `src/data/story.js`
- **ID del video de YouTube**: `src/data/story.js` (`storyVideo.youtubeId`)
- **Número y mensaje de WhatsApp**: `src/data/contact.js`
- **Preguntas iniciales**: `src/data/questions.js`

## Estructura

```
src/
├── assets/       # imágenes/íconos propios (vacío por ahora, sin imágenes pesadas)
├── components/   # piezas reutilizables (botones, panel glass, pantallas)
├── pages/        # Experience.jsx orquesta todo el recorrido de scroll
├── routes/       # definición de rutas para cuando se agregue navegación real
├── hooks/        # useReducedMotion
├── data/         # contenido configurable (preguntas, historia, versículo, contacto)
├── utils/        # helpers (cn)
└── styles/       # index.css (Tailwind)
```

## Notas de rendimiento

- El iframe de YouTube no se monta hasta que el usuario toca "Escuchar su testimonio".
- Las partículas de fondo son pocas (36), lentas y se desactivan automáticamente si el
  sistema tiene activado "reducir movimiento".
- Todas las animaciones respetan `prefers-reduced-motion`.
