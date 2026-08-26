import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";
import { contact } from "@/data/site";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);
  return null;
}

/** Sticky mobile action bar — appears once the hero is out of view. */
function MobileCtaBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-gold/40 bg-navy-deep/95 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-stretch divide-x divide-white/10">
        <a href={`tel:${contact.phones[0].replace(/\s/g, "")}`} className="flex flex-1 items-center justify-center gap-2 py-4 text-[0.62rem] font-500 uppercase tracking-[0.2em] text-white/78">
          <Phone className="h-3.5 w-3.5 text-gold" strokeWidth={1.7} /> Call
        </a>
        <Link
          to="/contact"
          className="flex flex-[1.6] items-center justify-center bg-gold py-4 text-[0.66rem] font-600 uppercase tracking-[0.2em] text-navy"
        >
          Request Advisory
        </Link>
      </div>
    </div>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollManager />
      <a
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("main");
          el?.setAttribute("tabindex", "-1");
          el?.focus();
          el?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-[0.7rem] focus:font-600 focus:uppercase focus:tracking-[0.2em] focus:text-navy"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" key={pathname} className="flex-1 animate-fade-up">
        <Outlet />
      </main>
      <Footer />
      <div className="h-[3.4rem] md:hidden" aria-hidden="true" />
      <MobileCtaBar />
    </div>
  );
}
