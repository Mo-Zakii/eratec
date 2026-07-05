import service1 from "@/assets/service-1.png";
import service2 from "@/assets/service-2.png";
import service3 from "@/assets/service-3.png";
import service4 from "@/assets/service-4.png";
import service5 from "@/assets/service-5.png";
import service6 from "@/assets/service-6.png";

export interface Service {
  number: string;
  image: string;
  title: string;
  slug: string;
  description: string;
  basePrice: number; // Base consultancy/project fee unit (USD-equivalent)
  complexityOptions: ComplexityOption[];
}

export interface ComplexityOption {
  label: string;
  multiplier: number;
  description: string;
}

export const services: Service[] = [
  {
    number: "01",
    image: service1,
    title: "Hitachi VRF Systems",
    slug: "hitachi-vrf-systems",
    description:
      "As an authorized distributor of Hitachi VRF, we deliver advanced variable refrigerant flow systems engineered for energy efficiency, zoned comfort, and long-term reliability across commercial and residential projects.",
    basePrice: 250,
    complexityOptions: [
      { label: "Small Scale", multiplier: 1, description: "Up to 10 indoor units / single floor" },
      { label: "Medium Scale", multiplier: 2.5, description: "Multi-floor or mixed-use building" },
      { label: "Large Scale", multiplier: 5, description: "Full tower, hotel, or campus deployment" },
    ],
  },
  {
    number: "02",
    image: service2,
    title: "Central HVAC Solutions",
    slug: "central-hvac-solutions",
    description:
      "Design, supply and installation of chillers, AHUs, FCUs and central air-conditioning systems tailored to the load profile, climate and operational goals of your facility.",
    basePrice: 300,
    complexityOptions: [
      { label: "Standard System", multiplier: 1, description: "Single zone / standard load" },
      { label: "Custom System", multiplier: 2.5, description: "Multi-zone, custom controls" },
      { label: "Mission-Critical", multiplier: 4.5, description: "Hospital, data center, industrial" },
    ],
  },
  {
    number: "03",
    image: service3,
    title: "Electromechanical Contracting",
    slug: "electromechanical-contracting",
    description:
      "End-to-end MEP contracting: power distribution, low-current systems, fire-fighting, plumbing and HVAC integration — delivered by certified engineers and skilled technicians.",
    basePrice: 200,
    complexityOptions: [
      { label: "Fit-out", multiplier: 1, description: "Tenant fit-out / partial MEP scope" },
      { label: "Full Building", multiplier: 3, description: "Full MEP package for a building" },
      { label: "Turnkey Project", multiplier: 5, description: "Turnkey delivery across multiple disciplines" },
    ],
  },
  {
    number: "04",
    image: service4,
    title: "Energy-Efficient Retrofits",
    slug: "energy-efficient-retrofits",
    description:
      "Upgrade aging HVAC and electromechanical infrastructure to modern, low-carbon systems. Cut operating cost, meet sustainability targets, and extend asset lifecycle.",
    basePrice: 220,
    complexityOptions: [
      { label: "Audit & Plan", multiplier: 0.75, description: "Energy audit + retrofit roadmap" },
      { label: "Partial Retrofit", multiplier: 2, description: "Targeted equipment replacement" },
      { label: "Deep Retrofit", multiplier: 4, description: "Full system overhaul + controls" },
    ],
  },
  {
    number: "05",
    image: service5,
    title: "After-Sales & Maintenance",
    slug: "after-sales-maintenance",
    description:
      "Preventive and corrective maintenance contracts that keep your systems running at peak efficiency. Genuine spare parts, certified technicians, and rapid response across Egypt.",
    basePrice: 120,
    complexityOptions: [
      { label: "Basic Plan", multiplier: 1, description: "Scheduled preventive maintenance" },
      { label: "Comprehensive", multiplier: 1.75, description: "Preventive + corrective + parts" },
      { label: "Premium SLA", multiplier: 2.5, description: "24/7 priority response + analytics" },
    ],
  },
  {
    number: "06",
    image: service6,
    title: "Engineering Consultancy",
    slug: "engineering-consultancy",
    description:
      "Independent technical consultancy for HVAC and electromechanical projects — load calculations, system selection, BIM coordination, commissioning and value engineering.",
    basePrice: 180,
    complexityOptions: [
      { label: "Advisory", multiplier: 1, description: "Spot consultation / design review" },
      { label: "Project Consultancy", multiplier: 2.5, description: "Full design package for a project" },
      { label: "Program Advisor", multiplier: 4, description: "Ongoing advisory across a portfolio" },
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((s) => s.slug === slug);
};
