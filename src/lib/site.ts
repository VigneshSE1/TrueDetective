export const site = {
  name: "TRUE DETECTIVE",
  descriptor: "Private Investigation & Corporate Intelligence",
  tagline: "When Facts Matter, We Investigate.",
  whatsappNumber: "919842251585",
  phoneDisplay: "+91 98422 51585",
  emailDisplay: "enquiry@truedetective.co.in",
  addressDisplay: "Chennai 600088, Tamil Nadu, India",
  regions: ["Tamil Nadu", "Bangalore"],
};

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  "Hello TRUE DETECTIVE, I would like to discuss a confidential requirement.",
)}`;

// Embeddable map centred on the Chennai office area.
export const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  site.addressDisplay,
)}&z=13&output=embed`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
] as const;

export const services = [
  {
    title: "Pre-Matrimonial Verification",
    slug: "pre-matrimonial-verification",
    icon: "matrimonial",
    description:
      "Discreet verification of a prospective partner's background, education, employment, family standing and reputation before a marriage is finalised.",
  },
  {
    title: "Post-Marriage Investigation",
    slug: "post-marriage-investigation",
    icon: "post-marriage",
    description:
      "Confidential fact-finding where there are concerns of infidelity, concealed finances or undisclosed circumstances, including evidence support for custody matters.",
  },
  {
    title: "Employment Verification",
    slug: "employment-verification",
    icon: "employment",
    description:
      "Pre-employment and post-hire checks on work history, education, credentials, references and conduct to support confident hiring decisions.",
  },
  {
    title: "Missing Person Tracing",
    slug: "missing-person-tracing",
    icon: "missing",
    description:
      "Structured, lawful search efforts using public records, enquiries and field observation to help trace missing or lost-contact individuals.",
  },
  {
    title: "Surveillance",
    slug: "surveillance",
    icon: "surveillance",
    description:
      "Professional observation assignments with documented findings, conducted within applicable laws and ethical boundaries.",
  },
  {
    title: "Insurance Claim Investigation",
    slug: "insurance-claim-investigation",
    icon: "insurance",
    description:
      "Independent fact verification of claims, including accident circumstances, to support fair settlement or to question doubtful claims.",
  },
  {
    title: "Undercover Operations",
    slug: "undercover-operations",
    icon: "undercover",
    description:
      "Carefully planned, lawful discreet assignments to observe and report on workplace or business concerns that cannot be assessed openly.",
  },
  {
    title: "Fingerprint & Handwriting Analysis",
    slug: "fingerprint-handwriting-analysis",
    icon: "fingerprint",
    description:
      "Comparison of handwriting, signatures and fingerprints against disputed documents to support questions of authenticity.",
  },
  {
    title: "Corporate Intelligence",
    slug: "corporate-intelligence",
    icon: "network",
    description:
      "Information gathering and analysis designed to help organizations understand potential risks, relationships and business environments.",
  },
  {
    title: "Litigation Support & Fact Finding",
    slug: "litigation-support-fact-finding",
    icon: "legal",
    description:
      "Investigation and fact-finding support for clients and legal professionals dealing with disputes and litigation.",
  },
];

export const approachSteps = [
  {
    number: "01",
    title: "Understand",
    description: "We understand the client's concerns, objectives and available information.",
  },
  {
    number: "02",
    title: "Assess",
    description: "We assess the nature and scope of the requirement.",
  },
  {
    number: "03",
    title: "Investigate",
    description:
      "Appropriate investigation, verification, surveillance and enquiry methods are considered.",
  },
  {
    number: "04",
    title: "Verify",
    description: "Relevant information is cross-checked and analysed.",
  },
  {
    number: "05",
    title: "Report",
    description: "Findings are presented clearly and confidentially to the client.",
  },
];

