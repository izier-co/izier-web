import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Geist_Mono } from 'next/font/google'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

const geistMono = Geist_Mono({
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistMono.className} bg-brand-white dark:bg-brand-black w-full h-screen px-48`}
    >
      <body>
        <ThemeProvider enableSystem={true} disableTransitionOnChange={true} attribute="class">
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
