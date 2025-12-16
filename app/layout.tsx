import type { Metadata } from 'next'
import { Playfair_Display, Outfit } from 'next/font/google'
import './globals.css'
import SmoothScroll from './components/Scroll'
import FadeContent from './components/general/FadeContent'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['600'],
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'SynAI',
  description: 'La información que potencia tu decisión',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="font-sans">
        <SmoothScroll>
          <div className="relative w-full overflow-x-clip min-h-screen bg-black">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  )
}