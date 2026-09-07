"use client";
import Link from 'next/link';;
import { Eye, Target, ShieldCheck, BadgeCheck, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import {
  ArrowLink,
  Emblem,
  Eyebrow,
  GoldRule,
  ImgReveal,
  MaskLines,
  PrimaryAction,
  Reveal,
  SectionHeading,
} from "@/components/ui";
import { brand, founder, principles, trustBar } from "@/data/site";
import useSeo from "@/hooks/useSeo";

export default function About() {
  useSeo({
    title: "About The Firm | Medico-Legal & Forensic Advisory",
    description:
      "Dr. Ashish Pathak & Associates is a medico-legal and forensic evidence advisory bridging clinical healthcare and judicial courts, with offices in Greater Noida and Agra.",
  });

  return (
    <>
      <PageHero
        eyebrow="About The Firm"
        title={["About the", "firm"]}
        image="/images/about/firm-office.jpg"
        alt="Counsel and consultant office with law library, brass scales and clinical instruments"
        intro={
          <>
            {brand.positioning} {brand.core}
          </>
        }
        meta={[
          { label: "Founded Practice", value: "Greater Noida · Agra" },
          { label: "Advisory Head", value: "18+ Years" },
          { label: "Quality Framework", value: "ISO 9001:2015" },
          { label: "Registration", value: "MSME Enterprise" },
        ]}
      />

      {/* Narrative */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          <div>
            <SectionHeading eyebrow="The Practice" size="md" lines={["A single desk for", "medical fact and", "legal consequence."]} />
          </div>
          <div className="space-y-7 text-[1rem] leading-[1.95] text-ink/75">
            <Reveal>
              <p>
                {brand.firm} was built around a working problem: courts, counsel and healthcare institutions are routinely
                asked to decide questions that are medical in substance and legal in form. The two professions read the same
                document differently, and the difference is where cases are won, lost, or delayed.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p>
                The firm operates as a medico-legal and forensic advisory. It reads medical records, medicolegal case files,
                imaging, intensive care charts and post-mortem documentation; tests their internal consistency; conducts direct
                clinical examination where the matter requires it; and issues written scientific opinion structured for the
                forum that will rely on it.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Advisory work is divided across five audiences — law firms and advocates, hospitals and practitioners, academic
                institutions, corporates and insurers, and the judiciary and commissions. Each receives the same analysis in a
                format their process can actually use: a brief, an audit, a training curriculum, a claim opinion or a report to
                the bench.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-10 border-l-2 border-gold bg-paper px-7 py-6">
                <p className="font-editorial text-[1.2rem] italic leading-relaxed text-navy">
                  “We do not argue. We establish what the record scientifically supports — and what it cannot.”
                </p>
                <p className="mt-4 text-[0.68rem] uppercase tracking-[0.2em] text-ink/50">Firm working principle</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative overflow-hidden bg-navy py-24 text-white lg:py-28">
        <div className="pointer-events-none absolute inset-0 grid-etch opacity-40" aria-hidden="true" />
        <div className="container-x relative grid gap-px bg-white/10 lg:grid-cols-2">
          {[
            {
              icon: Eye,
              label: "Our Vision",
              title: "Scientific certainty as the default standard of medico-legal practice in India.",
              body: "To make technical medical truth as accessible, testable and citable in legal proceedings as the documents that currently accompany it — so that decisions rest on evidence that has been read for what it actually says.",
            },
            {
              icon: Target,
              label: "Our Mission",
              title: "Objective, confidential, court-ready analysis — delivered with reasoning shown.",
              body: "To give advocates, courts, hospitals and institutions a reliable forensic-clinical reading of every file entrusted to us, in language that survives examination, and to train the next generation of practitioners in the same discipline.",
            },
          ].map((v, i) => (
            <Reveal key={v.label} delay={i * 130} className="bg-navy p-9 lg:p-14">
              <span className="flex h-12 w-12 items-center justify-center border border-gold/45 text-gold">
                <v.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <Eyebrow>{v.label}</Eyebrow>
              <h2 className="mt-5 font-display text-[1.16rem] font-600 uppercase leading-[1.32] sm:text-[1.55rem] sm:leading-[1.25] lg:text-[2rem]">
                <MaskLines lines={wrap(v.title, 3)} />
              </h2>
              <p className="mt-6 max-w-xl text-[0.95rem] leading-[1.9] text-white/62">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Chief consultant */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
          <Reveal variant="left">
            <div className="relative">
              <ImgReveal src={founder.image} alt="Dr. Ashish Pathak, Chief Consultant" ratio="4/5" className="border border-navy/10" imgClassName="object-top" />
              <span className="pointer-events-none absolute -bottom-6 -right-6 hidden h-40 w-40 border-r border-t border-gold lg:block" aria-hidden="true" />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Chief Consultant" size="md" lines={["Dr. Ashish", "Pathak"]} />
            <p className="mt-5 text-[0.8rem] uppercase tracking-[0.16em] text-navy/55">{founder.role}</p>
            <Reveal delay={150}>
              <div className="mt-8 space-y-5 text-[0.98rem] leading-[1.9] text-ink/72">
                <p>{founder.summary}</p>
                <p>
                  His advisory practice spans trauma biomechanics, forensic and clinical toxicology audit, hospital and
                  practitioner defence support, medicolegal documentation systems, and disability assessment before the claims
                  tribunals.
                </p>
              </div>
              <ul className="mt-9 grid gap-2 sm:grid-cols-2">
                {founder.credentials.map((c) => (
                  <li key={c} className="flex items-center gap-3 border-t border-navy/12 py-3 text-[0.78rem] uppercase tracking-[0.1em] text-navy/78">
                    <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <PrimaryAction to="/expert-board" tone="navy">Full Expert Board</PrimaryAction>
                <ArrowLink to="/contact" tone="dark">Request Advisory</ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core standards */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading eyebrow="Core Standards" size="md" lines={["Non-negotiables of", "the advisory desk."]} />
            <Reveal delay={140} className="max-w-sm">
              <p className="text-[0.9rem] leading-[1.85] text-ink/60">
                Standards the firm applies to its own work — on process, on confidentiality and on the limits of an opinion.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 space-y-px bg-navy/12">
            {[
              ...principles,
              {
                number: "04",
                title: "Stated Limitations",
                body: "Where records are insufficient, the analysis says so. An opinion is never extended beyond what the material and method support.",
              },
            ].map((p, i) => (
              <Reveal key={p.number} delay={i * 90}>
                <div className="group grid gap-4 bg-white px-0 py-8 transition-colors duration-500 hover:bg-paper md:grid-cols-[6rem_1fr_1.2fr] md:items-center md:gap-8 md:px-6">
                  <span className="font-display text-[1.7rem] font-700 leading-none text-navy/20 transition-colors duration-500 group-hover:text-gold">
                    {p.number}
                  </span>
                  <h3 className="font-display text-[1.2rem] uppercase leading-snug tracking-[0.03em] text-navy lg:text-[1.45rem]">
                    {p.title}
                  </h3>
                  <p className="text-[0.92rem] leading-[1.85] text-ink/65">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Registrations & memberships */}
      <section className="relative overflow-hidden bg-navy-deep py-24 text-white lg:py-28">
        <div className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 opacity-[0.06]" aria-hidden="true">
          <Emblem className="h-[24rem] w-[24rem]" />
        </div>
        <div className="container-x relative grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading tone="light" eyebrow="Life Memberships & Registrations" size="md" lines={["Registered,", "certified,", "accountable."]} />
            <Reveal delay={160}>
              <p className="mt-8 max-w-lg text-[0.95rem] leading-[1.9] text-white/60">
                Professional memberships and enterprise registrations held in the firm's credential register are disclosed to
                clients and courts on request. The particulars below are those the firm publishes; verification of current
                standing may be sought directly from the issuing bodies.
              </p>
              <GoldRule className="mt-10 max-w-sm" />
            </Reveal>
          </div>
          <div className="space-y-4">
            {trustBar.map((t, i) => (
              <Reveal key={t.title} delay={i * 100}>
                <div className="group flex items-start gap-5 border border-white/12 bg-white/[0.03] px-6 py-5 transition-colors duration-400 hover:border-gold/45">
                  <span className="mt-0.5 text-gold">
                    {i === 1 ? <BadgeCheck className="h-5 w-5" strokeWidth={1.5} /> : <ShieldCheck className="h-5 w-5" strokeWidth={1.5} />}
                  </span>
                  <div>
                    <p className="text-[0.76rem] font-600 uppercase tracking-[0.14em] text-white/92">{t.title}</p>
                    <p className="mt-1.5 text-[0.78rem] leading-relaxed text-white/45">{t.meta}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={420}>
              <Link href="/contact"
                className="group flex items-center justify-between border border-gold/40 bg-gold/10 px-6 py-5 text-[0.72rem] font-600 uppercase tracking-[0.18em] text-gold-soft transition-colors duration-400 hover:bg-gold hover:text-navy"
              >
                Request the credential register
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

/** split a sentence into balanced display lines */
function wrap(text: string, perLine = 5) {
  const words = text.split(" ");
  const lines: string[] = [];
  for (let i = 0; i < words.length; i += perLine) lines.push(words.slice(i, i + perLine).join(" "));
  return lines;
}
