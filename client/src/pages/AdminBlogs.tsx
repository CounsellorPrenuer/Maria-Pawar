import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import type { Blog, InsertBlog } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Plus, Edit, Trash2, Star, StarOff, ArrowLeft } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

const blogFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase and use hyphens"),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().min(1, "Content is required"),
  author: z.string().min(1, "Author is required"),
  featured: z.boolean().default(false),
});

type BlogFormData = z.infer<typeof blogFormSchema>;

export default function AdminBlogs() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const { data: authCheck, isLoading: authLoading } = useQuery<{ authenticated: boolean }>({
    queryKey: ["/api/auth/check"],
  });

  useEffect(() => {
    if (!authLoading && !authCheck?.authenticated) {
      setLocation("/admin/login");
    }
  }, [authCheck, authLoading, setLocation]);

  const { data: blogs = [], isLoading: blogsLoading } = useQuery<Blog[]>({
    queryKey: ["/api/blogs"],
    enabled: authCheck?.authenticated ?? false,
  });

  const form = useForm<BlogFormData>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      author: "Maria Pawar",
      featured: false,
    },
  });

  const createMutation = useMutation({
    mutationFn: (data: BlogFormData) => apiRequest("POST", "/api/admin/blogs", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blogs"] });
      toast({ title: "Success", description: "Blog created successfully" });
      setIsDialogOpen(false);
      form.reset();
      setEditingBlog(null);
    },
    onError: (error: any) => {
      toast({ variant: "destructive", title: "Error", description: error.message });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<BlogFormData> }) =>
      apiRequest("PUT", `/api/admin/blogs/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blogs"] });
      toast({ title: "Success", description: "Blog updated successfully" });
      setIsDialogOpen(false);
      form.reset();
      setEditingBlog(null);
    },
    onError: (error: any) => {
      toast({ variant: "destructive", title: "Error", description: error.message });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => apiRequest("DELETE", `/api/admin/blogs/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blogs"] });
      toast({ title: "Success", description: "Blog deleted successfully" });
    },
    onError: (error: any) => {
      toast({ variant: "destructive", title: "Error", description: error.message });
    },
  });

  const featureMutation = useMutation({
    mutationFn: (id: string) => apiRequest("PATCH", `/api/admin/blogs/${id}/feature`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blogs"] });
      toast({ title: "Success", description: "Blog feature status updated" });
    },
    onError: (error: any) => {
      toast({ variant: "destructive", title: "Error", description: error.message });
    },
  });

  const onSubmit = (data: BlogFormData) => {
    if (editingBlog) {
      updateMutation.mutate({ id: editingBlog.id, data });
    } else {
      createMutation.mutate(data);
    }
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    form.reset({
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt,
      content: blog.content,
      author: blog.author,
      featured: blog.featured,
    });
    setIsDialogOpen(true);
  };

  const handleNewBlog = () => {
    setEditingBlog(null);
    form.reset({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      author: "Maria Pawar",
      featured: false,
    });
    setIsDialogOpen(true);
  };

  const generateSlug = (title: string) => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    form.setValue('slug', slug);
  };

  if (authLoading || blogsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!authCheck?.authenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => setLocation("/admin/bookings")}
                data-testid="button-back-to-dashboard"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
              <div>
                <h1 className="text-3xl font-bold font-serif" data-testid="text-blog-management-title">
                  Blog Management
                </h1>
                <p className="text-muted-foreground mt-1">Create and manage blog posts</p>
              </div>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={handleNewBlog} data-testid="button-create-blog">
                  <Plus className="w-4 h-4 mr-2" />
                  New Blog Post
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{editingBlog ? "Edit Blog Post" : "Create New Blog Post"}</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter blog title"
                              data-testid="input-blog-title"
                              onBlur={(e) => {
                                field.onBlur();
                                if (!editingBlog && !form.getValues('slug')) {
                                  generateSlug(e.target.value);
                                }
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="slug"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Slug (URL-friendly)</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="blog-post-url-slug"
                              data-testid="input-blog-slug"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="excerpt"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Excerpt</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Brief description of the blog post"
                              rows={3}
                              data-testid="input-blog-excerpt"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Content</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Blog post content (use line breaks for paragraphs)"
                              rows={12}
                              data-testid="input-blog-content"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="author"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Author</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Author name"
                              data-testid="input-blog-author"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-end gap-2 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setIsDialogOpen(false);
                          form.reset();
                          setEditingBlog(null);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={createMutation.isPending || updateMutation.isPending}
                        data-testid="button-submit-blog"
                      >
                        {editingBlog ? "Update" : "Create"} Blog Post
                      </Button>
                    </div>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {blogs.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No blog posts yet. Create your first one!</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {blogs.map((blog) => (
              <Card key={blog.id} className="p-6 backdrop-blur-sm bg-card/50">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold font-serif" data-testid={`blog-item-${blog.slug}`}>
                        {blog.title}
                      </h3>
                      {blog.featured && (
                        <Badge variant="default" className="bg-accent">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{blog.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>By {blog.author}</span>
                      <span>•</span>
                      <span>{format(new Date(blog.createdAt), "MMM dd, yyyy")}</span>
                      <span>•</span>
                      <span className="font-mono">/{blog.slug}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => featureMutation.mutate(blog.id)}
                      data-testid={`button-feature-${blog.slug}`}
                    >
                      {blog.featured ? (
                        <Star className="w-4 h-4 fill-accent text-accent" />
                      ) : (
                        <StarOff className="w-4 h-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(blog)}
                      data-testid={`button-edit-${blog.slug}`}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        if (confirm("Are you sure you want to delete this blog post?")) {
                          deleteMutation.mutate(blog.id);
                        }
                      }}
                      data-testid={`button-delete-${blog.slug}`}
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
