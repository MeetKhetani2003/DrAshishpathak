import type { Metadata } from 'next'
import { Cinzel, Inter, Noto_Sans_Devanagari, Playfair_Display } from 'next/font/google'
import SiteLayoutWrapper from '@/components/SiteLayoutWrapper'
import '../index.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const devanagari = Noto_Sans_Devanagari({ subsets: ['devanagari'], weight: ['400', '500', '600', '700'], variable: '--font-devanagari', display: 'swap' })

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
    <html lang="en" className={`${inter.variable} ${cinzel.variable} ${playfair.variable} ${devanagari.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-white" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-[0.7rem] focus:font-600 focus:uppercase focus:tracking-[0.2em] focus:text-navy"
        >
          Skip to content
        </a>
        <SiteLayoutWrapper>
          {children}
        </SiteLayoutWrapper>

        {/* Google Translate Integration */}
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Apply or remove the is-hi class and Devanagari font
              function _applyHiClass(isHi) {
                if (isHi) {
                  document.documentElement.classList.add('is-hi');
                  document.documentElement.style.setProperty('--font-body', 'var(--font-devanagari), var(--font-inter), sans-serif');
                } else {
                  document.documentElement.classList.remove('is-hi');
                  document.documentElement.style.removeProperty('--font-body');
                }
              }

              // Robust language switcher exposed globally for Header buttons
              window.__gtSetLang = function(lang, saveCookie) {
                if (saveCookie !== false) saveCookie = true;

                var setCookie = function(val) {
                  document.cookie = "googtrans=" + val + "; path=/";
                  try { document.cookie = "googtrans=" + val + "; path=/; domain=." + location.hostname; } catch(e) {}
                };

                if (lang === 'en') {
                  var exp = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
                  document.cookie = "googtrans=; " + exp + "; path=/";
                  document.cookie = "googtrans=; " + exp + "; path=/; domain=." + location.hostname;
                  _applyHiClass(false);
                  window.location.reload();
                  return;
                }

                if (saveCookie) setCookie('/en/' + lang);
                _applyHiClass(lang === 'hi');

                // Strategy 1: Google's own doGTranslate global function
                try {
                  if (typeof doGTranslate === 'function') {
                    doGTranslate('en|' + lang);
                    return;
                  }
                } catch(e) {}

                // Strategy 2: Manipulate the hidden select element Google Translate creates
                var sel = document.querySelector('.goog-te-combo');
                if (sel) {
                  sel.value = lang;
                  sel.dispatchEvent(new Event('change'));
                  return;
                }

                // Strategy 3: Cookie already set — reload
                if (saveCookie) window.location.reload();
              };

              function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                  { pageLanguage: 'en', includedLanguages: 'en,hi', autoDisplay: false },
                  'google_translate_element'
                );
              // After widget initialises, re-apply saved language from localStorage
              setTimeout(function() {
                try {
                  var saved = localStorage.getItem('site-lang');
                  if (saved && saved !== 'en') {
                    window.__gtSetLang(saved, false);
                  }
                } catch(e) {}
              }, 400);
            }

              // Apply is-hi class immediately from localStorage (before widget loads)
              (function() {
                try {
                  var lang = localStorage.getItem('site-lang') === 'hi' ? 'hi' : 'en';
                  _applyHiClass(lang === 'hi');
                } catch(e) {}
              })();
            `,
          }}
        />
        <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async defer></script>
      </body>
    </html>
  )
}
