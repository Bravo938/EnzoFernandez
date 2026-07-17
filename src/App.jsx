import Experience from "./pages/Experience";
import { ROUTES } from "./routes/routes";

export default function App() {
  // TODO: cuando exista la sección "Quiero conocer más", reemplazar este
  // handler por una navegación real (ej. react-router) usando ROUTES.
  const handleKnowMore = () => {
    console.info(`Navegar a la próxima sección (pendiente): ${ROUTES.home}`);
  };

  return <Experience onNavigateToNextSection={handleKnowMore} />;
}
