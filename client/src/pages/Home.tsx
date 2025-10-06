import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import profileImg from "@assets/profile_1759744643907.png";
import { GraduationCap, Users, Plane, Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: GraduationCap,
      title: "Career Guidance",
      description: "Scientifically-backed career counseling with 85% accuracy psychometric assessments and access to 12,000+ career options.",
      link: "/career-guidance",
    },
    {
      icon: Users,
      title: "Learning & Development",
      description: "World-class corporate training programs including Executive Presence, Leadership Coaching, and Communication Skills.",
      link: "/learning-development",
    },
    {
      icon: Plane,
      title: "Aviation Training",
      description: "Specialized training and development programs designed for the unique challenges of the aviation industry.",
      link: "/aviation",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* About Me Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <GlassCard hover>
                <img
                  src={profileImg}
                  alt="Maria Pawar"
                  className="w-full rounded-2xl"
                  data-testid="img-profile"
                />
              </GlassCard>
            </div>

            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-4" data-testid="text-name">
                Maria Pawar
              </h1>
              <p className="text-xl lg:text-2xl text-secondary font-semibold mb-6" data-testid="text-title">
                Founder, Inspire2Grow
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-bio">
                With over 24 years of global experience across 130 countries, I've had the privilege of empowering 36,000+ individuals and organizations to unlock their full potential. Through Inspire2Grow, I combine cutting-edge psychometric assessments with personalized career counseling and world-class corporate training to help you achieve clarity, confidence, and success in an AI-driven world.
              </p>
              <Link href="/pricing">
                <Button
                  size="lg"
                  className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8"
                  data-testid="button-explore-services"
                >
                  Explore My Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Offered Section */}
      <div className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Services Offered</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions for career development and organizational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GlassCard key={index} hover>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                    <service.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Link href={service.link}>
                    <Button
                      variant="outline"
                      className="rounded-full"
                      data-testid={`button-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your career or organization? Let's connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <GlassCard hover className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <a
                href="mailto:2inspire2grow@gmail.com"
                className="text-muted-foreground hover:text-secondary transition-colors"
                data-testid="link-home-email"
              >
                2inspire2grow@gmail.com
              </a>
            </GlassCard>

            <GlassCard hover className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <a
                href="tel:+918600045797"
                className="text-muted-foreground hover:text-secondary transition-colors"
                data-testid="link-home-phone"
              >
                +91 86000 45797
              </a>
            </GlassCard>

            <GlassCard hover className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Global Reach</h3>
              <p className="text-muted-foreground">
                Serving 130 countries worldwide
              </p>
            </GlassCard>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-12"
                data-testid="button-home-contact"
              >
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
