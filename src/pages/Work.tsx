import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-20 sm:pt-24 lg:pt-32 bg-white">
        <div className="container-custom section-padding">
          <div className="text-muted-foreground text-sm mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">Projects</span>
          </div>

          <div className="flex max-md:flex-col gap-8 mb-16 justify-between">
            <h1 className="text-black text-3xl sm:text-5xl lg:text-7xl font-bold">Featured Projects</h1>
            <p className="text-muted-foreground max-w-[468px] text-lg font-medium lg:pt-4">
              Engineering-driven HVAC and electromechanical solutions delivered across hospitality, healthcare, industrial and commercial sectors in Egypt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 gap-y-16">
            {projects.map((work, index) => (
              <FadeIn key={work.slug} delay={index * 100}>
                <Link to={`/projects/${work.slug}`} className="group cursor-pointer block">
                  <div className="overflow-hidden rounded-2xl mb-6">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-56 sm:h-72 lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <h5 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {work.title}
                  </h5>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    {work.description}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Work;
