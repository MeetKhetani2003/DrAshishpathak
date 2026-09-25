'use client';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'hi';

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangCtx>({ lang: 'en', setLang: () => {} });

const STORAGE_KEY = 'site-lang';

/** Read from localStorage — never SSR, never affected by Google Translate's cookie */
function readStoredLang(): Lang {
  try {
    return (localStorage.getItem(STORAGE_KEY) as Lang) === 'hi' ? 'hi' : 'en';
  } catch {
    return 'en';
  }
}

function setCookie(val: string) {
  document.cookie = `googtrans=${val}; path=/`;
  try { document.cookie = `googtrans=${val}; path=/; domain=.${location.hostname}`; } catch { /* ignore */ }
}

function clearCookie() {
  const exp = 'expires=Thu, 01 Jan 1970 00:00:00 UTC';
  document.cookie = `googtrans=; ${exp}; path=/`;
  try { document.cookie = `googtrans=; ${exp}; path=/; domain=.${location.hostname}`; } catch { /* ignore */ }
}

export function LangProvider({ children }: { children: ReactNode }) {
  // Always start 'en' to match SSR; update after mount from localStorage
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    setLangState(readStoredLang());
  }, []);

  // Keep html.is-hi class and Devanagari font var in sync with React state
  useEffect(() => {
    if (lang === 'hi') {
      document.documentElement.classList.add('is-hi');
      document.documentElement.style.setProperty(
        '--font-body',
        'var(--font-devanagari), var(--font-inter), sans-serif',
      );
    } else {
      document.documentElement.classList.remove('is-hi');
      document.documentElement.style.removeProperty('--font-body');
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);

    if (l === 'en') {
      clearCookie();
      // Let Google Translate reset to English, then reload to clear translated DOM
      try {
        if (typeof (window as any).doGTranslate === 'function') {
          (window as any).doGTranslate('en|en');
        }
      } catch { /* ignore */ }
      window.location.reload();
      return;
    }

    // Hindi: set cookie, then trigger translation
    setCookie(`/en/${l}`);
    const gtFn = (window as any).__gtSetLang;
    if (typeof gtFn === 'function') {
      gtFn(l, false); // false = skip re-saving cookie (already done)
    } else {
      // Widget not ready yet — reload so the cookie triggers GT on next load
      window.location.reload();
    }
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
