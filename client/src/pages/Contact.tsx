import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";

export default function Contact() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleContactSubmit = (data: any) => {
    console.log("Contact form submitted:", data);
  };

  const handleBookingSubmit = (details: any) => {
    console.log("Consultation booking submitted:", details);
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss how Inspire2Grow can help you or your organization achieve excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <ContactForm onSubmit={handleContactSubmit} />
            </div>

            <div className="space-y-6">
              <GlassCard>
                <h2 className="font-serif text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a
                        href="mailto:2inspire2grow@gmail.com"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        2inspire2grow@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a
                        href="tel:+918600045797"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        +91 86000 45797
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Global Reach</p>
                      <p className="text-muted-foreground">
                        Serving clients across 130 countries worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="text-center">
                <h3 className="font-serif text-xl font-bold mb-4">
                  Book & Pay for a Consultation
                </h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a personalized session to discuss your career goals or organizational training needs.
                </p>
                <Button
                  size="lg"
                  className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => setIsBookingModalOpen(true)}
                  data-testid="button-book-consultation"
                >
                  Book a Consultation
                </Button>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onSubmit={handleBookingSubmit}
      />
    </div>
  );
}
