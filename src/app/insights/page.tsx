"use client";
import { useState } from "react";
import Link from 'next/link';;
import { ArrowLeft, CalendarDays, Clock3, Tag } from "lucide-react";
import PageHero from "@/components/PageHero";
import { ArrowLink, Eyebrow, GoldRule, ImgReveal, MaskLines, PrimaryAction, Reveal, SectionHeading } from "@/components/ui";
import { insightCategories, insights } from "@/data/insights";
import { cn } from "@/utils/cn";
import useSeo from "@/hooks/useSeo";

export default function Insights() {
  const { slug } = useParams();
  return slug ? <Article slug={slug} /> : <Hub />;
}

/* ----------------------------- Knowledge hub ----------------------------- */

function Hub() {
  const [active, setActive] = useState<string>("All");
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
            {filtered.map((a, i) => (
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

          {filtered.length === 0 ? (
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
              <PrimaryAction to="/contact">Request Advisory</PrimaryAction>
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
                    {insights.filter((i) => i.category === c).length}
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

/* ------------------------------- Article ------------------------------- */

function Article({ slug }: { slug: string }) {
  const a = insights.find((i) => i.slug === slug) ?? insights[0];
  const related = insights.filter((i) => i.slug !== a.slug).slice(0, 3);

  useSeo({
    title: `${a.title} | Medico-Legal Insights`,
    description: a.excerpt.slice(0, 165),
  });

  return (
    <>
      <article>
        <PageHero
          eyebrow={`${a.category} · ${a.kind}`}
          title={wrap(a.title, 3)}
          image={a.image}
          alt={a.title}
          intro={a.excerpt}
          meta={[
            { label: "Published", value: a.date },
            { label: "Reading Time", value: a.readingTime },
            { label: "Stream", value: a.category },
            { label: "Prepared By", value: "Advisory Desk" },
          ]}
        />

        <section className="bg-white py-16 lg:py-24">
          <div className="container-x grid gap-14 lg:grid-cols-[1fr_20rem] lg:gap-20">
            <div className="max-w-[46rem]">
              <Link href="/insights" className="group inline-flex items-center gap-2.5 text-[0.66rem] font-600 uppercase tracking-[0.2em] text-navy/60 transition-colors hover:text-navy">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" /> All Insights
              </Link>
              <h1 className="sr-only">{a.title}</h1>
              <GoldRule className="mt-6" />
              <div className="mt-10 space-y-7">
                {a.body.map((p, i) => (
                  <Reveal key={i} delay={i * 60}>
                    <p className={cn("text-[1.02rem] leading-[1.95] text-ink/78", i === 0 && "text-[1.12rem] leading-[1.8] text-navy")}>
                      {p}
                    </p>
                  </Reveal>
                ))}
              </div>

              <div className="mt-14 border-t border-navy/12 pt-10">
                <Eyebrow tone="navy">Working Takeaways</Eyebrow>
                <ul className="mt-6 grid gap-px bg-navy/12 sm:grid-cols-2">
                  {a.takeaways.map((t, i) => (
                    <li key={t} className="flex items-start gap-4 bg-white p-6">
                      <span className="font-display text-[0.7rem] tracking-[0.14em] text-gold">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-[0.9rem] leading-relaxed text-navy/82">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-12 bg-paper px-7 py-6 text-[0.84rem] leading-relaxed text-ink/60">
                This note is published for general information by the firm's advisory desk. It is not legal advice, does not
                constitute an advocate-client relationship, and must be verified against the current statutory text and forum
                rules before being relied upon. See the <Link href="/disclaimer" className="font-600 text-navy underline decoration-gold underline-offset-4">disclaimer</Link>.
              </p>
            </div>

            <aside className="lg:sticky lg:top-32 lg:self-start">
              <ImgReveal src={a.image} alt={a.title} ratio="4/3" className="border border-navy/10" />
              <div className="mt-8 border-t border-navy/12 pt-6">
                <p className="eyebrow text-ink/45">In this note</p>
                <ol className="mt-4 space-y-3">
                  {a.takeaways.map((t, i) => (
                    <li key={t} className="flex gap-3 text-[0.84rem] leading-snug text-ink/70">
                      <span className="font-display text-[0.68rem] text-gold">{String(i + 1).padStart(2, "0")}</span>
                      {t}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="mt-8 bg-navy p-7 text-white">
                <p className="font-display text-[1.05rem] uppercase leading-snug tracking-[0.03em]">Have this issue in a live matter?</p>
                <p className="mt-3 text-[0.84rem] leading-relaxed text-white/60">Send the file for a scoped technical review.</p>
                <Link href="/contact"
                  className="mt-6 inline-flex items-center gap-2 border border-gold/50 px-5 py-3 text-[0.63rem] font-600 uppercase tracking-[0.18em] text-gold-soft transition-colors duration-300 hover:bg-gold hover:text-navy"
                >
                  Request Advisory
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <section className="bg-paper py-16 lg:py-20">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Related Notes" size="sm" lines={["Continue reading"]} />
            <ArrowLink to="/insights" tone="dark">Knowledge Hub</ArrowLink>
          </div>
          <div className="mt-10 grid gap-px bg-navy/12 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to={`/insights/${r.slug}`} className="group flex h-full flex-col bg-paper p-7 transition-colors duration-500 hover:bg-white">
                <span className="eyebrow text-gold">{r.category}</span>
                <h3 className="mt-4 font-display text-[1.05rem] uppercase leading-snug text-navy">{r.title}</h3>
                <p className="mt-3 flex-1 text-[0.85rem] leading-relaxed text-ink/60">{r.excerpt}</p>
                <span className="mt-5 text-[0.64rem] uppercase tracking-[0.16em] text-ink/40">{r.readingTime}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function wrap(text: string, perLine: number) {
  const words = text.split(" ");
  const lines: string[] = [];
  for (let i = 0; i < words.length; i += perLine) lines.push(words.slice(i, i + perLine).join(" "));
  return lines;
}
