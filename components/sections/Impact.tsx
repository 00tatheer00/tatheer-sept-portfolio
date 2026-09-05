"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { NumberCounter } from "@/components/animation/NumberCounter";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Students",
    description: "MERN / Full-Stack students trained or mentored",
  },
  {
    value: 200,
    suffix: "+",
    label: "EEST Graduates",
    description: "Students completing Module 1 at EEST",
  },
  {
    value: 15,
    suffix: "K+",
    label: "Followers",
    description: "People following the journey on LinkedIn",
  },
  {
    value: 500,
    suffix: "+",
    label: "Connections",
    description: "Professional connections on LinkedIn",
  },
];

/**
 * 08 — Impact section.
 * Oversized editorial numbers with scroll-triggered counting animation.
 */
export function Impact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-[var(--color-background-alt)] py-28 sm:py-36 lg:py-44"
    >
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      <Container>
        <Reveal>
          <span className="mb-4 inline-block font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Impact
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-20 max-w-2xl text-3xl font-semibold tracking-tight sm:mb-28 sm:text-4xl">
            Numbers that represent
            <br />
            <span className="text-[var(--color-foreground-muted)]">
              real people and real work.
            </span>
          </h2>
        </Reveal>

        {/* Stats grid — oversized editorial layout */}
        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-12 sm:grid-cols-2 lg:gap-16"
        >
          {stats.map(({ value, suffix, label, description }) => (
            <motion.div
              key={label}
              variants={shouldReduceMotion ? undefined : fadeInUp}
              className="group relative border-t border-[var(--color-border)] pt-8 transition-colors hover:border-[var(--color-accent)]/30"
            >
              {/* Large number */}
              <div className="mb-4">
                <NumberCounter
                  value={value}
                  suffix={suffix}
                  duration={2.5}
                  className="text-[clamp(3.5rem,8vw,6rem)] font-bold leading-none tracking-[-0.03em] text-[var(--color-foreground)]"
                />
              </div>

              {/* Label */}
              <h3 className="mb-2 text-lg font-semibold tracking-tight text-[var(--color-foreground)] sm:text-xl">
                {label}
              </h3>

              {/* Description */}
              <p className="max-w-xs text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                {description}
              </p>

              {/* Accent indicator on hover */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-[var(--color-accent)] transition-all duration-500 group-hover:w-16" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
