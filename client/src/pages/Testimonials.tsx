import { Star, Quote } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Senior Manager, Tata Group",
      content: "Maria's leadership training transformed our team dynamics. Her experiential approach helped us develop executive presence that translates to real business impact. The ROI has been exceptional.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Cabin Crew Manager, Emirates",
      content: "The aviation interview preparation was outstanding. Maria's insights into the industry and personalized coaching helped me land my dream role. Her understanding of aviation culture is unmatched.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Corporate Trainer, Force Motors",
      content: "The Train The Trainer program exceeded all expectations. Maria's blend of theory and practice gave me the confidence and skills to deliver impactful training sessions. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "HR Director, Qatar Airways",
      content: "Working with Maria on our emotional intelligence program was transformative. Her ability to connect with participants and create safe spaces for growth is remarkable. Our team culture has significantly improved.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      role: "Student, Symbiosis International University",
      content: "The career counseling service with Mentoria integration was life-changing. The psychometric assessments and personalized guidance helped me discover my true calling. I'm now pursuing a career I'm passionate about.",
      rating: 5,
    },
    {
      name: "Lisa Chen",
      role: "Communications Lead, Middle East Airlines",
      content: "Maria's business communication training elevated our entire team's presentation skills. Her practical exercises and real-world scenarios made the learning stick. We've seen measurable improvements in client interactions.",
      rating: 5,
    },
    {
      name: "Arjun Reddy",
      role: "Change Management Consultant",
      content: "The Change Enabler program was exactly what I needed to take my consulting practice to the next level. Maria's frameworks for managing resistance and building resilience are invaluable.",
      rating: 5,
    },
    {
      name: "Monica D'Souza",
      role: "Pilot, Air India Express",
      content: "Maria's understanding of aviation training needs is exceptional. Her programs are tailored specifically for our industry's unique challenges. The results speak for themselves.",
      rating: 5,
    },
    {
      name: "James Thompson",
      role: "VP Operations, Aptech Aviation Academy",
      content: "We've partnered with Maria for multiple training programs and each time the feedback is overwhelmingly positive. Her professionalism and expertise make her our go-to trainer for leadership development.",
      rating: 5,
    },
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6" data-testid="text-testimonials-title">
              What Our Clients Say
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-testimonials-description">
              Real stories from professionals and organizations we've helped transform through our training and career guidance programs
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection 
                key={index} 
                animation="zoom-in" 
                delay={index * 50}
              >
                <GlassCard 
                  hover 
                  className="h-full flex flex-col"
                  data-testid={`testimonial-card-${index}`}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 fill-accent text-accent" 
                        data-testid={`star-${index}-${i}`}
                      />
                    ))}
                  </div>

                  <div className="relative mb-4">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                    <p 
                      className="text-foreground leading-relaxed pl-6" 
                      data-testid={`testimonial-content-${index}`}
                    >
                      {testimonial.content}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-border/30">
                    <p 
                      className="font-semibold text-foreground" 
                      data-testid={`testimonial-name-${index}`}
                    >
                      {testimonial.name}
                    </p>
                    <p 
                      className="text-sm text-muted-foreground" 
                      data-testid={`testimonial-role-${index}`}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
