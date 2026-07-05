import EratecLogo from "@/components/brand/EratecLogo";
import CounterAnimation from "@/components/CounterAnimation";
import HvacBlueprint from "@/components/hero/HvacBlueprint";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ROTATE_MS = 6000;
const INTRO_MS = 2600;
const SETTLE_MS = 800;

type IntroPhase = "mark" | "full" | "exit" | "done";

const solutions = [
  {
    index: "01",
    title: "Hitachi VRF Systems",
    sector: "Variable Refrigerant Flow",
    detail: "Authorized distribution, design, supply and commissioning across Egypt.",
    href: "/solutions/hitachi-vrf-systems",
  },
  {
    index: "02",
    title: "Central HVAC Solutions",
    sector: "Chillers & AHUs",
    detail: "Central plant engineering for hotels, towers and large commercial facilities.",
    href: "/solutions/central-hvac-solutions",
  },
  {
    index: "03",
    title: "Electromechanical Contracting",
    sector: "Integrated MEP",
    detail: "Power, HVAC, controls and fire-fighting under one delivery contract.",
    href: "/solutions/electromechanical-contracting",
  },
  {
    index: "04",
    title: "After-Sales & Maintenance",
    sector: "Lifecycle Support",
    detail: "Preventive maintenance, genuine parts and rapid response nationwide.",
    href: "/solutions/after-sales-maintenance",
  },
];

