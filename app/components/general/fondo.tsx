import FloatingLines from "./FloatingLines";

export default function Fondo() {
    return (
        <>
            <div className="fixed inset-0 z-0 h-[100vh]">
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
        </>
    )
}