/* ──────────────────────────────────────────────────────────────
   Content Types — S Tatheer Hussain Portfolio
   ────────────────────────────────────────────────────────────── */

/** Social / external link */
export interface SocialLink {
  label: string;
  url: string;
  icon?: string;
  /** Shows on hover or as aria-label */
  description?: string;
}

/** Personal profile — the single source of truth for identity */
export interface PersonalProfile {
  firstName: string;
  lastName: string;
  fullName: string;
  initials: string;
  tagline: string;
  /** Short, punchy identity labels (e.g. "Engineer. Educator. Entrepreneur.") */
  identityLabels: string[];
  bio: string;
  shortBio: string;
  location: {
    city: string;
    country: string;
  };
  roles: string[];
  email?: string;
  website: string;
  resumeUrl?: string;
  avatarUrl?: string;
  socials: SocialLink[];
}

/** Professional experience entry */
export interface Experience {
  id: string;
  company: string;
  role: string;
  type: "full-time" | "part-time" | "contract" | "freelance" | "founding";
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  location?: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  companyUrl?: string;
  companyLogo?: string;
}

/** Education entry */
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  location?: string;
  description?: string;
  achievements?: string[];
  institutionUrl?: string;
}

export type ProjectCategory =
  | "ALL"
  | "SAAS"
  | "WEB"
  | "MOBILE"
  | "ERP"
  | "EDUCATION"
  | "API"
  | "AI";

export interface ArchitectureFlowNode {
  label: string;
  sublabel?: string;
  role: string;
}

export interface TechStackLayer {
  layer: string;
  technologies: string[];
  purpose: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  goal: string;
  myRole: string;
  architectureOverview: string;
  architectureFlow: ArchitectureFlowNode[];
  stackLayers: TechStackLayer[];
  features: { title: string; description: string }[];
  challenges: { problem: string; resolution: string }[];
  solution: string;
  outcome: string;
  status: "Production" | "Maintained" | "Delivered" | "Active";
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    context: string;
  };
}

/** Project entry */
export interface Project {
  id: string;
  number: string;
  title: string;
  slug: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  role: string;
  clientContext?: string;
  year?: string;
  technologies: string[];
  thumbnailUrl?: string;
  images?: string[];
  liveUrl?: string;
  sourceUrl?: string;
  caseStudyUrl?: string;
  isFeatured: boolean;
  isOpenSource: boolean;
  status: string;
  metrics?: ProjectMetric[];
  caseStudy?: ProjectCaseStudy;
}

/** Quantifiable project metric */
export interface ProjectMetric {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

/** Skill or technology */
export interface Skill {
  name: string;
  category: SkillCategory;
  /** 1–5 proficiency (optional — avoid displaying unless meaningful) */
  proficiency?: number;
  icon?: string;
  yearsOfExperience?: number;
}

export type SkillCategory =
  | "language"
  | "framework"
  | "database"
  | "cloud"
  | "devops"
  | "design"
  | "tool"
  | "methodology"
  | "other";

/** Professional service offering */
export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon?: string;
  features: string[];
  /** Optional starting price or price range */
  pricing?: string;
}

/** Achievement, award, or certification */
export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  url?: string;
  icon?: string;
  type: "award" | "certification" | "recognition" | "milestone";
}

/** Client or colleague testimonial */
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  companyUrl?: string;
  /** Featured testimonials get prominent placement */
  isFeatured: boolean;
}

/** Article or blog post */
export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  publishedDate: string;
  updatedDate?: string;
  tags: string[];
  thumbnailUrl?: string;
  externalUrl?: string;
  readingTime?: string;
  isFeatured: boolean;
}

/* ──────────────────────────────────────────────────────────────
   Component & UI Types
   ────────────────────────────────────────────────────────────── */

/** Custom cursor states */
export type CursorVariant =
  | "default"
  | "link"
  | "button"
  | "project"
  | "view"
  | "drag";

/** Navigation item */
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

/** Animation direction */
export type AnimationDirection = "up" | "down" | "left" | "right";

/** Reveal animation type */
export type RevealType = "fade" | "slide" | "scale" | "clip";
