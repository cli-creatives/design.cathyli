export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  featured: boolean;
  coverColor: string; // placeholder background color until real images added
  coverImage?: string; // optional real image path (public/)
}

export const projects: Project[] = [
  {
    slug: "ai-topic-map",
    title: "AI Topic Mapping for LLM Visibility",
    category: "Product Design · AI",
    year: "2025",
    description:
      "Designing a semantic intelligence system that helps content teams understand topic ownership and visibility in AI-driven search.",
    tags: ["UX Research", "Interaction Design", "AI", "Information Architecture"],
    featured: true,
    coverColor: "#B8CBB0",
    coverImage: "/images/ai-topic-map-landing.png",
  },
  {
    slug: "crawling-configurations",
    title: "Crawling Configurations",
    category: "Product Design",
    year: "2024",
    description:
      "Simplifying the technical complexity of web crawl configuration into an intuitive, visual setup experience.",
    tags: ["UX Design", "Developer Tools", "Systems Thinking"],
    featured: true,
    coverColor: "#C4B99A",
    coverImage: "/images/crawling-configurations-landing.png",
  },
  {
    slug: "user-research-insights",
    title: "User Research Insights",
    category: "Research · Design",
    year: "2023",
    description:
      "A centralized research hub that transforms scattered user insights into actionable, shareable design decisions.",
    tags: ["UX Research", "Information Architecture"],
    featured: true,
    coverColor: "#A8C4B4",
    coverImage: "/images/user-insights-landing.png",
  },
  {
    slug: "product-ui-rebranding",
    title: "Product UI Rebranding",
    category: "UI Design",
    year: "2023",
    description:
      "A full-scale visual identity refresh that aligns the product interface with a new brand direction and design system.",
    tags: ["UI Design", "Design Systems", "Branding"],
    featured: true,
    coverColor: "#D4C2A8",
  },
  {
    slug: "slides-customization-enrichment",
    title: "Slides Customization",
    category: "Product Design",
    year: "2023",
    description:
      "Empowering users to create polished, on-brand presentations through an enriched, flexible customization system.",
    tags: ["Product Design", "UX", "Content Tools"],
    featured: true,
    coverColor: "#B5C9A8",
    coverImage: "/images/slides-customization-landing.png",
  },
  {
    slug: "new-school-app-redesign",
    title: "New School App Redesign",
    category: "Mobile Design",
    year: "2022",
    description:
      "Redesigning a university mobile experience to reduce friction for students navigating courses, events, and campus life.",
    tags: ["Mobile Design", "UX Research", "Education"],
    featured: true,
    coverColor: "#C8B8A2",
    coverImage: "/images/the-new-school-app-landing.png",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
