'use client';
import { useEffect, useState } from "react";
import Link from 'next/link';
import { Phone } from "lucide-react";
import { contact } from "@/data/site";

export default function MobileCtaBar() {
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
        <Link href="/contact"
          className="flex flex-[1.6] items-center justify-center bg-gold py-4 text-[0.66rem] font-600 uppercase tracking-[0.2em] text-navy"
        >
          Request Advisory
        </Link>
      </div>
    </div>
  );
}
