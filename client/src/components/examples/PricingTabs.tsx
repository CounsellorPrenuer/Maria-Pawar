import PricingTabs from '../PricingTabs'

export default function PricingTabsExample() {
  const categories = [
    {
      id: "8-9-students",
      label: "8-9 STUDENTS",
      standard: {
        planName: "Discover",
        price: "₹ 5,500",
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
      premium: {
        planName: "Discover plus+",
        price: "₹ 15,000",
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
    },
    {
      id: "10-12-students",
      label: "10-12 STUDENTS",
      standard: {
        planName: "Achieve Online",
        price: "₹ 5,999",
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
      premium: {
        planName: "Achieve Plus+",
        price: "₹ 10,599",
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
    },
  ]

  return (
    <div className="p-8 bg-gradient-to-br from-background to-primary/5">
      <PricingTabs
        categories={categories}
        onBuyClick={(info) => console.log('Buy clicked:', info)}
      />
    </div>
  )
}
