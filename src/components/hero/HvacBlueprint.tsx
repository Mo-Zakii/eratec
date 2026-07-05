type BlueprintProps = {
  animate?: boolean;
  className?: string;
};

const HvacBlueprint = ({ animate = true, className = "" }: BlueprintProps) => (
  <svg
    viewBox="0 0 560 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    {/* Building shell */}
    <rect
      x="72"
      y="36"
      width="416"
      height="248"
      fill="none"
      className={animate ? "hero-blueprint-draw" : ""}
      style={{ animationDelay: "0ms" }}
      stroke="rgba(181,252,2,0.55)"
      strokeWidth="1.5"
    />
    <line
      x1="72"
      y1="160"
      x2="488"
      y2="160"
      className={animate ? "hero-blueprint-draw" : ""}
      style={{ animationDelay: "120ms" }}
      stroke="rgba(255,255,255,0.15)"
      strokeWidth="1"
    />
    <line
      x1="280"
      y1="36"
      x2="280"
      y2="284"
      className={animate ? "hero-blueprint-draw" : ""}
      style={{ animationDelay: "180ms" }}
      stroke="rgba(255,255,255,0.12)"
      strokeWidth="1"
    />

    {/* Main duct trunk */}
    <path
      d="M 110 58 H 450"
      className={animate ? "hero-blueprint-draw" : ""}
      style={{ animationDelay: "280ms" }}
      stroke="#B5FC02"
      strokeWidth="2.5"
    />
    <path
      d="M 150 58 V 130 M 250 58 V 130 M 350 58 V 130 M 430 58 V 130"
      className={animate ? "hero-blueprint-draw" : ""}
      style={{ animationDelay: "420ms" }}
      stroke="#B5FC02"
      strokeWidth="2"
    />

    {/* Airflow — animated after draw */}
    <path
      d="M 110 58 H 450"
      className={animate ? "hero-blueprint-flow" : "opacity-0"}
      stroke="#B5FC02"
      strokeWidth="2"
      opacity="0.7"
    />
    <path
      d="M 150 58 V 130 M 250 58 V 130 M 350 58 V 130 M 430 58 V 130"
      className={animate ? "hero-blueprint-flow" : "opacity-0"}
      style={{ animationDelay: "0.15s" }}
      stroke="#B5FC02"
      strokeWidth="1.5"
      opacity="0.55"
    />

    {/* VRF outdoor unit */}
    <rect
      x="28"
      y="196"
      width="56"
      height="72"
      rx="3"
      fill="none"
      className={animate ? "hero-blueprint-draw" : ""}
      style={{ animationDelay: "560ms" }}
      stroke="rgba(181,252,2,0.7)"
      strokeWidth="1.5"
    />
    <circle
      cx="56"
      cy="232"
      r="16"
      fill="none"
      className={animate ? "hero-blueprint-fan" : ""}
      style={{ animationDelay: "680ms" }}
      stroke="rgba(181,252,2,0.5)"
      strokeWidth="1"
    />
    <path
      d="M 84 210 H 110 V 58"
      className={animate ? "hero-blueprint-draw" : ""}
      style={{ animationDelay: "640ms" }}
      stroke="rgba(255,255,255,0.35)"
      strokeWidth="1"
      strokeDasharray="4 4"
    />

    {/* Indoor units */}
    {[
      { x: 120, y: 200, label: "LOBBY" },
      { x: 220, y: 200, label: "OFFICE" },
      { x: 300, y: 80, label: "SERVER" },
      { x: 390, y: 200, label: "SUITE" },
    ].map(({ x, y, label }, i) => (
      <g key={label}>
        <rect
          x={x}
          y={y}
          width="36"
          height="22"
          rx="2"
          fill="none"
          className={animate ? "hero-blueprint-draw" : ""}
          style={{ animationDelay: `${760 + i * 90}ms` }}
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
        />
        <text
          x={x + 18}
          y={y - 8}
          textAnchor="middle"
          className={animate ? "hero-blueprint-label" : ""}
          style={{ animationDelay: `${1200 + i * 100}ms` }}
          fill="rgba(181,252,2,0.85)"
          fontSize="9"
          fontFamily="Archivo, sans-serif"
          fontWeight="700"
          letterSpacing="0.12em"
        >
          {label}
        </text>
      </g>
    ))}

    {/* Engineering annotations */}
    <text
      x="488"
      y="28"
      textAnchor="end"
      className={animate ? "hero-blueprint-label" : ""}
      style={{ animationDelay: "1500ms" }}
      fill="rgba(255,255,255,0.35)"
      fontSize="8"
      fontFamily="Poppins, sans-serif"
      letterSpacing="0.08em"
    >
      SUPPLY AIR · 12°C
    </text>
    <text
      x="488"
      y="310"
      textAnchor="end"
      className={animate ? "hero-blueprint-label" : ""}
      style={{ animationDelay: "1650ms" }}
      fill="rgba(255,255,255,0.35)"
      fontSize="8"
      fontFamily="Poppins, sans-serif"
      letterSpacing="0.08em"
    >
      VRF · 4 ZONES · 68% LOAD
    </text>

    {/* Dimension ticks */}
    <path
      d="M 72 300 H 488 M 72 296 V 304 M 488 296 V 304"
      className={animate ? "hero-blueprint-draw" : ""}
      style={{ animationDelay: "900ms" }}
      stroke="rgba(255,255,255,0.2)"
      strokeWidth="1"
    />
    <text
      x="280"
      y="322"
      textAnchor="middle"
      className={animate ? "hero-blueprint-label" : ""}
      style={{ animationDelay: "1400ms" }}
      fill="rgba(255,255,255,0.25)"
      fontSize="8"
      fontFamily="Poppins, sans-serif"
    >
      FLOOR PLAN — HVAC LAYOUT
    </text>
  </svg>
);

export default HvacBlueprint;
