import Gallery from "@/components/Gallery";
import PartnerLogos from "@/components/PartnerLogos";

export default function OurImpact() {
  const trainingImages = Array(9).fill("placeholder");
  const partnerLogos = Array(8).fill("placeholder");

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
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

          <PartnerLogos logos={partnerLogos} />
        </div>
      </div>
    </div>
  );
}
