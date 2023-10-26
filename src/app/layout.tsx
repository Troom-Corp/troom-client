import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Providers from './providers'
import Container from '@/components/UI/Container'

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
