import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/components'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'DevLinks',
  description:
    'DevLinks is a platform for sharing links and resources with your community.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="box-border">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <main className="mx-auto max-w-xl">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
