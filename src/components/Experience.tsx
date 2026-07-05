import plumberTeam from "@/assets/hero-2.png";
import CounterAnimation from "@/components/CounterAnimation";
import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";

const stats = [{
  number: 5,
  suffix: "+",
  label: "Years in Industry",
  decimals: 0
}, {
  number: 100,
  suffix: "+",
  label: "Projects Delivered",
  decimals: 0
}, {
  number: 200,
  suffix: "+",
  label: "Certified Engineers",
  decimals: 0
}];

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

const Experience = () => {
  return <section className="py-20 lg:py-32 bg-card">
    <div className="container-custom section-padding">
      {/* Top Text */}
      <div className="text-center max-w-5xl mx-auto mb-16">
        <FadeIn>
          <p className="text-primary font-bold  mb-4">Welcome to ERATEC</p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="text-black font-bold text-2xl sm:text-3xl lg:text-5xl text-balance">
            Engineering excellence in HVAC and electromechanical systems — built on technical depth, premium partnerships and a culture of precision.
          </h2>
        </FadeIn>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
        <FadeIn delay={200}>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden max-h-[500px]">
              <img src={plumberTeam} alt="ERATEC engineering team in a mechanical room" className="w-full h-auto object-cover" />
            </div>
          </div>
        </FadeIn>

        {/* Right - Text Content */}
        <div>
          <FadeIn delay={300}>
            <h3 className="text-black font-bold mb-6">
              Engineered for performance. Trusted for the long term.
            </h3>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-muted-foreground mb-8">
              From single-floor fit-outs to multi-tower deployments, our certified engineers design, supply and commission systems that perform — and keep performing. We pair Hitachi VRF technology with proven electromechanical engineering and dependable after-sales service.
            </p>
          </FadeIn>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-8">
            {stats.map((stat, index) => <FadeIn key={index} delay={500 + index * 100}>
              <div>
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold mb-1 text-primary">
                  <CounterAnimation
                    target={stat.number}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    duration={2000}
                    suffixClassName="text-tertiary"
                  />
                </div>
                <p className="text-black text-xs sm:text-sm font-medium">{stat.label}</p>
              </div>
            </FadeIn>)}
          </div>
          <Link to="/about">
            <FadeIn delay={800}>
              <FlipButton>About Us</FlipButton>
            </FadeIn>
          </Link>
        </div>
      </div>
    </div>
  </section>;
};
export default Experience;