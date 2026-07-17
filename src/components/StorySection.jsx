import AnimatedContainer from "./AnimatedContainer";
import GlassPanel from "./GlassPanel";

// Pantalla 5: la historia se cuenta en bloques cortos que van apareciendo
// a medida que el usuario hace scroll (cada bloque usa su propio Intersection Observer
// a través de AnimatedContainer). Mucho aire entre cada bloque, nada de párrafos largos.
export default function StorySection({ blocks }) {
  return (
    <section className="relative w-full px-6 py-32">
      <AnimatedContainer className="mx-auto mb-20 max-w-md text-center">
        <span className="font-mono text-xs tracking-[0.3em] text-violet/70">
          UNA HISTORIA REAL
        </span>
        <h2 className="mt-4 text-balance font-display text-3xl font-medium text-mist sm:text-4xl">
          Enzo Fernández
        </h2>
      </AnimatedContainer>

      <div className="mx-auto flex max-w-md flex-col gap-24">
        {blocks.map((block, i) => (
          <AnimatedContainer key={block.id} threshold={0.5}>
            <GlassPanel className="p-8">
              <span className="font-mono text-xs tracking-[0.25em] text-sky/70">
                {block.label.toUpperCase()}
              </span>
              <p className="mt-4 text-balance font-body text-lg leading-relaxed text-mist/85">
                {block.text}
              </p>
            </GlassPanel>
          </AnimatedContainer>
        ))}
      </div>
    </section>
  );
}
