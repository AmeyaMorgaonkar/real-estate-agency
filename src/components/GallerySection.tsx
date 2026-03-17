import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItemProps {
  id: string;
  image: string;
  title: string;
}

export const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({});

  const galleryItems: GalleryItemProps[] = [
    {
      id: "1",
      title: "Modern Bedroom Design",
      image: "https://images.pexels.com/photos/26571198/pexels-photo-26571198.jpeg",
    },
    {
      id: "2",
      title: "Contemporary Villa",
      image: "https://images.pexels.com/photos/17174768/pexels-photo-17174768.jpeg",
    },
    {
      id: "3",
      title: "Minimalist Bedroom",
      image: "https://images.pexels.com/photos/35128596/pexels-photo-35128596.jpeg",
    },
    {
      id: "4",
      title: "Beachfront Villa",
      image: "https://images.pexels.com/photos/12720671/pexels-photo-12720671.jpeg",
    },
    {
      id: "5",
      title: "Living Room Design",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    },
    {
      id: "6",
      title: "Kitchen & Dining",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [isAutoPlay, galleryItems.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    setIsAutoPlay(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    setIsAutoPlay(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const currentImage = galleryItems[currentIndex];

  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      <div className="container-luxury section-padding">
        {/* Header */}
        <div className="mb-16">
          <div className="luxury-divider mb-6" />
          <h2 className="text-luxury-subheading mb-4">Design Gallery</h2>
          <p className="max-w-2xl text-lg text-neutral-charcoal/80">
            A curated collection of interior details and spaces from our luxury projects.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-12">
          {/* Main Carousel */}
          <div className="relative h-80 md:h-96 lg:h-[32rem] overflow-hidden rounded-lg bg-neutral-stone group">
            {/* Images with fade transition */}
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  onLoad={() => setImageLoaded((prev) => ({ ...prev, [item.id]: true }))}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    index === currentIndex ? "scale-100" : "scale-95"
                  } ${imageLoaded[item.id] ? "opacity-100" : "opacity-0"}`}
                />

                {/* Loading skeleton */}
                {!imageLoaded[item.id] && (
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-stone to-neutral-taupe animate-pulse" />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-charcoal/70 via-transparent to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gold-400">
                    <span className="text-sm font-semibold uppercase tracking-wider">View Collection</span>
                    <ChevronRight size={18} />
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 hover:bg-primary text-white transition-all duration-300 hover:shadow-lg backdrop-blur-sm group-hover:bg-primary"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={handleNext}
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 hover:bg-primary text-white transition-all duration-300 hover:shadow-lg backdrop-blur-sm group-hover:bg-primary"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image Counter */}
            <div className="absolute top-6 right-6 z-10 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold">
              {currentIndex + 1} / {galleryItems.length}
            </div>
          </div>

          {/* Indicators/Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-neutral-stone hover:bg-neutral-charcoal/50 w-2"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="flex justify-center">
          <Link to="/gallery" className="btn-outline">
            View Complete Gallery
          </Link>
        </div>
      </div>

      {/* CSS for scrollbar hiding */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
