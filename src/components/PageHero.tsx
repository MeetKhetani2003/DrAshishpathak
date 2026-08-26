import type { ReactNode } from "react";
import { Eyebrow, MaskLines, Reveal } from "@/components/ui";
import { cn } from "@/utils/cn";

/** Cinematic hero used on every inner page: full-bleed local image, navy mask, editorial title. */
export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
  meta,
  align = "left",
  height = "tall",
}: {
  eyebrow: string;
  title: string[];
  intro?: ReactNode;
  image: string;
  alt: string;
  meta?: { label: string; value: string }[];
  align?: "left" | "center";
  height?: "tall" | "short";
}) {
  return (
    <section
      className={cn(
        "relative isolate flex items-end overflow-hidden bg-navy-deep",
        height === "tall" ? "min-h-[74svh] pb-16 pt-40 lg:min-h-[82svh] lg:pb-24 lg:pt-52" : "min-h-[58svh] pb-14 pt-36 lg:pb-16",
      )}
    >
      <div className="absolute inset-0 z-[-2]">
        <img src={image} alt={alt} className="h-full w-full object-cover opacity-45" loading="eager" decoding="async" />
      </div>
      <div
        className="absolute inset-0 z-[-1] bg-[radial-gradient(120%_100%_at_15%_10%,rgba(11,27,61,.72),rgba(7,21,47,.96)_58%,rgba(7,21,47,1))]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 z-[-1] grid-etch opacity-50" aria-hidden="true" />
      <span className="pointer-events-none absolute left-0 right-0 top-0 z-[-1] h-px bg-gold/30" aria-hidden="true" />

      <div className={cn("container-x", align === "center" && "text-center")}>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <h1
          className={cn(
            "mt-6 font-display text-[1.5rem] font-600 uppercase leading-[1.18] tracking-[-0.014em] text-white sm:text-[2.5rem] sm:leading-[1.05] lg:text-[3.7rem] xl:text-[4.3rem]",
            align === "center" && "mx-auto max-w-4xl",
          )}
        >
          <MaskLines lines={title} />
        </h1>
        <span className={cn("mt-8 block h-px w-28 bg-gold", align === "center" && "mx-auto")} aria-hidden="true" />
        {intro ? (
          <Reveal delay={220}>
            <p className={cn("mt-8 max-w-2xl text-[1rem] leading-[1.85] text-white/68 lg:text-[1.06rem]", align === "center" && "mx-auto")}>
              {intro}
            </p>
          </Reveal>
        ) : null}
        {meta?.length ? (
          <Reveal delay={320}>
            <dl className={cn("mt-12 grid max-w-3xl gap-x-10 gap-y-6 border-t border-white/12 pt-8 sm:grid-cols-2 lg:grid-cols-4")}>
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="eyebrow text-white/60">{m.label}</dt>
                  <dd className="mt-2.5 font-display text-[0.95rem] tracking-[0.05em] text-gold-soft">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
