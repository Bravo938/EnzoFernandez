import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { cn } from "../utils/cn";

// Envoltorio reutilizable: fade + leve desplazamiento vertical + escalado suave.
// Se dispara con Intersection Observer, así cada pantalla / bloque aparece
// naturalmente al hacer scroll, sin animaciones bruscas.
export default function AnimatedContainer({
  children,
  className,
  delay = 0,
  once = true,
  threshold = 0.35,
  as: Component = motion.div,
}) {
  const prefersReducedMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: once, threshold });

  const variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      }
    : {
        hidden: { opacity: 0, y: 28, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
        },
      };

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
