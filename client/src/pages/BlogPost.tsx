import { useRoute, Link } from "wouter";
import { format } from "date-fns";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import { PortableText } from "@portabletext/react";
import { imageUrl } from "@/lib/sanity";
import { useCms } from "@/hooks/useCms";

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  const { data, isLoading } = useCms();
  const blog = data?.blogPosts.find((post) => post.slug === slug);

  if (isLoading) return <div className="min-h-screen grid place-items-center">Loading article...</div>;
  if (!blog) return <div className="min-h-screen grid place-items-center">Blog post not found.</div>;

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
        <GlassCard className="overflow-hidden p-0">
          {blog.image && (
            <img
              src={imageUrl(blog.image, 1200)}
              alt={blog.image.alt || blog.title}
              className="w-full max-h-[460px] object-cover"
              loading="lazy"
            />
          )}
          <article className="p-7 md:p-12">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">{blog.title}</h1>
            <div className="flex flex-wrap gap-6 text-muted-foreground mb-8 pb-6 border-b">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {blog.author}
              </span>
            </div>
            <div className="prose prose-lg max-w-none">
              {blog.body ? <PortableText value={blog.body as never} /> : <p>{blog.excerpt}</p>}
            </div>
          </article>
        </GlassCard>
      </div>
    </div>
  );
}
