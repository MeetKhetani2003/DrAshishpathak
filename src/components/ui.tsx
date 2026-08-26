import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Scale,
  ShieldCheck,
  Lock,
  BadgeCheck,
  GraduationCap,
  Landmark,
  Building2,
  Stethoscope,
  Microscope,
  FlaskConical,
  Bone,
  FileSearch,
  ClipboardList,
  Gavel,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/utils/cn";

/* ------------------------------------------------------------------ */
/* Motion primitives                                                    */
/* ------------------------------------------------------------------ */

export function useInView<T extends HTMLElement>(threshold = 0.18, once = true) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.unobserve(node);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold, once]);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right" | "none";
  as?: "div" | "li" | "section" | "article" | "header" | "figure" | "span";
};

export function Reveal({ children, className, delay = 0, variant = "up", as = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.14);
  const Tag = as as "div";
  return (
    <Tag
      ref={ref as never}
      className={cn("rv", inView && "is-in", variant === "left" && "rv-left", variant === "right" && "rv-right", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/** Line-mask headline reveal: each line slides out from behind its own mask. */
export function MaskLines({
  lines,
  className,
  lineClassName,
  stagger = 110,
}: {
  lines: (string | ReactNode)[];
  className?: string;
  lineClassName?: string;
  stagger?: number;
}) {
  const { ref, inView } = useInView<HTMLHeadingElement>(0.2);
  return (
    <span ref={ref} className={cn("mask-line block", inView && "is-in", className)}>
      {lines.map((line, i) => (
        <span key={i} className={cn("block", lineClassName)}>
          <span style={{ transitionDelay: `${i * stagger}ms` }}>{line}</span>
        </span>
      ))}
    </span>
  );
}

export function ImgReveal({
  src,
  alt,
  className,
  imgClassName,
  ratio,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  ratio?: string;
  loading?: "lazy" | "eager";
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);
  return (
    <div
      ref={ref}
      className={cn("img-reveal", inView && "is-in", "relative overflow-hidden bg-navy", className)}
      style={{ aspectRatio: ratio }}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Brand mark                                                           */
/* ------------------------------------------------------------------ */

export function Emblem({ className, tone = "gold" }: { className?: string; tone?: "gold" | "navy" | "mono" }) {
  const stroke = tone === "gold" ? "#D4AF37" : tone === "navy" ? "#0B1B3D" : "currentColor";
  const plate = tone === "navy" ? "rgba(11,27,61,.06)" : "rgba(212,175,55,.14)";
  return (
    <svg viewBox="0 0 64 64" className={cn("h-10 w-10", className)} role="img" aria-label="Medico-Legal Experts emblem">
      <path
        d="M32 3 56 11v22.2C56 46.6 45.9 56.9 32 61 18.1 56.9 8 46.6 8 33.2V11L32 3Z"
        fill={tone === "navy" ? "#FFFFFF" : "rgba(11,27,61,.55)"}
        stroke={stroke}
        strokeWidth="2"
      />
      <path
        d="M32 8.6 50.4 14.8v18c0 10.4-8.1 19-18.4 22.2-10.3-3.2-18.4-11.8-18.4-22.2v-18L32 8.6Z"
        fill="none"
        stroke={stroke}
        strokeOpacity=".3"
        strokeWidth="0.9"
      />
      <g stroke={stroke} strokeWidth="1.9" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 18.5V40" />
        <path d="M21 22.5h22" />
        <path d="M24.5 22.5 20.6 30.6h7.8l-3.9-8.1Z" fill={plate} />
        <path d="M39.5 22.5 35.6 30.6h7.8l-3.9-8.1Z" fill={plate} />
        <path d="M17.8 22.6a6.4 6.4 0 0 0 4.1 4.1M46.2 22.6a6.4 6.4 0 0 1-4.1 4.1" />
        <path d="M27.6 40.4h8.8" />
      </g>
      <circle cx="32" cy="15.8" r="2.1" fill={stroke} />
    </svg>
  );
}

export function Wordmark({ tone = "light", compact = false }: { tone?: "light" | "dark"; compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <img
        src="/logos/logo.png"
        alt="Dr. Ashish Pathak & Associates"
        className={cn(
          "object-contain",
          compact ? "h-12 w-12" : "h-16 w-16",
        )}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[0.85rem] font-700 uppercase tracking-[0.12em] sm:text-[0.95rem] lg:text-[1.05rem]",
            tone === "light" ? "text-gold" : "text-navy",
          )}
        >
          Dr. Ashish Pathak
        </span>
        <span
          className={cn(
            "mt-1.5 text-[0.62rem] font-600 uppercase tracking-[0.28em] sm:text-[0.68rem]",
            tone === "light" ? "text-gold-soft" : "text-gold",
          )}
        >
          & Associates
        </span>
      </span>
    </span>
  );
}


/* ------------------------------------------------------------------ */
/* Typography + layout helpers                                          */
/* ------------------------------------------------------------------ */

export function Eyebrow({ children, className, tone = "gold" }: { children: ReactNode; className?: string; tone?: "gold" | "navy" }) {
  return (
    <span className={cn("inline-flex items-center gap-3 eyebrow", tone === "gold" ? "text-gold" : "text-navy/60", className)}>
      <span className={cn("h-px w-8", tone === "gold" ? "bg-gold/70" : "bg-navy/30")} />
      {children}
    </span>
  );
}

export function SectionHeading({
  lines,
  eyebrow,
  tone = "dark",
  align = "left",
  size = "lg",
  className,
}: {
  lines: (string | ReactNode)[];
  eyebrow?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  size?: "lg" | "md" | "sm";
  className?: string;
}) {
  const sizes = {
    lg: "text-[1.72rem] leading-[1.14] sm:text-[2.6rem] sm:leading-[1.06] lg:text-[3.5rem] xl:text-[4rem]",
    md: "text-[1.55rem] leading-[1.18] sm:text-[2.2rem] lg:text-[2.75rem]",
    sm: "text-[1.32rem] leading-[1.22] sm:text-[1.8rem]",
  } as const;
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow ? <Eyebrow tone={tone === "light" ? "gold" : "navy"}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "mt-5 font-display font-600 uppercase tracking-[-0.005em]",
          sizes[size],
          tone === "light" ? "text-white" : "text-navy",
        )}
      >
        <MaskLines lines={lines} />
      </h2>
    </div>
  );
}

export function GoldRule({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  return <span ref={ref} className={cn("rule-grow block h-px bg-gold/60", inView && "is-in", className)} />;
}

/* ------------------------------------------------------------------ */
/* Actions                                                             */
/* ------------------------------------------------------------------ */

const btnBase =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden px-7 py-4 text-[0.7rem] font-600 uppercase tracking-[0.18em] transition-all duration-300";

export function PrimaryAction({
  to,
  href,
  children,
  className,
  tone = "gold",
  onClick,
  type,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  tone?: "gold" | "navy" | "light";
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const palette = {
    gold: "bg-gold text-navy hover:bg-gold-soft",
    navy: "bg-navy text-white hover:bg-navy-veil",
    light: "bg-white text-navy hover:bg-paper",
  } as const;
  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </>
  );
  const cls = cn(btnBase, palette[tone], className);
  if (to) return <Link to={to} className={cls} onClick={onClick}>{inner}</Link>;
  if (href) return <a href={href} className={cls}>{inner}</a>;
  return (
    <button type={type ?? "button"} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}

export function OutlineAction({
  to,
  href,
  children,
  className,
  tone = "light",
  onClick,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
  onClick?: (e: React.MouseEvent) => void;
}) {
  const cls = cn(
    btnBase,
    "border",
    tone === "light"
      ? "border-white/28 text-white hover:border-gold hover:text-gold-soft"
      : "border-navy/25 text-navy hover:border-gold hover:text-navy",
    className,
  );
  const inner = (
    <>
      <span>{children}</span>
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </>
  );
  if (to) return <Link to={to} className={cls} onClick={onClick}>{inner}</Link>;
  return (
    <a href={href ?? undefined} className={cls} onClick={onClick}>
      {inner}
    </a>
  );
}

/** Hash-router-safe in-page scroll (no anchor hrefs, no route change). */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  const prev = el.getAttribute("tabindex");
  if (prev === null) el.setAttribute("tabindex", "-1");
  (el as HTMLElement).focus({ preventScroll: true });
  if (prev === null) el.addEventListener("blur", () => el.removeAttribute("tabindex"), { once: true });
}

export function ArrowLink({ to, children, tone = "light" }: { to: string; children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-3 text-[0.7rem] font-600 uppercase tracking-[0.2em]",
        tone === "light" ? "text-gold-soft" : "text-navy",
      )}
    >
      <span className="link-underline">{children}</span>
      <span className={cn("flex h-7 w-7 items-center justify-center border transition-all duration-300",
        tone === "light" ? "border-white/20 group-hover:border-gold group-hover:bg-gold/10" : "border-navy/20 group-hover:border-gold")}>
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Icon registry (lucide)                                              */
/* ------------------------------------------------------------------ */

export const iconMap: Record<string, LucideIcon> = {
  badge: BadgeCheck,
  "check-shield": ShieldCheck,
  lock: Lock,
  scales: Scale,
  cap: GraduationCap,
  building: Building2,
  hospital: Building2,
  landmark: Landmark,
  stethoscope: Stethoscope,
  microscope: Microscope,
  flask: FlaskConical,
  bone: Bone,
  "file-search": FileSearch,
  clipboard: ClipboardList,
  gavel: Gavel,
  book: BookOpen,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = iconMap[name] ?? ShieldCheck;
  return <Cmp className={cn("h-5 w-5", className)} strokeWidth={1.5} aria-hidden="true" />;
}

export function Monogram({ initials, className }: { initials: string; className?: string }) {
  return (
    <span
      className={cn(
        "flex items-center justify-center font-display text-gold-soft/90",
        className,
      )}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}
