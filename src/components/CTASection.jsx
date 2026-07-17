import { FaInstagram } from "react-icons/fa";
import AnimatedContainer from "./AnimatedContainer";
import ButtonSecondary from "./ButtonSecondary";

// Pantalla 9: cierre de la experiencia.
// Un único botón con efecto neón que redirige a Instagram.
export default function CTASection() {
  const instagramLink = "https://www.instagram.com/riosdevidamonteros/";

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 py-24 text-center">
      <AnimatedContainer className="w-full max-w-md">
        <h2 className="text-balance font-display text-3xl font-medium text-mist sm:text-4xl">
          Jesús sigue transformando vidas.
        </h2>

        <div className="mt-12 flex flex-col items-center gap-4">
          <ButtonSecondary
            icon={FaInstagram}
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto !border-pink-500 !text-pink-400 hover:!border-pink-400 hover:!text-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.7)] transition-all duration-300"
          >
            Quiero conocer más
          </ButtonSecondary>
        </div>
      </AnimatedContainer>
    </section>
  );
}