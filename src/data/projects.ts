import work1 from "@/assets/work-1.png";
import work2 from "@/assets/work-2.png";
import work3 from "@/assets/work-3.png";
import work4 from "@/assets/work-4.png";
import work5 from "@/assets/work-5.png";
import work6 from "@/assets/work-6.png";
import problem1 from "@/assets/problem-1.png";
import problem2 from "@/assets/problem-11.png";
import solution1 from "@/assets/solution-1.png";
import solution2 from "@/assets/solution-11.png";

export interface Project {
  slug: string;
  image: string;
  title: string;
  description: string;
  detailTitle: string;
  detailDescription: string;
  overview: string[];
  client: string;
  budget: string;
  services: string;
  location: string;
  date: string;
  workSteps: { number: string; title: string; description: string }[];
  problems: string[];
  solutions: string[];
  problemImages: [string, string];
  solutionImages: [string, string];
}

const projectSteps = [
  {
    number: "01",
    title: "Engineering & Design",
    description: "Load calculations, equipment selection and detailed coordination with the project consultant.",
  },
  {
    number: "02",
    title: "Procurement & Logistics",
    description: "Genuine equipment supply, site delivery scheduling and quality inspection on arrival.",
  },
  {
    number: "03",
    title: "Installation & Integration",
    description: "Certified installation teams execute piping, electrical and controls integration on site.",
  },
  {
    number: "04",
    title: "Commissioning & Handover",
    description: "Performance testing, documentation delivery and operator training before final sign-off.",
  },
];

