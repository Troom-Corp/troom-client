import './globals.css'
import { Montserrat } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Providers from './providers'
import Container from '@/components/UI/Container'

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  display: 'swap',
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
    <html lang="en">
      <body className={montserrat.className}>
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
