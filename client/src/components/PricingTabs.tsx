import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GlassCard from "./GlassCard";
import { Check } from "lucide-react";
import { formatCurrency } from "@/lib/currency";
import { imageUrl, type StandardPlan } from "@/lib/sanity";

const categories = [
  { id: "8-10", label: "8-10 Students" },
  { id: "10-12", label: "10-12 Students" },
  { id: "college", label: "College Students" },
  { id: "working", label: "Working Professionals" },
] as const;

type Props = {
  plans: StandardPlan[];
  onBuyClick: (plan: StandardPlan, category: string) => void;
};

export default function PricingTabs({ plans, onBuyClick }: Props) {
  const [activeTab, setActiveTab] = useState<string>(categories[0].id);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full max-w-5xl mx-auto grid-cols-2 lg:grid-cols-4 h-auto gap-3 bg-transparent p-0 mb-12">
        {categories.map((category) => (
          <TabsTrigger
            key={category.id}
            value={category.id}
            className="min-h-12 px-3 py-3 rounded-2xl text-sm sm:text-base font-semibold whitespace-normal transition-all data-[state=active]:bg-accent data-[state=active]:text-accent-foreground border-2 data-[state=active]:border-accent data-[state=inactive]:border-border/50"
          >
            {category.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id} className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {plans.filter((plan) => plan.subgroup === category.id).map((plan, index) => (
              <GlassCard key={plan.planId} hover className="h-full flex flex-col overflow-hidden p-0">
                {plan.image && (
                  <img
                    src={imageUrl(plan.image, 900)}
                    alt={plan.image.alt || plan.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                )}
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <span className="self-center px-4 py-1 rounded-full bg-secondary/10 text-xs font-semibold text-secondary uppercase tracking-wide mb-3">
                    {index === 0 ? "Standard" : "Premium"}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-center">{plan.title}</h3>
                  <div className="text-4xl font-bold text-accent text-center my-4">
                    {formatCurrency(plan.price)}
                  </div>
                  <div className="flex-1 space-y-3 mb-7">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-secondary" />
                        </span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => onBuyClick(plan, category.label)}
                    size="lg"
                    className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                    data-testid={`button-buy-${plan.planId}`}
                  >
                    Buy Now
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
