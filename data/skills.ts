import type { Skill } from "@/types";

export interface SystemLayer {
  id: string;
  name: string;
  tagline: string;
  description: string;
  skills: string[];
  connectionToNext?: string;
}

export const systemLayers: SystemLayer[] = [
  {
    id: "frontend",
    name: "User Interface & Experience",
    tagline: "High-performance, accessible, responsive client applications",
    description:
      "Crafting pixel-perfect, interactive interfaces with modern component architectures, fluid animation dynamics, and robust client-side state models.",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Redux Toolkit",
      "React Query",
      "Vite",
      "HTML5 / CSS3",
      "SASS",
      "Styled Components",
      "Material UI",
      "Chakra UI",
      "Bootstrap",
    ],
    connectionToNext: "Consumes type-safe REST & GraphQL APIs",
  },
  {
    id: "backend",
    name: "Application Server & Logic",
    tagline: "Scalable services, secure authentication, and resilient API architectures",
    description:
      "Building robust, high-throughput server backends with enterprise patterns, decoupled microservices, and secure session/token infrastructure.",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "PHP",
      "Laravel",
      "REST APIs",
      "GraphQL",
      "JWT & OAuth",
      "WebSockets",
      "Zod Validation",
    ],
    connectionToNext: "Queries & transforms relational and document data",
  },
  {
    id: "database",
    name: "Persistence & Data Modeling",
    tagline: "ACID transactions, scalable document stores, and distributed caching",
    description:
      "Designing normalized relational models and optimized NoSQL document stores with high availability and low-latency queries.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Prisma ORM",
      "SQL",
      "NoSQL",
    ],
    connectionToNext: "Automates containerized deployment and resilient cloud hosting",
  },
  {
    id: "cloud",
    name: "Cloud Infrastructure & DevOps",
    tagline: "Automated delivery pipelines, containers, and global edge distribution",
    description:
      "Deploying scalable, monitored cloud architectures with automated CI/CD workflows, reverse proxies, and edge networks.",
    skills: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Vercel",
      "Render",
      "Netlify",
      "Nginx",
      "Linux Server Admin",
      "CI/CD Pipelines",
      "Cloudinary",
    ],
    connectionToNext: "Guarantees regression-free releases through end-to-end testing",
  },
  {
    id: "testing",
    name: "Quality Assurance & Testing",
    tagline: "Unit test coverage, integration contracts, and synthetic end-to-end suites",
    description:
      "Ensuring mission-critical reliability through automated test harnesses and browser-level assertions.",
    skills: ["Jest", "Playwright"],
  },
  {
    id: "tools",
    name: "Developer Workflow & Tooling",
    tagline: "Modern version control, design-to-code translation, and local environments",
    description:
      "Leveraging high-efficiency development tools for clean versioning, team collaboration, and rapid prototyping.",
    skills: [
      "Git",
      "GitHub",
      "Figma",
      "VS Code Workflow",
      "WordPress",
      "XAMPP",
    ],
  },
  {
    id: "ai",
    name: "AI Systems & Intelligence",
    tagline: "LLM orchestration, prompt tooling, and intelligent automation",
    description:
      "Integrating cutting-edge generative AI capabilities and automated reasoning pipelines into practical business software.",
    skills: [
      "AI API Integration",
      "AI-Assisted Engineering",
      "Workflow Automation",
      "Prompt-Driven Tooling",
      "Intelligent Applications",
    ],
  },
];

/** Flattened skill list conforming to Skill interface */
export const skills: Skill[] = systemLayers.flatMap((layer) =>
  layer.skills.map((skillName) => ({
    name: skillName,
    category:
      layer.id === "frontend"
        ? "framework"
        : layer.id === "backend"
          ? "language"
          : layer.id === "database"
            ? "database"
            : layer.id === "cloud"
              ? "cloud"
              : layer.id === "testing"
                ? "tool"
                : layer.id === "tools"
                  ? "tool"
                  : "other",
  }))
);
