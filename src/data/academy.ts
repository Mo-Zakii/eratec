import hero2 from "@/assets/hero-2.png";
import profile1 from "@/assets/profile-1.png";
import profile2 from "@/assets/profile-2.png";
import profile3 from "@/assets/profile-3.png";
import profile4 from "@/assets/profile-4.png";
import profile5 from "@/assets/profile-5.png";
import profile6 from "@/assets/profile-6.png";
import service1 from "@/assets/service-1.png";
import service2 from "@/assets/service-2.png";
import service3 from "@/assets/service-3.png";
import service5 from "@/assets/service-5.png";
import timeline1 from "@/assets/timeline-1.png";
import timeline2 from "@/assets/timeline-2.png";

export interface AcademyGraduate {
  name: string;
  role: string;
  programSlug: string;
  image: string;
  quote: string;
}

export interface AcademyProgram {
  slug: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  image: string;
  overview: string;
  whatYouLearn: string[];
  whoItsFor: string[];
  outcomes: string[];
}

export const academyHighlights = [
  {
    title: "Manufacturer-Aligned Curriculum",
    description:
      "Training aligned with Hitachi and Bosch Home Comfort standards, delivered by certified ERATEC engineers.",
  },
  {
    title: "Field & Classroom Learning",
    description:
      "Technical classroom sessions combined with supervised workshops and real equipment handling.",
  },
  {
    title: "Career Pathways",
    description:
      "Standout graduates may be considered for roles within ERATEC engineering, commissioning and after-sales teams.",
  },
] as const;

export const academyGraduates: AcademyGraduate[] = [
  {
    name: "Mohamed El-Sayed",
    role: "VRF Field Technician",
    programSlug: "vrf-systems",
    image: profile1,
    quote:
      "The hands-on VRF modules gave me the confidence to commission systems on live projects within weeks of finishing.",
  },
  {
    name: "Yasmin Hafez",
    role: "Junior HVAC Engineer",
    programSlug: "hvac-fundamentals",
    image: profile2,
    quote:
      "ERATEC Academy bridged the gap between university theory and what consultants actually expect on drawings.",
  },
  {
    name: "Karim Mostafa",
    role: "Commissioning Engineer",
    programSlug: "commissioning",
    image: profile3,
    quote:
      "The commissioning program covered testing, documentation and client handover — exactly what I needed for site leadership.",
  },
  {
    name: "Nada Ashraf",
    role: "Maintenance Specialist",
    programSlug: "maintenance",
    image: profile4,
    quote:
      "Preventive maintenance protocols and genuine parts handling were taught by engineers who do this every day.",
  },
  {
    name: "Omar Fathy",
    role: "MEP Site Supervisor",
    programSlug: "vrf-systems",
    image: profile5,
    quote:
      "I came from general contracting. The academy gave me a structured path into specialised HVAC delivery.",
  },
  {
    name: "Laila Nasser",
    role: "Design Support Engineer",
    programSlug: "hvac-fundamentals",
    image: profile6,
    quote:
      "Small cohort sizes meant real attention from instructors — not just slides and certificates.",
  },
];

