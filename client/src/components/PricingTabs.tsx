import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GlassCard from "./GlassCard";
import { Check, X } from "lucide-react";

interface Feature {
  text: string;
  included: boolean;
}

interface Service {
  planName: string;
  price: number;
  features: Feature[];
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
        planName: "Discover",
        price: 5500,
        features: [
          { text: "Psychometric assessment to measure your interests", included: true },
          { text: "1 career counselling session with Mentoria's expert career coaches", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Invites to live webinars by industry experts", included: true },
          { text: "Customized reports after each session with education pathways", included: false },
          { text: "Guidance on studying abroad", included: false },
          { text: "CV building during internship/graduation", included: false },
        ],
      },
      {
        planName: "Discover plus+",
        price: 15000,
        popular: true,
        features: [
          { text: "Psychometric assessments to measure your interests, personality and abilities", included: true },
          { text: "8 career counselling sessions (1 every year) with Mentoria's expert career coaches until graduation", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Invites to live webinars by industry experts", included: true },
          { text: "Customized reports after each session with education pathways", included: true },
          { text: "Guidance on studying abroad", included: true },
          { text: "CV building during internship/graduation", included: true },
        ],
      },
    ],
  },
  {
    id: "students-10-12",
    label: "10-12 Students",
    services: [
      {
        planName: "Achieve Online",
        price: 5999,
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "1 career counselling session", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Pre-recorded webinars by industry experts", included: true },
          { text: "Customized reports after each session with education pathways", included: false },
          { text: "Guidance on studying abroad", included: false },
          { text: "CV reviews during internship/graduation", included: false },
        ],
      },
      {
        planName: "Achieve Plus+",
        price: 10599,
        popular: true,
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "4 career counselling sessions", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Attend live webinars by industry experts", included: true },
          { text: "Customized reports after each session with education pathways", included: true },
          { text: "Guidance on studying abroad", included: true },
          { text: "CV reviews during internship/graduation", included: true },
        ],
      },
    ],
  },
  {
    id: "graduates",
    label: "College Graduates",
    services: [
      {
        planName: "Ascend Online",
        price: 6499,
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "1 career counselling session", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Pre-recorded webinars by industry experts", included: true },
          { text: "Customized reports after each session with information on certificate/online courses", included: false },
          { text: "Guidance on studying abroad", included: false },
          { text: "CV reviews for job application", included: false },
        ],
      },
      {
        planName: "Ascend Plus+",
        price: 10599,
        popular: true,
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "3 career counselling sessions", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Attend live webinars by industry experts", included: true },
          { text: "Customized reports after each session with information on certificate/online courses", included: true },
          { text: "Guidance on studying abroad", included: true },
          { text: "CV reviews for job application", included: true },
        ],
      },
    ],
  },
  {
    id: "professionals",
    label: "Working Professionals",
    services: [
      {
        planName: "Ascend Online",
        price: 6499,
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "1 career counselling session", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Pre-recorded webinars by industry experts", included: true },
          { text: "Customized reports after each session with information on certificate/online courses", included: false },
          { text: "Guidance on studying abroad", included: false },
          { text: "CV reviews for job application", included: false },
        ],
      },
      {
        planName: "Ascend Plus+",
        price: 10599,
        popular: true,
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "2 career counselling sessions", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Attend live webinars by industry experts", included: true },
          { text: "Customized reports after each session with information on certificate/online courses", included: true },
          { text: "Guidance on studying abroad", included: true },
          { text: "CV reviews for job application", included: true },
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
                      <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-3">
                        <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
                          {index === 0 ? "Standard" : "Premium"}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold mb-2">
                        {service.planName}
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
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            feature.included 
                              ? "bg-secondary/20" 
                              : "bg-muted"
                          }`}>
                            {feature.included ? (
                              <Check className="w-3 h-3 text-secondary" />
                            ) : (
                              <X className="w-3 h-3 text-muted-foreground" />
                            )}
                          </div>
                          <span className={`text-sm ${
                            feature.included 
                              ? "text-muted-foreground" 
                              : "text-muted-foreground/60"
                          }`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => onBuyClick(service.planName, category.label, service.price)}
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
