import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import SupabaseProvider from '@/providers/SupabaseProvider'
import Sidebar from '@/components/Sidebar'
import Player from '@/components/Player'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'music-app',
  description: 'personalise your music',
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
