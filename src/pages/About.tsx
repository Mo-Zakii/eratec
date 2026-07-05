import aboutHero from "@/assets/about-hero-1.png";
import mission from "@/assets/mission-1.png";
import vision from "@/assets/mission-2.png";
import heroGrid1 from "@/assets/timeline-1.png";
import heroGrid2 from "@/assets/timeline-2.png";
import heroGrid3 from "@/assets/timeline-3.png";
import heroGrid4 from "@/assets/timeline-4.png";
import CounterAnimation from "@/components/CounterAnimation";
import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useCareers } from "@/hooks/useCareers";
import { ArrowUpRight, Briefcase, CheckCircle2, Clock3, Heart, MapPin, Shield, ShieldCheck, Users, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const stats = [{
  value: 15,
  suffix: "+",
  label: "Years Experience",
  decimals: 0
}, {
  value: 500,
  suffix: "+",
  label: "Projects Delivered",
  decimals: 0
}, {
  value: 40,
  suffix: "+",
  label: "Engineers & Technicians",
  decimals: 0
}, {
  value: 6,
  suffix: "",
  label: "Industry Sectors",
  decimals: 0
}];
const timelineData = [{
  year: "2008",
  title: "Company Founded",
  description: "ERATEC was established in Cairo with a focus on delivering premium electromechanical and HVAC solutions to the Egyptian market.",
  image: heroGrid1,
  position: "left"
}, {
  year: "2014",
  title: "Hitachi Partnership",
  description: "Became an authorized distributor of Hitachi VRF systems, strengthening our position as a technology-led engineering partner.",
  image: heroGrid2,
  position: "right"
}, {
  year: "2019",
  title: "National Expansion",
  description: "Expanded operations across Egypt with 500+ completed projects spanning hospitality, healthcare, industrial and commercial sectors.",
  image: heroGrid3,
  position: "left"
}, {
  year: "2023",
  title: "ERATEC Today",
  description: "A precision-driven engineering partner delivering advanced HVAC and electromechanical solutions — from consultancy and installation to long-term after-sales support.",
  image: heroGrid4,
  position: "right"
}];
const coreValues = [{
  title: "Technical Expertise",
  description: "Our certified engineers bring deep HVAC and electromechanical knowledge to every project, from load calculations to commissioning.",
  icon: Users
}, {
  title: "Engineering Rigor",
  description: "We follow rigorous design and delivery processes that ensure systems perform to specification across their full lifecycle.",
  icon: Zap
}, {
  title: "Reliable Delivery",
  description: "On-time project execution backed by experienced site teams and single-point accountability across all MEP disciplines.",
  icon: Clock3
}, {
  title: "Sustainability Commitment",
  description: "We prioritize energy-efficient systems and eco-friendly practices that reduce carbon footprint and operating costs.",
  icon: Heart
}, {
  title: "International Partnerships",
  description: "As an authorized Hitachi VRF distributor, we deliver genuine technology backed by manufacturer warranty and support.",
  icon: Shield
}, {
  title: "After-Sales Excellence",
  description: "Long-term maintenance contracts, genuine spare parts and rapid response keep your systems running at peak efficiency.",
  icon: ShieldCheck
}];
const missionFeatures = ["Deliver precision-engineered HVAC and electromechanical solutions that exceed client expectations.", "Uphold integrity, transparency and technical excellence in every project engagement.", "Champion sustainability through energy-efficient system design and eco-friendly practices."];
const visionFeatures = ["Be the leading engineering partner for HVAC and electromechanical solutions in Egypt and the wider region.", "Set the industry standard for technical expertise, reliability and after-sales support.", "Contribute to a luxurious, eco-friendly built environment through innovative climate technology."];

const About = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animatedYears, setAnimatedYears] = useState<Set<number>>(new Set());
  const { data: careers, isLoading: careersLoading } = useCareers();

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const timelineHeight = timelineRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate how much of the timeline has been scrolled past
      const startOffset = windowHeight * 0.9; // Start filling when timeline is 10% from top
      const scrolled = startOffset - rect.top;
      const totalScrollable = timelineHeight + startOffset - windowHeight * 0.3;

      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      setScrollProgress(progress);

      // Track which years have become active
      timelineData.forEach((_, index) => {
        const itemProgress = (index + 1) / timelineData.length;
        const isActive = progress >= itemProgress - 0.15;
        if (isActive && !animatedYears.has(index)) {
          setAnimatedYears(prev => new Set(prev).add(index));
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [animatedYears]);
  return <div className="min-h-screen">
    <Header />
    <main>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 lg:pb-32 bg-primary-foreground text-primary">
        <div className="container-custom section-padding text-primary-foreground">
          <FadeIn>
            <div className="flex flex-col lg:flex-row w-full gap-6 sm:gap-8 lg:gap-12 lg:items-end lg:justify-between mb-8 sm:mb-12">
              <div>
                <h1 className="leading-tight text-black font-bold text-3xl sm:text-4xl lg:text-6xl">
                  Engineering Excellence in HVAC &amp; Electromechanical
                </h1>
              </div>
              <div className="lg:max-w-[468px]">
                <p className="text-black text-sm sm:text-base leading-relaxed">
                  ERATEC is a precision-driven engineering partner delivering advanced HVAC, Hitachi VRF and electromechanical solutions across Egypt — trusted by consultants, contractors and developers nationwide.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="relative pb-4 sm:pb-24 lg:pb-32">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden">
                <img src={aboutHero} alt="ERATEC engineering team" className="w-full h-52 sm:h-72 lg:h-[500px] object-cover" />
              </div>

              <div className="relative sm:absolute sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 sm:translate-y-1/2 mt-5 sm:mt-0 w-full sm:w-auto sm:max-w-4xl bg-white rounded-2xl shadow-xl px-4 py-4 sm:px-8 sm:py-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-0 sm:flex sm:divide-x sm:divide-gray-200">
                  {stats.map((stat, index) => (
                    <div key={index} className="sm:px-6 sm:first:pl-0 sm:last:pr-0 text-center">
                      <div className="flex items-baseline justify-center gap-0.5 text-xl sm:text-3xl lg:text-5xl font-bold mb-1 text-primary">
                        <CounterAnimation
                          target={stat.value}
                          decimals={stat.decimals}
                          suffix={stat.suffix}
                          duration={2000}
                          suffixClassName="text-tertiary"
                        />
                      </div>
                      <p className="text-muted-foreground text-[11px] sm:text-sm mt-1 leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-24 lg:py-40 bg-primary">
        <div className="container-custom section-padding">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-tertiary font-bold mb-3 sm:mb-4">Our Story</p>
            <h2 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold">Know More About Us</h2>
          </div>

          {/* Mobile timeline — card stack */}
          <div className="lg:hidden space-y-5">
            {timelineData.map((item, index) => (
              <FadeIn key={item.year} delay={index * 80}>
                <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
                  <img src={item.image} alt={item.title} className="w-full h-44 sm:h-52 object-cover" />
                  <div className="p-4 sm:p-5">
                    <span className="inline-block bg-tertiary text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {item.year}
                    </span>
                    <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          {/* Desktop timeline */}
          <div className="relative hidden lg:block" ref={timelineRef}>
            {/* Center Line - Background */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2 hidden lg:block" />

            {/* Center Line - Animated Fill */}
            <div
              className="absolute left-1/2 top-0 w-0.5 bg-tertiary -translate-x-1/2 hidden lg:block transition-all duration-100 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            />

            <div className="space-y-16">
              {timelineData.map((item, index) => {
                const itemProgress = (index + 1) / timelineData.length;
                const isActive = scrollProgress >= itemProgress - 0.15;
                const hasBeenAnimated = animatedYears.has(index);
                const shouldAnimate = hasBeenAnimated && isActive;

                return (
                  <FadeIn key={index} delay={index * 150}>
                    <div className={`flex flex-col lg:flex-row items-center gap-8 ${item.position === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Image Side */}
                      <div className={`w-full lg:w-5/12 transition-all duration-700 ${shouldAnimate
                        ? 'opacity-100 translate-y-0'
                        : hasBeenAnimated
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-8'
                        }`}>
                        <div className="rounded-2xl overflow-hidden">
                          <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                        </div>
                        {item.position === 'left' && <div className="mt-6 lg:block hidden">
                          <h4 className="text-white font-bold mb-2">{item.title === "Hitachi Partnership" || item.title === "ERATEC Today" ? item.title : ""}</h4>
                          {(item.title === "Hitachi Partnership" || item.title === "ERATEC Today") && <p className="text-white/60 text-sm">{item.description}</p>}
                        </div>}
                      </div>

                      {/* Year Badge */}
                      <div className="lg:w-2/12 flex justify-center relative">
                        <div
                          className={`font-bold px-4 py-2 rounded-full text-sm z-10 transition-all duration-500 ${isActive
                            ? 'bg-tertiary text-primary scale-110'
                            : 'bg-white/20 text-white/60'
                            }`}
                        >
                          {item.year}
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className={`w-full lg:w-5/12 transition-all duration-700 ${shouldAnimate
                        ? 'opacity-100 translate-y-0'
                        : hasBeenAnimated
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-8'
                        }`}>
                        <h4 className={`font-bold mb-3 transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/60'}`}>{item.title}</h4>
                        <p className={`text-sm leading-relaxed transition-colors duration-500 ${isActive ? 'text-white/80' : 'text-white/40'}`}>{item.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-14 sm:py-20 lg:py-32 bg-[#F0F3F8]">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16">
            <div>
              <p className="text-secondary font-bold mb-3 sm:mb-4">Values</p>
              <h2 className="text-primary text-2xl sm:text-4xl lg:text-5xl font-bold">Our Core Values</h2>
            </div>
            <div className="flex items-center">
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                We believe in the power of engineering excellence. Our team of certified HVAC and electromechanical professionals collaborates across disciplines to deliver integrated solutions for the most demanding projects.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {coreValues.map((value, index) => <FadeIn key={index} delay={index * 100}>
              <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-100 h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center mb-4 sm:mb-6">
                  <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-tertiary" />
                </div>
                <h5 className="text-primary font-bold text-lg sm:text-xl mb-2 sm:mb-3">{value.title}</h5>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            </FadeIn>)}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-14 sm:py-20 lg:py-32 bg-white">
        <div className="container-custom section-padding">
          <div className="text-center mb-12 sm:mb-20">
            <p className="text-secondary font-bold mb-3 sm:mb-4">Mission & Vision</p>
            <h2 className="text-black font-bold text-2xl sm:text-4xl lg:text-5xl">A Luxurious Eco-Friendly World</h2>
          </div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            <FadeIn>
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                <div className="rounded-2xl overflow-hidden order-1">
                  <img src={mission} alt="Our Mission" className="w-full h-56 sm:h-80 lg:h-96 object-cover" />
                </div>
                <div className="order-2">
                  <h3 className="text-black font-bold text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4">Our Mission</h3>
                  <p className="text-muted-foreground mb-6 sm:mb-8 font-medium sm:font-semibold leading-relaxed text-sm sm:text-base">
                    At ERATEC, our mission is to deliver precision-engineered HVAC and electromechanical solutions that ensure comfort, efficiency and sustainability. We are committed to technical excellence, reliable delivery and long-term after-sales support for every client.
                  </p>
                  <ul className="space-y-3 sm:space-y-4">
                    {missionFeatures.map((feature, index) => <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 sm:mt-1 text-secondary fill-primary stroke-white flex-shrink-0" />
                      <span className="text-muted-foreground text-sm sm:text-base lg:text-lg">{feature}</span>
                    </li>)}
                  </ul>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-black font-bold text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4">Our Vision</h3>
                  <p className="text-muted-foreground mb-6 sm:mb-8 font-medium sm:font-semibold leading-relaxed text-sm sm:text-base">
                    Our vision is to be the leading engineering partner for HVAC and electromechanical solutions in Egypt — recognized for technical expertise, international partnerships, sustainability and unwavering after-sales commitment.
                  </p>
                  <ul className="space-y-3 sm:space-y-4">
                    {visionFeatures.map((feature, index) => <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 sm:mt-1 text-secondary fill-primary stroke-white flex-shrink-0" />
                      <span className="text-muted-foreground text-sm sm:text-base lg:text-lg">{feature}</span>
                    </li>)}
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden order-1 lg:order-2">
                  <img src={vision} alt="Our Vision" className="w-full h-56 sm:h-80 lg:h-96 object-cover" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="pt-14 sm:pt-20 lg:pt-32 pb-8 sm:pb-12 bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div>
              <p className="text-secondary font-bold mb-3 sm:mb-4">Career</p>
              <h2 className="text-primary text-2xl sm:text-4xl lg:text-5xl font-bold">
                Opportunities to Join Our Team
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                We offer a dynamic and supportive work environment that encourages professional growth and development. As part of our team, you'll have the opportunity to work on diverse projects.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {careersLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4" />
                <p className="text-muted-foreground">Loading positions...</p>
              </div>
            ) : careers && careers.length > 0 ? (
              careers.map((otherJob, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <Link
                    to={`/career/${otherJob.slug}`}
                    className={`bg-[#E8ECF4] cursor-pointer rounded-xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between hover:bg-accent transition-all group duration-300`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 flex-wrap w-full sm:w-auto">
                      <h5 className="text-primary font-bold sm:min-w-[200px]">
                        {otherJob.title}
                      </h5>
                      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 sm:gap-6">
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Briefcase className="w-4 h-4" />
                          {otherJob.type}
                        </span>
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {otherJob.location}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-secondary self-end sm:self-auto shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </FadeIn>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-6">No positions available at the moment.</p>
                <Link to="/career" className="text-primary font-semibold hover:text-tertiary">
                  Visit Careers page →
                </Link>
              </div>
            )}
          </div>
          {careers && careers.length > 0 && (
            <FadeIn delay={200}>
              <div className="text-center mt-10">
                <Link to="/career">
                  <Button variant="default" size="lg">View All Careers & Life at ERATEC</Button>
                </Link>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
      <CTA />
    </main>
    <Footer />
  </div>;
};
export default About;
