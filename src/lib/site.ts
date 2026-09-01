export const site = {
  name: "TRUE DETECTIVE",
  descriptor: "Private Investigation & Corporate Intelligence",
  tagline: "When Facts Matter, We Investigate.",
  // Placeholder until the company's actual number is provided.
  whatsappNumber: "0000000000",
  phoneDisplay: "Phone number to be provided",
  emailDisplay: "Email address to be provided",
  regions: ["Tamil Nadu", "Bangalore"],
};

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  "Hello TRUE DETECTIVE, I would like to discuss a confidential requirement.",
)}`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Corporate", to: "/corporate" },
  { label: "Individuals", to: "/individuals" },
  { label: "Our Approach", to: "/approach" },
  { label: "Contact", to: "/contact" },
] as const;

export const services = [
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
    title: "Fraud Investigations",
    description:
      "Discreet investigation into suspected fraudulent activity, financial discrepancies, misrepresentation and suspicious business practices.",
  },
  {
    title: "Kickback & Conflict-of-Interest Investigations",
    description:
      "Investigating suspected undisclosed relationships, commissions, kickbacks and conflicts of interest.",
  },
  {
    title: "Employee Verification",
    description:
      "Employment and background verification to help organizations make informed hiring and business decisions.",
  },
  {
    title: "Due Diligence",
    description:
      "Discreet information gathering and verification to support partnerships, investments, transactions and other important business decisions.",
  },
  {
    title: "Litigation Support & Fact Finding",
    description:
      "Investigation and fact-finding support for clients and legal professionals dealing with disputes and litigation.",
  },
  {
    title: "Matrimonial Investigations",
    description:
      "Confidential and discreet investigation services for matrimonial and relationship-related concerns.",
  },
  {
    title: "Surveillance",
    description:
      "Professional surveillance and observation assignments conducted within applicable laws and ethical boundaries.",
  },
  {
    title: "Discreet Enquiries",
    description:
      "Confidential enquiries to establish and verify relevant facts surrounding a specific individual, organization or situation.",
  },
  {
    title: "Brand Protection",
    description:
      "Investigation into counterfeit activity, unauthorized use, reputational concerns and threats affecting commercial interests.",
  },
  {
    title: "Corporate Intelligence",
    description:
      "Information gathering and analysis designed to help organizations understand potential risks, relationships and business environments.",
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
