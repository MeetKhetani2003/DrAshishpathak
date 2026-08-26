import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin, Mail, Quote } from "lucide-react";
import {
  brand,
  bridge,
  contact,
  founder,
  methodology,
  practiceAreas,
  principles,
  trustBar,
  whoWeServe,
} from "@/data/site";
import { experts } from "@/data/experts";
import { insights } from "@/data/insights";
import {
  ArrowLink,
  Emblem,
  Eyebrow,
  GoldRule,
  Icon,
  ImgReveal,
  MaskLines,
  Monogram,
  OutlineAction,
  PrimaryAction,
  Reveal,
  SectionHeading,
  scrollToId,
} from "@/components/ui";
import useSeo from "@/hooks/useSeo";

/* ==================================================================== */

export default function Home() {
  useSeo({
    title: "Dr. Ashish Pathak & Associates | Medico-Legal & Forensic Experts",
    description:
      "Medico-legal and forensic evidence advisory bridging medical science and judicial expertise for advocates, courts, healthcare institutions and organizations.",
  });

  return (
    <>
      <Hero />
      <TrustBar />
      <Introduction />
      <Founder />
      <PracticeAreas />
      <WhoWeServe />
      <WhyFirm />
      <MethodologySection />
      <ExpertBoardStrip />
      <InsightsStrip />
      <ConfidentialCta />
      <Locations />
    </>
  );
}

/* ---------------------------- 01 · HERO ---------------------------- */

