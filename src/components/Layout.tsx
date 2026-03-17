import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Detect which section is currently in view
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "projects", "process", "services", "gallery", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-ivory">
      {/* Header / Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-neutral-ivory/95 backdrop-blur-md border-b border-neutral-stone shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="container-luxury section-padding py-4 md:py-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="#" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-neutral-charcoal hover:text-primary transition-colors">
              Aurelia
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary"
                    : "text-neutral-charcoal hover:text-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-gold-400 transition-all duration-300 group-hover:w-full ${
                    activeSection === link.href.replace("#", "") ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="btn-gold hidden md:inline-block text-sm"
          >
            Book Consultation
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-neutral-charcoal hover:text-primary transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-charcoal text-neutral-ivory mt-32">
        <div className="container-luxury section-padding py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
              <h4 className="text-xl font-serif font-bold mb-4">Aurelia</h4>
              <p className="text-sm text-neutral-stone leading-relaxed">
                Luxury Interiors Designed Across India.
              </p>
            </div>

            {/* Cities */}
            <div>
              <h5 className="font-semibold text-white mb-4">Cities Served</h5>
              <ul className="space-y-2 text-sm text-neutral-stone">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Mumbai
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Bangalore
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Delhi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pune
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-semibold text-white mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-neutral-stone">
                <li>
                  <button
                    onClick={() => handleNavClick("#about")}
                    className="hover:text-primary transition-colors text-left"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("#projects")}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("#services")}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("#contact")}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h5 className="font-semibold text-white mb-4">Contact</h5>
              <div className="space-y-3 text-sm text-neutral-stone mb-6">
                <a
                  href="mailto:hello@aureliainteriord.com"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  hello@aurelia.com
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone size={16} />
                  +91 98765 43210
                </a>
              </div>
              <div className="flex gap-4">
                <a href="#" className="p-2 text-neutral-stone hover:text-primary hover:bg-white hover:bg-opacity-10 rounded transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="p-2 text-neutral-stone hover:text-primary hover:bg-white hover:bg-opacity-10 rounded transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-neutral-stone pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-stone">
            <p>&copy; 2024 Aurelia Interiors. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
