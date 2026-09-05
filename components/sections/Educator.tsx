"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const institutions = [
  "University of Peshawar",
  "SMIT",
  "NAVTTC",
  "Arfa Karim Technology Incubator",
  "EEST",
];

const learningSteps = [
  { label: "LEARN", description: "Absorb the fundamentals" },
  { label: "PRACTICE", description: "Hands-on problem solving" },
  { label: "BUILD", description: "Create real-world projects" },
  { label: "DEPLOY", description: "Ship to production" },
  { label: "GROW", description: "Evolve and mentor others" },
];

/**
 * 05 — Educator section.
 * Communicates teaching philosophy through a learning progression visual.
 */
export function Educator() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="educator"
      className="relative overflow-hidden py-28 sm:py-36 lg:py-44"
    >
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Copy */}
          <div>
            <Reveal>
              <span className="mb-4 inline-block font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)]">
                02 / Identity
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mb-2 text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em]">
                EDUCATOR
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mb-6 font-mono text-sm uppercase tracking-[0.15em] text-[var(--color-foreground-muted)]">
                Building People.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mb-8 max-w-md text-base leading-relaxed text-[var(--color-foreground-secondary)]">
                Teaching isn&apos;t just about transferring knowledge — it&apos;s
                about building the confidence to create. From university
                classrooms to technology incubators, the goal is the same:
                produce engineers who can build.
              </p>
            </Reveal>

            {/* Institutions */}
            <Reveal delay={0.4}>
              <div className="space-y-2">
                <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[var(--color-foreground-subtle)]">
                  Teaching environments
                </p>
                {institutions.map((inst) => (
                  <p
                    key={inst}
                    className="text-sm text-[var(--color-foreground-muted)]"
                  >
                    {inst}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Learning progression */}
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            {/* Central line */}
            <div className="absolute left-[1.1rem] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)]/20 via-[var(--color-accent)]/40 to-[var(--color-accent)]/20 sm:left-6" />

            <div className="space-y-0">
              {learningSteps.map(({ label, description }, i) => (
                <motion.div
                  key={label}
                  variants={shouldReduceMotion ? undefined : fadeInUp}
                  className="group relative flex items-center gap-6 py-7 sm:gap-8 sm:py-9"
                >
                  {/* Step indicator */}
                  <div className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-background)] transition-all duration-300 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent-subtle)] sm:h-12 sm:w-12">
                    <span className="font-mono text-[0.55rem] font-medium text-[var(--color-accent)] sm:text-[0.65rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-[var(--color-foreground)] sm:text-lg">
                      {label}
                    </h3>
                    <p className="text-sm text-[var(--color-foreground-muted)]">
                      {description}
                    </p>
                  </div>

                  {/* Flow arrow */}
                  {i < learningSteps.length - 1 && (
                    <div className="absolute bottom-1 left-[1.1rem] text-[0.5rem] text-[var(--color-accent)]/40 sm:left-6">
                      ↓
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
