import { Check, X, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "./GlassCard";

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingCardProps {
  planName: string;
  price: string;
  features: PricingFeature[];
  onBuyClick: () => void;
  isPremium?: boolean;
}

export default function PricingCard({
  planName,
  price,
  features,
  onBuyClick,
  isPremium = false,
}: PricingCardProps) {
  if (isPremium) {
    return (
      <div className="relative lg:scale-105 lg:-mt-4">
        {/* Animated gradient glow */}
        <div className="absolute -inset-3 bg-gradient-to-r from-accent via-secondary to-accent rounded-3xl blur-2xl opacity-75 animate-gradient"></div>
        
        {/* Premium ribbon */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/80 to-accent rounded-full blur-md"></div>
            <div className="relative bg-gradient-to-r from-accent via-accent to-secondary text-accent-foreground px-6 py-2 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm">
              <Crown className="w-4 h-4" />
              <span>MOST POPULAR</span>
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
        </div>

        <GlassCard className="relative bg-gradient-to-br from-accent/5 via-card/40 to-secondary/5 border-2 border-accent/60 shadow-2xl" hover>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/20 to-transparent rounded-tr-full"></div>
          
          <div className="relative text-center mb-6 pt-4">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-1 rounded-full mb-3">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-accent uppercase">Premium Plan</span>
            </div>
            <h3 className="font-serif text-3xl font-bold mb-3 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              {planName}
            </h3>
            <div className="text-5xl font-bold bg-gradient-to-r from-accent via-accent to-secondary bg-clip-text text-transparent mb-1">
              {price}
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                {feature.included ? (
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-destructive/50" />
                  </div>
                )}
                <span className={`text-sm font-medium ${feature.included ? "text-foreground" : "text-muted-foreground line-through"}`}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            className="w-full rounded-full bg-gradient-to-r from-accent via-accent to-secondary text-accent-foreground hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-base relative overflow-hidden group"
            onClick={onBuyClick}
            data-testid={`button-buy-${planName.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <span className="relative z-10">BUY NOW - BEST VALUE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </Button>
        </GlassCard>
      </div>
    );
  }

  return (
    <GlassCard hover className="relative">
      <div className="text-center mb-6">
        <h3 className="font-serif text-2xl font-bold mb-2">{planName}</h3>
        <div className="text-4xl font-bold text-primary mb-1">{price}</div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            {feature.included ? (
              <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-destructive/50 flex-shrink-0 mt-0.5" />
            )}
            <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground line-through"}`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <Button
        className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
        onClick={onBuyClick}
        data-testid={`button-buy-${planName.toLowerCase().replace(/\s+/g, "-")}`}
      >
        BUY NOW
      </Button>
    </GlassCard>
  );
}
