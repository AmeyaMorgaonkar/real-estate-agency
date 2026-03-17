import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { ConsultationModal } from "./ConsultationModal";
import { useConsultation } from "@/context/ConsultationContext";

export const BookingSection = () => {
  const { isOpen, openModal, closeModal } = useConsultation();

  return (
    <>
      <ConsultationModal isOpen={isOpen} onClose={closeModal} />

      <section className="section-spacing bg-neutral-ivory relative overflow-hidden">
        <div className="container-luxury section-padding">
          {/* Header */}
          <div className="mb-16">
            <div className="luxury-divider mb-6" />
            <h2 className="text-luxury-subheading mb-4">Schedule Your Consultation</h2>
            <p className="max-w-2xl text-lg text-neutral-charcoal/80">
              Begin your journey to luxury living. Share your vision with our design team and
              let's create something extraordinary together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Contact Card */}
                <div className="bg-white p-8 rounded-lg border border-neutral-stone hover:border-primary hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold-50 rounded-lg mt-1">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-charcoal mb-1">Email</h4>
                      <a href="mailto:hello@aureliainteriord.com" className="text-primary hover:text-gold-700 transition-colors text-sm">
                        hello@aurelia.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-white p-8 rounded-lg border border-neutral-stone hover:border-primary hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold-50 rounded-lg mt-1">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-charcoal mb-1">Phone</h4>
                      <a href="tel:+919876543210" className="text-primary hover:text-gold-700 transition-colors text-sm">
                        +91 (98765) 43210
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address Card */}
                <div className="bg-white p-8 rounded-lg border border-neutral-stone hover:border-primary hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold-50 rounded-lg mt-1">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-charcoal mb-1">Studio</h4>
                      <p className="text-neutral-charcoal/70 text-sm leading-relaxed">
                        Multiple studios across major cities across India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="bg-white p-8 rounded-lg border border-neutral-stone hover:border-primary hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold-50 rounded-lg mt-1">
                      <Calendar size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-charcoal mb-2">Hours</h4>
                      <p className="text-neutral-charcoal/70 text-sm">
                        Monday – Friday: 10 AM – 6 PM
                        <br />
                        Saturday: 11 AM – 4 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-white to-neutral-ivory p-8 md:p-12 rounded-lg border border-neutral-stone">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-charcoal mb-6">
                  Ready to Begin Your Project?
                </h3>
                <p className="text-lg text-neutral-charcoal/80 mb-8 leading-relaxed">
                  Let our design experts understand your vision, space, and aspirations. We'll
                  create a personalized design consultation to showcase how Aurelia Interiors can
                  transform your space into a luxury sanctuary.
                </p>

                <div className="space-y-4">
                  <button
                    onClick={openModal}
                    className="w-full btn-gold text-lg py-4"
                  >
                    Schedule Design Consultation
                  </button>
                  <p className="text-sm text-neutral-charcoal/60 text-center">
                    We typically respond within 24 hours
                  </p>
                </div>

                {/* Benefits List */}
                <div className="mt-12 pt-12 border-t border-neutral-stone">
                  <h4 className="font-semibold text-neutral-charcoal mb-6">What to Expect:</h4>
                  <ul className="space-y-3 text-sm text-neutral-charcoal/70">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>Personalized consultation with our design team</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>Understanding of your vision, style, and budget</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>Preliminary design concepts and recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>Project timeline and investment discussion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      </section>
    </>
  );
};
