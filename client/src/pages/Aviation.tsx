import { Plane, Users, Target, Award, Sparkles, Shield, Heart, MessageSquare } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "wouter";

export default function Aviation() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 sm:py-28 lg:py-32 gradient-mesh">
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95 backdrop-blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 backdrop-blur-sm">
              <Plane className="w-10 h-10 text-primary" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Aviation Excellence</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-aviation-title">
              Aviation Interviews & Preparations
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-secondary mb-4" data-testid="text-aviation-subtitle">
              The Final Boarding Call
            </p>
            <p className="text-lg sm:text-xl italic text-muted-foreground max-w-3xl mx-auto" data-testid="text-aviation-tagline">
              She was... an international cabin crew professional who walked into interviews with the quiet confidence of a thousand successful services.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="relative group mb-12">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
              <GlassCard className="relative">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-6 text-center" data-testid="text-challenge-heading">
                  The Challenge
                </h2>
                <p className="text-lg leading-relaxed mb-6" data-testid="text-challenge-description-1">
                  The journey to an airline career is a demanding process of psychological scrutiny, service expertise, and intense pressure. The interview is not just a test of your hospitality skills; it is a test of who you are under stress—your ability to manage a crisis, your empathy, and your unshakeable commitment to passenger safety and comfort.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground" data-testid="text-challenge-description-2">
                  One moment of hesitation, one lapse in judgment, one failure to articulate your decision-making process can ground your career before it even takes off. You are not just being hired to serve; you are being hired to be the face, the first responder, and the emotional anchor for hundreds of passengers.
                </p>
              </GlassCard>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <div className="relative group mb-12">
              <div className="absolute -inset-1 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
              <GlassCard className="relative">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-6 text-center" data-testid="text-program-heading">
                  The Program
                </h2>
                <p className="text-lg leading-relaxed mb-6" data-testid="text-program-description-1">
                  This program is the ultimate, high-fidelity preparation for the most critical moment of your career. We move beyond memorization of standard answers to focus on the Non-Technical Skills (NTS) that airlines truly screen for: Crew Resource Management (CRM), Crisis Intervention, and the crucial, often-overlooked art of projecting calm authority.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground" data-testid="text-program-description-2">
                  We teach you to articulate your past experiences as lessons in resilience, your knowledge as instinct, and your presence as an unshakeable asset to the cabin. We prepare you for the psychological intensity of the group assessment and one-on-one interviews, ensuring your composure remains clear and concise when the pressure is at its peak.
                </p>
              </GlassCard>
            </div>
          </AnimatedSection>

          {/* Key Areas */}
          <AnimatedSection animation="fade-up" delay={200}>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-8 text-center">
              What You'll Master
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-50"></div>
                <GlassCard className="relative text-center h-full" hover>
                  <Users className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3" data-testid="text-skill-crm-title">Crew Resource Management</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-skill-crm-description">
                    Master the art of teamwork, communication, and decision-making in high-pressure cabin environments
                  </p>
                </GlassCard>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-50"></div>
                <GlassCard className="relative text-center h-full" hover>
                  <Shield className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3" data-testid="text-skill-crisis-title">Crisis Intervention</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-skill-crisis-description">
                    Learn to handle emergency situations with calm authority and clear communication protocols
                  </p>
                </GlassCard>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-50"></div>
                <GlassCard className="relative text-center h-full" hover>
                  <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3" data-testid="text-skill-eq-title">Emotional Intelligence</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-skill-eq-description">
                    Develop the empathy and emotional control that airlines demand from their cabin crew
                  </p>
                </GlassCard>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-50"></div>
                <GlassCard className="relative text-center h-full" hover>
                  <MessageSquare className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3" data-testid="text-skill-interview-title">Interview Excellence</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-skill-interview-description">
                    Perfect your responses for HR, Group Assessment, and Panel interviews with expert feedback
                  </p>
                </GlassCard>
              </div>
            </div>
          </AnimatedSection>

          {/* The Opportunity */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="relative group mb-12">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
              <GlassCard className="relative">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-6 text-center" data-testid="text-opportunity-heading">
                  The Opportunity
                </h2>
                <p className="text-lg leading-relaxed mb-6" data-testid="text-opportunity-description-1">
                  The global demand for exceptional cabin crew is surging, but the standards for emotional intelligence and crisis management are higher than ever. Airlines are not looking for good applicants; they are looking for perfect candidates—those who have demonstrated a mastery of both service excellence and emotional control.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground" data-testid="text-opportunity-description-2">
                  Every day you spend preparing with outdated, generic materials is a day your peers are training in our high-fidelity mock interviews, mastering the exact psychological and behavioral traps that eliminate 90% of applicants. Enrolling in this program means you gain personalized coaching from active airline recruitment personnel, ensuring you present your absolute best self.
                </p>
              </GlassCard>
            </div>
          </AnimatedSection>

          {/* The Experience */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="relative group mb-12">
              <div className="absolute -inset-1 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
              <GlassCard className="relative">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-6 text-center" data-testid="text-experience-heading">
                  The Experience
                </h2>
                <p className="text-lg leading-relaxed mb-6" data-testid="text-experience-description">
                  This is an intensely experiential program, conducted in a simulated airline recruitment environment. You will face multiple mock interviews—HR, Group Assessment, and Panel—with assessors who are current or former airline recruitment specialists.
                </p>
                <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
                  <h3 className="font-semibold text-lg mb-3 text-accent" data-testid="text-roleplay-title">
                    Service and Safety Scenario Role-Play
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground" data-testid="text-roleplay-description">
                    The core of the program is practicing the exact protocols for passenger management and emergency response, focusing on emotional control and clear communication under duress. This is not a study guide; it is a dress rehearsal for your future.
                  </p>
                </div>
              </GlassCard>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 sm:py-20 lg:py-24 gradient-mesh">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80 backdrop-blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="zoom-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <GlassCard className="relative text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
                  Ready to Soar?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Don't risk being left in the waiting lounge while others are already soaring into their dream careers. Contact me today to discuss your aviation career preparation and ensure you present your absolute best self in every interview.
                </p>
                <Link href="/contact">
                  <a
                    className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
                    data-testid="button-contact-aviation"
                  >
                    Start Your Journey
                  </a>
                </Link>
              </GlassCard>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
