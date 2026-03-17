import { useEffect, useRef, useState } from "react";
import { Users, Lightbulb, Palette, Hammer } from "lucide-react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProcessStep = ({ number, title, description, icon }: ProcessStepProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative p-8 md:p-10 bg-white rounded-lg border border-neutral-stone hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        {/* Icon Container */}
        <div className="absolute -top-6 left-8 p-4 bg-gradient-to-br from-gold-100 to-gold-50 rounded-lg border border-primary/20 group-hover:shadow-lg transition-all duration-300">
          <div className="text-primary w-8 h-8 flex items-center justify-center">
            {icon}
          </div>
        </div>

        {/* Number Badge */}
        <div className="inline-block mb-6 mt-2">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Step {number}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-2xl md:text-2xl font-serif font-bold text-neutral-charcoal mb-4">
          {title}
        </h3>
        <p className="text-neutral-charcoal/70 leading-relaxed">
          {description}
        </p>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-gold-400 group-hover:w-full transition-all duration-500" />
      </div>
    </div>
  );
};

export const DesignProcess = () => {
  const steps: ProcessStepProps[] = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We begin with an in-depth conversation to understand your vision, lifestyle, and design preferences. This foundational meeting ensures we capture your unique story and aspirations.",
      icon: <Users size={20} />,
    },
    {
      number: "02",
      title: "Concept & Planning",
      description:
        "Our team develops detailed concepts and space planning. We create mood boards and spatial layouts that serve as the blueprint for your dream home.",
      icon: <Lightbulb size={20} />,
    },
    {
      number: "03",
      title: "Design Development",
      description:
        "We refine every detail—materials, finishes, furniture, and lighting. 3D visualizations bring your space to life before execution begins.",
      icon: <Palette size={20} />,
    },
    {
      number: "04",
      title: "Execution & Styling",
      description:
        "Our team orchestrates the installation with precision and care. From construction to final styling, we ensure flawless execution of every element.",
      icon: <Hammer size={20} />,
    },
  ];

  return (
    <section className="section-spacing bg-white relative">
      <div className="container-luxury section-padding">
        {/* Header */}
        <div className="mb-16">
          <div className="luxury-divider mb-6" />
          <h2 className="text-luxury-subheading mb-4">Our Design Process</h2>
          <p className="max-w-2xl text-lg text-neutral-charcoal/80">
            A refined approach to creating your perfect space, from initial vision to final
            execution.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>

        {/* Process Description */}
        <div className="bg-gradient-to-r from-neutral-ivory to-gold-50 rounded-lg p-8 md:p-12 border border-neutral-stone text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-charcoal mb-4">
            A Structured Approach to Excellence
          </h3>
          <p className="max-w-3xl mx-auto text-lg text-neutral-charcoal/80 leading-relaxed">
            Our structured design process ensures every project is executed with clarity,
            creativity, and precision. We believe that the foundation of exceptional design is
            thorough understanding, meticulous planning, and unwavering attention to detail. Each
            step builds upon the last, creating a seamless journey from concept to reality.
          </p>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-32 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
