"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const teachingPillars = [
  {
    step: "01",
    title: "Programming Logic Before Frameworks",
    desc: "Syntax is disposable; computational logic is permanent. We instill foundational data structures, algorithmic decomposition, and debugging fundamentals first.",
  },
  {
    step: "02",
    title: "Zero Toy Projects — Production Code Only",
    desc: "Students build authentic, multi-user software with authentication, data persistence, responsive design, and production deployment from week one.",
  },
  {
    step: "03",
    title: "Break, Fix, and Debug Under Pressure",
    desc: "Real engineers are made in the debugger. We teach reading stack traces, profiling network payloads, and diagnosing race conditions systematically.",
  },
  {
    step: "04",
    title: "Industry Workflow & Git Collaboration",
    desc: "Pull request reviews, semantic commit histories, feature branches, and linting standards mimic modern agile engineering teams.",
  },
];

const philosophyWords = [
  "LEARN.",
  "BUILD.",
  "BREAK.",
  "FIX.",
  "DEPLOY.",
  "GROW.",
];

export function TeachingEcosystem() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="teaching-ecosystem"
      className="py-24 md:py-32 border-b border-[var(--color-border)] bg-[var(--color-surface)]/20 relative"
    >
      <Container>
        {/* Section Heading */}
        <SectionHeading
          label="Educational Leadership"
          title="BUILDING DEVELOPERS"
          description="Combining frontline software engineering with rigorous pedagogy. Empowering over 500 developers across premier regional academies, universities, and international workshops."
          className="mb-14"
        />

        {/* Large Typographic Mantra Banner */}
        <div className="mb-20 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-12 text-center overflow-hidden relative">
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-accent)]/5 to-transparent"
            aria-hidden="true"
          />

          <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-foreground-subtle)] block mb-6">
            The Pedagogical Loop
          </span>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[var(--color-foreground)]">
            {philosophyWords.map((word, i) => (
              <span
                key={word}
                className={i % 2 === 1 ? "text-[var(--color-accent)]" : undefined}
              >
                {word}
              </span>
            ))}
          </div>

          <p className="mt-6 font-mono text-xs text-[var(--color-foreground-muted)] max-w-xl mx-auto">
            Practical, project-anchored developer education. No rote memorization.
          </p>
        </div>

        {/* Teaching Pillars */}
        <div className="mb-24">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-foreground-subtle)] mb-6">
            Core Educational Principles
          </p>
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {teachingPillars.map((pillar) => (
              <motion.div
                key={pillar.step}
                variants={shouldReduceMotion ? undefined : fadeInUp}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-surface)]/80"
              >
                <span className="font-mono text-xs text-[var(--color-accent)] font-semibold block mb-3">
                  PILLAR {pillar.step}
                </span>
                <h3 className="font-heading font-bold text-base text-[var(--color-foreground)] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* SECTION 07: EEST & LMS PORTAL ARCHITECTURE SPOTLIGHT */}
        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10 lg:p-14 relative overflow-hidden">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left: Narrative */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="accent" size="sm" className="font-mono">
                  EdTech Infrastructure
                </Badge>
                <span className="font-mono text-xs text-[var(--color-foreground-muted)]">
                  EEST Director & Creator
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-foreground)] mb-4">
                Not Just Teaching. <br />
                <span className="text-[var(--color-accent)]">Building The Platform.</span>
              </h3>

              <p className="text-sm sm:text-base text-[var(--color-foreground-muted)] leading-relaxed mb-6">
                At the <strong>Emerging Edge School of Technology (EEST)</strong>, Tatheer&apos;s
                leadership transcends the classroom. Recognizing the limitations of generic
                learning tools, he personally engineered the proprietary <strong>EEST LMS Portal</strong> from scratch.
              </p>

              <div className="space-y-3 font-mono text-xs text-[var(--color-foreground-muted)]">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--color-accent)]">✓</span>
                  <span>Engineered with React, Node.js, Express, and MongoDB</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--color-accent)]">✓</span>
                  <span>Supports complete lifecycle: Student onboarding to code evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--color-accent)]">✓</span>
                  <span>Validated by 200+ students completing Module 1 certification</span>
                </div>
              </div>
            </div>

            {/* Right: Abstract System Flow Diagram */}
            <div className="lg:col-span-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 sm:p-8">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--color-foreground-subtle)] text-center mb-6">
                EEST Educational Ecosystem Architecture
              </p>

              <div className="flex flex-col items-center gap-4">
                {/* Top Roles */}
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-center">
                    <span className="text-xl mb-1 block">👨‍🎓</span>
                    <span className="font-mono text-xs font-bold text-[var(--color-foreground)] block">
                      STUDENT
                    </span>
                    <span className="text-[0.65rem] text-[var(--color-foreground-muted)]">
                      Curriculum, Submissions, Grades
                    </span>
                  </div>

                  <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-center">
                    <span className="text-xl mb-1 block">👨‍🏫</span>
                    <span className="font-mono text-xs font-bold text-[var(--color-foreground)] block">
                      TRAINER
                    </span>
                    <span className="text-[0.65rem] text-[var(--color-foreground-muted)]">
                      Code Reviews, Batch Tracking
                    </span>
                  </div>
                </div>

                {/* Converging Arrows */}
                <div className="flex items-center justify-around w-full text-[var(--color-accent)] font-mono text-xs">
                  <span>↘</span>
                  <span className="text-[var(--color-foreground-subtle)] text-[0.6rem] uppercase tracking-wider">
                    Converges Into
                  </span>
                  <span>↙</span>
                </div>

                {/* Center LMS Portal Engine */}
                <div className="w-full rounded-xl border border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 p-5 text-center shadow-sm">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--color-accent)] block mb-1">
                    Central Engine
                  </span>
                  <h4 className="font-heading font-bold text-base text-[var(--color-foreground)] mb-3">
                    EEST LMS & PORTAL
                  </h4>
                  <div className="grid grid-cols-3 gap-2 text-center pt-3 border-t border-[var(--color-accent)]/20 font-mono text-[0.65rem] text-[var(--color-foreground-muted)]">
                    <div className="rounded bg-[var(--color-surface)] py-1">COURSES</div>
                    <div className="rounded bg-[var(--color-surface)] py-1">PROGRESS</div>
                    <div className="rounded bg-[var(--color-surface)] py-1">MANAGEMENT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
