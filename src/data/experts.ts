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
      "CFMT - Forensic medicine and Toxicology",
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
    image: "/images/experts/Dr. Ashish Pathak.jpeg",
    bio: [
      "Dr. Ashish Pathak trained and practised through orthopedic injuries, joints biomechanics and rehabilitation before moving into forensic and medico-legal advisory work. That combination — a clinician's reading of an injury and a lawyer's reading of a record — defines how the firm handles every file that reaches it.",
      "He handles desk review of medical records, MLC files, imaging and post-mortem documentation, followed by direct clinical examination where the matter requires it. His advisory work covers injury mechanics interpretation, toxicology report audit, hospital and practitioner defence support, and disability assessment before the Motor Accident Claims Tribunal.",
      "He also heads the firm's documentation and training initiatives for healthcare institutions and for law, medical, paramedical and nursing colleges.",
    ],
  },
  {
    id: "adv-ganga-narayan-pathak",
    name: "Adv. Ganga Narayan Pathak",
    role: "Senior Panel Advocate | Revenue, Administrative & Trial Litigation Specialist",
    experience: "45+ Years",
    initials: "GP",
    qualifications: ["B.Sc.", "B.Ed.", "LL.B."],
    jurisdiction: "Commissionerate Court, Agra | District & Sessions Court, Agra | UP Courts",
    practiceAreas: [
      "Revenue Law & Land Titles",
      "Administrative Court Appeals",
      "Arms Licensing Advisory",
      "Civil Disputes & Criminal Trials"
    ],
    image: "/images/experts/Adv. Ganga Narayan Pathak.jpeg",
    bio: [
      "Adv. Ganga Narayan Pathak is a stalwart of the legal fraternity with over 45 years of distinguished courtroom experience spanning the Commissionerate Court, Revenue Tribunals, and the District & Sessions Court, Agra. A revered leader in the legal community, he has served three terms as President of the Commissioner’s Court Bar Association, Agra, reflecting his exceptional standing, integrity, and authoritative mastery over administrative and revenue jurisprudence.",
      "Adv. Pathak specializes in complex land/property title disputes, revenue appeals, statutory arms licensing proceedings, and trial litigation. As a Senior Panel Advocate with Dr. Ashish Pathak & Associates, he provides strategic legal counsel, seamlessly integrating extensive trial advocacy with the firm’s specialized medico-legal and forensic analysis to deliver robust legal representation before administrative and judicial forums.",
    ],
  },
  {
    id: "adv-smt-pramila-pathak",
    name: "Adv. Smt. Pramila Pathak",
    role: "Senior Panel Advocate | Revenue, Civil & Criminal Litigation Advisor",
    experience: "30+ Years",
    initials: "PP",
    qualifications: ["B.A.", "M.A.", "LL.B."],
    jurisdiction: "Commissionerate Court, Agra | District & Sessions Court, Agra | UP Courts",
    practiceAreas: [
      "Revenue Law & Land Titles",
      "Administrative Court Appeals",
      "Arms Licensing Advisory",
      "Civil, Matrimonial & Criminal Trials"
    ],
    image: "/images/experts/Adv. Smt. Pramila Pathak.jpeg",
    bio: [
      "Adv. Smt. Pramila Pathak brings over 30 years of distinguished legal experience across the Commissionerate Court, Revenue Tribunals, and the District & Sessions Court, Agra. Renowned for her strategic acumen and deep courtroom expertise, she specializes in complex land/property disputes, administrative revenue appeals, arms licensing proceedings, and trial litigation across civil and criminal jurisdictions.",
      "As a Senior Panel Advocate with Dr. Ashish Pathak & Associates, Smt. Pathak provides strategic legal counsel, integrating documentary analysis and trial strategy with the firm's advanced medico-legal and forensic insights to deliver comprehensive legal defense before administrative and judicial courts.",
    ],
  },
  {
    id: "adv-dr-arun-mishra",
    name: "Adv. Dr. Arun Mishra",
    role: "Senior Medico-Legal Consultant & Judicial Evidence Strategist",
    experience: "Clinical & Forensic",
    initials: "AM",
    qualifications: [
      "LL.M. (Criminal Law)",
      "M.D. & D.Pharma",
      "Ph.D. & M.A. in Philosophy",
      "M.A. in Psychology",
      "B.Sc. in Microbiology",
      "Diploma in Yoga"
    ],
    jurisdiction: "Supreme Court of India & High Courts",
    practiceAreas: [
      "Criminal Jurisprudence",
      "Evidential Forensics",
      "Medical Negligence Assessment",
      "Forensic Behavioral Analysis"
    ],
    image: "/images/experts/Adv. Dr. Arun Mishra.jpeg",
    bio: [
      "Adv. Dr. Arun Mishra is a distinguished Senior Medico-Legal Consultant and practicing Advocate before the Supreme Court of India and various High Courts. With a rare and formidable convergence of Clinical Sciences, Criminal Jurisprudence, Philosophy, Pharmacology, and Behavioral Psychology, Dr. Mishra serves as a cornerstone of the firm’s Multi-Disciplinary Allied Expert Panel.",
      "His multi-decade interdisciplinary background enables him to deconstruct complex medical litigations, formulate strategic cross-examinations, and deliver forensic-legal defense briefs for medical practitioners, healthcare institutions, and statutory tribunals.",
    ],
  },
  {
    id: "adv-vivek-parashar",
    name: "Adv. Vivek Parashar",
    role: "Senior Panel Advocate | Trial Litigation & Strategic Advisory",
    experience: "24+ Years",
    initials: "VP",
    qualifications: ["B.A.", "MBA", "LL.B."],
    jurisdiction: "District & Sessions Court, Agra & Uttar Pradesh Judicial Forums",
    practiceAreas: [
      "Criminal Defense & Trials",
      "Accident & Injury Claims (MACT)",
      "Civil & Commercial Litigation",
      "Matrimonial & Family Disputes",
      "Medical & Healthcare Defense"
    ],
    image: "/images/experts/Adv. Vivek Parashar.jpeg",
    bio: [
      "Adv. Vivek Parashar brings over 24 years of proven courtroom experience across the District & Sessions Courts. Combining a strong business management acumen (MBA) with seasoned legal expertise (LL.B.), he delivers sharp strategic drafting, aggressive trial advocacy, and result-oriented litigation management.",
      "As a Senior Panel Advocate with Dr. Ashish Pathak & Associates, Adv. Parashar bridges complex courtroom proceedings with the firm's scientific medico-legal and forensic analysis, ensuring robust evidence presentation and effective cross-examination strategies in civil, criminal, and compensation cases.",
    ],
  },
  {
    id: "dr-shalini-sharma",
    name: "Dr. Shalini Sharma",
    role: "Senior Consultant – Pediatrician & Neonatologist",
    experience: "15+ Years",
    initials: "SS",
    qualifications: ["MBBS", "DCH"],
    jurisdiction: "Clinical Practice",
    practiceAreas: [
      "Neonatal Intensive Care (NICU)",
      "Child Growth & Developmental Assessment",
      "Pediatric Acute Care",
      "Preventive Child Health"
    ],
    image: "/images/experts/Dr. Shalini Sharma.jpeg",
    bio: [
      "Dr. Shalini Sharma is an experienced Pediatrician and Child Health Specialist with over 15 years of dedicated clinical practice in neonatal care, infant health management, and general pediatrics. She specializes in the treatment, management, and early developmental monitoring of newborns, infants, and young children.",
    ],
  },
  {
    id: "dr-neeraj-sharma",
    name: "Dr. Neeraj Sharma",
    role: "Senior Consultant – Critical Care, Intensivist & Emergency Care Specialist",
    experience: "15+ Years",
    initials: "NS",
    qualifications: ["MBBS", "DCH", "CTCCM", "FICCM"],
    jurisdiction: "Clinical Practice",
    practiceAreas: [
      "Adult & Pediatric Critical Care (ICU / NICU)",
      "Emergency & Trauma Stabilization",
      "Sepsis & Shock Management",
      "Interventional Critical Care"
    ],
    image: "/images/experts/Dr. Neeraj Sharma.jpeg",
    bio: [
      "Dr. Neeraj Sharma is a Senior Intensivist and Critical Care Specialist with over 15 years of extensive clinical experience across Adult Intensive Care (ICU), Neonatal Intensive Care (NICU), and Emergency Trauma stabilization. His clinical practice centers on advanced hemodynamic monitoring, multi-organ failure management, and acute emergency care.",
    ],
  }
];
