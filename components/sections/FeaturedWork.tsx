"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface FeaturedProject {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  href: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    title: "EEST Portal / LMS",
    category: "Education Technology",
    description:
      "Complete learning management system powering the Emerging Edge School of Technology — managing students, trainers, courses, and institutional workflows.",
    technologies: ["React", "Node.js", "MongoDB", "REST APIs"],
    href: "/projects/eest-portal",
  },
  {
    title: "Custom ERP Platform",
    category: "Business Software",
    description:
      "Enterprise operations platform built to streamline business workflows, resource management, and data-driven decision making.",
    technologies: ["React", "Node.js", "PostgreSQL", "REST API"],
    href: "/projects/erp-operations-platform",
  },
  {
    title: "SaaS Dashboard Systems",
    category: "SaaS",
    description:
      "Multi-tenant SaaS applications with authentication, subscription management, analytics dashboards, and API integrations.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Cloud"],
    href: "/projects/saas-development",
  },
];

/**
 * 12 — Featured Work Preview.
 * Large project panels with hover interactions and cursor state changes.
 */
export function FeaturedWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="featured-work"
      className="relative overflow-hidden bg-[var(--color-background-alt)] py-28 sm:py-36 lg:py-44"
    >
      <Container>
        <Reveal>
          <span className="mb-4 inline-block font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Selected Work
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-16 text-3xl font-semibold tracking-tight sm:mb-24 sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>
        </Reveal>

        {/* Project panels */}
        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-4"
        >
          {featuredProjects.map(
            ({ title, category, description, technologies, href }, i) => (
              <motion.div
                key={title}
                variants={shouldReduceMotion ? undefined : fadeInUp}
              >
                <Link
                  href={href}
                  data-cursor="project"
                  className={cn(
                    "group block rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-card)]",
                    "p-6 sm:p-8 lg:p-10",
                    "transition-all duration-500",
                    "hover:border-[var(--color-border-hover)] hover:bg-[var(--color-card-hover)]"
                  )}
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                    {/* Left: Project info */}
                    <div className="flex-1">
                      <div className="mb-3 flex items-center gap-4">
                        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                          0{i + 1}
                        </span>
                        <span className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-foreground-subtle)]">
                          {category}
                        </span>
                      </div>

                      <h3 className="mb-3 text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-[var(--color-accent)] sm:text-2xl lg:text-3xl">
                        {title}
                      </h3>

                      <p className="max-w-lg text-sm leading-relaxed text-[var(--color-foreground-muted)] transition-colors duration-300 group-hover:text-[var(--color-foreground-secondary)]">
                        {description}
                      </p>
                    </div>

                    {/* Right: Technologies + arrow */}
                    <div className="flex flex-shrink-0 items-center gap-6 lg:flex-col lg:items-end lg:gap-4">
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-[var(--radius-sm)] border border-[var(--color-border)] px-2 py-1 font-mono text-[0.55rem] uppercase tracking-wider text-[var(--color-foreground-subtle)] transition-colors group-hover:border-[var(--color-accent)]/20 group-hover:text-[var(--color-foreground-muted)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Arrow indicator */}
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] transition-all duration-300 group-hover:border-[var(--color-accent)]/40 group-hover:bg-[var(--color-accent-subtle)]">
                        <span className="text-sm text-[var(--color-foreground-muted)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]">
                          ↗
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Intentional Transition into the Engineering Workspace */}
        <Reveal delay={0.3}>
          <div className="mt-14 pt-10 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)] block mb-1">
                System Registry // Engineering Workspace
              </span>
              <p className="text-sm text-[var(--color-foreground-muted)]">
                Explore deep technical case studies, multi-tiered architectures, and production schemas.
              </p>
            </div>
            <Link
              href="/projects"
              data-cursor="project"
              className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 font-mono text-xs uppercase tracking-widest text-[var(--color-foreground)] transition-all hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)] shrink-0 group"
            >
              <span>Enter Project Lab</span>
              <span className="text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
