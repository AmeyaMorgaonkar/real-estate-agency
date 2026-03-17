import { Layout } from "@/components/Layout";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
}

const Lightbox = ({
  image,
  onClose,
  onNext,
  onPrev,
  images,
}: {
  image: GalleryImage | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  images: GalleryImage[];
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!image) return null;

  const currentIndex = images.findIndex((img) => img.id === image.id);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
          aria-label="Close lightbox"
        >
          <X size={32} />
        </button>

        {/* Image */}
        <div className="relative bg-black rounded-lg overflow-hidden">
          <img src={image.src} alt={image.title} className="w-full h-auto max-h-[70vh] object-contain" />

          {/* Image Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">{image.title}</h3>
            <p className="text-gold-400 text-sm">{image.category}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={onPrev}
            className="p-3 hover:bg-white/10 rounded-full transition-colors text-white hover:text-gold-400"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <span className="text-white text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </span>

          <button
            onClick={onNext}
            className="p-3 hover:bg-white/10 rounded-full transition-colors text-white hover:text-gold-400"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: "1",
      src: "https://images.pexels.com/photos/26571198/pexels-photo-26571198.jpeg",
      title: "Modern Bedroom Design",
      category: "Bedrooms",
    },
    {
      id: "2",
      src: "https://images.pexels.com/photos/17174768/pexels-photo-17174768.jpeg",
      title: "Contemporary Villa Exterior",
      category: "Villas",
    },
    {
      id: "3",
      src: "https://images.pexels.com/photos/35128596/pexels-photo-35128596.jpeg",
      title: "Minimalist Bedroom",
      category: "Bedrooms",
    },
    {
      id: "4",
      src: "https://images.pexels.com/photos/12720671/pexels-photo-12720671.jpeg",
      title: "Beachfront Villa",
      category: "Villas",
    },
    {
      id: "5",
      src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      title: "Living Room Design",
      category: "Living Spaces",
    },
    {
      id: "6",
      src: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
      title: "Kitchen & Dining",
      category: "Kitchens",
    },
    {
      id: "7",
      src: "https://images.pexels.com/photos/3773367/pexels-photo-3773367.jpeg",
      title: "Luxury Interior Details",
      category: "Details",
    },
    {
      id: "8",
      src: "https://images.pexels.com/photos/929539/pexels-photo-929539.jpeg",
      title: "Home Office Space",
      category: "Office",
    },
    {
      id: "9",
      src: "https://images.pexels.com/photos/1978126/pexels-photo-1978126.jpeg",
      title: "Bathroom Luxury",
      category: "Bathrooms",
    },
    {
      id: "10",
      src: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg",
      title: "Staircase Design",
      category: "Architecture",
    },
    {
      id: "11",
      src: "https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg",
      title: "Dining Space",
      category: "Dining",
    },
    {
      id: "12",
      src: "https://images.pexels.com/photos/4352194/pexels-photo-4352194.jpeg",
      title: "Contemporary Living",
      category: "Living Spaces",
    },
  ];

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <Layout>
      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} onNext={handleNext} onPrev={handlePrev} images={galleryImages} />

      {/* Hero */}
      <div className="bg-neutral-charcoal text-white py-24">
        <div className="container-luxury section-padding text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Design Gallery</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            A curated collection of luxury interiors showcasing our design philosophy across
            different spaces and styles.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="section-spacing bg-neutral-ivory">
        <div className="container-luxury section-padding">
          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="break-inside-avoid mb-6 md:mb-8 group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-lg bg-neutral-stone hover:shadow-2xl transition-all duration-300">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-white font-serif text-lg font-bold mb-1">{image.title}</h3>
                      <p className="text-gold-400 text-sm uppercase tracking-wider">{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-white border-t border-neutral-stone">
        <div className="container-luxury section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-charcoal mb-6">
            Inspired by Our Work?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-neutral-charcoal/80 mb-8">
            Let us create a similarly stunning interior for your space. Schedule a consultation
            with our design team today.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="btn-gold"
          >
            Schedule Consultation
          </button>
        </div>
      </section>
    </Layout>
  );
}
