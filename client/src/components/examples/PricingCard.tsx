import PricingCard from '../PricingCard'

export default function PricingCardExample() {
  const features = [
    { text: "Psychometric assessment to measure your interests", included: true },
    { text: "1 career counselling session", included: true },
    { text: "Lifetime access to Knowledge Gateway", included: true },
    { text: "Customized reports after each session", included: false },
    { text: "Guidance on studying abroad", included: false },
  ]

  return (
    <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 max-w-md">
      <PricingCard
        planName="Discover"
        price="₹ 5,500"
        features={features}
        onBuyClick={() => console.log('Buy clicked')}
      />
    </div>
  )
}