function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    const line = lineRef.current;
    if (!wrap || !img || !line) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const r = wrap.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        img.style.transform = `translate3d(${x * -16}px, ${y * -12}px, 0) scale(1.06)`;
        line.style.transform = `translate3d(${x * 30}px, ${y * 20}px, 0)`;
      });
    };
    const onLeave = () => {
      img.style.transform = "translate3d(0,0,0) scale(1.05)";
      line.style.transform = "translate3d(0,0,0)";
    };
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={wrapRef} className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-deep pb-16 pt-32 lg:pb-20 lg:pt-44">
      <div ref={imgRef} className="absolute inset-[-4%] z-[-2] will-change-transform" style={{ transform: "scale(1.05)" }}>
        <img
          src="/images/hero/hero-medical-legal.jpg"
          alt="Brass scales of justice and a stethoscope resting on legal files under low cinematic light"
          className="h-full w-full object-cover opacity-60"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <div className="absolute inset-0 z-[-1] bg-[linear-gradient(102deg,rgba(7,21,47,.97)_12%,rgba(11,27,61,.9)_42%,rgba(11,27,61,.5)_74%,rgba(7,21,47,.86))]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 z-[-1] grid-etch opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 z-[-1] grain opacity-70" aria-hidden="true" />

      {/* gold line graphics, parallax layer */}
      <div ref={lineRef} className="pointer-events-none absolute inset-0 z-[-1] hidden will-change-transform lg:block" aria-hidden="true">
        <svg viewBox="0 0 1440 900" className="h-full w-full" preserveAspectRatio="none">
          <g stroke="#D4AF37" fill="none" strokeOpacity=".22">
            <path d="M1088 90 L1088 720" strokeWidth="1" />
            <path d="M1180 90 L1180 720" strokeWidth="1" strokeOpacity=".5" />
            <path d="M1088 300 L1348 300" strokeWidth="1" />
            <path d="M1180 470 L1400 470" strokeWidth="1" />
            <path d="M1088 620 L1268 620" strokeWidth="1" />
          </g>
        </svg>
      </div>

      <div className="container-x">
        <div className="grid items-end gap-14 lg:grid-cols-[1.55fr_.85fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold-soft">
                <span className="inline-block h-px w-10 bg-gold/70" aria-hidden="true" />
                {brand.firm}
              </p>
            </Reveal>

            <h1 className="mt-8 font-display text-[2rem] font-600 uppercase leading-[1.06] tracking-[-0.015em] text-white [overflow-wrap:anywhere] sm:text-[3.3rem] sm:leading-[1.02] lg:text-[4.7rem] xl:text-[5.5rem]">
              <MaskLines
                lines={[
                  <span key="a">Bridging</span>,
                  <span key="b" className="text-white/85">Medical Science</span>,
                  <span key="c">
                    <span className="text-gold-soft">&amp;</span> Legal Justice.
                  </span>,
                ]}
                stagger={130}
              />
            </h1>

            <Reveal delay={420} className="mt-9 flex items-center gap-5">
              <span className="h-px w-20 bg-gold" aria-hidden="true" />
              <span className="eyebrow text-white/40">{brand.brandName}</span>
            </Reveal>

            <Reveal delay={500}>
              <p className="mt-8 max-w-xl text-[1rem] leading-[1.85] text-white/70 lg:text-[1.075rem]">
                India&apos;s premier medico-legal and forensic evidence advisory for advocates, courts, healthcare
                institutions and organizations — converting clinical fact into evidence a bench can apply.
              </p>
            </Reveal>

            <Reveal delay={600} className="mt-11 flex flex-wrap items-center gap-4">
              <PrimaryAction to="/contact">Request Advisory</PrimaryAction>
              <OutlineAction onClick={(e) => { e.preventDefault(); scrollToId("practice-areas"); }}>
                Explore Practice Areas
              </OutlineAction>
            </Reveal>
          </div>

          {/* vertical credential composition */}
          <Reveal variant="right" delay={340} className="lg:pb-3">
            <div className="relative border-l border-white/12 pl-7 lg:border-l-0 lg:border-t-0">
              <span className="absolute left-0 top-0 h-14 w-px bg-gold lg:h-20" aria-hidden="true" />
              <p className="font-display text-[3.6rem] font-700 leading-none text-white lg:text-[4.6rem]">
                18<span className="text-gold">+</span>
              </p>
              <p className="mt-2 eyebrow text-gold-soft">Years</p>
              <ul className="mt-8 space-y-0">
                {founder.experienceScope.map((s, i) => (
                  <li key={s} className="group flex items-center gap-4 border-t border-white/10 py-4 last:border-b">
                    <span className="font-display text-[0.68rem] tracking-[0.2em] text-gold/60">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-[0.95rem] uppercase tracking-[0.14em] text-white/80 transition-colors duration-300 group-hover:text-white">
                      {s}
                    </span>
                    <span className="ml-auto h-px w-0 bg-gold/70 transition-all duration-500 group-hover:w-8" aria-hidden="true" />
                  </li>
                ))}
              </ul>
              <p className="mt-7 max-w-[15rem] text-[0.72rem] leading-relaxed tracking-[0.06em] text-white/58">
                Clinical, orthopaedic, forensic and legal practice held inside one advisory desk.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden justify-center pb-8 md:flex">
        <span className="eyebrow animate-drift text-white/32">Scroll</span>
      </div>
    </section>
  );
}

/* ------------------------- 02 · TRUST BAR -------------------------- */

