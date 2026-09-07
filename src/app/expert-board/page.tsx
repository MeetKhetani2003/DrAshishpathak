"use client";
import { useState, useEffect } from "react";
import { ChevronDown, MapPin, Scale, GraduationCap } from "lucide-react";
import PageHero from "@/components/PageHero";
import {
  ArrowLink,
  Eyebrow,
  GoldRule,
  ImgReveal,
  MaskLines,
  Monogram,
  PrimaryAction,
  Reveal,
  SectionHeading,
} from "@/components/ui";
import { cn } from "@/utils/cn";
import useSeo from "@/hooks/useSeo";

export default function ExpertBoard() {
  useSeo({
    title: "Expert Board | Forensic & Medico-Legal Consultants",
    description:
      "The expert board of Dr. Ashish Pathak & Associates — a multi-disciplinary panel combining clinical, forensic and legal practice across advocates and consultants.",
  });

  const [experts, setExperts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/experts")
      .then((res) => res.json())
      .then((data) => {
        setExperts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch experts:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Expert Board"
        title={["Multi-disciplinary", "expertise."]}
        image="/images/methodology/document-review.jpg"
        alt="Advisory team reviewing medico-legal case files"
        intro="One file, several disciplines. The board combines orthopaedic and forensic clinical practice with decades of courtroom experience, so that technical findings and procedural strategy are developed together rather than handed across."
        meta={[
          { label: "Panel Strength", value: "Multiple Different Speciality Experts" },
          { label: "Combined Practice", value: "Clinical · Forensic · Legal" },
          { label: "Jurisdiction", value: "Uttar Pradesh & Pan-India Advisory" },
          { label: "Engagement", value: "Confidential, Scope-defined" },
        ]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-6 border-y border-navy/12 py-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "01", v: "Clinical Assessment" },
              { k: "02", v: "Forensic Interpretation" },
              { k: "03", v: "Legal Framing" },
              { k: "04", v: "Written Opinion" },
            ].map((s) => (
              <Reveal key={s.k} delay={Number(s.k) * 80 - 80}>
                <p className="flex items-baseline gap-4">
                  <span className="font-display text-[0.72rem] tracking-[0.2em] text-gold">{s.k}</span>
                  <span className="font-display text-[1rem] uppercase tracking-[0.06em] text-navy">{s.v}</span>
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {loading ? (
        <div className="py-20 text-center text-navy font-display text-lg">Loading Experts...</div>
      ) : (
        experts.map((e, i) => (
          <Profile key={e._id || e.expertId || i} index={i} expert={e} />
        ))
      )}

      <section className="bg-paper py-20 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <SectionHeading eyebrow="Engage The Board" size="md" lines={["Bring the file.", "We will read it first."]} />
            <Reveal delay={150}>
              <p className="mt-7 max-w-xl text-[0.98rem] leading-[1.9] text-ink/70">
                Advisory is engaged against a defined scope. Records are handled under the firm's confidentiality protocol, and
                the engagement of a specific member of the board is confirmed in writing before analysis begins.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-7">
                <PrimaryAction to="/contact" tone="navy">Request Advisory</PrimaryAction>
                <ArrowLink to="/methodology" tone="dark">How We Analyze</ArrowLink>
              </div>
            </Reveal>
          </div>
          <ImgReveal src="/images/services/hospital-defense.jpg" alt="Hospital corridor used for medicolegal protocol advisory" ratio="16/10" className="border border-navy/10" />
        </div>
      </section>
    </>
  );
}

function Profile({ expert, index }: { expert: any; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const flip = index % 2 === 1;

  return (
    <section className={cn("py-16 lg:py-24", index === 0 ? "bg-navy text-white" : index % 3 === 1 ? "bg-white" : "bg-paper")}>
      <div className="container-x">
        <div className={cn("grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16", flip && "lg:grid-cols-[1.15fr_.85fr]")}>
          <Reveal variant={flip ? "right" : "left"} className={cn(flip && "lg:order-2")}>
            <div className="relative">
              {expert.image ? (
                <ImgReveal
                  src={expert.image}
                  alt={`Portrait of ${expert.name}`}
                  ratio="4/5"
                  className={cn("border", index === 0 ? "border-white/12" : "border-navy/12")}
                  imgClassName="object-top"
                />
              ) : (
                <div
                  className={cn(
                    "relative flex aspect-[4/5] items-center justify-center overflow-hidden border",
                    index === 0 ? "border-white/12" : "border-navy/12",
                  )}
                >
                  <div
                    className="absolute inset-0 opacity-[0.13]"
                    style={{ backgroundImage: "url(/images/about/firm-office.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
                    aria-hidden="true"
                  />
                  <div className="relative flex flex-col items-center gap-5">
                    <span className={cn("flex h-28 w-28 items-center justify-center border", index === 0 ? "border-gold/40" : "border-navy/20")}>
                      <Monogram
                        initials={expert.initials}
                        className={cn("text-[2.4rem] font-600", index === 0 ? "text-gold-soft" : "text-navy")}
                      />
                    </span>
                    <span className={cn("eyebrow", index === 0 ? "text-white/60" : "text-ink/55")}>Portrait on request</span>
                  </div>
                  <span className="absolute inset-x-0 bottom-0 h-px bg-gold/60" aria-hidden="true" />
                </div>
              )}
              <span
                className={cn(
                  "absolute -top-5 px-4 py-2 font-display text-[0.7rem] uppercase tracking-[0.2em]",
                  index === 0 ? "left-0 bg-gold text-navy" : "left-0 bg-navy text-white",
                )}
              >
                {expert.experience}
              </span>
            </div>
          </Reveal>

          <div className={cn(flip && "lg:order-1")}>
            <Eyebrow>{`Member ${String(index + 1).padStart(2, "0")}`}</Eyebrow>
            <h2 className={cn("mt-5 font-display text-[1.45rem] font-600 uppercase leading-[1.14] sm:text-[1.95rem] sm:leading-[1.08] lg:text-[2.7rem]", index === 0 ? "text-white" : "text-navy")}>
              <MaskLines lines={wrap(expert.name, 3)} />
            </h2>
            <p className={cn("mt-4 text-[0.8rem] uppercase tracking-[0.16em]", index === 0 ? "text-gold-soft" : "text-ink/55")}>{expert.role}</p>
            <GoldRule className={cn("mt-8", index === 0 ? "opacity-80" : "")} />

            <div className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              <Field label="Qualifications" dark={index === 0} items={expert.qualifications} icon={GraduationCap} />
              <Field label="Practice Areas" dark={index === 0} items={expert.practiceAreas} icon={Scale} />
            </div>

            <p className={cn("mt-8 flex items-center gap-2.5 text-[0.78rem] uppercase tracking-[0.14em]", index === 0 ? "text-white/50" : "text-ink/50")}>
              <MapPin className="h-3.5 w-3.5 text-gold" strokeWidth={1.7} aria-hidden="true" /> {expert.jurisdiction}
            </p>

            <div className={cn("mt-8 overflow-hidden transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]", !expanded && "max-h-40 lg:max-h-none")}>
              <div className="space-y-4 border-t pt-7 text-[0.94rem] leading-[1.9]" style={{ borderColor: index === 0 ? "rgba(255,255,255,.14)" : "rgba(11,27,61,.12)" }}>
                {expert.bio.map((p: string) => (
                  <p key={p.slice(0, 24)} className={index === 0 ? "text-white/65" : "text-ink/70"}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className={cn(
                "mt-5 inline-flex items-center gap-2 text-[0.66rem] font-600 uppercase tracking-[0.2em] lg:hidden",
                index === 0 ? "text-gold-soft" : "text-navy",
              )}
            >
              {expanded ? "Read less" : "Read full profile"}
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", expanded && "rotate-180")} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, items, icon: IconCmp, dark }: { label: string; items: string[]; icon: typeof Scale; dark?: boolean }) {
  return (
    <div>
      <p className={cn("eyebrow flex items-center gap-2", dark ? "text-white/40" : "text-ink/45")}>
        <IconCmp className="h-3.5 w-3.5 text-gold" strokeWidth={1.6} aria-hidden="true" />
        {label}
      </p>
      <ul className="mt-3.5 flex flex-wrap gap-2">
        {items.map((q) => (
          <li
            key={q}
            className={cn(
              "border px-2.5 py-1.5 text-[0.68rem] uppercase tracking-[0.09em] transition-colors duration-300",
              dark ? "border-white/14 text-white/72 hover:border-gold/60 hover:text-gold-soft" : "border-navy/14 text-navy/72 hover:border-gold",
            )}
          >
            {q}
          </li>
        ))}
      </ul>
    </div>
  );
}

function wrap(text: string, perLine: number) {
  const words = text.split(" ");
  const lines: string[] = [];
  for (let i = 0; i < words.length; i += perLine) lines.push(words.slice(i, i + perLine).join(" "));
  return lines;
}
