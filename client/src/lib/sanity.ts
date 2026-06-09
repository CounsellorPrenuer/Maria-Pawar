import imageUrlBuilder from "@sanity/image-url";
import { workerPost } from "./workerApi";
import { CMS_FALLBACK } from "./cmsFallback";

const SANITY_PROJECT_ID = "zd6zrruu";
const SANITY_DATASET = "production";

const builder = imageUrlBuilder({ projectId: SANITY_PROJECT_ID, dataset: SANITY_DATASET });

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

let cmsRequest: Promise<CmsContent> | null = null;

async function loadCms(): Promise<CmsContent> {
  try {
    return await workerPost<CmsContent>("/api/cms/bootstrap", {});
  } catch {
    return CMS_FALLBACK;
  }
}

export function fetchCms() {
  if (!cmsRequest) {
    cmsRequest = loadCms().catch((error) => {
      cmsRequest = null;
      throw error;
    });
  }
  return cmsRequest;
}
