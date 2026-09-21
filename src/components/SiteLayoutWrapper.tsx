'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';

export default function SiteLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return (
      <main id="main" className="flex-1">
        {children}
      </main>
    );
  }

  return (
    <>
      <Header />
      <main id="main" className="flex-1 animate-fade-up">
        {children}
      </main>
      <Footer />
      <div className="h-[3.4rem] md:hidden" aria-hidden="true" />
      <MobileCtaBar />
    </>
  );
}
