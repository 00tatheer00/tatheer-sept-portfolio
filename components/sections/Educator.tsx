"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const pedagogicalSteps = [
  {
    phase: "01",
    label: "LEARN",
    subtitle: "First-Principles Mental Models",
    description:
      "Master computer science fundamentals, data structures, and architectural patterns—not transient framework syntax.",
  },
  {
    phase: "02",
    label: "PRACTICE",
    subtitle: "Rigorous Problem Solving",
    description:
      "Dissect real-world bottlenecks, write algorithms by hand, and analyze edge cases before committing code.",
  },
  {
    phase: "03",
    label: "BUILD",
    subtitle: "Full-Stack System Engineering",
    description:
      "Construct complete, multi-tiered software applications with database normalization, auth protocols, and type safety.",
  },
  {
    phase: "04",
    label: "DEPLOY",
    subtitle: "Production & Telemetry",
    description:
      "Push code to live cloud infrastructure, manage containerized environments, and debug live production incidents.",
  },
  {
    phase: "05",
    label: "GROW",
    subtitle: "Leadership & Knowledge Multiplication",
    description:
      "Conduct professional code reviews, mentor incoming cohorts, and champion engineering ethics.",
  },
];

const teachingEnvironments = [
  { name: "University of Peshawar", role: "Visiting Lecturer", scope: "CS Pedagogy" },
  { name: "SMIT (Saylani Mass IT)", role: "Lead Instructor", scope: "Full-Stack Web" },
  { name: "NAVTTC", role: "Technical Trainer", scope: "Govt Tech Initiatives" },
  { name: "Arfa Karim Incubator", role: "Technical Mentor", scope: "Venture Engineering" },
  { name: "EEST", role: "Director & LMS Architect", scope: "Tech School" },
];

/**
 * 05 — Educator Section (Rebuilt).
 * Visual narrative: LEARN → PRACTICE → BUILD → DEPLOY → GROW
 * Communicates: "I don't only teach syntax. I teach people how to build real software."
 * Human, authentic, and distinct in visual composition.
 */
export function Educator() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="educator"
      className="relative overflow-hidden py-28 sm:py-36 lg:py-44"
    >
      <Container>
        {/* Section Header */}
        <div className="mb-16 sm:mb-24">
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)]">
                02 / Educational Impact
              </span>
              <span className="h-px w-10 bg-[var(--color-border)]" />
              <span className="font-mono text-[0.6rem] uppercase tracking-wider text-[var(--color-foreground-subtle)]">
                Pedagogy &amp; Mentorship
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-[var(--color-foreground)] mb-6">
              I Don&apos;t Only Teach Syntax. <br />
              <span className="text-[var(--color-accent)]">I Teach How To Build Real Software.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--color-foreground-secondary)]">
              Teaching is the ultimate test of engineering clarity. Having mentored over 500+ aspiring developers, my goal is to transform passive tutorial watchers into autonomous software engineers who design, test, and ship with confidence.
            </p>
          </Reveal>
        </div>

        {/* Pedagogical Progression: LEARN → PRACTICE → BUILD → DEPLOY → GROW */}
        <div className="mb-20">
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)] mb-6">
            The 5-Stage Developer Progression
          </div>

          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {pedagogicalSteps.map((step, idx) => (
              <motion.div
                key={step.label}
                variants={shouldReduceMotion ? undefined : fadeInUp}
                className="group relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[var(--color-accent)]">
                      {step.phase}
                    </span>
                    {idx < pedagogicalSteps.length - 1 && (
                      <span className="hidden lg:inline text-[var(--color-foreground-subtle)] text-xs font-mono">
                        →
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-xl font-bold tracking-tight text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors mb-1">
                    {step.label}
                  </h3>

                  <div className="font-mono text-[0.68rem] text-[var(--color-foreground-subtle)] mb-3 uppercase tracking-wider">
                    {step.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--color-border)]/50 flex items-center justify-between">
                  <span className="font-mono text-[0.6rem] text-[var(--color-foreground-subtle)]">
                    STAGE {idx + 1}/5
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]/40 group-hover:bg-[var(--color-accent)] transition-colors" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Humanist Editorial Strip: Verified Teaching Ecosystem */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-4">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)] block mb-2">
                Ecosystem &amp; Venues
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-foreground)] mb-3">
                Where The Teaching Happens
              </h3>
              <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed">
                From university computer science auditoriums to hands-on bootcamps and enterprise incubators.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {teachingEnvironments.map((env) => (
                <div
                  key={env.name}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)]/60 p-4 transition-colors hover:border-[var(--color-accent)]/30"
                >
                  <div className="font-semibold text-sm text-[var(--color-foreground)] mb-1">
                    {env.name}
                  </div>
                  <div className="font-mono text-[0.68rem] text-[var(--color-accent)]">
                    {env.role}
                  </div>
                  <div className="font-mono text-[0.62rem] text-[var(--color-foreground-subtle)] mt-0.5">
                    {env.scope}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
