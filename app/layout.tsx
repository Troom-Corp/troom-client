import './globals.css'
import { Oswald, Roboto } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import Container from '@/components/UI/Container'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${roboto.variable}`}>
      <body>
          <Providers>
            <Container>
              <Navbar />
              {children}
            </Container>
          </Providers>
      </body>
    </html>
  )
}