function TrustBar() {
  return (
    <section className="relative border-y border-gold/18 bg-navy py-9 text-white">
      <div className="pointer-events-none absolute inset-0 grid-etch opacity-40" aria-hidden="true" />
      <div className="container-x relative">
        <ul className="grid gap-y-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {trustBar.map((t, i) => (
            <Reveal
              as="li"
              key={t.title}
              delay={i * 90}
              className={`flex items-start gap-4 px-0 lg:px-8 ${i > 0 ? "lg:border-l lg:border-white/12" : "lg:border-l-0"}`}
            >
              <Icon name={t.icon} className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-gold" />
              <div>
                <p className="text-[0.72rem] font-600 uppercase leading-relaxed tracking-[0.16em] text-white/92">{t.title}</p>
                <p className="mt-1.5 text-[0.68rem] leading-snug tracking-[0.02em] text-white/58">{t.meta}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------- 03 · INTRODUCTION -------------------------- */

function Introduction() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="The Scientific Bridge"
              size="md"
              lines={["When medical facts", <span key="m" className="text-ink/45">meet legal questions,</span>, "precision matters."]}
            />
            <Reveal delay={200}>
              <GoldRule className="mt-10 max-w-md" />
              <div className="mt-10 space-y-6 text-[1rem] leading-[1.9] text-ink/75">
                <p>
                  Complex disputes rarely fail on argument alone. They fail on a technical fact that nobody in the room could
                  read — a chart entry, an imaging sequence, a toxicology limit, a disability percentage asserted without a
                  measurement behind it.
                </p>
                <p>
                  {brand.firm} provides objective, science-backed medico-legal analysis for matters where clinical evidence and
                  legal consequence intersect. Every file is read the same way: the medicine first, then the forensic reasoning,
                  then the legal framing — never the reverse.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal variant="right" delay={140}>
            <div className="relative">
              <span className="absolute -left-6 -top-8 hidden font-display text-[7rem] leading-none text-navy/[0.045] lg:block" aria-hidden="true">
                01
              </span>
              <ol className="relative">
                {bridge.map((b) => (
                  <li key={b.step} className="group relative flex gap-6 border-t border-navy/10 py-6 last:border-b lg:gap-8 lg:py-7">
                    <div className="w-14 shrink-0 lg:w-16">
                      <span className="font-display text-[0.78rem] font-600 tracking-[0.16em] text-gold">{b.step}</span>
                      <p className="mt-2 font-display text-[1.02rem] uppercase leading-snug tracking-[0.04em] text-navy lg:text-[1.18rem]">
                        {b.label}
                      </p>
                    </div>
                    <div className="relative flex-1 pl-6 lg:pl-8">
                      <span className="absolute left-0 top-1 h-[calc(100%+1.2rem)] w-px bg-navy/12" aria-hidden="true" />
                      <span className="absolute left-0 top-1 h-8 w-px bg-gold transition-all duration-500 group-hover:h-full" aria-hidden="true" />
                      <span className="absolute -left-[3px] top-1 h-1.5 w-1.5 rounded-full bg-navy/30 transition-colors duration-300 group-hover:bg-gold" aria-hidden="true" />
                      <p className="text-[0.9rem] leading-relaxed text-ink/62">{b.detail}</p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-navy/18 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold" aria-hidden="true" />
                  </li>
                ))}
              </ol>
              <p className="mt-8 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-navy/45">
                <Emblem className="h-6 w-6" /> Court-ready clarity, every time
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- 04 · FOUNDER --------------------------- */

function Founder() {
  return (
    <section className="relative bg-paper py-24 lg:py-0">
      <div className="grid lg:grid-cols-[1.5fr_1fr]">
        <Reveal variant="left" className="relative">
          <div className="relative h-[58svh] overflow-hidden bg-navy lg:h-[100svh]">
            <img
              src={founder.image}
              alt="Portrait of Dr. Ashish Pathak, Lawyer and Forensic Medico-Legal Expert"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] hover:scale-[1.04]"
            />
            <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,61,.18),transparent_38%,rgba(7,21,47,.55))]" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 hidden items-end gap-6 p-10 lg:flex">
              <div className="border-l-2 border-gold pl-5">
                <p className="eyebrow text-gold-soft">Experience</p>
                <p className="mt-2 font-display text-[3.2rem] font-700 leading-none text-white">18+</p>
                <p className="mt-1 text-[0.68rem] uppercase tracking-[0.24em] text-white/60">Years · Clinical to Courtroom</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="relative bg-navy px-5 py-16 text-white sm:px-10 lg:px-14 lg:py-20 xl:px-16">
          <div className="pointer-events-none absolute inset-0 grid-etch opacity-40" aria-hidden="true" />
          <div className="relative lg:sticky lg:top-28">
            <Eyebrow>{founder.label}</Eyebrow>
            <h2 className="mt-6 font-display text-[2.1rem] font-600 uppercase leading-[1.05] tracking-[0.01em] sm:text-[2.7rem]">
              <MaskLines lines={["Dr. Ashish", "Pathak"]} />
            </h2>
            <p className="mt-4 text-[0.82rem] uppercase tracking-[0.16em] text-gold-soft">{founder.role}</p>
            <GoldRule className="mt-8" />
            <p className="mt-8 text-[0.95rem] leading-[1.9] text-white/65">{founder.summary}</p>

            <p className="mt-10 eyebrow text-white/40">Qualifications</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {founder.credentials.map((c) => (
                <li
                  key={c}
                  className="border border-white/14 px-3 py-2 text-[0.66rem] font-500 uppercase tracking-[0.12em] text-white/72 transition-colors duration-300 hover:border-gold/60 hover:text-gold-soft"
                >
                  {c}
                </li>
              ))}
            </ul>

            <p className="mt-10 eyebrow text-white/40">Core Expertise</p>
            <ul className="mt-4 space-y-0">
              {founder.expertise.map((e, i) => (
                <li key={e} className="flex items-center gap-4 border-t border-white/10 py-3.5 last:border-b">
                  <span className="font-display text-[0.66rem] tracking-[0.2em] text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-[0.95rem] uppercase tracking-[0.08em]">{e}</span>
                </li>
              ))}
            </ul>

            <div className="mt-11 flex flex-wrap items-center gap-6">
              <PrimaryAction to="/about" tone="gold">View Full Profile</PrimaryAction>
              <ArrowLink to="/expert-board" tone="light">Expert Board</ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- 05 · PRACTICE AREAS ------------------------ */

