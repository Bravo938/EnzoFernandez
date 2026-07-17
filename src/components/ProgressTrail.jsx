import { motion } from "framer-motion";
import { cn } from "../utils/cn";

// Elemento de firma visual: un rastro vertical de puntos de luz a la derecha
// de la pantalla que indica en qué parte del recorrido está la persona.
// Discreto en mobile, más presente en pantallas grandes.
export default function ProgressTrail({ total, current }) {
  return (
    <div
      className="fixed right-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-3 sm:flex md:right-8"
      aria-hidden="true"
    >
      {Array.from({ length: total }).map((_, i) => (
        <motion.span
          key={i}
          className={cn(
            "block h-1.5 w-1.5 rounded-full",
            i === current ? "bg-sky" : "bg-white/20"
          )}
          animate={{
            scale: i === current ? 1.6 : 1,
            boxShadow:
              i === current
                ? "0 0 10px 2px rgba(56,189,248,0.7)"
                : "0 0 0 0 rgba(56,189,248,0)",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
