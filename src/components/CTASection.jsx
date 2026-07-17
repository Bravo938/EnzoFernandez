import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import AnimatedContainer from "./AnimatedContainer";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";

// Pantalla 9: cierre de la experiencia. "Quiero conocer más" queda listo
// para conectarse a una futura sección/ruta; "Hablar con alguien" abre WhatsApp.
export default function CTASection({ whatsappLink, onKnowMore }) {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 py-24 text-center">
      <AnimatedContainer className="w-full max-w-md">
        <h2 className="text-balance font-display text-3xl font-medium text-mist sm:text-4xl">
          Jesús sigue transformando vidas.
        </h2>

        <div className="mt-12 flex flex-col items-center gap-4">
          <ButtonPrimary
            icon={FaArrowRight}
            onClick={onKnowMore}
            className="w-full sm:w-auto"
          >
            Quiero conocer más
          </ButtonPrimary>

          <ButtonSecondary
            icon={FaWhatsapp}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            Hablar con alguien
          </ButtonSecondary>
        </div>
      </AnimatedContainer>
    </section>
  );
}
