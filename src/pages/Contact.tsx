import { useState, type FormEvent } from "react";
import { CheckCircle2, ChevronDown, Clock3, Mail, MapPin, Phone, ShieldCheck, AlertCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Emblem, Eyebrow, GoldRule, MaskLines, Reveal, SectionHeading } from "@/components/ui";
import { contact } from "@/data/site";
import { cn } from "@/utils/cn";
import useSeo from "@/hooks/useSeo";

const categories = [
  "Advocate / Law Firm",
  "Hospital / Doctor",
  "Corporate / Insurance",
  "Individual",
  "Court / Commission",
  "Academic Institution",
];

type Fields = { name: string; phone: string; email: string; category: string; summary: string };
type Errors = Partial<Record<keyof Fields, string>>;

export default function Contact() {
  const [values, setValues] = useState<Fields>({ name: "", phone: "", email: "", category: "", summary: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  useSeo({
    title: "Request Advisory | Dr. Ashish Pathak & Associates Medico-Legal Experts",
    description:
      "Request a confidential case review from India's premier medico-legal and forensic evidence advisory. Offices in Greater Noida and Agra, Uttar Pradesh.",
  });

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (values.name.trim().length < 3) e.name = "Please enter your full name.";
    if (!/^[+\d][\d\s-]{7,15}$/.test(values.phone.trim())) e.phone = "Enter a reachable phone number (10–15 digits).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) e.email = "Enter a valid email address.";
    if (!values.category) e.category = "Select the category that describes you.";
    if (values.summary.trim().length < 30) e.summary = "Please describe the matter in at least 30 characters.";
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Confidential Enquiry"
        title={["Request", "advisory"]}
        image="/images/about/firm-office.jpg"
        alt="Office desk prepared for a confidential case consultation"
        intro="Tell us what the matter turns on. Every enquiry is read for scope and confidentiality before any engagement is discussed. Do not send original documents at this stage."
        meta={[
          { label: "Response", value: "Within 2 Working Days" },
          { label: "Offices", value: "Greater Noida · Agra" },
          { label: "Handling", value: "Need-to-know Only" },
          { label: "Hours", value: contact.hours },
        ]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          {/* ---------------- left: contact information ---------------- */}
          <div>
            <SectionHeading eyebrow="Direct Channels" size="sm" lines={["Speak to", "the desk."]} />

            <ul className="mt-10 space-y-4">
              {contact.phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="group flex items-center gap-4 border border-navy/12 px-5 py-4 transition-all duration-400 hover:border-gold/60 hover:bg-paper"
                  >
                    <Phone className="h-4 w-4 text-gold" strokeWidth={1.7} aria-hidden="true" />
                    <span className="font-display text-[1.05rem] tracking-[0.05em] text-navy">{p}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center gap-4 border border-navy/12 px-5 py-4 transition-all duration-400 hover:border-gold/60 hover:bg-paper"
                >
                  <Mail className="h-4 w-4 text-gold" strokeWidth={1.7} aria-hidden="true" />
                  <span className="break-all text-[0.92rem] tracking-[0.02em] text-navy/85">{contact.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-4 border border-navy/12 px-5 py-4">
                <Clock3 className="h-4 w-4 text-gold" strokeWidth={1.7} aria-hidden="true" />
                <span className="text-[0.86rem] tracking-[0.03em] text-ink/70">{contact.hours}</span>
              </li>
            </ul>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {contact.offices.map((o, i) => (
                <Reveal key={o.kind} delay={i * 110}>
                  <div className="group relative h-full overflow-hidden border border-navy/12 bg-paper p-6">
                    <span className="absolute inset-x-0 top-0 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" aria-hidden="true" />
                    <div className="flex items-center justify-between">
                      <p className="eyebrow text-navy/45">{o.kind}</p>
                      <MapPin className="h-4 w-4 text-gold" strokeWidth={1.7} aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-[1.25rem] uppercase leading-none text-navy">{o.city}</h3>
                    <p className="mt-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-ink/45">{o.state}</p>
                    <p className="mt-4 text-[0.83rem] leading-relaxed text-ink/60">{o.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 border-l-2 border-gold bg-navy p-7 text-white">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-gold" strokeWidth={1.6} aria-hidden="true" />
                <p className="eyebrow text-gold-soft">Confidentiality</p>
              </div>
              <p className="mt-4 text-[0.88rem] leading-[1.8] text-white/65">
                Enquiry details are read only by the assigned advisory member. This website stores no data in a database; the
                form below prepares a summary for the team and does not transmit medical records.
              </p>
              <GoldRule className="mt-6 opacity-70" />
              <p className="mt-5 text-[0.78rem] leading-relaxed text-white/45">
                Submitting an enquiry does not by itself create an advocate-client relationship.
              </p>
            </div>
          </div>

          {/* ---------------- right: case review form ---------------- */}
          <div className="relative">
            <div className="relative border border-navy/12 bg-paper p-7 shadow-[0_40px_90px_-60px_rgba(11,27,61,.55)] sm:p-10 lg:p-12">
              <span className="pointer-events-none absolute -right-16 -top-16 hidden opacity-[0.05] lg:block" aria-hidden="true">
                <Emblem className="h-56 w-56" />
              </span>

              {sent ? (
                <div className="relative animate-fade-up py-6 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-white">
                    <CheckCircle2 className="h-7 w-7 text-gold" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h2 className="mt-8 font-display text-[1.7rem] uppercase leading-tight text-navy lg:text-[2.1rem]">
                    <MaskLines lines={["Enquiry summary", "prepared"]} />
                  </h2>
                  <p className="mx-auto mt-6 max-w-md text-[0.95rem] leading-[1.85] text-ink/70">
                    Thank you, {values.name.split(" ")[0]}. Your enquiry has been structured for the advisory desk against the
                    category <strong className="font-600 text-navy">{values.category}</strong>. For a secure handover of case
                    documents, please call the desk directly — we will agree the scope and the transfer method before any file
                    is reviewed.
                  </p>
                  <div className="mx-auto mt-8 max-w-sm divide-y divide-navy/12 border-y border-navy/12 text-left">
                    {contact.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="flex items-center gap-3 py-3 text-[0.9rem] text-navy transition-colors hover:text-gold">
                        <Phone className="h-4 w-4 text-gold" strokeWidth={1.7} /> {p}
                      </a>
                    ))}
                    <a href={`mailto:${contact.email}`} className="flex items-center gap-3 break-all py-3 text-[0.86rem] text-ink/75 transition-colors hover:text-gold">
                      <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.7} /> {contact.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setValues({ name: "", phone: "", email: "", category: "", summary: "" });
                    }}
                    className="mt-9 inline-flex items-center gap-2 border border-navy/20 px-6 py-3.5 text-[0.66rem] font-600 uppercase tracking-[0.18em] text-navy transition-colors duration-300 hover:border-gold hover:bg-navy hover:text-white"
                  >
                    Prepare Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="relative">
                  <Eyebrow tone="navy">Case Review Form</Eyebrow>
                  <h2 className="mt-5 font-display text-[1.6rem] font-600 uppercase leading-[1.15] text-navy lg:text-[2.05rem]">
                    Brief the desk, precisely.
                  </h2>
                  <p className="mt-4 text-[0.88rem] leading-relaxed text-ink/62">
                    Five fields. The more technically specific the summary, the more useful the first conversation.
                  </p>

                  <div className="mt-10 space-y-7">
                    <Field id="name" label="Full Name" error={errors.name}>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={set("name")}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "err-name" : undefined}
                        placeholder="Adv. / Dr. / Mr. / Ms."
                        className={inputCls(!!errors.name)}
                      />
                    </Field>

                    <div className="grid gap-7 sm:grid-cols-2">
                      <Field id="phone" label="Phone" error={errors.phone}>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={values.phone}
                          onChange={set("phone")}
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? "err-phone" : undefined}
                          placeholder="+91 "
                          className={inputCls(!!errors.phone)}
                        />
                      </Field>
                      <Field id="email" label="Email" error={errors.email}>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={values.email}
                          onChange={set("email")}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "err-email" : undefined}
                          placeholder="name@chambers.in"
                          className={inputCls(!!errors.email)}
                        />
                      </Field>
                    </div>

                    <Field id="category" label="Client Category" error={errors.category}>
                      <div className="relative">
                        <select
                          id="category"
                          name="category"
                          value={values.category}
                          onChange={set("category")}
                          aria-invalid={!!errors.category}
                          aria-describedby={errors.category ? "err-category" : undefined}
                          className={cn(inputCls(!!errors.category), "appearance-none pr-11", !values.category && "text-ink/40")}
                        >
                          <option value="">Select category…</option>
                          {categories.map((c) => (
                            <option key={c} value={c} className="text-navy">
                              {c}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/55"
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </div>
                    </Field>

                    <Field id="summary" label="Brief Case Summary" error={errors.summary} hint={`${values.summary.trim().length}/30 min.`}>
                      <textarea
                        id="summary"
                        name="summary"
                        rows={6}
                        value={values.summary}
                        onChange={set("summary")}
                        aria-invalid={!!errors.summary}
                        aria-describedby={errors.summary ? "err-summary" : "hint-summary"}
                        placeholder="Forum, stage of matter, medical documents available, and the technical question you need answered."
                        className={cn(inputCls(!!errors.summary), "h-auto resize-y py-3.5 leading-relaxed")}
                      />
                    </Field>
                  </div>

                  <p id="hint-summary" className="mt-6 flex items-start gap-2 text-[0.75rem] leading-relaxed text-ink/50">
                    <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={1.7} aria-hidden="true" />
                    No database or document upload is used by this site. Do not enter patient identifiers, medical record numbers
                    or confidential documents in the form.
                  </p>

                  <button
                    type="submit"
                    className="group relative mt-9 flex w-full items-center justify-center gap-3 overflow-hidden bg-navy px-8 py-5 text-[0.7rem] font-600 uppercase tracking-[0.2em] text-white transition-colors duration-400 hover:bg-gold hover:text-navy"
                  >
                    <span className="relative z-10">Submit Case Review Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "w-full border bg-white px-4 py-3.5 text-[0.92rem] text-navy outline-none transition-all duration-300 placeholder:text-ink/32",
    hasError ? "border-red-500/70 focus:border-red-500" : "border-navy/18 hover:border-navy/35 focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,175,55,.16)]",
  );
}

function Field({
  id,
  label,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="eyebrow text-navy/65">
          {label}
        </label>
        {hint ? <span className="text-[0.62rem] uppercase tracking-[0.12em] text-ink/38">{hint}</span> : null}
      </div>
      <div className="mt-2.5">{children}</div>
      {error ? (
        <p id={`err-${id}`} role="alert" className="mt-2 flex items-center gap-2 text-[0.74rem] text-red-600">
          <AlertCircle className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" /> {error}
        </p>
      ) : null}
    </div>
  );
}
