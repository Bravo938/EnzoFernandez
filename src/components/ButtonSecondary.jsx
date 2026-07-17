import { motion } from "framer-motion";
import { cn } from "../utils/cn";

// Botón secundario: contorno sutil, glass, para acciones alternativas
// (ej. respuestas de las preguntas, "Hablar con alguien").
export default function ButtonSecondary({
  children,
  className,
  icon: Icon,
  href,
  ...props
}) {
  // Si recibe "href" se renderiza como <a> (ej. link de WhatsApp),
  // manteniendo exactamente el mismo estilo y animación que el botón.
  const MotionTag = href ? motion.a : motion.button;

  return (
    <MotionTag
      href={href}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02, borderColor: "rgba(56,189,248,0.6)" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4",
        "border border-white/15 bg-white/[0.04] backdrop-blur-md text-mist font-body font-medium text-base",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky",
        "min-h-[52px] min-w-[160px]",
        className
      )}
      {...props}
    >
      {children}
      {Icon ? <Icon className="text-lg" aria-hidden="true" /> : null}
    </MotionTag>
  );
}
