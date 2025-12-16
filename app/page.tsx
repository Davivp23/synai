"use client";

import Fondo from "./components/general/fondo";
import Logotipo from "./components/Logotipo";
import FadeContent from "@/components/FadeContent";
import GlassChatMock from "./components/general/Chatbot";
import GlassNewsFeed from "./components/general/Noticias";
import VideoSection from "./components/general/VideoSection";

export default function Home() {
  return (
    <FadeContent>
      <Fondo />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-screen text-white pointer-events-none">
          {/* pointer-events-auto en los hijos interactivos para que el texto no bloquee el mouse del fondo si quieres interactividad */}
        <div className="pointer-events-auto flex flex-col items-center">
          <Logotipo width={300} height={300} className="mb-8" />
          <h3 className="text-3xl font-regular text-center">La información que potencia <b>tu decisión</b></h3>
        </div>
        <div className="h-[10vh]"></div>
      </div>
      <div className="relative z-10 w-full flex flex-col items-center gap-20 pb-20 text-white">
        <VideoSection videoId="7bHcUwYV0eI" />
        <GlassChatMock />
        <GlassNewsFeed />
        <div className="w-full text-center mt-10">
            <span className="text-white text-sm opacity-50">© 2024 SynAI. Todos los derechos reservados.</span>
        </div>
      </div>
    </FadeContent>
  );
}
