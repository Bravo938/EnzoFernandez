import AnimatedContainer from "./AnimatedContainer";
import GlowCard from "./GlowCard";
import ButtonSecondary from "./ButtonSecondary";

// Pantalla de pregunta reflexiva. Cualquier respuesta continúa el recorrido:
// lo que importa es que la persona se detenga a pensar, no la respuesta en sí.
export default function QuestionScreen({ question, index, total, onAnswer }) {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 py-24">
      <AnimatedContainer className="w-full max-w-md text-center">
        <span className="font-mono text-xs tracking-[0.3em] text-sky/70">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>

        <GlowCard glow="blue" className="mt-6">
          <h2 className="text-balance font-display text-3xl font-medium leading-tight text-mist sm:text-4xl">
            {question.text}
          </h2>
        </GlowCard>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          {question.options.map((option) => (
            <ButtonSecondary
              key={option}
              onClick={() => onAnswer(option)}
              className="sm:min-w-[140px]"
            >
              {option}
            </ButtonSecondary>
          ))}
        </div>
      </AnimatedContainer>
    </section>
  );
}
