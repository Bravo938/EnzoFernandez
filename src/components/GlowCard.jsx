import { cn } from "../utils/cn";

// Tarjeta con resplandor difuso detrás, usada como acento visual
// detrás de textos importantes (preguntas, versículo, invitación final).
export default function GlowCard({
  children,
  className,
  glow = "blue", // "blue" | "violet"
  ...props
}) {
  const glowColor =
    glow === "violet"
      ? "bg-violet/30"
      : "bg-blue/30";

  return (
    <div className={cn("relative", className)} {...props}>
      <div
        aria-hidden="true"
        className={cn(
          "absolute -inset-10 -z-10 rounded-full blur-3xl animate-breathe",
          glowColor
        )}
      />
      {children}
    </div>
  );
}
