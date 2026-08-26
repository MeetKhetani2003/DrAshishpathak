import LegalDoc, { type LegalSection } from "@/components/LegalDoc";
import { brand } from "@/data/site";
import useSeo from "@/hooks/useSeo";

const sections: LegalSection[] = [
  {
    id: "nature-of-content",
    heading: "Nature of the Content",
    body: [
      `This website is published by ${brand.firm} to describe the scope of our medico-legal and forensic evidence advisory practice. All content on the site — including service descriptions, methodology notes and Knowledge Hub articles — is provided for general information only.`,
      "Nothing published here constitutes legal advice, medical advice, an expert opinion, or an opinion on the facts of any specific matter. Advice is only given in writing, after a matter has been formally accepted against a defined scope.",
    ],
  },
  {
    id: "no-advocate-client",
    heading: "No Advocate-Client Relationship",
    body: [
      "Submission of an enquiry through this website, by email, by telephone or in person does not by itself create an advocate-client relationship, a vakalatnama, or any duty of engagement on the part of the firm or any member of its expert board.",
      "A professional relationship arises only where the firm confirms, in writing, that it has accepted a specific matter, on a stated scope and on the firm's terms. Until that confirmation is issued, information you share should not be assumed to be subject to any obligation of confidentiality arising from a retainer.",
    ],
  },
  {
    id: "no-guarantee",
    heading: "No Guarantee of Outcome",
    body: [
      "Medico-legal and forensic analysis assists a decision-maker; it does not determine one. We do not guarantee, and never represent, any result in litigation, tribunal proceedings, insurance assessment, departmental inquiry or commission review.",
      "Any opinion issued by the firm is a technical opinion on the material examined and is subject to the limitations stated within it.",
    ],
  },
  {
    id: "not-medical-advice",
    heading: "Not a Substitute for Medical Care",
    body: [
      "Content on this site may describe clinical findings, examination technique or injury interpretation. It is not intended for diagnosis or treatment, and must never be used to alter, delay or replace medical care from a treating physician.",
    ],
  },
  {
    id: "accuracy",
    heading: "Accuracy, Currency and Verification",
    body: [
      "We take care to describe statutory frameworks, professional requirements and clinical concepts accurately at the time of writing. Laws, rules, standards and institutional requirements change.",
      "Readers should verify the current text of any statute, rule, regulation, professional standard or certification requirement referred to on this site before relying on it. References to the Bharatiya Nyaya Sanhita (BNS) and the Bharatiya Sakshya Adhiniyam (BSA) are descriptive and not a legal opinion on their application.",
    ],
  },
  {
    id: "third-party",
    heading: "Third-Party References",
    body: [
      "Mentions of courts, tribunals, commissions, professional bodies, institutions or publications are descriptive of the audiences we advise and the frameworks in which work sits. They do not imply endorsement, partnership, empanelment or affiliation of any kind.",
      "The firm does not claim government, hospital or institutional partnership beyond what is stated in its published profile.",
    ],
  },
  {
    id: "liability",
    heading: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, the firm and its members shall not be liable for any loss or damage, direct or indirect, arising from the use of this website or from reliance on any information published on it.",
    ],
  },
  {
    id: "ip",
    heading: "Intellectual Property",
    body: [
      "The firm name, emblem, tagline and the original text, layout and imagery on this site belong to the firm and may not be reproduced without written permission. Content is used for the purpose of identifying the practice only.",
    ],
    list: [
      "Names, emblem and tagline — property of the firm.",
      "Imagery used on this site is stored within the project and used for illustrative purposes.",
      "Quotation of short extracts requires attribution and link-back.",
    ],
  },
  {
    id: "changes",
    heading: "Changes To This Disclaimer",
    body: [
      "This disclaimer may be updated as the practice, its published content or the applicable framework changes. The version displayed on this page is the version in effect.",
    ],
  },
];

export default function Disclaimer() {
  useSeo({
    title: "Disclaimer | Legal & Professional Notice",
    description:
      "Terms governing the use of information published by Dr. Ashish Pathak & Associates, including that website enquiries do not create an advocate-client relationship.",
  });
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Disclaimer"
      updated="12 January 2026"
      preamble="Please read this notice before relying on any information published by the firm. It sets out what this website is — and what it is not."
      sections={sections}
      footerNote="If a matter is already listed before a court or tribunal, instructions should be sent to counsel on record and not through this website."
    />
  );
}
