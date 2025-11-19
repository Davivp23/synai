import FloatingLines from "./components/FloatingLines";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
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
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white">
        <h1 className="text-5xl font-bold mb-4">Bienvenido a SynAI</h1>
        <p className="text-lg">La información que potencia tu decisión</p>
      </div>
    </div>
  );
}
