import { useEffect, useRef, useState } from "react";

const StatCounter = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(end * progress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
        {count}+
      </div>
      <p className="text-neutral-charcoal/70 text-sm font-medium uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
};

export const AboutSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-spacing bg-neutral-ivory relative overflow-hidden">
      <div className="container-luxury section-padding">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="luxury-divider mb-6" />
          <h2 className="text-luxury-subheading mb-4">About Aurelia Interiors</h2>
          <p className="max-w-3xl text-lg text-neutral-charcoal/80 leading-relaxed">
            Aurelia Interiors is a luxury interior design firm creating refined living spaces for modern homeowners and collectors. Our work blends architecture, craftsmanship, and timeless aesthetics to create spaces that transcend trends.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-neutral-charcoal">
              Crafting Timeless Elegance
            </h3>
            <p className="text-base md:text-lg text-neutral-charcoal/80 mb-6 leading-relaxed">
              With over a decade of experience, we've transformed homes across India's most prestigious neighborhoods. Our approach combines personalized design consultation with meticulous attention to detail.
            </p>
            <p className="text-base md:text-lg text-neutral-charcoal/80 mb-8 leading-relaxed">
              We believe that luxury is not about excess, but about refinement. Every material chosen, every space planned, and every detail considered serves a purpose—to create homes that inspire and endure.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-primary mt-1">✓</span>
                <span className="text-neutral-charcoal/80">Personalized design approach tailored to your vision</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary mt-1">✓</span>
                <span className="text-neutral-charcoal/80">Collaboration with premium artisans and craftspeople</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary mt-1">✓</span>
                <span className="text-neutral-charcoal/80">Sustainable and timeless design principles</span>
              </li>
            </ul>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-8">
            <StatCounter end={120} label="Luxury Homes Designed" />
            <StatCounter end={18} label="Cities Across India" />
            <StatCounter end={12} label="Years Experience" />
            <StatCounter end={100} label="% Client Satisfaction" />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-neutral-stone">
          <div className="text-center">
            <div className="inline-block p-4 bg-gold-50 rounded-lg mb-4">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h4 className="font-serif text-lg font-bold mb-2 text-neutral-charcoal">Minimal</h4>
            <p className="text-neutral-charcoal/70 text-sm leading-relaxed">
              Clean lines and purposeful design free from unnecessary ornamentation.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block p-4 bg-gold-50 rounded-lg mb-4">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
            <h4 className="font-serif text-lg font-bold mb-2 text-neutral-charcoal">Elegant</h4>
            <p className="text-neutral-charcoal/70 text-sm leading-relaxed">
              Sophisticated aesthetics that elevate everyday living.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block p-4 bg-gold-50 rounded-lg mb-4">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h4 className="font-serif text-lg font-bold mb-2 text-neutral-charcoal">Timeless</h4>
            <p className="text-neutral-charcoal/70 text-sm leading-relaxed">
              Designs that transcend trends and stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
