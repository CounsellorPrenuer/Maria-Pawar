import { useState } from "react";
import PricingTabs from "@/components/PricingTabs";
import BookingModal from "@/components/BookingModal";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingElements from "@/components/FloatingElements";
import { Sparkles } from "lucide-react";

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{
    serviceName: string;
    category: string;
    price: number;
  } | null>(null);

  const handleBuyClick = (serviceName: string, category: string, price: number) => {
    setSelectedService({ serviceName, category, price });
    setIsModalOpen(true);
  };

  return (
    <div className="h-full relative overflow-hidden">
      <FloatingElements />
      <div className="absolute inset-0 gradient-mesh"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Investment in Your Future</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6" data-testid="text-pricing-title">
            Choose Your Path to Success
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-pricing-description">
            Tailored programs for every stage of your career journey
          </p>
        </AnimatedSection>

        <AnimatedSection animation="zoom-in" delay={200}>
          <PricingTabs onBuyClick={handleBuyClick} />
        </AnimatedSection>
      </div>

      {selectedService && (
        <BookingModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          serviceName={selectedService.serviceName}
          category={selectedService.category}
          price={selectedService.price}
        />
      )}
    </div>
  );
}
