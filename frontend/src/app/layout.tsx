import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { customFont } from './fonts'
import 'leaflet/dist/leaflet.css'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SUL Mobility - Africa\'s Best EV Products',
  description: 'Easing the Transition to E-Mobility with Africa\'s Best EV Products, Driving Sustainable Change',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${customFont.variable}`}>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

