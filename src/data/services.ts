export type ServiceItem = {
  title: string;
  description: string;
};

export type ServiceCategory = {
  slug: string;
  nav: string;
  title: string;
  audience: string;
  kicker: string;
  hero: string;
  intro: string;
  image: string;
  problem: { heading: string; body: string; points: string[] };
  analysis: string[];
  approach: { step: string; title: string; body: string }[];
  helps: string[];
  services: ServiceItem[];
};

/** Service catalogue — local static content only. */
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "law-firms",
    nav: "For Law Firms",
    title: "Law Firms & Advocates",
    audience: "For Advocates, Chambers & Litigation Teams",
    kicker: "01 / Advisory Category",
    hero: "Turn the medical file into an argument the bench can follow.",
    intro:
      "Medical allegations decide outcomes long before a judge reads the injury. We read the records first, isolate what the science actually supports, and hand counsel an analysis that can be pleaded, examined and defended.",
    image: "/images/insights/insight-courtroom.jpg",
    problem: {
      heading: "Where matters stall",
      body: "Pleadings frequently rely on a medical document nobody has interrogated — an injury opinion that repeats the FIR, a disability certificate unsupported by examination, a toxicology report read wider than its methods allow.",
      points: [
        "Injury description and weapon account do not reconcile",
        "Disability percentage asserted without a documented measurement",
        "Toxicology findings generalised beyond the test performed",
        "Treatment gaps used to allege fabrication without biomechanical testing",
        "Expert questions framed too late, or in the wrong language",
      ],
    },
    analysis: [
      "Injury mechanics and pattern interpretation",
      "Medical record chronology and authenticity testing",
      "Disability and loss-of-function verification",
      "Toxicology and post-mortem report limitation review",
      "Cross-examination framing on medical issues",
    ],
    approach: [
      {
        step: "A",
        title: "File intake under privilege",
        body: "Records are received against a defined scope, logged and handled only by the assigned advisory team.",
      },
      { step: "B", title: "Independent scientific reading", body: "We read the medical material before the argument, so conclusions are not reverse-engineered from the pleading.", },
      { step: "C", title: "Written advisory note", body: "Findings are issued as a structured note with the reasoning, references and limitations stated openly." },
      { step: "D", title: "Pre-hearing preparation", body: "Suggested questions, anticipated medical counter-positions and terminology simplification for the bench." },
    ],
    helps: [
      "Trial and appellate advocates",
      "Chambers handling injury, poisoning or death matters",
      "Matrimonial counsel facing medical allegations",
      "Legal teams preparing expert examination",
    ],
    services: [
      {
        title: "Forensic Injury Mechanics",
        description:
          "Interpretation of injury pattern, severity and weapon consistency against the clinical and medicolegal record.",
      },
      {
        title: "MACT Disability Assessment",
        description:
          "Verification of disability percentage, loss-of-function findings and certification consistency for claims proceedings.",
      },
      {
        title: "Expert Cross-Examination Briefs",
        description:
          "Structured medical question sets and issue maps built for examining an expert or a treating witness.",
      },
      {
        title: "Matrimonial Medical Deconstruction",
        description:
          "Testing asserted medical conditions, treatments and allegations against the documents produced in support.",
      },
    ],
  },
  {
    slug: "hospitals",
    nav: "For Hospitals",
    title: "Hospitals & Healthcare",
    audience: "For Hospitals, Clinics, Nursing Homes & Practitioners",
    kicker: "02 / Advisory Category",
    hero: "Defensible records, trained staff, documented protocol.",
    intro:
      "Most medicolegal exposure in healthcare is created in documentation, not in the operation theatre. We audit where the record is vulnerable, design the protocol that closes it, and prepare the defence narrative when a complaint is already on file.",
    image: "/images/services/hospital-defense.jpg",
    problem: {
      heading: "Where institutions are exposed",
      body: "A defensible clinical decision can still lose if the chart is silent, the consent is generic, the MLC was never escalated, or the emergency register contradicts the nursing notes.",
      points: [
        "Incomplete or retrospectively edited case records",
        "Emergency department MLC escalation not followed",
        "Consent, counselling and discharge instruction gaps",
        "Staff unfamiliar with statutory reporting duties",
        "Allegations of negligence answered without a clinical rebuttal",
      ],
    },
    analysis: [
      "Case record and nursing chart completeness",
      "Consent, counselling and disclosure documentation",
      "Emergency triage and MLC escalation trail",
      "Treatment timeline against standard of care",
      "Adverse event and incident reporting structure",
    ],
    approach: [
      { step: "A", title: "Medicolegal audit", body: "A sample of files across departments is scored against documentation and reporting requirements." },
      { step: "B", title: "Vulnerability mapping", body: "Findings are ranked by exposure — what a complainant would raise first, and what the record cannot answer." },
      { step: "C", title: "Protocol & SOP drafting", body: "Department-specific SOPs for MLC, consent, evidence handling and escalation, written for real shift conditions." },
      { step: "D", title: "Training and refresh", body: "Sessions for medical, nursing and paramedical staff, with review cycles agreed at set intervals." },
    ],
    helps: [
      "Hospitals and nursing homes",
      "Individual practitioners and surgeons",
      "Diagnostic and radiology centres",
      "Hospital administration and risk committees",
    ],
    services: [
      {
        title: "Hospital Medico-Legal Audits",
        description:
          "Structured review of records, consent practice and statutory reporting across departments, with a prioritised finding list.",
      },
      {
        title: "Medical Negligence Defence Advisory",
        description:
          "Clinical analysis of the allegation, standard-of-care reasoning and a written defence-ready evaluation of the file.",
      },
      {
        title: "Emergency MLC Protocol & SOPs",
        description:
          "Drafting and implementation support for medicolegal case handling at emergency intake, evidence custody and escalation.",
      },
      {
        title: "Staff Training & SOPs",
        description:
          "Practical sessions for doctors, nurses and paramedical staff on documentation, consent and medicolegal duties.",
      },
      {
        title: "Expert Opinion Reports",
        description:
          "Signed technical opinion on clinical questions referred by institution, counsel or insurer.",
      },
    ],
  },
  {
    slug: "colleges",
    nav: "For Colleges",
    title: "Law, Medical, Paramedical & Nursing Colleges",
    audience: "For Academic Institutions & Student Bodies",
    kicker: "03 / Advisory Category",
    hero: "Where forensic method meets the classroom.",
    intro:
      "Students rarely leave college able to read a real medicolegal file. The firm runs workshops and documentation training that place actual record structure, injury interpretation and report-writing discipline in front of future practitioners.",
    image: "/images/methodology/clinical-examination.jpg",
    problem: {
      heading: "The gap in the syllabus",
      body: "Curricula teach the theory of forensic medicine and legal procedure separately. The working overlap — how a clinical note becomes evidence — is usually learned on the job, under pressure.",
      points: [
        "Students unfamiliar with real MLC documentation standards",
        "Clinical writing taught without evidentiary consequence",
        "Limited exposure to injury interpretation practice",
        "Minimal cross-disciplinary contact between law and medical cohorts",
      ],
    },
    analysis: [
      "Record formats used in medicolegal practice",
      "Injury description language and its legal reading",
      "Consent, disclosure and ethical documentation",
      "Report structure, opinion writing and limitation statements",
    ],
    approach: [
      { step: "A", title: "Curriculum mapping", body: "Sessions are designed against the department's syllabus so the workshop reinforces examined content." },
      { step: "B", title: "Case-file simulation", body: "Students read anonymised record sets and identify what the documentation can and cannot support." },
      { step: "C", title: "Faculty interaction", body: "Interactive session for teaching staff on documentation standards and assessment design." },
    ],
    helps: [
      "Law colleges and bar school cohorts",
      "Medical colleges and forensic departments",
      "Paramedical and nursing programmes",
      "Institutional IQAC and skill cells",
    ],
    services: [
      {
        title: "Medico-Legal Workshops",
        description:
          "Half-day and full-day sessions on injury interpretation, MLC handling and evidence-aware clinical reasoning.",
      },
      {
        title: "Clinical Documentation Training",
        description:
          "Practical training on case records, consent, discharge summaries and report writing for clinical and nursing students.",
      },
    ],
  },
  {
    slug: "corporates",
    nav: "For Corporates",
    title: "Corporates, Insurers & TPA",
    audience: "For Insurers, TPAs, Corporates & Claims Teams",
    kicker: "04 / Advisory Category",
    hero: "Clinical verification behind every rupee of the claim.",
    intro:
      "Medical claims and compensation decisions are only as good as the clinical record underneath them. We provide the technical audit that tells a claims team whether the documents support the amount being sought or already paid.",
    image: "/images/services/toxicology.jpg",
    problem: {
      heading: "Where leakage and dispute begin",
      body: "Claim files routinely carry a diagnosis that the treatment record does not support, a disability rating without measurement, or an injury history inconsistent with the alleged event.",
      points: [
        "Medical documents submitted without supporting investigation",
        "Disability or loss-of-function claims unsupported by examination",
        "Injury mechanics inconsistent with the reported incident",
        "Workmen compensation assessments not clinically verified",
      ],
    },
    analysis: [
      "Diagnosis versus submitted investigation",
      "Treatment necessity and reasonable-cost benchmarking",
      "Disability percentage and functional-loss verification",
      "Incident narrative versus injury pattern",
      "Record authenticity and timeline testing",
    ],
    approach: [
      { step: "A", title: "Claim file review", body: "Every submitted medical document is read against the claim's stated facts and dates." },
      { step: "B", title: "Technical opinion", body: "A written clinical opinion on what the file supports, and where it does not." },
      { step: "C", title: "Dispute support", body: "Reasoned rebuttal material for repudiation, arbitration, consumer or ombudsman proceedings." },
    ],
    helps: [
      "Health and motor insurers",
      "Third Party Administrators",
      "Corporate HR, EHS and insurance cells",
      "Loss assessors and claim review teams",
    ],
    services: [
      {
        title: "Insurance Claim Fraud Audits",
        description:
          "Clinical and documentary audit of submitted claims to identify unsupported diagnosis, inflated treatment or fabricated injury.",
      },
      {
        title: "Workmen Compensation Verification",
        description:
          "Verification of injury causation, disability degree and functional limitation for employer compensation decisions.",
      },
    ],
  },
  {
    slug: "judiciary",
    nav: "For Judiciary",
    title: "Judiciary & Commissions",
    audience: "For Courts, Tribunals & Commissions",
    kicker: "05 / Advisory Category",
    hero: "An independent scientific reading, without a party line.",
    intro:
      "When a bench needs the medical question answered objectively, the firm provides court-appointed style expert opinion and independent trauma audit — reasoning shown, limitations disclosed, and no advocacy attached.",
    image: "/images/services/forensic-injury.jpg",
    problem: {
      heading: "The problem the bench faces",
      body: "Medical evidence reaches court through party-commissioned reports. Each is internally consistent and mutually contradictory, leaving the court to decide a scientific question on advocacy material.",
      points: [
        "Conflicting expert opinions with no independent technical reading",
        "Autopsy and toxicology findings reported beyond their method",
        "Allegations of custodial or state-agent injury requiring independent assessment",
        "Commission inquiries needing documented clinical review",
      ],
    },
    analysis: [
      "Autopsy, post-mortem and clinical record reading",
      "Injury age, mechanism and severity assessment",
      "Toxicology interpretation with stated limitations",
      "Custodial and alleged trauma audit against record and examination",
    ],
    approach: [
      { step: "A", title: "Terms of reference", body: "Scope is confirmed in writing so the opinion answers precisely what is referred." },
      { step: "B", title: "Independent examination", body: "Where directed, personal clinical examination is conducted and documented." },
      { step: "C", title: "Report to the bench", body: "Findings are issued with methodology, references and explicit limitations on what cannot be concluded." },
    ],
    helps: [
      "High Courts, district courts and tribunals",
      "Motor Accident and Consumer Commissions",
      "Human Rights and State Commissions",
      "Court-constituted inquiry committees",
    ],
    services: [
      {
        title: "Independent Court-Appointed Expert Opinion",
        description:
          "Objective technical opinion on referred medical questions, prepared for the bench rather than for a party.",
      },
      {
        title: "Human Rights & Custodial Trauma Audits",
        description:
          "Independent clinical and documentary assessment of alleged injury in custody or state-agent matters.",
      },
    ],
  },
];

export const getService = (slug?: string) =>
  serviceCategories.find((c) => c.slug === slug) ?? serviceCategories[0];
