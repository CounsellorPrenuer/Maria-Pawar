import { useState } from "react";
import { Mail, Phone, MapPin, Sparkles, Briefcase, Users, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import ContactForm from "@/components/ContactForm";
import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingElements from "@/components/FloatingElements";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setLocation] = useLocation();

  const handleServiceChoice = (path: string) => {
    setIsModalOpen(false);
    setLocation(path);
  };

  return (
    <div className="h-full relative overflow-hidden">
      <FloatingElements />
      <div className="absolute inset-0 gradient-mesh"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Let's Connect</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6" data-testid="text-contact-title">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-description">
            Let's discuss how Inspire2Grow can help you or your organization achieve excellence
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <AnimatedSection animation="slide-right" delay={100}>
            <ContactForm />
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={200} className="space-y-6">
            <GlassCard hover>
              <h2 className="font-serif text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1">Email</p>
                    <div className="space-y-1">
                      <a
                        href="mailto:2inspires2grow@gmail.com"
                        className="text-muted-foreground hover:text-secondary transition-colors break-all block"
                        data-testid="link-contact-email-1"
                      >
                        2inspires2grow@gmail.com
                      </a>
                      <a
                        href="mailto:inspirementoria@gmail.com"
                        className="text-muted-foreground hover:text-secondary transition-colors break-all block"
                        data-testid="link-contact-email-2"
                      >
                        inspirementoria@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a
                      href="tel:+918600045797"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-contact-phone"
                    >
                      +91 86000 45797
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Global Reach</p>
                    <p className="text-muted-foreground">
                      Serving clients across 130 countries worldwide
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <div 
              onClick={() => setIsModalOpen(true)}
              data-testid="card-personalized-guidance"
              className="cursor-pointer"
            >
              <GlassCard hover className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 mx-auto">
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">
                  Looking for Personalized Guidance?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Check out our pricing page to explore our comprehensive career counseling and corporate training packages
                </p>
              </GlassCard>
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
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
