'use client'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.scss'
import { Providers } from '@/components/Providers'


const montserrat = Montserrat({
  subsets: ['cyrillic'],
  variable: '--font-montserrat',
  display: 'swap'
})


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body>
        <Providers>
          { children }
        </Providers>
      </body>
    </html>
  )
}
