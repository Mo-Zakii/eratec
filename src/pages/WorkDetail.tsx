import heroGrid1 from "@/assets/hero-grid-1.jpg";
import heroGrid2 from "@/assets/hero-grid-2.jpg";
import heroGrid3 from "@/assets/hero-grid-3.jpg";
import heroGrid4 from "@/assets/hero-grid-4.jpg";
import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getProjectBySlug } from "@/data/projects";
import { ERATEC_SOCIAL } from "@/lib/brand";
import { Check, CheckCircle2, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const shareLinks = [
  { icon: Facebook, href: ERATEC_SOCIAL.facebook, label: "Facebook" },
  { icon: Instagram, href: ERATEC_SOCIAL.instagram, label: "Instagram" },
  { icon: Linkedin, href: ERATEC_SOCIAL.linkedin, label: "LinkedIn" },
];

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const work = slug ? getProjectBySlug(slug) : null;

  if (!work) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const problem1 = work.problemImages[0];
  const solution1 = work.solutionImages[0];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-20 sm:pt-24 lg:pt-32 bg-card">
        <div className="container-custom section-padding">
          <FadeIn>
            <div className="text-muted-foreground text-sm mb-4 text-center">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-black font-bold text-center mb-4">{work.title}</h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-muted-foreground font-medium text-center max-w-2xl mx-auto mb-12">
              {work.description}
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-[300px] md:h-[500px] object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-card">
        <div className="container-custom pt-20 section-padding">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-0">
            <div className="lg:col-span-2 max-w-full lg:max-w-[640px]">
              <FadeIn>
                <span className="text-primary font-bold uppercase tracking-wider">Project Details</span>
                <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 mb-6">{work.detailTitle}</h2>
                <p className="text-muted-foreground font-medium leading-relaxed mb-8">
                  {work.detailDescription}
                </p>
              </FadeIn>

              <FadeIn delay={100}>
                <h3 className="text-2xl font-bold text-black mb-4">Overview</h3>
                <p className="text-muted-foreground font-medium mb-6">
                  ERATEC delivered this project with full engineering accountability — from design coordination through commissioning and handover.
                </p>
              </FadeIn>

              <FadeIn delay={200}>
                <ul className="space-y-4">
                  {work.overview.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            <div className="w-full mt-8 lg:mt-0 lg:col-span-1 lg:min-w-[460px] lg:-translate-x-[55px]">
              <FadeIn delay={300}>
                <div className="bg-[#f4f4f7] rounded-2xl p-5 sm:p-8 shadow-sm">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <span className="text-black text-2xl font-bold">Client</span>
                      <p className="text-muted-foreground font-semibold">{work.client}</p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-black text-2xl font-bold">Scope</span>
                      <p className="text-muted-foreground font-semibold">{work.budget}</p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-black text-2xl font-bold">Solution</span>
                      <p className="text-muted-foreground font-semibold">{work.services}</p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-black text-2xl font-bold">Location</span>
                      <p className="text-muted-foreground font-semibold">{work.location}</p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-black text-2xl font-bold">Date</span>
                      <p className="text-muted-foreground font-semibold">{work.date}</p>
                    </div>
                    <div>
                      <span className="text-black text-2xl font-bold block mb-3">Share On</span>
                      <div className="flex gap-3">
                        {shareLinks.map((social) => (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white hover:bg-secondary/90 transition-colors"
                          >
                            <social.icon className="w-4 h-4" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card lg:py-32 pb-8 lg:pb-16">
        <div className="grid gap-12 lg:grid-cols-2 container-custom section-padding">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 h-fit">
            <div className="flex flex-col gap-4 flex-1">
              <FadeIn delay={100}>
                <div className="rounded-xl overflow-hidden sm:mt-12 h-48 sm:h-64 lg:h-[320px]">
                  <img src={heroGrid1} alt="HVAC installation on site" className="w-full h-full object-cover" />
                </div>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="rounded-xl overflow-hidden h-44 sm:h-56 lg:h-[280px]">
                  <img src={heroGrid2} alt="VRF outdoor unit installation" className="w-full h-full object-cover" />
                </div>
              </FadeIn>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <FadeIn delay={100}>
                <div className="rounded-xl overflow-hidden h-44 sm:h-56 lg:h-[290px]">
                  <img src={heroGrid3} alt="MEP mechanical room" className="w-full h-full object-cover" />
                </div>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="rounded-xl overflow-hidden h-44 sm:h-56 lg:h-[310px]">
                  <img src={heroGrid4} alt="Engineering team on site" className="w-full h-full object-cover" />
                </div>
              </FadeIn>
            </div>
          </div>

          <div>
            <FadeIn>
              <p className="text-primary font-bold mb-4">Delivery Process</p>
              <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-4">How We Delivered</h3>
              <p className="text-muted-foreground max-w-2xl mb-12">
                Every ERATEC project follows a rigorous engineering-led process from survey and design through installation, commissioning and after-sales support.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
              {work.workSteps.map((step, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="flex flex-col gap-4">
                    <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-lg font-bold">{step.number}</span>
                    </div>
                    <div>
                      <h5 className="text-xl font-bold text-secondary mb-2">{step.title}</h5>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-card lg:py-16 pb-8 lg:pb-16">
        <div className="container-custom section-padding">
          <div className="flex justify-center flex-col items-center w-full mb-20">
            <h2 className="text-black font-bold mb-4">Challenge & Solution</h2>
            <p className="text-muted-foreground font-medium text-center max-w-2xl">
              Understanding the project constraints and engineering outcomes that defined this delivery.
            </p>
          </div>

          <div className="space-y-24">
            <FadeIn>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <h3 className="text-black font-bold mb-4">Challenge</h3>
                  <p className="text-muted-foreground mb-8 font-semibold text-justify leading-relaxed">
                    The client faced significant operational and technical constraints that required an engineering-led approach to resolve.
                  </p>
                  <ul className="space-y-4">
                    {work.problems.map((problem, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-1 text-secondary fill-primary stroke-white flex-shrink-0" />
                        <span className="text-muted-foreground text-lg">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <FadeIn className="h-[90%]">
                  <div className="rounded-3xl h-full overflow-hidden">
                    <img src={problem1} alt="Project challenge context" className="h-full object-cover" />
                  </div>
                </FadeIn>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <FadeIn>
                  <div className="rounded-3xl overflow-hidden">
                    <img src={solution1} alt="ERATEC engineering solution" className="w-full h-auto object-cover" />
                  </div>
                </FadeIn>
                <div>
                  <h3 className="text-black font-bold mb-4">Solution</h3>
                  <p className="text-muted-foreground mb-8 font-semibold text-justify leading-relaxed">
                    ERATEC's engineering team designed and delivered a solution that addressed every constraint while exceeding performance targets.
                  </p>
                  <ul className="space-y-4">
                    {work.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-1 text-secondary fill-primary stroke-white flex-shrink-0" />
                        <span className="text-muted-foreground text-lg">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default WorkDetail;
