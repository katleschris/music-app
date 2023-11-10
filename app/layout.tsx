import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import SupabaseProvider from '@/providers/SupabaseProvider'
import Sidebar from '../components/Sidebar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'music-app',
  description: 'personalise your music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider>
          <Sidebar>
            {children}
          </Sidebar>
        </SupabaseProvider>
      </body>
    </html>
  )
}
