import GlassCard from "@/components/GlassCard";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      title: "Navigating Career Choices in the AI Era",
      excerpt: "Discover how artificial intelligence is reshaping career landscapes and what it means for your future.",
      date: "March 15, 2024",
      author: "Maria Pawar",
    },
    {
      title: "Building Executive Presence: A Guide for Leaders",
      excerpt: "Learn the key elements of commanding presence that inspire teams and drive organizational success.",
      date: "March 10, 2024",
      author: "Maria Pawar",
    },
    {
      title: "The Power of Emotional Intelligence in the Workplace",
      excerpt: "Explore why EQ is becoming more important than IQ in modern professional environments.",
      date: "March 5, 2024",
      author: "Maria Pawar",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Insights & Articles</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert perspectives on career development, leadership, and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <GlassCard key={index} hover className="flex flex-col">
                <div className="flex-1">
                  <h2 className="font-serif text-2xl font-bold mb-3">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border/30 pt-4 mt-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-secondary" />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
