"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const engineeringPrinciples = [
  {
    step: "01",
    phase: "PROBLEM",
    title: "Root Cause Discovery",
    desc: "Dissecting business constraints, user pain, and hidden edge cases before touching a keyboard.",
  },
  {
    step: "02",
    phase: "ARCHITECTURE",
    title: "System & Domain Modeling",
    desc: "Establishing schemas, normalization boundaries, decoupled APIs, and data integrity guarantees.",
  },
  {
    step: "03",
    phase: "BUILD",
    title: "Type-Safe Implementation",
    desc: "Writing clean, idiomatic, self-documenting code with modern functional and OOP patterns.",
  },
  {
    step: "04",
    phase: "TEST",
    title: "Automated Contracts",
    desc: "Validating API payloads, state transitions, regression boundaries, and error flows.",
  },
  {
    step: "05",
    phase: "DEPLOY",
    title: "Zero-Downtime Releases",
    desc: "Automating CI/CD pipelines, containerization, environment security, and edge distribution.",
  },
  {
    step: "06",
    phase: "IMPROVE",
    title: "Telemetry & Iteration",
    desc: "Monitoring latency, memory consumption, real-world user metrics, and scaling gracefully.",
  },
];

const holisticDimensions = [
  { label: "The Problem", note: "Solving the exact pain point, not an assumed one" },
  { label: "The User", note: "Intuitive flows with zero cognitive friction" },
  { label: "The Business", note: "Measurable ROI, conversion, and operational speed" },
  { label: "The Architecture", note: "Decoupled services built to evolve gracefully" },
  { label: "The Data", note: "Strict types, ACID guarantees, and clean migrations" },
  { label: "Security", note: "Sanitized inputs, scoped tokens, and hardened endpoints" },
  { label: "Performance", note: "Sub-second TTFB, optimized assets, and efficient caching" },
  { label: "Deployment", note: "Repeatable containerized builds with rapid rollback" },
  { label: "Maintainability", note: "Code that other engineers can read, extend, and trust" },
];

export function EngineeringPhilosophy() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 md:py-32 border-b border-[var(--color-border)] bg-[var(--color-background)] relative">
      <Container>
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] block mb-3">
            Mindset & Standards
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-foreground)] leading-[1.08] mb-6">
            “I DON&apos;T JUST WRITE CODE.”
          </h2>
          <p className="text-base sm:text-xl text-[var(--color-foreground-muted)] font-light leading-relaxed">
            Anyone can generate syntax. Senior software engineering requires holistic systems
            thinking—balancing user psychology, database trade-offs, operational security, and business viability.
          </p>
        </div>

        {/* 6-Step Engineering Execution Lifecycle */}
        <div className="mb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-foreground-subtle)] mb-6">
            Execution Lifecycle
          </p>
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6"
          >
            {engineeringPrinciples.map((item, idx) => (
              <motion.div
                key={item.phase}
                variants={shouldReduceMotion ? undefined : fadeInUp}
                className="group relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface)]/80"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[0.65rem] text-[var(--color-accent)] font-semibold">
                    {item.step}
                  </span>
                  <span className="font-mono text-[0.65rem] text-[var(--color-foreground-subtle)]">
                    PHASE
                  </span>
                </div>
                <h3 className="font-heading font-bold text-sm text-[var(--color-foreground)] tracking-wide mb-1">
                  {item.phase}
                </h3>
                <p className="text-xs font-medium text-[var(--color-accent)] mb-2">
                  {item.title}
                </p>
                <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                  {item.desc}
                </p>

                {/* Progress arrow indicator on large screens */}
                {idx < engineeringPrinciples.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-[var(--color-border)] text-xs pointer-events-none"
                  >
                    ➔
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 9 Holistic Dimensions Grid */}
        <div>
          <SectionHeading
            label="Holistic Systems Thinking"
            title="THE NINE ENGINEERING DIMENSIONS"
            description="Every production commit is measured against these foundational architectural standards."
            className="mb-10"
          />

          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {holisticDimensions.map((dim) => (
              <motion.div
                key={dim.label}
                variants={shouldReduceMotion ? undefined : fadeInUp}
                className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-4 transition-colors hover:border-[var(--color-border-hover)]"
              >
                <span className="font-mono text-xs text-[var(--color-accent)] mt-0.5">
                  ✓
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--color-foreground)] mb-0.5">
                    {dim.label}
                  </h4>
                  <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                    {dim.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
