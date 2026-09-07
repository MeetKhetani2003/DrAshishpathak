"use client";
import Link from 'next/link';;
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { brand, contact, footerColumns } from "@/data/site";
import { Emblem, GoldRule } from "@/components/ui";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 grid-etch opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 lg:block"
        aria-hidden="true"
      >
        <Emblem className="h-[26rem] w-[26rem] opacity-[0.055]" />
      </div>

      <div className="container-x relative py-16 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_2fr]">
          <div>
            <div className="flex items-center gap-4">
              <img src="/logos/logo.png" alt="Logo" className="h-12 w-auto object-contain brightness-0 invert" />
              <div>
                <p className="font-display text-lg uppercase tracking-[0.14em]">{brand.firm}</p>
                <p className="mt-1.5 text-[0.6rem] font-500 uppercase tracking-[0.34em] text-gold-soft">
                  {brand.brandName}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm font-editorial text-[1.15rem] italic leading-relaxed text-white/58">
              {brand.tagline}
            </p>
            <p className="mt-5 max-w-sm text-[0.82rem] leading-relaxed text-white/62">{brand.core}</p>
            <GoldRule className="mt-8 max-w-[16rem]" />
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))]" >
            {footerColumns.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h3 className="eyebrow text-gold/80">{col.heading}</h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.to}
                        className="group inline-flex items-center gap-2 text-[0.86rem] text-white/70 transition-colors duration-300 hover:text-white"
                      >
                        <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-3" />
                        <span className="link-underline">{l.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
          {contact.offices.map((o) => (
            <div key={o.kind} className="flex gap-3.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/75" strokeWidth={1.6} />
              <div>
                <p className="eyebrow text-white/45">{o.kind}</p>
                <p className="mt-2 font-display text-[0.95rem] tracking-[0.04em]">
                  {o.city}, {o.state}
                </p>
              </div>
            </div>
          ))}
          <div className="space-y-3">
            {contact.phones.map((p) => (
              <a
                key={p}
                href={`tel:${p.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-[0.88rem] text-white/72 transition-colors hover:text-gold-soft"
              >
                <Phone className="h-4 w-4 text-gold/75" strokeWidth={1.6} /> {p}
              </a>
            ))}
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 break-all text-[0.82rem] text-white/60 transition-colors hover:text-gold-soft"
            >
              <Mail className="h-4 w-4 shrink-0 text-gold/75" strokeWidth={1.6} /> {contact.email}
            </a>
            <div className="mt-4 flex items-center gap-4 pt-4 border-t border-white/10">
              {contact.socials.facebook && (
                <a href={contact.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FacebookIcon className="h-5 w-5 text-white/60 transition-colors hover:text-gold-soft" />
                </a>
              )}
              {contact.socials.instagram && (
                <a href={contact.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <InstagramIcon className="h-5 w-5 text-white/60 transition-colors hover:text-gold-soft" />
                </a>
              )}
              {contact.socials.youtube && (
                <a href={contact.socials.youtube} target="_blank" rel="noreferrer" aria-label="Youtube">
                  <YoutubeIcon className="h-5 w-5 text-white/60 transition-colors hover:text-gold-soft" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col gap-4 py-6 text-[0.68rem] text-white/58 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {brand.firm}. All Rights Reserved. · {brand.domain}</p>
          <div className="flex items-center gap-6">
            <Link href="/disclaimer" className="link-underline hover:text-white/70">Disclaimer</Link>
            <Link href="/privacy-policy" className="link-underline hover:text-white/70">Privacy Policy</Link>
            <Link href="/admin/experts" className="link-underline text-gold-soft hover:text-gold">Admin</Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex h-9 w-9 items-center justify-center border border-white/15 text-white/60 transition-all duration-300 hover:border-gold hover:text-gold"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}
