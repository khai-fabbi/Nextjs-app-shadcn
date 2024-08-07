import { ThemeProvider } from '@/components/theme-provider'
import { manropeFont } from '@/lib/fonts'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fabbi JSC',
  description: 'Blog QK',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={manropeFont.className}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster
              toastOptions={{
                position: 'top-center',
                duration: 3000,
                success: {},
                error: {},
              }}
            />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
