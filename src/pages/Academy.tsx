import AcademyGallerySlider from "@/components/academy/AcademyGallerySlider";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  academyGalleryImages,
  academyHeroImage,
  academyHighlights,
  academyPrograms,
} from "@/data/academy";
import { ArrowUpRight, Clock, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Academy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero with image */}
      <section className="pt-28 pb-0 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_75%_45%,rgba(181,252,2,0.09),transparent)]" />
        <div className="container-custom section-padding relative pb-12 lg:pb-16">
          <FadeIn>
            <div className="flex items-center gap-2 text-sm mb-5">
              <Link to="/" className="text-white/45 hover:text-tertiary transition-colors">
                Home
              </Link>
              <span className="text-white/25">/</span>
              <span className="text-tertiary font-semibold">Academy</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
              <div>
                <p className="text-tertiary text-xs font-bold uppercase tracking-[0.16em] mb-4">
                  ERATEC Academy
                </p>
                <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
                  Train With Engineers Who Build Real Projects
                </h1>
                <p className="text-white/55 text-base sm:text-lg leading-relaxed max-w-xl">
                  Practical HVAC and electromechanical programs for technicians and engineers —
                  manufacturer-aligned, field-tested and designed to open doors at ERATEC and across
                  the industry.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={academyHeroImage}
                  alt="ERATEC Academy training session"
                  className="w-full h-[260px] sm:h-[320px] lg:h-[360px] object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Training gallery */}
      <section className="py-12 lg:py-16 bg-white overflow-hidden border-b border-primary/5">
        <div className="container-custom section-padding mb-8">
          <FadeIn>
            <p className="text-secondary font-bold mb-3">On Site & In Class</p>
            <h2 className="text-primary font-bold text-3xl sm:text-4xl">Training in Action</h2>
          </FadeIn>
        </div>
        <FadeIn delay={100}>
          <AcademyGallerySlider images={academyGalleryImages} />
        </FadeIn>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-20 bg-white border-b border-primary/5">
        <div className="container-custom section-padding">
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {academyHighlights.map((item, index) => (
              <FadeIn key={item.title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-primary/10 bg-card p-6 lg:p-7 hover:border-tertiary/30 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center mb-5">
                    <GraduationCap className="w-5 h-5 text-tertiary" />
                  </div>
                  <h3 className="text-primary font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Programs grid */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container-custom section-padding">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <p className="text-secondary font-bold mb-3">Training Programs</p>
                <h2 className="text-primary font-bold text-3xl sm:text-4xl">Choose Your Path</h2>
              </div>
              <Link
                to="/career"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-tertiary transition-colors"
              >
                Looking for a job? View careers
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {academyPrograms.map((program, index) => (
              <FadeIn key={program.slug} delay={index * 80}>
                <Link
                  to={`/academy/${program.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-primary/10 bg-white hover:border-tertiary/30 transition-colors"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-52 sm:h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                      <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-tertiary text-primary">
                        {program.level}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-white/20 text-white flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {program.duration}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-primary font-bold text-xl mb-2 group-hover:text-tertiary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                      {program.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-tertiary">
                      View program
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academy;
