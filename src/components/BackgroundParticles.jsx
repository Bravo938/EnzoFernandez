import { useCallback, useMemo, useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useReducedMotion } from "../hooks/useReducedMotion";

// Fondo vivo y sutil: pocas partículas, movimiento muy lento, líneas tenues.
// Se inicializa una sola vez y queda fijo detrás de todo el contenido.
export default function BackgroundParticles() {
  const [ready, setReady] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: {
          value: prefersReducedMotion ? 0 : 36,
          density: { enable: true, area: 900 },
        },
        color: { value: ["#3B82F6", "#8B5CF6", "#38BDF8"] },
        opacity: { value: { min: 0.15, max: 0.45 } },
        size: { value: { min: 1, max: 2.4 } },
        links: {
          enable: true,
          distance: 140,
          color: "#3B82F6",
          opacity: 0.08,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.35,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
      },
      interactivity: {
        events: { onHover: { enable: false }, onClick: { enable: false } },
      },
    }),
    [prefersReducedMotion]
  );

  if (!ready) return null;

  return (
    <Particles
      id="hay-algo-mas-particles"
      className="pointer-events-none fixed inset-0 -z-10"
      options={options}
    />
  );
}
