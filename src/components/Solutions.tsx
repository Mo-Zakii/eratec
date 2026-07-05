import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Sparkles,
    num: "01",
    title: "Premium Technology Partners",
    description:
      "Hitachi VRF and other tier-one manufacturers give every project a foundation of proven, efficient and durable hardware.",
  },
  {
    icon: Leaf,
    num: "02",
    title: "Sustainability by Design",
    description:
      "Every system we specify is sized and configured for the lowest viable energy use over the asset's full life.",
  },
  {
    icon: ShieldCheck,
    num: "03",
    title: "Long-Term After-Sales Support",
    description:
      "Maintenance contracts, genuine spare parts and rapid response keep your investment performing for years.",
  },
];

const Solutions = () => (
  <section className="py-20 lg:py-28 bg-[#0A0A0A] relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_0%,rgba(181,252,2,0.08),transparent)]" />
    <div className="absolute top-0 inset-x-0 h-px bg-white/10" />

    <div className="container-custom section-padding relative">
      <div className="max-w-3xl mb-12 lg:mb-16">
        <FadeIn>
          <p className="text-tertiary font-bold mb-4">Why Choose ERATEC</p>
          <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
            HVAC &amp; MEP Solutions Engineered Around Your Project
          </h2>
          <p className="text-white/55 font-medium leading-relaxed">
            We earn trust by combining technical depth with disciplined execution — supporting
            consultants, contractors and owners from concept through commissioning and beyond.
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-12">
        {features.map((feature, index) => (
          <FadeIn key={feature.title} delay={100 + index * 80}>
            <div className="h-full flex flex-col p-6 lg:p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-tertiary/30 transition-colors">
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-tertiary/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-tertiary" />
                </div>
                <span className="font-archivo font-black text-tertiary/30 text-sm">
                  {feature.num}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed flex-1">{feature.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={400}>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Talk to an Engineer
          </Button>
        </Link>
      </FadeIn>
    </div>
  </section>
);

export default Solutions;
