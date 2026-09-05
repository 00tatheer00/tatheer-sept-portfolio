import type { Project } from "@/types";

/**
 * Portfolio projects — S Tatheer Hussain.
 * Real, documented systems built with senior-level architecture and production execution.
 * Zero fabricated metrics, zero invented company names.
 */
export const projects: Project[] = [
  {
    id: "eest-portal",
    number: "01",
    title: "EEST Portal / LMS",
    slug: "eest-portal",
    tagline: "Proprietary Learning Management System powering institutional education workflows",
    category: "EDUCATION",
    categoryLabel: "Education & LMS",
    shortDescription:
      "A complete learning management ecosystem designed, developed, and maintained to handle student onboarding, trainer evaluations, course distribution, and progress tracking.",
    description:
      "At the Emerging Edge School of Technology (EEST), Tatheer didn't merely teach; he architected and built the entire digital backbone of the academy. The EEST LMS coordinates student submissions, course materials, trainer feedback loops, and grading milestones in real time.",
    role: "Director / Full-Stack Architect & Developer",
    clientContext: "Emerging Edge School of Technology (Peshawar)",
    year: "2023 — Present",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Auth",
      "Tailwind CSS",
      "Cloud Deployment",
    ],
    isFeatured: true,
    isOpenSource: false,
    status: "Maintained & Active in Production",
    metrics: [
      { label: "Graduates Certified", value: "200+" },
      { label: "Role", value: "Creator & Maintainer" },
      { label: "Status", value: "Production Active" },
    ],
    caseStudy: {
      overview:
        "The EEST Portal is a custom-engineered Learning Management System built specifically to support practical, project-based developer education. Designed from scratch by Tatheer, it coordinates curriculum delivery, assignments, real-time progress metrics, and trainer code reviews without relying on bloated generic platforms.",
      problem:
        "Generic off-the-shelf LMS platforms were overly rigid, lacked developer-centric assignment workflows, and failed to provide transparent evaluation metrics for multi-week coding tracks. The academy required an agile, bespoke platform that mirrored modern engineering environments.",
      goal:
        "Build a fast, unified, role-based platform connecting students, instructors, and academic directors to manage courses, verify assignment deliverables, track attendance, and issue milestones smoothly.",
      myRole:
        "Sole Software Architect and Full-Stack Developer. Tatheer established the database schema, engineered the Node.js/Express REST APIs, crafted the responsive React user interface, implemented role-based access control (RBAC), and continues to maintain and upgrade the production instance.",
      architectureOverview:
        "Decoupled client-server architecture with a React single-page frontend consuming secure REST endpoints backed by Node.js and MongoDB with normalized relational references.",
      architectureFlow: [
        { label: "STUDENT CLIENT", sublabel: "React / Tailwind", role: "Course access, code uploads, progress analytics" },
        { label: "API GATEWAY", sublabel: "Express / JWT", role: "Authentication, rate limiting, request validation" },
        { label: "CORE SERVICES", sublabel: "Node.js Engine", role: "Grading pipelines, batch scheduling, notifications" },
        { label: "DATA STORE", sublabel: "MongoDB / Atlas", role: "Normalized collections: users, courses, submissions" },
        { label: "TRAINER PORTAL", sublabel: "Admin Dashboard", role: "Assignment reviews, attendance, batch oversight" },
      ],
      stackLayers: [
        {
          layer: "Frontend",
          technologies: ["React", "Tailwind CSS", "Axios", "Context API"],
          purpose: "Responsive dashboard interface with role-conditioned routing and real-time state.",
        },
        {
          layer: "Backend & Logic",
          technologies: ["Node.js", "Express.js", "JWT", "Bcrypt", "Multer"],
          purpose: "REST API handlers, secure cookie/bearer token authentication, file upload processing.",
        },
        {
          layer: "Database",
          technologies: ["MongoDB", "Mongoose ORM"],
          purpose: "Document persistence for user profiles, submission histories, and structured module curricula.",
        },
        {
          layer: "Infrastructure",
          technologies: ["Linux Hosting", "Reverse Proxy", "PM2"],
          purpose: "Process management, SSL termination, and reliable uptime for student cohorts.",
        },
      ],
      features: [
        {
          title: "Role-Based Access Control (RBAC)",
          description: "Distinct, cryptographically validated permissions for Students, Trainers, and Administrative Directors.",
        },
        {
          title: "Assignment Submission & Review Engine",
          description: "Structured file and repository link submission portal with trainer rubric grading and feedback logs.",
        },
        {
          title: "Interactive Course & Module Hierarchy",
          description: "Hierarchical course tracking with locked module progression until milestone prerequisites are completed.",
        },
        {
          title: "Progress Analytics & Certification",
          description: "Live tracking of student attendance, project scores, and automated readiness verification for Module 1 certification.",
        },
      ],
      challenges: [
        {
          problem: "Handling high-volume concurrent project submissions near assignment cut-off deadlines.",
          resolution: "Optimized endpoint payload sizes, streamlined multer buffer processing, and introduced MongoDB indexing on student submission indices.",
        },
        {
          problem: "Preventing unauthorized access across multi-role dashboards.",
          resolution: "Implemented strict JWT middleware with claims validation and server-side authorization guards on every protected route.",
        },
      ],
      solution:
        "By tailoring the system specifically to developer education, Tatheer eliminated third-party licensing costs and built a streamlined tool where students interact with modern web conventions directly as part of their learning journey.",
      outcome:
        "The system has successfully powered multiple academy cohorts, enabling over 200 developers to complete Module 1 certification with zero platform downtime during submission deadlines.",
      status: "Production",
    },
  },
  {
    id: "erp-operations-platform",
    number: "02",
    title: "Custom ERP / Operations Platform",
    slug: "erp-operations-platform",
    tagline: "Enterprise operations and workflow automation for a logistics enterprise",
    category: "ERP",
    categoryLabel: "ERP & Operations",
    shortDescription:
      "A tailored enterprise resource and operations platform developed to eliminate fragmented spreadsheets, automate dispatch workflows, and maintain structured data integrity.",
    description:
      "Engineered for an operations and logistics client in Lahore, this system centralized multi-branch operational tracking, inventory movement, driver scheduling, and administrative reporting into a single high-reliability web interface.",
    role: "Lead Software Engineer",
    clientContext: "Logistics & Operations Client (Lahore)",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Express.js",
      "Tailwind CSS",
      "REST APIs",
      "Data Grid",
      "Role Security",
    ],
    isFeatured: true,
    isOpenSource: false,
    status: "Delivered to Client",
    metrics: [
      { label: "Deployment", value: "Private Cloud" },
      { label: "Architecture", value: "Relational ACID" },
      { label: "Deliverable", value: "Custom Enterprise ERP" },
    ],
    caseStudy: {
      overview:
        "An enterprise operations platform engineered to digitize manual logistics workflows. Replaced dozens of error-prone spreadsheets with a central, normalized database and intuitive web dashboards.",
      problem:
        "The client managed rapid daily dispatches across multiple regional hubs using manual paper logs and disconnected spreadsheets, causing reconciliation errors, delayed manifests, and lack of real-time operational visibility.",
      goal:
        "Design and deliver a cohesive, user-friendly ERP system providing strict data validations, relational integrity, auditable log trails, and rapid searching across thousands of operational records.",
      myRole:
        "Lead Software Engineer responsible for relational schema design in PostgreSQL, building RESTful services in Node.js, and constructing performant, data-dense client tables with filtering, sorting, and export capabilities.",
      architectureOverview:
        "Three-tier enterprise architecture: React client with high-density data tables connecting to a hardened Node.js/Express API layer persisting data with ACID transactions in PostgreSQL.",
      architectureFlow: [
        { label: "OPERATIONS DESK", sublabel: "React Client", role: "Data entry, real-time dispatch grids, manifest printing" },
        { label: "REST SERVICE", sublabel: "Express Engine", role: "Business validations, transaction management, audit logs" },
        { label: "RELATIONAL DB", sublabel: "PostgreSQL", role: "Normalized tables, foreign key constraints, indexing" },
        { label: "REPORTING ENGINE", sublabel: "PDF / Export", role: "Automated billing reconciliation and daily manifests" },
      ],
      stackLayers: [
        {
          layer: "Frontend",
          technologies: ["React", "Tailwind CSS", "React Table", "Lucide Icons"],
          purpose: "High-density data visualization, rapid search, keyboard-friendly data entry forms.",
        },
        {
          layer: "Backend",
          technologies: ["Node.js", "Express.js", "Zod", "JWT"],
          purpose: "Strict input validation, role-conditioned API handlers, transaction isolation.",
        },
        {
          layer: "Data Store",
          technologies: ["PostgreSQL", "Knex / Prisma"],
          purpose: "ACID transactions for financial and dispatch ledger consistency.",
        },
      ],
      features: [
        {
          title: "Automated Dispatch Scheduling",
          description: "Real-time assignment of vehicles, drivers, and route manifests with validation against double-booking.",
        },
        {
          title: "Comprehensive Audit Logging",
          description: "Immutable record logs capturing every create, update, and delete operation alongside operator timestamps.",
        },
        {
          title: "High-Density Data Grids",
          description: "Custom tabular views with column pinning, multi-column sorting, and sub-second full-text searching.",
        },
      ],
      challenges: [
        {
          problem: "Transitioning non-technical field operators from spreadsheets to web interfaces.",
          resolution: "Designed keyboard-first input navigation with auto-suggest inputs and extensive input validation prompts.",
        },
        {
          problem: "Maintaining data consistency across complex multi-step delivery status transitions.",
          resolution: "Wrapped state transitions in PostgreSQL transactions with explicit state machine guards in the application layer.",
        },
      ],
      solution:
        "Delivered a resilient, single-source-of-truth software system that streamlined daily branch operations and gave leadership instantaneous visibility into branch efficiency.",
      outcome:
        "Completely replaced paper-based tracking, eliminated manifest discrepancy disputes, and established an auditable digital standard for client operations.",
      status: "Delivered",
    },
  },
  {
    id: "dashboard-api-revamp",
    number: "03",
    title: "Startup Dashboard + API Revamp",
    slug: "dashboard-api-revamp",
    tagline: "Modernization of legacy frontend and REST APIs for a growing tech startup",
    category: "API",
    categoryLabel: "API & Frontend",
    shortDescription:
      "A complete architecture overhaul addressing slow API responses, chaotic frontend state management, and maintenance bottlenecks in an early-stage startup codebase.",
    description:
      "Partnered with an Islamabad-based tech startup to stabilize their core customer dashboard. Refactored messy legacy API endpoints, consolidated asynchronous state, and dramatically reduced page load latency.",
    role: "Senior Full-Stack Consultant",
    clientContext: "Tech Startup (Islamabad)",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "React Query",
      "Tailwind CSS",
      "Zod",
    ],
    isFeatured: true,
    isOpenSource: false,
    status: "Delivered & Stabilized",
    metrics: [
      { label: "Scope", value: "API & Dashboard" },
      { label: "Type", value: "Architectural Refactor" },
      { label: "Focus", value: "Speed & Maintainability" },
    ],
    caseStudy: {
      overview:
        "A focused architectural refactoring engagement for a rapid-growth startup. The original codebase suffered from uncoordinated asynchronous calls, prop drilling, and unindexed database queries that degraded customer experience.",
      problem:
        "The legacy dashboard suffered from cascade re-renders, slow API roundtrips exceeding several seconds, and frequent regression bugs due to unstructured, untyped JavaScript.",
      goal:
        "Modernize the technical stack with TypeScript, introduce intelligent data caching via React Query, normalize API endpoints, and establish clean component boundaries.",
      myRole:
        "Senior Full-Stack Consultant. Conducted full code audit, redesigned endpoint contracts, migrated key views to TypeScript, implemented caching strategies, and provided post-launch support.",
      architectureOverview:
        "Layered frontend-backend contract: Type-safe client queries powered by React Query communicating with normalized, lightweight Node.js API endpoints.",
      architectureFlow: [
        { label: "CLIENT VIEW", sublabel: "Next.js / TypeScript", role: "Optimistic UI updates, modular components, strict types" },
        { label: "CACHE LAYER", sublabel: "React Query", role: "Request deduplication, background revalidation, memory cache" },
        { label: "API GATEWAY", sublabel: "Node.js / Express", role: "Consolidated payloads, decoupled micro-routes" },
        { label: "PERSISTENCE", sublabel: "Database", role: "Optimized queries, selective column projection" },
      ],
      stackLayers: [
        {
          layer: "Client",
          technologies: ["React", "TypeScript", "React Query", "Tailwind CSS"],
          purpose: "Declarative UI with automatic stale-while-revalidate data fetching and zero cascade renders.",
        },
        {
          layer: "API Architecture",
          technologies: ["Node.js", "Express.js", "Zod"],
          purpose: "Strict schema contracts, payload compression, and streamlined route handlers.",
        },
      ],
      features: [
        {
          title: "Optimistic UI & Cache Revalidation",
          description: "Instant visual feedback on user mutations before network confirmation, backed by automatic background synchronization.",
        },
        {
          title: "End-to-End Type Safety",
          description: "Shared TypeScript interfaces and Zod validation schemas ensuring client and server contract synchronicity.",
        },
        {
          title: "Unified Error Boundary System",
          description: "Graceful error fallbacks that isolate failing widgets without crashing the entire dashboard session.",
        },
      ],
      challenges: [
        {
          problem: "Untangling nested, undocumented legacy state without interrupting active customer operations.",
          resolution: "Adopted an incremental migration strategy, wrapping legacy modules in typed adapters while migrating views one at a time.",
        },
      ],
      solution:
        "Rewrote key bottlenecks, instituted predictable state caching, and cleaned up the API response shape to deliver only necessary fields to the frontend.",
      outcome:
        "Resolved persistent customer complaints regarding dashboard freezes, simplified developer onboarding for the startup's team, and ensured long-term maintainability.",
      status: "Delivered",
    },
  },
  {
    id: "education-platform",
    number: "04",
    title: "Enterprise Education Network Platform",
    slug: "education-platform",
    tagline: "Scalable web infrastructure and team enablement for a major regional educational institution",
    category: "EDUCATION",
    categoryLabel: "Education Technology",
    shortDescription:
      "Comprehensive full-stack development and internal team coaching delivered for a Karachi-based education network to modernize student records and digital services.",
    description:
      "Partnered with an educational organization in Karachi to upgrade their core web presence and internal administrative systems, while directly training and mentoring their in-house developer team on modern engineering best practices.",
    role: "Senior Full-Stack Engineer & Mentor",
    clientContext: "Education Organization & Network (Karachi)",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "REST APIs",
      "Team Enablement",
    ],
    isFeatured: true,
    isOpenSource: false,
    status: "Delivered & Transitioned",
    metrics: [
      { label: "Domain", value: "Educational Tech" },
      { label: "Scope", value: "Platform + Training" },
      { label: "Location", value: "Karachi Network" },
    ],
    caseStudy: {
      overview:
        "A dual-impact engagement combining production software development with technical team enablement. Tatheer engineered modern digital portals while elevating the technical capabilities of the client's internal engineering team.",
      problem:
        "The organization's existing web services struggled with consistency, while their internal developers required practical coaching on modern full-stack conventions, component modularity, and clean Git workflows.",
      goal:
        "Deliver reliable full-stack web features and systematically upskill the in-house staff through paired programming, architecture walkthroughs, and code reviews.",
      myRole:
        "Senior Full-Stack Engineer and Technical Mentor. Engineered core application views and led structured knowledge-transfer sessions for internal engineers.",
      architectureOverview:
        "Modular full-stack MERN architecture emphasizing decoupled components, clean folder structure, and documented API endpoints for seamless team handoff.",
      architectureFlow: [
        { label: "WEB INTERFACE", sublabel: "React SPA", role: "Accessible public and student portals" },
        { label: "APPLICATION SERVER", sublabel: "Node.js / Express", role: "Modular route controllers and service abstractions" },
        { label: "DATA LAYER", sublabel: "MongoDB", role: "Document schema with validation rules" },
        { label: "TEAM KNOWLEDGE", sublabel: "Documentation", role: "Style guides, Git standards, and deployment runbooks" },
      ],
      stackLayers: [
        {
          layer: "Frontend",
          technologies: ["React", "JavaScript (ES6+)", "Tailwind CSS"],
          purpose: "Clean, accessible web application design following modern component composition.",
        },
        {
          layer: "Backend",
          technologies: ["Node.js", "Express.js", "REST APIs"],
          purpose: "Reliable, documented server endpoints for student records and course data.",
        },
      ],
      features: [
        {
          title: "Modular Component System",
          description: "Reusable UI library created so the internal team could assemble new pages with uniform styling.",
        },
        {
          title: "Standardized Git & Review Workflow",
          description: "Established branch naming, commit conventions, and peer pull-request review checklists.",
        },
      ],
      challenges: [
        {
          problem: "Aligning team members with divergent technical skill levels into a unified development pace.",
          resolution: "Structured progressive code sprints, pairing junior developers with senior guidance on real feature deliverables.",
        },
      ],
      solution:
        "Built reliable software while embedding long-term capability into the organization's staff, ensuring the client could maintain and expand the software independently.",
      outcome:
        "Successfully handed over a stable, production-ready portal and an empowered in-house development team capable of ongoing feature iteration.",
      status: "Delivered",
      testimonial: {
        quote: "Tatheer not only delivered exceptional software architecture for our platform, but also patiently mentored our internal development team on modern full-stack workflows. His teaching clarity and technical competence made a lasting impact.",
        author: "Client Management",
        role: "Technical Lead",
        context: "Karachi Education Network",
      },
    },
  },
  {
    id: "api-dashboard-rebuild",
    number: "05",
    title: "International API + Dashboard Rebuild",
    slug: "api-dashboard-rebuild",
    tagline: "Cross-border systems engineering and high-throughput API integration",
    category: "API",
    categoryLabel: "International Systems",
    shortDescription:
      "A cross-time-zone international engagement involving complex API restructuring, dashboard rebuilding, and seamless remote collaboration with European stakeholders.",
    description:
      "Engaged with a client in the Netherlands to re-architect a critical operational dashboard and its backend API integrations, demonstrating disciplined communication, clean code standards, and asynchronous delivery.",
    role: "Senior Full-Stack Developer",
    clientContext: "International Engagement (Netherlands)",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "REST APIs",
      "WebSockets",
      "Docker",
    ],
    isFeatured: true,
    isOpenSource: false,
    status: "Completed & Delivered",
    metrics: [
      { label: "Collaboration", value: "Netherlands / Remote" },
      { label: "Focus", value: "API & Dashboard" },
      { label: "Standards", value: "TypeScript & Strict Linting" },
    ],
    caseStudy: {
      overview:
        "A high-standards remote engineering engagement delivering a rebuilt dashboard interface and robust API contracts for an international client based in the Netherlands.",
      problem:
        "The existing dashboard was hindered by slow legacy endpoints and inconsistent data serialization, complicating international stakeholder coordination.",
      goal:
        "Rebuild the frontend dashboard using modern TypeScript conventions and refactor backend API interactions for high throughput, type safety, and seamless remote maintenance.",
      myRole:
        "Senior Full-Stack Developer. Authored TypeScript interfaces, refactored data pipeline handlers, and conducted asynchronous engineering updates across time zones.",
      architectureOverview:
        "Strictly typed full-stack system utilizing Next.js, TypeScript, and micro-API handlers containerized with Docker.",
      architectureFlow: [
        { label: "CLIENT DASHBOARD", sublabel: "Next.js / TypeScript", role: "High-density charts, data tables, reactive state" },
        { label: "API CONTRACTS", sublabel: "OpenAPI / Zod", role: "Type-safe request and response validation" },
        { label: "APPLICATION CORE", sublabel: "Node.js Services", role: "High-throughput business logic execution" },
        { label: "CONTAINER RUNTIME", sublabel: "Docker", role: "Reproducible local and staging deployment environments" },
      ],
      stackLayers: [
        {
          layer: "Frontend",
          technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
          purpose: "Server-side rendering, fast hydration, and type-safe component state.",
        },
        {
          layer: "Backend",
          technologies: ["Node.js", "Express.js", "TypeScript"],
          purpose: "Strictly typed endpoint handlers and asynchronous processing pipelines.",
        },
      ],
      features: [
        {
          title: "Type-Safe Client-Server Synchronization",
          description: "Zero runtime data mismatch bugs through shared interface contracts and Zod payload parsers.",
        },
        {
          title: "Asynchronous International Workflow",
          description: "Detailed PR descriptions, automated testing pipelines, and proactive cross-time-zone documentation.",
        },
      ],
      challenges: [
        {
          problem: "Managing high-velocity code deliveries across differing geographic time zones.",
          resolution: "Maintained rigorous asynchronous communication with comprehensive video code walkthroughs and daily sprint summaries.",
        },
      ],
      solution:
        "Delivered a modern, clean, robust dashboard and API layer that met strict European software engineering standards.",
      outcome:
        "Client successfully deployed the rebuilt dashboard to production with praise for engineering precision and proactive communication.",
      status: "Delivered",
    },
  },
  {
    id: "saas-development",
    number: "06",
    title: "Multi-Tenant SaaS Platforms",
    slug: "saas-development",
    tagline: "Scalable multi-tenant architecture, role segregation, and subscription infrastructure",
    category: "SAAS",
    categoryLabel: "SaaS Systems",
    shortDescription:
      "Engineering reusable SaaS foundational architectures supporting multi-tenancy, scoped permissions, billing workflows, and automated customer onboarding.",
    description:
      "Led by Tatheer through Tech4Edges, this initiative represents core SaaS software engineering: decoupled tenant schemas, authenticated route security, billing integrations, and scalable cloud deployments.",
    role: "Founder & Lead Architect",
    clientContext: "Tech4Edges Venture & Client Implementations",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
      "Tailwind CSS",
      "JWT / OAuth",
    ],
    isFeatured: true,
    isOpenSource: false,
    status: "Active Architectural Core",
    metrics: [
      { label: "Pattern", value: "Multi-Tenant" },
      { label: "Stack", value: "Next.js / PostgreSQL" },
      { label: "Security", value: "Scoped RBAC" },
    ],
    caseStudy: {
      overview:
        "A production-grade architectural framework for multi-tenant Software-as-a-Service (SaaS) products. Engineered to allow rapid deployment of modern business applications with built-in tenant isolation, authentication, and role hierarchies.",
      problem:
        "Building SaaS software from scratch often repeats tedious boilerplate: tenant isolation bugs, leaked database queries across accounts, and fragile role management.",
      goal:
        "Architect a resilient, reusable SaaS blueprint featuring strict tenant-level row isolation, unified authentication, modular billing hooks, and performant server components.",
      myRole:
        "Lead Architect & Full-Stack Engineer. Designed the relational tenant isolation models, database middleware in Prisma, and Next.js App Router layout composition.",
      architectureOverview:
        "Next.js App Router frontend with tenant-subdomain resolution, JWT/OAuth identity provider, and PostgreSQL with tenant-scoped query middleware.",
      architectureFlow: [
        { label: "TENANT CLIENT", sublabel: "Next.js / Edge", role: "Tenant-specific theme injection, optimized server rendering" },
        { label: "IDENTITY & RBAC", sublabel: "Auth Guard", role: "Multi-role permissions: Owner, Admin, Member, Guest" },
        { label: "TENANT MIDDLEWARE", sublabel: "Prisma Scoping", role: "Automatic tenant ID injection preventing cross-tenant leaks" },
        { label: "DATA PERSISTENCE", sublabel: "PostgreSQL", role: "Partitioned or tenant-indexed relational database schemas" },
      ],
      stackLayers: [
        {
          layer: "Application",
          technologies: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS"],
          purpose: "Server and client components with dynamic tenant-level layout nesting.",
        },
        {
          layer: "Persistence",
          technologies: ["PostgreSQL", "Prisma ORM"],
          purpose: "ACID compliance with tenant-scoped query extensions.",
        },
        {
          layer: "DevOps",
          technologies: ["Docker", "Vercel / Cloud Edge"],
          purpose: "Edge distribution and containerized staging environments.",
        },
      ],
      features: [
        {
          title: "Fail-Safe Tenant Isolation",
          description: "Database middleware automatically restricts query execution to the authenticated organization context.",
        },
        {
          title: "Hierarchical Role-Based Security",
          description: "Granular capability flags that define exactly what each role can view, mutate, or export.",
        },
      ],
      challenges: [
        {
          problem: "Eliminating the risk of accidental cross-tenant data leakage in complex relational joins.",
          resolution: "Configured Prisma client extensions that automatically inject tenant ID filters into all WHERE clauses.",
        },
      ],
      solution:
        "Established a rock-solid, production-tested SaaS architecture that powers client products and internal Tech4Edges digital ventures.",
      outcome:
        "Serves as the high-velocity foundation for enterprise applications, reducing new product time-to-market while guaranteeing security compliance.",
      status: "Production",
    },
  },
  {
    id: "ai-powered-applications",
    number: "07",
    title: "AI Integrations & Workflow Automation",
    slug: "ai-powered-applications",
    tagline: "Integrating generative AI APIs and automated reasoning into practical web systems",
    category: "AI",
    categoryLabel: "AI & Automation",
    shortDescription:
      "Practical engineering bridging large language model APIs with real-world business workflows—document processing, prompt tooling, and intelligent automation.",
    description:
      "Focuses on practical, verified AI integration: connecting OpenAI and Claude APIs with structured web backends to automate repetitive business tasks, parse unstructured documents, and enhance developer tooling.",
    role: "AI Integration Engineer",
    clientContext: "Internal Tech4Edges & Specialized Client Workflows",
    technologies: [
      "Node.js",
      "TypeScript",
      "AI APIs (OpenAI / Anthropic)",
      "Next.js",
      "Vector Embeddings",
      "Prompt Tooling",
    ],
    isFeatured: false,
    isOpenSource: false,
    status: "Active Implementations",
    metrics: [
      { label: "Focus", value: "Workflow Automation" },
      { label: "Integration", value: "LLM & Vision APIs" },
      { label: "Outcome", value: "Operational Efficiency" },
    ],
    caseStudy: {
      overview:
        "Practical systems engineering that connects state-of-the-art AI reasoning models to structured business workflows. Rather than superficial chatbots, this work emphasizes automated document parsing, data extraction, and intelligent background jobs.",
      problem:
        "Businesses spend significant manual hours extracting structured fields from unstructured PDFs, customer messages, and operational manifests, leading to human error and data entry delays.",
      goal:
        "Build secure, rate-limited middleware pipelines that ingest unstructured data, invoke LLM function-calling endpoints, validate the JSON response against strict Zod schemas, and persist clean data to the database.",
      myRole:
        "Systems & AI Integration Engineer. Engineered the prompt templates, fallback strategies for API token limits, and schema validation middleware.",
      architectureOverview:
        "Asynchronous task queue receiving customer inputs, dispatching streaming or function-calling requests to AI APIs, validating with Zod schemas, and persisting structured results.",
      architectureFlow: [
        { label: "INPUT INGESTION", sublabel: "Web App / API", role: "Raw document, text, or query payload submission" },
        { label: "PROMPT ORCHESTRATOR", sublabel: "Node.js Engine", role: "Context injection, token management, system instructions" },
        { label: "AI INFERENCE", sublabel: "LLM API", role: "Structured JSON function calling and semantic extraction" },
        { label: "VALIDATION & STORAGE", sublabel: "Zod / PostgreSQL", role: "Schema assertion and normalized persistence" },
      ],
      stackLayers: [
        {
          layer: "Orchestration",
          technologies: ["Node.js", "TypeScript", "AI SDK", "Zod"],
          purpose: "Prompt management, schema validation, and retry logic.",
        },
        {
          layer: "Client Interface",
          technologies: ["Next.js", "Tailwind CSS"],
          purpose: "Real-time streaming feedback and verification dashboards.",
        },
      ],
      features: [
        {
          title: "Structured Schema Extraction",
          description: "Zero hallucinated formats: guarantees valid JSON responses matching strict relational database schemas.",
        },
        {
          title: "Rate Limiting & Cost Safeguards",
          description: "Token budgeting and local caching to prevent redundant upstream API calls.",
        },
      ],
      challenges: [
        {
          problem: "Handling stochastic AI model responses in deterministic business applications.",
          resolution: "Enforced strict Zod schema parsing with automated re-prompt correction loops on validation failure.",
        },
      ],
      solution:
        "Developed resilient integration adapters that turn probabilistic AI reasoning into reliable, deterministic software workflows.",
      outcome:
        "Automated operational data extraction pipelines, saving dozens of manual operator hours while maintaining strict data integrity.",
      status: "Active",
    },
  },
];

/** Helper to query projects by slug */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Helper to query adjacent projects for case study navigation */
export function getAdjacentProjects(currentSlug: string): {
  prev: Project;
  next: Project;
} {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  const prevIndex = (index - 1 + projects.length) % projects.length;
  const nextIndex = (index + 1) % projects.length;
  return {
    prev: projects[prevIndex],
    next: projects[nextIndex],
  };
}
