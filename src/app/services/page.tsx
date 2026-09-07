"use client";
import Link from 'next/link';;
import { AlertTriangle, ClipboardCheck, Compass, Users, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import {
  ArrowLink,
  Eyebrow,
  GoldRule,
  Icon,
  ImgReveal,
  MaskLines,
  PrimaryAction,
  Reveal,
  SectionHeading,
} from "@/components/ui";
import { getService, serviceCategories } from "@/data/services";
import { whoWeServe } from "@/data/site";
import { cn } from "@/utils/cn";
import useSeo from "@/hooks/useSeo";

export default function Services() {
  const { slug } = useParams();
  return slug ? <ServiceDetail slug={slug} /> : <ServicesIndex />;
}

/* -------------------------- Directory index ------------------------- */

function ServicesIndex() {
  useSeo({
    title: "Services | Medico-Legal Advisory for Courts, Hospitals & Insurers",
    description:
      "Forensic injury mechanics, MACT disability assessment, hospital medico-legal audits, toxicology review, insurance claim audits and court-appointed expert opinion.",
  });

  return (
    <>
      <PageHero
        eyebrow="Services Directory"
        title={["Advisory", "catalogue"]}
        image="/images/services/toxicology.jpg"
        alt="Forensic toxicology instruments used for evidentiary analysis"
        intro="Five advisory lanes, each scoped to how the audience works. Select the category closest to your matter to see what we analyse, how the advisory is delivered, and which questions it answers."
        meta={[
          { label: "Categories", value: "05" },
          { label: "Advisory Lanes", value: "14 Named Services" },
          { label: "Delivery", value: "Written Note · Report · Audit" },
          { label: "Confidentiality", value: "Scope-bound Engagement" },
        ]}
      />

      <section className="bg-navy py-16 text-white lg:py-20">
        <div className="container-x">
          <Eyebrow>Jump To Category</Eyebrow>
          <nav aria-label="Service categories" className="mt-8 flex flex-wrap gap-3">
            {serviceCategories.map((c) => (
              <Link
                key={c.slug}
                to={`/services/${c.slug}`}
                className="group inline-flex items-center gap-3 border border-white/16 px-5 py-3 text-[0.68rem] font-500 uppercase tracking-[0.16em] text-white/75 transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-white"
              >
                {c.nav}
                <ArrowRight className="h-3.5 w-3.5 text-gold transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x space-y-20 lg:space-y-28">
          {serviceCategories.map((c, i) => (
            <Reveal key={c.slug} delay={60}>
              <article className={cn("grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16", i % 2 === 1 && "lg:[&>*:first-child]:order-2")}>
                <div className="relative">
                  <ImgReveal src={c.image} alt={c.title} ratio="16/11" className="border border-navy/10" />
                  <span className="absolute -left-3 -top-6 font-display text-[4.6rem] font-700 leading-none text-navy/[0.06] lg:-left-8 lg:text-[6.5rem]" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <Eyebrow tone="navy">{c.kicker}</Eyebrow>
                  <h2 className="mt-5 font-display text-[1.35rem] font-600 uppercase leading-[1.18] text-navy sm:text-[1.7rem] sm:leading-[1.12] lg:text-[2.3rem]">
                    <MaskLines lines={wrap(c.title, 3)} />
                  </h2>
                  <p className="mt-5 font-editorial text-[1.15rem] italic leading-relaxed text-navy/70">{c.hero}</p>
                  <p className="mt-6 max-w-xl text-[0.95rem] leading-[1.9] text-ink/68">{c.intro}</p>
                  <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                    {c.services.map((s) => (
                      <li key={s.title} className="flex items-start gap-2.5 text-[0.85rem] leading-snug text-navy/80">
                        <span className="mt-[0.42rem] h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                        {s.title}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9">
                    <PrimaryAction to={`/services/${c.slug}`} tone="navy">View Category Detail</PrimaryAction>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Audience Map" size="sm" lines={["Who the advisory", "is prepared for."]} />
          <ul className="mt-12 grid gap-px bg-navy/12 sm:grid-cols-2 lg:grid-cols-5">
            {whoWeServe.map((w) => (
              <li key={w.id} className="group bg-paper p-7 transition-colors duration-500 hover:bg-white">
                <Icon name={w.icon} className="h-5 w-5 text-navy transition-colors duration-300 group-hover:text-gold" />
                <h3 className="mt-5 font-display text-[0.95rem] uppercase leading-snug tracking-[0.05em] text-navy">{w.title}</h3>
                <p className="mt-3 text-[0.8rem] leading-relaxed text-ink/58">{w.line}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

/* -------------------------- Category detail ------------------------- */

function ServiceDetail({ slug }: { slug: string }) {
  const c = getService(slug);
  useSeo({
    title: `${c.title} | Medico-Legal & Forensic Advisory Services`,
    description: `${c.intro.slice(0, 155)}…`,
  });

  return (
    <>
      <PageHero
        eyebrow={c.audience}
        title={wrap(c.title, 2)}
        intro={c.intro}
        image={c.image}
        alt={`${c.title} advisory imagery`}
        meta={[
          { label: "Category", value: c.kicker.replace(" / Advisory Category", "") },
          { label: "Named Services", value: `${c.services.length}` },
          { label: "Deliverable", value: "Written Advisory Note" },
          { label: "Enquiry", value: "Scope-first" },
        ]}
      />

      {/* sticky category nav */}
      <div className="sticky top-[4.4rem] z-30 border-b border-navy/12 bg-white/95 backdrop-blur-md md:top-[6.7rem]">
        <div className="container-x flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {serviceCategories.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className={cn(
                "shrink-0 px-4 py-2.5 text-[0.63rem] font-600 uppercase tracking-[0.16em] transition-colors duration-300",
                s.slug === c.slug ? "bg-navy text-white" : "text-ink/55 hover:text-navy",
              )}
            >
              {s.nav}
            </Link>
          ))}
        </div>
      </div>

      {/* Problem */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow tone="navy">The Problem</Eyebrow>
            <h2 className="mt-5 font-display text-[1.4rem] font-600 uppercase leading-[1.18] text-navy sm:text-[1.8rem] sm:leading-[1.12] lg:text-[2.4rem]">
              <MaskLines lines={wrap(c.problem.heading, 3)} />
            </h2>
            <Reveal delay={140}>
              <p className="mt-7 text-[1rem] leading-[1.95] text-ink/72">{c.problem.body}</p>
              <div className="mt-9 flex gap-4 border-l-2 border-gold bg-paper px-6 py-5">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.7} aria-hidden="true" />
                <p className="text-[0.88rem] leading-relaxed text-ink/70">
                  Files reach us at every stage — before a complaint is drafted, after an allegation is made, and after an
                  order requires technical response.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal variant="right">
            <ul className="divide-y divide-navy/12 border-y border-navy/12">
              {c.problem.points.map((p, i) => (
                <li key={p} className="group flex items-start gap-5 py-5">
                  <span className="font-display text-[0.7rem] tracking-[0.2em] text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[0.95rem] leading-relaxed text-ink/78 transition-colors duration-300 group-hover:text-navy">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* What we analyze */}
      <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute inset-0 grid-etch opacity-40" aria-hidden="true" />
        <div className="container-x relative grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div>
            <Eyebrow>What We Analyze</Eyebrow>
            <h2 className="mt-5 font-display text-[1.35rem] font-600 uppercase leading-[1.2] sm:text-[1.7rem] sm:leading-[1.14] lg:text-[2.3rem]">
              <MaskLines lines={["The file, tested", "against itself."]} />
            </h2>
            <GoldRule className="mt-8 max-w-xs" />
            <p className="mt-8 max-w-lg text-[0.96rem] leading-[1.9] text-white/62">
              Analysis is documentary and, where required, clinical. Nothing is concluded from the narrative alone; each finding
              is traced to a record, a measurement or an examination.
            </p>
            <div className="mt-10">
              <ImgReveal src={c.image} alt={`Analytical work supporting ${c.title}`} ratio="16/9" className="border border-white/12" />
            </div>
          </div>
          <ul className="space-y-px self-start bg-white/10">
            {c.analysis.map((a, i) => (
              <Reveal as="li" key={a} delay={i * 90}>
                <div className="group flex items-center gap-5 bg-navy px-6 py-5 transition-colors duration-400 hover:bg-navy-veil">
                  <Compass className="h-4 w-4 shrink-0 text-gold/80" strokeWidth={1.6} aria-hidden="true" />
                  <span className="text-[0.94rem] leading-snug text-white/82">{a}</span>
                  <span className="ml-auto h-px w-4 bg-white/20 transition-all duration-400 group-hover:w-9 group-hover:bg-gold" aria-hidden="true" />
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach + Who it helps */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.25fr_.75fr] lg:gap-20">
          <div>
            <Eyebrow tone="navy">Advisory Approach</Eyebrow>
            <h2 className="mt-5 font-display text-[1.7rem] font-600 uppercase leading-[1.12] text-navy lg:text-[2.2rem]">
              <MaskLines lines={["Four movements,", "in a fixed order."]} />
            </h2>
            <ol className="mt-10 space-y-px bg-navy/12">
              {c.approach.map((a, i) => (
                <Reveal as="li" key={a.step} delay={i * 100}>
                  <div className="group grid gap-4 bg-paper py-7 sm:grid-cols-[3rem_1fr] sm:gap-8">
                    <span className="font-display text-[1.6rem] font-700 leading-none text-navy/25 transition-colors duration-500 group-hover:text-gold">
                      {a.step}
                    </span>
                    <div>
                      <h3 className="font-display text-[1.05rem] uppercase tracking-[0.04em] text-navy">{a.title}</h3>
                      <p className="mt-2.5 text-[0.92rem] leading-[1.85] text-ink/68">{a.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="space-y-8">
            <div className="border border-navy/12 bg-white p-8">
              <Eyebrow tone="navy">Who It Helps</Eyebrow>
              <ul className="mt-6 space-y-4">
                {c.helps.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-[0.92rem] leading-snug text-navy/80">
                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.7} aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-navy/12 bg-navy p-8 text-white">
              <Eyebrow>Named Services</Eyebrow>
              <ul className="mt-6 space-y-6">
                {c.services.map((s, i) => (
                  <li key={s.title}>
                    <p className="flex items-baseline gap-3 font-display text-[1rem] uppercase leading-snug tracking-[0.03em]">
                      <span className="text-[0.66rem] text-gold">{String(i + 1).padStart(2, "0")}</span>
                      {s.title}
                    </p>
                    <p className="mt-2 text-[0.85rem] leading-relaxed text-white/58">{s.description}</p>
                    {i < c.services.length - 1 ? <span className="mt-6 block h-px w-full bg-white/10" aria-hidden="true" /> : null}
                  </li>
                ))}
              </ul>
              <div className="mt-9 border-t border-white/12 pt-7">
                <PrimaryAction to="/contact">Discuss This Matter</PrimaryAction>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* next categories */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Continue" size="sm" lines={["Other advisory lanes"]} />
            <ArrowLink to="/services" tone="dark">Full Directory</ArrowLink>
          </div>
          <ul className="mt-10 grid gap-px bg-navy/12 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.filter((s) => s.slug !== c.slug).slice(0, 4).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group flex h-full flex-col bg-white p-7 transition-colors duration-500 hover:bg-paper">
                  <ClipboardCheck className="h-5 w-5 text-navy/50 transition-colors duration-300 group-hover:text-gold" strokeWidth={1.6} aria-hidden="true" />
                  <h3 className="mt-5 font-display text-[0.98rem] uppercase leading-snug tracking-[0.04em] text-navy">{s.title}</h3>
                  <span className="mt-4 flex items-center gap-2 text-[0.62rem] font-600 uppercase tracking-[0.2em] text-gold">
                    Open <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
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
