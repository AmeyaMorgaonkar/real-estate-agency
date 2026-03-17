import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
  image?: string;
}

const TestimonialSlide = ({ quote, author, location }: TestimonialProps) => (
  <div className="px-4 md:px-8">
    <div className="bg-white rounded-lg p-8 md:p-12 max-w-2xl mx-auto shadow-sm border border-neutral-stone">
      {/* Quote marks */}
      <svg
        className="w-8 h-8 text-primary mb-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
      </svg>

      {/* Quote */}
      <p className="text-lg md:text-xl font-serif text-neutral-charcoal leading-relaxed mb-8">
        {quote}
      </p>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-neutral-charcoal">{author}</p>
          <p className="text-sm text-neutral-charcoal/60">{location}</p>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-primary">★</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const TestimonialSection = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote:
        "Working with Aurelia Interiors completely transformed our home into a space that feels both luxurious and deeply personal. Every detail was thoughtfully considered.",
      author: "Priya Sharma",
      location: "Mumbai Penthouse",
    },
    {
      quote:
        "The team's understanding of spatial design and material selection is exceptional. Our villa now feels like a serene retreat that perfectly complements our lifestyle.",
      author: "Rajesh Kumar",
      location: "Bangalore Villa",
    },
    {
      quote:
        "Aurelia Interiors delivered a contemporary home that exceeded our expectations. Their attention to detail and project management was impeccable.",
      author: "Ananya Patel",
      location: "Delhi Residence",
    },
    {
      quote:
        "The entire process was seamless and collaborative. We now have a home that tells our story through beautiful, elegant design.",
      author: "Vikram Singh",
      location: "Goa Coastal Home",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    if (!autoSlide) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [autoSlide, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setAutoSlide(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoSlide(false);
  };

  return (
    <section className="section-spacing bg-white relative">
      <div className="container-luxury section-padding">
        {/* Header */}
        <div className="mb-16">
          <div className="luxury-divider mb-6" />
          <h2 className="text-luxury-subheading mb-4">Client Testimonials</h2>
          <p className="max-w-2xl text-lg text-neutral-charcoal/80">
            Hear from our clients about their experience working with Aurelia Interiors.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Slides */}
          <div className="overflow-hidden">
            <div
              className="transition-all duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <TestimonialSlide {...testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevSlide}
              onMouseEnter={() => setAutoSlide(false)}
              className="p-3 rounded-full border border-neutral-stone hover:border-primary hover:text-primary transition-all duration-300 hover-lift"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setAutoSlide(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-primary w-8" : "bg-neutral-stone w-2"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              onMouseEnter={() => setAutoSlide(false)}
              className="p-3 rounded-full border border-neutral-stone hover:border-primary hover:text-primary transition-all duration-300 hover-lift"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
