import avatar1 from "@/assets/avatar-1.jpg";
import service1 from "@/assets/service-1.png";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const FlipButton = ({
  children,
  variant = "light"
}: {
  children: React.ReactNode;
  variant?: "light" | "dark";
}) => {
  const bgClass = variant === "light"
    ? "bg-tertiary text-primary hover:bg-tertiary/90"
    : "bg-primary text-white hover:bg-primary/90";
  return (
    <Button size="default" className={`group relative overflow-hidden font-semibold rounded-full px-6 ${bgClass}`}>
      <span className="flex items-center gap-2 font-bold transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
        {variant === "dark" && <Phone className="h-4 w-4" />}
        {children}
      </span>
      <span className="absolute inset-0 flex font-bold items-center justify-center gap-2 transition-all duration-300 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
        {variant === "dark" && <Phone className="h-4 w-4" />}
        {children}
      </span>
    </Button>
  );
};

const CTA = () => {
  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-32 bg-white">
      <div className="container-custom section-padding">
        <FadeIn>
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="lg:col-span-2 rounded-2xl sm:rounded-3xl overflow-hidden relative min-h-[260px] sm:min-h-[320px]">
              <img
                src={service1}
                alt="ERATEC engineer on site"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/65 to-transparent" />
              <div className="relative z-10 p-5 sm:p-8 lg:p-12 flex flex-col justify-center h-full max-w-md">
                <p className="text-tertiary text-xs sm:text-sm font-medium mb-2 sm:mb-3">Planning an HVAC or MEP project?</p>
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 sm:mb-8">Let's engineer it together</h2>
                <div>
                  <Link to="/contact">
                    <FlipButton variant="light">Request Consultation</FlipButton>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-tertiary rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 flex flex-col justify-center min-h-[240px] sm:min-h-[320px]">
              <div className="mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-secondary overflow-hidden">
                  <img
                    src={avatar1}
                    alt="Senior ERATEC Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-primary font-semibold text-base sm:text-xl leading-relaxed mb-5 sm:mb-8">
                Talk to a senior engineer at ERATEC. We'll review your project scope and recommend the right HVAC and electromechanical approach — no obligation.
              </p>
              <Link to="/contact">
                <FlipButton variant="dark">Talk to an Engineer</FlipButton>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTA;