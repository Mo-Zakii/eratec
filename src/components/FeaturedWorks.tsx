import FadeIn from "@/components/FadeIn";
import { featuredProjects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FeaturedWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getCardWidth = (index: number) => {
    if (hoveredIndex === null) {
      return index === 0 ? "60%" : "20%";
    }
    return hoveredIndex === index ? "60%" : "20%";
  };

  return (
    <section className="py-20 lg:py-32 bg-primary overflow-hidden">
      <div className="container-custom section-padding">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <FadeIn>
              <p className="text-tertiary font-medium mb-4">OUR PROJECTS</p>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="text-white">
                Engineered.
                <br />
                Delivered. Trusted.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={200}>
            <p className="text-white max-w-xl mt-6 lg:mt-0">
              From hospitality and healthcare to industrial and commercial facilities, our portfolio reflects ERATEC's commitment to engineering rigor, premium technology and on-time delivery.
            </p>
          </FadeIn>
        </div>

        {/* Mobile: stacked cards */}
        <FadeIn delay={300}>
          <div className="flex flex-col gap-4 lg:hidden">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="relative rounded-3xl overflow-hidden block"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 sm:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80" />
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center">
                    <ArrowUpRight className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h5 className="text-white text-xl sm:text-2xl font-bold mb-2">{project.title}</h5>
                  <p className="text-white text-sm sm:text-base line-clamp-2">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </FadeIn>

        {/* Desktop: hover accordion */}
        <FadeIn delay={300}>
          <div className="hidden lg:flex gap-4">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-1000 ease-in-out block"
                style={{ width: getCardWidth(index) }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80" />
                <div className={`absolute top-4 right-4 transition-opacity duration-300 ${hoveredIndex === index || (hoveredIndex === null && index === 0) ? "opacity-100" : "opacity-0"}`}>
                  <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center">
                    <ArrowUpRight className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h5 className={`text-white text-3xl font-bold mb-2 ${hoveredIndex === index || (hoveredIndex === null && index === 0) ? "opacity-100" : "opacity-0"}`}>{project.title}</h5>
                  <p className={`text-white line-clamp-2 transition-opacity duration-300 ${hoveredIndex === index || (hoveredIndex === null && index === 0) ? "opacity-100" : "opacity-0"}`}>
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeaturedWorks;
