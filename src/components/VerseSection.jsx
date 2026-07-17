import AnimatedContainer from "./AnimatedContainer";
import GlowCard from "./GlowCard";

// Pantalla 8: el versículo se recibe por props (viene de src/data/verse.js),
// nunca hardcodeado acá, para poder cambiarlo sin tocar el componente.
export default function VerseSection({ text, reference }) {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 py-24 text-center">
      <AnimatedContainer className="w-full max-w-lg">
        <GlowCard glow="violet">
          <p className="text-balance font-display text-3xl font-light leading-relaxed text-mist sm:text-4xl">
            &ldquo;{text}&rdquo;
          </p>
          <p className="mt-8 font-mono text-sm tracking-[0.2em] text-gold">
            {reference.toUpperCase()}
          </p>
        </GlowCard>
      </AnimatedContainer>
    </section>
  );
}
