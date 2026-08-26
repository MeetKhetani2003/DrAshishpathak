/**
 * All site content is stored locally in this project.
 * No database, CMS or remote content source is used anywhere.
 */

export const brand = {
  firm: "Dr. Ashish Pathak & Associates",
  brandName: "Medico-Legal Experts",
  tagline: "Justice. Science. Truth.",
  positioning: "India's premier medico-legal and forensic evidence advisory.",
  core: "Bridging the scientific gap between clinical healthcare and judicial courts.",
  domain: "medicolegalexperts.in",
} as const;

export const contact = {
  phones: ["+91 90270 62686", "+91 82738 20488"],
  email: "dr.pathakassociates@gmail.com",
  hours: "Mon – Sat · 10:00 – 19:00 IST",
  offices: [
    {
      kind: "Corporate Office",
      city: "Greater Noida",
      state: "Uttar Pradesh",
      note: "Advisory desk, document review and confidential case conferences.",
    },
    {
      kind: "Regional Office",
      city: "Agra",
      state: "Uttar Pradesh",
      note: "Client meetings, clinical examination coordination and filings support.",
    },
  ],
} as const;

export const nav = [
  { label: "About", to: "/about" },
  { label: "Expert Board", to: "/expert-board" },
  { label: "Services", to: "/services" },
  { label: "Methodology", to: "/methodology" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
] as const;

export const trustBar = [
  {
    title: "MSME Registered Enterprise",
    meta: "Registered small enterprise",
    icon: "badge",
  },
  {
    title: "ISO 9001:2015 Quality Certified",
    meta: "Documented quality process",
    icon: "check-shield",
  },
  {
    title: "100% Confidentiality & Data Protection",
    meta: "Case files handled under privilege protocols",
    icon: "lock",
  },
  {
    title: "Technical Advisory Compliant with BNS & BSA",
    meta: "Aligned to the current criminal justice framework",
    icon: "scales",
  },
] as const;

export const bridge = [
  {
    step: "01",
    label: "Medical Science",
    detail: "Clinical findings, trauma mechanics, treatment records and published medical literature.",
  },
  {
    step: "02",
    label: "Forensic Analysis",
    detail: "Injury pattern interpretation, toxicology audit, documentation consistency testing.",
  },
  {
    step: "03",
    label: "Legal Interpretation",
    detail: "Mapping scientific findings onto statutory provisions, charges and standards of proof.",
  },
  {
    step: "04",
    label: "Court-Ready Clarity",
    detail: "Structured opinions and briefs a bench, advocate or tribunal can apply directly.",
  },
] as const;

export const practiceAreas = [
  {
    id: "advocates-courts",
    number: "01",
    title: "Advocates & Courts",
    image: "/images/insights/insight-courtroom.jpg",
    description:
      "Independent scientific reading of medical evidence for counsel and the bench — injury mechanics, record authenticity and expert cross-examination briefs.",
    to: "/services/law-firms",
  },
  {
    id: "toxicology",
    number: "02",
    title: "Clinical & Forensic Toxicology",
    image: "/images/services/toxicology.jpg",
    description:
      "Audit of poisoning, substance and drug-related evidence: sample chain, report limitations, dose interpretation and alternative explanations.",
    to: "/services/law-firms",
  },
  {
    id: "hospital-defense",
    number: "03",
    title: "Hospital & Practitioner Defense",
    image: "/images/services/hospital-defense.jpg",
    description:
      "Medico-legal audits, negligence defence advisory, emergency MLC protocol design and staff training for healthcare institutions.",
    to: "/services/hospitals",
  },
  {
    id: "orthopedic-mact",
    number: "04",
    title: "Orthopedic & MACT Disability",
    image: "/images/services/mact.jpg",
    description:
      "Trauma biomechanics, disability percentage evaluation and consistency review between clinical examination and certificate claims.",
    to: "/services/law-firms",
  },
] as const;

export const whoWeServe = [
  {
    id: "law",
    title: "Law Firms & Advocates",
    icon: "scales",
    line: "Evidence reading, expert briefs and independent opinion that survives cross-examination.",
    to: "/services/law-firms",
  },
  {
    id: "hospitals",
    title: "Hospitals & Healthcare",
    icon: "hospital",
    line: "Medico-legal audits, defence advisory, MLC protocol and documentation governance.",
    to: "/services/hospitals",
  },
  {
    id: "colleges",
    title: "Law, Medical & Nursing Colleges",
    icon: "cap",
    line: "Workshops and training that place forensic method in front of future practitioners.",
    to: "/services/colleges",
  },
  {
    id: "corporate",
    title: "Corporates, Insurers & TPA",
    icon: "building",
    line: "Claim fraud audit and compensation verification grounded in clinical records.",
    to: "/services/corporates",
  },
  {
    id: "judiciary",
    title: "Judiciary & Commissions",
    icon: "landmark",
    line: "Court-appointed expert opinion and independent trauma audit for commissions.",
    to: "/services/judiciary",
  },
] as const;

export const principles = [
  {
    number: "01",
    title: "Court-Ready Analysis",
    body: "Every opinion is scientifically backed, referenced and structured against the relevant legal framework — written to be read aloud in court.",
  },
  {
    number: "02",
    title: "Dual Clinical + Legal Acumen",
    body: "Orthopaedic and forensic medicine understanding held together with legal procedure, evidentiary standards and courtroom discipline.",
  },
  {
    number: "03",
    title: "Absolute Confidentiality",
    body: "Case files, medical records and client communication are handled on a need-to-know basis and never used for marketing.",
  },
] as const;

export const methodology = [
  {
    step: "01",
    title: "Desk Review",
    image: "/images/methodology/document-review.jpg",
    points: [
      "Medical records & case papers",
      "Medico-Legal Cases (MLC)",
      "X-rays, imaging & radiology reports",
      "ICU, OT and anaesthesia charts",
      "Post-mortem & autopsy reports",
    ],
  },
  {
    step: "02",
    title: "Scientific Analysis",
    image: "/images/services/forensic-injury.jpg",
    points: [
      "Injury pattern versus weapon mechanics",
      "Temporal consistency of records",
      "Toxicology report limitation testing",
      "Disability percentage verification",
    ],
  },
  {
    step: "03",
    title: "Direct Clinical Examination",
    image: "/images/methodology/clinical-examination.jpg",
    points: [
      "Personal clinical examination of the subject",
      "Biomechanical and range-of-motion assessment",
      "Correlation with imaging and treatment history",
    ],
  },
  {
    step: "04",
    title: "Scientific Opinion",
    image: "/images/about/firm-office.jpg",
    points: [
      "Written expert opinion with reasoning shown",
      "Plain-language conclusions for the bench",
      "Support for testimony and cross-examination",
    ],
  },
] as const;

export const footerColumns = [
  {
    heading: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Expert Board", to: "/expert-board" },
      { label: "Methodology", to: "/methodology" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Law Firms", to: "/services/law-firms" },
      { label: "Hospitals", to: "/services/hospitals" },
      { label: "Colleges", to: "/services/colleges" },
      { label: "Corporate", to: "/services/corporates" },
      { label: "Judiciary", to: "/services/judiciary" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Insights", to: "/insights" },
      { label: "Disclaimer", to: "/disclaimer" },
      { label: "Privacy Policy", to: "/privacy-policy" },
    ],
  },
] as const;

export const founder = {
  name: "Dr. Ashish Pathak",
  role: "Lawyer & Forensic Medico-Legal Expert",
  label: "Chief Consultant",
  image: "/images/founder/dr-ashish-pathak.jpg",
  experience: "18+",
  experienceScope: ["Clinical", "Orthopedic", "Forensic", "Legal"],
  credentials: [
    "MD (A.MED.)",
    "CFMT",
    "BPT (UK)",
    "MPT (Ortho)",
    "MIAP",
    "CMT",
    "LLB",
    "CMLC — Medico-Legal",
    "CCFT — Forensic Toxicology",
  ],
  expertise: ["Trauma Biomechanics", "Toxicology Audit", "Medical Negligence Defense"],
  summary:
    "Dr. Ashish Pathak trained and practised through orthopaedic and clinical medicine before moving into forensic and medico-legal advisory work. That combination — a clinician's reading of an injury and a lawyer's reading of a record — defines how the firm handles every file that reaches it.",
} as const;
