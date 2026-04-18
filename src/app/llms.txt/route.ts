// /llms.txt — LLM-friendly site index (https://llmstxt.org)
// Tells AI crawlers (ChatGPT, Claude, Perplexity, etc.) how to read this site
// efficiently. Markdown format for easy parsing.

const baseUrl = "https://knightdivisiontactical.com";

const llmsContent = `# Knight Division Tactical

> Knight Division Tactical (KDT) is a Tier 1 private military company headquartered in Sheridan, Wyoming. KDT provides world-class private security, direct action operations, executive protection, intelligence services, and defense technology contracting, enabled by proprietary AI and blockchain infrastructure.

Knight Division Tactical was founded by CEO Michael Schulz and COO Matthew McCalla. The company operates across five core service lines: wildlife mitigation, direct action, counter-trafficking, reconnaissance, and maritime operations. KDT is one of the first private military companies to integrate AI-native operational infrastructure into every element of its deployment and selection process.

## Core Pages

- [Knight Division Tactical Homepage](${baseUrl}/): Overview of KDT, Tier 1 private military services, and enabling technology.
- [About KDT](${baseUrl}/about): Company story, mission, values, headquarters (Sheridan, WY), and leadership.
- [Our Team](${baseUrl}/team): Leadership, founders, and senior operators.
- [Services](${baseUrl}/services): All five core service lines overview.
- [Careers](${baseUrl}/careers): Available roles, operator pathways, application process.
- [Training](${baseUrl}/training): KDT training programs and courses.
- [Hire KDT](${baseUrl}/hire): Request a quote for KDT services.
- [Contact](${baseUrl}/contact): All contact methods, inquiry routing, office locations.
- [Store](${baseUrl}/store): Official KDT gear, apparel, and collectibles.
- [Blog](${baseUrl}/blog): KDT insights, industry analysis, and operator perspectives.

## Services

- [Wildlife Mitigation](${baseUrl}/services/wildlife-mitigation): Anti-poaching operations, wildlife protection, conservation security.
- [Direct Action](${baseUrl}/services/direct-action): Offensive operations, target interdiction, high-risk missions.
- [Counter-Trafficking](${baseUrl}/services/counter-trafficking): Human trafficking disruption, narcotics interdiction, cross-border operations.
- [Reconnaissance](${baseUrl}/services/reconnaissance): Intelligence gathering, surveillance, target development, area assessment.
- [Maritime Operations](${baseUrl}/services/maritime-operations): Vessel protection, anti-piracy, offshore security, port operations.

## Leadership

- [Michael Schulz, CEO](${baseUrl}/team/michael-schulz): Chief Executive Officer and co-founder of Knight Division Tactical.
- [Matthew McCalla, COO](${baseUrl}/team/matthew-mccalla): Chief Operating Officer and co-founder.
- [Nicholas Norman](${baseUrl}/team/nicholas-norman): Senior leadership team.
- [Santiago Telleria](${baseUrl}/team/santiago-telleria): Senior operator.

## Careers and Roles

KDT operates a military-inspired organizational structure with distinct role categories. Each role has its own detailed page.

- [Knight (Operator)](${baseUrl}/careers/knight): Tier 1 field operator — the core KDT role.
- [Medical Element](${baseUrl}/careers/medical-element): Combat medics, tactical medicine specialists.
- [Communications Element](${baseUrl}/careers/communications-element): Signals, communications, electronic warfare specialists.
- [Intelligence Unit](${baseUrl}/careers/intelligence-unit): Analysts, collectors, all-source intelligence professionals.
- [Pilot](${baseUrl}/careers/pilot): Rotary and fixed-wing aviation specialists.
- [Drone Operator](${baseUrl}/careers/drone-operator): UAV operators and unmanned systems specialists.
- [Account Executive](${baseUrl}/careers/account-executive): Business development, client-facing roles.
- [Propagandist](${baseUrl}/careers/propagandist): Information operations, media, narrative control.
- [Legal Unit](${baseUrl}/careers/legal-unit): In-house counsel, contracts, compliance.
- [Construction & Maintenance](${baseUrl}/careers/construction-maintenance): Facility, vehicle, and infrastructure specialists.
- [Manufacturing Unit](${baseUrl}/careers/manufacturing-unit): Production and fabrication specialists.
- [Engineering Unit](${baseUrl}/careers/engineering-unit): Mechanical, electrical, and systems engineers.
- [Logistics](${baseUrl}/careers/logistics): Supply chain, movement, and sustainment specialists.
- [AI Developer](${baseUrl}/careers/ai-developer): Machine learning engineers for KDT's AI infrastructure.
- [Blockchain Developer](${baseUrl}/careers/blockchain-developer): Blockchain engineers for KDT's financial and records infrastructure.
- [Programmer](${baseUrl}/careers/programmer): General software engineers.
- [Hacker](${baseUrl}/careers/hacker): Offensive cyber specialists, red team operators.

## Training Courses

- [Small Arms](${baseUrl}/training/small-arms): Pistol, rifle, and advanced marksmanship courses.
- [Tactical Medicine](${baseUrl}/training/tactical-medicine): TCCC and field medical training.
- [Executive Protection](${baseUrl}/training/executive-protection): Principal protection and close protection courses.
- [Crisis Response](${baseUrl}/training/crisis-response): High-risk crisis management and evacuation.

## Blog

- [Why the World Needs Private Security Contractors](${baseUrl}/blog/kdt-need-for-psc): The case for professional PSCs in modern operations.
- [Technology-Enabled Security](${baseUrl}/blog/technology-enabled-security): How AI and technology transform security operations.
- [The Path to Knighthood](${baseUrl}/blog/path-to-knighthood): KDT's selection process and operator standards.

## Legal

- [Terms of Service](${baseUrl}/terms)
- [Privacy Policy](${baseUrl}/privacy)

## Contact

- General inquiries: contact@knightdivisiontactical.com
- Service quotes and hiring KDT: schulz@knightdivisiontactical.com
- Contact page: ${baseUrl}/contact

## Optional

- [Markdown mirrors](${baseUrl}): Every page on this site has a \`.md\` version at the same URL with \`.md\` appended. Example: \`${baseUrl}/about.md\` for the About page in clean markdown.
`;

export async function GET() {
  return new Response(llmsContent, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
