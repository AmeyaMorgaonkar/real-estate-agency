import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { DesignProcess } from "@/components/DesignProcess";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { GallerySection } from "@/components/GallerySection";
import { BookingSection } from "@/components/BookingSection";
import { CitiesServed } from "@/components/CitiesServed";
import { Layout } from "@/components/Layout";

export default function Index() {
  return (
    <Layout>
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="projects">
        <FeaturedProjects />
      </div>
      <div id="process">
        <DesignProcess />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="testimonials">
        <TestimonialSection />
      </div>
      <div id="gallery">
        <GallerySection />
      </div>
      <div id="contact">
        <BookingSection />
      </div>
      <CitiesServed />
    </Layout>
  );
}