function PracticeAreas() {
  return (
    <section id="practice-areas" className="relative scroll-mt-24 overflow-hidden bg-navy-deep py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-etch opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(80%_100%_at_20%_0%,rgba(212,175,55,.11),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading tone="light" eyebrow="Practice Areas" lines={["Specialized advisory", <span key="f" className="text-white/45">for complex cases.</span>]} />
          <Reveal delay={200} className="max-w-sm">
            <p className="text-[0.92rem] leading-[1.85] text-white/55">
              Four advisory lanes, one method: the clinical record interrogated with forensic discipline and framed for the
              forum it will be read in.
            </p>
            <div className="mt-6">
              <ArrowLink to="/services" tone="light">All Services</ArrowLink>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2">
          {practiceAreas.map((p, i) => (
            <Reveal key={p.id} delay={i * 110}>
              <Link
                to={p.to}
                className="group relative flex h-full flex-col bg-navy-deep p-7 transition-colors duration-500 hover:bg-navy lg:p-9"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-display text-[2.6rem] font-700 leading-none text-white/12 transition-colors duration-500 group-hover:text-gold/45">
                    {p.number}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center border border-white/15 transition-all duration-400 group-hover:border-gold group-hover:bg-gold group-hover:text-navy">
                    <ArrowRight className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-0.5" />
                  </span>
                </div>
                <div className="relative mt-7 aspect-[16/9] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover opacity-70 grayscale-[35%] transition-all duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.07] group-hover:opacity-95 group-hover:grayscale-0"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,21,47,.1),rgba(7,21,47,.82))]" aria-hidden="true" />
                </div>
                <h3 className="mt-7 font-display text-[1.28rem] uppercase leading-snug tracking-[0.03em] lg:text-[1.5rem]">{p.title}</h3>
                <span className="mt-4 block h-px w-10 bg-gold/70 transition-all duration-500 group-hover:w-24" aria-hidden="true" />
                <p className="mt-4 text-[0.875rem] leading-[1.8] text-white/55">{p.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ 06 · WHO WE SERVE ------------------------ */

function WhoWeServe() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading eyebrow="Who We Serve" size="sm" lines={["Advisory built for", "the people who decide."]} />
          <Reveal delay={160}>
            <p className="max-w-sm text-[0.9rem] leading-[1.8] text-ink/60">
              One standard of analysis, adapted to how each audience is required to use it.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid border-t border-navy/12 lg:grid-cols-5 lg:border-t-0">
          {whoWeServe.map((w, i) => (
            <Reveal
              as="li"
              key={w.id}
              delay={i * 80}
              className={`group relative ${i > 0 ? "lg:border-l lg:border-navy/12" : ""} border-b border-navy/12`}
            >
              <Link to={w.to} className="flex h-full flex-col px-0 py-8 lg:px-7 lg:py-10">
                <span className="flex h-11 w-11 items-center justify-center border border-navy/14 text-navy transition-all duration-400 group-hover:border-gold group-hover:bg-navy group-hover:text-gold">
                  <Icon name={w.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-[1.02rem] uppercase leading-snug tracking-[0.05em] text-navy">{w.title}</h3>
                <p className="mt-3 text-[0.84rem] leading-relaxed text-ink/58">{w.line}</p>
                <span className="mt-6 flex items-center gap-2 text-[0.62rem] font-600 uppercase tracking-[0.2em] text-gold opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  Explore <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------- 07 · WHY THE FIRM ----------------------- */

function WhyFirm() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 lg:py-32">
      <div className="container-x">
        <div className="max-w-4xl">
          <Eyebrow tone="navy">Why The Firm</Eyebrow>
          <h2 className="mt-6 font-display text-[1.85rem] font-700 uppercase leading-[1] tracking-[-0.012em] text-navy sm:text-[3.1rem] lg:text-[4.3rem]">
            <MaskLines lines={["Science.", <span key="s" className="text-gold">Strategy.</span>, "Confidentiality."]} />
          </h2>
        </div>

        <div className="mt-16 border-t border-navy/12">
          {principles.map((p, i) => (
            <Reveal key={p.number} delay={i * 120}>
              <div className="group grid gap-5 border-b border-navy/12 py-10 md:grid-cols-[auto_1fr_1.1fr] md:items-baseline md:gap-10 lg:py-12">
                <span className="font-display text-[3.4rem] font-700 leading-none text-navy/12 transition-colors duration-500 group-hover:text-gold/70 lg:text-[5rem]">
                  {p.number}
                </span>
                <h3 className="font-display text-[1.35rem] uppercase leading-snug tracking-[0.03em] text-navy lg:text-[1.7rem]">
                  {p.title}
                </h3>
                <p className="text-[0.95rem] leading-[1.85] text-ink/65 lg:justify-self-end lg:max-w-md">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- 08 · METHODOLOGY ------------------------ */

function MethodologySection() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-etch opacity-40" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" aria-hidden="true" />
      <div className="container-x relative">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <SectionHeading tone="light" eyebrow="Methodology" lines={["How we analyze", <span key="c" className="text-white/45">complex evidence.</span>]} />
          <Reveal delay={180} className="max-w-xs">
            <p className="text-[0.88rem] leading-[1.8] text-white/55">
              A four-stage sequence that moves from paper to examination to a written opinion — documented at every step.
            </p>
            <div className="mt-6">
              <ArrowLink to="/methodology" tone="light">Full Method</ArrowLink>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <span className="absolute left-0 right-0 top-[3.1rem] hidden h-px bg-white/12 lg:block" aria-hidden="true" />
          <GoldRule className="absolute left-0 right-0 top-[3.1rem] hidden lg:block" />
          <ol className="grid gap-px bg-white/10 lg:grid-cols-4">
            {methodology.map((m, i) => (
              <Reveal as="li" key={m.step} delay={i * 130} className="group relative bg-navy">
                <div className="flex h-full flex-col p-7 lg:p-8">
                  <div className="flex items-center gap-4">
                    <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-navy">
                      <span className="font-display text-[0.72rem] font-600 tracking-[0.1em] text-gold">{m.step}</span>
                      <span className="absolute inset-0 rounded-full border border-gold/40 opacity-0 group-hover:animate-pulse-ring group-hover:opacity-100" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-[0.98rem] uppercase leading-tight tracking-[0.08em]">{m.title}</h3>
                  </div>
                  <div className="relative mt-6 aspect-[4/3] overflow-hidden">
                    <img
                      src={m.image}
                      alt={m.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover opacity-55 transition-all duration-[1200ms] group-hover:scale-105 group-hover:opacity-85"
                    />
                  </div>
                  <ul className="mt-6 space-y-2.5">
                    {m.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-[0.82rem] leading-relaxed text-white/62">
                        <span className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-gold/80" aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ----------------------- 09 · EXPERT BOARD ------------------------- */

function ExpertBoardStrip() {
  const board = experts.slice(1);
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading eyebrow="Expert Board" size="md" lines={["Multi-disciplinary", "expertise."]} />
          <Reveal delay={160}>
            <ArrowLink to="/expert-board" tone="dark">Meet The Expert Board</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {board.map((e, i) => (
            <Reveal key={e.id} delay={i * 100}>
              <Link to="/expert-board" className="group flex h-full flex-col border border-navy/12 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_28px_60px_-38px_rgba(11,27,61,.45)]">
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center border border-navy/12 bg-paper transition-colors duration-500 group-hover:border-gold/60 group-hover:bg-navy">
                    <Monogram initials={e.initials} className="text-[1.05rem] tracking-[0.06em] text-navy group-hover:text-gold-soft" />
                  </span>
                  <span className="font-display text-[0.66rem] uppercase tracking-[0.2em] text-gold">{String(i + 2).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-6 font-display text-[1.08rem] uppercase leading-snug tracking-[0.03em] text-navy">{e.name}</h3>
                <p className="mt-2.5 text-[0.78rem] uppercase tracking-[0.1em] text-ink/50">{e.role}</p>
                <span className="mt-5 block h-px w-full bg-navy/10" aria-hidden="true" />
                <span className="mt-5 block font-display text-[1.5rem] font-600 text-navy/85">{e.experience}</span>
                <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.2em] text-ink/40">At the Bar</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- 10 · INSIGHTS -------------------------- */

function InsightsStrip() {
  return (
    <section className="relative bg-paper py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading eyebrow="Knowledge Hub" size="md" lines={["Medico-legal", "insights."]} />
          <Reveal delay={140}>
            <ArrowLink to="/insights" tone="dark">Explore Knowledge Hub</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-px md:bg-navy/12">
          {insights.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} delay={i * 110}>
              <Link to={`/insights/${a.slug}`} className="group flex h-full flex-col bg-paper pt-px transition-colors duration-500 md:bg-white md:p-8 md:hover:bg-white">
                <ImgReveal src={a.image} alt={a.title} ratio="16/10" />
                <div className="flex items-center justify-between gap-4 pt-6 md:pt-7">
                  <span className="eyebrow text-gold">{a.category}</span>
                  <span className="text-[0.66rem] uppercase tracking-[0.14em] text-ink/40">{a.readingTime}</span>
                </div>
                <h3 className="mt-4 font-display text-[1.15rem] uppercase leading-[1.35] tracking-[0.01em] text-navy transition-colors duration-300 group-hover:text-navy/75 md:text-[1.28rem]">
                  {a.title}
                </h3>
                <p className="mt-4 flex-1 text-[0.875rem] leading-[1.8] text-ink/62">{a.excerpt}</p>
                <span className="mt-6 flex items-center gap-2 text-[0.66rem] font-600 uppercase tracking-[0.2em] text-navy">
                  Read Note
                  <span className="h-px w-6 bg-gold transition-all duration-400 group-hover:w-11" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------- 11 · CONFIDENTIAL CONSULTATION ---------------- */

function ConfidentialCta() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep py-24 text-white lg:py-32">
      <div className="absolute inset-0 z-[-1] bg-[radial-gradient(70%_120%_at_82%_50%,rgba(212,175,55,.13),transparent_62%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 z-[-1] grid-etch opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 top-1/2 z-[-1] -translate-y-1/2 opacity-[0.07]" aria-hidden="true">
        <Emblem className="h-[30rem] w-[30rem] animate-drift" />
      </div>

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <Eyebrow>Confidential Consultation</Eyebrow>
            <h2 className="mt-7 font-display text-[1.85rem] font-600 uppercase leading-[1.08] sm:text-[2.9rem] sm:leading-[1.03] lg:text-[3.9rem]">
              <MaskLines lines={["Have a complex", <span key="a" className="text-white/48">medico-legal</span>, "question?"]} />
            </h2>
            <p className="mt-8 max-w-lg text-[1rem] leading-[1.85] text-white/62">
              Discuss your case with our expert advisory team. Submissions are reviewed for scope and confidentiality before any
              engagement is discussed.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PrimaryAction to="/contact">Request Advisory</PrimaryAction>
              <OutlineAction href={`tel:${contact.phones[0].replace(/\s/g, "")}`} tone="light">
                <Phone className="h-3.5 w-3.5" /> Call {contact.phones[0]}
              </OutlineAction>
            </div>
          </div>

          <Reveal variant="right" delay={200}>
            <figure className="relative border border-white/12 bg-white/[0.03] p-8 backdrop-blur-[2px]">
              <Quote className="h-7 w-7 text-gold/70" strokeWidth={1.4} aria-hidden="true" />
              <blockquote className="mt-5 font-editorial text-[1.28rem] leading-[1.6] text-white/88">
                {brand.core}
              </blockquote>
              <figcaption className="mt-6 border-t border-white/12 pt-5 text-[0.68rem] uppercase tracking-[0.2em] text-white/45">
                {brand.brandName} · {brand.tagline}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- 12 · LOCATIONS ------------------------ */

function Locations() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Offices & Contact" size="sm" lines={["Greater Noida.", "Agra."]} />
            <p className="mt-6 max-w-md text-[0.92rem] leading-[1.85] text-ink/62">
              Advisory desks in both locations operate under a single confidentiality and documentation standard. Meetings are
              scheduled in advance.
            </p>
            <ul className="mt-10 space-y-4">
              {contact.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="group flex items-center gap-4 border border-navy/12 px-5 py-4 transition-colors duration-300 hover:border-gold/60">
                    <Phone className="h-4 w-4 text-gold" strokeWidth={1.7} />
                    <span className="font-display text-[1.02rem] tracking-[0.06em] text-navy">{p}</span>
                    <ArrowRight className="ml-auto h-4 w-4 text-navy/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold" />
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${contact.email}`} className="group flex items-center gap-4 border border-navy/12 px-5 py-4 transition-colors duration-300 hover:border-gold/60">
                  <Mail className="h-4 w-4 text-gold" strokeWidth={1.7} />
                  <span className="break-all text-[0.9rem] tracking-[0.02em] text-navy/85">{contact.email}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {contact.offices.map((o, i) => (
              <Reveal key={o.kind} delay={i * 130}>
                <div className="group relative flex h-full flex-col overflow-hidden border border-navy/12 bg-paper p-7 transition-all duration-500 hover:border-navy/25">
                  <span className="absolute inset-x-0 top-0 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" aria-hidden="true" />
                  <div className="flex items-center justify-between">
                    <p className="eyebrow text-navy/45">{o.kind}</p>
                    <MapPin className="h-4 w-4 text-gold" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-6 font-display text-[1.7rem] uppercase leading-none tracking-[0.02em] text-navy">{o.city}</h3>
                  <p className="mt-2 text-[0.78rem] uppercase tracking-[0.18em] text-ink/45">{o.state}</p>
                  <span className="mt-6 block h-px w-full bg-navy/10" aria-hidden="true" />
                  <p className="mt-5 text-[0.85rem] leading-relaxed text-ink/60">{o.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
