import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Sandlip-Oasis — Global Creative Collective',
    template: '%s | Sandlip-Oasis',
  },
  description: 'A global creative collective with studios in Amsterdam, New York, and Lagos. Brand identity, web, campaign creative, and motion — across three continents.',
  icons: {
    icon: '/Images/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <div className="grain" aria-hidden="true" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
