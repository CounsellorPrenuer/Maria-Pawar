import { Star, Quote } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import { fetchCms, imageUrl, type Testimonial } from "@/lib/sanity";

export default function Testimonials() {
  const { data: testimonials = [], isLoading, isError } = useQuery({
    queryKey: ["sanity", "testimonials"],
    queryFn: async () => (await fetchCms()).testimonials as Testimonial[],
    retry: 2,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">What Our Clients Say</h1>
          <p className="text-xl text-muted-foreground">Real stories from people and organizations we’ve helped grow.</p>
        </AnimatedSection>
        {isLoading ? <p className="text-center">Loading testimonials...</p> : isError ? (
          <p className="text-center text-destructive">Unable to load testimonials right now. Please refresh.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial._id} animation="zoom-in" delay={index * 50}>
                <GlassCard hover className="h-full flex flex-col">
                  {testimonial.image && <img src={imageUrl(testimonial.image, 240)} alt={testimonial.image.alt || testimonial.name} className="w-20 h-20 rounded-full object-cover mb-4" />}
                  <div className="flex gap-1 mb-4">{Array.from({ length: testimonial.rating || 5 }).map((_, star) => <Star key={star} className="w-5 h-5 fill-accent text-accent" />)}</div>
                  <div className="relative mb-4"><Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" /><p className="leading-relaxed pl-6">{testimonial.quote}</p></div>
                  <div className="mt-auto pt-4 border-t"><p className="font-semibold">{testimonial.name}</p><p className="text-sm text-muted-foreground">{testimonial.role}</p></div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
