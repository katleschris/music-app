import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import SupabaseProvider from '@/providers/SupabaseProvider'
import Sidebar from '@/components/Sidebar'
import UserProvider from '@/providers/UserProvider'
import ModelProvider from '@/providers/ModelProvider'
import ToasterProvider from '@/providers/ToasterProvider'

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
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModelProvider />
            <Sidebar>
              {children}
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
