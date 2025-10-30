import { Users, Award, Globe, Lightbulb, TrendingUp, Heart, Target, Presentation, Briefcase, Sparkles, Crown, Brain, MessageSquare, GraduationCap, RefreshCw } from "lucide-react";
import StatsCard from "@/components/StatsCard";
import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "wouter";

export default function LearningDevelopment() {
  const programs = [
    {
      icon: Crown,
      title: "Executive Presence",
      subtitle: "The Unveiling of Authority",
      tagline: "She is... the one who commands the room before she even speaks.",
      description: "There is a silent, magnetic field that surrounds true leaders—a power that transcends titles and resumes. This is the elusive quality of Executive Presence. For too long, it has been treated as an innate gift. We are here to tell you it is a masterable skill.",
      fullDescription: "This isn't a program about superficial charm or a new wardrobe. It's about the seismic shift within: the alignment of your intent, your voice, and your body language into a single, resonant frequency of authority. We delve into the psychology of influence, the neuroscience of trust, and the art of strategic communication.",
      opportunity: "While your peers are still relying on their track record alone, our alumni are mastering the silent language of leadership that bypasses logic and speaks directly to decision-makers. They are learning to project an unshakeable confidence that makes them the obvious choice for high-visibility roles.",
      experience: "Through high-stakes, real-time business simulations, immediate video playback analysis, and personalized, one-on-one coaching with experts, you will not just learn the principles—you will live them.",
    },
    {
      icon: Target,
      title: "Leadership",
      subtitle: "The Architect of Tomorrow",
      tagline: "She is... the quiet force who turns a crisis into a defining moment for her team.",
      description: "Forget the outdated models of command-and-control. The 21st-century leader is not a dictator; she is an architect of possibility. In a world defined by volatility, uncertainty, complexity, and ambiguity (VUCA), true leadership is about cultivating the collective genius of the people around you.",
      fullDescription: "This program is a deep dive into Adaptive Leadership, moving beyond management tactics to explore the core identity of a transformational leader. We confront the uncomfortable truths of power, vulnerability, and ethical decision-making under pressure.",
      opportunity: "Organizations led by managers, not true leaders, are already showing signs of decay—talent flight, stagnant growth, and a crippling inability to pivot. This program gives you the tools to lead your organization through the inevitable disruptions ahead.",
      experience: "We utilize complex, multi-day organizational simulations where your decisions have immediate, tangible consequences on a simulated P&L and team morale. You will practice leading through failure, mediating high-conflict scenarios, and communicating a compelling vision.",
    },
    {
      icon: MessageSquare,
      title: "Business Communication",
      subtitle: "The Art of Undeniable Clarity",
      tagline: "She is... the voice that cuts through the noise, making complexity sound like destiny.",
      description: "In the modern business landscape, communication is not a soft skill—it is the hardest lever of influence. Every brilliant strategy, every groundbreaking idea, every critical negotiation hinges on your ability to transmit your vision with undeniable clarity and emotional resonance.",
      fullDescription: "This program is the definitive masterclass in Strategic Communication. We explore the architecture of persuasive narrative, the psychology of audience engagement, and the power of data-driven storytelling. You will learn to craft messages that don't just inform, but transform.",
      opportunity: "The digital age has shortened attention spans to mere seconds. While others are drowning in jargon and endless slides, our alumni are closing deals with a single, perfectly phrased sentence. They are the ones whose ideas get funded, whose projects get prioritized.",
      experience: "You will participate in live, recorded negotiation role-plays, rapid-fire Q&A sessions, and real-time crisis communication drills. The core involves the Narrative Architecture Workshop, where you deconstruct and rebuild your own professional story until it is a weapon of influence.",
    },
    {
      icon: Heart,
      title: "Emotional Intelligence",
      subtitle: "The Unseen Engine of Success",
      tagline: "She is... the leader who can feel the pulse of the room and knows exactly what to say to heal it.",
      description: "In an age dominated by algorithms and data, the single most valuable asset is not your IQ, but your EQ. Emotional Intelligence is the hidden engine of high performance, the silent differentiator between a brilliant individual contributor and a truly transformative leader.",
      fullDescription: "This program is a profound journey into the four pillars of EQ: Self-Awareness, Self-Management, Social Awareness, and Relationship Management. We move beyond theoretical concepts to explore the neuroscience of emotion, teaching you practical, high-leverage techniques for regulating stress, managing conflict, and building authentic trust.",
      opportunity: "Global studies confirm that organizations with high collective EQ outperform their peers by up to 20% in profitability and retention. While others dismiss EQ as a 'soft skill,' our alumni are leveraging it as a strategic weapon, building cultures of resilience.",
      experience: "Utilizing proprietary biofeedback technology and real-time emotional mapping exercises, the program culminates in the Conflict Resolution Crucible, a series of high-stakes, emotionally charged role-plays where you must apply advanced EQ techniques to de-escalate tension.",
    },
    {
      icon: GraduationCap,
      title: "Train The Trainer",
      subtitle: "The Multiplier of Genius",
      tagline: "She is... the master educator who doesn't just share knowledge, but ignites a movement of learning.",
      description: "The transfer of knowledge is the lifeblood of any growing organization. But there is a vast difference between simply knowing a subject and knowing how to teach it so that it sticks, transforms, and multiplies. A poor trainer is a bottleneck; a master trainer is a force multiplier.",
      fullDescription: "This is the definitive program on Experiential Instructional Design. We dissect the science of adult learning (Andragogy), moving beyond passive lectures to create dynamic, immersive, and unforgettable learning environments. You will master the art of facilitation, the psychology of engagement, and the critical skill of handling challenging participants.",
      opportunity: "The internal training function is rapidly evolving from a cost center to a strategic competitive advantage. Organizations that invest in master trainers are seeing unprecedented speed in upskilling their workforce and launching new initiatives.",
      experience: "You will design, deliver, and receive immediate, intensive feedback on your own training modules. The core is the 'Design-Deliver-Debrief' Cycle, where you practice advanced facilitation techniques, manage live group dynamics, and learn to pivot your approach in real-time.",
    },
    {
      icon: RefreshCw,
      title: "Change Enabler",
      subtitle: "The Catalyst of Transformation",
      tagline: "She is... the one who sees the resistance in the room and turns it into the energy for the next breakthrough.",
      description: "In today's hyper-accelerated business climate, change is not an event; it is a constant state of being. The Change Enabler is the crucial, often-missing link: the individual who can bridge the gap between the executive vision and the front-line reality.",
      fullDescription: "This program is a masterclass in Human-Centric Change Management. We move beyond flowchart models to explore the deep psychological and cultural dynamics of organizational transformation. You will master the principles of emotional transition, stakeholder mapping, and the art of crafting a compelling, resonant narrative for change.",
      opportunity: "Organizations are hemorrhaging resources on failed transformations. The demand for certified, effective Change Enablers is skyrocketing, making them one of the most valuable and highly compensated roles in modern business.",
      experience: "The core is the 'Resistance-to-Resilience' Lab, where you practice difficult conversations, facilitate town halls designed to manage fear, and apply diagnostic tools to identify cultural barriers in real-time. You will leave with a complete toolkit for leading a successful, sustainable change initiative.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 sm:py-28 lg:py-32 gradient-mesh">
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95 backdrop-blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary">Global Training Excellence</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Learning & Development
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Empowering organizations worldwide with transformative learning programs that drive performance, engagement, and sustainable growth.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatsCard icon={Award} value="24 Years" label="Global Experience" color="primary" />
              <StatsCard icon={Users} value="36,000+" label="Learners Trained" color="secondary" />
              <StatsCard icon={Globe} value="130+" label="Countries Reached" color="accent" />
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Programs Section */}
      <div className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Programs That Demand Attention
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Intensely experiential programs designed to transform potential into tangible, undeniable results.
            </p>
          </AnimatedSection>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
                  <GlassCard className="relative" hover>
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <program.icon className="w-8 h-8 text-secondary" />
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2" data-testid={`text-program-${index}-title`}>
                            {program.title}
                          </h3>
                          <p className="text-lg font-semibold text-secondary mb-2" data-testid={`text-program-${index}-subtitle`}>
                            {program.subtitle}
                          </p>
                          <p className="text-sm italic text-muted-foreground mb-4" data-testid={`text-program-${index}-tagline`}>
                            {program.tagline}
                          </p>
                        </div>

                        <p className="text-base leading-relaxed" data-testid={`text-program-${index}-description`}>
                          {program.description}
                        </p>

                        <div className="pt-4 border-t border-border/50">
                          <p className="text-sm leading-relaxed text-muted-foreground" data-testid={`text-program-${index}-full-description`}>
                            {program.fullDescription}
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 pt-4">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-sm uppercase tracking-wide text-accent">
                              The Opportunity
                            </h4>
                            <p className="text-sm leading-relaxed text-muted-foreground" data-testid={`text-program-${index}-opportunity`}>
                              {program.opportunity}
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-sm uppercase tracking-wide text-secondary">
                              The Experience
                            </h4>
                            <p className="text-sm leading-relaxed text-muted-foreground" data-testid={`text-program-${index}-experience`}>
                              {program.experience}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 sm:py-20 lg:py-24 gradient-mesh">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80 backdrop-blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="zoom-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <GlassCard className="relative text-center">
                <Briefcase className="w-12 h-12 text-accent mx-auto mb-4" />
                <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
                  Ready to Transform Your Organization?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Contact me to discuss bespoke training solutions tailored to your organization's specific needs and challenges. Each program is intensely experiential, designed to forge real-world mastery under expert guidance.
                </p>
                <Link href="/contact">
                  <a
                    className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors"
                    data-testid="button-contact-ld"
                  >
                    Get in Touch
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
