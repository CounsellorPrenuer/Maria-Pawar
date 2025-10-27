import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingElements from "@/components/FloatingElements";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import profileImg from "@assets/profile_1759744643907.png";
import { GraduationCap, Users, Plane, Mail, Phone, MapPin, Sparkles, TrendingUp, Award, ArrowRight, Briefcase } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setLocation] = useLocation();

  const handleServiceChoice = (path: string) => {
    setIsModalOpen(false);
    setLocation(path);
  };
  const services = [
    {
      icon: GraduationCap,
      title: "Career Guidance",
      description: "Scientifically-backed career counseling with 85% accuracy psychometric assessments and access to 12,000+ career options.",
      link: "/career-guidance",
      color: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Users,
      title: "Learning & Development",
      description: "World-class corporate training programs including Executive Presence, Leadership Coaching, and Communication Skills.",
      link: "/learning-development",
      color: "from-green-500/10 to-emerald-500/10",
    },
    {
      icon: Plane,
      title: "Aviation Training",
      description: "Specialized training and development programs designed for the unique challenges of the aviation industry.",
      link: "/aviation",
      color: "from-purple-500/10 to-pink-500/10",
    },
  ];

  const stats = [
    { icon: Award, value: "24+", label: "Years Experience", color: "text-accent" },
    { icon: Users, value: "36K+", label: "Learners Trained", color: "text-secondary" },
    { icon: TrendingUp, value: "130+", label: "Countries", color: "text-primary" },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with About Me */}
      <div className="relative min-h-[90vh] flex items-center">
        <FloatingElements />
        <div className="absolute inset-0 gradient-mesh"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <AnimatedSection animation="slide-right" className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-75"></div>
                <GlassCard hover className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
                  <img
                    src={profileImg}
                    alt="Maria Pawar"
                    className="w-full rounded-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-700"
                    data-testid="img-profile"
                  />
                </GlassCard>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={200} className="order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Career Clarity in an AI Era</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text" data-testid="text-name">
                Maria Pawar
              </h1>
              
              <p className="text-xl sm:text-2xl lg:text-3xl text-secondary font-semibold mb-6 flex items-center justify-center lg:justify-start gap-2" data-testid="text-title">
                <span>Founder, Inspire2Grow</span>
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0" data-testid="text-bio">
                With over <span className="text-accent font-semibold">24 years</span> of global experience across <span className="text-secondary font-semibold">130 countries</span>, I've empowered <span className="text-primary font-semibold">36,000+</span> individuals and organizations to unlock their full potential. Through Inspire2Grow, I combine cutting-edge psychometric assessments with personalized career counseling and world-class corporate training.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="rounded-full bg-accent px-8 group relative overflow-hidden w-full sm:w-auto"
                  data-testid="button-explore-services"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore Services
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Button>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 backdrop-blur-sm w-full sm:w-auto"
                    data-testid="button-hero-contact"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Stats Section */}
          <AnimatedSection animation="fade-up" delay={400} className="mt-16 lg:mt-24">
            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
                  </div>
                  <div className={`text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary">What We Offer</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Services Offered</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions for career development and organizational excellence
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="zoom-in" delay={index * 100}>
                <Link href={service.link}>
                  <div className="h-full group cursor-pointer">
                    <div className="relative h-full">
                      <div className={`absolute -inset-1 bg-gradient-to-br ${service.color} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-75`}></div>
                      <GlassCard hover className="relative h-full flex flex-col">
                        <div className="text-center flex-1 flex flex-col">
                          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
                          </div>
                          <h3 className="font-serif text-xl sm:text-2xl font-bold mb-4">{service.title}</h3>
                          <p className="text-sm sm:text-base text-muted-foreground mb-6 flex-1">{service.description}</p>
                          <div className="flex items-center justify-center gap-2 text-secondary font-semibold group-hover:gap-4 transition-all">
                            <span>Learn More</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </GlassCard>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative py-16 sm:py-20 lg:py-32 gradient-mesh">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80 backdrop-blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Let's Connect</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Get in Touch</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your career or organization? Let's connect.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {[
              { icon: Mail, title: "Email", value: "2inspire2grow@gmail.com", href: "mailto:2inspire2grow@gmail.com", testId: "link-home-email" },
              { icon: Phone, title: "Phone", value: "+91 86000 45797", href: "tel:+918600045797", testId: "link-home-phone" },
              { icon: MapPin, title: "Global Reach", value: "Serving 130 countries", href: null, testId: null },
            ].map((contact, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="h-full">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
                    <GlassCard hover className="relative text-center h-full">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <contact.icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{contact.title}</h3>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-muted-foreground hover:text-secondary transition-colors text-sm sm:text-base break-words"
                          data-testid={contact.testId}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm sm:text-base">{contact.value}</p>
                      )}
                    </GlassCard>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="zoom-in" delay={300} className="text-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-12 group relative overflow-hidden text-base sm:text-lg"
                data-testid="button-home-contact"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-2xl border-0 bg-background/95 backdrop-blur-xl">
          <DialogHeader className="text-center pb-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-4 mx-auto">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <DialogTitle className="font-serif text-3xl mb-2">Choose Your Path</DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              Select the service that best fits your needs
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
            <div
              onClick={() => handleServiceChoice("/career-guidance")}
              className="group relative p-6 rounded-xl border-2 border-border bg-card hover-elevate active-elevate-2 cursor-pointer transition-all"
              data-testid="button-choose-career-guidance"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">
                  Career Guidance
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Personalized career counseling and professional development strategies
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div
              onClick={() => handleServiceChoice("/learning-development")}
              className="group relative p-6 rounded-xl border-2 border-border bg-card hover-elevate active-elevate-2 cursor-pointer transition-all"
              data-testid="button-choose-learning-development"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">
                  Learning & Development
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Corporate training and organizational skill development programs
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-secondary">
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
