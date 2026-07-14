import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#F5F0E8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Patagonisima - Sabor de Origen | El Calafate, Patagonia Argentina',
  description: 'Galletitas artesanales y miel pura de la Patagonia Argentina. Sabores nacidos en El Calafate, elaborados con recetas tradicionales e ingredientes silvestres.',
  keywords: ['patagonisima', 'galletitas artesanales', 'miel patagonica', 'el calafate', 'patagonia argentina', 'productos gourmet'],
  authors: [{ name: 'Patagonisima' }],
  creator: 'Patagonisima',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://patagonisima.com',
    siteName: 'Patagonisima',
    title: 'Patagonisima - Sabor de Origen',
    description: 'Galletitas artesanales y miel pura de la Patagonia Argentina.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patagonisima - Sabor de Origen',
    description: 'Galletitas artesanales y miel pura de la Patagonia Argentina.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${montserrat.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
