import FadeIn from "@/components/FadeIn";
import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

// FlipButton component
const FlipButton = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <button className="group relative px-8 py-4 bg-white border-primary rounded-full overflow-hidden border">
    <span className="relative block overflow-hidden h-6">
      <span className="block transition-transform duration-300 group-hover:-translate-y-full text-primary font-semibold">
        {children}
      </span>
      <span className="absolute top-full left-0 block transition-transform duration-300 group-hover:-translate-y-full text-primary font-semibold">
        {children}
      </span>
    </span>
  </button>;
};

const homepageServices = services.filter(
  (service) =>
    service.slug !== "electromechanical-contracting" &&
    service.slug !== "energy-efficient-retrofits",
);

const Services = () => {
  return <section id="services" className="py-20 lg:py-32 bg-[#ebebeb]">
    <div className="container-custom section-padding">
      <div className="grid lg:grid-cols-2 gap-16 items-start relative">
        {/* Left Column - Sticky */}
        <div className="lg:sticky lg:top-32">
          <FadeIn>
            <p className="text-primary font-bold mb-4">Products &amp; Solutions</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-black mb-6 text-3xl sm:text-4xl lg:text-6xl">
              <span className="relative inline-block">
                <span className="relative z-10">Advanced HVAC &amp;</span>
              </span>
              <br />
              Electromechanical Solutions
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-muted-foreground mb-8 max-w-md text-base">
              We deliver Hitachi VRF systems, central HVAC plant, after-sales support and engineering consultancy — backed by certified engineers across the full project lifecycle.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <Link to="/solutions">
              <FlipButton>Explore All Solutions</FlipButton>
            </Link>
          </FadeIn>
        </div>

        {/* Right Column - Cards */}
        <div className="space-y-4">
          {homepageServices.map((service, index) => <FadeIn key={service.slug} delay={index * 100}>
            <Link to={`/solutions/${service.slug}`}>
              <div className="group px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-[41px] rounded-2xl cursor-pointer transition-all duration-500 bg-white hover:bg-tertiary">
                <div className="flex items-start gap-4 sm:gap-6 px-0">
                  {/* Number Circle */}
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors duration-500 border-primary text-primary">
                    <span className="font-medium">{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h5 className="mb-2 text-xl sm:text-2xl lg:text-3xl font-bold transition-colors duration-500 text-primary group-hover:text-primary">
                      {service.title}
                    </h5>

                    <p className="text-base sm:text-lg font-medium transition-colors duration-500 text-muted-foreground group-hover:text-primary/80">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow - only visible on hover */}
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 transition-all duration-500 opacity-0 -translate-y-5 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>)}
        </div>
      </div>
    </div>
  </section>;
};
export default Services;