import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PricingTabs from "@/components/PricingTabs";
import CustomPlans from "@/components/CustomPlans";
import BookingModal from "@/components/BookingModal";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingElements from "@/components/FloatingElements";
import { Sparkles } from "lucide-react";
import { fetchCms } from "@/lib/sanity";

type SelectedPlan = {
  planId: string;
  title: string;
  category: string;
  price: number;
};

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan | null>(null);
  const cms = useQuery({
    queryKey: ["sanity", "cms"],
    queryFn: fetchCms,
    staleTime: 60_000,
    retry: 2,
  });

  const standardPlans = cms.data?.standardPlans ?? [];
  const customPlans = cms.data?.customPlans ?? [];
  const isLoading = cms.isLoading;
  const hasError = cms.isError && standardPlans.length === 0 && customPlans.length === 0;

  return (
    <div className="h-full relative overflow-hidden">
      <FloatingElements />
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Investment in Your Future</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Choose Your Path to Success
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored programs for every stage of your career journey
          </p>
        </AnimatedSection>

        {isLoading && <p className="text-center py-16">Loading current plans...</p>}
        {hasError && (
          <p className="text-center py-16 text-destructive">
            Pricing is temporarily unavailable. Please refresh or contact us.
          </p>
        )}
        {!isLoading && !hasError && (
          <>
            <PricingTabs
              plans={standardPlans}
              onBuyClick={(plan, category) =>
                setSelectedPlan({ planId: plan.planId, title: plan.title, category, price: plan.price })
              }
            />
            <CustomPlans
              plans={customPlans}
              onBuyClick={(plan) =>
                setSelectedPlan({ planId: plan.planId, title: plan.title, category: "Custom Mentorship", price: plan.price })
              }
            />
          </>
        )}
      </div>

      {selectedPlan && (
        <BookingModal
          open
          onOpenChange={(open) => !open && setSelectedPlan(null)}
          {...selectedPlan}
        />
      )}
    </div>
  );
}
