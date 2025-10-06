import { useState } from "react";
import PricingCard, { PricingFeature } from "./PricingCard";

export interface PricingPackage {
  planName: string;
  price: string;
  features: PricingFeature[];
  isPremium?: boolean;
}

export interface PricingCategory {
  id: string;
  label: string;
  standard: PricingPackage;
  premium: PricingPackage;
}

interface PricingTabsProps {
  categories: PricingCategory[];
  onBuyClick: (packageInfo: { category: string; package: string; price: string }) => void;
}

export default function PricingTabs({ categories, onBuyClick }: PricingTabsProps) {
  const [activeTab, setActiveTab] = useState(categories[0]?.id || "");

  const activeCategory = categories.find((cat) => cat.id === activeTab);

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === category.id
                ? "bg-accent text-accent-foreground border-2 border-accent"
                : "bg-card text-muted-foreground border-2 border-border hover:border-accent/50"
            }`}
            data-testid={`button-tab-${category.id}`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {activeCategory && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingCard
            {...activeCategory.standard}
            onBuyClick={() =>
              onBuyClick({
                category: activeCategory.label,
                package: activeCategory.standard.planName,
                price: activeCategory.standard.price,
              })
            }
          />
          <PricingCard
            {...activeCategory.premium}
            isPremium
            onBuyClick={() =>
              onBuyClick({
                category: activeCategory.label,
                package: activeCategory.premium.planName,
                price: activeCategory.premium.price,
              })
            }
          />
        </div>
      )}
    </div>
  );
}
