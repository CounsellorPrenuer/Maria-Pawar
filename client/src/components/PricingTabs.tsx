import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GlassCard from "./GlassCard";
import { Check } from "lucide-react";

interface Service {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

interface Category {
  id: string;
  label: string;
  services: Service[];
}

interface PricingTabsProps {
  onBuyClick: (serviceName: string, category: string, price: number) => void;
}

const pricingData: Category[] = [
  {
    id: "students-8-9",
    label: "8-9 Students",
    services: [
      {
        name: "Career Clarity Program",
        price: 15000,
        features: [
          "Scientifically validated psychometric assessment",
          "85% accuracy in career prediction",
          "Access to 12,000+ career options database",
          "Personalized career roadmap",
          "One-on-one counseling session (60 min)",
          "Subject selection guidance",
        ],
      },
      {
        name: "Career Clarity Plus",
        price: 25000,
        popular: true,
        features: [
          "Everything in Career Clarity Program",
          "3 one-on-one counseling sessions",
          "Parent counseling session included",
          "Stream selection strategy",
          "Skill development roadmap",
          "6-month email support",
        ],
      },
    ],
  },
  {
    id: "students-10-12",
    label: "10-12 Students",
    services: [
      {
        name: "Career Discovery",
        price: 20000,
        features: [
          "Advanced psychometric assessment",
          "College & course selection guidance",
          "Career path mapping",
          "Two counseling sessions (90 min each)",
          "Entrance exam strategy",
          "Career portfolio development",
        ],
      },
      {
        name: "Career Discovery Premium",
        price: 35000,
        popular: true,
        features: [
          "Everything in Career Discovery",
          "5 counseling sessions",
          "Mock interview preparation",
          "Resume building workshop",
          "College application support",
          "1-year career mentorship",
        ],
      },
    ],
  },
  {
    id: "graduates",
    label: "College Graduates",
    services: [
      {
        name: "Career Transition",
        price: 30000,
        features: [
          "Comprehensive career assessment",
          "Industry analysis & job market insights",
          "Personal branding strategy",
          "3 counseling sessions",
          "Interview preparation",
          "Networking guidance",
        ],
      },
      {
        name: "Career Accelerator",
        price: 50000,
        popular: true,
        features: [
          "Everything in Career Transition",
          "6 counseling sessions",
          "Resume & LinkedIn optimization",
          "Job search strategy",
          "Salary negotiation coaching",
          "3-month career support",
        ],
      },
    ],
  },
  {
    id: "professionals",
    label: "Working Professionals",
    services: [
      {
        name: "Executive Coaching",
        price: 75000,
        features: [
          "Leadership assessment",
          "Executive presence development",
          "6 one-on-one coaching sessions",
          "Communication skills enhancement",
          "Conflict resolution strategies",
          "Personal development plan",
        ],
      },
      {
        name: "Executive Mastery",
        price: 125000,
        popular: true,
        features: [
          "Everything in Executive Coaching",
          "12 coaching sessions over 6 months",
          "360-degree feedback analysis",
          "Team leadership training",
          "Strategic thinking workshops",
          "Ongoing email & call support",
        ],
      },
    ],
  },
];

export default function PricingTabs({ onBuyClick }: PricingTabsProps) {
  const [activeTab, setActiveTab] = useState(pricingData[0].id);

  return (
    <div className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-transparent p-0 mb-12">
          {pricingData.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="px-4 py-3 rounded-full font-semibold transition-all data-[state=active]:bg-accent data-[state=active]:text-accent-foreground backdrop-blur-sm border-2 data-[state=active]:border-accent data-[state=inactive]:border-border/40"
              data-testid={`button-tab-${category.id}`}
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {pricingData.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {category.services.map((service, index) => (
                <div key={index} className="relative group">
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <div className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-semibold text-sm shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-br rounded-3xl blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75 ${
                      service.popular
                        ? "from-accent/40 to-secondary/40"
                        : "from-primary/30 to-secondary/30"
                    }`}
                  ></div>
                  <GlassCard hover className="relative h-full flex flex-col">
                    <div className="text-center mb-6">
                      <h3 className="font-serif text-2xl font-bold mb-2">
                        {service.name}
                      </h3>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-4xl font-bold text-accent">
                          ₹{service.price.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-secondary" />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => onBuyClick(service.name, category.label, service.price)}
                      size="lg"
                      className={`w-full rounded-full ${
                        service.popular
                          ? "bg-accent text-accent-foreground hover:bg-accent/90"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      }`}
                      data-testid={`button-buy-${category.id}-${index}`}
                    >
                      BUY NOW
                    </Button>
                  </GlassCard>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
