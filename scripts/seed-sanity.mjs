import { createClient } from "@sanity/client";
import { createReadStream } from "node:fs";
import path from "node:path";

const token = process.env.SANITY_EDITOR_TOKEN;
if (!token) throw new Error("SANITY_EDITOR_TOKEN is required");

const client = createClient({
  projectId: "zd6zrruu",
  dataset: "production",
  apiVersion: "2026-06-01",
  token,
  useCdn: false,
});

async function upload(file, label) {
  const asset = await client.assets.upload("image", createReadStream(path.resolve(file)), { filename: path.basename(file) });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id }, alt: label };
}

const [profileImage, careerImage, learningImage, aviationImage] = await Promise.all([
  upload("attached_assets/profile_1759744643907.png", "Maria Pawar"),
  upload("attached_assets/1_1761822725337.jfif", "Career guidance session"),
  upload("attached_assets/4_1761822725343.jfif", "Learning and development workshop"),
  upload("attached_assets/8_1761822725345.jfif", "Aviation training"),
]);

const standardPlans = [
  ["pkg-1", "Discover", "8-10", 5500, ["Psychometric assessment", "1 career counselling session", "Lifetime Knowledge Gateway access", "Live webinar invites"]],
  ["pkg-2", "Discover Plus+", "8-10", 15000, ["Psychometric assessments", "8 career counselling sessions (1/year)", "Custom reports & study abroad guidance", "CV building"]],
  ["pkg-3", "Achieve Online", "10-12", 5999, ["Psychometric assessment", "1 career counselling session", "Lifetime Knowledge Gateway access", "Pre-recorded webinars"]],
  ["pkg-4", "Achieve Plus+", "10-12", 10599, ["Psychometric assessment", "4 career counselling sessions", "Custom reports & study abroad guidance", "CV reviews"]],
  ["pkg-5", "Ascend Online", "college", 6499, ["Psychometric assessment", "1 career counselling session", "Lifetime Knowledge Gateway access", "Pre-recorded webinars"]],
  ["pkg-6", "Ascend Plus+", "college", 10599, ["Psychometric assessment", "3 career counselling sessions", "Certificate/online course info", "CV reviews for jobs"]],
  ["mp-3", "Ascend Online", "working", 6499, ["Psychometric assessment", "1 career counselling session", "Lifetime Knowledge Gateway access", "Pre-recorded webinars"]],
  ["mp-2", "Ascend Plus+", "working", 10599, ["Psychometric assessment", "3 career counselling sessions", "Certificate/online course info", "CV reviews for jobs"]],
];

const customPlans = [
  ["career-report", "Career Report", 1500, "Get a detailed report of your psychometric assessment for a scientific analysis of your interests. Find out where your interests lie and which future paths you can potentially consider."],
  ["career-report-counselling", "Career Report + Career Counselling", 3000, "Connect with India's top career coaches to analyse your psychometric report and shortlist the top three career paths you're most likely to enjoy and excel at."],
  ["knowledge-gateway", "Knowledge Gateway + Career Helpline Access", 100, "Unlock holistic information on your career paths and get direct access to Mentoria's experts, who will resolve your career-related queries through our dedicated Career Helpline. Validate your career decisions from now until you land a job you love."],
  ["one-to-one-session", "One-to-One Session with a Career Expert", 3500, "Resolve your career queries and glimpse into your future world through a one-on-one session with an expert from your chosen field."],
  ["college-admission-planning", "College Admission Planning", 3000, "Get unbiased recommendations and details on your future college options in India and abroad, organised in one resourceful planner."],
  ["exam-stress-management", "Exam Stress Management", 1000, "Get expert guidance on tackling exam stress, planning your study schedule, revision tips and more from India's top educators. Increase your chances of acing exams with a calm and clear mind."],
  ["cap-100", "College Admissions Planner - 100 (CAP-100)", 199, "₹199 for a ranked list of the top 100 colleges in your course. Get an expert-curated list of colleges based on verified cut-offs. CAP-100 ranks the top 100 colleges into four tiers to help you plan smarter: Indian Ivy League, Target, Smart Backup, and Safe Bet colleges. You can then shortlist colleges based on where you stand!"],
];

