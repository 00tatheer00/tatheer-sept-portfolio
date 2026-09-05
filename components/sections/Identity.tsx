"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";

/**
 * 03 — Identity section.
 * Bold editorial statement: I BUILD. I TEACH. I LEAD.
 * Visual reset between hero and content sections.
 */
export function Identity() {
  const shouldReduceMotion = useReducedMotion();

  const pillars = [
    { word: "Technology", label: "Building software & systems" },
    { word: "Education", label: "Teaching & mentoring developers" },
    { word: "Entrepreneurship", label: "Creating organizations & opportunity" },
  ];

  return (
    <section
      id="identity"
      className="relative overflow-hidden py-28 sm:py-36 lg:py-44"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      <Container>
        {/* Large editorial statement */}
        <div className="mb-16 sm:mb-24">
          {["I BUILD.", "I TEACH.", "I LEAD."].map((line, i) => (
            <div key={line} className="overflow-hidden">
              <Reveal delay={i * 0.15}>
                <h2
                  className={`text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.95] tracking-[-0.03em] ${
                    i === 2
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-foreground)]"
                  }`}
                >
                  {line}
                </h2>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Signature Editorial Quote Banner */}
        <Reveal delay={0.25}>
          <div className="mb-14 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-6 sm:p-8 backdrop-blur-sm">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)] block mb-2">
              The Guiding Principle
            </span>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-[var(--color-foreground)] leading-snug">
              &ldquo;I don&apos;t only teach technology. I build the technology behind learning.&rdquo;
            </blockquote>
            <p className="mt-3 font-mono text-xs text-[var(--color-foreground-muted)]">
              Architect of the EEST LMS · Founder of Tech4Edges · University Lecturer
            </p>
          </div>
        </Reveal>

        {/* Intersection explanation */}
        <Reveal delay={0.35}>
          <p className="mb-10 max-w-lg text-base text-[var(--color-foreground-secondary)] sm:text-lg">
            Working at the intersection of three disciplines to create lasting
            impact — not just isolated software.
          </p>
        </Reveal>

        {/* Three pillars */}
        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] sm:grid-cols-3"
        >
          {pillars.map(({ word, label }, i) => (
            <motion.div
              key={word}
              variants={shouldReduceMotion ? undefined : fadeInUp}
              className="group relative bg-[var(--color-surface)] p-8 transition-colors duration-300 hover:bg-[var(--color-surface-hover)] sm:p-10"
            >
              <span className="mb-4 block font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[var(--color-accent)]">
                0{i + 1}
              </span>
              <h3 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                {word}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                {label}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--color-accent)] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
