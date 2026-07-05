import EratecLogo from "@/components/brand/EratecLogo";

type LogoProps = {
  isDark?: boolean;
};

const Logo = ({ isDark = false }: LogoProps) => (
  <EratecLogo
    variant="full"
    className={`h-7 w-auto sm:h-8 ${isDark ? "" : "[filter:brightness(0)]"}`}
  />
);

export default Logo;
