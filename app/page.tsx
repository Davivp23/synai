"use client";

import FloatingLines from "./components/FloatingLines";
import Logotipo from "./components/Logotipo";
import FadeContent from "@/components/FadeContent";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-black">
      <FadeContent>
        <div className="absolute inset-0 z-0">
          <FloatingLines
            linesGradient={['#1459c8']}
            enabledWaves={['middle', 'bottom']}
            lineCount={2}
            lineDistance={[50]}
            mouseDamping={0.01}
            parallax={false}
            middleWavePosition={{ x: 0, y: -0.5, rotate: 0 }}
            bottomWavePosition={{ x: 0, y: -0.5, rotate: 0 }}
            scrollSpeed={0.025}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-[100vw] h-[100vh] text-white">
          <Logotipo width={300} height={300} className="mb-8" />
          <h3 className="text-3xl font-regular">La información que potencia <b>tu decisión</b></h3>
          <div className="h-[10vh]"></div>
        </div>
      </FadeContent>
      <h1>PLACEHOLDER</h1>
      <h1>PLACEHOLDER</h1>
      <h1>PLACEHOLDER</h1>
      <h1>PLACEHOLDER</h1>
      <h1>PLACEHOLDER</h1>
      <div className="absolute bottom-5 w-full text-center z-10">
        <span className="text-white text-sm opacity-50">© 2024 SynAI. Todos los derechos reservados.</span>
      </div>
    </div>
  );
}
