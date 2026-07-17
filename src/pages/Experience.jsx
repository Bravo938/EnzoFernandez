import { useCallback, useMemo, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import BackgroundParticles from "../components/BackgroundParticles";
import ProgressTrail from "../components/ProgressTrail";
import QuestionScreen from "../components/QuestionScreen";
import TransitionScreen from "../components/TransitionScreen";
import StorySection from "../components/StorySection";
import VideoSection from "../components/VideoSection";
import ReflectionScreen from "../components/ReflectionScreen";
import VerseSection from "../components/VerseSection";
import CTASection from "../components/CTASection";

import { questions } from "../data/questions";
import { storyBlocks, storyVideo } from "../data/story";
import { verse } from "../data/verse";
import { whatsappLink } from "../data/contact";

// Cantidad de "pantallas" para el indicador de progreso:
// 3 preguntas + transición + historia + video + reflexión + versículo + CTA = 9
const TOTAL_SCREENS = 9;

// Cada pantalla se registra a través de este hook liviano para saber
// cuál está actualmente en el centro del viewport y así mover el
// indicador de progreso, sin re-renderizar toda la app en cada scroll.
function useScreenTracker(screenIndex, onActive) {
  const { ref } = useInView({
    threshold: 0.6,
    onChange: (inView) => {
      if (inView) onActive(screenIndex);
    },
  });
  return ref;
}

function Screen({ index, onActive, children }) {
  const ref = useScreenTracker(index, onActive);
  return <div ref={ref}>{children}</div>;
}

export default function Experience({ onNavigateToNextSection }) {
  const [currentScreen, setCurrentScreen] = useState(0);
  const screenRefs = useRef([]);

  const scrollToScreen = useCallback((index) => {
    const target = screenRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const registerRef = (index) => (node) => {
    screenRefs.current[index] = node;
  };

  const handleActive = useCallback((index) => setCurrentScreen(index), []);

  // Índices de pantalla dentro del recorrido de scroll único
  const idx = useMemo(
    () => ({
      q1: 0,
      q2: 1,
      q3: 2,
      transition: 3,
      story: 4,
      video: 5,
      reflection: 6,
      verse: 7,
      cta: 8,
    }),
    []
  );

  return (
    <div className="relative w-full ">
      <BackgroundParticles />
      <ProgressTrail total={TOTAL_SCREENS} current={currentScreen} />

      <div ref={registerRef(idx.q1)}>
        <Screen index={idx.q1} onActive={handleActive}>
          <QuestionScreen
            question={questions[0]}
            index={0}
            total={questions.length}
            onAnswer={() => scrollToScreen(idx.q2)}
          />
        </Screen>
      </div>

      <div ref={registerRef(idx.q2)}>
        <Screen index={idx.q2} onActive={handleActive}>
          <QuestionScreen
            question={questions[1]}
            index={1}
            total={questions.length}
            onAnswer={() => scrollToScreen(idx.q3)}
          />
        </Screen>
      </div>

      <div ref={registerRef(idx.q3)}>
        <Screen index={idx.q3} onActive={handleActive}>
          <QuestionScreen
            question={questions[2]}
            index={2}
            total={questions.length}
            onAnswer={() => scrollToScreen(idx.transition)}
          />
        </Screen>
      </div>

      <div ref={registerRef(idx.transition)}>
        <Screen index={idx.transition} onActive={handleActive}>
          <TransitionScreen onContinue={() => scrollToScreen(idx.story)} />
        </Screen>
      </div>

      <div ref={registerRef(idx.story)}>
        <Screen index={idx.story} onActive={handleActive}>
          <StorySection blocks={storyBlocks} />
        </Screen>
      </div>

      <div ref={registerRef(idx.video)}>
        <Screen index={idx.video} onActive={handleActive}>
          <VideoSection
            youtubeId={storyVideo.youtubeId}
            title={storyVideo.title}
          />
        </Screen>
      </div>

      <div ref={registerRef(idx.reflection)}>
        <Screen index={idx.reflection} onActive={handleActive}>
          <ReflectionScreen />
        </Screen>
      </div>

      <div ref={registerRef(idx.verse)}>
        <Screen index={idx.verse} onActive={handleActive}>
          <VerseSection text={verse.text} reference={verse.reference} />
        </Screen>
      </div>

      <div ref={registerRef(idx.cta)}>
        <Screen index={idx.cta} onActive={handleActive}>
          <CTASection
            whatsappLink={whatsappLink}
            onKnowMore={onNavigateToNextSection}
          />
        </Screen>
      </div>
    </div>
  );
}