const block = (text) => ({
  _type: "block",
  _key: crypto.randomUUID().slice(0, 12),
  style: "normal",
  markDefs: [],
  children: [{ _type: "span", _key: crypto.randomUUID().slice(0, 12), text, marks: [] }],
});

const documents = [
  ...standardPlans.map(([planId, title, subgroup, price, features], order) => ({
    _id: `standard-plan-${planId}`,
    _type: "standardPlan",
    planId, title, subgroup, price, features, order: order + 1,
    image: order < 2 ? careerImage : order < 6 ? learningImage : aviationImage,
  })),
  ...customPlans.map(([planId, title, price, description], order) => ({
    _id: `custom-plan-${planId}`,
    _type: "customPlan",
    planId, title, price, description, order: order + 1,
    image: [careerImage, learningImage, aviationImage][order % 3],
  })),
  {
    _id: "service-career-guidance", _type: "services", title: "Career Guidance",
    description: "Scientifically-backed career counselling with psychometric assessments and personalized pathways.",
    link: "/career-guidance", image: careerImage, order: 1,
  },
  {
    _id: "service-learning-development", _type: "services", title: "Learning & Development",
    description: "Leadership, communication, executive presence, and organizational development programs.",
    link: "/learning-development", image: learningImage, order: 2,
  },
  {
    _id: "service-aviation", _type: "services", title: "Aviation Training",
    description: "Interview preparation and professional development for aviation careers and teams.",
    link: "/aviation", image: aviationImage, order: 3,
  },
  {
    _id: "testimonial-career", _type: "testimonials", name: "Vikram Singh", role: "Student",
    quote: "The psychometric assessment and personalized guidance helped me discover a career path I am genuinely excited about.",
    rating: 5, image: profileImage, order: 1,
  },
  {
    _id: "testimonial-leadership", _type: "testimonials", name: "Rajesh Kumar", role: "Senior Manager",
    quote: "Maria's experiential leadership approach created practical, measurable improvements in our team dynamics.",
    rating: 5, image: learningImage, order: 2,
  },
  {
    _id: "testimonial-aviation", _type: "testimonials", name: "Priya Sharma", role: "Aviation Professional",
    quote: "The aviation interview preparation gave me the confidence and industry insight to secure my dream role.",
    rating: 5, image: aviationImage, order: 3,
  },
  {
    _id: "blog-career-clarity-ai", _type: "blogPost", title: "Finding Career Clarity in an AI-Driven World",
    slug: { _type: "slug", current: "career-clarity-ai-driven-world" },
    excerpt: "A practical framework for making confident career choices while technology reshapes the world of work.",
    author: "Maria Pawar", publishedAt: "2026-06-01T09:00:00.000Z", featured: true, image: careerImage,
    body: [
      block("Career clarity begins with understanding your interests, abilities, values, and the environments in which you do your best work."),
      block("AI changes tasks, but it does not remove the need for human judgment, communication, creativity, and purpose. Build around those durable strengths."),
      block("Use assessments as a starting point, then test possibilities through conversations, projects, and real-world exposure before committing to a path."),
    ],
  },
  {
    _id: "blog-executive-presence", _type: "blogPost", title: "Executive Presence Is a Learnable Skill",
    slug: { _type: "slug", current: "executive-presence-learnable-skill" },
    excerpt: "How clarity, composure, and credible communication create leadership impact.",
    author: "Maria Pawar", publishedAt: "2026-05-20T09:00:00.000Z", featured: false, image: learningImage,
    body: [
      block("Executive presence is not a personality type. It is a set of observable habits that can be practised and strengthened."),
      block("Start with clear thinking, concise communication, and calm responses under pressure. Consistency builds trust."),
    ],
  },
];

let transaction = client.transaction();
for (const document of documents) transaction = transaction.createOrReplace(document);
await transaction.commit();

console.log(`Seeded ${documents.length} Sanity documents.`);
