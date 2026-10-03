"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";
import { ArrowLink, Eyebrow, GoldRule, ImgReveal, Reveal, SectionHeading } from "@/components/ui";
import { cn } from "@/utils/cn";
import useSeo from "@/hooks/useSeo";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [a, setA] = useState<any>(null);
  const [related, setRelated] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/insights')
      .then(res => res.json())
      .then(data => {
        const found = data.find((i: any) => i.slug === slug);
        if (found) {
          setA(found);
          setRelated(data.filter((i: any) => i.slug !== found.slug).slice(0, 3));
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  useSeo({
    title: a ? `${a.title} | Medico-Legal Insights` : "Medico-Legal Insights",
    description: a ? a.excerpt.slice(0, 165) : "",
  });

  if (loading) return <div className="py-24 text-center">Loading article...</div>;
  if (!a) return <div className="py-24 text-center">Article not found</div>;


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
              <Link key={r.slug} href={`/insights/${r.slug}`} className="group flex h-full flex-col bg-paper p-7 transition-colors duration-500 hover:bg-white">
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
