export interface ServiceDetailContent {
  aboutTitle: string;
  aboutDescription: string;
  included: string[];
  benefits: string[];
  workSteps: { number: string; title: string; description: string }[];
}

const defaultSteps = [
  {
    number: "01",
    title: "Site Survey & Load Analysis",
    description:
      "Our engineers assess the facility, review drawings and define thermal loads, zoning requirements and integration points.",
  },
  {
    number: "02",
    title: "System Design & Selection",
    description:
      "We specify the optimal equipment configuration, controls strategy and energy targets aligned with project goals.",
  },
  {
    number: "03",
    title: "Installation & Commissioning",
    description:
      "Certified technicians install, test and commission every system to manufacturer standards and local codes.",
  },
  {
    number: "04",
    title: "Handover & After-Sales",
    description:
      "We deliver documentation, operator training and ongoing maintenance support for long-term performance.",
  },
];

export const serviceDetails: Record<string, ServiceDetailContent> = {
  "hitachi-vrf-systems": {
    aboutTitle: "Authorized Hitachi VRF Distribution",
    aboutDescription:
      "As an authorized distributor of Hitachi VRF systems in Egypt, ERATEC delivers variable refrigerant flow technology engineered for superior energy efficiency, precise zoned comfort and reliable long-term operation.\n\nFrom boutique hotels to high-rise commercial towers, our engineering team designs and deploys VRF solutions that reduce operating costs while meeting the demanding performance requirements of modern buildings.",
    included: [
      "VRF system design, equipment selection and capacity calculations",
      "Supply of genuine Hitachi outdoor units, indoor units and controls",
      "Refrigerant piping, electrical integration and BMS connectivity",
      "Commissioning, performance testing and operator handover",
    ],
    benefits: [
      "Up to 40% energy savings versus conventional split systems",
      "Independent zone control for maximum occupant comfort",
      "Compact footprint ideal for retrofit and high-rise applications",
      "Genuine Hitachi warranty backed by ERATEC after-sales support",
    ],
    workSteps: defaultSteps,
  },
  "central-hvac-solutions": {
    aboutTitle: "Central HVAC Design & Delivery",
    aboutDescription:
      "ERATEC designs, supplies and installs complete central air-conditioning systems — chillers, air handling units, fan coil units and ductwork — tailored to each facility's load profile, climate conditions and operational objectives.\n\nOur projects span healthcare, hospitality, industrial and commercial sectors where reliability, air quality and energy performance are non-negotiable.",
    included: [
      "Chiller plant design and equipment procurement",
      "AHU / FCU sizing, ductwork layout and controls integration",
      "Chilled water piping, insulation and pump selection",
      "Testing, balancing and commissioning to design specifications",
    ],
    benefits: [
      "Scalable systems for large commercial and industrial facilities",
      "Optimized part-load efficiency to reduce lifecycle operating cost",
      "Compliance with Egyptian codes and international best practices",
      "Single accountable partner from design through after-sales",
    ],
    workSteps: defaultSteps,
  },
  "electromechanical-contracting": {
    aboutTitle: "Integrated MEP Contracting",
    aboutDescription:
      "ERATEC provides end-to-end electromechanical contracting — power distribution, low-current systems, fire-fighting, plumbing and HVAC — delivered by certified engineers and skilled site teams.\n\nWe coordinate across disciplines so your project moves from concept to completion on schedule, with one engineering partner accountable for quality at every stage.",
    included: [
      "MEP design coordination and shop drawing review",
      "Power, lighting, low-current and fire-fighting installation",
      "HVAC and plumbing integration within a unified delivery plan",
      "Inspection, testing and as-built documentation",
    ],
    benefits: [
      "Reduced interface risk through single-contractor accountability",
      "Experienced site supervision across all MEP disciplines",
      "Faster project timelines with integrated scheduling",
      "Quality assurance aligned with consultant specifications",
    ],
    workSteps: defaultSteps,
  },
  "energy-efficient-retrofits": {
    aboutTitle: "Sustainable HVAC Retrofits",
    aboutDescription:
      "Aging HVAC and electromechanical infrastructure drives up operating costs and carbon emissions. ERATEC upgrades legacy systems to modern, energy-efficient technology — cutting utility bills, meeting sustainability targets and extending asset life.\n\nOur retrofit approach minimizes downtime while maximizing return on investment through careful phasing and engineering-led equipment selection.",
    included: [
      "Energy audit and retrofit feasibility assessment",
      "Equipment replacement and controls upgrade planning",
      "Phased installation to maintain partial building operation",
      "Post-retrofit performance verification and savings reporting",
    ],
    benefits: [
      "Measurable reduction in energy consumption and carbon footprint",
      "Improved occupant comfort and indoor air quality",
      "Extended equipment lifecycle with lower maintenance cost",
      "Support for green building certification and ESG reporting",
    ],
    workSteps: defaultSteps,
  },
  "after-sales-maintenance": {
    aboutTitle: "After-Sales & Maintenance Excellence",
    aboutDescription:
      "ERATEC's after-sales team keeps your HVAC and electromechanical systems running at peak efficiency. We offer preventive and corrective maintenance contracts backed by genuine spare parts, certified technicians and rapid response across Egypt.\n\nLong-term partnerships are at the heart of our business — we protect your investment well beyond project handover.",
    included: [
      "Scheduled preventive maintenance per manufacturer guidelines",
      "Corrective repairs with genuine OEM spare parts",
      "24/7 emergency response on premium SLA contracts",
      "System performance monitoring and efficiency reporting",
    ],
    benefits: [
      "Reduced unplanned downtime and emergency repair costs",
      "Extended equipment warranty compliance through certified service",
      "Priority access to ERATEC's technical engineering team",
      "Predictable annual maintenance budgeting",
    ],
    workSteps: [
      {
        number: "01",
        title: "System Assessment",
        description: "We review equipment condition, maintenance history and operational priorities.",
      },
      {
        number: "02",
        title: "Maintenance Plan",
        description: "A tailored schedule is defined covering preventive tasks, parts and response times.",
      },
      {
        number: "03",
        title: "Scheduled Service",
        description: "Certified technicians execute maintenance visits with full activity reporting.",
      },
      {
        number: "04",
        title: "Continuous Support",
        description: "Corrective calls, spare parts supply and performance reviews keep systems optimal.",
      },
    ],
  },
  "engineering-consultancy": {
    aboutTitle: "Independent Engineering Consultancy",
    aboutDescription:
      "ERATEC provides independent technical consultancy for HVAC and electromechanical projects — load calculations, system selection, BIM coordination, value engineering and commissioning oversight.\n\nDevelopers, consultants and contractors rely on our engineering depth to de-risk complex projects and optimize design decisions before they reach the site.",
    included: [
      "Cooling and heating load calculations per ASHRAE standards",
      "System selection, schematic design and equipment schedules",
      "BIM coordination and clash detection support",
      "Value engineering, peer review and commissioning oversight",
    ],
    benefits: [
      "Independent, vendor-neutral technical recommendations",
      "Early-stage design optimization to reduce capital and operating cost",
      "Reduced change orders through rigorous upfront engineering",
      "Access to ERATEC's field experience across 500+ projects",
    ],
    workSteps: defaultSteps,
  },
};

export const getServiceDetail = (slug: string): ServiceDetailContent | undefined =>
  serviceDetails[slug];