export const academyPrograms: AcademyProgram[] = [
  {
    slug: "vrf-systems",
    title: "VRF Systems Technician",
    duration: "4 weeks",
    level: "Intermediate",
    description:
      "Hands-on training on Hitachi VRF installation, piping, controls integration and fault diagnostics for field technicians.",
    image: service1,
    overview:
      "This program prepares technicians and junior engineers to install, configure and troubleshoot Hitachi VRF systems to manufacturer standards. Training combines classroom instruction with supervised practical sessions on real equipment.",
    whatYouLearn: [
      "VRF system architecture, refrigerant piping and indoor/outdoor unit coordination",
      "Controls integration, addressing and basic BMS interfacing",
      "Installation best practices, pressure testing and leak detection",
      "Fault diagnostics, common field issues and manufacturer documentation",
    ],
    whoItsFor: [
      "HVAC technicians moving into VRF specialisation",
      "Junior MEP engineers supporting VRF project delivery",
      "Site supervisors overseeing VRF installations",
    ],
    outcomes: [
      "Ability to support VRF installation and commissioning on live projects",
      "Understanding of Hitachi VRF documentation and service procedures",
      "Foundation for ERATEC after-sales and field engineering roles",
    ],
  },
  {
    slug: "hvac-fundamentals",
    title: "HVAC Fundamentals",
    duration: "2 weeks",
    level: "Foundation",
    description:
      "Core principles of refrigeration, load concepts, air distribution and system components for engineers entering the HVAC field.",
    image: service2,
    overview:
      "A foundation program for graduates and career changers entering HVAC. Covers thermodynamics essentials, system types, equipment selection basics and how engineering decisions flow from design to site.",
    whatYouLearn: [
      "Refrigeration cycle fundamentals and psychrometrics basics",
      "Central vs decentralised system types and application contexts",
      "Air distribution, duct design principles and load concepts",
      "Introduction to VRF, chillers, AHUs and common project workflows",
    ],
    whoItsFor: [
      "Fresh engineering graduates entering MEP/HVAC",
      "Technicians seeking structured theory behind field work",
      "Facilities staff transitioning into technical roles",
    ],
    outcomes: [
      "Solid baseline to contribute on HVAC design and site teams",
      "Readiness for intermediate ERATEC Academy programs",
      "Clear understanding of how ERATEC delivers HVAC projects end-to-end",
    ],
  },
  {
    slug: "commissioning",
    title: "Commissioning & Handover",
    duration: "3 weeks",
    level: "Advanced",
    description:
      "Performance testing, documentation, client handover procedures and after-sales readiness for project engineers.",
    image: service3,
    overview:
      "Focused on the critical phase between installation completion and client handover. Engineers learn structured commissioning methods, performance verification and the documentation clients expect at project close-out.",
    whatYouLearn: [
      "Pre-commissioning checks, startup sequences and performance testing",
      "Balancing, set-point verification and energy performance validation",
      "Snag lists, O&M documentation and training handover packs",
      "Coordination with consultants, contractors and facility teams",
    ],
    whoItsFor: [
      "Project engineers leading HVAC close-out",
      "Commissioning specialists on hospitality and commercial projects",
      "After-sales engineers supporting warranty periods",
    ],
    outcomes: [
      "Ability to lead structured commissioning on ERATEC projects",
      "Professional handover documentation aligned with client expectations",
      "Reduced rework and smoother transition to maintenance contracts",
    ],
  },
  {
    slug: "maintenance",
    title: "Preventive Maintenance",
    duration: "2 weeks",
    level: "Intermediate",
    description:
      "Scheduled maintenance protocols, genuine parts handling and troubleshooting for central and VRF systems.",
    image: service5,
    overview:
      "Built for technicians and after-sales teams responsible for keeping HVAC systems running at peak efficiency. Covers preventive schedules, diagnostic workflows and ERATEC's approach to long-term client support.",
    whatYouLearn: [
      "Preventive maintenance scheduling for central plant and VRF systems",
      "Genuine parts identification, handling and warranty considerations",
      "Common failure modes, root-cause troubleshooting and reporting",
      "Client communication, SLA response and service documentation",
    ],
    whoItsFor: [
      "After-sales technicians and service engineers",
      "Facilities teams managing ERATEC-installed systems",
      "Field staff supporting maintenance contracts",
    ],
    outcomes: [
      "Structured approach to preventive and corrective maintenance",
      "Reduced downtime through systematic diagnostics",
      "Pathway into ERATEC after-sales and service contract teams",
    ],
  },
];

export const academyHeroImage = hero2;
export const academyGalleryImages = [timeline1, timeline2, service2, hero2];

export const getAcademyProgramBySlug = (slug: string): AcademyProgram | undefined =>
  academyPrograms.find((p) => p.slug === slug);

export const getGraduatesByProgram = (slug: string): AcademyGraduate[] =>
  academyGraduates.filter((g) => g.programSlug === slug);
