import Logo from "@/components/Logo";
import { ERATEC_CONTACT, ERATEC_SOCIAL } from "@/lib/brand";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const FlipButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button variant="nav-cta" size="default" className="group relative overflow-hidden">
      <span className="flex items-center gap-2 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
        <Phone className="h-4 w-4" />
        {children}
      </span>
      <span className="absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
        <Phone className="h-4 w-4" />
        {children}
      </span>
    </Button>
  );
};

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <Link to={href} className="group relative overflow-hidden block text-white/60 hover:text-tertiary transition-colors text-sm h-5">
      <span className="block transition-transform duration-300 group-hover:-translate-y-full">{children}</span>
      <span className="absolute inset-0 flex items-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
        {children}
      </span>
    </Link>
  );
};

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/career" },
    { name: "Academy", href: "/academy" },
    { name: "Contact", href: "/contact" },
  ],
  solutions: [
    { name: "Hitachi VRF Systems", href: "/solutions/hitachi-vrf-systems" },
    { name: "Central HVAC", href: "/solutions/central-hvac-solutions" },
    { name: "Electromechanical", href: "/solutions/electromechanical-contracting" },
    { name: "After-Sales & Maintenance", href: "/solutions/after-sales-maintenance" },
  ],
  resources: [
    { name: "Technical Resources", href: "/resources" },
    { name: "Projects", href: "/projects" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: ERATEC_SOCIAL.linkedin, label: "LinkedIn" },
  { icon: Facebook, href: ERATEC_SOCIAL.facebook, label: "Facebook" },
  { icon: Instagram, href: ERATEC_SOCIAL.instagram, label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-primary pt-12 sm:pt-16 pb-8">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-10 sm:mb-12">
          <div className="lg:col-span-2">
            <Logo isDark />
            <p className="text-white/60 mt-4 mb-6 max-w-sm">
              A precision-driven engineering partner delivering advanced HVAC and electromechanical solutions across Egypt — authorized distributor of Hitachi VRF systems.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-tertiary hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="mt-6">
              <Link to="/contact">
                <FlipButton>Talk to an Engineer</FlipButton>
              </Link>
            </div>
          </div>

          <div>
            <h6 className="text-white font-semibold mb-4">Company</h6>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <FlipLink href={link.href}>{link.name}</FlipLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-white font-semibold mb-4">Solutions</h6>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <FlipLink href={link.href}>{link.name}</FlipLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-white font-semibold mb-4">Contact</h6>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-tertiary flex-shrink-0 mt-0.5" />
                <a href={ERATEC_CONTACT.phoneHref} className="text-white/60 text-sm">
                  {ERATEC_CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-tertiary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@eratec.com" className="text-white/60 text-sm">
                  info@eratec.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-tertiary flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  Cairo,
                  <br />
                  Egypt
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} ERATEC. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.resources.slice(2).map((link) => (
                <Link key={link.name} to={link.href} className="text-white/40 hover:text-white transition-colors text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
