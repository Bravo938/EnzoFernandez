import { cn } from "../utils/cn";

// Panel base de glassmorphism reutilizado en preguntas, tarjetas y CTAs.
export default function GlassPanel({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl",
        "shadow-[0_8px_40px_rgba(0,0,0,0.35)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
