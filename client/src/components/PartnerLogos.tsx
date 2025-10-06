interface PartnerLogosProps {
  logos: string[];
}

export default function PartnerLogos({ logos }: PartnerLogosProps) {
  return (
    <div>
      <h2 className="font-serif text-3xl font-bold text-center mb-12">Our Valued Partners</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="aspect-video backdrop-blur-xl bg-card/20 border border-border/30 rounded-2xl p-6 flex items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-center text-muted-foreground text-sm">
              Partner Logo {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
