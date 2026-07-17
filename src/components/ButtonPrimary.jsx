import { motion } from "framer-motion";
import { cn } from "../utils/cn";

// Botón principal: usado para "Continuar" y para la acción central de cada pantalla.
// Grande, alto contraste, sin animaciones bruscas.
export default function ButtonPrimary({
  children,
  className,
  icon: Icon,
  ...props
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4",
        "bg-gradient-to-r from-blue to-violet text-mist font-display font-medium text-base",
        "shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky",
        "min-h-[52px] min-w-[160px]",
        className
      )}
      {...props}
    >
      {children}
      {Icon ? <Icon className="text-lg" aria-hidden="true" /> : null}
    </motion.button>
  );
}
