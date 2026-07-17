import AnimatedContainer from "./AnimatedContainer";

// Pantalla 7: tres líneas que aparecen de forma escalonada, sin botón,
// para que el usuario simplemente siga bajando cuando esté listo.
export default function ReflectionScreen() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <AnimatedContainer>
        <h2 className="text-balance font-display text-2xl font-medium text-mist/90 sm:text-3xl">
          La historia de Enzo no es única.
        </h2>
      </AnimatedContainer>
      <AnimatedContainer delay={0.4}>
        <p className="text-balance max-w-sm font-body text-lg text-mist/70">
          Miles de personas encontraron esperanza cuando conocieron a Jesús.
        </p>
      </AnimatedContainer>
      <AnimatedContainer delay={0.8}>
        <p className="text-balance max-w-sm font-display text-xl font-medium text-sky">
          ¿Y si hoy fuera tu oportunidad?
        </p>
      </AnimatedContainer>
    </section>
  );
}
