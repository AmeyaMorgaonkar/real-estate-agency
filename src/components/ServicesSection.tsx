import { useState } from "react";
import { Home, Building2, Layout, Sofa, Wrench, Paintbrush } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative p-8 md:p-10 bg-white border border-neutral-stone rounded-lg transition-all duration-300 hover:border-primary hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Border Accent */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transition-all duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Icon Background */}
      <div
        className={`w-16 h-16 rounded-lg mb-6 flex items-center justify-center transition-all duration-300 ${
          isHovered ? "bg-primary shadow-lg scale-110" : "bg-gold-50"
        }`}
      >
        <div className={`transition-all duration-300 ${isHovered ? "text-white" : "text-primary"}`}>
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl md:text-2xl font-serif font-bold text-neutral-charcoal mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-neutral-charcoal/70 leading-relaxed mb-6 group-hover:text-neutral-charcoal/85 transition-colors">
        {description}
      </p>

      {/* Hover Arrow Indicator */}
      <div className={`flex items-center gap-2 text-primary font-semibold transition-all duration-300 ${isHovered ? "translate-x-2" : ""}`}>
        <span>Explore</span>
        <span className={`transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}>→</span>
      </div>

      {/* Background gradient on hover */}
      <div
        className={`absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-transparent pointer-events-none transition-all duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export const ServicesSection = () => {
  const { openModal } = useConsultation();

  const services: ServiceCardProps[] = [
    {
      icon: <Home size={32} />,
      title: "Luxury Home Interior Design",
      description:
        "Complete interior design solutions for luxury residences. We create bespoke environments that reflect your lifestyle and aspirations with meticulous attention to detail.",
    },
    {
      icon: <Building2 size={32} />,
      title: "Villa Design",
      description:
        "Specialized design for luxury villas and sprawling estates. We seamlessly integrate indoor and outdoor spaces with architectural grandeur and elegance.",
    },
    {
      icon: <Layout size={32} />,
      title: "Space Planning",
      description:
        "Strategic space utilization and layout design. We maximize functionality while maintaining aesthetic elegance and optimal flow throughout your home.",
    },
    {
      icon: <Sofa size={32} />,
      title: "Custom Furniture Design",
      description:
        "Bespoke furniture design and curation. Each piece is selected or created to harmonize perfectly with your interior environment and personal style.",
    },
    {
      icon: <Wrench size={32} />,
      title: "Turnkey Interior Projects",
      description:
        "End-to-end project management from design through installation. We handle all coordination and quality assurance for seamless execution.",
    },
    {
      icon: <Paintbrush size={32} />,
      title: "Renovation & Restoration",
      description:
        "Transform existing spaces into contemporary luxury. We preserve character while introducing modern elegance and functionality to your home.",
    },
  ];

  return (
    <section className="section-spacing bg-neutral-ivory relative">
      <div className="container-luxury section-padding">
        {/* Header */}
        <div className="mb-16">
          <div className="luxury-divider mb-6" />
          <h2 className="text-luxury-subheading mb-4">Our Services</h2>
          <p className="max-w-2xl text-lg text-neutral-charcoal/80">
            Comprehensive interior design services tailored to create your vision of luxury
            living.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 pt-20 border-t border-neutral-stone text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-charcoal mb-6">
            Ready to Transform Your Space?
          </h3>
          <p className="max-w-2xl mx-auto text-lg text-neutral-charcoal/80 mb-8">
            Schedule a consultation with our design team to discuss your project and bring your
            luxury living dreams to reality.
          </p>
          <button onClick={openModal} className="btn-gold">Schedule Consultation</button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
    </section>
  );
};
