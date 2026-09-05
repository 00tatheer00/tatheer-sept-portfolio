"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Project, ProjectCategory } from "@/types";
import { ProjectFilter } from "./ProjectFilter";
import { ProjectCard } from "./ProjectCard";
import { staggerContainer } from "@/lib/animations";

interface ProjectLabClientProps {
  initialProjects: Project[];
}

const filterCategories: ProjectCategory[] = [
  "ALL",
  "SAAS",
  "WEB",
  "MOBILE",
  "ERP",
  "EDUCATION",
  "API",
  "AI",
];

export function ProjectLabClient({ initialProjects }: ProjectLabClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("ALL");
  const shouldReduceMotion = useReducedMotion();

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: initialProjects.length };
    initialProjects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [initialProjects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "ALL") return initialProjects;
    return initialProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory, initialProjects]);

  return (
    <div className="space-y-12">
      {/* Category Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--color-border)]">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-foreground-subtle)] block mb-1">
            Filter by Domain
          </span>
          <p className="text-xs font-mono text-[var(--color-foreground-muted)]">
            Showing {filteredProjects.length} of {initialProjects.length} systems
          </p>
        </div>

        <ProjectFilter
          categories={filterCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          counts={categoryCounts}
        />
      </div>

      {/* Projects Showcase with Alternating Layouts */}
      <motion.div
        variants={shouldReduceMotion ? undefined : staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            // Determine alternating editorial layout
            let layoutVariant: "horizontal" | "asymmetric" | "split" | "compact" = "compact";
            if (idx === 0) layoutVariant = "horizontal";
            else if (idx === 1) layoutVariant = "asymmetric";
            else if (idx % 3 === 0) layoutVariant = "horizontal";
            else if (idx % 2 === 0) layoutVariant = "asymmetric";

            return (
              <ProjectCard
                key={project.id}
                project={project}
                layoutVariant={layoutVariant}
                index={idx}
              />
            );
          })}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-12 text-center">
            <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2">
              No projects in this category yet.
            </h3>
            <p className="text-xs font-mono text-[var(--color-foreground-muted)] mb-4">
              Real projects only — zero fabricated placeholders.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory("ALL")}
              className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs font-semibold text-[var(--color-background)]"
            >
              Reset to All Projects
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
