import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  city: string;
  image: string;
  category: string;
}

const ProjectCard = ({ id, title, city, image, category }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      to={`/project/${id}`}
      className="group relative overflow-hidden rounded-lg bg-neutral-stone cursor-pointer block h-96 md:h-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-full w-full overflow-hidden">
        {/* Image */}
        <img
          src={image}
          alt={title}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        />

        {/* Loading skeleton */}
        {!imageLoaded && <div className="absolute inset-0 bg-gradient-to-br from-neutral-stone to-neutral-taupe animate-pulse" />}

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-charcoal/70 transition-all duration-500 ${
            isHovered ? "from-neutral-charcoal/40" : "from-neutral-charcoal/20"
          }`}
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
        {/* Top Badge */}
        <div className="flex justify-start">
          <span
            className={`px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-sm transition-all duration-300 ${
              isHovered
                ? "bg-primary text-white shadow-lg"
                : "bg-primary/80 text-white"
            }`}
          >
            {category}
          </span>
        </div>

        {/* Bottom Content */}
        <div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 leading-tight">
            {title}
          </h3>
          <p className={`text-white/90 text-sm uppercase tracking-wider flex items-center gap-2 transition-all duration-300 ${
            isHovered ? "translate-x-2" : "translate-x-0"
          }`}>
            {city}
            <ArrowRight size={16} />
          </p>
        </div>
      </div>
    </Link>
  );
};

export const FeaturedProjects = () => {
  const projects: ProjectCardProps[] = [
    {
      id: "modern-mumbai-penthouse",
      title: "Modern Mumbai Penthouse",
      city: "Mumbai",
      image: "https://images.pexels.com/photos/26571198/pexels-photo-26571198.jpeg",
      category: "Luxury Residence",
    },
    {
      id: "bangalore-luxury-villa",
      title: "Bangalore Luxury Villa",
      city: "Bangalore",
      image: "https://images.pexels.com/photos/17174768/pexels-photo-17174768.jpeg",
      category: "Villa Design",
    },
    {
      id: "delhi-contemporary-residence",
      title: "Delhi Contemporary Residence",
      city: "Delhi",
      image: "https://images.pexels.com/photos/35128596/pexels-photo-35128596.jpeg",
      category: "Contemporary",
    },
    {
      id: "goa-beach-villa",
      title: "Goa Beach Villa",
      city: "Goa",
      image: "https://images.pexels.com/photos/12720671/pexels-photo-12720671.jpeg",
      category: "Coastal Luxury",
    },
    {
      id: "hyderabad-smart-luxury-home",
      title: "Hyderabad Smart Luxury Home",
      city: "Hyderabad",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      category: "Smart Luxury",
    },
    {
      id: "pune-heritage-transformation",
      title: "Pune Heritage Transformation",
      city: "Pune",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
      category: "Renovation",
    },
  ];

  return (
    <section className="section-spacing bg-neutral-ivory relative">
      <div className="container-luxury section-padding">
        {/* Header */}
        <div className="mb-16">
          <div className="luxury-divider mb-6" />
          <h2 className="text-luxury-subheading mb-4">Featured Projects</h2>
          <p className="max-w-2xl text-lg text-neutral-charcoal/80">
            A curated selection of our most prestigious luxury home designs across India.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <Link to="/gallery" className="btn-outline inline-flex items-center gap-2">
            View Complete Portfolio
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
