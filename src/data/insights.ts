export type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  image: string;
  kind: "Concept Note" | "Practice Brief" | "Documentation Guide";
  body: string[];
  takeaways: string[];
};

/**
 * Knowledge Hub content: practitioner concept notes and frameworks.
 * These are explanatory notes, not news reports or case outcomes.
 */
export const insights: Insight[] = [
  {
    slug: "injury-pattern-versus-weapon",
    category: "Forensic",
    kind: "Concept Note",
    title: "Injury Pattern and the Weapon Account: Reading Them in the Same Sentence",
    excerpt:
      "A medicolegal file usually carries two descriptions of the same event — the clinician's and the informant's. Conflict between them is rarely the whole story, but it is almost always where the analysis should start.",
    date: "14 January 2026",
    readingTime: "6 min read",
    image: "/images/services/forensic-injury.jpg",
    body: [
      "The injury chart records what was found: site, size, edge character, bleeding, depth and the structures involved. The weapon account records what is alleged to have caused it. Neither document is written to be read against the other, and that is precisely where analysis begins.",
      "A pattern review asks a narrow set of questions. Do the number and distribution of injuries match the described assault? Is a wound described as incised consistent with the edge characteristics recorded? Does the depth of injury correspond to the instrument's plausible length? Do defensive injuries appear where biomechanics predicts them?",
      "Two cautions matter. First, absence of an expected finding is weaker evidence than its presence — soft tissue response varies with anatomy, timing and treatment. Second, an injury may be correctly described and still wrongly attributed, which is why sequence and interval since assault must be examined before causation is conceded.",
      "The output that helps counsel is not a conclusion but a matrix: each recorded injury, its described characteristics, the mechanism alleged, and whether the finding is consistent, indeterminate or inconsistent — with the reason stated.",
    ],
    takeaways: [
      "Read the injury chart before the allegation narrative",
      "Record consistency as consistent / indeterminate / inconsistent",
      "Never treat absence of a sign as proof of fabrication",
      "State the limitation of opinion in the document itself",
    ],
  },
  {
    slug: "medicolegal-documentation-discipline",
    category: "Medico-Legal",
    kind: "Documentation Guide",
    title: "MLC Documentation: Where the Clinical Note Becomes Evidence",
    excerpt:
      "The medicolegal case record is the only document that is simultaneously a clinical instrument and an evidentiary one. Most failures in it are avoidable at the writing stage.",
    date: "22 December 2025",
    readingTime: "7 min read",
    image: "/images/methodology/document-review.jpg",
    body: [
      "A treatment note answers 'what did the clinician do and why'. A medicolegal record must also answer 'when, in what sequence, on whose account, and with what observed basis'. When those questions are left unanswered, the file becomes reconstructable by the other side.",
      "Four fields fail most often. The history column records an allegation instead of the patient's statement in reported speech. Injury description uses interpretive words — 'assault', 'grievous', 'simple' — that belong to the court, not the examining doctor. Timing is left vague, so the interval since assault cannot be assessed later. And corrections are made without initials, date or time, which converts a clerical act into an authenticity problem.",
      "Documentation discipline is not defensive writing. It is writing that a reader without the clinician's memory can reconstruct the finding from, months later, under scrutiny.",
      "Institutionally, the fix is structural: a fixed MLC template, an escalation rule at emergency intake, custody logging for anything collected, and a single owner for the register entry — not a circular instructing staff to be careful.",
    ],
    takeaways: [
      "Record the history as reported speech, attributed",
      "Describe, do not classify — gravity is a legal conclusion",
      "Date, time and initials on every correction",
      "Escalation and evidence custody defined at intake, not later",
    ],
  },
  {
    slug: "toxicology-report-limits",
    category: "Toxicology",
    kind: "Practice Brief",
    title: "What a Toxicology Report Does Not Say",
    excerpt:
      "Screen, confirm, quantification and interpretation are four different statements. Reading one of them as another is the most common analytical error in poisoning matters.",
    date: "03 December 2025",
    readingTime: "6 min read",
    image: "/images/services/toxicology.jpg",
    body: [
      "A screen answers 'is there anything here worth pursuing'. A confirmation answers 'which substance is present'. A quantification answers 'how much'. Interpretation — the question the case actually turns on — depends on the specimen, the timing of collection, the assay's limits, the person's tolerance, treatment given and the clinical course.",
      "Two specimen issues recur in file review. Sample preservation and chain of custody determine whether the quantity reported can be trusted at all; degradation, contamination or an undocumented delay can move a figure in either direction. And a blood result read against a therapeutic range ignores that ranges are population references, not individual thresholds.",
      "Post-mortem specimens deserve a separate caution: site-dependent concentration and redistribution after death mean a peripheral sample and a central sample can answer different questions.",
      "For counsel, the practical question is narrow and fair: which of the four statements does this report actually make, and which of them is being assumed?",
    ],
    takeaways: [
      "Distinguish screen, confirmation, quantification, interpretation",
      "Verify preservation and custody before relying on a quantity",
      "Therapeutic ranges are not individual toxicity thresholds",
      "Ask what the method could not detect",
    ],
  },
  {
    slug: "emergency-mlc-protocol",
    category: "Healthcare Compliance",
    kind: "Documentation Guide",
    title: "The Emergency Department Is the First Courtroom",
    excerpt:
      "Medicolegal defensibility is decided in the first ninety minutes of an emergency presentation, long before any lawyer reads the file.",
    date: "18 November 2025",
    readingTime: "5 min read",
    image: "/images/services/hospital-defense.jpg",
    body: [
      "Emergency intake creates the facts later evidence will be tested against: arrival time, clinical condition on arrival, who examined, what was communicated, what was referred, and what was collected and where it went.",
      "A workable protocol is short. Identify medicolegal relevance at triage, not at discharge. Register and notify within a defined interval. Preserve clothing, dressings, vomitus and any delivered specimen with a custody log. Photograph where consent and facility allow. Document counselling and refusal in the patient's own terms.",
      "Where staff resist, it is rarely indifference — it is usually a workflow that punishes the doctor for a five-minute administrative act at 3 a.m. Protocols that survive are those written for the shift, with one named owner per step.",
    ],
    takeaways: [
      "Medicolegal flag raised at triage",
      "Notification within a defined interval, not 'at the earliest'",
      "Custody log for every collected or delivered item",
      "Refusal and counselling recorded in the patient's words",
    ],
  },
  {
    slug: "mact-disability-consistency",
    category: "Medico-Legal",
    kind: "Practice Brief",
    title: "MACT Disability: The Distance Between the Certificate and the Joint",
    excerpt:
      "Disability percentage is a measurement, not an opinion. Consistency between the certificate, the imaging and the examination is where a claim is built or breaks.",
    date: "30 October 2025",
    readingTime: "7 min read",
    image: "/images/services/mact.jpg",
    body: [
      "Tribunal practice turns on a certificate that states a percentage. What supports it is a chain: the injury documented at treatment, the healing and outcome visible on current imaging, the measured limitation on examination today, and the published schedule or method used to convert that limitation into a number.",
      "Break the chain at any point and the figure becomes assertion. A range-of-motion value without a goniometric method; ankylosis described in a position never recorded; a percentage cited to a scheme the assessment does not follow; a permanent designation with no documented stability period — each is a technical objection rather than a matter of opinion.",
      "For claimant counsel the implication is procedural: examination and certification should be done with the method written down. For the insurer or respondent, it is the same discipline in reverse — test the measurement before arguing about the number.",
    ],
    takeaways: [
      "Percentage must trace to a stated assessment method",
      "Joint limitation recorded with measured values and position",
      "Stability period documented before calling it permanent",
      "Compare certificate, imaging and treatment record line to line",
    ],
  },
  {
    slug: "bns-bsa-evidence-shift",
    category: "Statutory Insights",
    kind: "Practice Brief",
    title: "Advising Under BNS & BSA: What Changes in the Medical Record",
    excerpt:
      "The transition to the new criminal law framework is procedural and evidentiary before it is substantive. Documentation habits formed now decide how files read years later.",
    date: "12 October 2025",
    readingTime: "6 min read",
    image: "/images/insights/insight-courtroom.jpg",
    body: [
      "For medico-legal advisory work, the practical shift is in how electronic and documentary evidence is handled, authenticated and presented — and in the naming and framing of offences that the medical record must still support factually.",
      "The clinical obligations do not soften: injury description, opinion on danger to life, consent, notification and custody remain the same acts. What changes is the expectation that the record will be tested electronically and procedurally, including the treatment of directions relating to forensic examination and reporting timelines.",
      "Institutions should read this as a documentation-hygiene matter rather than a legal-update matter. Standard forms, defined reporting intervals, and staff who understand why a field exists are worth more than any circular.",
      "This note is a framing summary by the firm's advisory team. Counsel should verify the applicable provisions, amendments and any relevant rules for the forum before acting.",
    ],
    takeaways: [
      "Evidentiary handling and authentication expectations tightened",
      "Clinical documentation duties unchanged but more heavily tested",
      "Defined reporting intervals replace discretionary timing",
      "Verify current text and forum rules before relying on summaries",
    ],
  },
];

export const insightCategories = [
  "All",
  "Medico-Legal",
  "Forensic",
  "Toxicology",
  "Healthcare Compliance",
  "Statutory Insights",
] as const;
