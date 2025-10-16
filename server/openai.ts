import OpenAI from "openai";

// This is using Replit's AI Integrations service, which provides OpenAI-compatible API access without requiring your own OpenAI API key.
// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY
});

export interface BlogGenerationRequest {
  topic: string;
  keywords: string;
  tone: string;
  length: string;
}

export interface BlogGenerationResponse {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
}

export async function generateBlogPost(params: BlogGenerationRequest): Promise<BlogGenerationResponse> {
  const { topic, keywords, tone, length } = params;
  
  const prompt = `Generate a professional blog post with the following specifications:

Topic: ${topic}
Keywords to include: ${keywords}
Tone: ${tone}
Length: ${length}

Please generate a complete blog post and return it in the following JSON format:
{
  "title": "An engaging, SEO-friendly title",
  "slug": "url-friendly-slug-version-of-title",
  "excerpt": "A compelling 2-3 sentence summary of the blog post",
  "content": "The full blog post content with multiple paragraphs separated by newlines. Make it informative, engaging, and naturally incorporate the keywords.",
  "category": "A relevant category name for this blog post"
}

Make sure the content is well-structured, informative, and matches the specified tone. The slug should be lowercase with hyphens.`;

  const completion = await openai.chat.completions.create({
    // the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
    model: "gpt-5",
    messages: [
      {
        role: "system",
        content: "You are a professional content writer for Inspire2Grow, a career guidance and learning & development brand. Generate high-quality, engaging blog posts."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    response_format: { type: "json_object" },
    max_completion_tokens: 8192
  });

  const responseText = completion.choices[0].message.content;
  if (!responseText) {
    throw new Error("No response from AI");
  }

  const blogData = JSON.parse(responseText);
  return blogData;
}
