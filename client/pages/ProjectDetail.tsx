import { Layout } from "@/components/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface ProjectImage {
  id: string;
  src: string;
  title: string;
}

interface Project {
  id: string;
  title: string;
  city: string;
  category: string;
  year: number;
  area: string;
  description: string;
  philosophy: string;
  materials: string[];
  images: ProjectImage[];
}

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Mock project data - replace with actual data/API call
  const projects: { [key: string]: Project } = {
    "modern-mumbai-penthouse": {
      id: "modern-mumbai-penthouse",
      title: "Modern Mumbai Penthouse",
      city: "Mumbai",
      category: "Luxury Residence",
      year: 2023,
      area: "5,500 sq ft",
      description:
        "A sophisticated penthouse redesign in South Mumbai's most prestigious address. The project showcases a refined blend of contemporary design with warm, luxurious materials.",
      philosophy:
        "This space was designed to be a serene urban sanctuary. We prioritized open sightlines, natural light, and a carefully curated material palette of marble, brass, and natural wood.",
      materials: ["Italian Marble", "Brass Fixtures", "Walnut Flooring", "Custom Upholstery", "Natural Stone"],
      images: [
        { id: "1", src: "/projects/mumbai-1.jpg", title: "Main Living Area" },
        { id: "2", src: "/projects/mumbai-2.jpg", title: "Dining Space" },
        { id: "3", src: "/projects/mumbai-3.jpg", title: "Master Bedroom" },
        { id: "4", src: "/projects/mumbai-4.jpg", title: "Ensuite Bathroom" },
      ],
    },
    "bangalore-luxury-villa": {
      id: "bangalore-luxury-villa",
      title: "Bangalore Luxury Villa",
      city: "Bangalore",
      category: "Villa Design",
      year: 2022,
      area: "8,000 sq ft",
      description: "A sprawling villa capturing the essence of luxury living.",
      philosophy: "Seamless integration between indoor and outdoor spaces.",
      materials: ["Teak Wood", "Travertine", "Custom Glass"],
      images: [
        { id: "1", src: "https://images.pexels.com/photos/17174768/pexels-photo-17174768.jpeg", title: "Exterior" },
        { id: "2", src: "https://images.pexels.com/photos/17174768/pexels-photo-17174768.jpeg", title: "Living Room" },
        { id: "3", src: "https://images.pexels.com/photos/17174768/pexels-photo-17174768.jpeg", title: "Master Suite" }
      ]
    },
    "delhi-contemporary-residence": {
      id: "delhi-contemporary-residence",
      title: "Delhi Contemporary Residence",
      city: "Delhi",
      category: "Contemporary",
      year: 2024,
      area: "6,200 sq ft",
      description: "Urban elegance meets modern art in this stunning Delhi home.",
      philosophy: "Minimalism with bold artistic expressions.",
      materials: ["Exposed Concrete", "Oak Wood", "Matte Steel"],
      images: [
        { id: "1", src: "https://images.pexels.com/photos/35128596/pexels-photo-35128596.jpeg", title: "Living Space" },
        { id: "2", src: "https://images.pexels.com/photos/35128596/pexels-photo-35128596.jpeg", title: "Dining" },
        { id: "3", src: "https://images.pexels.com/photos/35128596/pexels-photo-35128596.jpeg", title: "Kitchen" }
      ]
    },
    "goa-beach-villa": {
      id: "goa-beach-villa",
      title: "Goa Beach Villa",
      city: "Goa",
      category: "Coastal Luxury",
      year: 2023,
      area: "9,500 sq ft",
      description: "A coastal retreat designed for ultimate relaxation and entertaining.",
      philosophy: "Resort-style living blending natural textures and modern comforts.",
      materials: ["Laterite Stone", "Bamboo", "Linen", "Whitewashed Wood"],
      images: [
        { id: "1", src: "https://images.pexels.com/photos/12720671/pexels-photo-12720671.jpeg", title: "Pool Deck" },
        { id: "2", src: "https://images.pexels.com/photos/12720671/pexels-photo-12720671.jpeg", title: "Lounge" },
        { id: "3", src: "https://images.pexels.com/photos/12720671/pexels-photo-12720671.jpeg", title: "Bedroom View" }
      ]
    },
    "hyderabad-smart-luxury-home": {
      id: "hyderabad-smart-luxury-home",
      title: "Hyderabad Smart Luxury Home",
      city: "Hyderabad",
      category: "Smart Luxury",
      year: 2024,
      area: "7,000 sq ft",
      description: "State-of-the-art automation wrapped in timeless design.",
      philosophy: "Technology silently empowering luxurious daily living.",
      materials: ["Smart Glass", "Onyx", "Mirror Finishes"],
      images: [
        { id: "1", src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg", title: "Media Room" },
        { id: "2", src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg", title: "Smart Kitchen" },
        { id: "3", src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg", title: "Lobby" }
      ]
    },
    "pune-heritage-transformation": {
      id: "pune-heritage-transformation",
      title: "Pune Heritage Transformation",
      city: "Pune",
      category: "Renovation",
      year: 2022,
      area: "4,500 sq ft",
      description: "Breathing modern life into a historical structure.",
      philosophy: "Honoring the past while embracing contemporary living standards.",
      materials: ["Restored Wood", "Lime Plaster", "Brass"],
      images: [
        { id: "1", src: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg", title: "Courtyard" },
        { id: "2", src: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg", title: "Library" },
        { id: "3", src: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg", title: "Study" }
      ]
    }
  };

  const project = projectId && projects[projectId] ? projects[projectId] : null;

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-neutral-ivory px-4">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold text-neutral-charcoal mb-4">
              Project Not Found
            </h1>
            <p className="text-neutral-charcoal/70 mb-8">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <button
              onClick={() => navigate("/")}
              className="btn-gold inline-flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              Back to Home
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero with Project Title */}
      <section className="section-spacing bg-neutral-ivory pt-24">
        <div className="container-luxury section-padding">
          <button
            onClick={() => navigate("/#projects")}
            className="flex items-center gap-2 text-primary hover:text-gold-700 transition-colors mb-8 font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </button>

          <h1 className="text-5xl md:text-6xl font-serif font-bold text-neutral-charcoal mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-neutral-charcoal/70">
            <span className="text-lg">{project.city}</span>
            <span className="w-1 h-1 bg-neutral-charcoal/30 rounded-full" />
            <span className="text-lg">{project.year}</span>
            <span className="w-1 h-1 bg-neutral-charcoal/30 rounded-full" />
            <span className="px-4 py-1 bg-gold-100 text-primary rounded-full text-sm font-semibold">
              {project.category}
            </span>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-spacing bg-white">
        <div className="container-luxury section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {project.images.map((image, index) => (
              <div
                key={image.id}
                className={`relative bg-neutral-stone rounded-lg overflow-hidden group ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className={`relative w-full ${index === 0 ? "h-96 md:h-[32rem]" : "h-80 md:h-96"}`}>
                  <img src={image.src || "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg"} alt={image.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute bottom-6 left-6 text-white font-serif text-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    {image.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-spacing bg-neutral-ivory">
        <div className="container-luxury section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Left Column - Description */}
            <div className="md:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-neutral-charcoal mb-6">
                  Project Overview
                </h2>
                <p className="text-lg text-neutral-charcoal/80 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="luxury-divider mb-8" />
                <h3 className="text-2xl font-serif font-bold text-neutral-charcoal mb-4">
                  Design Philosophy
                </h3>
                <p className="text-lg text-neutral-charcoal/80 leading-relaxed">
                  {project.philosophy}
                </p>
              </div>

              {/* Materials Section */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-neutral-charcoal mb-6">
                  Materials & Finishes
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.materials.map((material, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white rounded-lg border border-neutral-stone text-center"
                    >
                      <p className="font-semibold text-neutral-charcoal">{material}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="md:col-span-1">
              <div className="bg-white p-8 rounded-lg border border-neutral-stone sticky top-32">
                <h3 className="text-xl font-serif font-bold text-neutral-charcoal mb-8">
                  Project Details
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-charcoal/60 mb-2">
                      Location
                    </p>
                    <p className="text-lg font-semibold text-neutral-charcoal">{project.city}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-charcoal/60 mb-2">
                      Category
                    </p>
                    <p className="text-lg font-semibold text-neutral-charcoal">{project.category}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-charcoal/60 mb-2">
                      Area
                    </p>
                    <p className="text-lg font-semibold text-neutral-charcoal">{project.area}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-charcoal/60 mb-2">
                      Year
                    </p>
                    <p className="text-lg font-semibold text-neutral-charcoal">{project.year}</p>
                  </div>
                </div>

                <button className="w-full btn-gold mt-8">
                  Request Similar Design
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-white border-t border-neutral-stone">
        <div className="container-luxury section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-charcoal mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-neutral-charcoal/80 mb-8">
            Let us create a similarly stunning interior for your home. Schedule a consultation with our design team today.
          </p>
          <button className="btn-gold">
            Schedule Consultation
          </button>
        </div>
      </section>
    </Layout>
  );
}
