"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { cn } from "@/lib/utils";

interface SkillTier {
  id: string;
  category: string;
  focus: string;
  technologies: string[];
  principles: string;
}

const technicalDomains: SkillTier[] = [
  {
    id: "frontend",
    category: "FRONTEND",
    focus: "Client-Side Engineering & Dynamic Interfaces",
    technologies: ["React 19", "Next.js (App Router)", "TypeScript", "JavaScript (ESNext)", "Tailwind CSS", "Framer Motion"],
    principles: "Zero layout shift, strict typed component contracts, accessible semantic trees, and fluid micro-interactions.",
  },
  {
    id: "backend",
    category: "BACKEND",
    focus: "High-Throughput Services & API Architecture",
    technologies: ["Node.js", "Express", "NestJS", "PHP", "Laravel", "REST APIs", "GraphQL", "WebSockets"],
    principles: "Stateless microservices, robust error handling, defense against race conditions, and strict authentication pipelines.",
  },
  {
    id: "database",
    category: "DATABASE",
    focus: "Relational Schemas, Caching & Normalization",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma ORM", "Mongoose"],
    principles: "Third-normal-form relational data models, indexed query optimization, ACID safety, and sub-millisecond caching.",
  },
  {
    id: "cloud",
    category: "CLOUD / DEVOPS",
    focus: "Containerization, Infrastructure & Continuous Delivery",
    technologies: ["AWS (EC2, S3, RDS)", "Docker", "Linux (Ubuntu/Debian)", "CI/CD (GitHub Actions)", "Vercel", "Nginx"],
    principles: "Declarative infrastructure, automated zero-downtime rolling deploys, and containerized parity between dev and prod.",
  },
  {
    id: "testing",
    category: "TESTING",
    focus: "End-to-End Safety & Regression Prevention",
    technologies: ["Jest", "Playwright", "React Testing Library", "API Integration Tests", "Type-Check Gates"],
    principles: "Test real user flows rather than implementation details. Automated CI test gates prevent breaking changes.",
  },
  {
    id: "ai",
    category: "AI & AUTOMATION",
    focus: "LLM Integration & Intelligent Workflow Systems",
    technologies: ["OpenAI APIs", "Anthropic Claude", "AI Agents", "Automated Workflows", "Prompt Engineering"],
    principles: "Leveraging state-of-the-art language models to automate operational business logic and build intelligent SaaS tooling.",
  },
];

/**
 * 09 — Technical Domains & Architecture Matrix (Rebuilt).
 * Formats skills into 6 systemic tiers:
 * FRONTEND · BACKEND · DATABASE · CLOUD/DEVOPS · TESTING · AI
 * Clean typographic and system-like layout, avoiding badge overload.
 */
export function WhatIBuild() {
  const [activeTier, setActiveTier] = useState<number>(0);

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-28 sm:py-36 lg:py-44 bg-[var(--color-background)]"
    >
      <Container>
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)]">
                05 / Technical Depth
              </span>
              <span className="h-px w-10 bg-[var(--color-border)]" />
              <span className="font-mono text-[0.6rem] uppercase tracking-wider text-[var(--color-foreground-subtle)]">
                Architecture &amp; Core Stack
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-[var(--color-foreground)] mb-6">
              Technical Expertise, <br />
              <span className="text-[var(--color-accent)]">Organized By Layer</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--color-foreground-secondary)]">
              No badge soup or arbitrary percentage bars. Here is a transparent breakdown of my technical domain competencies across the software stack.
            </p>
          </Reveal>
        </div>

        {/* 6-Tier Architecture Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technicalDomains.map((tier, idx) => {
            const isSelected = activeTier === idx;
            return (
              <div
                key={tier.category}
                onClick={() => setActiveTier(idx)}
                className={cn(
                  "cursor-pointer rounded-2xl border p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between group",
                  isSelected
                    ? "border-[var(--color-accent)] bg-[var(--color-surface)] shadow-lg shadow-black/30"
                    : "border-[var(--color-border)] bg-[var(--color-surface)]/50 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface)]"
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[var(--color-accent)]">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-[0.6rem] uppercase tracking-wider text-[var(--color-foreground-subtle)]">
                      TIER {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors mb-2">
                    {tier.category}
                  </h3>

                  <div className="font-mono text-xs text-[var(--color-foreground-subtle)] mb-4">
                    {tier.focus}
                  </div>

                  {/* Technology tokens */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {tier.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-[var(--color-border)]/70 bg-[var(--color-background)] px-2 py-1 font-mono text-[0.68rem] text-[var(--color-foreground-muted)] group-hover:text-[var(--color-foreground)] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)]/60 text-xs text-[var(--color-foreground-subtle)] leading-relaxed">
                  {tier.principles}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
