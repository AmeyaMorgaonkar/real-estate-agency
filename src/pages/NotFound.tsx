import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-neutral-ivory px-4">
        <div className="text-center max-w-2xl">
          {/* 404 Number */}
          <div className="mb-8">
            <span className="text-8xl md:text-9xl font-serif font-bold text-primary/20">
              404
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-charcoal mb-4">
            Page Not Found
          </h1>

          {/* Description */}
          <p className="text-lg text-neutral-charcoal/70 mb-8 leading-relaxed">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>

          {/* Attempted URL */}
          <div className="mb-12 p-6 bg-white border border-neutral-stone rounded-lg">
            <p className="text-sm text-neutral-charcoal/60 mb-2">Attempted URL:</p>
            <code className="text-sm font-mono text-primary break-all">
              {location.pathname}
            </code>
          </div>

          {/* CTA */}
          <a
            href="/"
            className="btn-gold inline-flex items-center gap-2"
          >
            Return Home
            <ArrowRight size={18} />
          </a>

          {/* Helpful Links */}
          <div className="mt-16 pt-12 border-t border-neutral-stone">
            <p className="text-sm text-neutral-charcoal/60 mb-6">You might find what you're looking for:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href="/#projects" className="text-primary hover:text-gold-700 font-semibold transition-colors">
                View Our Projects
              </a>
              <a href="/#services" className="text-primary hover:text-gold-700 font-semibold transition-colors">
                Explore Services
              </a>
              <a href="/#contact" className="text-primary hover:text-gold-700 font-semibold transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
