import { Check, X } from "lucide-react";
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
  return (
    <GlassCard className={isPremium ? "border-accent/50" : ""} hover>
      {isPremium && (
        <div className="absolute top-4 right-4">
          <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
            PREMIUM
          </span>
        </div>
      )}
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
              <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            )}
            <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground"}`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <Button
        className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
        onClick={onBuyClick}
        data-testid={`button-buy-${planName.toLowerCase().replace(/\s+/g, "-")}`}
      >
        BUY NOW
      </Button>
    </GlassCard>
  );
}
