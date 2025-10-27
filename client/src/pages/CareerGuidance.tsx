import { ClipboardList, BarChart, MessageSquare, Target, Users, Award, Handshake } from "lucide-react";
import Timeline from "@/components/Timeline";
import StatsCard from "@/components/StatsCard";
import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import inspire2GrowLogo from "@assets/logo_1759744643906.png";
import mentoriaLogo from "@assets/white mentoria logo_1760615947881.png";

export default function CareerGuidance() {
  const timelineSteps = [
    {
      icon: ClipboardList,
      title: "Psychometric Assessment",
      description: "Complete a comprehensive assessment to measure your interests, personality, and abilities with 85% accuracy.",
    },
    {
      icon: BarChart,
      title: "Detailed Report",
      description: "Receive a personalized report exploring over 12,000 career options tailored to your unique profile.",
    },
    {
      icon: MessageSquare,
      title: "Personalized Counselling",
      description: "Work one-on-one with Mentoria's expert career coaches to create your customized action plan.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-8">
              Career Counselling
            </h1>
            
            <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8 flex-wrap">
              <div className="flex flex-col items-center group">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border-2 border-primary/20 flex items-center justify-center px-4 py-2 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/40 mb-3">
                  <img 
                    src={inspire2GrowLogo} 
                    alt="Inspire2Grow Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-muted-foreground">Inspire2Grow</p>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm border-2 border-accent/30 flex items-center justify-center animate-pulse">
                  <Handshake className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                </div>
              </div>

              <div className="flex flex-col items-center group">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 backdrop-blur-sm border-2 border-secondary/20 flex items-center justify-center px-4 py-2 transition-all duration-300 group-hover:scale-105 group-hover:border-secondary/40 mb-3">
                  <img 
                    src={mentoriaLogo} 
                    alt="Mentoria Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-muted-foreground">Mentoria</p>
              </div>
            </div>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover your true potential with scientifically-backed career guidance designed for students and professionals at every stage of their journey.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <StatsCard icon={Target} value="85%" label="Assessment Accuracy" color="primary" />
            <StatsCard icon={Users} value="12,000+" label="Career Options" color="secondary" />
            <StatsCard icon={Award} value="1-on-1" label="Expert Sessions" color="accent" />
          </div>

          <GlassCard className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-center mb-12">How It Works</h2>
            <Timeline steps={timelineSteps} />
          </GlassCard>

          <GlassCard>
            <h2 className="font-serif text-3xl font-bold mb-6">Why Choose Our Career Guidance?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Scientifically Validated</h3>
                <p className="text-muted-foreground">
                  Our psychometric assessments are backed by rigorous research and have proven 85% accuracy in predicting career satisfaction.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Comprehensive Options</h3>
                <p className="text-muted-foreground">
                  Explore over 12,000 career paths across industries, ensuring you find the perfect match for your unique talents.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
                <p className="text-muted-foreground">
                  Work with certified career coaches from Mentoria who bring years of experience in guiding students and professionals.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Lifetime Support</h3>
                <p className="text-muted-foreground">
                  Get lifetime access to our Knowledge Gateway and regular webinars with industry experts to stay ahead in your career.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
