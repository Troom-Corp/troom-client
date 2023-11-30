'use client'

import type { Metadata } from 'next'
import Providers from '@/components/Providers'
import Navigation from '@/components/sidebar/Navigation'

import { Nunito } from 'next/font/google'
import '@/styles/global/_globals.scss'

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  display: 'swap'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={nunito.variable}>
      <body>
        <Providers>
            { children }
        </Providers>
      </body>
    </html>
  )
}
