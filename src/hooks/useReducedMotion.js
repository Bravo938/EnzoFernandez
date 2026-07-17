import { useEffect, useState } from "react";

// Detecta si el usuario prefiere menos movimiento, para bajar la intensidad
// de las animaciones de Framer Motion en tiempo real.
export function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(query.matches);

    const handler = (event) => setPrefersReduced(event.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}
