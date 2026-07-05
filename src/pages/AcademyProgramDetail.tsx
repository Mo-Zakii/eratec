import AcademyApplyForm from "@/components/academy/AcademyApplyForm";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { academyPrograms, getAcademyProgramBySlug } from "@/data/academy";
import { ArrowUpRight, CheckCircle2, Clock, GraduationCap } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const AcademyProgramDetail = () => {
  const { slug } = useParams();
  const program = slug ? getAcademyProgramBySlug(slug) : undefined;
  const otherPrograms = academyPrograms.filter((p) => p.slug !== slug);

  if (!program) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container-custom section-padding py-32 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Program Not Found</h1>
          <p className="text-muted-foreground mb-8">
            This training program may no longer be available.
          </p>
          <Link to="/academy" className="text-primary font-semibold hover:text-tertiary">
            View all programs →
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-24 sm:pt-28 pb-8 sm:pb-10 px-4 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_0%,rgba(181,252,2,0.08),transparent)]" />
        <div className="container-custom section-padding relative">
          <FadeIn>
            <div className="flex items-center gap-2 text-sm mb-6">
              <Link to="/" className="text-white/45 hover:text-tertiary transition-colors">
                Home
              </Link>
              <span className="text-white/25">/</span>
              <Link to="/academy" className="text-white/45 hover:text-tertiary transition-colors">
                Academy
              </Link>
              <span className="text-white/25">/</span>
              <span className="text-tertiary font-semibold">{program.title}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-tertiary text-primary">
                {program.level}
              </span>
              <span className="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-white/10 text-white flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {program.duration}
              </span>
            </div>
            <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 max-w-3xl">
              {program.title}
            </h1>
            <p className="text-white/55 text-base sm:text-lg max-w-2xl leading-relaxed">{program.description}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-4">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8 space-y-8 sm:space-y-10 order-2 lg:order-none">
              <FadeIn>
                <div className="rounded-2xl overflow-hidden mb-6 sm:mb-8">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 sm:h-64 md:h-[400px] object-cover"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">Program Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{program.overview}</p>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className="text-2xl font-bold text-black mb-4">What You&apos;ll Learn</h2>
                <ul className="space-y-3">
                  {program.whatYouLearn.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 text-tertiary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={150}>
                <h2 className="text-2xl font-bold text-black mb-4">Who It&apos;s For</h2>
                <ul className="space-y-3">
                  {program.whoItsFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={200}>
                <h2 className="text-2xl font-bold text-black mb-4">Outcomes</h2>
                <ul className="space-y-3">
                  {program.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 text-secondary fill-primary stroke-white shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

            </div>

            <div className="lg:col-span-4 order-1 lg:order-none">
              <FadeIn delay={150}>
                <div className="lg:sticky lg:top-24">
                  <AcademyApplyForm programSlug={program.slug} />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {otherPrograms.length > 0 && (
        <section className="py-16 px-4 bg-[#f4f4f7]">
          <div className="container-custom section-padding">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">Other Training Programs</h2>
              <div className="space-y-3">
                {otherPrograms.map((other, index) => (
                  <FadeIn key={other.slug} delay={index * 60}>
                    <Link
                      to={`/academy/${other.slug}`}
                      className="bg-white cursor-pointer rounded-xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between hover:bg-accent transition-all group duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 flex-wrap w-full sm:w-auto">
                        <h5 className="text-primary font-bold sm:min-w-[200px]">{other.title}</h5>
                        <div className="flex items-center gap-6">
                          <span className="flex items-center gap-2 text-sm text-muted-foreground">
                            <GraduationCap className="w-4 h-4" />
                            {other.level}
                          </span>
                          <span className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {other.duration}
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-6 h-6 text-secondary self-end sm:self-auto shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default AcademyProgramDetail;