export const faqs = [
  {
    q: "Are investigations confidential?",
    a: "Yes. Confidentiality and discretion are fundamental to our approach, subject to applicable legal requirements.",
  },
  {
    q: "What locations do you cover?",
    a: "We primarily serve clients across Tamil Nadu and Bangalore. Assignments in other locations may be considered depending on the requirement.",
  },
  {
    q: "Do you provide corporate investigations?",
    a: "Yes. We provide corporate intelligence, employment verification, undercover operations, insurance claim investigation and litigation support, along with fraud-related fact finding as part of corporate intelligence.",
  },
  {
    q: "Do you handle matrimonial investigations?",
    a: "Yes. We provide discreet matrimonial and personal investigation services.",
  },
  {
    q: "Do you provide litigation support?",
    a: "We provide fact-finding and investigation support for legal and litigation-related requirements, subject to applicable laws.",
  },
  {
    q: "Can you help trace a missing person?",
    a: "Yes. We carry out lawful, structured searches for missing or lost-contact individuals, working alongside your family and the police. If a person is found and does not wish to be contacted, we confirm their safety and respect their right to privacy.",
  },
  {
    q: "Do you handle insurance claim investigations?",
    a: "Yes. We provide independent fact-finding on claims, including accident circumstances, so that genuine claims are supported and doubtful ones are examined fairly.",
  },
  {
    q: "Can I speak to someone before hiring?",
    a: "Yes. Clients can request an initial confidential consultation to explain their situation and understand the possible next steps.",
  },
  {
    q: "Is surveillance legal?",
    a: "Surveillance must be conducted within applicable laws and regulations. Each assignment is assessed accordingly.",
  },
];

export const legalDisclaimer =
  "Investigation services are provided subject to applicable laws and regulations. TRUE DETECTIVE does not undertake unlawful surveillance, unauthorized access to accounts or devices, hacking, impersonation, harassment, or activities intended to violate an individual's legal rights or privacy.";

export const aboutContent = {
  eyebrow: "About TRUE DETECTIVE",
  strapline: "Experience. Discretion. Intelligence. Results.",
  paragraphs: [
    "TRUE DETECTIVE is a professional private investigation and intelligence services firm providing discreet, reliable, and fact-based investigative support to individuals, businesses, and legal professionals.",
    "Our team brings over 10 years of experience in the investigation and intelligence industry. Over the years, we have successfully handled a wide range of assignments involving personal matters, lifestyle concerns, business-related issues, and corporate investigations.",
    "Every assignment has given us an opportunity to face new challenges, understand different situations, and develop practical knowledge. Through these experiences, we have built strong skills in gathering information, conducting surveillance, verifying details, performing background checks, researching individuals and businesses, and uncovering facts.",
    "We understand that every case is different and requires careful attention, patience, and the right approach. Our team takes the time to understand each client's needs and works towards finding accurate and useful information.",
    "With our years of hands-on experience, we aim to provide reliable information, clear findings, and practical support to help our clients make informed decisions. We handle every assignment with professionalism, confidentiality, and responsibility.",
  ],
};

// Auto-rotating gallery (About page and home page). Illustrated slides, one per
// service theme; captions describe the assignment type shown.
export const aboutGallery = [
  {
    image: "matrimonial",
    alt: "Illustration of wedding rings with background verification checks",
    caption: "Pre-matrimonial verification",
  },
  {
    image: "case-board",
    alt: "Illustration of an investigation case board linking people and evidence",
    caption: "Discreet investigation & fact-finding",
  },
  {
    image: "corporate-investigation",
    alt: "Illustration of a ledger with flagged entries under a magnifying glass",
    caption: "Corporate & fraud investigations",
  },
  {
    image: "surveillance",
    alt: "Illustration of a camera lens and viewfinder over a city skyline",
    caption: "Surveillance & discreet photo evidence",
  },
  {
    image: "corporate-intelligence",
    alt: "Illustration of a network of connected entities with one flagged risk",
    caption: "Corporate intelligence & risk mapping",
  },
  {
    image: "employment",
    alt: "Illustration of an ID card and résumé with a verified stamp",
    caption: "Employment verification",
  },
  {
    image: "missing-person",
    alt: "Illustration of a map with a tracked route and location pin",
    caption: "Missing person tracing",
  },
  {
    image: "documents",
    alt: "Illustration of a document, handwriting sample and fingerprint under a magnifier",
    caption: "Fingerprint & handwriting analysis",
  },
] as const;
