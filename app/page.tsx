"use client";

import React from "react";

import Fondo from "./components/general/fondo";
import Logotipo from "./components/Logotipo";
import FadeContent from "@/components/FadeContent";
import GlassChatMock from "./components/general/Chatbot";
import GlassNewsFeed from "./components/general/Noticias";
import VideoSection from "./components/general/VideoSection";

export default function Home() {
  const [view, setView] = React.useState<'hero' | 'video' | 'placeholders'>('hero');

  const handleViewChange = (v: 'hero' | 'video' | 'placeholders') => {
    setView(v);
  };

  return (
    <FadeContent>
      <Fondo />
      <div className={`relative w-full ${view === 'hero' ? 'h-[100vh]' : 'hidden'}`}>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-screen text-white pointer-events-none">
            {/* pointer-events-auto en los hijos interactivos para que el texto no bloquee el mouse del fondo si quieres interactividad */}
          <div className="pointer-events-auto flex flex-col items-center">
            <Logotipo width={300} height={300} className="mb-8" />
                <h3 className="text-3xl font-regular text-center mb-12">
                  La información que potencia <b>tu decisión</b>
                </h3>
                <div className="flex gap-6">
                  <button
                    onClick={() => handleViewChange('video')}
                    className="px-8 py-3 border border-white/30 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
                  >
                    Video Promocional
                  </button>
                </div>
          </div>
          <div className="h-[10vh]"></div>
        </div>
      </div>
      <div className={`sticky h-[100vh] top-0 z-20 bg-black transition-opacity duration-500 ${view === 'video' ? 'block opacity-100 pointer-events-auto' : 'hidden opacity-0 pointer-events-none'}`}>
        <div className="w-full h-full flex flex-col">
          <div className="w-full p-6 flex justify-center absolute z-30 pointer-events-none">
             {/* pointer-events-auto en el botón para que sea clickeable sobre el absolute */}
            <button
              onClick={() => handleViewChange('hero')}
              className="px-6 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-colors text-sm backdrop-blur-sm text-white pointer-events-auto"
            >
              Volver al inicio
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <VideoSection videoId="7bHcUwYV0eI" />
          </div>
        </div>
      </div>
      <div className={`relative z-10 w-full flex flex-col items-center gap-20 pb-20 text-white ${view === 'hero' ? 'block' : 'hidden'}`}>
        <GlassNewsFeed />
        <GlassChatMock />
        <div className="w-full text-center mt-10">
            <span className="text-white text-sm opacity-50">© 2024 SynAI. Todos los derechos reservados.</span>
        </div>
      </div>
    </FadeContent>
  );
}