const Hero = () => {
  const [introPhase, setIntroPhase] = useState<IntroPhase>("mark");
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const introDone = introPhase === "done";
  const heroVisible = introPhase === "exit" || introDone;

  const goTo = useCallback((index: number) => setActive(index), []);
  const next = useCallback(() => setActive((i) => (i + 1) % solutions.length), []);

  const finishIntro = useCallback(() => setIntroPhase("done"), []);

  useEffect(() => {
    if (introPhase !== "mark") return;
    const t = window.setTimeout(() => setIntroPhase("full"), 650);
    return () => window.clearTimeout(t);
  }, [introPhase]);

  useEffect(() => {
    if (introPhase !== "full") return;
    const t = window.setTimeout(() => setIntroPhase("exit"), INTRO_MS - 650);
    return () => window.clearTimeout(t);
  }, [introPhase]);

  useEffect(() => {
    if (introPhase !== "exit") return;
    const t = window.setTimeout(finishIntro, SETTLE_MS);
    return () => window.clearTimeout(t);
  }, [introPhase, finishIntro]);

  useEffect(() => {
    if (!introDone || paused) return;
    const id = setInterval(next, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, next, active, introDone]);

  const item = solutions[active];

  return (
    <section className="relative min-h-svh overflow-x-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#111810] to-[#0A0A0A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_75%_45%,rgba(181,252,2,0.09),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_15%_80%,rgba(181,252,2,0.04),transparent)]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-tertiary/40 to-transparent" />

      <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-[min(70vw,560px)] opacity-[0.06] pointer-events-none hidden lg:block">
        <HvacBlueprint animate className="w-full h-auto" />
      </div>

      {/* Hero content — always mounted, revealed during exit */}
      <div
        className={cn(
          "container-custom section-padding relative z-10 h-full flex flex-col justify-center pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-24 lg:pb-10 transition-opacity duration-700 ease-out",
          heroVisible ? "opacity-100" : "opacity-0 pointer-events-none invisible",
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-12 items-center">
          <div
            className={cn(
              "order-1 transition-all duration-700 ease-out",
              heroVisible ? "translate-y-0" : "translate-y-4",
            )}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5">
              <span className="w-6 sm:w-8 h-px bg-tertiary shrink-0" />
              <p className="text-tertiary text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.18em] leading-snug">
                Authorized distributor of Bosch Home Comfort group Hitachi cooling &amp; heating — Egypt
              </p>
            </div>

            <h1 className="text-white font-bold text-[1.65rem] sm:text-4xl lg:text-[3.25rem] leading-[1.12] sm:leading-[1.08] tracking-tight mb-3 sm:mb-4">
              Precision-Driven HVAC &amp;{" "}
              <span className="text-tertiary">Electromechanical</span> Solutions.
            </h1>

            <p className="text-white/55 text-sm sm:text-base lg:text-lg leading-relaxed mb-0 lg:mb-6 max-w-md">
              ERATEC engineers, supplies and maintains advanced climate systems for hotels, hospitals, residential, educational and industrial facilities across Egypt.
            </p>

            <div className="hidden lg:flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8 w-full sm:w-auto">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Request Consultation
                </Button>
              </Link>
              <Link to="/solutions" className="w-full sm:w-auto">
                <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                  Explore Solutions
                </Button>
              </Link>
            </div>

            <div className="hidden lg:grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6 border-t border-white/10 max-w-md">
              {[
                { value: 5, suffix: "+", label: "Years" },
                { value: 100, suffix: "+", label: "Projects" },
                { value: 200, suffix: "+", label: "Trained Engineers" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-white font-archivo font-black text-xl sm:text-2xl lg:text-3xl leading-none">
                    {introDone ? (
                      <CounterAnimation
                        target={stat.value}
                        suffix={stat.suffix}
                        suffixClassName="text-tertiary"
                      />
                    ) : (
                      <>
                        {stat.value}
                        <span className="text-tertiary">{stat.suffix}</span>
                      </>
                    )}
                  </p>
                  <p className="text-white/40 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={cn(
              "order-2 transition-all duration-700 delay-100 ease-out",
              heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="flex flex-col items-stretch lg:items-end gap-3 sm:gap-5">
              <EratecLogo
                variant="full"
                className="hidden lg:block w-full max-w-[280px] lg:max-w-[340px] h-auto drop-shadow-[0_0_40px_rgba(181,252,2,0.15)]"
              />

              <div className="w-full border border-white/10 rounded-2xl bg-white/[0.04] backdrop-blur-sm p-4 sm:p-5">
                <div className="grid grid-cols-4 gap-2 mb-4 sm:flex sm:gap-2 sm:mb-3">
                  {solutions.map((s, i) => (
                    <button
                      key={s.index}
                      type="button"
                      onClick={() => goTo(i)}
                      className={`min-h-[36px] sm:min-h-0 shrink-0 px-2 sm:px-3 py-2 sm:py-1.5 rounded-xl sm:rounded-full text-xs font-bold transition-all duration-300 ${
                        i === active
                          ? "bg-tertiary text-primary"
                          : "bg-white/5 text-white/45 hover:text-white/70 hover:bg-white/10"
                      }`}
                    >
                      {s.index}
                    </button>
                  ))}
                </div>

                <p className="text-tertiary text-[10px] sm:text-[10px] font-bold uppercase tracking-[0.14em] mb-1.5">
                  {item.sector}
                </p>
                <h2 className="text-white font-bold text-base sm:text-lg mb-2 leading-snug">{item.title}</h2>
                <p className="text-white/45 text-sm mb-4 leading-relaxed">{item.detail}</p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-tertiary transition-colors group"
                  >
                    Learn more
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>

                  {introDone && (
                    <div className="w-full sm:flex-1 sm:max-w-[120px] h-1 sm:h-0.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        key={`${active}-${paused}`}
                        className="h-full bg-tertiary origin-left animate-hero-progress rounded-full"
                        style={{
                          animationDuration: paused ? "0ms" : `${ROTATE_MS}ms`,
                          animationPlayState: paused ? "paused" : "running",
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "order-3 lg:hidden transition-all duration-700 ease-out",
              heroVisible ? "translate-y-0" : "translate-y-4",
            )}
          >
            <div className="flex flex-col gap-3 mb-5 w-full">
              <Link to="/contact" className="w-full">
                <Button variant="hero" size="lg" className="w-full">
                  Request Consultation
                </Button>
              </Link>
              <Link to="/solutions" className="w-full">
                <Button variant="hero-outline" size="lg" className="w-full">
                  Explore Solutions
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
              {[
                { value: 5, suffix: "+", label: "Years" },
                { value: 100, suffix: "+", label: "Projects" },
                { value: 200, suffix: "+", label: "Engineers" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="text-white font-archivo font-black text-lg sm:text-xl leading-none">
                    {introDone ? (
                      <CounterAnimation
                        target={stat.value}
                        suffix={stat.suffix}
                        suffixClassName="text-tertiary"
                      />
                    ) : (
                      <>
                        {stat.value}
                        <span className="text-tertiary">{stat.suffix}</span>
                      </>
                    )}
                  </p>
                  <p className="text-white/40 text-[10px] sm:text-xs mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Intro overlay — separate layer, fades out into hero */}
      {!introDone && (
        <div
          className={cn(
            "absolute inset-0 z-30 flex flex-col items-center justify-center px-6",
            introPhase === "exit" && "pointer-events-none",
          )}
        >
          <div
            className={cn(
              "absolute inset-0 bg-[#0A0A0A] transition-opacity duration-700 ease-out",
              introPhase === "exit" && "opacity-0",
            )}
          />
          <div
            className={cn(
              "absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(181,252,2,0.12),transparent_65%)] transition-opacity duration-700 ease-out",
              introPhase === "exit" && "opacity-0",
            )}
          />

          <div
            className={cn(
              "relative z-10 flex flex-col items-center px-2 transition-all duration-700 ease-out",
              introPhase === "exit" && "opacity-0 scale-[0.97] translate-y-3",
            )}
          >
            <div
              className={cn(
                introPhase === "mark" && "w-20 sm:w-28 md:w-32 hero-intro-mark-in",
                introPhase !== "mark" && "w-[min(78vw,320px)] sm:w-[min(85vw,360px)] hero-intro-logo-in",
              )}
            >
              <EratecLogo
                variant={introPhase === "mark" ? "mark" : "full"}
                className="w-full h-auto"
              />
            </div>

            {(introPhase === "full" || introPhase === "exit") && (
              <p className="mt-4 sm:mt-6 text-white/45 text-xs sm:text-sm font-medium tracking-wide text-center hero-intro-tag max-w-[16rem] sm:max-w-none">
                HVAC · Electromechanical
              </p>
            )}
          </div>

          <div
            className={cn(
              "absolute bottom-10 left-1/2 -translate-x-1/2 z-10 w-44 h-0.5 bg-white/10 rounded-full overflow-hidden transition-opacity duration-300",
              introPhase === "exit" && "opacity-0",
            )}
          >
            <div
              className="h-full w-full bg-tertiary rounded-full origin-left"
              style={{ animation: `heroIntroLoader ${INTRO_MS}ms linear forwards` }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
