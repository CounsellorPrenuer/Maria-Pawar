import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import profileImg from "@assets/profile_1759744643907.png";

export default function Home() {
  return (
    <div className="min-h-screen">
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
    </div>
  );
}
