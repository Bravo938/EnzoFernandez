import { useMemo, useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useReducedMotion } from "../hooks/useReducedMotion";

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
      detectRetina: false, // ← evitamos recálculos de resolución
      pauseOnBlur: false, // ← que no se detenga al cambiar de pestaña o scroll
      particles: {
        number: {
          value: prefersReducedMotion ? 0 : 40,
          density: { enable: false }, // ← desactivamos densidad variable
        },
        color: {
          value: ["#4F46E5", "#7C3AED", "#3B82F6", "#06B6D4"],
        },
        opacity: {
          value: { min: 0.2, max: 0.6 },
          animation: {
            enable: true,
            speed: 0.3,
            minimumValue: 0.15,
            sync: false,
          },
        },
        size: {
          value: { min: 1.5, max: 3.5 },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#8B5CF6",
          opacity: 0.12,
          width: 1,
        },
        move: {
          enable: true,
          speed: prefersReducedMotion ? 0.2 : 0.5,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
          drift: 0.05,
        },
        shape: { type: "circle" },
      },
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
          resize: false, // ← ¡clave! evita reinicios por redimensionado
        },
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