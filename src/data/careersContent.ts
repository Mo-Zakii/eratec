import hero2 from "@/assets/hero-2.png";
import timeline1 from "@/assets/timeline-1.png";
import timeline2 from "@/assets/timeline-2.png";

export const lifeAtEratecGallery = [
  { src: hero2, caption: "Engineering workshops & team collaboration" },
  { src: timeline1, caption: "On-site project delivery" },
  { src: timeline2, caption: "Commissioning & handover" },
] as const;

export const lifeAtEratecStats = [
  { value: "200+", label: "Trained Engineers" },
  { value: "100+", label: "Projects Delivered" },
  { value: "5+", label: "Years Building Teams" },
] as const;
