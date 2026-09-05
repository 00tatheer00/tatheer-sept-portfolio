"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/data/experience";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

type RoleFilter = "all" | "leadership" | "engineering" | "education";

export function RoleTimeline() {
  const [activeFilter, setActiveFilter] = useState<RoleFilter>("all");
  const shouldReduceMotion = useReducedMotion();

  const filteredRoles = useMemo(() => {
    if (activeFilter === "all") return experiences;
    if (activeFilter === "leadership") {
      return experiences.filter(
        (exp) => exp.id === "tech4edges" || exp.id === "eest"
      );
    }
    if (activeFilter === "engineering") {
      return experiences.filter(
        (exp) =>
          exp.id === "tech4edges" ||
          exp.id === "navttc" ||
          exp.id === "arfa-karim" ||
          exp.id === "eest"
      );
    }
    if (activeFilter === "education") {
      return experiences.filter(
        (exp) =>
          exp.id === "uop-lecturer" ||
          exp.id === "smit" ||
          exp.id === "navttc" ||
          exp.id === "eest" ||
          exp.id === "international-educator"
      );
    }
    return experiences;
  }, [activeFilter]);

  return (
    <section
      id="role-timeline"
      className="py-24 md:py-32 border-b border-[var(--color-border)] bg-[var(--color-background)] relative"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            label="Verified Track Record"
            title="PROFESSIONAL ROLES & ENGAGEMENTS"
            description="Proven execution across enterprise software engineering, academic lecturing, and multi-institutional training programs."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(
              [
                { id: "all", label: "All Roles" },
                { id: "leadership", label: "Leadership & Founder" },
                { id: "engineering", label: "Engineering" },
                { id: "education", label: "Education & University" },
              ] as const
            ).map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-mono transition-colors border",
                  activeFilter === filter.id
                    ? "bg-[var(--color-accent)] text-[var(--color-background)] border-[var(--color-accent)] font-semibold"
                    : "bg-[var(--color-surface)] text-[var(--color-foreground-muted)] border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-foreground)]"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Roles Grid / Timeline list */}
        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredRoles.map((role) => (
              <motion.article
                key={role.id}
                layout
                variants={shouldReduceMotion ? undefined : fadeInUp}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "rounded-2xl border bg-[var(--color-surface)] p-6 sm:p-8 lg:p-10 transition-all",
                  role.isCurrent
                    ? "border-[var(--color-accent)]/30 hover:border-[var(--color-accent)]/60 shadow-sm"
                    : "border-[var(--color-border)] hover:border-[var(--color-border-hover)]"
                )}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-[var(--color-accent)] font-semibold">
                        {role.company}
                      </span>
                      {role.location && (
                        <>
                          <span className="text-[var(--color-border)]">·</span>
                          <span className="font-mono text-[0.65rem] text-[var(--color-foreground-subtle)]">
                            {role.location}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
                      {role.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant={role.isCurrent ? "accent" : "outline"}
                      size="sm"
                      className="font-mono text-[0.65rem] uppercase tracking-wider"
                    >
                      {role.type}
                    </Badge>
                    <span className="rounded border border-[var(--color-border)] bg-[var(--color-background)] px-2.5 py-0.5 font-mono text-[0.65rem] text-[var(--color-foreground-muted)]">
                      {role.startDate} — {role.isCurrent ? "Present" : role.endDate ?? "Concluded"}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[var(--color-foreground-muted)] leading-relaxed mb-6">
                  {role.description}
                </p>

                {/* Role Highlights */}
                <div className="mb-6 space-y-2">
                  <h4 className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--color-foreground-subtle)]">
                    Key Outcomes & Deliverables
                  </h4>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-xs sm:text-sm text-[var(--color-foreground-muted)]"
                      >
                        <span className="mt-1 text-[var(--color-accent)] shrink-0 font-mono text-xs">
                          ▹
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* EEST LMS Portal Special Callout */}
                {role.id === "eest" && (
                  <div className="mb-6 rounded-xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                      <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                        Proprietary Engineering Spotlight
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--color-foreground)]">
                      <strong>EEST Portal & LMS:</strong> Personally designed, developed, and currently maintain the entire production digital platform powering course management, student progress tracking, and developer evaluations for the academy.
                    </p>
                  </div>
                )}

                {/* Technologies used */}
                {role.technologies && role.technologies.length > 0 && (
                  <div className="pt-4 border-t border-[var(--color-border)] flex flex-wrap items-center gap-1.5">
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-foreground-subtle)] mr-2">
                      Technologies:
                    </span>
                    {role.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-[var(--color-border)] bg-[var(--color-background)] px-2 py-0.5 font-mono text-[0.65rem] text-[var(--color-foreground-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
