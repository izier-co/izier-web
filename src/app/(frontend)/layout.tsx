import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Geist_Mono } from 'next/font/google'

export const metadata = {
  title:
    "Enterprise-Grade IT Software Solutions: Jakarta's Smart IT & Custom Development Experts | Izier",
  description:
    'Izier delivers enterprise-grade IT software solutions that empower your business to modernize workflows. As a Jakarta-based software house, we specialize in smart IT solutions and custom software development that are secure, scalable, and sustainable—serving healthcare, education, finance, retail, and more.',
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
