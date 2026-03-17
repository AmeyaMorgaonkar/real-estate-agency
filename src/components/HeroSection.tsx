import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    // Parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleViewWork = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-neutral-ivory">
      {/* Background Image with Parallax and Zoom */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0001})`,
          transformOrigin: "center",
        }}
      >
        {/* Luxury Interior Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-slate-900">
          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 30%, rgba(200,170,130,0.1) 50%, transparent 70%),
                linear-gradient(-45deg, transparent 30%, rgba(200,170,130,0.1) 50%, transparent 70%)
              `,
              backgroundSize: "4px 4px",
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-charcoal/70 via-neutral-charcoal/50 to-neutral-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-start px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl">
          {/* Animated Headline */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Designing Spaces That Define
              <span className="block text-gold-400">Luxury Living</span>
            </h1>
          </div>

          {/* Animated Subtext */}
          <div
            className={`transition-all duration-1000 ease-out delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-12 leading-relaxed font-light">
              Aurelia Interiors crafts refined, timeless interiors for premium homes and villas
              across India. We blend architecture, craftsmanship, and elegant aesthetics into
              spaces that inspire.
            </p>
          </div>

          {/* CTA Button */}
          <div
            className={`transition-all duration-1000 ease-out delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <button
              onClick={handleViewWork}
              className="btn-gold inline-block hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white hover:text-gold-400 transition-colors group"
        >
          <span className="text-sm font-medium uppercase tracking-wider group-hover:translate-y-1 transition-transform">
            Explore
          </span>
          <ChevronDown className="animate-scroll-indicator w-5 h-5 group-hover:text-gold-400" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute top-20 right-10 w-32 h-32 border border-gold-400/20 rounded-full opacity-30 hidden lg:block"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      <div
        className="absolute bottom-32 left-10 w-48 h-48 border border-gold-400/10 rounded-full opacity-20 hidden lg:block"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      />
    </div>
  );
};
