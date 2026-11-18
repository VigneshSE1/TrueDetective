// Detail-page content for each service. `slug` matches the entry in `services`
// (src/lib/site.ts) and is used in the URL: /services/<slug>.

// Text in **double asterisks** is rendered as a highlighted key phrase.
export type ServicePage = {
  slug: string;
  headline: string;
  intro: string[];
  covers: { title: string; text: string }[];
  deliverables: string[];
  forWhom: string[];
  note?: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "pre-matrimonial-verification",
    headline: "Know the Person Before You Commit to the Family",
    intro: [
      "Marriage is **one of the biggest decisions a family makes**, and the information shared during alliance talks is often incomplete. Our pre-matrimonial verification **confirms what has been told to you**, quietly and respectfully.",
      "We verify claims about a prospective bride or groom and their family, so that **the decision is made on facts** and not only on introductions.",
    ],
    covers: [
      { title: "Identity & age", text: "Confirming name, age, marital status and that the person is who they say they are." },
      { title: "Education", text: "Checking claimed degrees, institutions and years of study." },
      { title: "Employment & income", text: "Verifying the employer, designation, work history and general financial standing." },
      { title: "Family background", text: "Understanding the family's standing, reputation and circumstances in their community." },
      { title: "Character & habits", text: "Discreet enquiries about lifestyle, habits and conduct among people who know them." },
      { title: "Previous relationships", text: "Looking for undisclosed earlier marriages, relationships or legal disputes." },
      { title: "Residence", text: "Confirming the current and permanent address and living situation." },
    ],
    deliverables: [
      "A clear written report of verified, unverified and contradicting information",
      "A plain-language summary highlighting any concerns",
      "A confidential discussion of the findings with your family",
    ],
    forWhom: [
      "Parents arranging a marriage for a son or daughter",
      "Individuals who have met someone through matrimonial sites or introductions",
      "Families of NRI or out-of-town alliances who cannot check locally",
    ],
  },
  {
    slug: "post-marriage-investigation",
    headline: "Clarity When Something in Your Marriage Does Not Add Up",
    intro: [
      "When **a spouse's behaviour changes**, or **facts that were promised before marriage turn out to be untrue**, the stress can be overwhelming. We help you **establish what is actually happening**, with **complete discretion**.",
      "Our work is limited to **lawful enquiry and observation**, and **findings are shared only with you**.",
    ],
    covers: [
      { title: "Suspected infidelity", text: "Lawful observation and fact-finding where there is concern about a spouse's conduct." },
      { title: "Undisclosed relationships", text: "Identifying who a spouse is in regular contact or meeting with." },
      { title: "Hidden finances", text: "Establishing undisclosed income, spending or assets within the limits of the law." },
      { title: "Misrepresentation", text: "Checking whether facts given before marriage about job, status or past were false." },
      { title: "Lifestyle & whereabouts", text: "Documenting routines, movements and time spent away from home." },
      { title: "Support for custody & family matters", text: "Fact-finding that can support discussions with your lawyer in custody or separation matters." },
    ],
    deliverables: [
      "A dated, factual written report of observations and findings",
      "Supporting documentation where lawfully obtained",
      "Guidance on how the findings may be shared with your legal adviser",
    ],
    forWhom: [
      "Spouses who suspect infidelity or dishonesty",
      "Individuals preparing for a separation, divorce or custody discussion",
      "Families who discovered that important information was concealed",
    ],
    note: "We do not access private accounts or devices, and we do not carry out unlawful surveillance.",
  },
  {
    slug: "employment-verification",
    headline: "Hire With Confidence, Not Assumption",
    intro: [
      "A résumé tells you what a candidate wants you to know. **Employment verification confirms it.** We help companies of every size **check the people they are about to trust** with money, data and customers.",
      "Verification can be done **before hiring**, and also later where there are concerns about an existing employee.",
    ],
    covers: [
      { title: "Identity & address", text: "Confirming identity documents and the current and permanent address." },
      { title: "Education & certificates", text: "Verifying degrees, diplomas and professional certificates with the issuing bodies." },
      { title: "Previous employment", text: "Checking designations, tenure, salary range and reason for leaving." },
      { title: "Reference checks", text: "Speaking with former supervisors and colleagues about conduct and performance." },
      { title: "Criminal & litigation record", text: "Checking publicly available records for relevant history, within legal limits." },
      { title: "Gaps & inconsistencies", text: "Explaining career gaps and flagging details that do not match the résumé." },
      { title: "Post-hire concerns", text: "Fact-finding on suspected moonlighting, misconduct or policy breaches." },
    ],
    deliverables: [
      "A structured verification report, item by item",
      "Clear status for each claim: verified, not verified or discrepancy found",
      "Quick turnaround options for urgent hiring",
    ],
    forWhom: [
      "HR teams and recruiters",
      "Small businesses hiring for sensitive roles",
      "Families hiring domestic staff, drivers or caregivers",
    ],
  },
  {
    slug: "missing-person-tracing",
    headline: "A Careful, Lawful Search for Someone Who Has Lost Contact",
    intro: [
      "When someone goes missing or cuts off contact, **every day matters**. We plan a **structured search** that works **alongside the police and your family**, never in place of them.",
      "Our focus is on **tracing the person's whereabouts** through lawful enquiry and informing you of what we find.",
    ],
    covers: [
      { title: "Case assessment", text: "Reviewing the circumstances, last known contact and any warning signs." },
      { title: "Background mapping", text: "Understanding the person's routine, relationships, workplace and likely destinations." },
      { title: "Public record enquiries", text: "Checking available records and information sources lawfully." },
      { title: "Field enquiries", text: "Speaking with neighbours, friends, colleagues and others who may know something." },
      { title: "Location checks", text: "Visiting and discreetly observing places the person may frequent or stay." },
      { title: "Lost-contact cases", text: "Tracing relatives, tenants, debtors or friends with whom touch has been lost." },
      { title: "Coordination", text: "Supporting your communication with the police and relevant authorities." },
    ],
    deliverables: [
      "Regular progress updates during the search",
      "A written account of leads followed and findings",
      "Immediate notification of any significant development",
    ],
    forWhom: [
      "Families of missing or untraceable relatives",
      "Parents worried about a young person who has left home",
      "Individuals trying to re-establish contact with someone",
    ],
    note: "Where a person is found and does not wish to be contacted, we confirm their safety and respect their legal right to privacy.",
  },
  {
    slug: "surveillance",
    headline: "Evidence You Can Rely On, Gathered Discreetly",
    intro: [
      "Some questions can only be answered by **observing what actually happens**. Our surveillance assignments are **planned in advance**, carried out by trained personnel, and **documented in a way that is clear and factual**.",
      "We **work within applicable laws** and avoid anything that would put the client or the case at risk.",
    ],
    covers: [
      { title: "Movement surveillance", text: "Discreet following on foot or by vehicle to establish routines and destinations." },
      { title: "Static observation", text: "Observing a location, residence or premises from a fixed vantage point." },
      { title: "Photo & video documentation", text: "Time-stamped photographs and video of relevant activity in public places." },
      { title: "Activity verification", text: "Confirming whether a person is where and doing what they claim." },
      { title: "Corporate surveillance", text: "Observing suspected misuse of time, leaked information or unauthorised activity." },
      { title: "Route & pattern analysis", text: "Understanding regular patterns that explain behaviour or timing." },
    ],
    deliverables: [
      "A detailed, time-stamped surveillance log",
      "Photographs and video from lawful observation in public places",
      "A summarised report that is easy to understand and share with your lawyer",
    ],
    forWhom: [
      "Individuals needing facts about a spouse, partner or family member",
      "Businesses investigating misuse of time or resources",
      "Legal professionals seeking supporting observations for a client",
    ],
    note: "Surveillance is carried out in public places only. We do not enter private property or use illegal tracking.",
  },
  {
    slug: "insurance-claim-investigation",
    headline: "Independent Facts Behind the Claim",
    intro: [
      "Insurance claims can involve large sums and conflicting accounts. We provide an **independent, factual investigation** that helps **genuine claims move forward** and **doubtful ones be examined properly**.",
      "Our reports are balanced, so that **decisions are made on evidence** and not on assumption.",
    ],
    covers: [
      { title: "Accident circumstances", text: "Reconstructing how, where and when a vehicle or other accident took place." },
      { title: "Site visits", text: "Visiting the location and recording conditions, distances and evidence." },
      { title: "Witness enquiries", text: "Speaking with witnesses, neighbours and others connected to the incident." },
      { title: "Claim consistency", text: "Comparing statements, documents and timelines for inconsistencies." },
      { title: "Injury & loss claims", text: "Checking the activities and circumstances connected to an injury or loss claim." },
      { title: "Document verification", text: "Verifying bills, reports and certificates submitted with the claim." },
    ],
    deliverables: [
      "A fact-based investigation report with photographs and findings",
      "A clear timeline of events",
      "A neutral conclusion on whether the account is supported by the evidence",
    ],
    forWhom: [
      "Insurance companies and claims teams",
      "Businesses with large or repeated claims",
      "Individuals who need independent evidence to support a genuine claim",
    ],
  },
  {
    slug: "undercover-operations",
    headline: "Discreet Observation Where Open Enquiry Is Not Possible",
    intro: [
      "Some workplace or business problems, such as leakage, theft or misconduct, **cannot be understood by asking questions openly**. Undercover operations allow us to **observe what is really happening, without alerting those involved**.",
      "Every assignment is **carefully planned with the client**, with **clear limits** on what will and will not be done.",
    ],
    covers: [
      { title: "Workplace observation", text: "Placing a trained person inside a workplace, with the client's authorisation, to observe operations." },
      { title: "Theft & pilferage", text: "Identifying where and how stock, materials or cash are going missing." },
      { title: "Information leakage", text: "Finding the source of leaks of designs, pricing or customer data." },
      { title: "Misconduct & policy breaches", text: "Documenting misuse of time, bribery or breaches of company rules." },
      { title: "Competitor activity", text: "Understanding unfair practices that are affecting your business." },
      { title: "Planning & exit", text: "Defining objectives, duration, safeguards and a safe withdrawal plan." },
    ],
    deliverables: [
      "A written operation plan agreed before work starts",
      "Regular confidential briefings to a single point of contact",
      "A final report of observations and findings",
    ],
    forWhom: [
      "Factories, warehouses and retail businesses",
      "Owners and senior management of companies",
      "Organisations facing repeated unexplained losses",
    ],
    note: "All operations are lawful, and we do not undertake anything involving impersonation of officials, entrapment or illegal access.",
  },
  {
    slug: "fingerprint-handwriting-analysis",
    headline: "Evidence on Whether a Document Is What It Claims to Be",
    intro: [
      "Disputed signatures, altered documents and anonymous notes are common in family, property and business disagreements. We **compare handwriting and fingerprints with known samples** to help you understand **whether a document is authentic**.",
      "Where an opinion is required for court, we coordinate with **qualified forensic examiners**.",
    ],
    covers: [
      { title: "Signature comparison", text: "Comparing a disputed signature against genuine specimens." },
      { title: "Handwriting comparison", text: "Comparing letters, notes, wills and agreements against known writing." },
      { title: "Anonymous letters", text: "Helping narrow down the likely writer of threatening or anonymous notes." },
      { title: "Altered or forged documents", text: "Looking for additions, overwriting and other signs of tampering." },
      { title: "Fingerprint comparison", text: "Comparing lifted prints with those of known individuals." },
      { title: "Sample collection", text: "Properly collecting and preserving samples so they remain usable." },
    ],
    deliverables: [
      "A comparison report setting out observations and conclusions",
      "Enlarged illustrations showing matching and differing features",
      "Referral to a qualified forensic examiner where court evidence is needed",
    ],
    forWhom: [
      "Families in property, will or inheritance disputes",
      "Businesses dealing with forged contracts or cheques",
      "Lawyers who need a preliminary opinion on a document",
    ],
  },
  {
    slug: "corporate-intelligence",
    headline: "See the Risks and Relationships Behind Your Business",
    intro: [
      "Business decisions are only as good as the information behind them. Corporate intelligence gives leadership **a clear picture of the people, partners and risks** around the business, **before they become losses**.",
      "We gather, verify and analyse information so that you can **act with confidence**.",
    ],
    covers: [
      { title: "Partner & vendor checks", text: "Understanding the background, reputation and track record of those you do business with." },
      { title: "Due diligence", text: "Checking a company, promoter or investment target before an agreement is signed." },
      { title: "Fraud & misconduct enquiries", text: "Fact-finding on suspected financial irregularities, white-collar crime, theft and bribery." },
      { title: "Asset & property verification", text: "Verifying ownership and standing of declared assets and property." },
      { title: "Brand & counterfeit protection", text: "Tracing fake or duplicate products and unauthorised use of your brand." },
      { title: "Market & competitor insight", text: "Understanding the business environment you are operating in." },
      { title: "Relationship mapping", text: "Identifying undisclosed links between people and companies." },
    ],
    deliverables: [
      "A clear intelligence report with sources and confidence levels",
      "A summary of key risks and recommended next steps",
      "A confidential briefing for management",
    ],
    forWhom: [
      "Company owners, directors and senior management",
      "Businesses planning partnerships, acquisitions or investments",
      "Brands facing counterfeiting or reputational threats",
    ],
  },
  {
    slug: "litigation-support-fact-finding",
    headline: "Facts That Help Your Case Stand on Firm Ground",
    intro: [
      "Strong legal arguments depend on **facts that can be shown and supported**. We assist lawyers and their clients by **gathering and organising factual information** relevant to a dispute.",
      "We work **under the direction of the legal team** and keep our **findings confidential**.",
    ],
    covers: [
      { title: "Locating people", text: "Tracing witnesses, defendants and parties whose address is unknown." },
      { title: "Background of parties", text: "Understanding the background and standing of the other side." },
      { title: "Asset enquiries", text: "Lawful enquiries on assets relevant to recovery or settlement." },
      { title: "Evidence gathering", text: "Collecting documents, photographs and witness information." },
      { title: "Site & incident documentation", text: "Visiting and recording places relevant to the matter." },
      { title: "Serving & delivery support", text: "Supporting delivery of notices where parties are hard to reach." },
      { title: "Case-ready organisation", text: "Presenting findings in a clear, organised form for your advocate." },
    ],
    deliverables: [
      "A structured fact-finding report for the legal team",
      "Supporting documents, photographs and witness details",
      "Availability to clarify findings for your advocate",
    ],
    forWhom: [
      "Advocates and law firms",
      "Individuals and businesses involved in disputes",
      "In-house legal teams",
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((p) => p.slug === slug);
}
