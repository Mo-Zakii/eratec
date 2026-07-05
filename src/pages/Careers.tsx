import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { lifeAtEratecGallery, lifeAtEratecStats } from "@/data/careersContent";
import { useCareers } from "@/hooks/useCareers";
import { ArrowUpRight, Briefcase, GraduationCap, Loader2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const { data: careers, isLoading } = useCareers();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 sm:pt-28 pb-12 px-4 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_75%_45%,rgba(181,252,2,0.09),transparent)]" />
        <div className="container-custom section-padding relative">
          <FadeIn>
            <div className="flex items-center gap-2 text-sm mb-5">
              <Link to="/" className="text-white/45 hover:text-tertiary transition-colors">
                Home
              </Link>
              <span className="text-white/25">/</span>
              <span className="text-tertiary font-semibold">Careers</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-end">
              <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Build Your Career at ERATEC
              </h1>
              <p className="text-white/55 text-base sm:text-lg leading-relaxed">
                Join a precision-driven engineering team delivering advanced HVAC and electromechanical
                solutions across Egypt. Explore open roles and discover what life at ERATEC looks like.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Open positions */}
      <section id="open-positions" className="py-16 lg:py-24 bg-white">
        <div className="container-custom section-padding">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <p className="text-secondary font-bold mb-3">Open Positions</p>
                <h2 className="text-primary font-bold text-3xl sm:text-4xl">
                  Current Opportunities
                </h2>
              </div>
              <Link
                to="/academy"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-tertiary transition-colors"
              >
                <GraduationCap className="w-4 h-4" />
                Looking for training? Visit ERATEC Academy
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          {isLoading ? (
            <div className="flex justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : careers && careers.length > 0 ? (
            <div className="space-y-3">
              {careers.map((job, index) => (
                <FadeIn key={job.id} delay={index * 60}>
                  <Link
                    to={`/career/${job.slug}`}
                    className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-primary/10 bg-card px-5 py-5 sm:px-6 hover:border-tertiary/30 hover:bg-white transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
                      <h3 className="text-primary font-bold text-lg sm:min-w-[200px]">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-tertiary transition-colors">
                      View role
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          ) : (
            <FadeIn>
              <div className="rounded-2xl border border-primary/10 bg-card p-10 text-center">
                <p className="text-muted-foreground mb-6">
                  We don&apos;t have any open positions at the moment. Check back soon or explore
                  training through ERATEC Academy.
                </p>
                <Link to="/academy">
                  <Button variant="default">Explore ERATEC Academy</Button>
                </Link>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Life at ERATEC */}
      <section className="py-16 lg:py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_0%,rgba(181,252,2,0.08),transparent)]" />
        <div className="absolute top-0 inset-x-0 h-px bg-white/10" />

        <div className="container-custom section-padding relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-tertiary font-bold mb-3">Life at ERATEC</p>
                <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
                  More Than a Workplace — A Team Built on Engineering
                </h2>
                <p className="text-white/55 leading-relaxed mb-8">
                  ERATEC brings together certified engineers, technicians and project leaders who
                  share one standard: deliver systems that perform on day one and for decades after.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {lifeAtEratecStats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                      <p className="text-tertiary font-archivo font-black text-2xl sm:text-3xl leading-none mb-1">
                        {stat.value}
                      </p>
                      <p className="text-white/45 text-[10px] sm:text-xs leading-snug">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <FadeIn delay={150}>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {lifeAtEratecGallery.map((photo, index) => (
                    <div
                      key={photo.caption}
                      className={`relative rounded-2xl overflow-hidden border border-white/10 ${
                        index === 0 ? "col-span-2 row-span-1" : ""
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        className={`w-full object-cover ${
                          index === 0 ? "h-48 sm:h-56" : "h-36 sm:h-44"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                      <p className="absolute bottom-3 left-3 right-3 text-white/80 text-xs sm:text-sm font-medium">
                        {photo.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
