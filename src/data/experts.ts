export type Expert = {
  id: string;
  name: string;
  role: string;
  experience: string;
  initials: string;
  qualifications: string[];
  jurisdiction: string;
  practiceAreas: string[];
  bio: string[];
  image?: string;
};

/**
 * Content is limited strictly to the details published by the firm.
 * No invented credentials, awards or case results.
 */
export const experts: Expert[] = [
  {
    id: "dr-ashish-pathak",
    name: "Dr. Ashish Pathak",
    role: "Chief Consultant · Lawyer & Forensic Medico-Legal Expert",
    experience: "18+ Years",
    initials: "AP",
    qualifications: [
      "MD (A.MED.)",
      "CFMT",
      "BPT (UK)",
      "MPT (Ortho)",
      "MIAP",
      "CMT",
      "LLB",
      "CMLC (Medico-Legal)",
      "CCFT (Forensic Toxicology)",
    ],
    jurisdiction: "Uttar Pradesh · Greater Noida & Agra",
    practiceAreas: [
      "Trauma Biomechanics",
      "Toxicology Audit",
      "Medical Negligence Defence",
      "MACT Disability Assessment",
      "Expert Opinion Reports",
    ],
    image: "/images/founder/dr-ashish-pathak.jpg",
    bio: [
      "Dr. Ashish Pathak leads the firm's medico-legal and forensic advisory practice. His background spans orthopaedic clinical practice, forensic medicine and legal procedure, which allows the firm to read a case file simultaneously as a clinician and as counsel.",
      "He handles desk review of medical records, MLC files, imaging and post-mortem documentation, followed by direct clinical examination where the matter requires it. His advisory work covers injury mechanics interpretation, toxicology report audit, hospital and practitioner defence support, and disability assessment before the Motor Accident Claims Tribunal.",
      "He also heads the firm's documentation and training initiatives for healthcare institutions and for law, medical, paramedical and nursing colleges.",
    ],
  },
  {
    id: "adv-ganga-narayan-pathak",
    name: "Adv. Ganga Narayan Pathak",
    role: "Senior Advocate · Founding Counsel",
    experience: "45+ Years",
    initials: "GP",
    qualifications: ["Advocate", "Long standing civil and criminal practice"],
    jurisdiction: "Uttar Pradesh",
    practiceAreas: ["Criminal Litigation", "Civil Disputes", "Medico-Legal Strategy", "Appellate Practice"],
    bio: [
      "With more than four decades at the Bar, Adv. Ganga Narayan Pathak anchors the firm's legal strategy. He reviews the way a medical opinion will be deployed at each procedural stage — from framing of charge through evidence, cross-examination and appeal.",
      "His counsel is sought where a dispute turns on whether technical medical material has been presented in a form the court can actually apply.",
    ],
  },
  {
    id: "adv-smt-pramila-pathak",
    name: "Adv. Smt. Pramila Pathak",
    role: "Advocate · Matrimonial & Civil Counsel",
    experience: "30+ Years",
    initials: "PP",
    qualifications: ["Advocate", "Three decades of court practice"],
    jurisdiction: "Uttar Pradesh",
    practiceAreas: ["Matrimonial Matters", "Civil Disputes", "Medical Evidence Deconstruction", "Family Adjudication"],
    bio: [
      "Adv. Smt. Pramila Pathak brings thirty years of litigation experience, with particular depth in matrimonial and civil matters where medical and clinical assertions are used as leverage.",
      "She works with the advisory team on deconstructing medical allegations — verifying whether asserted conditions, treatments and disability claims are supported by the underlying records.",
    ],
  },
  {
    id: "adv-dr-arun-mishra",
    name: "Adv. Dr. Arun Mishra",
    role: "Senior Medico-Legal Consultant",
    experience: "Clinical & Forensic Advisory",
    initials: "AM",
    qualifications: ["Advocate", "Medical practitioner", "Medico-legal consultancy"],
    jurisdiction: "Uttar Pradesh · Pan-India advisory",
    practiceAreas: [
      "Negligence Analysis",
      "Standard-of-Care Review",
      "Hospital Documentation Audit",
      "Expert Opinion Reports",
    ],
    bio: [
      "Adv. Dr. Arun Mishra operates at the intersection of clinical practice and legal interpretation. He reviews standard-of-care questions, treatment timelines and hospital documentation, and identifies where the record is silent, inconsistent or scientifically unsupported.",
      "His advisory is used both defensively, for hospitals and practitioners, and supportively, for counsel building a negligence or compensation claim.",
    ],
  },
  {
    id: "adv-vivek-parashar",
    name: "Adv. Vivek Parashar",
    role: "Advocate · Claims & Documentation",
    experience: "23+ Years",
    initials: "VP",
    qualifications: ["Advocate", "Claims and documentation practice"],
    jurisdiction: "Uttar Pradesh",
    practiceAreas: ["MACT Proceedings", "Insurance Claims", "Documentation Review", "Compensation Assessment"],
    bio: [
      "Adv. Vivek Parashar handles the procedural side of claims litigation — petition drafting, documentation review and coordination of disability certification with the medical analysis prepared by the firm.",
      "His work keeps the medical opinion and the pleading aligned, which is where most claims disputes are won or lost.",
    ],
  },
];
