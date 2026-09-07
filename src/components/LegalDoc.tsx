"use client";
import Link from 'next/link';;
import { Eyebrow, GoldRule, Reveal, Emblem, scrollToId } from "@/components/ui";
import { brand, contact } from "@/data/site";

export type LegalSection = { id: string; heading: string; body: string[]; list?: string[] };

export default function LegalDoc({
  eyebrow,
  title,
  updated,
  preamble,
  sections,
  footerNote,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  preamble: string;
  sections: LegalSection[];
  footerNote?: string;
}) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-deep pb-16 pt-36 text-white lg:pb-24 lg:pt-52">
        <div className="pointer-events-none absolute inset-0 z-[-1] grid-etch opacity-40" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-10 top-24 z-[-1] opacity-[0.06]" aria-hidden="true">
          <Emblem className="h-80 w-80" />
        </div>
        <div className="container-x">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-7 max-w-4xl font-display text-[2.2rem] font-600 uppercase leading-[1.06] sm:text-[3rem] lg:text-[3.8rem]">
            {title}
          </h1>
          <span className="mt-8 block h-px w-24 bg-gold" aria-hidden="true" />
          <p className="mt-8 max-w-2xl text-[0.98rem] leading-[1.9] text-white/62">{preamble}</p>
          <p className="mt-9 text-[0.66rem] uppercase tracking-[0.22em] text-white/40">Effective · {updated}</p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[17rem_1fr] lg:gap-20">
          <nav aria-label="Contents" className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow text-ink/45">Contents</p>
            <ol className="mt-5 space-y-2.5">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => scrollToId(s.id)}
                    className="group flex w-full gap-3 text-left text-[0.84rem] leading-snug text-ink/62 transition-colors duration-300 hover:text-navy"
                  >
                    <span className="font-display text-[0.66rem] tracking-[0.14em] text-gold">{String(i + 1).padStart(2, "0")}</span>
                    <span className="link-underline">{s.heading}</span>
                  </button>
                </li>
              ))}
            </ol>
            <GoldRule className="mt-8" />
            <div className="mt-8 bg-paper p-6">
              <p className="text-[0.82rem] leading-relaxed text-ink/65">
                Questions on this notice may be addressed to the desk at{" "}
                <a className="font-600 text-navy underline decoration-gold underline-offset-4" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
                .
              </p>
            </div>
          </nav>

          <div className="max-w-[46rem]">
            {sections.map((s, i) => (
              <Reveal key={s.id} delay={40}>
                <article id={s.id} className="scroll-mt-32 border-t border-navy/12 py-10 first:border-t-0 first:pt-0">
                  <p className="font-display text-[0.7rem] uppercase tracking-[0.24em] text-gold">
                    Clause {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 font-display text-[1.35rem] font-600 uppercase leading-[1.2] text-navy lg:text-[1.7rem]">
                    {s.heading}
                  </h2>
                  {s.body.map((p, j) => (
                    <p key={j} className="mt-5 text-[0.96rem] leading-[1.95] text-ink/75">
                      {p}
                    </p>
                  ))}
                  {s.list ? (
                    <ul className="mt-7 space-y-3 border-l border-navy/12 pl-6">
                      {s.list.map((li) => (
                        <li key={li} className="relative text-[0.93rem] leading-relaxed text-ink/70">
                          <span className="absolute -left-[1.55rem] top-[0.62rem] h-px w-3 bg-gold" aria-hidden="true" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </Reveal>
            ))}

            <div className="mt-12 border border-navy/12 bg-paper p-8">
              <p className="eyebrow text-navy/55">Notice</p>
              <p className="mt-4 text-[0.9rem] leading-[1.85] text-ink/70">
                {footerNote ??
                  `This notice forms part of the terms under which ${brand.firm} publishes information on this website.`}
              </p>
              <div className="mt-7 flex flex-wrap gap-6 text-[0.66rem] font-600 uppercase tracking-[0.18em]">
                <Link href="/contact" className="text-navy link-underline">Contact The Desk</Link>
                <Link href="/privacy-policy" className="text-navy link-underline">Privacy Policy</Link>
                <Link href="/disclaimer" className="text-navy link-underline">Disclaimer</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
