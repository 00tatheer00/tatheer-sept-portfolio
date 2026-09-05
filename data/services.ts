import type { Service } from "@/types";

/**
 * Professional engineering, architecture, and educational services
 * delivered by S Tatheer Hussain.
 * Strictly fact-based reflecting actual production systems and teaching.
 */
export const services: Service[] = [
  {
    id: "saas-engineering",
    title: "Full-Stack Web & SaaS Engineering",
    shortTitle: "SaaS Engineering",
    description:
      "End-to-end architecture and implementation of scalable web applications and SaaS platforms. Built with modern TypeScript, Next.js, Node.js, and relational or document databases.",
    icon: "layers",
    features: [
      "Production-grade Next.js / React application development",
      "Robust RESTful API design and third-party integrations",
      "Relational schema design (PostgreSQL) and data integrity",
      "Authentication, RBAC security, and session management",
      "Component modularity, state machines, and responsive UX",
    ],
  },
  {
    id: "system-architecture",
    title: "System Architecture & API Modernization",
    shortTitle: "API & Architecture",
    description:
      "Transforming legacy backends and bottlenecked services into modular, maintainable, and high-throughput systems. Focused on clean separation of concerns and database efficiency.",
    icon: "cpu",
    features: [
      "Monolith decomposition and modular service refactoring",
      "Database query optimization and index tuning",
      "API contract standardization and automated test coverage",
      "Asynchronous jobs, queues, and webhook processing",
      "Cloud deployment setup with containerized environments",
    ],
  },
  {
    id: "technical-education",
    title: "Technical Training & Developer Mentorship",
    shortTitle: "Tech Education",
    description:
      "Structured university-level computer science instruction, full-stack curriculum design, and engineering team upskilling delivered through Tech4Edges and EEST.",
    icon: "book",
    features: [
      "Full-stack software engineering bootcamps and workshops",
      "Modern JavaScript / TypeScript and React masterclasses",
      "Code review discipline and Git collaborative workflows",
      "Software design principles and database engineering",
      "Hands-on project mentorship for aspiring engineers",
    ],
  },
  {
    id: "venture-advisory",
    title: "Technical Scoping & MVP Prototyping",
    shortTitle: "MVP & Advisory",
    description:
      "Helping founders and businesses scope realistic technical roadmaps, select the right technology stacks, and rapidly launch reliable Minimum Viable Products.",
    icon: "compass",
    features: [
      "Technical feasibility analysis and architecture scoping",
      "Rapid MVP development with production-ready foundations",
      "Cloud cost estimation and infrastructure right-sizing",
      "Technical documentation and handoff preparation",
      "Engineering roadmap planning for scale",
    ],
  },
];
