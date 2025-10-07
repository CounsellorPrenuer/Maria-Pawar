import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import type { Blog } from "@shared/schema";
import { format } from "date-fns";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const { data: blog, isLoading } = useQuery<Blog>({
    queryKey: ["/api/blogs", slug],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link href="/blog">
            <a>
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog">
          <a>
            <Button variant="ghost" className="mb-8" data-testid="button-back-to-blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </a>
        </Link>

        <GlassCard className="p-8 md:p-12">
          {blog.featured && (
            <div className="mb-4">
              <span className="text-sm font-semibold text-accent">FEATURED</span>
            </div>
          )}
          
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6" data-testid="blog-title">
            {blog.title}
          </h1>

          <div className="flex items-center gap-6 text-muted-foreground mb-8 pb-6 border-b border-border/30">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {format(new Date(blog.createdAt), "MMMM dd, yyyy")}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-5 h-5" />
              {blog.author}
            </span>
          </div>

          <div className="prose prose-lg max-w-none" data-testid="blog-content">
            {blog.content.split('\n').map((paragraph: string, index: number) => (
              <p key={index} className="mb-4 text-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
