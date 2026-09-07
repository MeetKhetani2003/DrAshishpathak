"use client";
import LegalDoc, { type LegalSection } from "@/components/LegalDoc";
import { brand } from "@/data/site";
import useSeo from "@/hooks/useSeo";

const sections: LegalSection[] = [
  {
    id: "overview",
    heading: "Overview",
    body: [
      `${brand.firm} handles three categories of sensitive material: case files, medical records and client communications. This policy states what this website collects, how confidential material is handled in practice, and — importantly — what this website does not do.`,
      "This website is a static, front-end publication. It contains no database, no user accounts and no document-upload facility. It does not track visitors with third-party advertising scripts.",
    ],
  },
  {
    id: "site-data",
    heading: "Information This Website Processes",
    body: [
      "The enquiry form on the Contact page is designed to be completed without uploading documents. It structures a summary of the matter for the advisory desk.",
      "Do not enter patient identifiers, medical record numbers, account numbers, or confidential documents into any field of this website. Where a file review is required, the transfer method is agreed directly with the desk.",
    ],
    list: [
      "What you type into the enquiry form is processed in your browser session.",
      "No case data is stored in a database by this website.",
      "Standard, limited technical logging may be performed by the hosting provider as a matter of server operation.",
    ],
  },
  {
    id: "case-files",
    heading: "Confidentiality Of Case Files",
    body: [
      "Case instructions received by the firm — through agreed channels, not through this website — are read only by the advisory member assigned to the matter and, where required, by the expert board member whose technical input is needed.",
      "Files are not used for marketing, do not appear in any public material, and are not attributed to the firm in any promotional context without written instruction.",
    ],
  },
  {
    id: "medical-records",
    heading: "Medical Records",
    body: [
      "Medical records submitted for review are treated as privileged working material. They are used solely to answer the technical question referred, are stored within the firm's internal matter structure, and are not disclosed to any third party except as required by law or by the instructions of the engaging party.",
      "Where an opinion requires examination of a living person, consent for that examination is obtained and documented before it takes place.",
    ],
  },
  {
    id: "communications",
    heading: "Client Communications",
    body: [
      "Correspondence with the firm is treated as confidential to the matter. Email and telephone channels published on this site are business channels of the firm; for material of exceptional sensitivity, callers should request the secure handover process before transmitting documents.",
      "We do not send marketing email. There is no newsletter subscription on this website.",
    ],
  },
  {
    id: "no-claims",
    heading: "What We Do Not Claim",
    body: [
      "This website does not implement end-to-end encryption, secure client portals, or an audited document-management system, and it does not claim to. It makes no representation of technical security beyond ordinary hosting and browser behaviour.",
      "Where a matter requires transport of sensitive documents, the firm agrees an explicit method with the instructing party instead of relying on the website.",
    ],
  },
  {
    id: "rights",
    heading: "Your Rights & Requests",
    body: [
      "You may request confirmation of what personal information the firm holds about you in relation to a matter, seek correction of inaccurate details, or request deletion where no professional or statutory requirement obliges us to retain it.",
      "Requests and questions about this policy may be addressed to the desk using the contact details published on this site.",
    ],
  },
  {
    id: "changes",
    heading: "Changes To This Policy",
    body: [
      "This policy may be revised as the practice or applicable requirements evolve. The version published on this page, with its effective date, is the version in force.",
    ],
  },
];

export default function Privacy() {
  useSeo({
    title: "Privacy Policy | Confidentiality of Case Files & Medical Records",
    description:
      "How Dr. Ashish Pathak & Associates handles enquiries, case files, medical records and client communications — and what this static website does not collect.",
  });
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Privacy Policy"
      updated="12 January 2026"
      preamble="A short, precise statement about data on this website and confidentiality in the firm's practice — written so that it can be relied on."
      sections={sections}
      footerNote="No consent to data processing is inferred from visiting this website. Where consent is required in a matter, it is obtained separately and in writing."
    />
  );
}
