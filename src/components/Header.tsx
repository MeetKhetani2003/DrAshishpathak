"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';;
import { Menu, X, Phone } from "lucide-react";
import { brand, contact, nav } from "@/data/site";
import { ChevronDown } from "lucide-react";
import { Wordmark } from "@/components/ui";
import { cn } from "@/utils/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setJoinOpen(false);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* micro bar */}
        <div
          className={cn(
            "hidden border-b transition-all duration-500 md:block",
            solid ? "border-navy-line/60 bg-navy-deep/95" : "border-white/10 bg-navy-deep/45 backdrop-blur-[2px]",
          )}
        >
          <div className="container-x flex h-9 items-center justify-between text-[0.58rem] font-500 uppercase tracking-[0.26em] text-white/60">
            <span className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gold/80" />
              Medico-Legal &amp; Forensic Advisory
            </span>
            <div className="flex items-center gap-7">
              <span>Greater Noida&nbsp;•&nbsp;Agra</span>
              <a href={`tel:${contact.phones[0].replace(/\s/g, "")}`} className="text-gold-soft transition-colors hover:text-gold">
                {contact.phones[0]}
              </a>
            </div>
          </div>
        </div>

        {/* main nav */}
        <div
          className={cn(
            "relative transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
            solid ? "bg-navy-deep/92 shadow-[0_18px_46px_-24px_rgba(0,0,0,.75)] backdrop-blur-xl" : "bg-transparent",
          )}
        >
          <div className={cn("container-x flex items-center justify-between transition-all duration-500", solid ? "h-[4.4rem]" : "h-[5.1rem]")}>
            <Link href="/" aria-label={`${brand.firm} — home`} className="shrink-0">
              <Wordmark tone="light" compact={solid} />
            </Link>

              <nav aria-label="Primary" className="hidden items-center gap-7 xl:gap-8 lg:flex">
              {nav.map((item) => {
                const isActive = pathname === item.to;
                return (
                  <Link key={item.to} href={item.to} className={cn(
                      "group relative py-2 text-[0.66rem] font-500 uppercase tracking-[0.2em] transition-colors duration-300",
                      isActive ? "text-gold-soft" : "text-white/72 hover:text-white",
                    )}>
                      {item.label}
                      <span
                        className={cn(
                          "absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-400 ease-[cubic-bezier(.22,1,.36,1)]",
                          isActive ? "w-full" : "w-0 group-hover:w-full",
                        )}
                      />
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              {/* Join Us Dropdown */}
              <div 
                className="relative hidden md:block"
                onMouseEnter={() => setJoinOpen(true)}
                onMouseLeave={() => setJoinOpen(false)}
              >
                <button
                  type="button"
                  className="group relative flex items-center gap-1.5 overflow-hidden border border-gold/50 px-6 py-3 text-[0.63rem] font-600 uppercase tracking-[0.2em] text-gold-soft transition-colors duration-400 hover:text-navy"
                >
                  <span className="relative z-10">Join Us</span>
                  <ChevronDown className="relative z-10 h-3 w-3" />
                  <span className="absolute inset-0 z-0 translate-y-full bg-gold transition-transform duration-400 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0" />
                </button>
                
                {/* Dropdown Menu */}
                <div 
                  className={cn(
                    "absolute right-0 top-full mt-2 w-48 border border-white/10 bg-navy-deep/95 shadow-xl backdrop-blur-md transition-all duration-300",
                    joinOpen ? "translate-y-0 opacity-100 visible" : "translate-y-2 opacity-0 invisible"
                  )}
                >
                  <Link href="/contact?join=legal" 
                    className="block border-b border-white/5 px-4 py-3.5 text-[0.68rem] uppercase tracking-[0.15em] text-white/70 hover:bg-white/5 hover:text-gold-soft"
                  >
                    As a Legal Expert
                  </Link>
                  <Link href="/contact?join=medical" 
                    className="block px-4 py-3.5 text-[0.68rem] uppercase tracking-[0.15em] text-white/70 hover:bg-white/5 hover:text-gold-soft"
                  >
                    As a Medical Expert
                  </Link>
                </div>
              </div>

              <Link href="/contact"
                className="group relative hidden overflow-hidden bg-gold px-6 py-3 text-[0.63rem] font-600 uppercase tracking-[0.2em] text-navy transition-colors duration-400 hover:bg-gold-soft md:inline-flex"
              >
                <span className="relative z-10">Request Advisory</span>
              </Link>
              <Link href="/contact"
                className="bg-gold px-4 py-2.5 text-[0.58rem] font-600 uppercase tracking-[0.16em] text-navy transition-colors duration-300 hover:bg-gold-soft md:hidden"
              >
                Advisory
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors hover:border-gold/60 hover:text-gold-soft lg:hidden"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <span
            className={cn(
              "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent transition-opacity duration-500",
              solid ? "opacity-100" : "opacity-0",
            )}
            aria-hidden="true"
          />
          {/* reading progress */}
          <span
            className="absolute bottom-0 left-0 h-[2px] origin-left bg-gold transition-[transform] duration-200 ease-linear"
            style={{ transform: `scaleX(${progress})`, width: "100%", opacity: scrolled ? 1 : 0 }}
            role="progressbar"
            aria-label="Page scroll progress"
            aria-valuenow={Math.round(progress * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </header>

      {/* mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
          "transition-opacity duration-400",
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm"
        />
        <nav className="absolute inset-x-0 top-0 origin-top bg-navy-deep pt-[5.6rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,.9)] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
          style={{ transform: open ? "translateY(0)" : "translateY(-101%)" }}>
          <ul className="container-x flex flex-col divide-y divide-white/8 py-2">
            {nav.map((item, i) => (
              <li key={item.to}>
                <Link href={item.to}
                  tabIndex={open ? 0 : -1}
                  className="flex items-baseline gap-4 py-4 font-display text-[1.05rem] uppercase tracking-[0.06em] text-white/86 transition-colors hover:text-gold"
                >
                  <span className="text-[0.6rem] font-500 text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="container-x flex flex-col gap-3 pb-9 pt-5">
            <Link href="/contact"
              tabIndex={open ? 0 : -1}
              className="flex items-center justify-center gap-2 bg-gold px-6 py-4 text-[0.66rem] font-600 uppercase tracking-[0.2em] text-navy"
            >
              Request Advisory
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/contact?join=legal"
                tabIndex={open ? 0 : -1}
                className="flex items-center justify-center border border-white/20 px-4 py-3.5 text-center text-[0.6rem] font-600 uppercase tracking-[0.15em] text-gold-soft"
              >
                Join as Legal
              </Link>
              <Link href="/contact?join=medical"
                tabIndex={open ? 0 : -1}
                className="flex items-center justify-center border border-white/20 px-4 py-3.5 text-center text-[0.6rem] font-600 uppercase tracking-[0.15em] text-gold-soft"
              >
                Join as Medical
              </Link>
            </div>
            <a
              href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 border border-white/20 px-6 py-4 text-[0.66rem] font-500 uppercase tracking-[0.2em] text-white/80"
            >
              <Phone className="h-3.5 w-3.5" /> {contact.phones[0]}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
