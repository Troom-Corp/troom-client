import './globals.scss'
import { Oswald, Roboto } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { Providers } from '@/components/Providers'
import Footer from '@/components/Footer'

const oswald = Oswald({
  weight: ['400', '500'],
  subsets: ['cyrillic'],
  variable: '--font-oswald',
  display: 'swap'
})

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['cyrillic'],
  variable: '--font-roboto',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Troom',
  description: 'Create by Troom-Team',
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  
  return (
    <html lang="en" className={`${oswald.variable} ${roboto.variable}`}>
      <body>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
      </body>
    </html>
  )
}
