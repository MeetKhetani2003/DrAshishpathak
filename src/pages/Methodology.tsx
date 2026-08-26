import { FileSearch, Microscope, Stethoscope, FileCheck2, ArrowDown, Lock, ShieldAlert } from "lucide-react";
import PageHero from "@/components/PageHero";
import {
  ArrowLink,
  Eyebrow,
  GoldRule,
  ImgReveal,
  MaskLines,
  PrimaryAction,
  Reveal,
  SectionHeading,
  useInView,
} from "@/components/ui";
import { methodology } from "@/data/site";
import { cn } from "@/utils/cn";
import useSeo from "@/hooks/useSeo";

const flow = [
  { label: "Case File", detail: "Records received under a defined scope", icon: FileSearch },
  { label: "Document Review", detail: "Chronology, completeness, internal conflict", icon: FileSearch },
  { label: "Forensic / Clinical Analysis", detail: "Mechanism, consistency, limitations", icon: Microscope },
  { label: "Direct Examination", detail: "Personal clinical assessment where required", icon: Stethoscope },
  { label: "Expert Opinion", detail: "Written findings, reasoning and caveats", icon: FileCheck2 },
];

export default function Methodology() {
  useSeo({
    title: "Methodology | How Forensic & Medico-Legal Evidence Is Analyzed",
    description:
      "Desk review of medical records, imaging and post-mortem reports, scientific analysis, direct clinical examination and a written court-ready expert opinion.",
  });

  return (
    <>
      <PageHero
        eyebrow="Methodology"
        title={["How the file", "is analyzed"]}
        image="/images/methodology/document-review.jpg"
        alt="Medico-legal file being reviewed under desk lamp"
        intro="A fixed sequence, applied to every matter. It exists so that conclusions can be audited: what was read, in what order, what was examined, and what the material could not establish."
        meta={[
          { label: "Stage Count", value: "05" },
          { label: "Examination", value: "Desk · Clinical" },
          { label: "Output", value: "Written Opinion" },
          { label: "Handling", value: "Confidential" },
        ]}
      />

      {/* Vertical flow */}
      <section className="relative bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-3xl">
            <Eyebrow tone="navy">The Sequence</Eyebrow>
            <h2 className="mt-5 font-display text-[1.9rem] font-600 uppercase leading-[1.1] text-navy lg:text-[2.7rem]">
              <MaskLines lines={["From case file to", "expert opinion."]} />
            </h2>
            <Reveal delay={140}>
              <p className="mt-7 text-[1rem] leading-[1.9] text-ink/70">
                Nothing is skipped and nothing is reordered for convenience. Each stage produces a documented output that the
                next stage depends on.
              </p>
            </Reveal>
          </div>

          <ol className="mt-16 grid gap-6 lg:gap-0">
            {flow.map((f, i) => (
              <li key={f.label}>
                <Reveal delay={i * 90}>
                  <div className="group relative grid items-start gap-6 border-t border-navy/12 py-7 lg:grid-cols-[7rem_1fr_auto] lg:gap-10">
                    <span className="font-display text-[0.72rem] uppercase tracking-[0.22em] text-gold">Stage {String(i + 1).padStart(2, "0")}</span>
                    <div className="flex items-start gap-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-navy/14 text-navy transition-all duration-400 group-hover:border-gold group-hover:bg-navy group-hover:text-gold">
                        <f.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-display text-[1.18rem] uppercase leading-snug tracking-[0.03em] text-navy lg:text-[1.45rem]">{f.label}</h3>
                        <p className="mt-2 max-w-xl text-[0.92rem] leading-relaxed text-ink/62">{f.detail}</p>
                      </div>
                    </div>
                    <span className="hidden font-display text-[2.6rem] font-700 leading-none text-navy/[0.07] transition-colors duration-500 group-hover:text-gold/25 lg:block" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>
                {i < flow.length - 1 ? (
                  <div className="flex justify-center py-1 lg:hidden" aria-hidden="true">
                    <ArrowDown className="h-4 w-4 text-gold/70" />
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Four stages detail with imagery */}
      <section className="bg-navy py-20 text-white lg:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading tone="light" eyebrow="In Detail" size="md" lines={["Two disciplines:", "reading and examining."]} />
            <Reveal delay={140} className="max-w-sm">
              <p className="text-[0.9rem] leading-[1.85] text-white/58">
                Desk review establishes what the record says. Direct clinical examination establishes what the body currently
                shows. The opinion is only as strong as the reconciliation between them.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 space-y-16 lg:space-y-24">
            {methodology.map((m, i) => (
              <Reveal key={m.step} delay={80}>
                <article className={cn("grid items-center gap-8 lg:grid-cols-2 lg:gap-16")}>
                  <div className={cn("relative", i % 2 === 1 && "lg:order-2")}>
                    <ImgReveal src={m.image} alt={m.title} ratio="16/10" className="border border-white/12" />
                    <span className="absolute -bottom-4 left-0 bg-gold px-4 py-2 font-display text-[0.68rem] uppercase tracking-[0.2em] text-navy">
                      Step {m.step}
                    </span>
                  </div>
                  <div className={cn(i % 2 === 1 && "lg:order-1")}>
                    <h3 className="font-display text-[1.55rem] font-600 uppercase leading-[1.15] lg:text-[2.1rem]">
                      <MaskLines lines={wrap(m.title)} />
                    </h3>
                    <GoldRule className="mt-7 max-w-[14rem]" />
                    <ul className="mt-8 space-y-4">
                      {m.points.map((p) => (
                        <li key={p} className="flex items-start gap-4 border-b border-white/10 pb-4 text-[0.94rem] leading-relaxed text-white/72">
                          <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguards */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Safeguards" size="md" lines={["Confidential by", "default. Limited", "by design."]} />
            <Reveal delay={160}>
              <p className="mt-8 max-w-lg text-[0.98rem] leading-[1.9] text-ink/70">
                The value of a medico-legal opinion lies as much in what it refuses to claim as in what it concludes. Our
                working safeguards are stated openly so clients know precisely what to expect from a file.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-7">
                <PrimaryAction to="/contact" tone="navy">Start A Review</PrimaryAction>
                <ArrowLink to="/disclaimer" tone="dark">Read The Disclaimer</ArrowLink>
              </div>
            </Reveal>
          </div>
          <div className="grid gap-px bg-navy/12 sm:grid-cols-2">
            {[
              { icon: Lock, title: "Need-to-know handling", body: "Files are circulated only to the assigned advisory member. Nothing is retained for marketing or case-display purposes." },
              { icon: ShieldAlert, title: "No advocacy in the note", body: "The analysis states findings and limitations. Argument construction remains with counsel, who owns the case." },
              { icon: FileSearch, title: "Source-traceable findings", body: "Every conclusion cites the record, measurement or examination it rests on, so it can be independently checked." },
              { icon: FileCheck2, title: "Explicit insufficiency", body: "Where the material cannot support an answer, the opinion says so rather than estimating." },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="h-full bg-paper p-7 transition-colors duration-500 hover:bg-white">
                  <s.icon className="h-5 w-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-5 font-display text-[0.98rem] uppercase leading-snug tracking-[0.04em] text-navy">{s.title}</h3>
                  <p className="mt-3 text-[0.85rem] leading-relaxed text-ink/62">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EvidenceGrid />
    </>
  );
}

function EvidenceGrid() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  const items = [
    { src: "/images/methodology/document-review.jpg", label: "Record & File Review" },
    { src: "/images/services/forensic-injury.jpg", label: "Imaging & Radiology" },
    { src: "/images/methodology/clinical-examination.jpg", label: "Clinical Examination" },
    { src: "/images/services/toxicology.jpg", label: "Toxicology Analysis" },
  ];
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-x">
        <Eyebrow tone="navy">Evidence Types</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-display text-[1.6rem] font-600 uppercase leading-[1.15] text-navy lg:text-[2.1rem]">
          What typically arrives on the desk
        </h2>
        <div ref={ref} className="mt-12 grid gap-px bg-navy/12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <figure key={it.label} className="group relative overflow-hidden bg-white">
              <div className={cn("relative aspect-[4/3] overflow-hidden", inView && "is-in", "img-reveal")}>
                <img
                  src={it.src}
                  alt={it.label}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover grayscale-[45%] transition-all duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <figcaption className="flex items-center justify-between px-6 py-5">
                <span className="font-display text-[0.82rem] uppercase tracking-[0.08em] text-navy">{it.label}</span>
                <span className="text-[0.62rem] tracking-[0.2em] text-ink/35">{String(i + 1).padStart(2, "0")}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function wrap(text: string, perLine = 2) {
  const words = text.split(" ");
  const lines: string[] = [];
  for (let i = 0; i < words.length; i += perLine) lines.push(words.slice(i, i + perLine).join(" "));
  return lines;
}
