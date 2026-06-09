import { Button } from "@/components/ui/button";
import GlassCard from "./GlassCard";
import { formatCurrency } from "@/lib/currency";
import { imageUrl, type CustomPlan } from "@/lib/sanity";

type Props = {
  plans: CustomPlan[];
  onBuyClick: (plan: CustomPlan) => void;
};

export default function CustomPlans({ plans, onBuyClick }: Props) {
  return (
    <section className="mt-24">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
          Want To Customise Your Mentorship Plan?
        </h2>
        <p className="text-lg text-muted-foreground">
          If you want to subscribe to specific services from Mentoria that resolve your career challenges, you can choose one or more of the following:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <GlassCard key={plan.planId} hover className="h-full flex flex-col overflow-hidden p-0">
            {plan.image && (
              <img
                src={imageUrl(plan.image, 700)}
                alt={plan.image.alt || plan.title}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
            )}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-serif text-xl font-bold mb-3">{plan.title}</h3>
              <div className="text-3xl font-bold text-accent mb-4">{formatCurrency(plan.price)}</div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">{plan.description}</p>
              <Button className="rounded-full w-full" onClick={() => onBuyClick(plan)}>
                Buy Now
              </Button>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
