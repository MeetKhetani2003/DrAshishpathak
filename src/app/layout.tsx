import type { Metadata } from 'next'
import { Cinzel, Inter, Playfair_Display } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileCtaBar from '@/components/MobileCtaBar'
import '../index.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Dr. Ashish Pathak & Associates | Medico-Legal & Forensic Experts',
  description: 'Medico-legal and forensic evidence advisory bridging medical science and judicial expertise for advocates, courts, healthcare institutions and organizations.',
  authors: [{ name: 'Dr. Ashish Pathak & Associates' }],
  openGraph: {
    title: 'Dr. Ashish Pathak & Associates | Medico-Legal & Forensic Experts',
    description: "India's premier medico-legal and forensic evidence advisory. Justice. Science. Truth.",
    siteName: 'Dr. Ashish Pathak & Associates',
    images: ['/images/hero/hero-medical-legal.jpg'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col bg-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-[0.7rem] focus:font-600 focus:uppercase focus:tracking-[0.2em] focus:text-navy"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1 animate-fade-up">
          {children}
        </main>
        <Footer />
        <div className="h-[3.4rem] md:hidden" aria-hidden="true" />
        <MobileCtaBar />
      </body>
    </html>
  )
}
