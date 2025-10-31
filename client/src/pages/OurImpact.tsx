import Gallery from "@/components/Gallery";
import PartnerLogos from "@/components/PartnerLogos";
import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Video, MapPin, Users, CalendarDays, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import image1 from "@assets/1_1761822725337.jfif";
import image2 from "@assets/2_1761822725341.jfif";
import image3 from "@assets/3_1761822725342.jfif";
import image4 from "@assets/4_1761822725343.jfif";
import image5 from "@assets/5_1761822725344.jfif";
import image6 from "@assets/6_1761822725344.jfif";
import image7 from "@assets/7_1761822725345.jfif";
import image8 from "@assets/8_1761822725345.jfif";
import image9 from "@assets/9_1761822725346.jfif";
import rotaryLogo from "@assets/generated-image_1761825424530.png";
import qatarAirwaysLogo from "@assets/1200px-Qatar_Airways_Logo_1761824814807.png";
import airIndiaExpressLogo from "@assets/Air_India_Express_logo.svg_1761824814808.png";
import aptechLogo from "@assets/Aptech-1024x271_1761824814809.png";
import emiratesLogo from "@assets/Emirates_logo.svg_1761824814810.png";
import faureciaLogo from "@assets/generated-image (1)_1761825424527.png";
import forceMotorsLogo from "@assets/Force_Motors_Logo.svg_1761824814811.png";
import hpLogo from "@assets/Hindustan-Petroleum-Logo-Transparent_1761824814811.png";
import airIndiaLogo from "@assets/generated-image (2)_1761825424529.png";
import meaLogo from "@assets/Middle_East_Airlines-Logo.wine_1761824814813.png";
import symbiosisLogo from "@assets/symbiosis international university_1761824814813.webp";
import tajEduglobeLogo from "@assets/taj eduglobe_1761824814814.png";
import tataLogo from "@assets/tata_1761824814815.png";

export default function OurImpact() {
  const trainingImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
  const partnerLogos = [
    rotaryLogo,
    qatarAirwaysLogo,
    airIndiaExpressLogo,
    aptechLogo,
    emiratesLogo,
    faureciaLogo,
    forceMotorsLogo,
    hpLogo,
    airIndiaLogo,
    meaLogo,
    symbiosisLogo,
    tajEduglobeLogo,
    tataLogo
  ];

  return (
    <div className="h-full bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Our Impact</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming lives and organizations across the globe through impactful training and career guidance.
            </p>
          </div>

          <div className="mb-20">
            <Gallery images={trainingImages} title="Training in Action" />
          </div>

          <div className="mb-20">
            <PartnerLogos logos={partnerLogos} />
          </div>

          {/* Public Programs & Corporate Events Section */}
          <div className="mb-20">
            <AnimatedSection animation="fade-up" className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-4 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Join Our Programs</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Public Programs & Corporate Events
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience transformative learning through our open enrollment programs and customized corporate training
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Public Programs Card */}
              <AnimatedSection animation="slide-right">
                <GlassCard hover className="h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <CalendarDays className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">Open Public Programs</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    Join professionals from diverse industries in our interactive public workshops and training programs. Network, learn, and grow together.
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                      Currently Open Programs In:
                    </h4>
                    {["Mumbai", "Pune", "Ahmedabad"].map((city, index) => (
                      <div 
                        key={city}
                        className="flex items-center gap-3 p-3 rounded-lg bg-secondary/5 border border-secondary/10"
                        data-testid={`public-program-city-${index}`}
                      >
                        <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="font-medium">{city}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/pricing">
                    <Button 
                      variant="default" 
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      data-testid="button-view-programs"
                    >
                      View Programs & Register
                    </Button>
                  </Link>
                </GlassCard>
              </AnimatedSection>

              {/* Corporate Events Card */}
              <AnimatedSection animation="slide-left">
                <GlassCard hover className="h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">Corporate Events</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    Transform your organization with customized training programs designed specifically for your team's needs and challenges.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium">Customized Curriculum</p>
                        <p className="text-sm text-muted-foreground">Tailored content aligned with your organizational goals</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium">On-Site or Virtual</p>
                        <p className="text-sm text-muted-foreground">Flexible delivery modes to suit your requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium">Experiential Learning</p>
                        <p className="text-sm text-muted-foreground">Interactive workshops with practical application</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button 
                      variant="default" 
                      className="w-full"
                      data-testid="button-request-corporate"
                    >
                      Request Corporate Training
                    </Button>
                  </Link>
                </GlassCard>
              </AnimatedSection>
            </div>
          </div>

          {/* YouTube Videos Section */}
          <div className="relative py-12">
            <AnimatedSection animation="fade-up" className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4 backdrop-blur-sm">
                <Video className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Featured Content</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Watch & Learn</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore insights and expertise through our featured videos
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { id: "wtwPXcSkYTg", title: "Video 1" },
                { id: "wBAjeHvhWiw", title: "Video 2" },
                { id: "ymXZ3i_gWJQ", title: "Video 3" },
              ].map((video, index) => (
                <AnimatedSection key={index} animation="zoom-in" delay={index * 100}>
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full rounded-xl"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      data-testid={`video-${index}`}
                    ></iframe>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
