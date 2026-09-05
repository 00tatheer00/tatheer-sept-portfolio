"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const architectureLayers = [
  { label: "Frontend", detail: "React · Next.js · TypeScript", accent: false },
  { label: "API", detail: "REST · GraphQL · WebSockets", accent: true },
  { label: "Backend", detail: "Node.js · Express · NestJS", accent: false },
  { label: "Database", detail: "PostgreSQL · MongoDB · Redis", accent: false },
  { label: "Cloud", detail: "AWS · Vercel · Docker · CI/CD", accent: true },
];

/**
 * 04 — Engineer section.
 * Communicates full-stack understanding through a layered architecture visual.
 */
export function Engineer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="engineer"
      className="relative overflow-hidden bg-[var(--color-background-alt)] py-28 sm:py-36 lg:py-44"
    >
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Copy */}
          <div>
            <Reveal>
              <span className="mb-4 inline-block font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)]">
                01 / Identity
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mb-2 text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em]">
                ENGINEER
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mb-6 font-mono text-sm uppercase tracking-[0.15em] text-[var(--color-foreground-muted)]">
                Building Systems.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mb-6 max-w-md text-base leading-relaxed text-[var(--color-foreground-secondary)]">
                Working across full-stack software engineering — from user
                interfaces to cloud infrastructure. Building SaaS products, web
                applications, APIs, and AI-powered solutions that work at scale.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="max-w-md text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                Every layer of the system is an opportunity to make software
                better — faster, more reliable, more elegant.
              </p>
            </Reveal>
          </div>

          {/* Right: Architecture flow */}
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            {/* Vertical connection line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--color-border)] sm:left-8" />

            <div className="space-y-0">
              {architectureLayers.map(({ label, detail, accent }, i) => (
                <motion.div
                  key={label}
                  variants={shouldReduceMotion ? undefined : fadeInUp}
                  className="group relative flex items-start gap-5 py-6 sm:gap-7 sm:py-8"
                >
                  {/* Node dot */}
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background-alt)] transition-colors duration-300 group-hover:border-[var(--color-accent)]/40 sm:h-16 sm:w-16">
                    <span
                      className={`font-mono text-[0.6rem] font-medium tracking-wider ${
                        accent
                          ? "text-[var(--color-accent)]"
                          : "text-[var(--color-foreground-muted)]"
                      }`}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-1 sm:pt-3">
                    <h3
                      className={`mb-1 text-lg font-semibold tracking-tight sm:text-xl ${
                        accent
                          ? "text-[var(--color-accent)]"
                          : "text-[var(--color-foreground)]"
                      }`}
                    >
                      {label}
                    </h3>
                    <p className="font-mono text-xs text-[var(--color-foreground-muted)] sm:text-sm">
                      {detail}
                    </p>
                  </div>

                  {/* Arrow connector (except last) */}
                  {i < architectureLayers.length - 1 && (
                    <div className="absolute bottom-0 left-6 text-[var(--color-border)] sm:left-8">
                      <span className="text-[0.5rem]">↓</span>
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
