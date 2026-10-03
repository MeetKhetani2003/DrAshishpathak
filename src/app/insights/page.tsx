"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';
import { CalendarDays, Clock3, Tag } from "lucide-react";
import PageHero from "@/components/PageHero";
import { ArrowLink, Eyebrow, GoldRule, ImgReveal, MaskLines, PrimaryAction, Reveal, SectionHeading } from "@/components/ui";
import { insightCategories } from "@/data/insights";
import { cn } from "@/utils/cn";
import useSeo from "@/hooks/useSeo";


/* ----------------------------- Knowledge hub ----------------------------- */

export default function Insights() {
  const [active, setActive] = useState<string>("All");
  const [insights, setInsights] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/insights')
      .then(res => res.json())
      .then(data => {
        setInsights(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch insights", err);
        setLoading(false);
      });
  }, []);

  const filtered = active === "All" ? insights : insights.filter((i) => i.category === active);

  useSeo({
    title: "Insights | Medico-Legal & Forensic Knowledge Hub",
    description:
      "Concept notes and practice briefs on forensic interpretation, medicolegal documentation, toxicology limits, MACT disability assessment and healthcare compliance.",
  });

  return (
    <>
      <PageHero
        eyebrow="Knowledge Hub"
        title={["Medico-legal", "insights"]}
        image="/images/insights/insight-courtroom.jpg"
        alt="Courtroom interior where medico-legal evidence is tested"
        intro="Practice briefs and concept notes from the advisory desk — written to explain how medical material is read, tested and presented. These are explanatory notes, not news reports or outcome guarantees."
        meta={[
          { label: "Notes Published", value: `${insights.length}` },
          { label: "Streams", value: "05" },
          { label: "Format", value: "Concept · Brief · Guide" },
          { label: "Access", value: "Open" },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading eyebrow="Browse By Stream" size="sm" lines={["Five reading", "perspectives."]} />
            <nav aria-label="Insight categories" className="flex flex-wrap gap-2">
              {insightCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  aria-pressed={active === cat}
                  className={cn(
                    "border px-4 py-2.5 text-[0.63rem] font-600 uppercase tracking-[0.16em] transition-all duration-300",
                    active === cat ? "border-navy bg-navy text-white" : "border-navy/15 text-ink/60 hover:border-gold hover:text-navy",
                  )}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              <p className="col-span-full text-center text-ink/60">Loading insights...</p>
            ) : filtered.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 100}>
                <article className="group flex h-full flex-col">
                  <Link href={`/insights/${a.slug}`} className="block">
                    <ImgReveal src={a.image} alt={a.title} ratio="3/2" className="border border-navy/10" />
                    <div className="mt-6 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.18em]">
                      <span className="text-gold">{a.category}</span>
                      <span className="h-px w-6 bg-navy/20" aria-hidden="true" />
                      <span className="text-ink/40">{a.kind}</span>
                    </div>
                    <h2 className="mt-4 font-display text-[1.18rem] uppercase leading-[1.35] tracking-[0.01em] text-navy transition-colors duration-300 group-hover:text-navy/70 lg:text-[1.3rem]">
                      {a.title}
                    </h2>
                  </Link>
                  <p className="mt-4 flex-1 text-[0.88rem] leading-[1.8] text-ink/62">{a.excerpt}</p>
                  <footer className="mt-6 flex items-center gap-5 border-t border-navy/10 pt-4 text-[0.66rem] uppercase tracking-[0.14em] text-ink/45">
                    <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" strokeWidth={1.6} /> {a.date}</span>
                    <span className="flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" strokeWidth={1.6} /> {a.readingTime}</span>
                  </footer>
                </article>
              </Reveal>
            ))}
          </div>

          {!loading && filtered.length === 0 ? (
            <p className="mt-16 text-center text-[0.9rem] text-ink/55">No notes filed under this stream yet.</p>
          ) : null}
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-etch opacity-40" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <Eyebrow>Ask The Desk</Eyebrow>
            <h2 className="mt-6 font-display text-[1.45rem] font-600 uppercase leading-[1.2] sm:text-[1.9rem] sm:leading-[1.1] lg:text-[2.6rem]">
              <MaskLines lines={["Reading a file with", "you is faster than", "reading about one."]} />
            </h2>
            <p className="mt-7 max-w-lg text-[0.96rem] leading-[1.85] text-white/60">
              Where a note raises a question your matter already faces, the advisory desk will review the underlying documents
              against a defined scope.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-7">
              <PrimaryAction href="/contact">Request Advisory</PrimaryAction>
              <ArrowLink to="/methodology" tone="light">Our Method</ArrowLink>
            </div>
          </div>
          <div className="border border-white/12 bg-white/[0.03] p-8">
            <p className="eyebrow text-gold-soft">Streams</p>
            <ul className="mt-6 space-y-4">
              {insightCategories.slice(1).map((c) => (
                <li key={c} className="flex items-center justify-between border-b border-white/10 pb-3 text-[0.9rem] tracking-[0.04em] text-white/72">
                  <span className="flex items-center gap-3"><Tag className="h-3.5 w-3.5 text-gold" strokeWidth={1.6} />{c}</span>
                  <span className="font-display text-[0.78rem] text-white/40">
                    {insights.filter((i: any) => i.category === c).length}
                  </span>
                </li>
              ))}
            </ul>
            <GoldRule className="mt-8" />
          </div>
        </div>
      </section>
    </>
  );
}
