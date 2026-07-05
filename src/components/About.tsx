import EratecLogo from "@/components/brand/EratecLogo";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Award, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Award,
    title: "Authorized Hitachi VRF Distributor",
    description:
      "Strategic partnership backing every project with original Hitachi technology, parts and training.",
  },
  {
    icon: Wrench,
    title: "Engineering-Led Delivery",
    description:
      "Certified engineers handle design, BIM coordination, installation and commissioning end-to-end.",
  },
];

const About = () => (
  <section id="about" className="py-20 lg:py-28 bg-card">
    <div className="container-custom section-padding">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <FadeIn>
            <p className="text-secondary font-bold mb-4">Who We Are</p>
            <h2 className="text-primary font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              A Precision-Driven Engineering Partner
            </h2>
            <p className="text-muted-foreground font-medium leading-relaxed mb-8">
              ERATEC was built to bridge the gap between premium global HVAC technology and the
              Egyptian market&apos;s demand for engineering excellence. Today we serve consultants,
              contractors, developers and facility owners with a complete electromechanical portfolio.
            </p>
            <Link to="/about">
              <Button variant="default" size="lg">
                Learn More About ERATEC
              </Button>
            </Link>
          </FadeIn>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={100 + index * 100}>
              <div className="group flex gap-4 sm:gap-5 p-5 sm:p-6 lg:p-7 rounded-2xl border border-primary/10 bg-white hover:border-tertiary/40 transition-colors">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-tertiary" />
                </div>
                <div>
                  <h3 className="text-primary font-bold text-lg sm:text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
                <span className="hidden sm:block ml-auto font-archivo font-black text-5xl text-primary/[0.06] group-hover:text-tertiary/20 transition-colors">
                  0{index + 1}
                </span>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={350}>
            <div className="relative overflow-hidden rounded-2xl bg-primary p-6 lg:p-8 mt-2">
              <div className="absolute -right-8 -bottom-8 w-40 opacity-[0.07] pointer-events-none">
                <EratecLogo variant="mark" className="w-full h-auto" />
              </div>
              <p className="text-tertiary text-xs font-bold uppercase tracking-[0.16em] mb-2">
                Since 2009
              </p>
              <p className="text-white/80 text-sm lg:text-base leading-relaxed max-w-lg relative z-10">
                One team from specification through commissioning — backed by Hitachi VRF
                authorization and a nationwide service network.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

export default About;
