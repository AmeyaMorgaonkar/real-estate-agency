import { MapPin } from "lucide-react";

interface CityProps {
  name: string;
  description: string;
}

const CityCard = ({ name, description }: CityProps) => (
  <div className="group relative p-6 md:p-8 bg-white rounded-lg border border-neutral-stone hover:border-primary transition-all duration-300 hover-lift">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-gold-50 rounded-lg flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <MapPin size={24} className="text-primary group-hover:text-white transition-colors" />
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-serif font-bold text-neutral-charcoal mb-2">
          {name}
        </h4>
        <p className="text-sm text-neutral-charcoal/70">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export const CitiesServed = () => {
  const cities: CityProps[] = [
    {
      name: "Mumbai",
      description: "Premium residences and penthouses in South Mumbai and luxury developments",
    },
    {
      name: "Bangalore",
      description: "Contemporary luxury villas and upscale residential projects",
    },
    {
      name: "Delhi",
      description: "Heritage transformations and ultra-modern luxury homes",
    },
    {
      name: "Pune",
      description: "Villa designs and contemporary residential spaces",
    },
    {
      name: "Hyderabad",
      description: "Smart luxury homes and innovative residential interiors",
    },
    {
      name: "Ahmedabad",
      description: "Sophisticated residential and commercial design projects",
    },
    {
      name: "Chennai",
      description: "Coastal luxury homes with architectural elegance",
    },
    {
      name: "Goa",
      description: "Beachfront villas and luxury coastal properties",
    },
  ];

  return (
    <section className="section-spacing bg-white relative">
      <div className="container-luxury section-padding">
        {/* Header */}
        <div className="mb-16">
          <div className="luxury-divider mb-6" />
          <h2 className="text-luxury-subheading mb-4">Cities We Serve</h2>
          <p className="max-w-2xl text-lg text-neutral-charcoal/80">
            Aurelia Interiors operates across major Indian cities, bringing luxury design excellence to premium residences nationwide.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <CityCard key={index} {...city} />
          ))}
        </div>

        {/* Map Alternative Text */}
        <div className="mt-16 p-8 md:p-12 bg-neutral-ivory rounded-lg border border-neutral-stone text-center">
          <h3 className="text-xl font-serif font-bold text-neutral-charcoal mb-3">
            Expanding Across India
          </h3>
          <p className="text-neutral-charcoal/70 max-w-2xl mx-auto">
            Not in a listed city? We frequently work on projects across India. Contact us to discuss your location and project requirements.
          </p>
          <button className="mt-6 btn-outline">
            Inquire About Your City
          </button>
        </div>
      </div>
    </section>
  );
};
