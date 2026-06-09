import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "zd6zrruu",
  dataset: "production",
  apiVersion: "2026-06-01",
  useCdn: true,
  perspective: "published",
});

const builder = imageUrlBuilder(sanityClient);

export function imageUrl(source: unknown, width = 900) {
  return source ? builder.image(source).width(width).auto("format").url() : "";
}

export type SanityImage = {
  asset?: { _ref?: string };
  alt?: string;
};

export type StandardPlan = {
  _id: string;
  planId: string;
  title: string;
  subgroup: "8-10" | "10-12" | "college" | "working";
  price: number;
  features: string[];
  image?: SanityImage;
  order?: number;
};

export type CustomPlan = {
  _id: string;
  planId: string;
  title: string;
  price: number;
  description: string;
  image?: SanityImage;
  order?: number;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  featured?: boolean;
  image?: SanityImage;
  body?: Array<Record<string, unknown>>;
};

export type Testimonial = {
  _id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image?: SanityImage;
};

export type Service = {
  _id: string;
  title: string;
  description: string;
  link: string;
  image?: SanityImage;
  order?: number;
};

export type CmsContent = {
  standardPlans: StandardPlan[];
  customPlans: CustomPlan[];
  blogPosts: BlogPost[];
  testimonials: Testimonial[];
  services: Service[];
};

const CMS_QUERY = `{
  "standardPlans": *[_type == "standardPlan"] | order(order asc){_id,planId,title,subgroup,price,features,image,order},
  "customPlans": *[_type == "customPlan"] | order(order asc){_id,planId,title,price,description,image,order},
  "blogPosts": *[_type == "blogPost"] | order(publishedAt desc){_id,title,"slug":slug.current,excerpt,author,publishedAt,featured,image,body},
  "services": *[_type == "services"] | order(order asc){_id,title,description,link,image,order},
  "testimonials": *[_type == "testimonials"] | order(order asc){_id,name,role,quote,rating,image}
}`;

let cmsRequest: Promise<CmsContent> | null = null;

export function fetchCms() {
  if (!cmsRequest) {
    cmsRequest = sanityClient.fetch<CmsContent>(CMS_QUERY).catch((error) => {
      cmsRequest = null;
      throw error;
    });
  }
  return cmsRequest;
}
