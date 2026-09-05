"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { fadeInUp } from "@/lib/animations";

interface ProjectCardProps {
  project: Project;
  layoutVariant?: "horizontal" | "asymmetric" | "split" | "compact";
  index: number;
}

export function ProjectCard({
  project,
  layoutVariant = "compact",
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  // Grand Horizontal Layout
  if (layoutVariant === "horizontal") {
    return (
      <motion.article
        variants={shouldReduceMotion ? undefined : fadeInUp}
        className="group relative rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10 lg:p-12 transition-all duration-300 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface)]/90 overflow-hidden"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold text-[var(--color-accent)]">
                PROJECT {project.number}
              </span>
              <span className="text-[var(--color-border)]">·</span>
              <Badge variant="accent" size="sm" className="font-mono text-[0.65rem] uppercase">
                {project.categoryLabel}
              </Badge>
              {project.status && (
                <span className="font-mono text-[0.65rem] text-[var(--color-foreground-subtle)]">
                  {project.status}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-foreground)] mb-4 transition-colors group-hover:text-[var(--color-accent)]">
              {project.title}
            </h3>

            <p className="text-base sm:text-lg text-[var(--color-foreground-muted)] leading-relaxed mb-6 max-w-2xl">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--color-foreground-subtle)] mb-6">
              <div>
                <span className="text-[var(--color-foreground-muted)] block">My Role:</span>
                <span className="text-[var(--color-foreground)] font-medium">{project.role}</span>
              </div>
              {project.clientContext && (
                <div>
                  <span className="text-[var(--color-foreground-muted)] block">Context:</span>
                  <span className="text-[var(--color-foreground)] font-medium">
                    {project.clientContext}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-2.5 py-1 font-mono text-xs text-[var(--color-foreground-muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-xs font-semibold text-[var(--color-background)] transition-all hover:bg-[var(--color-accent)]/90 hover:shadow-[0_0_25px_rgba(200,169,110,0.3)]"
            >
              <span>Explore Case Study</span>
              <span className="font-mono">→</span>
            </Link>
          </div>

          {/* Right Visual Architecture Preview */}
          <div className="lg:col-span-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/80 p-6 sm:p-8">
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--color-foreground-subtle)] block mb-4">
              System Architecture Flow
            </span>
            <div className="space-y-3">
              {project.caseStudy?.architectureFlow.map((node, idx) => (
                <div key={node.label} className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--color-accent)]">0{idx + 1}.</span>
                  <span className="text-[var(--color-foreground)] font-medium">{node.label}</span>
                  <span className="text-[var(--color-foreground-subtle)] text-[0.65rem]">
                    {node.sublabel}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  // Asymmetric Layout
  if (layoutVariant === "asymmetric") {
    return (
      <motion.article
        variants={shouldReduceMotion ? undefined : fadeInUp}
        className="group relative rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface)]/90"
      >
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-[var(--color-border)] pb-6 md:pb-0 md:pr-8">
            <span className="font-mono text-xs font-bold text-[var(--color-accent)] block mb-2">
              PROJECT {project.number}
            </span>
            <Badge variant="outline" size="sm" className="font-mono text-[0.65rem] uppercase mb-4">
              {project.categoryLabel}
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-foreground)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-[var(--color-foreground-muted)] mb-6">
              {project.clientContext}
            </p>
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[var(--color-accent)] group-hover:translate-x-1 transition-transform"
            >
              <span>View Full Case Study</span>
              <span>→</span>
            </Link>
          </div>

          <div className="md:col-span-7">
            <p className="text-sm sm:text-base text-[var(--color-foreground-muted)] leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="space-y-4">
              <div>
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-foreground-subtle)] block mb-1">
                  My Engineering Role
                </span>
                <span className="text-xs sm:text-sm font-medium text-[var(--color-foreground)]">
                  {project.role}
                </span>
              </div>

              <div>
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-foreground-subtle)] block mb-2">
                  Key Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-[var(--color-border)] bg-[var(--color-background)] px-2 py-0.5 font-mono text-[0.65rem] text-[var(--color-foreground-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  // Compact / Split Layout
  return (
    <motion.article
      variants={shouldReduceMotion ? undefined : fadeInUp}
      className="group rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface)]/90"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="font-mono text-xs font-bold text-[var(--color-accent)]">
            PROJECT {project.number}
          </span>
          <Badge variant="outline" size="sm" className="font-mono text-[0.65rem] uppercase">
            {project.categoryLabel}
          </Badge>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-foreground)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
          {project.title}
        </h3>

        <p className="text-xs font-mono text-[var(--color-foreground-subtle)] mb-4">
          {project.clientContext}
        </p>

        <p className="text-xs sm:text-sm text-[var(--color-foreground-muted)] leading-relaxed mb-6">
          {project.shortDescription}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--color-border)] mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded border border-[var(--color-border)] bg-[var(--color-background)] px-2 py-0.5 font-mono text-[0.65rem] text-[var(--color-foreground-muted)]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="rounded border border-[var(--color-border)] bg-[var(--color-background)] px-2 py-0.5 font-mono text-[0.65rem] text-[var(--color-foreground-subtle)]">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center justify-between w-full text-xs font-mono font-medium text-[var(--color-foreground-muted)] group-hover:text-[var(--color-accent)] transition-colors"
        >
          <span>Examine Architecture & Case Study</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </motion.article>
  );
}
