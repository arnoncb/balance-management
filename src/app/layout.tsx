import React from 'react'
import './globals.css'
import { AuthProvider } from '@/contexts/auth-context'

export const metadata = {
  title: 'e-Wallet',
  description: 'Manage your income',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-body`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
