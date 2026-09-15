export const site = {
  name: "TRUE DETECTIVE",
  descriptor: "Private Investigation & Corporate Intelligence",
  tagline: "When Facts Matter, We Investigate.",
  // Placeholder until the company's actual number is provided.
  whatsappNumber: "0000000000",
  phoneDisplay: "Phone number to be provided",
  emailDisplay: "Email address to be provided",
  addressDisplay: "Address to be provided, Tamil Nadu, India",
  regions: ["Tamil Nadu", "Bangalore"],
};

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  "Hello TRUE DETECTIVE, I would like to discuss a confidential requirement.",
)}`;

// Embeddable map — falls back to a Tamil Nadu-wide view until the exact office address is confirmed.
export const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  site.addressDisplay,
)}&z=8&output=embed`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Private Investigations", to: "/private-investigations" },
  { label: "Corporate Intelligence", to: "/corporate-intelligence" },
  { label: "Contact", to: "/contact" },
] as const;

export const services = [
  {
    title: "Matrimonial Investigations",
    description:
      "Confidential and discreet investigation services for matrimonial and relationship-related concerns.",
  },
  {
    title: "Employee Verification",
    description:
      "Employment and background verification to help organizations make informed hiring and business decisions.",
  },
  {
    title: "Litigation Support & Fact Finding",
    description:
      "Investigation and fact-finding support for clients and legal professionals dealing with disputes and litigation.",
  },
  {
    title: "Surveillance",
    description:
      "Professional surveillance and observation assignments conducted within applicable laws and ethical boundaries.",
  },
  {
    title: "Corporate Intelligence",
    description:
      "Information gathering and analysis designed to help organizations understand potential risks, relationships and business environments.",
  },
  {
    title: "Corporate Investigations",
    description:
      "Investigating suspected internal misconduct, business irregularities, conflicts of interest and other corporate concerns.",
  },
  {
    title: "White-Collar Crime Investigations",
    description:
      "Fact-finding relating to suspected fraud, financial misconduct, deception and other business-related irregularities.",
  },
  {
    title: "Brand Protection",
    description:
      "Investigation into counterfeit activity, unauthorized use, reputational concerns and threats affecting commercial interests.",
  },
  {
    title: "Due Diligence",
    description:
      "Discreet information gathering and verification to support partnerships, investments, transactions and other important business decisions.",
  },
  {
    title: "Discreet Enquiries",
    description:
      "Confidential enquiries to establish and verify relevant facts surrounding a specific individual, organization or situation.",
  },
  {
    title: "Kickback & Conflict-of-Interest Investigations",
    description:
      "Investigating suspected undisclosed relationships, commissions, kickbacks and conflicts of interest.",
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
    a: "Yes. We provide corporate investigation, fraud-related fact finding, employee verification, due diligence, kickback and conflict-of-interest investigation services.",
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
    "Our team brings more than 8 years of experience in the investigation and intelligence industry, with a proven track record of successfully handling a wide range of personal, lifestyle, corporate, and investigative assignments. Over the years, we have worked across different types of matters, developing practical expertise in information gathering, surveillance, verification, background research, corporate intelligence, and fact-finding.",
    "We understand that every investigation is different. Some matters are deeply personal, while others involve business risks, employee concerns, potential fraud, disputes, or legal proceedings. Our role is to approach each assignment objectively, discreetly, and professionally, helping our clients understand the facts and make informed decisions.",
  ],
};

// Auto-rotating gallery on the About page. Placeholder imagery until themed
// photography is supplied — captions describe the assignment type shown.
export const aboutGallery = [
  {
    image: "surveillance",
    alt: "Field surveillance during a matrimonial verification assignment",
    caption: "Matrimonial & background verification",
  },
  {
    image: "documents",
    alt: "Case notes and evidence being reviewed discreetly",
    caption: "Discreet case documentation & fact-finding",
  },
  {
    image: "corporate",
    alt: "Confidential meeting during a workplace investigation",
    caption: "Employee misconduct & workplace enquiries",
  },
  {
    image: "hero-city",
    alt: "Field observation in a corporate business district",
    caption: "Corporate intelligence & risk investigation",
  },
] as const;

export const privateInvestigationsContent = {
  hero: {
    eyebrow: "Private Investigations",
    title: "Discreet Answers for Personal Matters",
    description:
      "Confidential investigation and fact-finding services for individuals dealing with matrimonial concerns, relationship doubts and other sensitive personal situations.",
  },
  intro: [
    "Personal matters are rarely simple. They often involve conflicting information, emotional strain and decisions that carry lasting consequences.",
    "TRUE DETECTIVE approaches every personal assignment with objectivity, discretion and care — helping clients understand the facts before they act.",
  ],
  matrimony: [
    {
      title: "Pre-Matrimony Verification",
      why: "To help families and individuals make an informed decision before marriage, by verifying the background, character and circumstances of a prospective partner.",
      what: "Background and identity verification, family and social standing checks, employment and financial standing checks, and character-related enquiries conducted discreetly.",
      how: "Through confidential enquiries, verification of available records, and discreet fact-finding — always within applicable laws and professional boundaries.",
    },
    {
      title: "Post-Matrimony Investigation",
      why: "To help a spouse or family understand the facts where there is suspicion of infidelity, dishonesty or undisclosed circumstances within a marriage.",
      what: "Discreet surveillance and observation, relationship-related fact finding, verification of claims and circumstances, and confidential reporting of findings.",
      how: "Through careful, lawful surveillance and enquiry methods, with findings verified and presented clearly and confidentially to the client.",
    },
  ],
  services: [
    "Matrimonial investigations",
    "Background verification",
    "Personal enquiries",
    "Surveillance",
    "Relationship-related fact finding",
    "Identity verification",
    "Address verification",
    "Asset-related enquiries where legally permissible",
  ],
};

export const corporateIntelligenceContent = {
  hero: {
    eyebrow: "Corporate Intelligence",
    title: "Understand Risk Before It Affects Your Business",
    description:
      "Information gathering, verification and analysis designed to help organizations understand potential risks, relationships and business environments.",
  },
  intro: [
    "Business risks are not always visible. Internal misconduct, fraudulent activity, conflicts of interest, undisclosed relationships and commercial risks can affect organizations of any size.",
    "TRUE DETECTIVE helps businesses gather and verify relevant information so leadership can make informed, well-supported decisions.",
  ],
  why: "To give organizations a clear, fact-based understanding of the people, partners and risks connected to their business before those risks turn into losses or disputes.",
  what: "Corporate investigations, due diligence, employee verification, kickback and conflict-of-interest investigations, brand protection and litigation support.",
  how: "Through discreet enquiries, verification of records and claims, structured surveillance where appropriate, and clear, confidential reporting of findings.",
  services: [
    "Corporate investigations",
    "White-collar crime investigations",
    "Employee verification",
    "Due diligence",
    "Kickback & conflict-of-interest investigations",
    "Brand protection",
    "Litigation support & fact finding",
    "Discreet enquiries",
  ],
};
