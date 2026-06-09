import GlassCard from "@/components/GlassCard";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { format } from "date-fns";
import { fetchCms, imageUrl, type BlogPost } from "@/lib/sanity";

export default function Blog() {
  const { data: blogs = [], isLoading, isError } = useQuery({
    queryKey: ["sanity", "blogs"],
    queryFn: async () => (await fetchCms()).blogPosts as BlogPost[],
    retry: 2,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Insights & Articles</h1>
          <p className="text-xl text-muted-foreground">Expert perspectives on career development, leadership, and personal growth.</p>
        </div>
        {isLoading ? <p className="text-center">Loading articles...</p> : isError ? (
          <p className="text-center text-destructive">Unable to load articles right now. Please refresh.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <GlassCard key={post._id} hover className="flex flex-col h-full overflow-hidden p-0">
                {post.image && <img src={imageUrl(post.image, 700)} alt={post.image.alt || post.title} className="w-full h-48 object-cover" />}
                <div className="p-6 flex flex-col flex-1">
                  {post.featured && <span className="text-xs font-semibold text-accent mb-2">FEATURED</span>}
                  <h2 className="font-serif text-2xl font-bold mb-3">{post.title}</h2>
                  <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground border-t pt-4">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{format(new Date(post.publishedAt), "MMM dd, yyyy")}</span>
                    <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 font-semibold text-secondary">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
