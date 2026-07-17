import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import AnimatedContainer from "./AnimatedContainer";
import GlassPanel from "./GlassPanel";
import ButtonPrimary from "./ButtonPrimary";

// Pantalla 6
// El video se carga al presionar el botón y se reproduce automáticamente (silenciado).
// El usuario puede desmutearlo haciendo clic en el icono de altavoz del reproductor.

export default function VideoSection({
  youtubeId = "T3NaBtL0uTI",
  title = "Testimonio de Enzo Fernández",
}) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 py-24 text-center">
      <AnimatedContainer className="w-full max-w-lg">
        {!videoLoaded ? (
          <GlassPanel className="flex aspect-video w-full flex-col items-center justify-center gap-6 p-8">
            <p className="text-balance font-body text-mist/70">
              Escuchá, en sus propias palabras, cómo Dios transformó su vida.
            </p>

            <ButtonPrimary
              icon={FaPlay}
              onClick={() => setVideoLoaded(true)}
              aria-label={`Reproducir: ${title}`}
            >
              Escuchar su testimonio
            </ButtonPrimary>
          </GlassPanel>
        ) : (
          <GlassPanel className="aspect-video w-full overflow-hidden p-0">
            <iframe
              className="h-full w-full rounded-3xl"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&rel=0`}
              title={title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </GlassPanel>
        )}
      </AnimatedContainer>
    </section>
  );
}