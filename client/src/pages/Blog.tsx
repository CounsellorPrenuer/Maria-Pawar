import GlassCard from "@/components/GlassCard";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import type { Blog } from "@shared/schema";
import { format } from "date-fns";

export default function Blog() {
  const { data: blogs = [], isLoading } = useQuery<Blog[]>({
    queryKey: ["/api/blogs"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading blogs...</div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Insights & Articles</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert perspectives on career development, leadership, and personal growth.
            </p>
          </div>

          {blogs.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No blog posts yet. Check back soon!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <a data-testid={`blog-card-${post.slug}`}>
                    <GlassCard hover className="flex flex-col h-full">
                      <div className="flex-1">
                        {post.featured && (
                          <div className="mb-2">
                            <span className="text-xs font-semibold text-accent">FEATURED</span>
                          </div>
                        )}
                        <h2 className="font-serif text-2xl font-bold mb-3">{post.title}</h2>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border/30 pt-4 mt-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {format(new Date(post.createdAt), "MMM dd, yyyy")}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-secondary" />
                      </div>
                    </GlassCard>
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