export const projects: Project[] = [
  {
    slug: "luxury-hotel-central-hvac",
    image: work1,
    title: "Luxury Hotel — Central HVAC",
    description:
      "Full central HVAC design and installation for a flagship five-star hotel, integrating chillers, AHUs and zoned controls across 280 guest rooms and public areas.",
    detailTitle: "Five-Star Hospitality Climate Control",
    detailDescription:
      "ERATEC delivered a complete central HVAC solution for a premium Cairo hotel property. The project required precise temperature and humidity control across guest rooms, ballrooms, kitchens and spa facilities while meeting strict noise and energy efficiency targets.",
    overview: [
      "3× water-cooled chillers with variable speed drives for part-load efficiency",
      "Custom AHUs with HEPA filtration for lobby and ballroom zones",
      "BMS integration for remote monitoring and energy analytics",
    ],
    client: "Nile Hospitality Group",
    budget: "Confidential",
    services: "Central HVAC Solutions",
    location: "New Cairo, Egypt",
    date: "March 2025",
    workSteps: projectSteps,
    problems: [
      "Aging chiller plant operating at 40% below design efficiency",
      "Inconsistent temperature control causing guest comfort complaints",
      "No centralized monitoring — reactive maintenance only",
    ],
    solutions: [
      "Replaced legacy chillers with high-efficiency variable speed units",
      "Redesigned air distribution for uniform comfort across all zones",
      "Integrated BMS with predictive maintenance alerts",
    ],
    problemImages: [problem1, problem2],
    solutionImages: [solution1, solution2],
  },
  {
    slug: "hospital-vrf-deployment",
    image: work2,
    title: "Hospital VRF Deployment",
    description:
      "Hitachi VRF systems engineered for a multi-wing private hospital, delivering precise temperature control, infection control compliance and energy efficiency.",
    detailTitle: "Healthcare-Grade VRF Climate Systems",
    detailDescription:
      "This hospital project demanded independent zone control across operating theatres, patient wards and diagnostic suites. ERATEC specified and installed Hitachi VRF systems with dedicated fresh air handling and advanced filtration to meet healthcare air quality standards.",
    overview: [
      "Hitachi VRF outdoor plant serving 120+ indoor units",
      "Dedicated fresh air systems for critical care zones",
      "Redundant controls architecture for 24/7 reliability",
    ],
    client: "Cairo Medical Complex",
    budget: "Confidential",
    services: "Hitachi VRF Systems",
    location: "6th of October City, Egypt",
    date: "November 2024",
    workSteps: projectSteps,
    problems: [
      "Legacy split systems unable to meet healthcare air quality standards",
      "High energy consumption across 24/7 operation",
      "Limited independent zone control in critical areas",
    ],
    solutions: [
      "Deployed Hitachi VRF with healthcare-grade filtration",
      "Achieved 35% reduction in cooling energy consumption",
      "Enabled independent temperature control per ward and theatre",
    ],
    problemImages: [problem1, problem2],
    solutionImages: [solution1, solution2],
  },
  {
    slug: "commercial-tower-vrf",
    image: work3,
    title: "Commercial Tower VRF",
    description:
      "Rooftop VRF condenser plant for a Cairo commercial tower, optimized for load profile, serviceability and long-term operating cost.",
    detailTitle: "High-Rise Commercial VRF Plant",
    detailDescription:
      "A 22-storey commercial office tower required a scalable cooling solution that could adapt to varying tenant loads. ERATEC designed a modular Hitachi VRF rooftop plant with phased installation to minimize disruption to existing occupants.",
    overview: [
      "Modular VRF outdoor units with staged capacity expansion",
      "Tenant-ready indoor units with individual metering capability",
      "Rooftop structural assessment and vibration isolation",
    ],
    client: "Urban Developments Ltd.",
    budget: "Confidential",
    services: "Hitachi VRF Systems",
    location: "Nasr City, Cairo, Egypt",
    date: "June 2024",
    workSteps: projectSteps,
    problems: [
      "No centralized cooling — tenants using inefficient standalone units",
      "Rooftop space constraints limiting equipment options",
      "Phased occupancy requiring modular capacity expansion",
    ],
    solutions: [
      "Compact Hitachi VRF plant maximizing available rooftop area",
      "Phased deployment aligned with floor fit-out schedule",
      "Centralized maintenance access reducing lifecycle service cost",
    ],
    problemImages: [problem1, problem2],
    solutionImages: [solution1, solution2],
  },
  {
    slug: "industrial-facility-mep",
    image: work4,
    title: "Industrial Facility MEP",
    description:
      "Turnkey electromechanical package for a manufacturing facility — power, HVAC, fire-fighting and process cooling integrated under one delivery contract.",
    detailTitle: "Integrated Industrial MEP Delivery",
    detailDescription:
      "ERATEC served as the electromechanical contractor for a new industrial manufacturing plant, coordinating power distribution, process cooling, ventilation and fire-fighting systems within a tight construction schedule.",
    overview: [
      "Medium-voltage power distribution and LV panel installation",
      "Process cooling chillers and industrial ventilation systems",
      "Fire-fighting pump room and sprinkler network",
    ],
    client: "Delta Manufacturing Co.",
    budget: "Confidential",
    services: "Electromechanical Contracting",
    location: "10th of Ramadan City, Egypt",
    date: "January 2024",
    workSteps: projectSteps,
    problems: [
      "Multiple subcontractors creating coordination delays",
      "Process cooling requirements exceeding standard HVAC capacity",
      "Compressed construction timeline with penalty clauses",
    ],
    solutions: [
      "Single MEP contractor accountability across all disciplines",
      "Custom process cooling design meeting production line specs",
      "Accelerated installation with parallel work streams",
    ],
    problemImages: [problem1, problem2],
    solutionImages: [solution1, solution2],
  },
  {
    slug: "retail-complex-retrofit",
    image: work5,
    title: "Retail Complex Retrofit",
    description:
      "Energy-efficient HVAC retrofit for a major retail complex — replacing aging equipment with modern systems that cut operating costs by 30%.",
    detailTitle: "Sustainable Retail HVAC Retrofit",
    detailDescription:
      "This open-air retail complex suffered from unreliable cooling and escalating energy bills. ERATEC conducted a comprehensive energy audit and executed a phased retrofit that maintained tenant operations throughout the upgrade.",
    overview: [
      "Energy audit identifying 30%+ savings opportunity",
      "Phased chiller and AHU replacement during off-peak hours",
      "Smart controls with demand-based cooling optimization",
    ],
    client: "Mall of the Capital",
    budget: "Confidential",
    services: "Energy-Efficient Retrofits",
    location: "Sheikh Zayed City, Egypt",
    date: "September 2023",
    workSteps: projectSteps,
    problems: [
      "Chiller plant beyond end of useful life with frequent breakdowns",
      "Energy costs consuming 18% of facility operating budget",
      "Tenant comfort complaints during peak summer months",
    ],
    solutions: [
      "Replaced aging plant with high-efficiency equipment",
      "Achieved 30% reduction in annual cooling energy cost",
      "Zero tenant disruption through night-shift phased installation",
    ],
    problemImages: [problem1, problem2],
    solutionImages: [solution1, solution2],
  },
  {
    slug: "residential-compound-vrf",
    image: work6,
    title: "Residential Compound VRF",
    description:
      "Hitachi VRF deployment across a gated residential compound — 200+ villas with individual zone control and centralized maintenance support.",
    detailTitle: "Gated Community VRF Programme",
    detailDescription:
      "A premium residential compound required a uniform, high-quality cooling solution across 200+ villas. ERATEC delivered a standardized Hitachi VRF package with compound-wide maintenance support and a dedicated after-sales team.",
    overview: [
      "Standardized VRF package for 200+ villa units",
      "Compound-wide preventive maintenance programme",
      "Centralized spare parts inventory for rapid response",
    ],
    client: "Green Valley Developments",
    budget: "Confidential",
    services: "Hitachi VRF Systems",
    location: "North Coast, Egypt",
    date: "May 2023",
    workSteps: projectSteps,
    problems: [
      "Inconsistent cooling quality across villa units",
      "No centralized maintenance — owners managing individually",
      "High noise levels from conventional outdoor units",
    ],
    solutions: [
      "Uniform Hitachi VRF specification across all units",
      "ERATEC compound maintenance contract with SLA guarantees",
      "Quiet outdoor units meeting residential noise regulations",
    ],
    problemImages: [problem1, problem2],
    solutionImages: [solution1, solution2],
  },
];

const featuredSlugs = [
  "hospital-vrf-deployment",
  "luxury-hotel-central-hvac",
  "commercial-tower-vrf",
] as const;

export const featuredProjects = featuredSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is Project => p !== undefined);

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
