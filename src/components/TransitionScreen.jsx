import AnimatedContainer from "./AnimatedContainer";
import ButtonPrimary from "./ButtonPrimary";

// Pantalla 4: puente entre las preguntas y la historia.
// El segundo texto aparece con un pequeño retraso para reforzar el ritmo pausado.
export default function TransitionScreen({ onContinue }) {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 py-24 text-center">
      <AnimatedContainer>
        <h2 className="text-balance font-display text-3xl font-medium text-mist sm:text-4xl">
          No sos la única persona que pasó por eso.
        </h2>
      </AnimatedContainer>

      <AnimatedContainer delay={0.6} className="mt-6 max-w-sm">
        <p className="text-balance font-body text-lg text-mist/70">
          Conocé la historia de alguien que también buscó respuestas.
        </p>
      </AnimatedContainer>

      <AnimatedContainer delay={1.1} className="mt-12">
        <ButtonPrimary onClick={onContinue}>Continuar</ButtonPrimary>
      </AnimatedContainer>
    </section>
  );
}
