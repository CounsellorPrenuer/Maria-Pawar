import { Users, Award, Globe, Lightbulb, TrendingUp, Heart, Target, Presentation, Briefcase } from "lucide-react";
import StatsCard from "@/components/StatsCard";
import ProgramGrid from "@/components/ProgramGrid";
import GlassCard from "@/components/GlassCard";

export default function LearningDevelopment() {
  const programs = [
    {
      icon: Users,
      title: "Executive Presence",
      description: "Develop commanding presence and leadership charisma that inspires teams and drives results.",
    },
    {
      icon: Lightbulb,
      title: "Leadership Coaching",
      description: "Transform into an inspiring and effective leader through personalized coaching and proven frameworks.",
    },
    {
      icon: TrendingUp,
      title: "Communication Skills",
      description: "Master the art of impactful communication across all mediums and audiences.",
    },
    {
      icon: Heart,
      title: "Emotional Intelligence",
      description: "Harness emotions for better relationships, decisions, and workplace success.",
    },
    {
      icon: Target,
      title: "Change Enablement",
      description: "Lead organizational transformation with confidence and strategic clarity.",
    },
    {
      icon: Presentation,
      title: "Presentation Skills",
      description: "Deliver compelling and memorable presentations that move audiences to action.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              Learning & Development | Global Training Experience
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering organizations worldwide with transformative learning programs that drive performance, engagement, and sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <StatsCard icon={Award} value="24 Years" label="Global Experience" color="primary" />
            <StatsCard icon={Users} value="36,000+" label="Learners Trained" color="secondary" />
            <StatsCard icon={Globe} value="130+" label="Countries Reached" color="accent" />
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-center mb-12">Our Programs</h2>
            <ProgramGrid programs={programs} />
          </div>

          <GlassCard className="text-center">
            <Briefcase className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold mb-4">More Programs Available</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact me to discuss bespoke training solutions tailored to your organization's specific needs and challenges.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors"
              data-testid="button-contact-custom"
            >
              Get in Touch
            </a>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
